let input = document.getElementById("input")

 //display the number/operation inline in the screen when the user click it
function desplay(calcNumber) {
    input.value +=  calcNumber ;   
}

//display the result
function total() {
    input.value = eval(input.value) ;  
}

//delete one number/operation
function del() {
    input.value = input.value.slice(0 , -1) ; 
}

//reset the screen
function reset() {
    input.value = "";   
}

