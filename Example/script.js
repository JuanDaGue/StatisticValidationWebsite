const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSection(1);
    } else if (event.deltaY < 0) {
        changeSection(-1);
    }
});

function changeSection(direction) {
    sections[currentSectionIndex].classList.remove('active');
    
    currentSectionIndex += direction;
    
    if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1;
    } else if (currentSectionIndex >= sections.length) {
        currentSectionIndex = 0;
    }
    
    sections[currentSectionIndex].classList.add('active');
}
