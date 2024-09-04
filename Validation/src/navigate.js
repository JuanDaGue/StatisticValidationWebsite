window.addEventListener('DOMContentLoaded', navigate, false)
window.addEventListener('hashchange', navigate, false)
msg=console.log;
let currentSectionIndex = 0;
customIcon.addEventListener('click', ()=>{
    if(navMenu.getAttribute('class').includes('inactive')){
        navMenu.classList.remove('inactive')
        document.querySelector('.active').classList.remove('active')
    }
    else{
        navMenu.classList.add('inactive')
        document.querySelector('header').classList.add('active')
    }
})

function navigate() {
    const hash = location.hash;
    hash.startsWith('#results') || hash.startsWith('#model') ? model() :
    hash.startsWith('#about') || hash.startsWith('#overview') ? overview() :
    hash.startsWith('#references') ? references() :
    hash.startsWith('#background') ? background() :
    hash.startsWith('#methodology') ? methodology() :
    hash.startsWith('#data-analysis') ? dataAnalysis() :
    hash.startsWith('#contact') ? contact() :
    hash.startsWith('#conclusions') ? conclusions() :
    hash.startsWith('#home') ? Home():
    Home();
    
    window.scrollTo(0, 0);
}

navigate();

function result (){


    referencesSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    contactSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 4;
}
function overview (){

    overviewSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive');
    contactSection.classList.add('inactive');
    conclusionsSection.classList.add('inactive');
    dataAnalysisSection.classList.add('inactive');
    modelSection.classList.add('inactive');
    methodologySection.classList.add('inactive');
    backgroundSection.classList.add('inactive');
    currentSectionIndex = 1;
}
function references (){

    referencesSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    contactSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 7;
}

function contact (){

    contactSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 8;
}

function model (){

    modelSection.classList.remove('inactive')
    
    contactSection.classList.add('inactive')
    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 4;
}
function conclusions(){

    conclusionsSection.classList.remove('inactive')
    
    contactSection.classList.add('inactive')
    modelSection.classList.add('inactive')
    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 6;
}
function methodology (){

    methodologySection.classList.remove('inactive')
    
    modelSection.classList.add('inactive')
    contactSection.classList.add('inactive')
    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 3;
}

function dataAnalysis (){

    dataAnalysisSection.classList.remove('inactive') 
    
    modelSection.classList.add('inactive')
    contactSection.classList.add('inactive')
    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 5;
}

function background (){

    backgroundSection.classList.remove('inactive')
    
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    contactSection.classList.add('inactive')
    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 2;
}
function Home (){
    homeSection.classList.remove('inactive');
    
    referencesSection.classList.add('inactive')
    contactSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
    currentSectionIndex = 0;
}


let currentPage = 1;
const totalPages = 2;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
    document.getElementById(`page${page}`).style.display = 'block';
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});



let currentRotation = 0;
const container = document.querySelector('.container');
// const rotateButton = document.getElementById('rotateButton');

// rotateButton.addEventListener('click', rotateSection);



function rotateSection(container) {

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentRotation -= 90;
            container.style.transform = `rotateY(${currentRotation}deg)`;
        }
    });
}

const sections = document.querySelectorAll('section');

let isThrottled = false;
const throttleTime = 20; // 1 second delay

window.addEventListener('wheel', (event) => {
    if (isThrottled) return;

    if (event.deltaY > 0) {
        changeSection(1);
    } else if (event.deltaY < 0) {
        changeSection(-1);
    }

    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
    }, throttleTime);
});

function changeSection(direction) {
    //sections[currentSectionIndex].classList.remove('active');
    location.hash=sections[currentSectionIndex].getAttribute('id')
    currentSectionIndex += direction;
    
    if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1;
    } else if (currentSectionIndex >= sections.length) {
        currentSectionIndex = 0;
    }
    
    //sections[currentSectionIndex].classList.add('active');
}
