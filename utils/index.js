// 点击显示大图
$('.show-wrap').click(e => {
  var imgsrc = $('.img-detail').attr('src')
  if (imgsrc) {
    $('.big-img').attr('src',imgsrc)
  } else {
    return
  }
  $('.big-mask').addClass('show-it')
})
$('.show-wrap2').click(e => {
  var imgsrc = $('.img-detail2').attr('src')
  if (imgsrc) {
    $('.big-img').attr('src',imgsrc)
  } else {
    return
  }
  $('.big-mask').addClass('show-it')
})
$('.big-mask').click(e=>{
  $('.big-mask').removeClass('show-it')
})