
var TypedText = new Typed
(".animatedText", {
    strings: ["STUDENT - COMPUTING", "ASPIRING DEVELOPER AND ENGINEER", "BUT ALSO", "PIANO TEACHER AND PIANIST"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true

});

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)

})

