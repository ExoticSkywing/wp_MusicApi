const axios = require('axios');
const { APIError } = require('../middlewares/rest');
const __Cookie = require('./cookie_util');

/**
 * 酷狗的请求函数
 * @param {*} url 
 * @param {*} _params 
 * @param {*} flag 
 * @returns 
 */
let kugou_request = async (url, _params, flag = 1) => {
    let result = {};
    try {
        if (_params !== undefined) {
            result = await axios.get(url, {
                params: _params,
                headers: flag ? { 
                    // Cookie: 'Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1609307382; _ga=GA1.2.93241344.1609307382; _gid=GA1.2.1348073384.1609307382; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1609420898; _gat=1; kw_token=95MWTYC4FP',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
                    Referer: 'https://www.kugou.com/',
                    Cookie: __Cookie.serialization(global.kugou_cookie),
                    //Host: 'wwwapi.kugou.com'
                } : {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
                    Referer: 'https://www.kugou.com/',
                }
            });
        } else {
            result = await axios.get(url, {
                headers: {
                    // Cookie: 'Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1609307382; _ga=GA1.2.93241344.1609307382; _gid=GA1.2.1348073384.1609307382; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1609420898; _gat=1; kw_token=95MWTYC4FP',
                    Cookie: __Cookie.serialization(global.kugou_cookie),
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
                    Referer: 'https://www.kugou.com/',
                    dfid: '1ssiv93oVqMp27cirf2CvoF1',
                    mid: '156798703528610303473757548878786007104',
                    clienttime: 1584257267,
                    'x-router': 'msearch.kugou.com',
                    'user-agent': 'Android9-AndroidPhone-10020-130-0-searchrecommendprotocol-wifi',
                    'kg-rc': 1
                }
            });
        }
    } catch (error) {
        throw new APIError('Request:Request_error', 'Request is error, please recover');
    }

    return result;
}

module.exports = {
    kugou_request
}