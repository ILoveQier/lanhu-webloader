// 点击显示大图
$('.show-wrap').click(e => {
  var imgsrc = $('.img-detail').attr('src')
  if (imgsrc) {
    $('.big-img').attr('src', imgsrc)
  } else {
    return
  }
  $('.big-mask').addClass('show-it')
})
$('.show-wrap').hover(function () {
  $('.show-wrap .mask').removeClass('hide-it')
  $('.show-wrap .big').removeClass('hide-it')
}, function () {
  // 鼠标移出时移出hover类
  $('.show-wrap .mask').addClass('hide-it')
  $('.show-wrap .big').addClass('hide-it')
});
$('.show-wrap2').hover(function () {
  $('.show-wrap2 .mask').removeClass('hide-it')
  $('.show-wrap2 .big').removeClass('hide-it')
}, function () {
  // 鼠标移出时移出hover类
  $('.show-wrap2 .mask').addClass('hide-it')
  $('.show-wrap2 .big').addClass('hide-it')
});
$('.imgs-wrap > .img-item').click(e => {
  var imgsrc = e.currentTarget.children[0].src
  if (imgsrc) {
    $('.big-img').attr('src', imgsrc)
  } else {
    return
  }
  $('.big-mask').addClass('show-it')
})
$('.imgs-wrap > .img-item').hover(function () {
  $(this).find('.mask').removeClass('hide-it')
  $(this).find('.big').removeClass('hide-it')
}, function () {
  // 鼠标移出时移出hover类
  $(this).find('.mask').addClass('hide-it')
  $(this).find('.big').addClass('hide-it')
});
$('.show-wrap2').click(e => {
  var imgsrc = $('.img-detail2').attr('src')
  if (imgsrc) {
    $('.big-img').attr('src', imgsrc)
  } else {
    return
  }
  $('.big-mask').addClass('show-it')
})
$('.big-mask').click(e => {
  $('.big-mask').removeClass('show-it')
})

$('.submit').click(e => {
  $('.main-container').removeClass('display-flex')
  $('.main-container').addClass('display-none')
  $('.content-container').removeClass('display-none')
  $('.content-container').addClass('display-flex')
})
$('.go-back').click(e => {
  $('.content-container').removeClass('display-flex')
  $('.content-container').addClass('display-none')
  $('.main-container').removeClass('display-none')
  $('.main-container').addClass('display-flex')
})