const multiplo3 = "Fizz";
const multiplo5 = "Buzz";
const grid = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    if(i % 15 == 0){
        // console.log(multiplo3+multiplo5);
        grid.innerHTML += '<div class="element multiplo15">' + (multiplo3+multiplo5) + '</div>';
    }else if (i % 3 == 0) {
        // console.log(multiplo3);
        grid.innerHTML += '<div class="element multiplo3">' + multiplo3 + '</div>';
    }else if (i % 5 == 0){
        // console.log(multiplo5);
        grid.innerHTML += '<div class="element multiplo5">' + multiplo5 + '</div>';
    }else{
        // console.log(i);
        grid.innerHTML += '<div class="element">' + i + '</div>';
    }
}