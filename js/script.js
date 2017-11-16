

$(document).ready(function() {
	
	//[type=range]

	$('.range').change(function() {
		var val = $('.range').val();
		$('.count-value').html(val);

		$('.item-value').html(val);
		var maxVal = 500000;
		if(val >= maxVal) {
			$('.item-click').html(' $ 0.3');
			$('.item-all').html((Math.round(val) * 0.3).toFixed(2));
		} else {
			$('.item-click').html(' $ 0.5');
			$('.item-all').html((Math.round(val) * 0.5).toFixed(2));
		}
	})

	//end

	//pop-up

	$('.head-btn1').click(function() {
		
		$('.enter-popup').css('display', 'block');
		$('#overlay-popup').css('display', 'block');
			$('.close1').click(function() {
				$('.enter-popup').css('display', 'none');
				$('#overlay-popup').css('display', 'none');
			})
			return false;
	});

	$('.head-btn2').click(function() {
		$('.order').css('display', 'block');
		$('#overlay-popup').css('display', 'block');
			$('.close2').click(function() {
				$('.order').css('display', 'none');
				$('#overlay-popup').css('display', 'none');
			})
			return false;
	});

	$('.add-order').click(function() {
		$('.order-action').css('display', 'block');
		$('#overlay-popup').css('display', 'block');
			$('.close3').click(function() {
				$('.order-action').css('display', 'none');
				$('#overlay-popup').css('display', 'none');
			})
			return false;
	});

})
