/**
 * 分流控制器
 * 用于控制加载重构版本还是稳定版本的入口文件
 * 
 * 1、策略类型：
 *  （1）：refactored 新架构包
 *  （2）：stable 主包
 * 
 * 2、分流策略：
 *  （1）：对于第一次进入游戏，默认先进入主包，主包会基于服务器下发策略来判断是否进入主包或者新架构包，
 *      - 如果触发到新架构包方案，则存储：blockblast.distribution.strategy 的值为：refactored，然后通过 cc.game.restart 来重启游戏，进入 distribution.js 文件逻辑，跳到第（3）步以后
 *      - 如果触发到主包方案，则直接进入主包。
 *  （2）：如果非首次进入游戏，则判断本地存储：blockblast.distribution.strategy 是否有值，
 *      - 如果上一次在新架构包，则进入新架构包
 *      - 如果上一次在主包，则进入主包
 *  （3）：先判断本地存储：blockblast.distribution.strategy 是否有值，
 *      - 如果没有值，直接进入主包（stable）
 *      - 如果有值，则根据值进入对应的包，比如：如果值为：refactored，则进入新架构包（refactored），如果值为：stable，则进入主包（stable）
 *  （4）：blockblast.distribution.strategy 值的修改由主包（stable）的服务器下发逻辑决策
 *      - 如果服务器下发方案为新架构包（refactored），则主包（stable）设置 blockblast.distribution.strategy 的值为 refactored，然后主包执行重启
 *      - 如果服务器下发方案为其它逻辑，则主包（stable）设置 blockblast.distribution.strategy 的值为 stable，主包直接执行
 *  （5）：如果分流出现了一些异常，则直接进入主包
 * 
 * 3、锁版策略：
 *  （1）： 第一次分流到新架构包，则后面只要不清除缓存，则用户会一直会停留在新架构包
 *  （2）： 第一次分流到新主包，则后面只要不清除缓存，则用户会一直会停留在主包
 * 
 * 4、生效策略：
 *  （1）：暂不支持热更该文件，随发板更来更新
 * 
 * 5、分流切换：
 *  （1）：如果用户已经第一次通过分流固定了，而又想重新主动切换：
 *      - 例如：用户可能通过第一次分流进入了【新架构包】，后面想将其导入到【主包】，则可在【新架构包】里添加一套逻辑来设置：blockblast.distribution.strategy 存储值为：stable，下次进入的时候就会进入【主包】了（可通过热更来切换）
 *      - 例如：用户可能通过第一次分流进入了【主包】，后面想将其导入到【新架构包】，则可在【主包】里添加一套逻辑来设置：blockblast.distribution.strategy 存储值为：refactored，下次进入的时候就会进入【新架构包】了（可通过热更来切换）
 *  （2）：切换时一定要做好兼容
 *      - 目前所有的兼容暂定在新架构包里做
 * 
 * 6、新架构包如何与主包融合
 * （1）：main.js 替换原主包 main.js
 * （2）：distribution.js、main.refactored.js、main.stable.js 放在 src 目录下
 * （3）：主包 main.js 文件内容替换到文件：main.stable.js 中
 * （4）：新架构包的 src/settings.(js|jsb) 放于主包：src/refactored/settings.(js|jsb) 下
 * （5）：新架构包的 src/assets/libs/* 下的文件与主包的 src/assets/libs/* 合并，文件不能同名，否则会发生覆盖
 * （6）：新架构包的 src/cocos2d-jsb.(js|jsb) 放于主包：src/refactored/cocos2d-jsb.(js|jsb) 下
 * （7）：新架构包的 jsb-adapter/jsb-engine.js 放于主包：jsb-adapter/refactored/jsb-engine.js 下
 * （8）：新架构包的 assets/* 所有 bundle 文件放在主包的 assets/* 下，但新架构包的 main、internal、resources bundle 重命名为：refactoredMain、refactoredInternal、refactoredResources，其它 bundle 名不能与主包冲突
 */

const stableTranslateGameWayNum = localStorage.getItem(`blockblast.gameWayNum`);
console.log('stableTranslateGameWayNum:' + stableTranslateGameWayNum);
let __requireStrategy;
try {
    /**
     * 获取分流策略（返回值为字符串类型）
     * 
     */
    const distributionStrategyKey = 'blockblast.distribution.strategy';
    let strategy = localStorage.getItem(distributionStrategyKey);
    if (!strategy) {
        strategy = 'stable';
        localStorage.setItem(distributionStrategyKey, strategy);
    }

    // 分流
    console.log('[Distribution] Loading ' + strategy + ' version strategy');

    if (strategy === 'refactored') {
        // 加载新架构包（重构版）
        require('src/main.refactored.js');
        __requireStrategy = 'refactored';
    } else {
        // 加载主包（稳定版）
        require('src/main.stable.js');
        __requireStrategy = 'stable';
        // 进入主包标志
        localStorage.setItem('blockblast.entry.stable', true);
    }
} catch (error) {
    console.error('[Distribution] Error occurred Test:', __requireStrategy, error.stack);
    /** 异常打点上报 */
    if (window.jsb) {
        // 必须是数组
        new JavascriptJavaBridge().callStaticMethod("org/cocos2dx/javascript/AppActivity", "callNativeDataUpload", "(Ljava/lang/String;)V", JSON.stringify([{
            name: 'usr_distribution_error',
            error: error.stack
        }]));
    }

    if (!__requireStrategy) {
        // 异常情况下的处理
        const distributionStrategyKey = 'blockblast.distribution.strategy';
        let strategy = localStorage.getItem(distributionStrategyKey);
        let currentStrategy;
        if (strategy) {
            currentStrategy = strategy;
            if (strategy === 'refactored') {
                // 加载新架构包（重构版）
                require('src/main.refactored.js');
            } else {
                // 加载主包（稳定版）
                require('src/main.stable.js');
            }
        } else {
            currentStrategy = "stable";
            // 异常情况下回到稳定版
            require('src/main.stable.js');
            // 进入主包标志
            localStorage.setItem('blockblast.entry.stable', true);
        }

        // 异常情况下上报用户属性信息给原生，以便于在数数平台筛选数据
        console.error('[Distribution] Error occurred, fallback to', currentStrategy, 'error:', error);
    }
}