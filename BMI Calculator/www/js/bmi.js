$(document).ready(function(){

	$('.tab').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('input').val("");
		if(!$('#metricTab').hasClass('active')) {
			$('.metric').hide();
			$('.imp').show();
		} else {
			$('.metric').show();
			$('.imp').hide();
		}
		$('h1').text("0.0");
	});

	$('.bmiCalc').on('click', function(){
		var metWeight = $('#metWeight').val(); 		// 	Get the weight value
		var metHeight = $('#metHeight').val() / 100;	// 	Get the height value and divide by 100 to get metres from centimetres
		var metWeightConvert = (1 / 2.2) * metWeight;	//	Divide 1kg by 2.2 then multiply by the weight to get Lbs to Kgs conversion
		var metHeightConvert = metHeight * metHeight;	//	Multiply height by height
		var bmiMetric = (metWeightConvert / metHeightConvert).toString(); //  Divide converted weight by converted height and convert to string		
		var metWeightOutput = metWeightConvert.toString();

		var impWeight = $('#impWeight').val() * 0.45;
		var impHeight = ($('#impHeight').val() * 12) * 0.025;
		var impInches = $('#impInch').val();
		var impHeightConvert = (impHeight * impHeight) + impInches;
		var bmiImp = (impWeight / impHeightConvert).toString();
		
		var result = $('h1');	
		
		if($('.metric').is(":visible")) {
			result.text(bmiMetric.substring(0,5));
			$('#metWeight').val(metWeightOutput.substring(0,5));
		} else {
			result.text(bmiImp.substring(0,5));
		}

		return false;
	});
});