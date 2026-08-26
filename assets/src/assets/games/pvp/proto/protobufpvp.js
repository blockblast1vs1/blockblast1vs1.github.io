var $Reader = protobuf.Reader,
    $Writer = protobuf.Writer,
    $util = protobuf.util,
    $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.proto = function() {
    var e = {};
    e.AsyncPvPReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.match = null;
        e.prototype.result = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["match", "result"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.match && Object.hasOwnProperty.call(e, "match") && $root.proto.AsyncPvPMatchReq.encode(e.match, t.uint32(10).fork()).ldelim();
            null != e.result && Object.hasOwnProperty.call(e, "result") && $root.proto.AsyncPvPResultReq.encode(e.result, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.match = $root.proto.AsyncPvPMatchReq.decode(e, e.uint32());
                        break;

                    case 2:
                        r.result = $root.proto.AsyncPvPResultReq.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.match = null;
        e.prototype.result = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["match", "result"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.match && Object.hasOwnProperty.call(e, "match") && $root.proto.AsyncPvPMatchRsp.encode(e.match, t.uint32(82).fork()).ldelim();
            null != e.result && Object.hasOwnProperty.call(e, "result") && $root.proto.AsyncPvPResultRsp.encode(e.result, t.uint32(90).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 10:
                        r.match = $root.proto.AsyncPvPMatchRsp.decode(e, e.uint32());
                        break;

                    case 11:
                        r.result = $root.proto.AsyncPvPResultRsp.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.traitId = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.traitId && Object.hasOwnProperty.call(e, "traitId") && t.uint32(8).uint32(e.traitId);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.traitId = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPMatchRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.userName = "";
        e.prototype.player = null;
        e.prototype.expireTime = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(18).string(e.userName);
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.AsyncPvPData.encode(e.player, t.uint32(26).fork()).ldelim();
            null != e.expireTime && Object.hasOwnProperty.call(e, "expireTime") && t.uint32(32).int64(e.expireTime);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPMatchRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userId = e.string();
                        break;

                    case 2:
                        r.userName = e.string();
                        break;

                    case 3:
                        r.player = $root.proto.AsyncPvPData.decode(e, e.uint32());
                        break;

                    case 4:
                        r.expireTime = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPResultReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.data = null;
        e.prototype.result = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.data && Object.hasOwnProperty.call(e, "data") && $root.proto.AsyncPvPData.encode(e.data, t.uint32(10).fork()).ldelim();
            null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(16).int32(e.result);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPResultReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.data = $root.proto.AsyncPvPData.decode(e, e.uint32());
                        break;

                    case 2:
                        r.result = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPResultRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPResultRsp(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPData = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.traitId = 0;
        e.prototype.groupId = 0;
        e.prototype.typeId = 0;
        e.prototype.content = $util.newBuffer([]);
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.traitId && Object.hasOwnProperty.call(e, "traitId") && t.uint32(8).uint32(e.traitId);
            null != e.groupId && Object.hasOwnProperty.call(e, "groupId") && t.uint32(16).uint32(e.groupId);
            null != e.typeId && Object.hasOwnProperty.call(e, "typeId") && t.uint32(24).uint32(e.typeId);
            null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(34).bytes(e.content);
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(40).int64(e.score);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.traitId = e.uint32();
                        break;

                    case 2:
                        r.groupId = e.uint32();
                        break;

                    case 3:
                        r.typeId = e.uint32();
                        break;

                    case 4:
                        r.content = e.bytes();
                        break;

                    case 5:
                        r.score = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AsyncPvPInternalData = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.traitId = 0;
        e.prototype.groupId = 0;
        e.prototype.typeId = 0;
        e.prototype.content = null;
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.traitId && Object.hasOwnProperty.call(e, "traitId") && t.uint32(8).uint32(e.traitId);
            null != e.groupId && Object.hasOwnProperty.call(e, "groupId") && t.uint32(16).uint32(e.groupId);
            null != e.typeId && Object.hasOwnProperty.call(e, "typeId") && t.uint32(24).uint32(e.typeId);
            null != e.content && Object.hasOwnProperty.call(e, "content") && $root.proto.GameContent.encode(e.content, t.uint32(34).fork()).ldelim();
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(40).int64(e.score);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AsyncPvPInternalData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.traitId = e.uint32();
                        break;

                    case 2:
                        r.groupId = e.uint32();
                        break;

                    case 3:
                        r.typeId = e.uint32();
                        break;

                    case 4:
                        r.content = $root.proto.GameContent.decode(e, e.uint32());
                        break;

                    case 5:
                        r.score = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameContent = function() {
        function e(e) {
            this.rounds = {};
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.board = null;
        e.prototype.rounds = $util.emptyObject;
        e.prototype.robotId = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.board && Object.hasOwnProperty.call(e, "board") && $root.proto.BoardData.encode(e.board, t.uint32(10).fork()).ldelim();
            if (null != e.rounds && Object.hasOwnProperty.call(e, "rounds"))
                for (var o = Object.keys(e.rounds), r = 0; r < o.length; ++r) {
                    t.uint32(18).fork().uint32(8).int32(o[r]);
                    $root.proto.RoundData.encode(e.rounds[o[r]], t.uint32(18).fork()).ldelim().ldelim();
                }
            null != e.robotId && Object.hasOwnProperty.call(e, "robotId") && t.uint32(24).uint32(e.robotId);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o, r, n = void 0 === t ? e.len : e.pos + t, a = new $root.proto.GameContent(); e.pos < n;) {
                var i = e.uint32();
                switch (i >>> 3) {
                    case 1:
                        a.board = $root.proto.BoardData.decode(e, e.uint32());
                        break;

                    case 2:
                        a.rounds === $util.emptyObject && (a.rounds = {});
                        var c = e.uint32() + e.pos;
                        o = 0;
                        r = null;
                        for (; e.pos < c;) {
                            var l = e.uint32();
                            switch (l >>> 3) {
                                case 1:
                                    o = e.int32();
                                    break;

                                case 2:
                                    r = $root.proto.RoundData.decode(e, e.uint32());
                                    break;

                                default:
                                    e.skipType(7 & l);
                            }
                        }
                        a.rounds[o] = r;
                        break;

                    case 3:
                        a.robotId = e.uint32();
                        break;

                    default:
                        e.skipType(7 & i);
                }
            }
            return a;
        };
        return e;
    }();
    e.RoundData = function() {
        function e(e) {
            this.options = [];
            this.record = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.options = $util.emptyArray;
        e.prototype.record = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.options && e.options.length)
                for (var o = 0; o < e.options.length; ++o) $root.proto.OptionData.encode(e.options[o], t.uint32(10).fork()).ldelim();
            if (null != e.record && e.record.length)
                for (o = 0; o < e.record.length; ++o) $root.proto.EffectInfo.encode(e.record[o], t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoundData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.options && r.options.length || (r.options = []);
                        r.options.push($root.proto.OptionData.decode(e, e.uint32()));
                        break;

                    case 2:
                        r.record && r.record.length || (r.record = []);
                        r.record.push($root.proto.EffectInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MatchID = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "MATCH_ID_NULL"] = 0;
        t[e[10001] = "MATCH_ID_10001"] = 10001;
        t[e[30001] = "MATCH_ID_30001"] = 30001;
        t[e[30003] = "MATCH_ID_30003"] = 30003;
        t[e[30008] = "MATCH_ID_30008"] = 30008;
        t[e[40002] = "MATCH_ID_40002"] = 40002;
        t[e[50002] = "MATCH_ID_50002"] = 50002;
        return t;
    }();
    e.GameType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "game_type_null"] = 0;
        t[e[1] = "game_type_2Player_pvp"] = 1;
        t[e[2] = "game_type_8Player_pvp"] = 2;
        t[e[3] = "game_type_oneshot_pvp"] = 3;
        t[e[4] = "game_type_facetoface_pvp"] = 4;
        t[e[5] = "game_type_endless_pvp"] = 5;
        t[e[6] = "game_type_sync_pvp"] = 6;
        return t;
    }();
    e.PlayerType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "player_type_human"] = 0;
        t[e[1] = "player_type_robot"] = 1;
        return t;
    }();
    e.EffectEnum = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "NULL"] = 0;
        t[e[1] = "CLEAR_ROWCOL"] = 1;
        t[e[2] = "DELETE"] = 2;
        t[e[3] = "DEL_CACHE_TRASH"] = 3;
        t[e[4] = "DEL_BOARD_TRASH"] = 4;
        t[e[5] = "ADD_TRASH_REQ"] = 5;
        t[e[6] = "TRASH_BLOCK"] = 6;
        t[e[7] = "ADD_TRASH"] = 7;
        t[e[8] = "ADD_CACHE_TRASH"] = 8;
        t[e[9] = "OPTION_CREATE"] = 9;
        t[e[10] = "INIT_BOARD"] = 10;
        t[e[11] = "OPTION_PUTON"] = 11;
        t[e[12] = "OTHERINFO_REQ"] = 12;
        t[e[13] = "OTHERINFO_ACK"] = 13;
        t[e[14] = "SYNC_INFO_REQ"] = 14;
        t[e[15] = "SYNC_INFO_ACK"] = 15;
        return t;
    }();
    e.GameMessageDefine = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "META_TYPE_NULL"] = 0;
        t[e[1] = "META_TYPE_GameACK"] = 1;
        t[e[2] = "META_TYPE_PingACK"] = 2;
        t[e[5] = "META_TYPE_CloseClientACK"] = 5;
        t[e[6] = "META_TYPE_ClientClosedACK"] = 6;
        t[e[7] = "META_TYPE_TransmitACK"] = 7;
        t[e[8] = "META_TYPE_SubscribeChannelREQ"] = 8;
        t[e[9] = "META_TYPE_SubscribeChannelACK"] = 9;
        t[e[10] = "META_TYPE_SvcStatusACK"] = 10;
        t[e[13] = "META_TYPE_DataTransferCodeReq"] = 13;
        t[e[14] = "META_TYPE_DataTransferCodeRsp"] = 14;
        t[e[15] = "META_TYPE_UserDataMessage"] = 15;
        t[e[16] = "META_TYPE_TransferDataRsp"] = 16;
        t[e[17] = "META_TYPE_UserGameMessage"] = 17;
        t[e[18] = "META_TYPE_UserMatchMessage"] = 18;
        t[e[19] = "META_TYPE_MatchAckMessage"] = 19;
        t[e[20] = "META_TYPE_UserRoomMessage"] = 20;
        t[e[21] = "META_TYPE_RoomAckMessage"] = 21;
        t[e[24] = "META_TYPE_Match2GameMessage"] = 24;
        t[e[25] = "META_TYPE_Game2MatchMessage"] = 25;
        t[e[26] = "META_TYPE_Match2AgentMessage"] = 26;
        t[e[27] = "META_TYPE_MsgPackRsp"] = 27;
        t[e[28] = "META_TYPE_MsgPackReq"] = 28;
        t[e[29] = "META_TYPE_ReqHeader"] = 29;
        t[e[30] = "META_TYPE_RspHeader"] = 30;
        t[e[31] = "META_TYPE_Agent2MatchMessage"] = 31;
        t[e[32] = "META_TYPE_Agent2GameMessage"] = 32;
        t[e[33] = "META_TYPE_Game2AgentMessage"] = 33;
        t[e[34] = "META_TYPE_UserAgentMessage"] = 34;
        t[e[35] = "META_TYPE_AgentAckMessage"] = 35;
        t[e[36] = "META_TYPE_OneShotMessage"] = 36;
        t[e[37] = "META_TYPE_OneShotAckMessage"] = 37;
        t[e[131] = "META_TYPE_Agent2MatchMessageTrans"] = 131;
        t[e[200] = "META_TYPE_AsyncPvPReq"] = 200;
        t[e[201] = "META_TYPE_AsyncPvPRsp"] = 201;
        return t;
    }();
    e.Errno = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "SUCCESS"] = 0;
        t[e[1] = "FAIL"] = 1;
        t[e[2] = "PlayerExist"] = 2;
        t[e[3] = "Match_PlayerInMatch"] = 3;
        t[e[4] = "Match_PlayerInGame"] = 4;
        t[e[5] = "CancleMatch_NotFindPlayer"] = 5;
        t[e[6] = "NIKENAME_TOOLONG"] = 6;
        t[e[7] = "Program_Err"] = 7;
        t[e[8] = "Match_Gaming"] = 8;
        t[e[9] = "Match_NoMatchServer"] = 9;
        t[e[10] = "Match_Matching"] = 10;
        t[e[11] = "ReMatch_InvalidStatus"] = 11;
        t[e[12] = "ReMatch_PlayerNotExist"] = 12;
        t[e[13] = "FdTable_Match_Not_Exist"] = 13;
        t[e[14] = "FdTable_Match_Pause"] = 14;
        t[e[15] = "FdTable_Version_Verification_Failed"] = 15;
        t[e[16] = "FdTable_Table_Full"] = 16;
        t[e[17] = "FdTable_Table_Not_Exist"] = 17;
        t[e[18] = "FdTable_Player_In_Table"] = 18;
        t[e[19] = "FdTable_Matching"] = 19;
        t[e[20] = "FdTable_Gaming"] = 20;
        t[e[21] = "FdTable_Table_UnCapacity"] = 21;
        t[e[22] = "FdTable_GameSvr_Panic"] = 22;
        t[e[23] = "User_Load_Err"] = 23;
        t[e[24] = "TransferCode_Unexist"] = 24;
        t[e[25] = "CancleMatch_NotInMatch"] = 25;
        t[e[26] = "TransferSelf"] = 26;
        t[e[27] = "TransferInMatch"] = 27;
        t[e[28] = "Game_Match_Not_Exist"] = 28;
        t[e[29] = "FdTable_Players_limit"] = 29;
        t[e[30] = "Cache_Game_Result_Not_Exist"] = 30;
        t[e[31] = "Login_repeated_other_client"] = 31;
        t[e[32] = "Cache_Game_Result_Gaming"] = 32;
        t[e[33] = "DBProxy_Error"] = 33;
        t[e[34] = "Msg_Pack_Err"] = 34;
        t[e[35] = "DBProxy_Del_Err"] = 35;
        t[e[36] = "DBProxy_Set_Err"] = 36;
        t[e[37] = "DBProxy_InsertOne_Err"] = 37;
        t[e[38] = "DBProxy_Bson_Err"] = 38;
        t[e[39] = "DBProxy_UpdateOne_Err"] = 39;
        t[e[40] = "DBProxy_InsertMany_Err"] = 40;
        t[e[41] = "DBProxy_UpdateMany_Err"] = 41;
        t[e[42] = "DBProxy_FindOne_Err"] = 42;
        t[e[43] = "DBProxy_DeleteOne_Err"] = 43;
        t[e[44] = "DBProxy_FindMany_Err"] = 44;
        t[e[45] = "ParseJWT_Err"] = 45;
        t[e[46] = "NoRespHeader_Err"] = 46;
        t[e[47] = "Account_Bind_Already"] = 47;
        t[e[48] = "Account_Unexist"] = 48;
        t[e[49] = "ErrNoDocuments"] = 49;
        t[e[50] = "Kick_Error"] = 50;
        t[e[51] = "Skip_DB_Save"] = 51;
        t[e[52] = "DBProxy_RemoveData_Err"] = 52;
        t[e[53] = "UnBindAccount_Err"] = 53;
        t[e[54] = "Bson_Marshal_Err"] = 54;
        t[e[55] = "Require_Relogin"] = 55;
        t[e[56] = "Match_ParmError_NoMatchID"] = 56;
        t[e[70] = "RandomMatch_Players_limit"] = 70;
        t[e[71] = "RandomMatch_PoolID_Err"] = 71;
        t[e[100] = "RandomMatch_MatchTimeOut_BotGame"] = 100;
        t[e[101] = "CreateRoom_None_Available"] = 101;
        t[e[102] = "EnterRoom_Not_Exist"] = 102;
        t[e[103] = "EnterRoom_Full"] = 103;
        t[e[104] = "EnterRoom_AlreadyIn"] = 104;
        t[e[105] = "EnterRoom_GameOver"] = 105;
        t[e[106] = "Room_Start_Game_Not_Owner"] = 106;
        t[e[107] = "Room_Start_Game_Player_Less"] = 107;
        t[e[108] = "Room_Start_Game_Already"] = 108;
        t[e[109] = "Room_Change_NickName_No_Waiting"] = 109;
        t[e[110] = "NickName_Too_Short"] = 110;
        t[e[111] = "NickName_Too_Long"] = 111;
        t[e[112] = "NickName_Duplicate"] = 112;
        t[e[113] = "NickName_Has_Sensitive"] = 113;
        t[e[114] = "Room_Game_Is_Over"] = 114;
        t[e[115] = "Room_Game_Is_Dead"] = 115;
        t[e[116] = "Room_User_Not_In"] = 116;
        t[e[117] = "Room_Reconnect_Already_Quit"] = 117;
        t[e[200] = "AsyncPvP_GameTimeOut"] = 200;
        t[e[201] = "OneShot_Game_Not_Exist"] = 201;
        t[e[202] = "OneShot_Game_Already_Over"] = 202;
        t[e[203] = "OneShot_User_Not_In"] = 203;
        t[e[204] = "OneShot_Round_Already_Over"] = 204;
        t[e[205] = "OneShot_Round_Already_Sync"] = 205;
        return t;
    }();
    e.ReMatchStatus = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "ReMatchStatus_Normal"] = 0;
        t[e[1] = "ReMatchStatus_Again"] = 1;
        t[e[2] = "ReMatchStatus_Level"] = 2;
        return t;
    }();
    e.MatchType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "MatchType_UnKnown"] = 0;
        t[e[1] = "MatchType_Secret"] = 1;
        t[e[2] = "MatchType_Random"] = 2;
        t[e[3] = "MatchType_Bot"] = 3;
        t[e[4] = "MatchType_AsyncPvP"] = 4;
        t[e[5] = "MatchType_Room"] = 5;
        return t;
    }();
    e.MatchingMode = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "Matching_Random"] = 0;
        t[e[1] = "Matching_Rank"] = 1;
        return t;
    }();
    e.GameResult = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "GameResult_Win"] = 0;
        t[e[1] = "GameResult_Lose"] = 1;
        t[e[2] = "GameResult_Draw"] = 2;
        return t;
    }();
    e.ResultCode = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "NoError"] = 0;
        t[e[101] = "AgentNotFound"] = 101;
        t[e[102] = "AgentAddressError"] = 102;
        t[e[103] = "GameNotFound"] = 103;
        return t;
    }();
    e.OSType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "ENUM_OSTYPE_RESERVE"] = 0;
        t[e[1] = "ENUM_OSTYPE_ANDROID"] = 1;
        t[e[2] = "ENUM_OSTYPE_IOS"] = 2;
        t[e[3] = "ENUM_OSTYPE_WINDOWS"] = 3;
        return t;
    }();
    e.NetWorkingMode = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "ENUM_NETWORKINGMODE_RESERVE"] = 0;
        t[e[1] = "ENUM_NETWORKINGMODE_WIFI"] = 1;
        t[e[2] = "ENUM_NETWORKINGMODE_2G"] = 2;
        t[e[3] = "ENUM_NETWORKINGMODE_3G"] = 3;
        t[e[4] = "ENUM_NETWORKINGMODE_4G"] = 4;
        t[e[5] = "ENUM_NETWORKINGMODE_5G"] = 5;
        return t;
    }();
    e.EHeader = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "DataTransferCode"] = 0;
        t[e[1] = "TransferData"] = 1;
        t[e[2] = "Login"] = 2;
        t[e[3] = "Rename"] = 3;
        t[e[4] = "BindAccount"] = 4;
        t[e[5] = "UnBindAccount"] = 5;
        t[e[6] = "NeedSelectData"] = 6;
        t[e[7] = "PlayerSync"] = 7;
        t[e[8] = "SelectData"] = 8;
        t[e[9] = "LogoutAccount"] = 9;
        return t;
    }();
    e.EOperatorType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "Default"] = 0;
        t[e[1] = "LeaveRoom"] = 1;
        return t;
    }();
    e.ECancelMatchType = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "Match"] = 0;
        t[e[1] = "ReMatch"] = 1;
        return t;
    }();
    e.EPlayerMatchState = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "Prepare"] = 0;
        t[e[1] = "WaittingMatch"] = 1;
        t[e[2] = "Gaming"] = 2;
        t[e[3] = "Matching"] = 3;
        t[e[4] = "Over"] = 4;
        return t;
    }();
    e.EPVPBlockDeadReason = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "None"] = 0;
        t[e[1] = "RecvTrashOverFlow"] = 1;
        t[e[2] = "NoSpaceOptionInit"] = 2;
        t[e[3] = "NoSpaceTrash"] = 3;
        t[e[4] = "NoSpaceCalEnd"] = 4;
        t[e[5] = "GiveUp"] = 5;
        t[e[6] = "TalentNet"] = 6;
        t[e[7] = "RobotPerform"] = 7;
        t[e[8] = "RobotStrategyFailed"] = 8;
        t[e[9] = "RobotNoPos"] = 9;
        t[e[10] = "LeaveRoomBtn"] = 10;
        t[e[11] = "TimeOut"] = 11;
        t[e[12] = "Disconnect"] = 12;
        return t;
    }();
    e.EScoreKey = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "EScoreKeyNon"] = 0;
        t[e[10000001] = "CommonMatch1v1"] = 10000001;
        t[e[10000002] = "RankMatch1v1"] = 10000002;
        return t;
    }();
    e.RoomState = function() {
        var e = {},
            t = Object.create(e);
        t[e[0] = "RoomState_None"] = 0;
        t[e[1] = "RoomState_Waiting"] = 1;
        t[e[2] = "RoomState_Starting"] = 2;
        t[e[3] = "RoomState_Gaming"] = 3;
        t[e[4] = "RoomState_Over"] = 4;
        t[e[5] = "RoomState_Closed"] = 5;
        return t;
    }();
    e.PlayerInfo = function() {
        function e(e) {
            this.Scores = {};
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.nickname = "";
        e.prototype.AgentSvcID = "";
        e.prototype.WinNum = 0;
        e.prototype.TotalNum = 0;
        e.prototype.GameVersion = "";
        e.prototype.SdkVersion = "";
        e.prototype.transferCode = "";
        e.prototype.loseNum = 0;
        e.prototype.account = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.PKScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.RankScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.Scores = $util.emptyObject;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.nickname && Object.hasOwnProperty.call(e, "nickname") && t.uint32(18).string(e.nickname);
            null != e.AgentSvcID && Object.hasOwnProperty.call(e, "AgentSvcID") && t.uint32(50).string(e.AgentSvcID);
            null != e.WinNum && Object.hasOwnProperty.call(e, "WinNum") && t.uint32(56).int32(e.WinNum);
            null != e.TotalNum && Object.hasOwnProperty.call(e, "TotalNum") && t.uint32(64).int32(e.TotalNum);
            null != e.GameVersion && Object.hasOwnProperty.call(e, "GameVersion") && t.uint32(74).string(e.GameVersion);
            null != e.SdkVersion && Object.hasOwnProperty.call(e, "SdkVersion") && t.uint32(82).string(e.SdkVersion);
            null != e.transferCode && Object.hasOwnProperty.call(e, "transferCode") && t.uint32(90).string(e.transferCode);
            null != e.loseNum && Object.hasOwnProperty.call(e, "loseNum") && t.uint32(104).int32(e.loseNum);
            null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(112).int64(e.account);
            null != e.PKScore && Object.hasOwnProperty.call(e, "PKScore") && t.uint32(168).int64(e.PKScore);
            null != e.RankScore && Object.hasOwnProperty.call(e, "RankScore") && t.uint32(176).int64(e.RankScore);
            if (null != e.Scores && Object.hasOwnProperty.call(e, "Scores"))
                for (var o = Object.keys(e.Scores), r = 0; r < o.length; ++r) {
                    t.uint32(186).fork().uint32(8).int64(o[r]);
                    $root.proto.ScoreDataInfo.encode(e.Scores[o[r]], t.uint32(18).fork()).ldelim().ldelim();
                }
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o, r, n = void 0 === t ? e.len : e.pos + t, a = new $root.proto.PlayerInfo(); e.pos < n;) {
                var i = e.uint32();
                switch (i >>> 3) {
                    case 1:
                        a.userId = e.string();
                        break;

                    case 2:
                        a.nickname = e.string();
                        break;

                    case 6:
                        a.AgentSvcID = e.string();
                        break;

                    case 7:
                        a.WinNum = e.int32();
                        break;

                    case 8:
                        a.TotalNum = e.int32();
                        break;

                    case 9:
                        a.GameVersion = e.string();
                        break;

                    case 10:
                        a.SdkVersion = e.string();
                        break;

                    case 11:
                        a.transferCode = e.string();
                        break;

                    case 13:
                        a.loseNum = e.int32();
                        break;

                    case 14:
                        a.account = e.int64();
                        break;

                    case 21:
                        a.PKScore = e.int64();
                        break;

                    case 22:
                        a.RankScore = e.int64();
                        break;

                    case 23:
                        a.Scores === $util.emptyObject && (a.Scores = {});
                        var c = e.uint32() + e.pos;
                        o = 0;
                        r = null;
                        for (; e.pos < c;) {
                            var l = e.uint32();
                            switch (l >>> 3) {
                                case 1:
                                    o = e.int64();
                                    break;

                                case 2:
                                    r = $root.proto.ScoreDataInfo.decode(e, e.uint32());
                                    break;

                                default:
                                    e.skipType(7 & l);
                            }
                        }
                        a.Scores["object" == typeof o ? $util.longToHash(o) : o] = r;
                        break;

                    default:
                        e.skipType(7 & i);
                }
            }
            return a;
        };
        return e;
    }();
    e.ScoreDataInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.KeyID = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.Score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.KeyID && Object.hasOwnProperty.call(e, "KeyID") && t.uint32(8).int64(e.KeyID);
            null != e.Score && Object.hasOwnProperty.call(e, "Score") && t.uint32(16).int64(e.Score);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ScoreDataInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.KeyID = e.int64();
                        break;

                    case 2:
                        r.Score = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GamePlayerInfo = function() {
        function e(e) {
            this.SlaveUids = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.UserID = "";
        e.prototype.NickName = "";
        e.prototype.TotalNum = 0;
        e.prototype.WinNum = 0;
        e.prototype.LoseNum = 0;
        e.prototype.pos = 0;
        e.prototype.result = 0;
        e.prototype.reason = 0;
        e.prototype.MatchingMode = 0;
        e.prototype.ScoreKeyID = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.PKScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.RankScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.PKScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.RankScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.Score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.ScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.rank = 0;
        e.prototype.OutRoundState = 0;
        e.prototype.KOCount = 0;
        e.prototype.PlayerType = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.HostUid = "";
        e.prototype.SlaveUids = $util.emptyArray;
        e.prototype.BattleDeathTimestampMs = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.MaxHp = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.UserID && Object.hasOwnProperty.call(e, "UserID") && t.uint32(10).string(e.UserID);
            null != e.NickName && Object.hasOwnProperty.call(e, "NickName") && t.uint32(18).string(e.NickName);
            null != e.TotalNum && Object.hasOwnProperty.call(e, "TotalNum") && t.uint32(24).int32(e.TotalNum);
            null != e.WinNum && Object.hasOwnProperty.call(e, "WinNum") && t.uint32(32).int32(e.WinNum);
            null != e.LoseNum && Object.hasOwnProperty.call(e, "LoseNum") && t.uint32(40).int32(e.LoseNum);
            null != e.pos && Object.hasOwnProperty.call(e, "pos") && t.uint32(88).int32(e.pos);
            null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(96).int32(e.result);
            null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(104).int32(e.reason);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(112).uint32(e.MatchingMode);
            null != e.ScoreKeyID && Object.hasOwnProperty.call(e, "ScoreKeyID") && t.uint32(120).int64(e.ScoreKeyID);
            null != e.PKScore && Object.hasOwnProperty.call(e, "PKScore") && t.uint32(168).int64(e.PKScore);
            null != e.RankScore && Object.hasOwnProperty.call(e, "RankScore") && t.uint32(176).int64(e.RankScore);
            null != e.PKScoreChange && Object.hasOwnProperty.call(e, "PKScoreChange") && t.uint32(184).int64(e.PKScoreChange);
            null != e.RankScoreChange && Object.hasOwnProperty.call(e, "RankScoreChange") && t.uint32(192).int64(e.RankScoreChange);
            null != e.Score && Object.hasOwnProperty.call(e, "Score") && t.uint32(200).int64(e.Score);
            null != e.ScoreChange && Object.hasOwnProperty.call(e, "ScoreChange") && t.uint32(208).int64(e.ScoreChange);
            null != e.rank && Object.hasOwnProperty.call(e, "rank") && t.uint32(216).int32(e.rank);
            null != e.OutRoundState && Object.hasOwnProperty.call(e, "OutRoundState") && t.uint32(224).int32(e.OutRoundState);
            null != e.KOCount && Object.hasOwnProperty.call(e, "KOCount") && t.uint32(232).int32(e.KOCount);
            null != e.PlayerType && Object.hasOwnProperty.call(e, "PlayerType") && t.uint32(240).int64(e.PlayerType);
            null != e.HostUid && Object.hasOwnProperty.call(e, "HostUid") && t.uint32(250).string(e.HostUid);
            if (null != e.SlaveUids && e.SlaveUids.length)
                for (var o = 0; o < e.SlaveUids.length; ++o) t.uint32(258).string(e.SlaveUids[o]);
            null != e.BattleDeathTimestampMs && Object.hasOwnProperty.call(e, "BattleDeathTimestampMs") && t.uint32(264).int64(e.BattleDeathTimestampMs);
            null != e.MaxHp && Object.hasOwnProperty.call(e, "MaxHp") && t.uint32(272).int32(e.MaxHp);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GamePlayerInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.UserID = e.string();
                        break;

                    case 2:
                        r.NickName = e.string();
                        break;

                    case 3:
                        r.TotalNum = e.int32();
                        break;

                    case 4:
                        r.WinNum = e.int32();
                        break;

                    case 5:
                        r.LoseNum = e.int32();
                        break;

                    case 11:
                        r.pos = e.int32();
                        break;

                    case 12:
                        r.result = e.int32();
                        break;

                    case 13:
                        r.reason = e.int32();
                        break;

                    case 14:
                        r.MatchingMode = e.uint32();
                        break;

                    case 15:
                        r.ScoreKeyID = e.int64();
                        break;

                    case 21:
                        r.PKScore = e.int64();
                        break;

                    case 22:
                        r.RankScore = e.int64();
                        break;

                    case 23:
                        r.PKScoreChange = e.int64();
                        break;

                    case 24:
                        r.RankScoreChange = e.int64();
                        break;

                    case 25:
                        r.Score = e.int64();
                        break;

                    case 26:
                        r.ScoreChange = e.int64();
                        break;

                    case 27:
                        r.rank = e.int32();
                        break;

                    case 28:
                        r.OutRoundState = e.int32();
                        break;

                    case 29:
                        r.KOCount = e.int32();
                        break;

                    case 30:
                        r.PlayerType = e.int64();
                        break;

                    case 31:
                        r.HostUid = e.string();
                        break;

                    case 32:
                        r.SlaveUids && r.SlaveUids.length || (r.SlaveUids = []);
                        r.SlaveUids.push(e.string());
                        break;

                    case 33:
                        r.BattleDeathTimestampMs = e.int64();
                        break;

                    case 34:
                        r.MaxHp = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.PlayerGamePersistentData = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.TotalNum = 0;
        e.prototype.WinNum = 0;
        e.prototype.LoseNum = 0;
        e.prototype.Score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.PKScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.RankScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.TotalNum && Object.hasOwnProperty.call(e, "TotalNum") && t.uint32(8).int32(e.TotalNum);
            null != e.WinNum && Object.hasOwnProperty.call(e, "WinNum") && t.uint32(16).int32(e.WinNum);
            null != e.LoseNum && Object.hasOwnProperty.call(e, "LoseNum") && t.uint32(24).int32(e.LoseNum);
            null != e.Score && Object.hasOwnProperty.call(e, "Score") && t.uint32(168).int64(e.Score);
            null != e.PKScore && Object.hasOwnProperty.call(e, "PKScore") && t.uint32(176).int64(e.PKScore);
            null != e.RankScore && Object.hasOwnProperty.call(e, "RankScore") && t.uint32(184).int64(e.RankScore);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.PlayerGamePersistentData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.TotalNum = e.int32();
                        break;

                    case 2:
                        r.WinNum = e.int32();
                        break;

                    case 3:
                        r.LoseNum = e.int32();
                        break;

                    case 21:
                        r.Score = e.int64();
                        break;

                    case 22:
                        r.PKScore = e.int64();
                        break;

                    case 23:
                        r.RankScore = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameResultTempData = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.pos = 0;
        e.prototype.result = 0;
        e.prototype.reason = 0;
        e.prototype.ScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.PKScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.RankScoreChange = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.pos && Object.hasOwnProperty.call(e, "pos") && t.uint32(24).int32(e.pos);
            null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(32).int32(e.result);
            null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(40).int32(e.reason);
            null != e.ScoreChange && Object.hasOwnProperty.call(e, "ScoreChange") && t.uint32(80).int64(e.ScoreChange);
            null != e.PKScoreChange && Object.hasOwnProperty.call(e, "PKScoreChange") && t.uint32(88).int64(e.PKScoreChange);
            null != e.RankScoreChange && Object.hasOwnProperty.call(e, "RankScoreChange") && t.uint32(96).int64(e.RankScoreChange);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GameResultTempData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 3:
                        r.pos = e.int32();
                        break;

                    case 4:
                        r.result = e.int32();
                        break;

                    case 5:
                        r.reason = e.int32();
                        break;

                    case 10:
                        r.ScoreChange = e.int64();
                        break;

                    case 11:
                        r.PKScoreChange = e.int64();
                        break;

                    case 12:
                        r.RankScoreChange = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.DeskInfo = function() {
        function e(e) {
            this.players = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.players = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.players && e.players.length)
                for (var o = 0; o < e.players.length; ++o) $root.proto.GamePlayerInfo.encode(e.players[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.DeskInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.players && r.players.length || (r.players = []);
                        r.players.push($root.proto.GamePlayerInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MatchModeInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.MatchType = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(8).uint32(e.MatchID);
            null != e.MatchType && Object.hasOwnProperty.call(e, "MatchType") && t.uint32(16).uint32(e.MatchType);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MatchModeInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MatchID = e.uint32();
                        break;

                    case 2:
                        r.MatchType = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoundResult = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ModeInfo = null;
        e.prototype.DeskInfo = null;
        e.prototype.eOperatorType = 0;
        e.prototype.RoundUUID = "";
        e.prototype.Reason = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ModeInfo && Object.hasOwnProperty.call(e, "ModeInfo") && $root.proto.MatchModeInfo.encode(e.ModeInfo, t.uint32(10).fork()).ldelim();
            null != e.DeskInfo && Object.hasOwnProperty.call(e, "DeskInfo") && $root.proto.DeskInfo.encode(e.DeskInfo, t.uint32(26).fork()).ldelim();
            null != e.eOperatorType && Object.hasOwnProperty.call(e, "eOperatorType") && t.uint32(32).int32(e.eOperatorType);
            null != e.RoundUUID && Object.hasOwnProperty.call(e, "RoundUUID") && t.uint32(42).string(e.RoundUUID);
            null != e.Reason && Object.hasOwnProperty.call(e, "Reason") && t.uint32(48).uint32(e.Reason);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoundResult(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ModeInfo = $root.proto.MatchModeInfo.decode(e, e.uint32());
                        break;

                    case 3:
                        r.DeskInfo = $root.proto.DeskInfo.decode(e, e.uint32());
                        break;

                    case 4:
                        r.eOperatorType = e.int32();
                        break;

                    case 5:
                        r.RoundUUID = e.string();
                        break;

                    case 6:
                        r.Reason = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.ReqHeader = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.msgid = 0;
        e.prototype.buffer = $util.newBuffer([]);
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.msgid && Object.hasOwnProperty.call(e, "msgid") && t.uint32(8).int32(e.msgid);
            null != e.buffer && Object.hasOwnProperty.call(e, "buffer") && t.uint32(18).bytes(e.buffer);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ReqHeader(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.msgid = e.int32();
                        break;

                    case 2:
                        r.buffer = e.bytes();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RespHeader = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.msgid = 0;
        e.prototype.err = 0;
        e.prototype.buffer = $util.newBuffer([]);
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.msgid && Object.hasOwnProperty.call(e, "msgid") && t.uint32(8).int32(e.msgid);
            null != e.err && Object.hasOwnProperty.call(e, "err") && t.uint32(16).int32(e.err);
            null != e.buffer && Object.hasOwnProperty.call(e, "buffer") && t.uint32(26).bytes(e.buffer);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RespHeader(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.msgid = e.int32();
                        break;

                    case 2:
                        r.err = e.int32();
                        break;

                    case 3:
                        r.buffer = e.bytes();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.EffectInfo = function() {
        function e(e) {
            this.rows = [];
            this.cols = [];
            this.options = [];
            this.poss = [];
            this.targets = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.type = 0;
        e.prototype.pos = null;
        e.prototype.layer = 0;
        e.prototype.btype = 0;
        e.prototype.rows = $util.emptyArray;
        e.prototype.cols = $util.emptyArray;
        e.prototype.options = $util.emptyArray;
        e.prototype.poss = $util.emptyArray;
        e.prototype.option = null;
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.color = 0;
        e.prototype.board = null;
        e.prototype.totalScore = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.count = 0;
        e.prototype.otherInfo = "";
        e.prototype.dropTrashCount = 0;
        e.prototype.combo = 0;
        e.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.comboTimes = 0;
        e.prototype.clearBoard = !1;
        e.prototype.targets = $util.emptyArray;
        e.prototype.source = 0;
        e.prototype.frameindex = 0;
        e.prototype.srcPlayerPos = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).int32(e.type);
            null != e.pos && Object.hasOwnProperty.call(e, "pos") && $root.proto.Vec2.encode(e.pos, t.uint32(18).fork()).ldelim();
            null != e.layer && Object.hasOwnProperty.call(e, "layer") && t.uint32(24).int32(e.layer);
            null != e.btype && Object.hasOwnProperty.call(e, "btype") && t.uint32(32).int32(e.btype);
            if (null != e.rows && e.rows.length) {
                t.uint32(42).fork();
                for (var o = 0; o < e.rows.length; ++o) t.int32(e.rows[o]);
                t.ldelim();
            }
            if (null != e.cols && e.cols.length) {
                t.uint32(50).fork();
                for (o = 0; o < e.cols.length; ++o) t.int32(e.cols[o]);
                t.ldelim();
            }
            if (null != e.options && e.options.length)
                for (o = 0; o < e.options.length; ++o) $root.proto.OptionData.encode(e.options[o], t.uint32(58).fork()).ldelim();
            if (null != e.poss && e.poss.length)
                for (o = 0; o < e.poss.length; ++o) $root.proto.Vec2.encode(e.poss[o], t.uint32(66).fork()).ldelim();
            null != e.option && Object.hasOwnProperty.call(e, "option") && $root.proto.OptionData.encode(e.option, t.uint32(74).fork()).ldelim();
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(80).int64(e.score);
            null != e.color && Object.hasOwnProperty.call(e, "color") && t.uint32(88).int32(e.color);
            null != e.board && Object.hasOwnProperty.call(e, "board") && $root.proto.BoardData.encode(e.board, t.uint32(98).fork()).ldelim();
            null != e.totalScore && Object.hasOwnProperty.call(e, "totalScore") && t.uint32(104).int64(e.totalScore);
            null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(112).int32(e.count);
            null != e.otherInfo && Object.hasOwnProperty.call(e, "otherInfo") && t.uint32(122).string(e.otherInfo);
            null != e.dropTrashCount && Object.hasOwnProperty.call(e, "dropTrashCount") && t.uint32(128).int32(e.dropTrashCount);
            null != e.combo && Object.hasOwnProperty.call(e, "combo") && t.uint32(136).int32(e.combo);
            null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(144).int64(e.timestamp);
            null != e.comboTimes && Object.hasOwnProperty.call(e, "comboTimes") && t.uint32(152).int32(e.comboTimes);
            null != e.clearBoard && Object.hasOwnProperty.call(e, "clearBoard") && t.uint32(160).bool(e.clearBoard);
            if (null != e.targets && e.targets.length) {
                t.uint32(170).fork();
                for (o = 0; o < e.targets.length; ++o) t.int32(e.targets[o]);
                t.ldelim();
            }
            null != e.source && Object.hasOwnProperty.call(e, "source") && t.uint32(176).int32(e.source);
            null != e.frameindex && Object.hasOwnProperty.call(e, "frameindex") && t.uint32(800).int32(e.frameindex);
            null != e.srcPlayerPos && Object.hasOwnProperty.call(e, "srcPlayerPos") && t.uint32(808).int32(e.srcPlayerPos);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.EffectInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.type = e.int32();
                        break;

                    case 2:
                        r.pos = $root.proto.Vec2.decode(e, e.uint32());
                        break;

                    case 3:
                        r.layer = e.int32();
                        break;

                    case 4:
                        r.btype = e.int32();
                        break;

                    case 5:
                        r.rows && r.rows.length || (r.rows = []);
                        if (2 == (7 & n))
                            for (var a = e.uint32() + e.pos; e.pos < a;) r.rows.push(e.int32());
                        else r.rows.push(e.int32());
                        break;

                    case 6:
                        r.cols && r.cols.length || (r.cols = []);
                        if (2 == (7 & n))
                            for (a = e.uint32() + e.pos; e.pos < a;) r.cols.push(e.int32());
                        else r.cols.push(e.int32());
                        break;

                    case 7:
                        r.options && r.options.length || (r.options = []);
                        r.options.push($root.proto.OptionData.decode(e, e.uint32()));
                        break;

                    case 8:
                        r.poss && r.poss.length || (r.poss = []);
                        r.poss.push($root.proto.Vec2.decode(e, e.uint32()));
                        break;

                    case 9:
                        r.option = $root.proto.OptionData.decode(e, e.uint32());
                        break;

                    case 10:
                        r.score = e.int64();
                        break;

                    case 11:
                        r.color = e.int32();
                        break;

                    case 12:
                        r.board = $root.proto.BoardData.decode(e, e.uint32());
                        break;

                    case 13:
                        r.totalScore = e.int64();
                        break;

                    case 14:
                        r.count = e.int32();
                        break;

                    case 15:
                        r.otherInfo = e.string();
                        break;

                    case 16:
                        r.dropTrashCount = e.int32();
                        break;

                    case 17:
                        r.combo = e.int32();
                        break;

                    case 18:
                        r.timestamp = e.int64();
                        break;

                    case 19:
                        r.comboTimes = e.int32();
                        break;

                    case 20:
                        r.clearBoard = e.bool();
                        break;

                    case 21:
                        r.targets && r.targets.length || (r.targets = []);
                        if (2 == (7 & n))
                            for (a = e.uint32() + e.pos; e.pos < a;) r.targets.push(e.int32());
                        else r.targets.push(e.int32());
                        break;

                    case 22:
                        r.source = e.int32();
                        break;

                    case 100:
                        r.frameindex = e.int32();
                        break;

                    case 101:
                        r.srcPlayerPos = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.Vec2 = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.x = 0;
        e.prototype.y = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.x && Object.hasOwnProperty.call(e, "x") && t.uint32(8).int32(e.x);
            null != e.y && Object.hasOwnProperty.call(e, "y") && t.uint32(16).int32(e.y);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.Vec2(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.x = e.int32();
                        break;

                    case 2:
                        r.y = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BlockData = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.type = 0;
        e.prototype.color = 0;
        e.prototype.pos = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).int32(e.type);
            null != e.color && Object.hasOwnProperty.call(e, "color") && t.uint32(16).int32(e.color);
            null != e.pos && Object.hasOwnProperty.call(e, "pos") && $root.proto.Vec2.encode(e.pos, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BlockData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.type = e.int32();
                        break;

                    case 2:
                        r.color = e.int32();
                        break;

                    case 3:
                        r.pos = $root.proto.Vec2.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GridInfo = function() {
        function e(e) {
            this.blocks = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.blocks = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.blocks && e.blocks.length)
                for (var o = 0; o < e.blocks.length; ++o) $root.proto.BlockData.encode(e.blocks[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GridInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.blocks && r.blocks.length || (r.blocks = []);
                        r.blocks.push($root.proto.BlockData.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OptionData = function() {
        function e(e) {
            this.grids = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.index = 0;
        e.prototype.id = 0;
        e.prototype.color = 0;
        e.prototype.grids = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(8).int32(e.index);
            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).int32(e.id);
            null != e.color && Object.hasOwnProperty.call(e, "color") && t.uint32(24).int32(e.color);
            if (null != e.grids && e.grids.length)
                for (var o = 0; o < e.grids.length; ++o) $root.proto.GridInfo.encode(e.grids[o], t.uint32(34).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OptionData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.index = e.int32();
                        break;

                    case 2:
                        r.id = e.int32();
                        break;

                    case 3:
                        r.color = e.int32();
                        break;

                    case 4:
                        r.grids && r.grids.length || (r.grids = []);
                        r.grids.push($root.proto.GridInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BoardGrid = function() {
        function e(e) {
            this.tiles = {};
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.tiles = $util.emptyObject;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.tiles && Object.hasOwnProperty.call(e, "tiles"))
                for (var o = Object.keys(e.tiles), r = 0; r < o.length; ++r) {
                    t.uint32(10).fork().uint32(8).int32(o[r]);
                    $root.proto.BlockData.encode(e.tiles[o[r]], t.uint32(18).fork()).ldelim().ldelim();
                }
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o, r, n = void 0 === t ? e.len : e.pos + t, a = new $root.proto.BoardGrid(); e.pos < n;) {
                var i = e.uint32();
                switch (i >>> 3) {
                    case 1:
                        a.tiles === $util.emptyObject && (a.tiles = {});
                        var c = e.uint32() + e.pos;
                        o = 0;
                        r = null;
                        for (; e.pos < c;) {
                            var l = e.uint32();
                            switch (l >>> 3) {
                                case 1:
                                    o = e.int32();
                                    break;

                                case 2:
                                    r = $root.proto.BlockData.decode(e, e.uint32());
                                    break;

                                default:
                                    e.skipType(7 & l);
                            }
                        }
                        a.tiles[o] = r;
                        break;

                    default:
                        e.skipType(7 & i);
                }
            }
            return a;
        };
        return e;
    }();
    e.BoardCol = function() {
        function e(e) {
            this.col = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.col = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.col && e.col.length)
                for (var o = 0; o < e.col.length; ++o) $root.proto.BoardGrid.encode(e.col[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BoardCol(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.col && r.col.length || (r.col = []);
                        r.col.push($root.proto.BoardGrid.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BoardData = function() {
        function e(e) {
            this.tiles = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.rowCount = 0;
        e.prototype.colCount = 0;
        e.prototype.tiles = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.rowCount && Object.hasOwnProperty.call(e, "rowCount") && t.uint32(8).int32(e.rowCount);
            null != e.colCount && Object.hasOwnProperty.call(e, "colCount") && t.uint32(16).int32(e.colCount);
            if (null != e.tiles && e.tiles.length)
                for (var o = 0; o < e.tiles.length; ++o) $root.proto.BoardCol.encode(e.tiles[o], t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BoardData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.rowCount = e.int32();
                        break;

                    case 2:
                        r.colCount = e.int32();
                        break;

                    case 3:
                        r.tiles && r.tiles.length || (r.tiles = []);
                        r.tiles.push($root.proto.BoardCol.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserAgentMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.lastGameResultReq = null;
        e.prototype.queryIngamestatusReq = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["lastGameResultReq", "queryIngamestatusReq"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.lastGameResultReq && Object.hasOwnProperty.call(e, "lastGameResultReq") && $root.proto.LastGameResultReq.encode(e.lastGameResultReq, t.uint32(810).fork()).ldelim();
            null != e.queryIngamestatusReq && Object.hasOwnProperty.call(e, "queryIngamestatusReq") && $root.proto.QueryInGameStatusReq.encode(e.queryIngamestatusReq, t.uint32(818).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserAgentMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 101:
                        r.lastGameResultReq = $root.proto.LastGameResultReq.decode(e, e.uint32());
                        break;

                    case 102:
                        r.queryIngamestatusReq = $root.proto.QueryInGameStatusReq.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.AgentAckMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ResultCode = 0;
        e.prototype.lastGameResultRsp = null;
        e.prototype.notifyMaintenanceInfo = null;
        e.prototype.queryIngamestatusRsp = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["lastGameResultRsp", "notifyMaintenanceInfo", "queryIngamestatusRsp"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ResultCode && Object.hasOwnProperty.call(e, "ResultCode") && t.uint32(8).uint32(e.ResultCode);
            null != e.lastGameResultRsp && Object.hasOwnProperty.call(e, "lastGameResultRsp") && $root.proto.LastGameResultRsp.encode(e.lastGameResultRsp, t.uint32(810).fork()).ldelim();
            null != e.notifyMaintenanceInfo && Object.hasOwnProperty.call(e, "notifyMaintenanceInfo") && $root.proto.NotifyMaintenanceInfo.encode(e.notifyMaintenanceInfo, t.uint32(818).fork()).ldelim();
            null != e.queryIngamestatusRsp && Object.hasOwnProperty.call(e, "queryIngamestatusRsp") && $root.proto.QueryInGameStatusRsp.encode(e.queryIngamestatusRsp, t.uint32(826).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.AgentAckMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ResultCode = e.uint32();
                        break;

                    case 101:
                        r.lastGameResultRsp = $root.proto.LastGameResultRsp.decode(e, e.uint32());
                        break;

                    case 102:
                        r.notifyMaintenanceInfo = $root.proto.NotifyMaintenanceInfo.decode(e, e.uint32());
                        break;

                    case 103:
                        r.queryIngamestatusRsp = $root.proto.QueryInGameStatusRsp.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.LastGameResultReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roundUUID = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roundUUID && Object.hasOwnProperty.call(e, "roundUUID") && t.uint32(10).string(e.roundUUID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.LastGameResultReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roundUUID = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.LastGameResultRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.resultInfo = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.resultInfo && Object.hasOwnProperty.call(e, "resultInfo") && $root.proto.RoundResult.encode(e.resultInfo, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.LastGameResultRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.resultInfo = $root.proto.RoundResult.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.NotifyMaintenanceInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.info = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.info && Object.hasOwnProperty.call(e, "info") && t.uint32(10).string(e.info);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.NotifyMaintenanceInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.info = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.QueryInGameStatusReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userID = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userID && Object.hasOwnProperty.call(e, "userID") && t.uint32(10).string(e.userID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.QueryInGameStatusReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userID = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.QueryInGameStatusRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.gameStatus = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.gameStatus && Object.hasOwnProperty.call(e, "gameStatus") && t.uint32(8).uint32(e.gameStatus);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.QueryInGameStatusRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.gameStatus = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserGameMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.effectArr = null;
        e.prototype.gameOver = null;
        e.prototype.syncStatus = null;
        e.prototype.reenterGame = null;
        e.prototype.singleTargetEffect = null;
        e.prototype.multiTargetEffect = null;
        e.prototype.effectInfoArrEx = null;
        e.prototype.battleResultReportReq = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["effectArr", "gameOver", "syncStatus", "reenterGame", "singleTargetEffect", "multiTargetEffect", "effectInfoArrEx", "battleResultReportReq"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.effectArr && Object.hasOwnProperty.call(e, "effectArr") && $root.proto.EffectInfoArr.encode(e.effectArr, t.uint32(818).fork()).ldelim();
            null != e.gameOver && Object.hasOwnProperty.call(e, "gameOver") && $root.proto.GameOver.encode(e.gameOver, t.uint32(842).fork()).ldelim();
            null != e.syncStatus && Object.hasOwnProperty.call(e, "syncStatus") && $root.proto.SyncStatus.encode(e.syncStatus, t.uint32(874).fork()).ldelim();
            null != e.reenterGame && Object.hasOwnProperty.call(e, "reenterGame") && $root.proto.ReEnterGame.encode(e.reenterGame, t.uint32(882).fork()).ldelim();
            null != e.singleTargetEffect && Object.hasOwnProperty.call(e, "singleTargetEffect") && $root.proto.SingleTargetEffectInfo.encode(e.singleTargetEffect, t.uint32(930).fork()).ldelim();
            null != e.multiTargetEffect && Object.hasOwnProperty.call(e, "multiTargetEffect") && $root.proto.MultiTargetEffectInfo.encode(e.multiTargetEffect, t.uint32(938).fork()).ldelim();
            null != e.effectInfoArrEx && Object.hasOwnProperty.call(e, "effectInfoArrEx") && $root.proto.EffectInfoArrEx.encode(e.effectInfoArrEx, t.uint32(946).fork()).ldelim();
            null != e.battleResultReportReq && Object.hasOwnProperty.call(e, "battleResultReportReq") && $root.proto.BattleResultReportReq.encode(e.battleResultReportReq, t.uint32(954).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserGameMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userId = e.string();
                        break;

                    case 102:
                        r.effectArr = $root.proto.EffectInfoArr.decode(e, e.uint32());
                        break;

                    case 105:
                        r.gameOver = $root.proto.GameOver.decode(e, e.uint32());
                        break;

                    case 109:
                        r.syncStatus = $root.proto.SyncStatus.decode(e, e.uint32());
                        break;

                    case 110:
                        r.reenterGame = $root.proto.ReEnterGame.decode(e, e.uint32());
                        break;

                    case 116:
                        r.singleTargetEffect = $root.proto.SingleTargetEffectInfo.decode(e, e.uint32());
                        break;

                    case 117:
                        r.multiTargetEffect = $root.proto.MultiTargetEffectInfo.decode(e, e.uint32());
                        break;

                    case 118:
                        r.effectInfoArrEx = $root.proto.EffectInfoArrEx.decode(e, e.uint32());
                        break;

                    case 119:
                        r.battleResultReportReq = $root.proto.BattleResultReportReq.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameAckMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = null;
        e.prototype.ResultCode = 0;
        e.prototype.gameStart = null;
        e.prototype.statusRsp = null;
        e.prototype.gameOverRsp = null;
        e.prototype.effectArr = null;
        e.prototype.netStateNotify = null;
        e.prototype.reenterGameRsp = null;
        e.prototype.singleTargetEffect = null;
        e.prototype.multiTargetEffect = null;
        e.prototype.effectInfoArrEx = null;
        e.prototype.battleResultSyncNotify = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["gameStart", "statusRsp", "gameOverRsp", "effectArr", "netStateNotify", "reenterGameRsp", "singleTargetEffect", "multiTargetEffect", "effectInfoArrEx", "battleResultSyncNotify"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.PlayerInfo.encode(e.player, t.uint32(10).fork()).ldelim();
            null != e.ResultCode && Object.hasOwnProperty.call(e, "ResultCode") && t.uint32(16).uint32(e.ResultCode);
            null != e.gameStart && Object.hasOwnProperty.call(e, "gameStart") && $root.proto.GameStart.encode(e.gameStart, t.uint32(818).fork()).ldelim();
            null != e.statusRsp && Object.hasOwnProperty.call(e, "statusRsp") && $root.proto.StatusRsp.encode(e.statusRsp, t.uint32(834).fork()).ldelim();
            null != e.gameOverRsp && Object.hasOwnProperty.call(e, "gameOverRsp") && $root.proto.GameOverRsp.encode(e.gameOverRsp, t.uint32(842).fork()).ldelim();
            null != e.effectArr && Object.hasOwnProperty.call(e, "effectArr") && $root.proto.EffectInfoArr.encode(e.effectArr, t.uint32(850).fork()).ldelim();
            null != e.netStateNotify && Object.hasOwnProperty.call(e, "netStateNotify") && $root.proto.NetStateNotify.encode(e.netStateNotify, t.uint32(906).fork()).ldelim();
            null != e.reenterGameRsp && Object.hasOwnProperty.call(e, "reenterGameRsp") && $root.proto.ReEnterGameRsp.encode(e.reenterGameRsp, t.uint32(914).fork()).ldelim();
            null != e.singleTargetEffect && Object.hasOwnProperty.call(e, "singleTargetEffect") && $root.proto.SingleTargetEffectInfo.encode(e.singleTargetEffect, t.uint32(930).fork()).ldelim();
            null != e.multiTargetEffect && Object.hasOwnProperty.call(e, "multiTargetEffect") && $root.proto.MultiTargetEffectInfo.encode(e.multiTargetEffect, t.uint32(938).fork()).ldelim();
            null != e.effectInfoArrEx && Object.hasOwnProperty.call(e, "effectInfoArrEx") && $root.proto.EffectInfoArrEx.encode(e.effectInfoArrEx, t.uint32(946).fork()).ldelim();
            null != e.battleResultSyncNotify && Object.hasOwnProperty.call(e, "battleResultSyncNotify") && $root.proto.BattleResultSyncNotify.encode(e.battleResultSyncNotify, t.uint32(954).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GameAckMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.player = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.ResultCode = e.uint32();
                        break;

                    case 102:
                        r.gameStart = $root.proto.GameStart.decode(e, e.uint32());
                        break;

                    case 104:
                        r.statusRsp = $root.proto.StatusRsp.decode(e, e.uint32());
                        break;

                    case 105:
                        r.gameOverRsp = $root.proto.GameOverRsp.decode(e, e.uint32());
                        break;

                    case 106:
                        r.effectArr = $root.proto.EffectInfoArr.decode(e, e.uint32());
                        break;

                    case 113:
                        r.netStateNotify = $root.proto.NetStateNotify.decode(e, e.uint32());
                        break;

                    case 114:
                        r.reenterGameRsp = $root.proto.ReEnterGameRsp.decode(e, e.uint32());
                        break;

                    case 116:
                        r.singleTargetEffect = $root.proto.SingleTargetEffectInfo.decode(e, e.uint32());
                        break;

                    case 117:
                        r.multiTargetEffect = $root.proto.MultiTargetEffectInfo.decode(e, e.uint32());
                        break;

                    case 118:
                        r.effectInfoArrEx = $root.proto.EffectInfoArrEx.decode(e, e.uint32());
                        break;

                    case 119:
                        r.battleResultSyncNotify = $root.proto.BattleResultSyncNotify.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SyncStatus = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SyncStatus(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.NetStateNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.uid = "";
        e.prototype.online = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(10).string(e.uid);
            null != e.online && Object.hasOwnProperty.call(e, "online") && t.uint32(16).bool(e.online);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.NetStateNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.uid = e.string();
                        break;

                    case 2:
                        r.online = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameStart = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.deskInfo = null;
        e.prototype.beginMilltimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.duration = 0;
        e.prototype.roundUuid = "";
        e.prototype.MatchID = 0;
        e.prototype.MatchType = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.deskInfo && Object.hasOwnProperty.call(e, "deskInfo") && $root.proto.DeskInfo.encode(e.deskInfo, t.uint32(10).fork()).ldelim();
            null != e.beginMilltimestamp && Object.hasOwnProperty.call(e, "beginMilltimestamp") && t.uint32(16).int64(e.beginMilltimestamp);
            null != e.duration && Object.hasOwnProperty.call(e, "duration") && t.uint32(24).int32(e.duration);
            null != e.roundUuid && Object.hasOwnProperty.call(e, "roundUuid") && t.uint32(34).string(e.roundUuid);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(88).uint32(e.MatchID);
            null != e.MatchType && Object.hasOwnProperty.call(e, "MatchType") && t.uint32(96).uint32(e.MatchType);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GameStart(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.deskInfo = $root.proto.DeskInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.beginMilltimestamp = e.int64();
                        break;

                    case 3:
                        r.duration = e.int32();
                        break;

                    case 4:
                        r.roundUuid = e.string();
                        break;

                    case 11:
                        r.MatchID = e.uint32();
                        break;

                    case 12:
                        r.MatchType = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameOver = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.result = 0;
        e.prototype.reason = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result);
            null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(16).int32(e.reason);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GameOver(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.result = e.int32();
                        break;

                    case 2:
                        r.reason = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.GameOverRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.deskInfo = null;
        e.prototype.reason = 0;
        e.prototype.MatchID = 0;
        e.prototype.MatchType = 0;
        e.prototype.gameType = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.deskInfo && Object.hasOwnProperty.call(e, "deskInfo") && $root.proto.DeskInfo.encode(e.deskInfo, t.uint32(10).fork()).ldelim();
            null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(16).int32(e.reason);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(88).uint32(e.MatchID);
            null != e.MatchType && Object.hasOwnProperty.call(e, "MatchType") && t.uint32(96).uint32(e.MatchType);
            null != e.gameType && Object.hasOwnProperty.call(e, "gameType") && t.uint32(104).int64(e.gameType);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.GameOverRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.deskInfo = $root.proto.DeskInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.reason = e.int32();
                        break;

                    case 11:
                        r.MatchID = e.uint32();
                        break;

                    case 12:
                        r.MatchType = e.uint32();
                        break;

                    case 13:
                        r.gameType = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.StatusRsp = function() {
        function e(e) {
            this.usereffectinfo = {};
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.usereffectinfo = $util.emptyObject;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.usereffectinfo && Object.hasOwnProperty.call(e, "usereffectinfo"))
                for (var o = Object.keys(e.usereffectinfo), r = 0; r < o.length; ++r) {
                    t.uint32(10).fork().uint32(10).string(o[r]);
                    $root.proto.EffectInfo.encode(e.usereffectinfo[o[r]], t.uint32(18).fork()).ldelim().ldelim();
                }
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o, r, n = void 0 === t ? e.len : e.pos + t, a = new $root.proto.StatusRsp(); e.pos < n;) {
                var i = e.uint32();
                switch (i >>> 3) {
                    case 1:
                        a.usereffectinfo === $util.emptyObject && (a.usereffectinfo = {});
                        var c = e.uint32() + e.pos;
                        o = "";
                        r = null;
                        for (; e.pos < c;) {
                            var l = e.uint32();
                            switch (l >>> 3) {
                                case 1:
                                    o = e.string();
                                    break;

                                case 2:
                                    r = $root.proto.EffectInfo.decode(e, e.uint32());
                                    break;

                                default:
                                    e.skipType(7 & l);
                            }
                        }
                        a.usereffectinfo[o] = r;
                        break;

                    default:
                        e.skipType(7 & i);
                }
            }
            return a;
        };
        return e;
    }();
    e.EffectInfoArr = function() {
        function e(e) {
            this.effectinfo = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.effectinfo = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.effectinfo && e.effectinfo.length)
                for (var o = 0; o < e.effectinfo.length; ++o) $root.proto.EffectInfo.encode(e.effectinfo[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.EffectInfoArr(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.effectinfo && r.effectinfo.length || (r.effectinfo = []);
                        r.effectinfo.push($root.proto.EffectInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.Col = function() {
        function e(e) {
            this.values = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.values = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.values && e.values.length) {
                t.uint32(10).fork();
                for (var o = 0; o < e.values.length; ++o) t.int32(e.values[o]);
                t.ldelim();
            }
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.Col(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.values && r.values.length || (r.values = []);
                        if (2 == (7 & n))
                            for (var a = e.uint32() + e.pos; e.pos < a;) r.values.push(e.int32());
                        else r.values.push(e.int32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.ReEnterGame = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ReEnterGame(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.ReEnterGameRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.deskInfo = null;
        e.prototype.beginMilltimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.duration = 0;
        e.prototype.roundUuid = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.deskInfo && Object.hasOwnProperty.call(e, "deskInfo") && $root.proto.DeskInfo.encode(e.deskInfo, t.uint32(10).fork()).ldelim();
            null != e.beginMilltimestamp && Object.hasOwnProperty.call(e, "beginMilltimestamp") && t.uint32(16).int64(e.beginMilltimestamp);
            null != e.duration && Object.hasOwnProperty.call(e, "duration") && t.uint32(24).int32(e.duration);
            null != e.roundUuid && Object.hasOwnProperty.call(e, "roundUuid") && t.uint32(34).string(e.roundUuid);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ReEnterGameRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.deskInfo = $root.proto.DeskInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.beginMilltimestamp = e.int64();
                        break;

                    case 3:
                        r.duration = e.int32();
                        break;

                    case 4:
                        r.roundUuid = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SingleTargetEffectInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.targetPos = 0;
        e.prototype.effect_InfoArr = null;
        e.prototype.msgSrcPos = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.targetPos && Object.hasOwnProperty.call(e, "targetPos") && t.uint32(8).int32(e.targetPos);
            null != e.effect_InfoArr && Object.hasOwnProperty.call(e, "effect_InfoArr") && $root.proto.EffectInfoArr.encode(e.effect_InfoArr, t.uint32(18).fork()).ldelim();
            null != e.msgSrcPos && Object.hasOwnProperty.call(e, "msgSrcPos") && t.uint32(24).int32(e.msgSrcPos);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SingleTargetEffectInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.targetPos = e.int32();
                        break;

                    case 2:
                        r.effect_InfoArr = $root.proto.EffectInfoArr.decode(e, e.uint32());
                        break;

                    case 3:
                        r.msgSrcPos = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MultiTargetEffectInfo = function() {
        function e(e) {
            this.targetPos = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.targetPos = $util.emptyArray;
        e.prototype.effect_InfoArr = null;
        e.prototype.msgSrcPos = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.targetPos && e.targetPos.length) {
                t.uint32(10).fork();
                for (var o = 0; o < e.targetPos.length; ++o) t.int32(e.targetPos[o]);
                t.ldelim();
            }
            null != e.effect_InfoArr && Object.hasOwnProperty.call(e, "effect_InfoArr") && $root.proto.EffectInfoArr.encode(e.effect_InfoArr, t.uint32(18).fork()).ldelim();
            null != e.msgSrcPos && Object.hasOwnProperty.call(e, "msgSrcPos") && t.uint32(24).int32(e.msgSrcPos);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MultiTargetEffectInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.targetPos && r.targetPos.length || (r.targetPos = []);
                        if (2 == (7 & n))
                            for (var a = e.uint32() + e.pos; e.pos < a;) r.targetPos.push(e.int32());
                        else r.targetPos.push(e.int32());
                        break;

                    case 2:
                        r.effect_InfoArr = $root.proto.EffectInfoArr.decode(e, e.uint32());
                        break;

                    case 3:
                        r.msgSrcPos = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.EffectInfoArrEx = function() {
        function e(e) {
            this.effectinfo = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.msgSrcPos = 0;
        e.prototype.effectinfo = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.msgSrcPos && Object.hasOwnProperty.call(e, "msgSrcPos") && t.uint32(8).int32(e.msgSrcPos);
            if (null != e.effectinfo && e.effectinfo.length)
                for (var o = 0; o < e.effectinfo.length; ++o) $root.proto.EffectInfo.encode(e.effectinfo[o], t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.EffectInfoArrEx(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.msgSrcPos = e.int32();
                        break;

                    case 2:
                        r.effectinfo && r.effectinfo.length || (r.effectinfo = []);
                        r.effectinfo.push($root.proto.EffectInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BattleResultSyncNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.matchID = 0;
        e.prototype.matchType = 0;
        e.prototype.gameType = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.deskInfo = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.matchID && Object.hasOwnProperty.call(e, "matchID") && t.uint32(8).uint32(e.matchID);
            null != e.matchType && Object.hasOwnProperty.call(e, "matchType") && t.uint32(16).uint32(e.matchType);
            null != e.gameType && Object.hasOwnProperty.call(e, "gameType") && t.uint32(24).int64(e.gameType);
            null != e.deskInfo && Object.hasOwnProperty.call(e, "deskInfo") && $root.proto.DeskInfo.encode(e.deskInfo, t.uint32(34).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BattleResultSyncNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.matchID = e.uint32();
                        break;

                    case 2:
                        r.matchType = e.uint32();
                        break;

                    case 3:
                        r.gameType = e.int64();
                        break;

                    case 4:
                        r.deskInfo = $root.proto.DeskInfo.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BattleResultReportReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.result = 0;
        e.prototype.reason = 0;
        e.prototype.msgSrcPos = 0;
        e.prototype.killerPos = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result);
            null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(16).int32(e.reason);
            null != e.msgSrcPos && Object.hasOwnProperty.call(e, "msgSrcPos") && t.uint32(24).int32(e.msgSrcPos);
            null != e.killerPos && Object.hasOwnProperty.call(e, "killerPos") && t.uint32(32).int32(e.killerPos);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BattleResultReportReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.result = e.int32();
                        break;

                    case 2:
                        r.reason = e.int32();
                        break;

                    case 3:
                        r.msgSrcPos = e.int32();
                        break;

                    case 4:
                        r.killerPos = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserMatchMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerInfo = null;
        e.prototype.secretMatchReq = null;
        e.prototype.randomMatchReq = null;
        e.prototype.rematchGameReq = null;
        e.prototype.cancelMatchReq = null;
        e.prototype.exitMatchReq = null;
        e.prototype.randomContinueMatchReq = null;
        e.prototype.botMatchReq = null;
        e.prototype.botMatchResultReport = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["secretMatchReq", "randomMatchReq", "rematchGameReq", "cancelMatchReq", "exitMatchReq", "randomContinueMatchReq", "botMatchReq", "botMatchResultReport"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerInfo && Object.hasOwnProperty.call(e, "playerInfo") && $root.proto.PlayerInfo.encode(e.playerInfo, t.uint32(10).fork()).ldelim();
            null != e.secretMatchReq && Object.hasOwnProperty.call(e, "secretMatchReq") && $root.proto.SecretMatchReq.encode(e.secretMatchReq, t.uint32(890).fork()).ldelim();
            null != e.randomMatchReq && Object.hasOwnProperty.call(e, "randomMatchReq") && $root.proto.RandomMatchReq.encode(e.randomMatchReq, t.uint32(898).fork()).ldelim();
            null != e.rematchGameReq && Object.hasOwnProperty.call(e, "rematchGameReq") && $root.proto.RematchGameReq.encode(e.rematchGameReq, t.uint32(906).fork()).ldelim();
            null != e.cancelMatchReq && Object.hasOwnProperty.call(e, "cancelMatchReq") && $root.proto.CancelMatchReq.encode(e.cancelMatchReq, t.uint32(914).fork()).ldelim();
            null != e.exitMatchReq && Object.hasOwnProperty.call(e, "exitMatchReq") && $root.proto.ExitMatchReq.encode(e.exitMatchReq, t.uint32(922).fork()).ldelim();
            null != e.randomContinueMatchReq && Object.hasOwnProperty.call(e, "randomContinueMatchReq") && $root.proto.RandomContinueMatchReq.encode(e.randomContinueMatchReq, t.uint32(1050).fork()).ldelim();
            null != e.botMatchReq && Object.hasOwnProperty.call(e, "botMatchReq") && $root.proto.BotMatchReq.encode(e.botMatchReq, t.uint32(1602).fork()).ldelim();
            null != e.botMatchResultReport && Object.hasOwnProperty.call(e, "botMatchResultReport") && $root.proto.BotMatchResultReport.encode(e.botMatchResultReport, t.uint32(1610).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserMatchMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerInfo = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    case 111:
                        r.secretMatchReq = $root.proto.SecretMatchReq.decode(e, e.uint32());
                        break;

                    case 112:
                        r.randomMatchReq = $root.proto.RandomMatchReq.decode(e, e.uint32());
                        break;

                    case 113:
                        r.rematchGameReq = $root.proto.RematchGameReq.decode(e, e.uint32());
                        break;

                    case 114:
                        r.cancelMatchReq = $root.proto.CancelMatchReq.decode(e, e.uint32());
                        break;

                    case 115:
                        r.exitMatchReq = $root.proto.ExitMatchReq.decode(e, e.uint32());
                        break;

                    case 131:
                        r.randomContinueMatchReq = $root.proto.RandomContinueMatchReq.decode(e, e.uint32());
                        break;

                    case 200:
                        r.botMatchReq = $root.proto.BotMatchReq.decode(e, e.uint32());
                        break;

                    case 201:
                        r.botMatchResultReport = $root.proto.BotMatchResultReport.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MatchAckMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = null;
        e.prototype.ResultCode = 0;
        e.prototype.secretMatchAck = null;
        e.prototype.randomMatchAck = null;
        e.prototype.notifyRematchGame = null;
        e.prototype.rematchTimeoutNotify = null;
        e.prototype.matchTimeouotNotify = null;
        e.prototype.rematchGameRsp = null;
        e.prototype.cancelMatchRsp = null;
        e.prototype.exitMatchRsp = null;
        e.prototype.matchingMembersChangeNotify = null;
        e.prototype.randomContinueMatchRsp = null;
        e.prototype.botMatchRsp = null;
        e.prototype.botMatchResultReportRsp = null;
        e.prototype.botMatchAlreadyInMatchNotify = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["secretMatchAck", "randomMatchAck", "notifyRematchGame", "rematchTimeoutNotify", "matchTimeouotNotify", "rematchGameRsp", "cancelMatchRsp", "exitMatchRsp", "matchingMembersChangeNotify", "randomContinueMatchRsp", "botMatchRsp", "botMatchResultReportRsp", "botMatchAlreadyInMatchNotify"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.PlayerInfo.encode(e.player, t.uint32(10).fork()).ldelim();
            null != e.ResultCode && Object.hasOwnProperty.call(e, "ResultCode") && t.uint32(16).uint32(e.ResultCode);
            null != e.secretMatchAck && Object.hasOwnProperty.call(e, "secretMatchAck") && $root.proto.SecretMatchAck.encode(e.secretMatchAck, t.uint32(914).fork()).ldelim();
            null != e.randomMatchAck && Object.hasOwnProperty.call(e, "randomMatchAck") && $root.proto.RandomMatchAck.encode(e.randomMatchAck, t.uint32(922).fork()).ldelim();
            null != e.notifyRematchGame && Object.hasOwnProperty.call(e, "notifyRematchGame") && $root.proto.NotifyRematchGame.encode(e.notifyRematchGame, t.uint32(938).fork()).ldelim();
            null != e.rematchTimeoutNotify && Object.hasOwnProperty.call(e, "rematchTimeoutNotify") && $root.proto.RematchTimeoutNotify.encode(e.rematchTimeoutNotify, t.uint32(946).fork()).ldelim();
            null != e.matchTimeouotNotify && Object.hasOwnProperty.call(e, "matchTimeouotNotify") && $root.proto.MatchTimeoutNotify.encode(e.matchTimeouotNotify, t.uint32(954).fork()).ldelim();
            null != e.rematchGameRsp && Object.hasOwnProperty.call(e, "rematchGameRsp") && $root.proto.RematchGameRsp.encode(e.rematchGameRsp, t.uint32(962).fork()).ldelim();
            null != e.cancelMatchRsp && Object.hasOwnProperty.call(e, "cancelMatchRsp") && $root.proto.CancelMatchRsp.encode(e.cancelMatchRsp, t.uint32(970).fork()).ldelim();
            null != e.exitMatchRsp && Object.hasOwnProperty.call(e, "exitMatchRsp") && $root.proto.ExitMatchRsp.encode(e.exitMatchRsp, t.uint32(986).fork()).ldelim();
            null != e.matchingMembersChangeNotify && Object.hasOwnProperty.call(e, "matchingMembersChangeNotify") && $root.proto.MatchingMembersChangeNotify.encode(e.matchingMembersChangeNotify, t.uint32(994).fork()).ldelim();
            null != e.randomContinueMatchRsp && Object.hasOwnProperty.call(e, "randomContinueMatchRsp") && $root.proto.RandomContinueMatchRsp.encode(e.randomContinueMatchRsp, t.uint32(1050).fork()).ldelim();
            null != e.botMatchRsp && Object.hasOwnProperty.call(e, "botMatchRsp") && $root.proto.BotMatchRsp.encode(e.botMatchRsp, t.uint32(1602).fork()).ldelim();
            null != e.botMatchResultReportRsp && Object.hasOwnProperty.call(e, "botMatchResultReportRsp") && $root.proto.BotMatchResultReportRsp.encode(e.botMatchResultReportRsp, t.uint32(1610).fork()).ldelim();
            null != e.botMatchAlreadyInMatchNotify && Object.hasOwnProperty.call(e, "botMatchAlreadyInMatchNotify") && $root.proto.BotMatchAlreadyInMatchNotify.encode(e.botMatchAlreadyInMatchNotify, t.uint32(1618).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MatchAckMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.player = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.ResultCode = e.uint32();
                        break;

                    case 114:
                        r.secretMatchAck = $root.proto.SecretMatchAck.decode(e, e.uint32());
                        break;

                    case 115:
                        r.randomMatchAck = $root.proto.RandomMatchAck.decode(e, e.uint32());
                        break;

                    case 117:
                        r.notifyRematchGame = $root.proto.NotifyRematchGame.decode(e, e.uint32());
                        break;

                    case 118:
                        r.rematchTimeoutNotify = $root.proto.RematchTimeoutNotify.decode(e, e.uint32());
                        break;

                    case 119:
                        r.matchTimeouotNotify = $root.proto.MatchTimeoutNotify.decode(e, e.uint32());
                        break;

                    case 120:
                        r.rematchGameRsp = $root.proto.RematchGameRsp.decode(e, e.uint32());
                        break;

                    case 121:
                        r.cancelMatchRsp = $root.proto.CancelMatchRsp.decode(e, e.uint32());
                        break;

                    case 123:
                        r.exitMatchRsp = $root.proto.ExitMatchRsp.decode(e, e.uint32());
                        break;

                    case 124:
                        r.matchingMembersChangeNotify = $root.proto.MatchingMembersChangeNotify.decode(e, e.uint32());
                        break;

                    case 131:
                        r.randomContinueMatchRsp = $root.proto.RandomContinueMatchRsp.decode(e, e.uint32());
                        break;

                    case 200:
                        r.botMatchRsp = $root.proto.BotMatchRsp.decode(e, e.uint32());
                        break;

                    case 201:
                        r.botMatchResultReportRsp = $root.proto.BotMatchResultReportRsp.decode(e, e.uint32());
                        break;

                    case 202:
                        r.botMatchAlreadyInMatchNotify = $root.proto.BotMatchAlreadyInMatchNotify.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SecretMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.Secret = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.Secret && Object.hasOwnProperty.call(e, "Secret") && t.uint32(26).string(e.Secret);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SecretMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.Secret = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SecretMatchAck = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(24).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SecretMatchAck(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 3:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RandomMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.MatchingMode = 0;
        e.prototype.PingDelay = 0;
        e.prototype.MemoryValue = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(24).uint32(e.MatchID);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(32).uint32(e.MatchingMode);
            null != e.PingDelay && Object.hasOwnProperty.call(e, "PingDelay") && t.uint32(40).uint32(e.PingDelay);
            null != e.MemoryValue && Object.hasOwnProperty.call(e, "MemoryValue") && t.uint32(48).uint32(e.MemoryValue);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RandomMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 3:
                        r.MatchID = e.uint32();
                        break;

                    case 4:
                        r.MatchingMode = e.uint32();
                        break;

                    case 5:
                        r.PingDelay = e.uint32();
                        break;

                    case 6:
                        r.MemoryValue = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RandomMatchAck = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errorCode = 0;
        e.prototype.MatchID = 0;
        e.prototype.MatchingMode = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errorCode && Object.hasOwnProperty.call(e, "errorCode") && t.uint32(8).int32(e.errorCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(24).uint32(e.MatchingMode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RandomMatchAck(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errorCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.MatchingMode = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RematchGameReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RematchGameReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RematchGameRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errorCode = 0;
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errorCode && Object.hasOwnProperty.call(e, "errorCode") && t.uint32(8).int32(e.errorCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RematchGameRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errorCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.NotifyRematchGame = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerId = "";
        e.prototype.status = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(10).string(e.playerId);
            null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.NotifyRematchGame(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerId = e.string();
                        break;

                    case 2:
                        r.status = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RematchTimeoutNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RematchTimeoutNotify(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.MatchTimeoutNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MatchTimeoutNotify(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.CancelMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.CancelMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.CancelMatchRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.MatchID = 0;
        e.prototype.CancelMatchType = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.CancelMatchType && Object.hasOwnProperty.call(e, "CancelMatchType") && t.uint32(24).int32(e.CancelMatchType);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.CancelMatchRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.CancelMatchType = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.ExitMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ExitMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.ExitMatchRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ExitMatchRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MatchingMemberInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.UserID = "";
        e.prototype.Nick = "";
        e.prototype.IsBot = !1;
        e.prototype.NewAdd = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.UserID && Object.hasOwnProperty.call(e, "UserID") && t.uint32(10).string(e.UserID);
            null != e.Nick && Object.hasOwnProperty.call(e, "Nick") && t.uint32(18).string(e.Nick);
            null != e.IsBot && Object.hasOwnProperty.call(e, "IsBot") && t.uint32(24).bool(e.IsBot);
            null != e.NewAdd && Object.hasOwnProperty.call(e, "NewAdd") && t.uint32(32).bool(e.NewAdd);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MatchingMemberInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.UserID = e.string();
                        break;

                    case 2:
                        r.Nick = e.string();
                        break;

                    case 3:
                        r.IsBot = e.bool();
                        break;

                    case 4:
                        r.NewAdd = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.MatchingMembersChangeNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MemberCnt = 0;
        e.prototype.ChengJuCnt = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MemberCnt && Object.hasOwnProperty.call(e, "MemberCnt") && t.uint32(8).uint32(e.MemberCnt);
            null != e.ChengJuCnt && Object.hasOwnProperty.call(e, "ChengJuCnt") && t.uint32(16).uint32(e.ChengJuCnt);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.MatchingMembersChangeNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MemberCnt = e.uint32();
                        break;

                    case 2:
                        r.ChengJuCnt = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RandomContinueMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.MatchingMode = 0;
        e.prototype.MemoryValue = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(8).uint32(e.MatchID);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(16).uint32(e.MatchingMode);
            null != e.MemoryValue && Object.hasOwnProperty.call(e, "MemoryValue") && t.uint32(24).uint32(e.MemoryValue);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RandomContinueMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MatchID = e.uint32();
                        break;

                    case 2:
                        r.MatchingMode = e.uint32();
                        break;

                    case 3:
                        r.MemoryValue = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RandomContinueMatchRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errorCode = 0;
        e.prototype.MatchID = 0;
        e.prototype.MatchingMode = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errorCode && Object.hasOwnProperty.call(e, "errorCode") && t.uint32(8).int32(e.errorCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(24).uint32(e.MatchingMode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RandomContinueMatchRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errorCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.MatchingMode = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BotMatchReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(8).uint32(e.MatchID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BotMatchReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MatchID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BotMatchRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.MatchID = 0;
        e.prototype.MatchType = 0;
        e.prototype.PlayersPerTable = 0;
        e.prototype.RoundID = "";
        e.prototype.GameTimeOut = 0;
        e.prototype.MatchingMode = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.MatchType && Object.hasOwnProperty.call(e, "MatchType") && t.uint32(24).uint32(e.MatchType);
            null != e.PlayersPerTable && Object.hasOwnProperty.call(e, "PlayersPerTable") && t.uint32(32).uint32(e.PlayersPerTable);
            null != e.RoundID && Object.hasOwnProperty.call(e, "RoundID") && t.uint32(42).string(e.RoundID);
            null != e.GameTimeOut && Object.hasOwnProperty.call(e, "GameTimeOut") && t.uint32(48).int32(e.GameTimeOut);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(56).uint32(e.MatchingMode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BotMatchRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.MatchType = e.uint32();
                        break;

                    case 4:
                        r.PlayersPerTable = e.uint32();
                        break;

                    case 5:
                        r.RoundID = e.string();
                        break;

                    case 6:
                        r.GameTimeOut = e.int32();
                        break;

                    case 7:
                        r.MatchingMode = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BotMatchResultReport = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.RoundID = "";
        e.prototype.Result = 0;
        e.prototype.Reason = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(8).uint32(e.MatchID);
            null != e.RoundID && Object.hasOwnProperty.call(e, "RoundID") && t.uint32(18).string(e.RoundID);
            null != e.Result && Object.hasOwnProperty.call(e, "Result") && t.uint32(24).int32(e.Result);
            null != e.Reason && Object.hasOwnProperty.call(e, "Reason") && t.uint32(32).int32(e.Reason);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BotMatchResultReport(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MatchID = e.uint32();
                        break;

                    case 2:
                        r.RoundID = e.string();
                        break;

                    case 3:
                        r.Result = e.int32();
                        break;

                    case 4:
                        r.Reason = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BotMatchResultReportRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.MatchID = 0;
        e.prototype.MatchingMode = 0;
        e.prototype.PersistentData = null;
        e.prototype.ResultData = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(16).uint32(e.MatchID);
            null != e.MatchingMode && Object.hasOwnProperty.call(e, "MatchingMode") && t.uint32(24).uint32(e.MatchingMode);
            null != e.PersistentData && Object.hasOwnProperty.call(e, "PersistentData") && $root.proto.PlayerGamePersistentData.encode(e.PersistentData, t.uint32(170).fork()).ldelim();
            null != e.ResultData && Object.hasOwnProperty.call(e, "ResultData") && $root.proto.GameResultTempData.encode(e.ResultData, t.uint32(178).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BotMatchResultReportRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 2:
                        r.MatchID = e.uint32();
                        break;

                    case 3:
                        r.MatchingMode = e.uint32();
                        break;

                    case 21:
                        r.PersistentData = $root.proto.PlayerGamePersistentData.decode(e, e.uint32());
                        break;

                    case 22:
                        r.ResultData = $root.proto.GameResultTempData.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BotMatchAlreadyInMatchNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MatchID = 0;
        e.prototype.MatchType = 0;
        e.prototype.RoundID = "";
        e.prototype.GameTimeOut = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MatchID && Object.hasOwnProperty.call(e, "MatchID") && t.uint32(8).uint32(e.MatchID);
            null != e.MatchType && Object.hasOwnProperty.call(e, "MatchType") && t.uint32(16).uint32(e.MatchType);
            null != e.RoundID && Object.hasOwnProperty.call(e, "RoundID") && t.uint32(26).string(e.RoundID);
            null != e.GameTimeOut && Object.hasOwnProperty.call(e, "GameTimeOut") && t.uint32(32).int32(e.GameTimeOut);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BotMatchAlreadyInMatchNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MatchID = e.uint32();
                        break;

                    case 2:
                        r.MatchType = e.uint32();
                        break;

                    case 3:
                        r.RoundID = e.string();
                        break;

                    case 4:
                        r.GameTimeOut = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserOneShotMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomId = "";
        e.prototype.userId = "";
        e.prototype.gameSyncReq = null;
        e.prototype.quitReq = null;
        e.prototype.reconnectReq = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["gameSyncReq", "quitReq", "reconnectReq"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId);
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId);
            null != e.gameSyncReq && Object.hasOwnProperty.call(e, "gameSyncReq") && $root.proto.OneShotGameSyncReq.encode(e.gameSyncReq, t.uint32(810).fork()).ldelim();
            null != e.quitReq && Object.hasOwnProperty.call(e, "quitReq") && $root.proto.OneShotQuitReq.encode(e.quitReq, t.uint32(818).fork()).ldelim();
            null != e.reconnectReq && Object.hasOwnProperty.call(e, "reconnectReq") && $root.proto.OneShotReconnectReq.encode(e.reconnectReq, t.uint32(826).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserOneShotMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomId = e.string();
                        break;

                    case 2:
                        r.userId = e.string();
                        break;

                    case 101:
                        r.gameSyncReq = $root.proto.OneShotGameSyncReq.decode(e, e.uint32());
                        break;

                    case 102:
                        r.quitReq = $root.proto.OneShotQuitReq.decode(e, e.uint32());
                        break;

                    case 103:
                        r.reconnectReq = $root.proto.OneShotReconnectReq.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotAckMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.gameSyncResp = null;
        e.prototype.quitResp = null;
        e.prototype.reconnectResp = null;
        e.prototype.startNotify = null;
        e.prototype.roundResultNotify = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["gameSyncResp", "quitResp", "reconnectResp", "startNotify", "roundResultNotify"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.gameSyncResp && Object.hasOwnProperty.call(e, "gameSyncResp") && $root.proto.OneShotGameSyncResp.encode(e.gameSyncResp, t.uint32(810).fork()).ldelim();
            null != e.quitResp && Object.hasOwnProperty.call(e, "quitResp") && $root.proto.OneShotQuitResp.encode(e.quitResp, t.uint32(818).fork()).ldelim();
            null != e.reconnectResp && Object.hasOwnProperty.call(e, "reconnectResp") && $root.proto.OneShotReconnectResp.encode(e.reconnectResp, t.uint32(826).fork()).ldelim();
            null != e.startNotify && Object.hasOwnProperty.call(e, "startNotify") && $root.proto.OneShotGameStartNotify.encode(e.startNotify, t.uint32(882).fork()).ldelim();
            null != e.roundResultNotify && Object.hasOwnProperty.call(e, "roundResultNotify") && $root.proto.OneShotRoundResultNotify.encode(e.roundResultNotify, t.uint32(890).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotAckMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userId = e.string();
                        break;

                    case 101:
                        r.gameSyncResp = $root.proto.OneShotGameSyncResp.decode(e, e.uint32());
                        break;

                    case 102:
                        r.quitResp = $root.proto.OneShotQuitResp.decode(e, e.uint32());
                        break;

                    case 103:
                        r.reconnectResp = $root.proto.OneShotReconnectResp.decode(e, e.uint32());
                        break;

                    case 110:
                        r.startNotify = $root.proto.OneShotGameStartNotify.decode(e, e.uint32());
                        break;

                    case 111:
                        r.roundResultNotify = $root.proto.OneShotRoundResultNotify.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotGameData = function() {
        function e(e) {
            this.users = [];
            this.roundWinnerId = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomId = "";
        e.prototype.users = $util.emptyArray;
        e.prototype.roundWinnerId = $util.emptyArray;
        e.prototype.currRound = null;
        e.prototype.property = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId);
            if (null != e.users && e.users.length)
                for (var o = 0; o < e.users.length; ++o) $root.proto.OneShotUser.encode(e.users[o], t.uint32(26).fork()).ldelim();
            if (null != e.roundWinnerId && e.roundWinnerId.length)
                for (o = 0; o < e.roundWinnerId.length; ++o) t.uint32(34).string(e.roundWinnerId[o]);
            null != e.currRound && Object.hasOwnProperty.call(e, "currRound") && $root.proto.CurrentRoundData.encode(e.currRound, t.uint32(42).fork()).ldelim();
            null != e.property && Object.hasOwnProperty.call(e, "property") && $root.proto.OneShotProperty.encode(e.property, t.uint32(50).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotGameData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomId = e.string();
                        break;

                    case 3:
                        r.users && r.users.length || (r.users = []);
                        r.users.push($root.proto.OneShotUser.decode(e, e.uint32()));
                        break;

                    case 4:
                        r.roundWinnerId && r.roundWinnerId.length || (r.roundWinnerId = []);
                        r.roundWinnerId.push(e.string());
                        break;

                    case 5:
                        r.currRound = $root.proto.CurrentRoundData.decode(e, e.uint32());
                        break;

                    case 6:
                        r.property = $root.proto.OneShotProperty.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotUser = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.nickName = "";
        e.prototype.isBot = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.nickName && Object.hasOwnProperty.call(e, "nickName") && t.uint32(18).string(e.nickName);
            null != e.isBot && Object.hasOwnProperty.call(e, "isBot") && t.uint32(24).bool(e.isBot);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotUser(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userId = e.string();
                        break;

                    case 2:
                        r.nickName = e.string();
                        break;

                    case 3:
                        r.isBot = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotProperty = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.totalRound = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.totalRound && Object.hasOwnProperty.call(e, "totalRound") && t.uint32(8).int32(e.totalRound);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotProperty(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.totalRound = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserScore = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userId = "";
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.isClear = !1;
        e.prototype.clearOp = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(10).string(e.userId);
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(16).int64(e.score);
            null != e.isClear && Object.hasOwnProperty.call(e, "isClear") && t.uint32(24).bool(e.isClear);
            null != e.clearOp && Object.hasOwnProperty.call(e, "clearOp") && $root.proto.ClearOp.encode(e.clearOp, t.uint32(34).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserScore(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userId = e.string();
                        break;

                    case 2:
                        r.score = e.int64();
                        break;

                    case 3:
                        r.isClear = e.bool();
                        break;

                    case 4:
                        r.clearOp = $root.proto.ClearOp.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.CurrentRoundData = function() {
        function e(e) {
            this.userScore = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roundIdx = 0;
        e.prototype.beginTime = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.endTime = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.userScore = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roundIdx && Object.hasOwnProperty.call(e, "roundIdx") && t.uint32(8).int32(e.roundIdx);
            null != e.beginTime && Object.hasOwnProperty.call(e, "beginTime") && t.uint32(16).int64(e.beginTime);
            null != e.endTime && Object.hasOwnProperty.call(e, "endTime") && t.uint32(24).int64(e.endTime);
            if (null != e.userScore && e.userScore.length)
                for (var o = 0; o < e.userScore.length; ++o) $root.proto.UserScore.encode(e.userScore[o], t.uint32(34).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.CurrentRoundData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roundIdx = e.int32();
                        break;

                    case 2:
                        r.beginTime = e.int64();
                        break;

                    case 3:
                        r.endTime = e.int64();
                        break;

                    case 4:
                        r.userScore && r.userScore.length || (r.userScore = []);
                        r.userScore.push($root.proto.UserScore.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.ClearOp = function() {
        function e(e) {
            this.effects = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.effects = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.effects && e.effects.length)
                for (var o = 0; o < e.effects.length; ++o) $root.proto.EffectInfo.encode(e.effects[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ClearOp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.effects && r.effects.length || (r.effects = []);
                        r.effects.push($root.proto.EffectInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotGameSyncReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roundIdx = 0;
        e.prototype.score = 0;
        e.prototype.isClear = !1;
        e.prototype.clearOp = null;
        e.prototype.uid = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roundIdx && Object.hasOwnProperty.call(e, "roundIdx") && t.uint32(8).int32(e.roundIdx);
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(16).int32(e.score);
            null != e.isClear && Object.hasOwnProperty.call(e, "isClear") && t.uint32(24).bool(e.isClear);
            null != e.clearOp && Object.hasOwnProperty.call(e, "clearOp") && $root.proto.ClearOp.encode(e.clearOp, t.uint32(34).fork()).ldelim();
            null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(42).string(e.uid);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotGameSyncReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roundIdx = e.int32();
                        break;

                    case 2:
                        r.score = e.int32();
                        break;

                    case 3:
                        r.isClear = e.bool();
                        break;

                    case 4:
                        r.clearOp = $root.proto.ClearOp.decode(e, e.uint32());
                        break;

                    case 5:
                        r.uid = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotGameSyncResp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roundIdx = 0;
        e.prototype.score = 0;
        e.prototype.uid = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roundIdx && Object.hasOwnProperty.call(e, "roundIdx") && t.uint32(16).int32(e.roundIdx);
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(24).int32(e.score);
            null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(34).string(e.uid);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotGameSyncResp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roundIdx = e.int32();
                        break;

                    case 3:
                        r.score = e.int32();
                        break;

                    case 4:
                        r.uid = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotQuitReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotQuitReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.OneShotQuitResp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotQuitResp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotReconnectReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotReconnectReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.OneShotFinalResult = function() {
        function e(e) {
            this.roundWinnerId = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roundWinnerId = $util.emptyArray;
        e.prototype.finalWinner = "";
        e.prototype.property = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.roundWinnerId && e.roundWinnerId.length)
                for (var o = 0; o < e.roundWinnerId.length; ++o) t.uint32(10).string(e.roundWinnerId[o]);
            null != e.finalWinner && Object.hasOwnProperty.call(e, "finalWinner") && t.uint32(18).string(e.finalWinner);
            null != e.property && Object.hasOwnProperty.call(e, "property") && $root.proto.OneShotProperty.encode(e.property, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotFinalResult(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roundWinnerId && r.roundWinnerId.length || (r.roundWinnerId = []);
                        r.roundWinnerId.push(e.string());
                        break;

                    case 2:
                        r.finalWinner = e.string();
                        break;

                    case 3:
                        r.property = $root.proto.OneShotProperty.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotReconnectResp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.gameData = null;
        e.prototype.finalResult = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.gameData && Object.hasOwnProperty.call(e, "gameData") && $root.proto.OneShotGameData.encode(e.gameData, t.uint32(18).fork()).ldelim();
            null != e.finalResult && Object.hasOwnProperty.call(e, "finalResult") && $root.proto.OneShotFinalResult.encode(e.finalResult, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotReconnectResp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.gameData = $root.proto.OneShotGameData.decode(e, e.uint32());
                        break;

                    case 3:
                        r.finalResult = $root.proto.OneShotFinalResult.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotGameStartNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.gameData = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.gameData && Object.hasOwnProperty.call(e, "gameData") && $root.proto.OneShotGameData.encode(e.gameData, t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotGameStartNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.gameData = $root.proto.OneShotGameData.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.OneShotRoundResultNotify = function() {
        function e(e) {
            this.userScore = [];
            this.roundWinnerId = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.userScore = $util.emptyArray;
        e.prototype.winner = "";
        e.prototype.roundWinnerId = $util.emptyArray;
        e.prototype.currRound = null;
        e.prototype.isEnd = !1;
        e.prototype.finalWinner = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.userScore && e.userScore.length)
                for (var o = 0; o < e.userScore.length; ++o) $root.proto.UserScore.encode(e.userScore[o], t.uint32(10).fork()).ldelim();
            null != e.winner && Object.hasOwnProperty.call(e, "winner") && t.uint32(18).string(e.winner);
            if (null != e.roundWinnerId && e.roundWinnerId.length)
                for (o = 0; o < e.roundWinnerId.length; ++o) t.uint32(26).string(e.roundWinnerId[o]);
            null != e.currRound && Object.hasOwnProperty.call(e, "currRound") && $root.proto.CurrentRoundData.encode(e.currRound, t.uint32(34).fork()).ldelim();
            null != e.isEnd && Object.hasOwnProperty.call(e, "isEnd") && t.uint32(40).bool(e.isEnd);
            null != e.finalWinner && Object.hasOwnProperty.call(e, "finalWinner") && t.uint32(50).string(e.finalWinner);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.OneShotRoundResultNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.userScore && r.userScore.length || (r.userScore = []);
                        r.userScore.push($root.proto.UserScore.decode(e, e.uint32()));
                        break;

                    case 2:
                        r.winner = e.string();
                        break;

                    case 3:
                        r.roundWinnerId && r.roundWinnerId.length || (r.roundWinnerId = []);
                        r.roundWinnerId.push(e.string());
                        break;

                    case 4:
                        r.currRound = $root.proto.CurrentRoundData.decode(e, e.uint32());
                        break;

                    case 5:
                        r.isEnd = e.bool();
                        break;

                    case 6:
                        r.finalWinner = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.UserRoomMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomId = "";
        e.prototype.userId = "";
        e.prototype.agentServer = "";
        e.prototype.roomCreateReq = null;
        e.prototype.roomJoinReq = null;
        e.prototype.roomChangeNickName = null;
        e.prototype.roomLeaveReq = null;
        e.prototype.roomUpdateOptionsReq = null;
        e.prototype.roomStartGameReq = null;
        e.prototype.roomGameSyncReq = null;
        e.prototype.roomGoNextReq = null;
        e.prototype.roomReconnectReq = null;
        e.prototype.roomAddBotReq = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["roomCreateReq", "roomJoinReq", "roomChangeNickName", "roomLeaveReq", "roomUpdateOptionsReq", "roomStartGameReq", "roomGameSyncReq", "roomGoNextReq", "roomReconnectReq", "roomAddBotReq"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId);
            null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId);
            null != e.agentServer && Object.hasOwnProperty.call(e, "agentServer") && t.uint32(26).string(e.agentServer);
            null != e.roomCreateReq && Object.hasOwnProperty.call(e, "roomCreateReq") && $root.proto.RoomCreateReq.encode(e.roomCreateReq, t.uint32(82).fork()).ldelim();
            null != e.roomJoinReq && Object.hasOwnProperty.call(e, "roomJoinReq") && $root.proto.RoomJoinReq.encode(e.roomJoinReq, t.uint32(90).fork()).ldelim();
            null != e.roomChangeNickName && Object.hasOwnProperty.call(e, "roomChangeNickName") && $root.proto.RoomChangeNickNameReq.encode(e.roomChangeNickName, t.uint32(98).fork()).ldelim();
            null != e.roomLeaveReq && Object.hasOwnProperty.call(e, "roomLeaveReq") && $root.proto.RoomLeaveReq.encode(e.roomLeaveReq, t.uint32(106).fork()).ldelim();
            null != e.roomUpdateOptionsReq && Object.hasOwnProperty.call(e, "roomUpdateOptionsReq") && $root.proto.RoomUpdateOptionsReq.encode(e.roomUpdateOptionsReq, t.uint32(114).fork()).ldelim();
            null != e.roomStartGameReq && Object.hasOwnProperty.call(e, "roomStartGameReq") && $root.proto.RoomStartGameReq.encode(e.roomStartGameReq, t.uint32(122).fork()).ldelim();
            null != e.roomGameSyncReq && Object.hasOwnProperty.call(e, "roomGameSyncReq") && $root.proto.RoomGameSyncReq.encode(e.roomGameSyncReq, t.uint32(130).fork()).ldelim();
            null != e.roomGoNextReq && Object.hasOwnProperty.call(e, "roomGoNextReq") && $root.proto.RoomGoNextReq.encode(e.roomGoNextReq, t.uint32(138).fork()).ldelim();
            null != e.roomReconnectReq && Object.hasOwnProperty.call(e, "roomReconnectReq") && $root.proto.RoomReconnectReq.encode(e.roomReconnectReq, t.uint32(146).fork()).ldelim();
            null != e.roomAddBotReq && Object.hasOwnProperty.call(e, "roomAddBotReq") && $root.proto.RoomAddBotReq.encode(e.roomAddBotReq, t.uint32(810).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UserRoomMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomId = e.string();
                        break;

                    case 2:
                        r.userId = e.string();
                        break;

                    case 3:
                        r.agentServer = e.string();
                        break;

                    case 10:
                        r.roomCreateReq = $root.proto.RoomCreateReq.decode(e, e.uint32());
                        break;

                    case 11:
                        r.roomJoinReq = $root.proto.RoomJoinReq.decode(e, e.uint32());
                        break;

                    case 12:
                        r.roomChangeNickName = $root.proto.RoomChangeNickNameReq.decode(e, e.uint32());
                        break;

                    case 13:
                        r.roomLeaveReq = $root.proto.RoomLeaveReq.decode(e, e.uint32());
                        break;

                    case 14:
                        r.roomUpdateOptionsReq = $root.proto.RoomUpdateOptionsReq.decode(e, e.uint32());
                        break;

                    case 15:
                        r.roomStartGameReq = $root.proto.RoomStartGameReq.decode(e, e.uint32());
                        break;

                    case 16:
                        r.roomGameSyncReq = $root.proto.RoomGameSyncReq.decode(e, e.uint32());
                        break;

                    case 17:
                        r.roomGoNextReq = $root.proto.RoomGoNextReq.decode(e, e.uint32());
                        break;

                    case 18:
                        r.roomReconnectReq = $root.proto.RoomReconnectReq.decode(e, e.uint32());
                        break;

                    case 101:
                        r.roomAddBotReq = $root.proto.RoomAddBotReq.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomAckMessage = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.uid = "";
        e.prototype.roomCreateRsp = null;
        e.prototype.roomJoinRsp = null;
        e.prototype.roomChangeNickNameRsp = null;
        e.prototype.roomLeaveRsp = null;
        e.prototype.roomUpdateOptionsRsp = null;
        e.prototype.roomStartGameRsp = null;
        e.prototype.roomGameSyncRsp = null;
        e.prototype.roomGoNextRsp = null;
        e.prototype.roomReconnectRsp = null;
        e.prototype.roomJoinNotify = null;
        e.prototype.roomLeaveNotify = null;
        e.prototype.roomUpdateOptionsNotify = null;
        e.prototype.roomUpdateOwnerNotify = null;
        e.prototype.roomGameStartingNotify = null;
        e.prototype.roomGameBeginNotify = null;
        e.prototype.roomGameResultNotify = null;
        e.prototype.roomCloseNotify = null;
        e.prototype.roomGameSyncNotify = null;
        e.prototype.roomChangeNickNameNotify = null;
        e.prototype.roomAddBotRsp = null;
        var t;
        Object.defineProperty(e.prototype, "Message", {
            get: $util.oneOfGetter(t = ["roomCreateRsp", "roomJoinRsp", "roomChangeNickNameRsp", "roomLeaveRsp", "roomUpdateOptionsRsp", "roomStartGameRsp", "roomGameSyncRsp", "roomGoNextRsp", "roomReconnectRsp", "roomJoinNotify", "roomLeaveNotify", "roomUpdateOptionsNotify", "roomUpdateOwnerNotify", "roomGameStartingNotify", "roomGameBeginNotify", "roomGameResultNotify", "roomCloseNotify", "roomGameSyncNotify", "roomChangeNickNameNotify", "roomAddBotRsp"]),
            set: $util.oneOfSetter(t)
        });
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(10).string(e.uid);
            null != e.roomCreateRsp && Object.hasOwnProperty.call(e, "roomCreateRsp") && $root.proto.RoomCreateRsp.encode(e.roomCreateRsp, t.uint32(82).fork()).ldelim();
            null != e.roomJoinRsp && Object.hasOwnProperty.call(e, "roomJoinRsp") && $root.proto.RoomJoinRsp.encode(e.roomJoinRsp, t.uint32(90).fork()).ldelim();
            null != e.roomChangeNickNameRsp && Object.hasOwnProperty.call(e, "roomChangeNickNameRsp") && $root.proto.RoomChangeNickNameRsp.encode(e.roomChangeNickNameRsp, t.uint32(98).fork()).ldelim();
            null != e.roomLeaveRsp && Object.hasOwnProperty.call(e, "roomLeaveRsp") && $root.proto.RoomLeaveRsp.encode(e.roomLeaveRsp, t.uint32(106).fork()).ldelim();
            null != e.roomUpdateOptionsRsp && Object.hasOwnProperty.call(e, "roomUpdateOptionsRsp") && $root.proto.RoomUpdateOptionsRsp.encode(e.roomUpdateOptionsRsp, t.uint32(114).fork()).ldelim();
            null != e.roomStartGameRsp && Object.hasOwnProperty.call(e, "roomStartGameRsp") && $root.proto.RoomStartGameRsp.encode(e.roomStartGameRsp, t.uint32(122).fork()).ldelim();
            null != e.roomGameSyncRsp && Object.hasOwnProperty.call(e, "roomGameSyncRsp") && $root.proto.RoomGameSyncRsp.encode(e.roomGameSyncRsp, t.uint32(130).fork()).ldelim();
            null != e.roomGoNextRsp && Object.hasOwnProperty.call(e, "roomGoNextRsp") && $root.proto.RoomGoNextRsp.encode(e.roomGoNextRsp, t.uint32(138).fork()).ldelim();
            null != e.roomReconnectRsp && Object.hasOwnProperty.call(e, "roomReconnectRsp") && $root.proto.RoomReconnectRsp.encode(e.roomReconnectRsp, t.uint32(146).fork()).ldelim();
            null != e.roomJoinNotify && Object.hasOwnProperty.call(e, "roomJoinNotify") && $root.proto.RoomJoinNotify.encode(e.roomJoinNotify, t.uint32(162).fork()).ldelim();
            null != e.roomLeaveNotify && Object.hasOwnProperty.call(e, "roomLeaveNotify") && $root.proto.RoomLeaveNotify.encode(e.roomLeaveNotify, t.uint32(170).fork()).ldelim();
            null != e.roomUpdateOptionsNotify && Object.hasOwnProperty.call(e, "roomUpdateOptionsNotify") && $root.proto.RoomUpdateOptionsNotify.encode(e.roomUpdateOptionsNotify, t.uint32(178).fork()).ldelim();
            null != e.roomUpdateOwnerNotify && Object.hasOwnProperty.call(e, "roomUpdateOwnerNotify") && $root.proto.RoomUpdateOwnerNotify.encode(e.roomUpdateOwnerNotify, t.uint32(186).fork()).ldelim();
            null != e.roomGameStartingNotify && Object.hasOwnProperty.call(e, "roomGameStartingNotify") && $root.proto.RoomGameStartingNotify.encode(e.roomGameStartingNotify, t.uint32(194).fork()).ldelim();
            null != e.roomGameBeginNotify && Object.hasOwnProperty.call(e, "roomGameBeginNotify") && $root.proto.RoomGameBeginNotify.encode(e.roomGameBeginNotify, t.uint32(202).fork()).ldelim();
            null != e.roomGameResultNotify && Object.hasOwnProperty.call(e, "roomGameResultNotify") && $root.proto.RoomGameResultNotify.encode(e.roomGameResultNotify, t.uint32(210).fork()).ldelim();
            null != e.roomCloseNotify && Object.hasOwnProperty.call(e, "roomCloseNotify") && $root.proto.RoomCloseNotify.encode(e.roomCloseNotify, t.uint32(218).fork()).ldelim();
            null != e.roomGameSyncNotify && Object.hasOwnProperty.call(e, "roomGameSyncNotify") && $root.proto.RoomGameSyncNotify.encode(e.roomGameSyncNotify, t.uint32(226).fork()).ldelim();
            null != e.roomChangeNickNameNotify && Object.hasOwnProperty.call(e, "roomChangeNickNameNotify") && $root.proto.RoomChangeNickNameNotify.encode(e.roomChangeNickNameNotify, t.uint32(234).fork()).ldelim();
            null != e.roomAddBotRsp && Object.hasOwnProperty.call(e, "roomAddBotRsp") && $root.proto.RoomAddBotRsp.encode(e.roomAddBotRsp, t.uint32(810).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomAckMessage(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.uid = e.string();
                        break;

                    case 10:
                        r.roomCreateRsp = $root.proto.RoomCreateRsp.decode(e, e.uint32());
                        break;

                    case 11:
                        r.roomJoinRsp = $root.proto.RoomJoinRsp.decode(e, e.uint32());
                        break;

                    case 12:
                        r.roomChangeNickNameRsp = $root.proto.RoomChangeNickNameRsp.decode(e, e.uint32());
                        break;

                    case 13:
                        r.roomLeaveRsp = $root.proto.RoomLeaveRsp.decode(e, e.uint32());
                        break;

                    case 14:
                        r.roomUpdateOptionsRsp = $root.proto.RoomUpdateOptionsRsp.decode(e, e.uint32());
                        break;

                    case 15:
                        r.roomStartGameRsp = $root.proto.RoomStartGameRsp.decode(e, e.uint32());
                        break;

                    case 16:
                        r.roomGameSyncRsp = $root.proto.RoomGameSyncRsp.decode(e, e.uint32());
                        break;

                    case 17:
                        r.roomGoNextRsp = $root.proto.RoomGoNextRsp.decode(e, e.uint32());
                        break;

                    case 18:
                        r.roomReconnectRsp = $root.proto.RoomReconnectRsp.decode(e, e.uint32());
                        break;

                    case 20:
                        r.roomJoinNotify = $root.proto.RoomJoinNotify.decode(e, e.uint32());
                        break;

                    case 21:
                        r.roomLeaveNotify = $root.proto.RoomLeaveNotify.decode(e, e.uint32());
                        break;

                    case 22:
                        r.roomUpdateOptionsNotify = $root.proto.RoomUpdateOptionsNotify.decode(e, e.uint32());
                        break;

                    case 23:
                        r.roomUpdateOwnerNotify = $root.proto.RoomUpdateOwnerNotify.decode(e, e.uint32());
                        break;

                    case 24:
                        r.roomGameStartingNotify = $root.proto.RoomGameStartingNotify.decode(e, e.uint32());
                        break;

                    case 25:
                        r.roomGameBeginNotify = $root.proto.RoomGameBeginNotify.decode(e, e.uint32());
                        break;

                    case 26:
                        r.roomGameResultNotify = $root.proto.RoomGameResultNotify.decode(e, e.uint32());
                        break;

                    case 27:
                        r.roomCloseNotify = $root.proto.RoomCloseNotify.decode(e, e.uint32());
                        break;

                    case 28:
                        r.roomGameSyncNotify = $root.proto.RoomGameSyncNotify.decode(e, e.uint32());
                        break;

                    case 29:
                        r.roomChangeNickNameNotify = $root.proto.RoomChangeNickNameNotify.decode(e, e.uint32());
                        break;

                    case 101:
                        r.roomAddBotRsp = $root.proto.RoomAddBotRsp.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomFairProperty = function() {
        function e(e) {
            this.firstBlockIds = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.isOpenFairness = !1;
        e.prototype.boardIndex = 0;
        e.prototype.firstBlockIds = $util.emptyArray;
        e.prototype.endlessGameTime = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.isOpenFairness && Object.hasOwnProperty.call(e, "isOpenFairness") && t.uint32(8).bool(e.isOpenFairness);
            null != e.boardIndex && Object.hasOwnProperty.call(e, "boardIndex") && t.uint32(16).int32(e.boardIndex);
            if (null != e.firstBlockIds && e.firstBlockIds.length) {
                t.uint32(26).fork();
                for (var o = 0; o < e.firstBlockIds.length; ++o) t.int32(e.firstBlockIds[o]);
                t.ldelim();
            }
            null != e.endlessGameTime && Object.hasOwnProperty.call(e, "endlessGameTime") && t.uint32(32).bool(e.endlessGameTime);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomFairProperty(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.isOpenFairness = e.bool();
                        break;

                    case 2:
                        r.boardIndex = e.int32();
                        break;

                    case 3:
                        r.firstBlockIds && r.firstBlockIds.length || (r.firstBlockIds = []);
                        if (2 == (7 & n))
                            for (var a = e.uint32() + e.pos; e.pos < a;) r.firstBlockIds.push(e.int32());
                        else r.firstBlockIds.push(e.int32());
                        break;

                    case 4:
                        r.endlessGameTime = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomOptions = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.maxPlayerCount = 0;
        e.prototype.gameTime = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.maxPlayerCount && Object.hasOwnProperty.call(e, "maxPlayerCount") && t.uint32(8).uint32(e.maxPlayerCount);
            null != e.gameTime && Object.hasOwnProperty.call(e, "gameTime") && t.uint32(16).uint32(e.gameTime);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomOptions(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.maxPlayerCount = e.uint32();
                        break;

                    case 2:
                        r.gameTime = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomPlayerInfo = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerId = "";
        e.prototype.nickName = "";
        e.prototype.enterTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.scoreTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.isDead = !1;
        e.prototype.isOffline = !1;
        e.prototype.isBot = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(10).string(e.playerId);
            null != e.nickName && Object.hasOwnProperty.call(e, "nickName") && t.uint32(18).string(e.nickName);
            null != e.enterTimestamp && Object.hasOwnProperty.call(e, "enterTimestamp") && t.uint32(24).int64(e.enterTimestamp);
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(32).int64(e.score);
            null != e.scoreTimestamp && Object.hasOwnProperty.call(e, "scoreTimestamp") && t.uint32(40).int64(e.scoreTimestamp);
            null != e.isDead && Object.hasOwnProperty.call(e, "isDead") && t.uint32(48).bool(e.isDead);
            null != e.isOffline && Object.hasOwnProperty.call(e, "isOffline") && t.uint32(56).bool(e.isOffline);
            null != e.isBot && Object.hasOwnProperty.call(e, "isBot") && t.uint32(64).bool(e.isBot);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomPlayerInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerId = e.string();
                        break;

                    case 2:
                        r.nickName = e.string();
                        break;

                    case 3:
                        r.enterTimestamp = e.int64();
                        break;

                    case 4:
                        r.score = e.int64();
                        break;

                    case 5:
                        r.scoreTimestamp = e.int64();
                        break;

                    case 6:
                        r.isDead = e.bool();
                        break;

                    case 7:
                        r.isOffline = e.bool();
                        break;

                    case 8:
                        r.isBot = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomData = function() {
        function e(e) {
            this.playerList = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomId = "";
        e.prototype.roomState = 0;
        e.prototype.ownerId = "";
        e.prototype.startTimeout = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.inviteCode = "";
        e.prototype.gameBeginTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.gameEndTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.options = null;
        e.prototype.playerList = $util.emptyArray;
        e.prototype.roomDistinctId = "";
        e.prototype.fairProperty = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId);
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(16).int32(e.roomState);
            null != e.ownerId && Object.hasOwnProperty.call(e, "ownerId") && t.uint32(26).string(e.ownerId);
            null != e.startTimeout && Object.hasOwnProperty.call(e, "startTimeout") && t.uint32(32).int64(e.startTimeout);
            null != e.inviteCode && Object.hasOwnProperty.call(e, "inviteCode") && t.uint32(42).string(e.inviteCode);
            null != e.gameBeginTimestamp && Object.hasOwnProperty.call(e, "gameBeginTimestamp") && t.uint32(48).int64(e.gameBeginTimestamp);
            null != e.gameEndTimestamp && Object.hasOwnProperty.call(e, "gameEndTimestamp") && t.uint32(56).int64(e.gameEndTimestamp);
            null != e.options && Object.hasOwnProperty.call(e, "options") && $root.proto.RoomOptions.encode(e.options, t.uint32(66).fork()).ldelim();
            if (null != e.playerList && e.playerList.length)
                for (var o = 0; o < e.playerList.length; ++o) $root.proto.RoomPlayerInfo.encode(e.playerList[o], t.uint32(74).fork()).ldelim();
            null != e.roomDistinctId && Object.hasOwnProperty.call(e, "roomDistinctId") && t.uint32(82).string(e.roomDistinctId);
            null != e.fairProperty && Object.hasOwnProperty.call(e, "fairProperty") && $root.proto.RoomFairProperty.encode(e.fairProperty, t.uint32(90).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomId = e.string();
                        break;

                    case 2:
                        r.roomState = e.int32();
                        break;

                    case 3:
                        r.ownerId = e.string();
                        break;

                    case 4:
                        r.startTimeout = e.int64();
                        break;

                    case 5:
                        r.inviteCode = e.string();
                        break;

                    case 6:
                        r.gameBeginTimestamp = e.int64();
                        break;

                    case 7:
                        r.gameEndTimestamp = e.int64();
                        break;

                    case 8:
                        r.options = $root.proto.RoomOptions.decode(e, e.uint32());
                        break;

                    case 9:
                        r.playerList && r.playerList.length || (r.playerList = []);
                        r.playerList.push($root.proto.RoomPlayerInfo.decode(e, e.uint32()));
                        break;

                    case 10:
                        r.roomDistinctId = e.string();
                        break;

                    case 11:
                        r.fairProperty = $root.proto.RoomFairProperty.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomCreateReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.maxPlayer = 0;
        e.prototype.inviteCodeLen = 0;
        e.prototype.fairProperty = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.maxPlayer && Object.hasOwnProperty.call(e, "maxPlayer") && t.uint32(8).int32(e.maxPlayer);
            null != e.inviteCodeLen && Object.hasOwnProperty.call(e, "inviteCodeLen") && t.uint32(16).int32(e.inviteCodeLen);
            null != e.fairProperty && Object.hasOwnProperty.call(e, "fairProperty") && $root.proto.RoomFairProperty.encode(e.fairProperty, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomCreateReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.maxPlayer = e.int32();
                        break;

                    case 2:
                        r.inviteCodeLen = e.int32();
                        break;

                    case 3:
                        r.fairProperty = $root.proto.RoomFairProperty.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomCreateRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roomData = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roomData && Object.hasOwnProperty.call(e, "roomData") && $root.proto.RoomData.encode(e.roomData, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomCreateRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roomData = $root.proto.RoomData.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomJoinReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.inviteCode = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.inviteCode && Object.hasOwnProperty.call(e, "inviteCode") && t.uint32(10).string(e.inviteCode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomJoinReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.inviteCode = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomJoinRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roomData = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roomData && Object.hasOwnProperty.call(e, "roomData") && $root.proto.RoomData.encode(e.roomData, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomJoinRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roomData = $root.proto.RoomData.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomJoinNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = null;
        e.prototype.startTimeout = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.RoomPlayerInfo.encode(e.player, t.uint32(10).fork()).ldelim();
            null != e.startTimeout && Object.hasOwnProperty.call(e, "startTimeout") && t.uint32(16).int64(e.startTimeout);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomJoinNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.player = $root.proto.RoomPlayerInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.startTimeout = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomLeaveReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomLeaveReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.RoomLeaveRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomLeaveRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomLeaveNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerId = "";
        e.prototype.startTimeout = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(10).string(e.playerId);
            null != e.startTimeout && Object.hasOwnProperty.call(e, "startTimeout") && t.uint32(16).int64(e.startTimeout);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomLeaveNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerId = e.string();
                        break;

                    case 2:
                        r.startTimeout = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomUpdateOptionsReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.opts = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.opts && Object.hasOwnProperty.call(e, "opts") && $root.proto.RoomOptions.encode(e.opts, t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomUpdateOptionsReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.opts = $root.proto.RoomOptions.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomUpdateOptionsRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.opts = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.opts && Object.hasOwnProperty.call(e, "opts") && $root.proto.RoomOptions.encode(e.opts, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomUpdateOptionsRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.opts = $root.proto.RoomOptions.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomUpdateOptionsNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomId = "";
        e.prototype.opts = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId);
            null != e.opts && Object.hasOwnProperty.call(e, "opts") && $root.proto.RoomOptions.encode(e.opts, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomUpdateOptionsNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomId = e.string();
                        break;

                    case 2:
                        r.opts = $root.proto.RoomOptions.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomUpdateOwnerNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ownerId = "";
        e.prototype.startTimeout = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ownerId && Object.hasOwnProperty.call(e, "ownerId") && t.uint32(10).string(e.ownerId);
            null != e.startTimeout && Object.hasOwnProperty.call(e, "startTimeout") && t.uint32(16).int64(e.startTimeout);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomUpdateOwnerNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ownerId = e.string();
                        break;

                    case 2:
                        r.startTimeout = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomCloseNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomState = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(8).int32(e.roomState);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomCloseNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomState = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomStartGameReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomStartGameReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.RoomStartGameRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roomState = 0;
        e.prototype.gameBeginTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(16).int32(e.roomState);
            null != e.gameBeginTimestamp && Object.hasOwnProperty.call(e, "gameBeginTimestamp") && t.uint32(24).int64(e.gameBeginTimestamp);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomStartGameRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roomState = e.int32();
                        break;

                    case 3:
                        r.gameBeginTimestamp = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameStartingNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomState = 0;
        e.prototype.gameBeginTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(8).int32(e.roomState);
            null != e.gameBeginTimestamp && Object.hasOwnProperty.call(e, "gameBeginTimestamp") && t.uint32(16).int64(e.gameBeginTimestamp);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameStartingNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomState = e.int32();
                        break;

                    case 2:
                        r.gameBeginTimestamp = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameBeginNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomState = 0;
        e.prototype.gameEndTimestamp = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(8).int32(e.roomState);
            null != e.gameEndTimestamp && Object.hasOwnProperty.call(e, "gameEndTimestamp") && t.uint32(16).int64(e.gameEndTimestamp);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameBeginNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomState = e.int32();
                        break;

                    case 2:
                        r.gameEndTimestamp = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameSyncReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.score = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.isDead = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(8).int64(e.score);
            null != e.isDead && Object.hasOwnProperty.call(e, "isDead") && t.uint32(16).bool(e.isDead);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameSyncReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.score = e.int64();
                        break;

                    case 2:
                        r.isDead = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameSyncRsp = function() {
        function e(e) {
            this.playerList = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.ErrCode = 0;
        e.prototype.playerList = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.ErrCode && Object.hasOwnProperty.call(e, "ErrCode") && t.uint32(8).int32(e.ErrCode);
            if (null != e.playerList && e.playerList.length)
                for (var o = 0; o < e.playerList.length; ++o) $root.proto.RoomPlayerInfo.encode(e.playerList[o], t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameSyncRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.ErrCode = e.int32();
                        break;

                    case 2:
                        r.playerList && r.playerList.length || (r.playerList = []);
                        r.playerList.push($root.proto.RoomPlayerInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameSyncNotify = function() {
        function e(e) {
            this.playerList = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerId = "";
        e.prototype.playerList = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(10).string(e.playerId);
            if (null != e.playerList && e.playerList.length)
                for (var o = 0; o < e.playerList.length; ++o) $root.proto.RoomPlayerInfo.encode(e.playerList[o], t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameSyncNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerId = e.string();
                        break;

                    case 2:
                        r.playerList && r.playerList.length || (r.playerList = []);
                        r.playerList.push($root.proto.RoomPlayerInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGameResultNotify = function() {
        function e(e) {
            this.playerList = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.roomState = 0;
        e.prototype.playerList = $util.emptyArray;
        e.prototype.nextRoomId = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.roomState && Object.hasOwnProperty.call(e, "roomState") && t.uint32(8).int32(e.roomState);
            if (null != e.playerList && e.playerList.length)
                for (var o = 0; o < e.playerList.length; ++o) $root.proto.RoomPlayerInfo.encode(e.playerList[o], t.uint32(18).fork()).ldelim();
            null != e.nextRoomId && Object.hasOwnProperty.call(e, "nextRoomId") && t.uint32(26).string(e.nextRoomId);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGameResultNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.roomState = e.int32();
                        break;

                    case 2:
                        r.playerList && r.playerList.length || (r.playerList = []);
                        r.playerList.push($root.proto.RoomPlayerInfo.decode(e, e.uint32()));
                        break;

                    case 3:
                        r.nextRoomId = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomChangeNickNameReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.nickName = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.nickName && Object.hasOwnProperty.call(e, "nickName") && t.uint32(10).string(e.nickName);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomChangeNickNameReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.nickName = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomChangeNickNameRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.nickName = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.nickName && Object.hasOwnProperty.call(e, "nickName") && t.uint32(18).string(e.nickName);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomChangeNickNameRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.nickName = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomChangeNickNameNotify = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.playerId = "";
        e.prototype.nickName = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(10).string(e.playerId);
            null != e.nickName && Object.hasOwnProperty.call(e, "nickName") && t.uint32(18).string(e.nickName);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomChangeNickNameNotify(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.playerId = e.string();
                        break;

                    case 2:
                        r.nickName = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGoNextReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.maxPlayer = 0;
        e.prototype.inviteCodeLen = 0;
        e.prototype.fairProperty = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.maxPlayer && Object.hasOwnProperty.call(e, "maxPlayer") && t.uint32(8).int32(e.maxPlayer);
            null != e.inviteCodeLen && Object.hasOwnProperty.call(e, "inviteCodeLen") && t.uint32(16).int32(e.inviteCodeLen);
            null != e.fairProperty && Object.hasOwnProperty.call(e, "fairProperty") && $root.proto.RoomFairProperty.encode(e.fairProperty, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGoNextReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.maxPlayer = e.int32();
                        break;

                    case 2:
                        r.inviteCodeLen = e.int32();
                        break;

                    case 3:
                        r.fairProperty = $root.proto.RoomFairProperty.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomGoNextRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roomData = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roomData && Object.hasOwnProperty.call(e, "roomData") && $root.proto.RoomData.encode(e.roomData, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomGoNextRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roomData = $root.proto.RoomData.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomReconnectReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.lastResult = !1;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.lastResult && Object.hasOwnProperty.call(e, "lastResult") && t.uint32(8).bool(e.lastResult);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomReconnectReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.lastResult = e.bool();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomReconnectRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.roomData = null;
        e.prototype.result = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            null != e.roomData && Object.hasOwnProperty.call(e, "roomData") && $root.proto.RoomData.encode(e.roomData, t.uint32(18).fork()).ldelim();
            null != e.result && Object.hasOwnProperty.call(e, "result") && $root.proto.RoomGameResultNotify.encode(e.result, t.uint32(26).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomReconnectRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.roomData = $root.proto.RoomData.decode(e, e.uint32());
                        break;

                    case 3:
                        r.result = $root.proto.RoomGameResultNotify.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomAddBotReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.randMin = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.randMax = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.prototype.num = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.randMin && Object.hasOwnProperty.call(e, "randMin") && t.uint32(8).int64(e.randMin);
            null != e.randMax && Object.hasOwnProperty.call(e, "randMax") && t.uint32(16).int64(e.randMax);
            null != e.num && Object.hasOwnProperty.call(e, "num") && t.uint32(24).int32(e.num);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomAddBotReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.randMin = e.int64();
                        break;

                    case 2:
                        r.randMax = e.int64();
                        break;

                    case 3:
                        r.num = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.RoomAddBotRsp = function() {
        function e(e) {
            this.player = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.errCode = 0;
        e.prototype.player = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(8).int32(e.errCode);
            if (null != e.player && e.player.length)
                for (var o = 0; o < e.player.length; ++o) $root.proto.RoomPlayerInfo.encode(e.player[o], t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.RoomAddBotRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.errCode = e.int32();
                        break;

                    case 2:
                        r.player && r.player.length || (r.player = []);
                        r.player.push($root.proto.RoomPlayerInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.DataTransferCodeReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.DataTransferCodeReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.DataTransferCodeRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.code = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(18).string(e.code);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.DataTransferCodeRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.code = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.TransferDataReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.code = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(10).string(e.code);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.TransferDataReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.code = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.TransferDataRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = null;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.PlayerInfo.encode(e.player, t.uint32(18).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.TransferDataRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.player = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.LoginReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.gameVersion = "";
        e.prototype.sdkVersion = "";
        e.prototype.UID = "";
        e.prototype.gameWayNumber = "";
        e.prototype.abceshiKeyID = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.gameVersion && Object.hasOwnProperty.call(e, "gameVersion") && t.uint32(10).string(e.gameVersion);
            null != e.sdkVersion && Object.hasOwnProperty.call(e, "sdkVersion") && t.uint32(18).string(e.sdkVersion);
            null != e.UID && Object.hasOwnProperty.call(e, "UID") && t.uint32(26).string(e.UID);
            null != e.gameWayNumber && Object.hasOwnProperty.call(e, "gameWayNumber") && t.uint32(34).string(e.gameWayNumber);
            null != e.abceshiKeyID && Object.hasOwnProperty.call(e, "abceshiKeyID") && t.uint32(40).uint32(e.abceshiKeyID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.LoginReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.gameVersion = e.string();
                        break;

                    case 2:
                        r.sdkVersion = e.string();
                        break;

                    case 3:
                        r.UID = e.string();
                        break;

                    case 4:
                        r.gameWayNumber = e.string();
                        break;

                    case 5:
                        r.abceshiKeyID = e.uint32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.LoginRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.Player = null;
        e.prototype.serverTime = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.Player && Object.hasOwnProperty.call(e, "Player") && $root.proto.PlayerInfo.encode(e.Player, t.uint32(10).fork()).ldelim();
            null != e.serverTime && Object.hasOwnProperty.call(e, "serverTime") && t.uint32(16).int64(e.serverTime);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.LoginRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.Player = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.serverTime = e.int64();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.PingACK = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.PingACK(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.ClientClosedACK = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.AgentSvcID = "";
        e.prototype.UID = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.AgentSvcID && Object.hasOwnProperty.call(e, "AgentSvcID") && t.uint32(10).string(e.AgentSvcID);
            null != e.UID && Object.hasOwnProperty.call(e, "UID") && t.uint32(18).string(e.UID);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.ClientClosedACK(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.AgentSvcID = e.string();
                        break;

                    case 2:
                        r.UID = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.TransmitACK = function() {
        function e(e) {
            this.UIDList = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.MsgID = 0;
        e.prototype.MsgData = $util.newBuffer([]);
        e.prototype.All = !1;
        e.prototype.UID = "";
        e.prototype.UIDList = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.MsgID && Object.hasOwnProperty.call(e, "MsgID") && t.uint32(8).uint32(e.MsgID);
            null != e.MsgData && Object.hasOwnProperty.call(e, "MsgData") && t.uint32(18).bytes(e.MsgData);
            null != e.All && Object.hasOwnProperty.call(e, "All") && t.uint32(24).bool(e.All);
            null != e.UID && Object.hasOwnProperty.call(e, "UID") && t.uint32(34).string(e.UID);
            if (null != e.UIDList && e.UIDList.length)
                for (var o = 0; o < e.UIDList.length; ++o) t.uint32(42).string(e.UIDList[o]);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.TransmitACK(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.MsgID = e.uint32();
                        break;

                    case 2:
                        r.MsgData = e.bytes();
                        break;

                    case 3:
                        r.All = e.bool();
                        break;

                    case 4:
                        r.UID = e.string();
                        break;

                    case 5:
                        r.UIDList && r.UIDList.length || (r.UIDList = []);
                        r.UIDList.push(e.string());
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.BindAccountReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.token = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(10).string(e.token);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.BindAccountReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.token = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.NeedSelectDataRsp = function() {
        function e(e) {
            this.player = [];
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = $util.emptyArray;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            if (null != e.player && e.player.length)
                for (var o = 0; o < e.player.length; ++o) $root.proto.PlayerInfo.encode(e.player[o], t.uint32(10).fork()).ldelim();
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.NeedSelectDataRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.player && r.player.length || (r.player = []);
                        r.player.push($root.proto.PlayerInfo.decode(e, e.uint32()));
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SelectDataReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.uid = "";
        e.prototype.token = "";
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(10).string(e.uid);
            null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SelectDataReq(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.uid = e.string();
                        break;

                    case 2:
                        r.token = e.string();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        return e;
    }();
    e.SelectDataRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.SelectDataRsp(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.UnBindAccountReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UnBindAccountReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.UnBindAccountRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.UnBindAccountRsp(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.LogoutAccountReq = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.LogoutAccountReq(); e.pos < o;) {
                var n = e.uint32();
                e.skipType(7 & n);
            }
            return r;
        };
        return e;
    }();
    e.PlayerSyncRsp = function() {
        function e(e) {
            if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]]);
        }
        e.prototype.player = null;
        e.prototype.type = 0;
        e.encode = function(e, t) {
            t || (t = $Writer.create());
            null != e.player && Object.hasOwnProperty.call(e, "player") && $root.proto.PlayerInfo.encode(e.player, t.uint32(10).fork()).ldelim();
            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type);
            return t;
        };
        e.decode = function(e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var o = void 0 === t ? e.len : e.pos + t, r = new $root.proto.PlayerSyncRsp(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.player = $root.proto.PlayerInfo.decode(e, e.uint32());
                        break;

                    case 2:
                        r.type = e.int32();
                        break;

                    default:
                        e.skipType(7 & n);
                }
            }
            return r;
        };
        e.EPlayerSyncType = function() {
            var e = {},
                t = Object.create(e);
            t[e[0] = "EPlayerSyncType_Bind"] = 0;
            t[e[1] = "EPlayerSyncType_SelectData"] = 1;
            t[e[2] = "EPlayerSyncType_UnBindAccount"] = 2;
            t[e[3] = "EPlayerSyncType_LogoutAccount"] = 3;
            return t;
        }();
        return e;
    }();
    return e;
}();