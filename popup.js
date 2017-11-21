$(function(){
  var defaultWord = '';
  if (localStorage['searchContent']) {
    defaultWord = localStorage['searchContent'];
  }
  console.log(defaultWord);
  $('.Popup__input').val(defaultWord);

  $('.Popup__save').on('click', function(){
    var value = $('.Popup__input').val();
    chrome.runtime.sendMessage({method: 'setItem', key: 'searchContent', value: value});
    window.close();
  });

  $(document).on('click', function(e) {
    if (!$.contains($(".Popup__wrapper")[0], e.target)) {
      window.close();
    }
  });
});
