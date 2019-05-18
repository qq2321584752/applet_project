

function get_ajax(url) {
    return new Promise(function (resolve, reject) {
        mpvue.request({
            url: "https://www.zhengzhicheng.cn/api/public/v1" + url,
            method: "GET",
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