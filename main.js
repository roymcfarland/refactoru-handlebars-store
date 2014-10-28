//////////////////////////////////
//////// PRODUCTS DATA.JS ////////
//////////////////////////////////

var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
};



$(document).on('ready', function() {

	// Get the HTML content of our template and store it
	// as a JavaScript variable
	var templateSource = $('#product-template').html();
	// console.log(templateSource);

	// Have handlebars compile this sources into a
	// reusable template function
	var template = Handlebars.compile(templateSource);
	// console.log(template);

	// Use the template to generate new HTML content
	var outputHTML = template(productsData);
	// console.log(outputHTML);

	// Append outputHTML to the page
	$('#product-container').append(outputHTML);

  $(document).on('click', '.addToWishList', function(e){
      e.preventDefault();
      var newItemTitle = $(this).siblings('.title').text();
      var newObject = {
        title: newItemTitle
      };
      var element = wishListItems(newObject);
      $('#wishlist').append(element);
  });

  var wishlistSource = $('#wishlist-template').html();
  // console.log(wishlistSource);

  var wishListItems = Handlebars.compile(wishlistSource);
  // console.log(wishListItems);
  
  $(document).on('click', '.removeFromWishList', function(e){
      e.preventDefault();
      $(this).closest('.wishlist-list').remove();
  });
  
});