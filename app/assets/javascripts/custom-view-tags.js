
$(document).ready(function() {

	$('.tags').bind('typeahead:select', function(ev, suggestion) {

		// add a tag and filter the results accordingly

	 	var value = $(this).val();

	 	$(".filter-tags").append("<li>"+value+"</li>");

	 	$(".filter-tags li").click(function(){
	  	$(this).remove();

	  	// var values = [];
			// $(".filter-tags li").each(function(i, el) { values.push($(el).attr("data-org")) });

		});

	});

});

