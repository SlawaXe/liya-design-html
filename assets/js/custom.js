const catalogHighCols = document.querySelectorAll('.catalog-high-col--item');
const catalogHighColsWraper = document.querySelector('.catalog-high-cols');

catalogHighCols.forEach(item => {
	item.addEventListener('mouseover', (e) => {
		item.classList.add('hover');
		catalogHighColsWraper.classList.add('onHover');
	});

	item.addEventListener('mouseout', (e) => {
		item.classList.remove('hover');
		catalogHighColsWraper.classList.remove('onHover');
	});
});

const carouselProjects = document.querySelectorAll('.carousel-project--item');
const carouselProjectWrap = document.querySelector('.carousel-project');

carouselProjects.forEach(item => {
	item.addEventListener('mouseover', (e) => {
		item.classList.add('hover');
		carouselProjectWrap.classList.add('onHover');
	});

	item.addEventListener('mouseout', (e) => {
		carouselProjectWrap.classList.remove('onHover');
		item.classList.remove('hover');
	});
});

(function($) {
	$(function () {
		$('#carousel-project').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    dots: true,
    		autoWidth:true, 
    		navText: ['<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70707 7.99996L8.35352 14.6464L7.64641 15.3535L0.646409 8.35352C0.451147 8.15825 0.451147 7.84167 0.646409 7.64641L7.64641 0.646408L8.35352 1.35352L1.70707 7.99996Z" fill="#D6B384"/></svg>', '<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29293 7.99996L0.646485 1.35351L1.35359 0.646408L8.35359 7.64641C8.54885 7.84167 8.54885 8.15825 8.35359 8.35352L1.35359 15.3535L0.646484 14.6464L7.29293 7.99996Z" fill="#D6B384"/></svg>'],
		    responsive:{
		        0:{
		            items:1,
		            //slideBy: 1,
		        },
		        600:{
		        	slideBy: 1,
		            //items:2
		        },
		        1000:{
		        	slideBy: 1,
		            //items:3
		        }
		    },
		    dotsEach: 3,
		});

		$('.carousel-project--inner-carousel').each(function() {
			$(this).owlCarousel({
			    margin:0,
			    loop:true,
			    autoWidth:false,
			    items:1,
			    nav: false,
			    dots: true
			});
		});
	});
})(jQuery);