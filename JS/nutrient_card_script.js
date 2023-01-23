$(document).ready(function() {
  
  var content = $('.content');
  var currentItem = content.filter('.active');
  var steps = $('.card').filter('.steps');


  $('.button').click(function() {
      var nextItem = currentItem.next();
      var lastItem = content.last();
      currentItem.removeClass('active');
      
      if (nextItem.length) {
        nextItem.addClass('active');
        currentItem = nextItem;
      } else {
        currentItem = content.first();
        currentItem.addClass('active');
      }
      
      // Check if the active content is nutrient-info and call fetchNutrientInformation function
      if (currentItem.attr("id") == "nutrient-info2") {
        fetchNutrientInformation();
      }
      
      // Call fetchNutrientInformation for nutrient-info2
      if (currentItem.attr("id") == "nutrient-info2") {
        fetchNutrientInformation();
      }
  });
});


const fetchNutrientInformation =  async () => {
                const response =  await fetch('/api/nutrient-information');
                const nutrientData =  await response.json();

                return nutrientData[0].food_name;}

                
