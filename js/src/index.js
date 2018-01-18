(function($){
// index.js
//------------jQuery start----------- project_01(5P) 

var banner = $('.banner');
var bannerUl = banner.children('ul');
var bannerLast = bannerUl.children('li');

bannerLast.last().prependTo(bannerUl);

 bannerUl.css({marginLeft:'-100%'});
 banner.css({overflow:'hidden'});
//----------- #introWrap_Slide_banner 

var leftBtn = $('.slide_btn').children('button').first();
var rightBtn = $('.slide_btn').children('button').last();

leftBtn.on('click',function(event){
event.preventDefault(); 

bannerUl.stop(true,false).animate({marginLeft:0}, function(){
  bannerLast = bannerUl.children('li').last();
  bannerLast.prependTo(bannerUl);
  bannerUl.css({marginLeft:0});
    });
  }); //LeftBtn 클릭

rightBtn.on('click',function(event){
event.preventDefault(); 

bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
bannerLast = bannerUl.children('li').first();
bannerLast.appendTo(bannerUl);
bannerUl.css({marginLeft:'-100%'});
  });//rightBtn 클릭
});
//----------- #introPage_button


var evtBanner = $('.event_banner');
var evtBannerUl = evtBanner.children('ul');
var evtBannerLast = evtBannerUl.children('li');

evtBannerLast.last().prependTo(evtBannerUl);

  evtBannerUl.css({marginLeft: '-100%'});
  evtBanner.css({overflow:'hidden'});
//----------- #eventPage_event_banner 

var evtLeftBtn = $('.event_btn').children('button').first();
var evtRightBtn = $('.event_btn').children('button').last();

evtLeftBtn.on('click',function(event){
event.preventDefault(); 

evtBannerUl.stop(false,true).animate({marginLeft:0}, function(){
  evtBannerLast = evtBannerUl.children('li').last();
  evtBannerLast.prependTo(evtBannerUl);
  evtBannerUl.css({marginLeft:0});
    });
  }); //LeftBtn 클릭

evtRightBtn.on('click',function(event){
event.preventDefault(); 

evtBannerUl.stop(true,true).animate({marginLeft:'-200%'}, function(){
evtBannerLast = evtBannerUl.children('li').first();
evtBannerLast.appendTo(evtBannerUl);
evtBannerUl.css({marginLeft:'-100%'});
  });//rightBtn 클릭
//----------- #introPage_button
  
  });

//========= 버스 이용시 ==============================
var busTab = $('.bus_tabs');
var busTabLi = busTab.children('li');
var busTabContent = $('.bus_tab_content');
var busTabContentLi = busTabContent.children('li');

busTabLi.on('click', function(e){
  e.preventDefault();
  var myBtn = $(this).index();
  console.log(myBtn);

  busTabLi.removeClass('select');

  busTabLi.eq(myBtn).addClass('select');

busTabContentLi.removeClass('select');
busTabContentLi.eq(myBtn).addClass('select');
});
//========= 지하철 이용시 ==============================
var metroTab = $('.metro_tabs');
var metroTabLi = metroTab.children('li');
var metroTabContent = $('.metro_tab_content');
var metroTabContentLi = metroTabContent.children('li');

metroTabLi.on('click', function(e){
  e.preventDefault();
  var myBtn = $(this).index();
  console.log(myBtn);

  metroTabLi.removeClass('select');

  metroTabLi.eq(myBtn).addClass('select');

metroTabContentLi.removeClass('select');
metroTabContentLi.eq(myBtn).addClass('select');
});
//========= 자동차 이용시 ==============================
var carTab = $('.car_tabs');
var carTabLi = carTab.children('li');
var carTabContent = $('.car_tab_content');
var carTabContentLi = carTabContent.children('li');

carTabLi.on('click', function(e){
  e.preventDefault();
  var myBtn = $(this).index();
  console.log(myBtn);

  carTabLi.removeClass('select');

  carTabLi.eq(myBtn).addClass('select');

carTabContentLi.removeClass('select');
carTabContentLi.eq(myBtn).addClass('select');
});








//------------jQuery end-------------project_01(5P) 
})(this.jQuery);