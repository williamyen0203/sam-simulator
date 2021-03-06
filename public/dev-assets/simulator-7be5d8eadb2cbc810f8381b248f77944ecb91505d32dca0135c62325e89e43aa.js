 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  $("#oreo").click(function(){
    $("#special-overlap").fadeOut("fast");
    $('<img id="temp-oreo" class="temp" src="/assets/oreo.png">').appendTo('.image-stack').animate({
      left: "575px",
      bottom: "500px"
    }, 1000, "linear", function(){
      $(this).remove();
    });
  })
  $("#sushi").click(function(){
    $("#special-overlap").fadeOut("fast");
    $('<img id="temp-sushi" class="temp" src="/assets/sushi-projectile.png">').appendTo('.image-stack').animate({
      bottom: "500px"
    }, 1000, "linear", function(){
      $(this).remove();
    });
  })
  $("#shumai").click(function(){
    $("#special-overlap").fadeOut("fast");
    $('<img id="temp-shumai" class="temp" src="/assets/shumai.png">').appendTo('.image-stack').animate({
      right: "490px",
      bottom: "500px"
    }, 1000, "linear", function(){
      $(this).remove();
    });
  })
  $("#cake").click(function(){
    $("#special-overlap").fadeIn("fast");
    $('<img id="temp-cake" class="temp" src="/assets/cake.png">').appendTo('.image-stack').animate({
      left: "650px",
      bottom: "500px"
    }, 1000, "linear", function(){
      $(this).remove();
    });
  })
  $("#secret").click(function(){
    $('<img id="temp-secret" class="temp" src="/assets/secret.png">').appendTo('.image-stack').animate({
      right: "470px",
      bottom: "500px"
    }, 1000, "linear", function(){
      $(this).remove();
    });
  })
});
