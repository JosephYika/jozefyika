
var TypedText = new Typed // assign new Object o a variable TypedText
(".animatedText", {
    strings: ["STUDENT - COMPUTING", "ASPIRING DEVELOPER AND ENGINEER", "BUT ALSO", "PIANO TEACHER AND PIANIST"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true

});

window.addEventListener('scroll', function(){ // attach an event handler to the specified element - in this case scroll
    var header = document.querySelector('header'); // return the first element
    header.classList.toggle('sticky', window.scrollY > 0)

})

