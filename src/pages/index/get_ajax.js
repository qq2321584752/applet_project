

function get_ajax(url, method = 'GET', data = null) {
    return new Promise(function (resolve, reject) {
        mpvue.request({
            url: "https://www.zhengzhicheng.cn/api/public/v1" + url,
            method: method,
            data: data,
            success: function (res) {
                let { data: dt } = res
                resolve(dt.message)
            },
            fail: function (err) {
                reject('出错了')
            }
        });
    })


}
export default get_ajax