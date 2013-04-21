$(document).ready(function(){


	//Enable when main page done.
	setTimeout(alert,10000);
	//setTimeout(alert,10000);
	$('#pop').click(changeEmergencyScreen);
	function alert(){
		$('#popDiv').bPopup({
            speed: 300,
            transition: 'slideDown',
			onClose: changeEmergencyScreen
        });
	}

	function handlerIn(){
		$("#quote_water").hide();
		$("#empty_water").toggle();
	}
	function handlerOut(){
		$("#empty_water").hide();
		$("#quote_water").toggle();
	}
	function solveEmergency(){
		$('.fire1').bPopup({
            speed: 450,
            transition: 'slideDown',

        });
	}
	function solveEmergency2(){
		$('.fire2').bPopup({
            speed: 450,
            transition: 'slideDown',

        });
	}

	function changeEmergencyScreen(){
		window.location.replace("emergency.html");
	}
});

