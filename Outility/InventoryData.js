module.exports = {

  
    inventory(object, wg) {
      console.log(" input ", wg);
  
      if (!isNaN(wg) && wg > 0) {
        console.log("Inventory")
        var rice = object.Rice
        var wheat = object.Wheats
        var pulse = object.Pulse
        for (let i in rice) {
          console.log(rice[i]);
          console.log("price per kg:" + rice[i].price + "kg");
          console.log("Total quantity:" + wg);
          console.log('Total price for ' + rice[i].name + "is:Rs", rice[i].price * wg);
          console.log("");
        }
  
  
        for (let i in wheat) {
          console.log(wheat[i]);
          console.log("price per kg:" + wheat[i].price + "kg");
          console.log("Total quantity:" + wg);
          console.log("Total price for " + wheat[i].name + "is:Rs", wheat[i].price * wg);
          console.log("");
        }
  
  
        for (let i in pulse) {
          console.log(pulse[i]);
          console.log("price per kg:" + pulse[i].price + "kg");
          console.log("Total quantity:" + wg);
          let total = (pulse[i].price * wg)
          console.log("Total price for " + pulse[i].name + "is:Rs", total);
          console.log("");
          return total;
        }
  
      } else {
        console.log(" input weigth should be number and greater than 0")
      }
  
    },
}  