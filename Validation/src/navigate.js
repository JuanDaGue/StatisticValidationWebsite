window.addEventListener('DOMContentLoaded', navigate, false)
window.addEventListener('hashchange', navigate, false)
msg=console.log;
msg('Holeeeeeeeeeeeeeeeeeee')
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
    hash === '#categories' ? console.log('Ok') :
    Home();
    
    window.scrollTo(0, 0);
}

navigate();

function result (){

    console.log('result!!!')
    referencesSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    contactSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
    overviewSection.classList.add('inactive')
}
function overview (){

    overviewSection.classList.remove('inactive')

    homeSection.classList.add('inactive');
    referencesSection.classList.add('inactive')
    contactSection.classList.add('inactive')
    conclusionsSection.classList.add('inactive')
    dataAnalysisSection.classList.add('inactive') 
    modelSection.classList.add('inactive')
    methodologySection.classList.add('inactive')
    backgroundSection.classList.add('inactive')
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

}