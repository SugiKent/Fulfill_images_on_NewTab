$(function(){
  var APIKey = 'bf1c84c9329b48a0a3bc64c976409cbd';

  getSuzu();

  function showSuzu(jsonData) {
    console.log(jsonData);
    var imgHtml = "";
    for (var i = 0; i < jsonData.value.length; i++) {
      imgHtml = imgHtml + '<div class="grid"><a href="' + jsonData.value[i].hostPageUrl + '" target="_blank"><img src="'+jsonData.value[i].contentUrl+'"></a></div>'
    }
    $('.Suzu').html(imgHtml);
  }

  function visibleSuzu() {
    var images = $('img');
    for (var i = 0; i < images.length; i++) {
      let image = images[i];
      setTimeout(function(){
        $(image).addClass('visible');
      }, 800);
    }
  }

  function getSuzu() {
    var min = 0 ;
    var max = 250 ;
    var count = 40;
    var offset = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    // 広瀬すず
    var searchContent = '乃木坂46';
    if (localStorage['searchContent']) {
      searchContent = localStorage['searchContent'];
    }
    $.ajax({
         url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q='+searchContent+'&mkt=ja-JP&count='+count+'&offset='+offset+'&safeSearch=Moderate',
         beforeSend: function(xhrObj){
             // Request headers
             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",'bf1c84c9329b48a0a3bc64c976409cbd');
         },
         type: "GET",
     })
     .done(function(jsonData) {
       showSuzu(jsonData);
       setTimeout(function(){
         visibleSuzu();
       }, 300);
     })
     .fail(function(error) {
       console.log('error');
     });
  }

});
