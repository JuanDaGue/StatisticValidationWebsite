// Query selectors for main elements in the HTML document

// Header elements
const menu = document.querySelector('.menu');
const customIcon = document.querySelector('.custom-icon');
const navMenu = document.querySelector('nav.inactive');
const dropdownMenu = document.querySelector('.dropdown-menu');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Section elements
const homeSection = document.querySelector('#home');
const overviewSection = document.querySelector('#overview');
const backgroundSection = document.querySelector('#background');
const methodologySection = document.querySelector('#methodology');
const modelSection = document.querySelector('#model');
const dataAnalysisSection = document.querySelector('#data-analysis');
const conclusionsSection = document.querySelector('#conclusions');
const referencesSection = document.querySelector('#references');
const contactSection = document.querySelector('#contact');

// Other elements within sections
const homeTitle = homeSection.querySelector('h1');
const homeParagraph = homeSection.querySelector('p');

const overviewTitle = overviewSection.querySelector('h2');
const overviewParagraph = overviewSection.querySelector('p');

const backgroundTitle = backgroundSection.querySelector('h2');
const backgroundParagraph = backgroundSection.querySelector('p');

const methodologyTitle = methodologySection.querySelector('h2');
const methodologyParagraph = methodologySection.querySelector('p');

const modelTitle = modelSection.querySelector('h2');
const modelParagraph = modelSection.querySelector('p');

const dataAnalysisTitle = dataAnalysisSection.querySelector('h2');
const dataAnalysisParagraph = dataAnalysisSection.querySelector('p');

const conclusionsTitle = conclusionsSection.querySelector('h2');
const conclusionsParagraph = conclusionsSection.querySelector('p');

const referencesTitle = referencesSection.querySelector('h2');
const referencesList = referencesSection.querySelector('ul');

const contactTitle = contactSection.querySelector('h2');
const contactParagraph = contactSection.querySelector('p');
