$(document).ready(function() {

//Upon mouseover of picture, display info of charles/chris

  $.getJSON("data/data.json", function(data) {

    $('.charles img').mouseenter(function() {
      $('.charles span')[0].innerHTML = "<div><br><h3>" + data.response.info[1].name + "</h3><br><a href='" + data.response.info[1].email + "'><img src='img/build/email.png'></a><a href='" + data.response.info[1].instagram + "'><img src='img/build/instagram.png'></a><a href='" + data.response.info[1].twitter + "'><img src='img/build/twitter.png'></a></div>";
    })

    $('.charles').mouseleave(function() {
      $('.charles span')[0].innerHTML = "";
    })

    $('.chris img').mouseenter(function() {
      $('.chris span')[0].innerHTML = "<div><br><h3>" + data.response.info[0].name + "</h3><br><a href='" + data.response.info[0].email + "'><img src='img/build/email.png'></a><a href='" + data.response.info[0].instagram + "'><img src='img/build/instagram.png'></a><a href='" + data.response.info[0].twitter + "'><img src='img/build/twitter.png'></a></div>";
    })
    $('.chris').mouseleave(function() {
      $('.chris span')[0].innerHTML = "";
    })

  });

});
