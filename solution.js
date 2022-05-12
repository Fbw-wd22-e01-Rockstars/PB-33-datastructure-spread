// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.

// * Once again create two arrays. Save all elements of both arrays to another variable. 


// spread operator you call ... spreead operator with value
// rest operator you call ... rest operator with variable

const euroCountries = ["Germany","France","Italy"]
const asianCountries = ["India","China","Pakistan"]
for(const country of asianCountries){
    euroCountries.push(country)
}
console.log(euroCountries)

/* worldCountries = [ ...euroCountries , ...asianCountries] */


/* function sum(...numbers){

}

sum(2,3,4,5)
const [a, ...num] = [1,2,3,4]

console.log(num) */


/*  console.log(...euroCountries) */
/*console.log("Germany", "France", "Italy") */

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 

const numbers = [1,2,3,4,5]
const copyNumbers = [...numbers]



// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

function largestNumber(arr){
    return Math.max(...arr)
}
console.log(largestNumber([2,4,6,8,0,3]))


// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

function smallestNumber (arr){
    return Math.min(...arr)
}
console.log(smallestNumber([4,3,6,7,8,1]))


// #### 5. Clone and Merge
// Given two objects:
// ```javascript
const person = {name: "John"}
const job = {role: "Teacher"}

/* const copyPerson = Object.assign({},person) */
const copyPerson =  {...person}

/* const employee = Object.assign({}, person,job) */
const employee = {...person , ...job}
employee.name = "Oliver"
console.log(person)


// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.




// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

function isWhole(a,b,c,d){
    let average = (a+b+c+d)/4; // 2.5

    if(Number.isInteger(average)){
        return true
    }else{
        return false
    }
}
/* console.log(isWhole(4,4,4,4)) */

console.log(isWhole(...[1,2,3,2]))

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!/*  */

const student = {name:"Moon",age:23}
const names = ["John","Syed","Joseph"]

console.log(...names) 
console.log("John", "Syed","Joseph")
/* console.log(...student)
console.log(name:"Moon",age:23) */