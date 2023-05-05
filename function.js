// Write a function that takes a string as input and returns the number
//  of vowels in the string.
function findVowels(word){
    let vowels = ['a','e','i','o','u']
    let count = 0
    for (let char of word) {
      if (vowels.includes(char)) {
        count++
      }
       
    }
    return count
    
}
let word = "Jubilant"
console.log(findVowels(word));

// Write a function that takes an array of numbers as input and returns
//  the sum of all the numbers.
function getSum(nums){
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i]
    }
    return sum

}
let nums =[1,2,3,4,5,6,7,8];
console.log(getSum(nums));


// Write a function that takes two numbers as input and returns true 
// if their sum is greater 
// than 100, and false otherwise.
function findNumGreater(num1,num2){
    let sumOftwoNumber = num1+num2
    if (sumOftwoNumber >100) {
        return true
    }
    else{
        return false
    }
}
console.log(findNumGreater(100,20));


// Write a function that takes in a array of numbers as a parameter and returns the 
// second largest number in the array
function number(numss){
    numss.sort(function(m,n){
        return n-m
    })
      
}
let numss = [10,12,45,32]
console.log(number(numss));

// Write a function that takes a string as a parameter and returns true if the string is
//  a palindrome and false otherwise
function findpalindrome(str){
    let stmt = str.split('').reverse().join('')
    if (str === stmt) {
        return true
    }
    else{
        return false
    }
}
let str = "civic"
console.log(findpalindrome(str))