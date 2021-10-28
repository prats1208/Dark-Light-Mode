const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imgtheme(color){
    image1.setAttribute('src',`img/undraw_proud_coder_${color}.svg`);
    image2.setAttribute('src',`img/undraw_feeling_proud_${color}.svg`);
    image3.setAttribute('src',`img/undraw_conceptual_idea_${color}.svg`);
}

function toggeleMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255,255,255, 0.5)';
    textBox.style.backgroundColor = isDark ? 'rgba(255,255,255, 0.5)': 'rgba(0, 0, 0, 0.5)';
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    isDark ? imgtheme('dark') : imgtheme('light');
}

// function darkmode(){
//     nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     textBox.style.backgroundColor = 'rgba(255,255,255, 0.5)';
//     toggleIcon.children[0].textContent = "Dark Mode";
//     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
//     imgtheme('dark');
// }

// function lightmode(){
//     nav.style.backgroundColor = 'rgba(255,255,255, 0.5)';
//     textBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
//     imgtheme('light');
// }

function toggleTheme(event){
    console.log(event);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        // save to localStorage
        localStorage.setItem('theme','dark');
        toggeleMode(true);
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        // save to localStorage
        localStorage.setItem('theme','light');
        toggeleMode(false);
    }
}

toggleSwitch.addEventListener('change', toggleTheme);


// get theme from localstorage and apply it
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme==='dark'){
        toggleSwitch.checked = true;
        toggeleMode(true);
    }
}