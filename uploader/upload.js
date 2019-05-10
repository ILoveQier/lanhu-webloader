// 初始化Web Uploader
var uploader = WebUploader.create({

  // 选完文件后，是否自动上传。
  // auto: true,

  // swf文件路径
  // swf: BASE_URL + '/js/Uploader.swf',

  // 文件接收服务端。
  // server: 'http://webuploader.duapp.com/server/fileupload.php',

  // 选择文件的按钮。可选。
  // 内部根据当前运行是创建，可能是input元素，也可能是flash.
  pick: '#filePicker',

  // 只允许选择图片文件。
  accept: {
    title: 'Images',
    extensions: 'gif,jpg,jpeg,bmp,png',
    mimeTypes: 'image/*'
  }
});
// 当有文件添加进来的时候
uploader.on('fileQueued', function (file) {
  console.log(file);
  
  var len = $(".file-item").size()
  
  if (len > 2) {
    return
  }
  
  // var $li = $(
  //   '<div id="' + file.id + '" class="file-item thumbnail">' +
  //   '<img>' +
  //   '<div class="info">' + file.name + '</div>' +
  //   '</div>'
  // ),
  //   $img = $li.find('img');

  var $li = $(
    '<div id="' + file.id + '" class = "file-item">' +
      '<span>'+file.name+ '</span>'+'<span class="delete">删除</span>'+
    '</div>'
  )


  // 容器jQuery实例
  $("#fileList").append($li);
  $("#"+file.id + '> .delete').click(function(e) {
    uploader.removeFile( file );
    $('#fileList').children("#"+file.id).remove(); 
  });

  // 创建缩略图
  // 如果为非图片文件，可以不用调用此方法。
  // thumbnailWidth x thumbnailHeight 为 100 x 100
  // uploader.makeThumb(file, function (error, src) {
  //   if (error) {
  //     $img.replaceWith('<span>不能预览</span>');
  //     return;
  //   }

  //   $img.attr('src', src);
  // }, 100, 100);
});

