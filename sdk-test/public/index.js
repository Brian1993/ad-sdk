// 此為剛學 jquery 第一次寫出來的做品

var clicknum = 0
$('.toggle').on('click', function () {
  $(this).toggleClass('active')
  clicknum = clicknum + 1
  if (clicknum === 1) {
    $('.rwd_nav').css('left', '0%')
    $('.side1').css('left', '66.6666666%')
    $('.side2').css('left', '33.33333333%')
    $('.side3').css('left', '0%')

    clicknum = -1
  } else if (clicknum == 0) {
    $('.rwd_nav').css('left', '-100%')
    $('.side1').css('left', '-33.33333%')
    $('.side2').css('left', '-33.33333%')
    $('.side3').css('left', '-33.33333%')
  }
})
$('#section1_btn').click(function (e) {
  e.preventDefault()
  var scrolltoS2 = $('.section2').offset().top
  $('html').animate({ scrollTop: scrolltoS2 }, 500)
  $('.s2_tag_line').css('width', '160px')
  $('#big_about').css('right', '7%')
})
$('.mat-input').focus(function () {
  $(this)
    .parent()
    .addClass('is-active is-completed')
})

$('.mat-input').focusout(function () {
  if ($(this).val() === '')
    $(this)
      .parent()
      .removeClass('is-completed')
  $(this)
    .parent()
    .removeClass('is-active')
})
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop()
  if (scrollTop > 1289) {
    $('.s3_cube_path').css('stroke-dasharray', '500')
    $('.s3_tag_line').css('width', '160px')
  }
})
