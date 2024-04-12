var Location = function Location() { // 构造函数
    throw new TypeError("Illegal constructor");
};
catvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
location = {
    "ancestorOrigins": {},
    "href": "https://aweme.snssdk.com/falcon/poi_mwa/poi_detail?poi_id=6823981047764535310",
    "origin": "https://aweme.snssdk.com",
    "protocol": "https:",
    "host": "aweme.snssdk.com",
    "hostname": "aweme.snssdk.com",
    "port": "",
    "pathname": "/falcon/poi_mwa/poi_detail",
    "search": "?poi_id=6823981047764535310",
    "hash": ""

};
location.__proto__ = Location.prototype;

////////// 浏览器代码自动生成部分
// location.href = "https://www.baidu.com";
// location.port = "";
// location.protocol = 'https:';
// location.host = 'www.baidu.com';


////////


location = catvm.proxy(location);

