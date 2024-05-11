/*******************************
脚本名称:  小星星Ai陪练+解锁VIP


规则仅供学习交流，勿用于其它。

规则只供娱乐，请在下载后24小时内删除，不得用于其它非法用途，否则后果自负。

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]?:\/\/xiaoxingxing.xinghuanufang.cn url script-response-body xinghuanufang.js
[mitm] 
hostname = xiaoxingxing.xinghuanufang.cn

*******************************/

var body=$response["\u0062\u006f\u0064\u0079"]["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipType":\d+/g,"4:\"epyTpiv".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipDateTo":".?"/g,'vipDateTo\x22:\x229999-10-31\x22')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipStatus":\d/g,"0:\"sutatSpiv".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipDate":".*?"/g,"\"80-80-8888\":\"etaDpiv".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/isVip":\w+/g,"eurt:\"piVsi".split("").reverse().join(""))['replace'](/vipStatus":false/g,"eurt:\"sutatSpiv".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipDateFrom":null/g,'vipDateFrom\x22:\x222022-10-28\x2022:36:54\x22')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/hasPayLifeCard":null/g,'hasPayLifeCard\x22:false')['replace'](/nickname":null/g,'nickname\x22:\x22苹果福利社\x22')['replace'](/leftVipDesc":".*?"/g,"\"\u671F\u5230\u65E513\u670801\u5E749999\":\"cseDpiVtfel".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/vipType":-1/g,"4:\"epyTpiv".split("").reverse().join(""))['replace'](/isRenew":\w+/g,'isRenew\x22:true')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/popWindow":\d/g,'popWindow\x22:1')['replace'](/iconUrl":null/g,'iconUrl\x22:\x22https://xiaoxingxingai.oss-cn-hangzhou.aliyuncs.com/2021/5/25/dc119d4dbd5a4b0a88811f8b0b1b6772.png\x22')['replace'](/rightVipDesc":".*?"/g,'rightVipDesc\x22:\x22已永久\x22')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/isMember":\w+/g,'isMember\x22:false')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"shortName":".*?"/g,'\x22shortName\x22:\x22苹果福利社\x22')['replace'](/"vipStatus":\d/g,"1:\"sutatSpiv\"".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"vipEnd":null/g,'\x22vipEnd\x22:\x228888-08-08\x22')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"isNonMember":\w+/g,'\x22isNonMember\x22:false')['replace'](/"nickname":".*?"/g,"\"\u793E\u5229\u798F\u679C\u82F9\":\"emankcin\"".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"leftVipDescNew":".*?"/g,'\x22leftVipDescNew\x22:\x22永久使用\x22')['replace'](/"leftVipDetailUrl":".*?"/g,'\x22leftVipDetailUrl\x22:\x228888-08-08\x22')["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/"leftVipDetail":".*?"/g,"\"80-80-8888\":\"liateDpiVtfel\"".split("").reverse().join(""))['replace'](/"vipType":null/g,"4:\"epyTpiv\"".split("").reverse().join(""))['replace'](/"vipDesc":".*?"/g,'\x22vipDesc\x22:\x22永久使用\x22');$done({"\u0062\u006f\u0064\u0079":body});