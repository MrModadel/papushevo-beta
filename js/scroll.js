// slider before snd after
(function ($) {
   var $dragMe = $(".dragme-or"),
      $container = $(".sl-container-or"),
      $viewAfter = $(".view-after-or");
   $dragMe.draggable({
      containment: "parent",
      drag: function () {
         $viewAfter.css({
            width: parseFloat($(this).css('left')) + 5
         });
      }
   });
   $container.on("click", function (event) {
      var eventLeft = event.pageX - $container.offset().left - 15;
      animateTo(eventLeft);
   });
   animateTo("50%");
   function animateTo(_left) {
      $dragMe.animate({
         left: _left
      }, 'slow', 'linear');
      $viewAfter.animate({
         width: _left
      }, 'slow', 'linear');
   }
})(jQuery);

(function ($) {
   var $dragMe = $(".dragme-one"),
      $container = $(".sl-container-one"),
      $viewAfter = $(".view-after-one");
   $dragMe.draggable({
      containment: "parent",
      drag: function () {
         $viewAfter.css({
            width: parseFloat($(this).css('left')) + 5
         });
      }
   });
   $container.on("click", function (event) {
      var eventLeft = event.pageX - $container.offset().left - 15;
      animateTo(eventLeft);
   });
   animateTo("50%");
   function animateTo(_left) {
      $dragMe.animate({
         left: _left
      }, 'slow', 'linear');
      $viewAfter.animate({
         width: _left
      }, 'slow', 'linear');
   }
})(jQuery);
(function ($) {
   var $dragMe = $(".dragme-two"),
      $container = $(".sl-container-two"),
      $viewAfter = $(".view-after-two");
   $dragMe.draggable({
      containment: "parent",
      drag: function () {
         $viewAfter.css({
            width: parseFloat($(this).css('left')) + 5
         });
      }
   });
   $container.on("click", function (event) {
      var eventLeft = event.pageX - $container.offset().left - 15;
      animateTo(eventLeft);
   });
   animateTo("50%");
   function animateTo(_left) {
      $dragMe.animate({
         left: _left
      }, 'slow', 'linear');
      $viewAfter.animate({
         width: _left
      }, 'slow', 'linear');
   }
})(jQuery);
(function ($) {
   var $dragMe = $(".dragme-tre"),
      $container = $(".sl-container-tre"),
      $viewAfter = $(".view-after-tre");
   $dragMe.draggable({
      containment: "parent",
      drag: function () {
         $viewAfter.css({
            width: parseFloat($(this).css('left')) + 5
         });
      }
   });
   $container.on("click", function (event) {
      var eventLeft = event.pageX - $container.offset().left - 15;
      animateTo(eventLeft);
   });
   animateTo("50%");
   function animateTo(_left) {
      $dragMe.animate({
         left: _left
      }, 'slow', 'linear');
      $viewAfter.animate({
         width: _left
      }, 'slow', 'linear');
   }
})(jQuery);