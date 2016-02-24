  var button1 = chrome.extension.getURL("images/button8.png");

  //Wrap the image with an overlay
  $("body").append("<span id='spanny'></span>");

  $("#spanny").css({
	  'height':'20px',
	  'width':'40px',
	  'position':'absolute',
	  'opacity':'0',
	  'z-index':'8888888',
	  'top':'-1000px',
	  'left':'-1000px',
	  'display':'none',
	  'cursor':'pointer',
	  'border':'none',
	  'background-image':'url('+button1+')',
	  'background-color':'transparent'
  });


	$("img").mouseover(function(){

		var filtered = $(this).filter(function(){
			return ($(this).width() > 80) && ($(this).height() > 80) && ($(this).prop("src").substring(0, 4) != "data")
	    });

		if (filtered.length > 0) {
		  $("#spanny").stop().fadeTo(0, 0.8);
		  $("#spanny").css({
			  'display':'block',
			  'top':filtered.offset().top+40,
			  'left':filtered.offset().left+10
		  });

		  $("#spanny").mouseover(function(){
			  $(this).stop().fadeTo(0, 1);
			  $("#spanny").unbind();
			  $(this).on("click", function(){
				chrome.runtime.sendMessage({sourcer: filtered.prop("src"), heightr: filtered.height(), widthr: filtered.width()});
		  	  });
		  });

		  $("#spanny").mouseout(function(){
			  $(this).stop().fadeTo(0, 0.8);
		  });
  		}

	});


	$("img").mouseout(function(){
	  $("#spanny").stop().fadeTo(50, 0);
	  $("#spanny").css('display','none');
	});

	//window.onpopstate = function (event) {
	//	chrome.extension.sendMessage("Rerun script");
	//}

	function listener()
	{
	    $("img").mouseover(function(){

				var filtered = $(this).filter(function(){
					return ($(this).width() > 80) && ($(this).height() > 80) && ($(this).prop("src").substring(0, 4) != "data")
			    });

				if (filtered.length > 0) {
				  $("#spanny").stop().fadeTo(0, 0.8);
				  $("#spanny").css({
					  'display':'block',
					  'top':filtered.offset().top+40,
					  'left':filtered.offset().left+10
				  });

				  $("#spanny").mouseover(function(){
					  $(this).stop().fadeTo(0, 1);
					  $("#spanny").unbind();
					  $(this).on("click", function(){
						chrome.runtime.sendMessage({sourcer: filtered.prop("src"), heightr: filtered.height(), widthr: filtered.width()});
				  	  });
				  });

				  $("#spanny").mouseout(function(){
					  $(this).stop().fadeTo(0, 0.8);
				  });
		  		}

		});


		$("img").mouseout(function(){
			  $("#spanny").stop().fadeTo(50, 0);
			  $("#spanny").css('display','none');
		});
	}

	var timeout = null;
	document.addEventListener("DOMSubtreeModified", function() {
	    if(timeout) {
	        clearTimeout(timeout);
	    }
	    timeout = setTimeout(listener, 500);
    }, false);


