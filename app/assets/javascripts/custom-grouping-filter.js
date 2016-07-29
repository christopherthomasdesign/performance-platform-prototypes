
$(document).ready(function() {

	refreshNumber();

	$('.typeahead').bind('typeahead:select', function(ev, suggestion) {

		// add a tag and filter the results accordingly

	 	var value = $(this).val();

	 	$(".filter-tags").append("<li>"+value+"</li>");

	 	$(".filter-tags li").click(function(){
	  	$(this).remove();

	  	var values = [];

			$(".filter-tags li").each(function(i, el) { values.push($(el).attr("data-dep")) });

			if (values.length == 0) {
				$('.transaction-listing').show();
			} else {
	    	$('.transaction-listing').each(
	  	  	function (i, tx) {
		    		if ( $.inArray($(tx).attr("data-dep"), values) == -1) { $(tx).hide() }
		    	});
	    }
	    refreshNumber();
		});
		refreshNumber();

	 	// remove a tag and show things again

	 	var valueSelected = $(".filter-tags li").text();

	 	var last_tag = $(".filter-tags li").last();
	 	$(last_tag).attr("data-dep", value);

    var values = [];

		$(".filter-tags li").each(function(i, el) { values.push($(el).attr("data-dep")) });

		$('.transaction-listing').each(
		  function (i, tx) {
		    if ( $.inArray($(tx).attr("data-dep"), values) != -1) { $(tx).show() } else { $(tx).hide() }
		});
		refreshNumber();

	});

	// do this again but for the topic dropdown (I have copied and pasted the code this is bad)

	$("#topics").change(function(){

 		var value = $(this).val();
 		$(".filter-tags").append("<li>"+value+"</li>");
	 	$(".filter-tags li").click(function(){
	  	$(this).remove();
	  	var values = [];
			$(".filter-tags li").each(function(i, el) { values.push($(el).attr("data-dep")) });

			if (values.length == 0) {
				$('.transaction-listing').show();
			} else {
	    	$('.transaction-listing').each(
	  	  	function (i, tx) {
		    		if ( $.inArray($(tx).attr("data-topic"), values) == -1) { $(tx).hide() }
		    	});
	    }
	    refreshNumber();
		});
		refreshNumber();
	 	var valueSelected = $(".filter-tags li").text();
	 	var last_tag = $(".filter-tags li").last();
	 	$(last_tag).attr("data-topic", value);
    var values = [];
		$(".filter-tags li").each(function(i, el) { values.push($(el).attr("data-topic")) });

		$('.transaction-listing').each(
		  function (i, tx) {
		    if ( $.inArray($(tx).attr("data-topic"), values) != -1) { $(tx).show() } else { $(tx).hide() }
		});
		refreshNumber();
	});

	// refresh item number when adding and removing things

  function refreshNumber() {
  	var numberOfItems = $('.transaction-listing').filter(function() {
		  return $(this).css('display') !== 'none';
		}).length;
  	$("#number-of-items").text( numberOfItems );
  }

});

