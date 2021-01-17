// Global site logic
const Site = {
   init() {
      this.carousel();
      this.sectionScroll();
      this.mobileNav();
      this.handleFormSubmit();
   },
   carousel() {
      var elem = document.querySelector('.main-carousel');

      if (elem !== null) {
         var flkty = new Flickity(elem, {
            // options
            wrapAround: true,
            autoPlay: 4000,
            prevNextButtons: false,
            pageDots: false,
            draggable: false,
            freeScroll: false
         });
      }
   },
   mobileNav: function () {
      var mobileNavLink = document.querySelectorAll(".js-mobile-nav-toggle"),
         siteHeader = document.querySelectorAll(".site-hero");

      mobileNavLink[0].addEventListener("click", function () {
         siteHeader[0].classList.toggle("mobile-nav-active");
      });
   },
   sectionScroll() {
      var scroll = new SmoothScroll();

      var smoothScrollWithoutHash = function (selector, settings) {
         /**
          * If smooth scroll element clicked, animate scroll
          */
         var clickHandler = function (event) {
            var toggle = event.target.closest(selector);
            if (!toggle || toggle.tagName.toLowerCase() !== 'a') return;
            var anchor = document.querySelector(toggle.hash);
            if (!anchor) return;

            event.preventDefault(); // Prevent default click event
            scroll.animateScroll(anchor, toggle, settings || {}); // Animate scroll
         };

         window.addEventListener('click', clickHandler, false);
      };

      // Run our function
      smoothScrollWithoutHash('a[href*="#"]');
   },
   handleFormSubmit() {
      validator = {};
      const form = document.querySelector('#form--request-demo');
      const formSuccess = document.querySelector('#form--request-demo-success');

      /*
      form.addEventListener('submit', e => {
         e.preventDefault();
      }); */

      this.validator = new FormValidator('request-demo', [{
         name: 'name',
         display: 'name',
         rules: 'required'
      }, {
         name: 'company',
         display: 'company name',
         rules: 'required'
      }, {
         name: 'email',
         rules: 'required|valid_email'
      }, {
         name: 'category',
         display: 'category',
         rules: 'required'
      }], (errors, event) => {
         if (errors.length > 0) {
            errors.map(error => {
               const { id, message } = error;
               const idString = `#${id}`;

               // set error state
               const inputContainer = document.querySelector(idString);
               inputContainer.classList.add('error');

               // display the message
               const messageContainer = document.createElement('p');
               messageContainer.classList.add('alert');
               messageContainer.innerHTML = `${message}`;

               const wrap = inputContainer.parentElement;

               if (wrap && wrap.childElementCount < 2) {
                  wrap.appendChild(messageContainer);
               }
            });
         } else {
            const formData = new FormData(form);

            axios.post('https://formspree.io/xeklqrlx', formData).then(function (response) {
               form.style.display = "none";
               formSuccess.style.display = "block";
            }).catch(function (error) {
               console.log(error);
            });
            console.log('fire pixels');
            fbq('track', "Lead");


            var img = document.createElement("img");
            img.src = "//dc.ads.linkedin.com/collect/?pid=324356&conversionId=512874&fmt=gif";

            var src = document.getElementById("header");
            src.appendChild(img);
         }
      });
   }
};


$( ".menu-item-has-children" ).hover(
   function() {
      if ($(window).width() > 767) {
         //$( this ).find(".sub-menu").fadeIn( 500 );
         $(this).find(".sub-menu").show();
         $(this).addClass("open");
      }
   }, function() {
      if ($(window).width() > 767) {
         //setTimeout($( this ).find(".sub-menu").fadeOut( 500 ), 3000);
         $(this).find(".sub-menu").hide();
         $(this).removeClass("open");
      }
});

   jQuery(document).ready(function(){

      jQuery(document).bind('gform_confirmation_loaded', function(event, formId){
         if(formId == 1) {
            fbq('track', 'Lead');

            window.uetq = window.uetq || [];
            window.uetq.push
            ({ 'ec':'form', 'ea':'submitted', 'el':'basketb2b', 'ev':'0' });

            ga('send', 'event', 'Form', 'Submit', 'Business Page');
               var img = document.createElement("img");
               img.src = "//dc.ads.linkedin.com/collect/?pid=451738&conversionId=512594&fmt=gif";
               img.style.width = "0px";
               img.style.height = "0px";
               img.style.display = "none";

               var iframe = document.createElement('iframe');
               iframe.style.display = "none";
               iframe.src = '//swoledirect.go2cloud.org/aff_l?offer_id=349&adv_sub=SUB_ID';
               document.body.appendChild(iframe);

               var src = document.getElementsByClassName("site-content");
               src[0].appendChild(img);
               console.log('pixels fired');

          }
      });

   })


// Start the site
Site.init();