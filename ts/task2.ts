enum Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue"
}

const describeColor = (color: Color): string => `The color is ${color}.`;

console.log(describeColor(Color.RED));   
console.log(describeColor(Color.GREEN)); 
console.log(describeColor(Color.BLUE)); 
