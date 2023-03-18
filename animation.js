
function toggle() {
    var element = document.getElementById("navigation");
    element.classList.toggle("burger");
}
function escape() {
    var element = document.getElementById("nav");
    element.classList.toggle("escape");
}
function l1(){
    var element = document.getElementById("l1");
    element.classList.toggle("h1");
}




const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('square-animation');
        }
    });
});

observer.observe(document.querySelector('.square'));

const text    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('text-animation');
        }
    });
});

text.observe(document.querySelector('.text'));

// -----------1
const modul1    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('modul1-animation');
        }
    });
});

modul1.observe(document.querySelector('.modul1'));
// -----------2

const modul2    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('modul2-animation');
        }
    });
});

modul2.observe(document.querySelector('.modul2'));
// -----------3

const modul3    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('modul3-animation');
        }
    });
});

modul3.observe(document.querySelector('.modul3'));
// -----------4

const modul4    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('modul4-animation');
        }
    });
});

modul4.observe(document.querySelector('.modul4'));
// -----------5

const modul5    = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('modul5-animation');
        }
    });
});

modul5.observe(document.querySelector('.modul5'));