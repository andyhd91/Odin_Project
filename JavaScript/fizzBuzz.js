let number = parseInt(promt("Please enter a numberto start FizzBuzz up to :"));

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(i)
    };
};  