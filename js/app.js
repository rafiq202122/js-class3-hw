
//console.log(document.querySelector('.box .overlay .btn'));

//console.log(document.querySelector('p span .btn'));


// *ACTION PORPORMANCE addEvenleitener ()

 //let btn = document.querySelector('.btn')

 //function alertMe () {
   // alert("Hellow Bangladesh")
 //}

 //btn.addEventListener("mouseenter",alertMe);


 // *QUANTITY BUTTON PROJECT STARTS

   let incrementBnt = document.querySelector(".increment");
   let output = document.querySelector('.output');

   //* INCREMENT FUNCTION
   
   function incrementNum () {

      let newValue = Number(output.value);
      newValue = newValue + 1
      output.value = newValue;

   
   }
   incrementBnt.addEventListener("click",incrementNum);

   //* DECREMENT FUNCTION

   let decrementBtn = document.querySelector(".decrement");

   function decrementNum () {
     let newValue = Number(output.value);

     if (newValue == 0) {
      return false;
     }

     newValue = newValue - 1
     output.value = newValue;

   }

   decrementBtn.addEventListener('click', decrementNum);


   //* RANGE SLIDER

   let slider = document.querySelector(".slider");
   let result = document.querySelector('.rangeSlider .output h2 span')

   function updatePrice () {
     let newValue = slider.value;
     result.innerHTML = newValue
   
   }

   slider.addEventListener('input',updatePrice)


   // * RANDOM COLOR CHANGER
    
    let colorBtn = document.querySelector("#colorChanger");
    let body = document.querySelector('body');

    function colorChange () {
      let red = Math.round (Math.random () * 255);
      let green = Math.round (Math.random () * 255);
      let blue = Math.round (Math.random () * 255);

     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    }

    colorBtn.addEventListener('click', colorChange);


    // * IMGE ANIMATION 

    // * HOVER

     let box = document.querySelector('.box');
     let frontImg = box.querySelector('.front');
     let backImg = box.querySelector('.back');
     
     function changeImageFront () {
      
      frontImg.classList.add("hovered");
     }

     box.addEventListener ("mouseenter", changeImageFront);

     function changeImageBack () {
      
      backImg.classList.remove("hovered");
     }

     box.addEventListener ("mouseleave", changeImageBack);



