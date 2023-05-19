/*function add(num1,num2) {
    return num1 + num2;

}
console.log(add(1,5));
console.log(add(12,15));

function addRandom(num1) {
    return num1 + Math.random();
}
console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5)); */


/*function caseInSwitch(val1) {    
    var answer ="";
    switch(val1) {
        case 1: answer = "alpha";
        break;
        case 2: answer = "Beta";
        break;
        case 3: answer = "gamma";
        break;
        case 4: answer = "delta";

        break;
        case 6: answer = "Jaswanth";
        break;

    }

    return answer;
}

console.log(caseInSwitch(1));  */


/* function switchOfStuff(val) {
    var answer ="";
    switch (val) {
        case "a":
            answer = "apple";
            break;
            case "b": answer = "Bird";
             break;
             case "c" : answer = "cat";
             break;
             case "d" : answer = "Dog";
             break;
             default: answer = "answer not in list";
             break;

    }
    return answer;
}

console.log(switchOfStuff("C")); */


/* function sequentialSizes(val) {
    var answer ="";
    switch(val) {
        case 1:
        case 2:
        case 3:answer = "low";
        break;
        case 4:
        case 5:
        case 6: answer = "Mid";
            break;
        case 7:
        case 8:
        case 9: answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1)); 
console.log(sequentialSizes(5));
console.log(sequentialSizes(9)); */

/* function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";

    }else if (val <5) {
        return "Smaller than 5";
    }
    else{ 

   

    return "between 5 and 10";}
}
console.log(testElseIf(11)); */

/* function testSize(num) {
    if (num < 5) {
        return "tiny";

    }
    else if (num < 10) {
        return "Small";

    }
    else if (num < 15 ) {
        return "Medium";
 }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }
}
console.log(testSize(9)); */

 /* function caseInSwitch(val) {
    var answer ="";

    switch(val) {
        case 1: answer = "alpha";
        break;
        case 2: answer = "Beta";
        break;
        case 3: answer = "gamma";
        break;
        case 4: answer = "delta";
        break;
         default : answer = "Not in List";

    }
    return answer;
}

console.log(caseInSwitch(7)); */

/* function    switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":answer = "apple";
        break;
        case "b":answer = "banana";
        break;
        case "c":answer = "cat";
        break;
        case "d":answer = "Dog";
        break;
        default : answer=  "Not in list";
        break;
    }
    return answer;
 }
 console.log(switchOfStuff("c"));
 console.log(switchOfStuff("3"));
 console.log(switchOfStuff("d")); */

/* function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3: answer = "Low";
        break;
        case 4:
        case 5:
        case 6: answer = "Medium";
        break;
        case 7:
        case 8:
        case 9:
        case 10: answer ="High";
        break;
        default : answer = "Not in List";
        break;
    }
    return answer;
 }
 console.log(sequentialSizes(3));
 console.log(sequentialSizes(11));
 console.log(sequentialSizes(9)); */

/*  function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob": answer = "Marley";
        break;
        case 42: answer = "The answer 42";
        break;
        case 1: answer = "The answer 1";
        break;
    }
    return answer;
}
console.log(chainToSwitch(1)); 
console.log(chainToSwitch(42)); */


/* var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: count++;
         break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " +holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4)); */

/* var testObj = {
    "hat": "ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
}

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoeValue = testObj.shoes;

console.log(hatValue);
console.log(shirtValue);
console.log(shoeValue); */

/* let userName ='Max';

function greetUser() {
    let name = userName;
    console.log('Hi' + name);

userName = 'Manuel';
}

console.log(greetUser()); */



function add(num1, num2) {
    return num1 + num2;
  }
  
  // function sendDataToServer() {}
  
  console.log(add(1, 5)); // 6
  console.log(add(12, 15)); // 27
  
  function addRandom(num1) {
    return num1 + Math.random();
  }
  
  console.log(addRandom(5));
  
  let previousResult = 0;
  
  function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
  }
  
  console.log(addMoreNumbers(1, 5));
  
  const hobbies = ['Sports', 'Cooking'];
  
  function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
  }
  
  printHobbies(hobbies);
  
  let multiplier = 1.1;
  
  function createTaxCalculator(tax) {
    function calculateTax(amount) {
      console.log(multiplier);
      return amount * tax * multiplier;
    }
  
    return calculateTax;
  }
  
  const calculateVatAmount = createTaxCalculator(0.19);
  const calculateIncomeTaxAmount = createTaxCalculator(0.25);
  
  // multiplier = 1.2;
  
  console.log(calculateVatAmount(100));
  console.log(calculateVatAmount(200));
  
  let userName = 'Max';
  
  function greetUser() {
    // let name = 'Anna';
    console.log('Hi ' + name);
  }
  
  let name = 'Maximilian';
  
  userName = 'Manuel';
  
  greetUser();
  
  
  // function powerOf(x, n) {
  //   let result = 1;
  
  //   for (let i = 0; i < n; i++) {
  //     result *= x;
  //   }
  
  //   return result;
  // }
  
  
  function powerOf(x, n) {
  
    // if (n === 1) {
    //   return x;
    // }
    // return x * powerOf(x, n - 1);
  
    return n === 1 ? x : x * powerOf(x, n - 1);
  }
  
  console.log(powerOf(2, 3)); // 2 * 2 * 2
  
  const myself = {
    name: 'Max',
    friends: [
      {
        name: 'Manuel',
        friends: [
          {
            name: 'Chris',
            friends: [
              {
                name: 'Hari'
              },
              {
                name: 'Amilia'
              }
            ]
          }
        ]
      },
      {
        name: 'Julia'
      }
    ]
  };
  
  function getFriendNames(person) {
    const collectedNames = [];
  
    if (!person.friends) {
      return [];
    }
    
    for (const friend of person.friends) {
      collectedNames.push(friend.name);
      collectedNames.push(...getFriendNames(friend));
    }
    
    return collectedNames;
  }
  
  console.log(getFriendNames(myself));









