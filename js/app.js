$(document).ready(function() {

$.getJSON("data/data.json", function(data) {

  $('.charles img').mouseenter(function(){
    $('.charles span')[0].innerHTML = "<div><h3>" + data.response.info[1].name + "</h3><br>" + data.response.info[1].job + "<br>" + data.response.info[1].twitter + "</div>";
  })

  $('.charles img').mouseleave(function(){
    $('.charles span')[0].innerHTML = "";
  })

  $('.chris img').mouseenter(function(){
    $('.chris span')[0].innerHTML = "<div><h3>" + data.response.info[0].name + "</h3><br>" + data.response.info[0].job + "<br>" + data.response.info[0].twitter + "</div>";
  })

  $('.chris img').mouseleave(function(){
    $('.chris span')[0].innerHTML = "";
  })

  });

});
