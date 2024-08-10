process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const logger = require('../../utils/logger');
const browser = require('../../browser/');
const { jsdomFromUrl } = require('../../utils/jsdom');

// 从命令行参数获取baseUrl和jspPath，如果没有提供，则为默认值
const baseUrl = process.argv[2] || "https://cq.cbss.10010.com";
const xhrUrl = process.argv[3] || "";

async function loadPages() {
    const [jsdomer, cookieJar] = jsdomFromUrl({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    });

    const dom = await jsdomer(`${baseUrl}`);
    window = dom.window;


    // 重写XMLHttpRequest.prototype.open方法
    window.XMLHttpRequest.prototype.open = function(method, url, async) {
        // 保存URL到实例上，以便之后可以访问
        // console.log(this);
        this._savedUrl = url;
        // 调用原始的open方法以保持XMLHttpRequest的正常工作ls
        // originalOpen.apply(this, arguments);
    };

    window.onbeforeunload = async(url) => {
        const cookies = cookieJar.getCookieStringSync(baseUrl);
        //logger.debug('生成cookie：', cookies);


        //console.log("url后缀");

        let xhr = new window.XMLHttpRequest();
        // 在实例上调用open方法
        xhr.open('GET', xhrUrl, false);
        // 因为open方法没有返回值，所以这里的res将是undefined
        let ems_url = xhr._savedUrl; // 从实例上获取保存的URL
        let res = {
            cookies: cookies,
            url: ems_url,
            xhrUrl: xhrUrl,
            baseUrl: baseUrl
        }
        console.log(JSON.stringify(res))
        process.exit();
    }
    browser(window, 'chrome');
}

loadPages()