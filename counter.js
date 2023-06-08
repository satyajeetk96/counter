const btn1 = document.getElementById("dec");
const btn2 = document.getElementById("res");
const btn3 = document.getElementById("inc");

var number = 0;
const num = document.querySelector("span");

btn1.addEventListener("click", function(){
    number-=1;
    if(number<0){
        num.style.color = "red";
    }
    else if(number>0){
          num.style.color = "#7fff00"
    }
    else{
        num.style.color = "#d9cf14"
    }
    num.innerText= number;

})

btn2.addEventListener("click", function(){
    number = 0;
    if(number<0){
        num.style.color = "red";
    }
    else if(number>0){
          num.style.color = "#7fff00"
    }
    else{
        num.style.color = "#d9cf14"
    }
    num.innerText = number;

})

btn3.addEventListener("click", function(){
    number+=1;
    if(number<0){
        num.style.color = "red";
    }
    else if(number>0){
          num.style.color = "#7fff00"
    }
    else{
        num.style.color = "#d9cf14"
    }
    num.innerText= number;

})

