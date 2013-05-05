var LP_LIB = {
  lightBox : function(contentSelector){
    $(contentSelector).on('click', 'img', function() {
          var image, lightboxContainer;
          
          image = $('<img/>');
          image.addClass('lightboxImage').attr('src', $(this).attr('src'));

          lightboxContainer = $('<div/>');
          lightboxContainer.addClass('lightbox').append(image)
                    .on('click', function() {
                        return $('.lightbox').remove();
                    });
          
          return $('body').append(lightboxContainer)
                    .on('keyup', function(e) {
                      if (e.keyCode === 13 || e.keyCode === 27) {
                        return $('.lightbox').remove();
                      }
                    });
        })
  },

  readMore : function(contentSelector,handlerSelector, initialHeight, maximunHeight){
    /* 
    if we don't specify the maximun height then the height will be auto-calculated taking the height of the 
    first inner element.
    */
    var calculateHeight = (function(contentSelector){
      return $(contentSelector).find(':first').height();
    });

    var maxHeight = (maximunHeight)?maximunHeight:calculateHeight(contentSelector);

    $(handlerSelector).on('click', function() {
          if ($(contentSelector).height() > initialHeight) {
            $(contentSelector).animate({
              height: initialHeight
            }, 500);
            $(this).text('Read more');
          } else {
            $(contentSelector).animate({
              height: maxHeight
            }, 500);
            $(this).text('Read less');
          }
          return false;
        })
  }
};