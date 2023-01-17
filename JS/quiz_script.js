const numberSteps = $('.quiz__step').length - 1;
let disableButtons = false;
const tick = '<div class="answer__tick"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div>';
let thanks = '<div class="thanks"><div class="thanks__tick">✔ </div><h1 class="thanks__title">Thank you!</h1></div>';

$('.answer__input').on('change', function (e) {
  if ($(this).next().children('.answer__tick').length > 0) {
    return false;
  }
  $(this).next().append(tick);
});

$('.navigation__btn--right').click(function (e) {
  let currentIndex = Number($('.quiz__step--current').attr('data-question'));
  
  if ($('.quiz__step--current input:checked').length === 0) {
    return false;
  }
  
  if (currentIndex === numberSteps || disableButtons) {
    return false;
  }
  
  if (currentIndex + 1 === numberSteps) {
    $(this).addClass('navigation__btn--disabled');
  }
  
  if (currentIndex === numberSteps - 1) {
    $('.summary__item').remove();
    $('.quiz__step:not(.quiz__summary)').each(function (index, item) {
      let icon = $(item).children('.question__emoji').text();
      let answer = $(item).children('.answer').find('input:checked').val();
      let node = '<div class="summary__item"><div class="question__emoji">' + icon + '</div>' + answer + '</div>';
      $('#summary').append(node);
    });
  }
  
  const percentage = (currentIndex * 100) / numberSteps;
  $('.progress__inner').width(percentage + '%');
  
  $('.quiz__step--current').hide(300);
  $('.quiz__step--current').removeClass('quiz__step--current');
  $('.quiz__step--' + (currentIndex + 1)).show(300).addClass('quiz__step--current');
  currentIndex = Number($('.quiz__step--current').attr('data-question'));
  
  if (currentIndex > 1) {
    $('.navigation__btn--left').removeClass('navigation__btn--disabled');
  }
});

$('.navigation__btn--left').click(function (e) {
  let currentIndex = Number($('.quiz__step--current').attr('data-question'));
  
  if (currentIndex === 1 || disableButtons) {
    $(this).addClass('navigation__btn--disabled');
    return false;
  }
  
  $('.navigation__btn--right').removeClass('navigation__btn--disabled');
  
  $('.quiz__step--current').hide(300);
  $('.quiz__step--current').removeClass('quiz__step--current');
  $('.quiz__step--' + (currentIndex - 1)).show(300).addClass('quiz__step--current');
  currentIndex = Number($('.quiz__step--current').attr('data-question'));
  
  if (currentIndex === 1) {
    $(this).addClass('navigation__btn--disabled');
  }
  
  const percentage = ((currentIndex - 1) * 100) / numberSteps + 1;
  $('.progress__inner').width(percentage + '%');
});
