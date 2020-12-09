/**
 * image.js
 * 常用图片操作函数、
 * @author HLonlin <1021944439@qq.com>
 */
const img = {
    imgTobase: function(url) {
        console.log('url:', url);
    },
    // saveImg_url: function(url, filename, imgType) {
    //     var img = new Image();
    //     img.src = url + '?time=' + new Date().valueOf();
    //     img.onload = function() {
    //         var c = document.createElement('canvas');
    //         var ctx = c.getContext("2d");
    //         //获取图片宽与高之间的最小值作为圆的直径
    //         let min = Math.min(img.width, img.height);
    //         //半径
    //         let r = min / 2;
    //         //图片填充
    //         ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
    //         //清空指定区域
    //         ctx.clearRect(0, 0, img.width, img.height);
    //         //创建x为c.width/2、y为c.height/2、半径为r、初始角为0、结束角为π*2的圆
    //         ctx.arc(c.width / 2, c.height / 2, r, 0, Math.PI * 2);
    //         ctx.fill();
    //         //保存裁切的圆为图片到本地
    //         var save_link = document.createElement('a');
    //         save_link.download = filename || 'nameOfImage';
    //         save_link.href = c.toDataURL(imgType || 'image/jpg');
    //         save_link.dataset.downloadurl = [imgType || 'image/jpg', save_link.download, save_link.href].join(':');
    //         var event = document.createEvent('MouseEvents');
    //         event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    //         save_link.dispatchEvent(event);
    //     }
    // },
    saveImg_tag: function(tag, filename, imgType) {
        tag.onload = function() {
            var c = document.createElement('canvas');
            c.width = tag.width;
            c.height = tag.height;
            var ctx = c.getContext("2d");
            //获取图片宽与高之间的最小值作为圆的直径
            let min = Math.min(tag.width, tag.height);
            //半径
            let r = min / 2;
            //图片填充
            ctx.fillStyle = ctx.createPattern(tag, 'no-repeat');
            //清空指定区域
            ctx.clearRect(0, 0, tag.width, tag.height);
            //创建x为c.width/2、y为c.height/2、半径为r、初始角为0、结束角为π*2的圆
            ctx.arc(c.width / 2, c.height / 2, r, 0, Math.PI * 2);
            // ctx.rect(0, 0, tag.width, tag.height);
            ctx.fill();
            //保存裁切的圆为图片到本地
            var save_link = document.createElement('a');
            save_link.download = filename || 'nameOfImage';
            save_link.href = c.toDataURL(imgType || 'image/jpg');
            save_link.dataset.downloadurl = [imgType || 'image/jpg', save_link.download, save_link.href].join(':');
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        }
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