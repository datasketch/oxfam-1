var App;(()=>{$(document).ready((function(){$(document).on("click",".needed",(function(){console.log(this.id),Shiny.onInputChange("last_click",this.id)})),$(document).on("click",".needed",(function(){$(".needed").removeClass("basic_active"),$(this).addClass("basic_active")}))}));var e=[0,0];$(document).on("shiny:sessioninitialized",(function(n){e[0]=window.innerWidth,e[1]=window.innerHeight,Shiny.onInputChange("dimension",e)})),$(window).resize((function(n){e[0]=window.innerWidth,e[1]=window.innerHeight,console.log("altura"),console.log(e),Shiny.onInputChange("dimension",e)})),App={}})();
