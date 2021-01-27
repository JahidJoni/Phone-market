plus.addEventListener("click", function(){
   let quantity = document.getElementById(id).value;
   quantityNumber = parseFloat(quantity);
   quantityCalculate = quantityNumber + 1;
   document.getElementById(id).value = quantityCalculate;
})

function adding(id){
    let quantity = document.getElementById(id).value;
    quantityNumber = parseFloat(quantity);
    quantityCalculate = quantityNumber + 1;
    document.getElementById(id).value = quantityCalculate;
 })