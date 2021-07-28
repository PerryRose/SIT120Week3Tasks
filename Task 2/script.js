const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    numberMethods();
    arrayMethods();
});

function numberMethods() {
    const num = 235.456;
    console.log("Number: " + num);

    // To-String
    console.log("To String: " + num.toString());
    
    // To-Exponential
    console.log("To Exponential (2): " + num.toExponential(2));

    // To-Fixed
    console.log("To Fixed (2): " + num.toFixed(2));

    // To-Precision
    console.log("To Precision (2): " + num.toPrecision(2));

    // Value-Of
    console.log("Value Of: " + num.valueOf());

    // Number
    console.log("Is " + num + " a number? " + Number(num));
    console.log("Is 'Hello' a number? " + Number('Hello'));

    // Parse Int
    console.log("Parsing '123' as an Int: " + parseInt('123'));

    // Parse Float
    console.log("Parsing '45.67' as a Float: " + parseFloat('45.67'));

    // Max Value
    console.log("Max value a number can be is " + Number.MAX_VALUE);

    // Min Value
    console.log("Min value a number can be is " + Number.MIN_VALUE);
}

function arrayMethods() {
    const fruits = ["Apple", "Banana"];
    const vegetables = ["Potatoe", "Carrot"];

    // To String
    console.log("Fruits: " + fruits.toString())
    console.log("Vegetables: " + vegetables.toString());

    // Concat
    const food = fruits.concat(vegetables);
    console.log("Concat: " + food.toString());

    // Sort
    food.sort();
    console.log("Sorted: " + food.toString());

    // Pop
    console.log("Popped value (" + food.pop() + "): " + food.toString());

    // Push
    food.push("Peach");
    console.log("Pushed value (Peach): " + food.toString());

    // Shift
    console.log("Shifted value (" + food.shift() + "): " + food.toString());

    // Unshift
    food.unshift("Orange");
    console.log("Unshift value (Orange): " + food.toString());

    // Reverse
    console.log("Reversed: " + food.reverse().toString());

    // Indexes
    console.log("Element at index 0 is: " + food[0]);

}