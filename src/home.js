import Img from './img1.jpg';

function homeImg() {
    const content = document.getElementById('content');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('tab-content', 'home');
    imgDiv.setAttribute('name', 'home');

    const homeText = document.createElement('div');
    homeText.classList.add('homeText');
    homeText.innerHTML = `
        <h3 class="">Lorem ipsum dolor sit</h3>
        <p>Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus</p>
    `
    
    const img = new Image();
    img.src = Img;
    img.classList.add('img-fluid', 'position');
    img.id = 'home-img';
    img.setAttribute('name', 'home');

    
    imgDiv.appendChild(img);
    imgDiv.appendChild(homeText);
    
    content.appendChild(imgDiv);
}

export { homeImg }