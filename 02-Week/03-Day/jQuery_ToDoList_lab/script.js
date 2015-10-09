      //If plus btn clicked add an item 
      $('.btn').click(function(event) {
          event.preventDefault();
          var todo_item = $('#todo').val();
          console.log(todo_item);
          $(".list").append('<p><input type="checkbox">\
        	<i class="glyphicon glyphicon-star"></i><span>' 
        	+ todo_item + '</span><i class="glyphicon glyphicon-remove"></i></p>');
          $('#todo').val('');

          //add event handers to this last added item
          $(".glyphicon-remove").each(function(index){
      	    $(this).last().click(function() {
              $(this).parent().remove();
      	    }) 
          });

          $stars = $(".list p .glyphicon-star");
          $stars.last().click(function(){
        	  $(this).toggleClass('active');
          });

          $ch_boxes = $(".list p input");
          $ch_boxes.last().click(function() {
        	  $(this).next().next().toggleClass("strikeThrough");
          });
      });

      //if X clicked remove an item
      $(".glyphicon-remove").each(function(index){
      	$(this).click(function() {
          $(this).parent().remove();
      	}) 
      });
      
      //if star clicked toggle its gold-ness
      $stars = $(".list p .glyphicon-star");
      $stars.click(function(){  //jQuery automatically calls the .click for each array elem
      	console.log("star this = " + this + " clicked");
      	$(this).toggleClass('active');
      });
 
      //if checked strike out  
      $ch_boxes = $(".list p input");
      $ch_boxes.click(function() {
      	$(this).next().next().toggleClass("strikeThrough");
      });


