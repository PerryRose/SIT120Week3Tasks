const btn = document.getElementById('button');
btn.addEventListener('click', stringMethods);

function stringMethods() {

    const myString = "Hello, how are you?"
    console.log("String: " + myString);

    // Length
    console.log("Length: " + myString.length);

    // Uppercase
    console.log("Uppercase: " + myString.toUpperCase());

    // Lowercase
    console.log("Lowercase: " + myString.toLowerCase());

    // Split
    const myStrings = myString.split(' ');
    myStrings.forEach((x, i) => console.log("- Substring " + i + ": " + x));

    // Replace
    console.log("New String: " + myString.replace("Hello", "Howdy partner"));

    // Index Of
    console.log("The comma's position in string: " + myString.indexOf(','));

    // Reverse (Split, reverse and join)
    console.log("Reversed: " + myString.split('').reverse().join(''));
}

