/** 
 * 新架构包与主包融合
 * 设计原则：
 * （1）：只有真机环境下才替换默认的 main.js 
 */
if (window.jsb) {
    require('src/distribution.js');
}