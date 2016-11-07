// socialMediaIcons
var socialMedia = {
  twitter : 'https://twitter.com/?lang=uk',
  facebook : 'https://www.facebook.com' ,
  skype : 'https://www.skype.com/uk/',
  behance : 'https://www.behance.net/',
  linkedin: 'https://www.linkedin.com/in/yuriy-zinyk-2a63b2125?trk=nav_responsive_tab_profile_pic'
};
var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.socialmediaicons');
  for (var key in arguments[0]) {
    output += '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/footer/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);

// form
function valid (form) {
            var name = form.name.value; 
            var email = form.email.value;
            var message = form.message.value;
            var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
   
            var fail = false; 
            if(name == "" || name == " ") 
                fail = "Ви не ввели імя"; 
            else if(email.split('@').length-1 == 0) 
                fail = "Ви ввели email неправильно"; 
            else if(message == "")
                fail = "Введіль повідомлення";
            if(fail) { 
                alert(fail); 
            } 
            else 
                window.location = "http://google.com"
        }

// preloader

$(document).ready(function(){
	$(window).on('load', function () {
		var $preloader = $('#loader-wrapper'),
			$loader = $preloader.find('#loader');
		$loader.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	});
    
    // Плавний перехід на сторінці
    
    $(".collapse").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top -50; // -50 щоб опустилось нище на 50 px
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    // to top
    
     $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#scrollup').fadeIn();
      else $('#scrollup').fadeOut();
    });
    $('#scrollup').click(function () { 
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
});

// to top
var top_show = 10; 
var delay = 1000; 
  


