
$(document).ready(function() {
	 $('.drawer').drawer();
});



$(function(){
	$('a[href^="#"]').click(function(){
	  var speed = 500;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
	  $("html, body").animate(
		  {
			  scrollTop:position   - $('#js-header').outerHeight()
			}, 
			speed, "swing");
	  return false;
	});
  });

  new WOW().init();



  let $form =  $( '#js-form')
  $form.submit(function(e) { 
	$.ajax({ 
	 url: $form.attr('action'), 
	 data: $form.serialize(), 
	 type: "POST", 
	 dataType: "xml", 
	 statusCode: { 
		0: function() { 
		  $form.slideUp()
		  $('#js-success').slideDown()
		}, 
		200: function() { 
			$form.slideUp()
			$('#js-error').slideDown()
		} 
	  } 
	});
	return false; 
  }); 

  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea' ).on('change', function(){
	if(
		$( '#js-form input[type = "text"]').val()  !== ""&&        
		$( '#js-form input[type = "email"]').val()  !== ""&&  
		$( '#js-form input[name = "entry.810767860"]').prop('checked') ===  true
	){
		$submit.prop('disabled', false)
		$submit.addClass('-active')
	}else{
		$submit.prop('disabled', true)
		$submit.removeClass('-active')
	}  
  })