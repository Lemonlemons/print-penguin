// alert("hello");
// document.body.style.background = 'yellow';
// document.getElementByTagName('img').background = 'yellow';
// $(document).ready(function() {
var cat = chrome.extension.getURL("images/nibbles.jpg");
var Images = $("img");
var FilteredImages = Images.filter(function(){
		var that = this;
		return ($(this).width() > 50) && ($(this).height() > 50)
	});
FilteredImages.each(function(){
  //Wrap the image with an overlay
  $(this).wrap("<div class='description_overlay'></div>");

  var wid = $(this).width();
  var hei = $(this).height();

  //Cache description overlay object
  var o = $(this).parent(".description_overlay");

  //$(".description_overlay").css('max-width', wid+'px');
  //$(".description_overlay").css('max-height', hei+'px');

  //Append the description to the overlay
  // o.append("<div class='description'><div class='description_content'></div></div>");
  o.append("<div class='description'><img class='style' alt='cat face' width='42px'></div>");
  o.find(".style").stop().attr('src', cat);

  //Align the description with the image
    o.find(".description").css("opacity", 0);

  o.find(".description").css("width", $(this).width());
  // o.find(".description").css("height", $(this).height());
  // $(".description_overlay").css("max-width", $(this).width());
  o.find(".description").css("display", "block");
  // o.find(".description").css("text-align", "center");

  //Set the description from the img alt attribute
  //o.find(".description_content").html("<img nrec=hello");

  //Apply the hover effects
  o.mouseover(function(){
    o.find(".description").stop().fadeTo(0, 0.7);
  });

  o.mouseout(function(){
    o.find(".description").stop().fadeTo(50, 0);
  });



 });
// });