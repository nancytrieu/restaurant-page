// Import photos
import img1 from './m-img1.png';
import img2 from './m-img2.jpg';
import img3 from './m-img3.jpeg';
import img4 from './m-img4.jpeg';
import img5 from './m-img5.jpeg';
import img6 from './m-img6.jpeg';
import img7 from './m-img7.jpeg';
import img8 from './m-img8.jpeg';

// Class object
class Item {
    itemsArray = new Array();
    constructor() {}

    // Stores new objects in the itemsArray
    addItem(id, img, name, description) {
        this.itemsArray.push({id, img, name, description});
    }

    getItemsArray() {
        return this.itemsArray;
    }
}

let menu = new Item();
menu.addItem(0, img1,'MARGHERITA', 'Tomatoes, mozzarella cheese, garlic, fresh basil, extra-virgin olive oil');
menu.addItem(1, img2,'PEPPERONI', 'Crushed tomatoes, mozzarella blend, pepperoni, oregano, fresh basil');
menu.addItem(2, img3, 'BURRATA PESTO', 'Cherry tomatoes, mozzarella cheese, burrata cheese,  basil pesto');
menu.addItem(3, img4, 'MUSHROOM JALAPENO', 'Mozzarella cheese, mushrooms, jalapeno, olives, grated parmeasan');
menu.addItem(4, img5,'BREAKFAST', 'Mozzarella blend, bacon bits, eggs, red onions, fresh parsley, grated parmeasan');
menu.addItem(5, img6, 'PESTO', 'Cherry tomatoes, mozzarella cheese, burrata cheese,  basil pesto');
menu.addItem(6, img7, 'MUSHROOM', 'Mozzarella cheese, mushrooms, jalapeno, olives, grated parmeasan');
menu.addItem(7, img8, 'BURRATA', 'Cherry tomatoes, mozzarella cheese, burrata cheese,  basil pesto');
// console.log(menu.getItemsArray().length);

// Adds elements to html page 
function menuItems() {
    const content = document.querySelector('#content');
    let container = document.createElement('div');
    container.id = 'tab-content';
    container.classList.add('text-center', 'tab-content', 'd-none');
    container.setAttribute('name', 'menu');
    let row = document.createElement('div');
    row.classList.add('row');

    // Column counter 
    let colCounter = 0

    // For loop to loop through menu itemsArray 
    for (let i=0; i<menu.getItemsArray().length; i++) {
            
        const column = document.createElement('div');
        column.classList.add('col');
        let itemName = menu.getItemsArray()[i].name;
        let itemDesc = menu.getItemsArray()[i].description;
       

        let text = document.createTextNode(itemName);
        const p1 = document.createElement('p');
        p1.classList.add('itemTitle');

        let text2 = document.createTextNode(itemDesc);
        const p2 = document.createElement('p');
        p2.classList.add('itemDesc');

        let img = new Image();
        img.src = menu.getItemsArray()[i].img;
        img.classList.add('img-fluid', 'm-img');

        p1.appendChild(text);
        p2.appendChild(text2);
        column.appendChild(img);
        column.appendChild(p1);
        column.appendChild(p2);
        row.appendChild(column);

        colCounter += 1;
        console.log(colCounter);
        console.log(row)

        // If statement to create new row element when current row contains 4 columns
        if(colCounter === 4) {
            container.appendChild(row);
            row = document.createElement('div');
            row.classList.add('row');
            colCounter = 0;
        }


    } 
    container.appendChild(row);
    content.appendChild(container);
}



menuItems()

export { menuItems }