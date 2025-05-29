  /* makes the code function properly, change star colors  */
    /* tags all elements with the "i" (i.stars) and store them in Nodelist (list of values) called "stars"*/const stars = document.querySelectorAll(".stars i"); 
    console.log(stars); /* check if it stores, can open console to check*/
/* to loop the stars in Nodelist */ stars.forEach((star, index1) => {
  /* adding an addEventListener runs a function when the "Click" is being triggered, on the click the stars whill change color*/ star.addEventListener("click", () => { 
     console.log(index1);          
    /*looping it again*/ stars.forEach((star,index2) => {
      console.log(index2);
      /*Adding the "active" class to the clicked star and any stars with a lower index, active means to allow the star to change color. if a star is clicked on, that star and the ones with lwer indes will change color and the ones wit a higher index do not chage, not "active"*/ 
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
})
/*link to video : https://youtu.be/q1xhbc-oKnc?si=8YpiVz-R76Un5Ssr */
