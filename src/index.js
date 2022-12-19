import {pageLoad} from './page-load';
import { homeImg } from './home';

import { menuItems } from './menu';
// import { renderGallery } from './gallery';


pageLoad();

homeImg();
// renderMenu();
menuItems();
// renderGallery();

const navTabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
console.log(tabContents[0].classList);

// Navigation bar clicks 
function tabClick() {
    // Loops through array of tabs 
    for(let i=0; i<navTabs.length; i++) {
        // Event listener for each tab in navTabs array
        navTabs[i].addEventListener('click', () => {
            // Loops through array of tab contents 
            for(let j=0; j<tabContents.length; j++) {
                // If tab name matches tab contents name, hidden class is removed
                if (navTabs[i].getAttribute('name') == tabContents[j].getAttribute('name')) {
                    console.log(tabContents[j]);
                    // Loops through tab contents array and adds hidden class to each
                    for(const tabcontent of tabContents) {
                        tabcontent.classList.add('d-none');
                    }
                    tabContents[j].classList.remove('d-none');
                    
                }
            }
            
        })
    }
}

tabClick();