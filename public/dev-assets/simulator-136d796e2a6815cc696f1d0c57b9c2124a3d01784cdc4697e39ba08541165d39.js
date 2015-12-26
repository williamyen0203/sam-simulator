// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
 $("#oreo").click(function(){
   $("#special-overlap").fadeOut("fast");
   // $('<img id="temp-oreo" class="temp" src="/assets/oreo.png">').appendTo('.image-stack').animate({
   $('<img class="temp" id="temp-oreo" src="/assets/oreo-a3d6bb96da329ab0ef766b3b67b9e02be49a35afb5f5f9d83bd2abed3c38b549.png" alt="Oreo a3d6bb96da329ab0ef766b3b67b9e02be49a35afb5f5f9d83bd2abed3c38b549" />').appendTo('.image-stack').animate({
     left: "575px",
     bottom: "500px"
   }, 1000, "linear", function(){
     $(this).remove();
   });
 })
 $("#sushi").click(function(){
   $("#special-overlap").fadeOut("fast");
   // $('<img id="temp-sushi" class="temp" src="/assets/sushi-projectile.png">').appendTo('.image-stack').animate({
   $('<img class="temp" id="temp-sushi" src="/assets/sushi-00427cd1772f8623d2ca2258d28ebba1a524c3ce0a1c5776b7b7b6d11ca07d77.png" alt="Sushi 00427cd1772f8623d2ca2258d28ebba1a524c3ce0a1c5776b7b7b6d11ca07d77" />').appendTo('.image-stack').animate({
     bottom: "500px"
   }, 1000, "linear", function(){
     $(this).remove();
   });
 })
 $("#shumai").click(function(){
   $("#special-overlap").fadeOut("fast");
   // $('<img id="temp-shumai" class="temp" src="/assets/shumai.png">').appendTo('.image-stack').animate({
   $('<img class="temp" id="temp-shumai" src="/assets/shumai-ec9c4d6a02015520dd9979941707c12b23136427ceef85583ab4467593ad6885.png" alt="Shumai ec9c4d6a02015520dd9979941707c12b23136427ceef85583ab4467593ad6885" />').appendTo('.image-stack').animate({
     right: "490px",
     bottom: "500px"
   }, 1000, "linear", function(){
     $(this).remove();
   });
 })
 $("#cake").click(function(){
   $("#special-overlap").fadeIn("fast");
  //  $('<img id="temp-cake" class="temp" src="/assets/cake.png">').appendTo('.image-stack').animate({
   $('<img class="temp" id="temp-cake" src="/assets/cake-cba3c60af904aa618ccc5162cfca4ac6785eb55bb7ad8fe3cc06f56169a57130.png" alt="Cake cba3c60af904aa618ccc5162cfca4ac6785eb55bb7ad8fe3cc06f56169a57130" />').appendTo('.image-stack').animate({
     left: "650px",
     bottom: "500px"
   }, 1000, "linear", function(){
     $(this).remove();
   });
 })
 $("#secret").click(function(){
   // $('<img id="temp-secret" class="temp" src="/assets/secret.png">').appendTo('.image-stack').animate({
   $('<img class="temp" id="temp-secret" src="/assets/secret-ba9191bf0ecd919e5ca83de055c2bc0853ba393aef67574c7f8fe6ce3025f307.png" alt="Secret ba9191bf0ecd919e5ca83de055c2bc0853ba393aef67574c7f8fe6ce3025f307" />').appendTo('.image-stack').animate({
     right: "470px",
     bottom: "500px"
   }, 1000, "linear", function(){
     $(this).remove();
   });
 })
});
