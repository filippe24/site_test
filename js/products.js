$('.list-group').on('click','> a', function(e) {
  var $this = $(this);
   $('.list-group').find('.active').removeClass('active');
   $this.addClass('active');
   
   alert($this.attr('href') + ' is active');
});