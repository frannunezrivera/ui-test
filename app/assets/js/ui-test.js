var LP = {
  READMORE_CONTAINER_SELECTOR: '.read-more-container',
  READMORE_BUTTON_SELECTOR: '.button',
  LIGHTBOX_CONTAINER_SELECTOR: '.images-container',

  init: function(){
    LP_LIB.readMore(this.READMORE_CONTAINER_SELECTOR, this.READMORE_BUTTON_SELECTOR, 400);
    LP_LIB.lightBox(this.LIGHTBOX_CONTAINER_SELECTOR);
  },
};

$(document).ready(function(){
  window.LP.init();
});