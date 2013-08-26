$(function () {

// Select/DeselectAll
	$("#toggle").on( "click", function (e) {
		e.preventDefault();
		var i = 0;
		$("#box3FoodsILikeList input").each( function() { 
			if ($(this).prop("checked") == 1){
				i++;
			}
		});
		if (i != 0){	
			$("#box3FoodsILikeList input").each( function() { 
				$(this).prop("checked", 0); 
			});
		}	
		else{
			$("#box3FoodsILikeList input").each( function() { 
				$(this).prop("checked", 1); 
			});
		}
	});

// Check all Foods in Foods I like
	$("#box3FoodsILikeList input").each( function() { 
		$(this).prop("checked", 1);
	});


//Change Metric/US system
	$("input[name=unitSystem]").change(function(){
        if ($('input[name=unitSystem]').filter(':checked').val() == "Metric"){
        	$('#MetricUnit').show();
        	$('#USUnit').hide();
        	$('#MetricUnitH').show();
        	$('#USUnitH').hide();
        	$('#USUnitHI').hide();

			}
       else if ($('input[name=unitSystem]').filter(':checked').val() == "US"){
			$('#USUnit').show();
			$('#MetricUnit').hide();
        	$('#MetricUnitH').hide();
        	$('#USUnitH').show();
        	$('#USUnitHI').show();
			}
	});

//when load profile page
	if ($('input[name=unitSystem]').filter(':checked').val() == "Metric"){
		$('#MetricUnit').show();
		$('#USUnit').hide();
		$('#MetricUnitH').show();
		$('#USUnitH').hide();
		$('#USUnitHI').hide();
		}
	else if ($('input[name=unitSystem]').filter(':checked').val() == "US"){
		$('#USUnit').show();
		$('#MetricUnit').hide();
		$('#MetricUnitH').hide();
		$('#USUnitH').show();
		$('#USUnitHI').show();
			}

//Change nutrient plan on change
	$("input[name=nutrientPlan]").change(function(){
        if ($('input[name=nutrientPlan]').filter(':checked').val() == 1){
        	$("input[name^='Full']").parent().parent().hide();
        	$("#FullNutrientScroll").hide();

			}
       else if ($('input[name=nutrientPlan]').filter(':checked').val() == 0){
			$("input[name^='Full']").parent().parent().show();
			$("#FullNutrientScroll").show();

			}
	});


//Make nutrient plan first remain as basic
	if ($('input[name=nutrientPlan]').filter(':checked').val() == 1){
		$("input[name^='Full']").parent().parent().hide();
		$("#FullNutrientScroll").hide();
		}
   else if ($('input[name=nutrientPlan]').filter(':checked').val() == 0){
		$("input[name^='Full']").parent().parent().show();
		$("#FullNutrientScroll").show();

		}

   
//If the nutrients are selected but use other plans - make them unchecked
	$("input[name=opt_nut]").change(function(){
        if ($('input[name=opt_maxormin]').filter(':checked').val() >= 2){
			$("#listobj input").each( function() { 
				$(this).attr('checked', false); 
			});
		}	
	});

//If other plans are selected - cancel what is in the list object
	$("input[name=opt_maxormin]").change(function(){
        if ($('input[name=opt_maxormin]').filter(':checked').val() >= 2){
			$("#listobj input").each( function() { 
				$(this).attr('checked', false); 
			});
		}	
	});

//
	$("#box2ResultList li a").each(function(){
		$(this).mouseover(function(){
			var toShow = '#tabNut'+ $(this).attr('id');
			$("table[id^='tabNut']").hide();
			$(toShow).show();
		});
	});
	
	$("#box2ResultList li a").each(function(){
		$(this).on("click",function(){
			$(this).show();
		});
	});


	$("#box3FoodsILikeList a").each(function(){
		$(this).mouseover(function(){
			var toShow = '#tabNut'+ $(this).attr('id');
			$("table[id^='tabNut']").hide();
			$(toShow).show();
		});
	});
	
// 	$('html,body').animate({ scrollTop: $("#findFood").offset().top });

	$("div[id^='nutExceed']").each(function(){
		$(this).on("click",function(){
		var toShow = "li[id='Food"+$(this).attr('id')+"']";
		$(toShow).show();
		});
	});
	
	$("input[type=submit]").on("click",function(){
		if ($(this).attr('name') != "toggle"){
		$("#loading").show();
		}
	});
	
	$("#mainCat a").on("click",function(){
		$("#loading").show();
	});
	
	
	$("#box1CatList a").on("click",function(){
		$("#loading").show();
	});
	
	$("#box2ResultList li a").on("click",function(){
		$("#loading").show();
	});
	
	$("#boxBelow a").on("click",function(){
		$("#loading").show();
	});
	
	$('#loading').hide();
	
	$("input[value='Proceed to Select Foods']").css('font-size','30px');
	
	$("input[value='Generate My Diet']").css('font-size','30px');	
	
	$("input[id='submitSignUp']").hide();
	
});

// $(function testajax(sourceLang, destLang, sourceId, destId, loadingId) {
//     $(destId).hide();
//     $(loadingId).show();
//     $.post('testajax', {
//         text: $(sourceId).text(),
//         sourceLang: sourceLang,
//         destLang: destLang
//     }).done(function(translated) {
//         $(destId).text(translated['text'])
//         $(loadingId).hide();
//         $(destId).show();
//     }).fail(function() {
//         $(destId).text("{{ _('Error: Could not contact server.') }}");
//         $(loadingId).hide();
//         $(destId).show();
//     });
// });
// 
// 
// $.post('testajax').done(function(lala) {
//         console.log(lala['text'])
//     });