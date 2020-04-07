// -----X----------------------For sticky and animated nav bar--------------------X-----

// we have multiple eventListener like scroll, onclick etc so we've used scroll so that we can use our css effect on scrolling!!

window.addEventListener("scroll", function(){
    //  here creating the navBar variable
    var header = document.querySelector("header");  // selecting the navbar tag using getElementbyID function
    header.classList.toggle("sticky", window.scrollY > 0); // this will toggle the class name to the name called "sticky" and then on sticky class the css part comes into play!! ;)
    
})
    