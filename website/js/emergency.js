$(document).ready(function(){


	//Enable when main page done.
	setTimeout(alert,10000);

	function alert(){
		$('#popDiv').bPopup({
            speed: 300,
            transition: 'slideDown',
			onClose: changeEmergencyScreen
        });
	}
	$('#pop').click(changeEmergencyScreen);


	function changeEmergencyScreen(){
		window.location.replace("emergency.html");
	}
});

