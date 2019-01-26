  /*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems,);

    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems, {
      top: 500
    });
  });*/
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.pushpin').pushpin({
      top: $('.pushpin').offset().top,
      onPositionChange: function(position){
        var main = $('.main');
        if(position == "pinned"){
          main.addClass("offset-m4");
          main.addClass("offset-l4");
        }
        else{
          main.removeClass("offset-m4");
          main.removeClass("offset-l4");
        }
      }
    });
  });
        