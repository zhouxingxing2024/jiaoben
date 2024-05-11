/*******************************
脚本名称:  AppRaven 解锁Pro
脚本作者：彭于晏💞
更新时间：2023年7月21日 下午4:09
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]?:\/\/appraven.net\/AppRaven\/social url script-response-body net.js
[mitm] 
hostname = appraven.net

*******************************/
/*
var body = $response.body.replace(/"premium": false/g,'"premium": true')
.replace(/"username": ".*?"/g,'"username": "彭于晏破解"')
$done({ body });
*/

var ojbk = JSON.parse($response.body);
ojbk.premium = true;ojbk.username = "彭于晏破解";
$done({body : JSON.stringify(ojbk)});
