import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  /**
   *  如果要检索的字符串值没有出现，则该方法返回 -1。
   *  检测url地址后面参数是否包含了?如果没有，则添加?如果有则拼接&
   * */
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  /**
   * ES6 原生提供了 Promise 对象。
   * 所谓 Promise，就是一个对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），
   * 并且这个事件提供统一的 API，可供进一步处理。
   */
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {//调用jsonp获取数据
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}


/**
 * 拼接data
 * */
export function param(data) {
  let url = ''
  for (var k in data) {
    /**
     * data如果不存在则返回空,
     * */
    let value = data[k] !== undefined ? data[k] : ''
    /**
     *     encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
     *     拼接url需要传递的参数
     * */
    url += '&' + k + '=' + encodeURIComponent(value)
  }

  /**
   * 如果url为true,则去除第一个&符号，如果为false,则返回一个空
   *
   */
  return url ? url.substring(1) : ''
}
