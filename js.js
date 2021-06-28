$(document).ready(function(){
   $("#btn1").click(function(){
      $("#para1").fadeOut("slow");
      $("#p1").fadeOut(9000);
        
      $("#b1").click(function(){
        $("#para1").fadeIn();
      });
    
    });

      $("#btn2").click(function(){
        $("para2").append(" <b>Appended text</b>.");});
      $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
      });

      $("#btn3").click(function(){
           $("#para3").css("color","red")
      })
      $("#btn4").click(function(){
        $(".para4").text("Hello world!");
      })
      
      $("#btn5").click(function(){
        $("input:text").val(" Hello Tarek ");
      });
})