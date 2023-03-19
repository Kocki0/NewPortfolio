console.log("Yo,welcome to my site!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle'); 
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

const fading = document.querySelectorAll(".slideright");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fading.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation-isometric'),
    path: 'https://assets2.lottiefiles.com/packages/lf20_zvcyhdqv.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'lottie animation' 
});