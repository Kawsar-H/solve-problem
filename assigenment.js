// Kilometer To Meter Convert
function kilometerToMeter(Kilometers){
    var meters = Kilometers *1000
    return meters;
}
var meterNumber = kilometerToMeter(10);
console.log(meterNumber);

// Budget Calculator
 function budgetCalculator( watch, phone, leptop){
     var watchPrice = 50;
     var phonePrice = 100;
     var leptopPrice = 500;
     var totalPrice = (watchPrice*watch + phonePrice*phone + leptopPrice*leptop);
     return totalPrice;
 }
  var result = budgetCalculator(1,2,3);
  console.log(result);

  //hotelCost

  function hotelCost(StaydDay){
      var totalCost = 0;
      if(StaydDay <= 10){
          totalCost = StaydDay*100;
      }
      else if(StaydDay <= 20){
          var tenDayCost = 10*100;
          var stay = StaydDay - 10;
          var twentyDayCost = stay * (100-20);
          totalCost = tenDayCost + twentyDayCost;
      }
      else{
          var tenDayCost = 10*100;
          var twentyDayCost = 10*(100-20);
          var stay = StaydDay - 20;
          var moreDayCost = stay*50;
          totalCost = tenDayCost + twentyDayCost + moreDayCost;
      }
      return totalCost;
  }

  var result =  hotelCost(71);
  console.log(result);

  // Leargest Element From Arry

  var friendName = ["Kawsar", "Rakib", "Tohidull", "Ali", "Muzammell", "Taskin", "Rahi"];
  function megaFriend(inputName){
      var leargestName = inputName[0];
      for(var i = 0; i < inputName.length; i++){
          if(inputName[i].length > leargestName.length){
              leargestName = inputName[i];
          }
      }
      return leargestName;
  }
  console.log(megaFriend(friendName));