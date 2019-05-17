// 初始化Web Uploader

var uploader2 = WebUploader.create({

  // 选完文件后，是否自动上传。
  // auto: true,

  // swf文件路径
  // swf: BASE_URL + '/js/Uploader.swf',

  // 文件接收服务端。
  // server: 'http://webuploader.duapp.com/server/fileupload.php',

  // 选择文件的按钮。可选。
  // 内部根据当前运行是创建，可能是input元素，也可能是flash.
  pick: '#filePicker2',

  // 只允许选择图片文件。
  accept: {
    title: 'Images',
    extensions: 'gif,jpg,jpeg,bmp,png',
    mimeTypes: 'image/*'
  }
});
// 当有文件添加进来的时候
uploader2.on('beforeFileQueued', function (file) {
  if (file.size == 0) {
    return false
  }
  // 容器jQuery实例
  var $img = $('.img-detail2')
  uploader2.makeThumb(file, function (error, src) {
    if (error) {
      $img.replaceWith('<span>不能预览</span>');
      return;
    }
    $img.attr('src', src);
  }, 300, 300);
  uploader2.removeFile(file, true)
  return false
});
$('#myModal2').modal('hide')

