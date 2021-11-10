const parallax = document.getElementById('hero');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1 + "px";
    // console.log("Offset: " + offset); //logs the offset in the browser
    // console.log("Offset * 0.7: " + offset * 0.7); //logs offset manipulated by the multiplier and gives us the factor we want for our parallax effect.
});
