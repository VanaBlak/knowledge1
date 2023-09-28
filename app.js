// console.log("I love playing the guitar");
let age = 20;
let is_subscribed = false; 

if (age < 18 && is_subscribed === true) { 
    console.log("Statement 1: you are less than 18 & you're subscribed");
  }

  if (age >= 18 && is_subscribed === true) { 
    console.log("Statement 2:you are 18 or older & you're subscribed");
  }

  if (age < 18 && is_subscribed === false) { 
    console.log("Statement 3: you are 18 or older & you're not subscribed");
  }
// the user is  18 or older and not subscribed
if (age >= 18 && is_subscribed === false) { 
    console.log("Statement 4: you are 18 or older & you're not subscribed");
  }
