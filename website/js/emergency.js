$(document).ready(function(){

	$('#emergency_a').hide();
	$('#emergency_b').hide();

	setTimeout(alert,1000);
	
	function alert(){
		$('#popDiv').bPopup({
            speed: 450,
            transition: 'slideDown',
			onClose: changeEmergencyScreen
        });
	}
	$('#pop').click(changeEmergencyScreen);
	
	
	function changeEmergencyScreen(){
		console.log('hola');
	}		
	

})