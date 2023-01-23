$(document).ready(function() {
        
  var content = $('.content');
  var currentItem = content.filter('.active');
  var steps = $('.card').filter('.steps');
  //   var inactive1 = $('.inactive-1');
  //   var inactive2 = $('.inactive-2');

  $('.button').click(function() {
      var nextItem = currentItem.next();
      var lastItem = content.last();
      var contentFirst = content.first();
      
      currentItem.removeClass('active');

      
          currentItem = nextItem.addClass('active');
          $('.step').animate({width: '100%'});
          inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
      
  });

  });


const dateInput = document.querySelector('#date');
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
const fetchNutrientInformation = async () => {
const response = await fetch(`/api/nutrient-information?date=${dateInput.value}`);
const nutrientData = await response.json();
// Get all the content divs
const calo = document.getElementById('step-desc-1');
const carb = document.getElementById('step-desc-2');
const fat = document.getElementById('step-desc-3');
const prot = document.getElementById('step-desc-4');
const fiber = document.getElementById('step-desc-5');
const sug = document.getElementById('step-desc-6');
const chol = document.getElementById('step-desc-7');
const na = document.getElementById('step-desc-8');
const k = document.getElementById('step-desc-9');
const fe = document.getElementById('step-desc-10');
const ca= document.getElementById('step-desc-11');
const vita = document.getElementById('step-desc-12');
const vitc = document.getElementById('step-desc-13');
const vitb = document.getElementById('step-desc-14');
const water = document.getElementById('step-desc-15');



// Loop through each content div and display the information
var i;
for(i=0;i<Object.keys(nutrientData).length;i++)
{
  calo.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} kCal) : ${nutrientData[i].calories}  g</p>`;
  carb.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} g) : ${nutrientData[i].carbs}  g</p>`;
  fat.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} g) : ${nutrientData[i].fat}  g</p>`;
  prot.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} g)  : ${nutrientData[i].proteins}  g</p>`;
  fiber.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].fiber}  g</p>`;
  sug.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} g) : ${nutrientData[i].sugar}  g</p>`;
  chol.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].cholestrol}  g</p>`;
  na.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].sodium}  mg</p>`;
  k.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].potassium}  mg</p>`;
  fe.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].Iron}  mg</p>`;
  ca.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].calcium}  mg</p>`;
  vita.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].vitamin_A}  mg</p>`;
  vitc.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].Vitamin_C}  mg</p>`;
  vitb.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} mg) : ${nutrientData[i].Vitamin_B2}  mg</p>`;
  water.innerHTML+= `<p>${nutrientData[i].food_name}  (${nutrientData[i].weight} g) : ${nutrientData[i].water}  g</p>`;

}

}


// Call the function to fetch and display the information
fetchNutrientInformation();
});

