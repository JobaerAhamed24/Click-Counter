let number = parseInt(document.querySelector('#num').innerText);
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");

inc.addEventListener('click',function(){
   number = number +1
   document.querySelector('#num').innerText = number
})
dec.addEventListener('click',function(){
    if(number != 0){
        number = number -1
    }
    document.querySelector('#num').innerText = number
   
})
