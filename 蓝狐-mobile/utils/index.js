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

$('.submit').click(e=> {
  // $('.main-container').removeClass('display-flex')
  // $('.main-container').addClass('display-none')
  // $('.content-container').removeClass('display-none')
  // $('.content-container').addClass('display-flex')
})
$('.go-back').click(e=> {
  $('.content-container').removeClass('display-flex')
  $('.content-container').addClass('display-none')
  $('.main-container').removeClass('display-none')
  $('.main-container').addClass('display-flex')
})