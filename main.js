const parallax = document.getElementById('hero');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1 + "px";
    // console.log("Offset: " + offset); //logs the offset in the browser
    // console.log("Offset * 0.7: " + offset * 0.7); //logs offset manipulated by the multiplier and gives us the factor we want for our parallax effect.
});




const contactInteractivity = () => {

    const contactBtn = document.getElementById('contact_btn');
    contactBtn.style.cursor = 'pointer';
    contactBtn.addEventListener('mouseover', () => {
        contactBtn.style.opacity = '0.90';
    })
    contactBtn.addEventListener('mouseout', () => {
        contactBtn.style.boxShadow = null;
        contactBtn.style.opacity = 1;
    })
    contactBtn.addEventListener('click', () => {
        contactBtn.style.opacity = '0.75';
        window.open('https://www.linkedin.com/in/eric-o-brien44/');
    })
}

contactInteractivity();