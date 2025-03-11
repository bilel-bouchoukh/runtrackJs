function fizzbuzz(){
    let x = 151
    for (let i = 0 ; i<x ; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
            i++;
        }
        else if (i%3==0){
            console.log("Fizz")
            i++;
        }
        else if (i%5==0){
            console.log("Buzz")
            i++;
        } 
        console.log(i)
        
    }
}

fizzbuzz()


