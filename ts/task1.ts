const myNumber: number = 26;        
const myString: string = "Hello, World!";  
const myBoolean: boolean = true;     

const squareNumber = (num: number): number => num * num;

const makeUpperCase = (text: string): string => text.toUpperCase();

const checkIsFirst = (isFirst: boolean): boolean => !isFirst;

console.log(squareNumber(myNumber));      
console.log(makeUpperCase(myString));     
console.log(checkIsFirst(myBoolean));     
