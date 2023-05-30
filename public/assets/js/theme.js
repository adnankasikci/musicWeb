const sunIcon = document.querySelectorAll('.iconSun');
const moonIcon = document.querySelectorAll('.iconMoon');
const body = document.querySelector('body');

sunIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        body.classList.remove('dark');
    });
});

moonIcon.forEach(icon=>{
    icon.addEventListener('click', () => {
        body.classList.add('dark');
    })
} )
