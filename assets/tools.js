const multiplo3 = "Fizz";
const multiplo5 = "Buzz";
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(multiplo3+multiplo5);
    }else if (i % 3 == 0) {
        console.log(multiplo3);
    }else if (i % 5 == 0){
        console.log(multiplo5);
    }else{
        console.log(i);
    }
}