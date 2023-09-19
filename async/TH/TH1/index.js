const stock = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let shopIsOpen = true;
  
  function setTimeDelay(ms) {
    return new Promise((resolve, reject) => {
      if (shopIsOpen) {
        setTimeout(resolve, ms);
      } else {
        reject(console.log("The shop is currently closed."));
      }
    });
  }
  
  async function iceCreamProduction() {
    try {
      await setTimeDelay(2000);
      console.log(`Selected ${stock.fruits[0]}`);
  
      await setTimeDelay(0);
      console.log("Production process initiated");
  
      await setTimeDelay(2000);
      console.log("Fruit has been chopped");
  
      await setTimeDelay(1000);
      console.log(`Added ${stock.liquids[0]} and ${stock.liquids[1]}`);
  
      await setTimeDelay(1000);
      console.log("Machine started");
  
      await setTimeDelay(2000);
      console.log(`Ice cream placed in a ${stock.holders[1]}`);
  
      await setTimeDelay(3000);
      console.log(`Used ${stock.toppings[0]} as toppings`);
  
      await setTimeDelay(2000);
      console.log("Ice cream served");
    } catch (error) {
      console.log("Customer left the shop");
    }
  }
  
  iceCreamProduction();
  
  
  
  
  
  