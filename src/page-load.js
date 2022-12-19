function pageLoad() {
    const divContent = document.getElementById('content');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'fixed-top');
    
    nav.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand">PIZZERIA
            <p class="logo">CANADA</p>
        </a>
        
            <div class="p-2" >
                <ul class=" tabs">
                    <li data-tab-target="#home" href="#" class="tab" aria-current="page" name="home">Home</li>
                    <li data-tab-target="#menu" href="#" class="tab" name="menu">Menu</li>
                    <li data-tab-target="#pricing" href="#" class="tab" name="gallery">Gallery</li>
                    <li data-tab-target="#contact" href="#" class="tab" name="contact">Contact</li>
                </div>
            </div>
        </div>
    `
    divContent.appendChild(nav);
}

export { pageLoad }