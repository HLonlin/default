/**
 * image.js
 * 常用图片操作函数、
 * @author HLonlin <1021944439@qq.com>
 */
const img = {
    imgTobase: function() { //图片转base64

    },
    saveImg: function(url, filename) { // 保存图片
        var save_link = document.createElement('a');
        save_link.href = url;
        save_link.download = filename;

        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
    },
    baseToBlob: function() { // base64转为blob
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // mime类型
        var byteString = atob(dataURI.split(',')[1]); //base64 解码
        var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
        var intArray = new Uint8Array(arrayBuffer); //创建视图

        for (var i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([intArray], { type: mimeString });
    }
}
export default img;