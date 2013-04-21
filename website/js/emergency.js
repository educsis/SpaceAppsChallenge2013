$(document).ready(function(){



	setTimeout(alert,1000);
	
	function alert(){
		$('#popDiv').bPopup({
            speed: 450,
            transition: 'slideDown',
			onClose: function() { console.log("hola"); }
        });
	}
	
	function changeEmergencyScreen(){
	
	}		


})