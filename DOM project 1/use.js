let drebtn = document.getElementById("decrementBtn");
let increbtn = document.getElementById("incrementBtn");
let resetbtn = document.getElementById("resetBtn");
let disval = document.getElementById("displayValue");

// for drecrement button
drebtn.addEventListener("click",()=>{
    const value = Number(disval.innerText);
    if(value>0){
        disval.innerText = value-1;
    }
    else{
        alert("Negative numbers are not allowed");
    }
});

//for incrementing button

increbtn.addEventListener("click",()=>{
    const value = Number(disval.innerText);
    disval.innerText = value+1;
});

resetbtn.addEventListener("click",()=>{
    disval.innerText = 0;
})