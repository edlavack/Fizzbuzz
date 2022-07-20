//controller functions
function getValues(){

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
   


    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(1, 100);
        displayValues(numbers);
    } else {
        alert('please enter a number')

        Swal.fire(
            { backdrop: false,
             title: 'Uh Oh',
             text: "You gotta enter numbers",
            }
         );
    }
}

//business
function generateNumbers(start, stop){
let numbers = [];

for (let i = start; i <= stop; i++) {
    numbers.push(i);
    
}
return numbers;
}




//view
function displayValues(numArray){

let results = document.getElementById("results")
results.innerHTML = "";

for (let i = 0; i < numArray.length; i++) {
  

    let div = document.createElement("div");

    let currentNumber = numArray[i];
    div.innerHTML = currentNumber;

    div.classList.add("col");

    
    if (currentNumber % 3 == 0) {
        div.classList.add("fizz")
        div.innerHTML = "fizz";
    }
    
    if (currentNumber % 5 == 0) {
        div.classList.add("buzz")
        div.innerHTML = "buzz";
    }
    
    if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
        div.classList.add("fizzbuzz")
        div.innerHTML = "fizzbuzz";
    }

    

    results.appendChild(div);
}


   
}