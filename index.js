'use strict'
let bulbFirst = document.querySelector('.bulb');

const change1 = () =>{
  if(bulbFirst.classList.contains('bulbon')){
      bulbFirst.classList.add('bulboff');
      bulbFirst.classList.remove('bulbon');

  }else{
    bulbFirst.classList.remove('bulboff');
    bulbFirst.classList.add('bulbon');
  }

}
//can be done only with one class name and changing it to on.


/*change = () =>{
    
    bulbFirst.classList.toggle('bulbon');
}

/*
password
const checkpass = () =>{
    let password = document.querySelector(".pass").value;
    let correct = 'secret';
    let mess = document.querySelector(".message");
    if (password === correct){
        mess.innerHTML = 'welcome';
    }else{
        mess.innerHTML = 'get out';
    }
}*/

/*

const buy = () =>{
    let btn = document.querySelector(".inCart");
    //let numberitms = document.querySelector('.number').value;
   // btn.textContent = 'you have '+numberitms +' items';
    btn.classList.add("itmBought");
    btn.classList.remove("itm2");

    

    //document.querySelector('.text').innerHTML = 'item bought'
}
//let boton = document.querySelector(".inCart");
//boton.addEventListener('click', buy());

*/


