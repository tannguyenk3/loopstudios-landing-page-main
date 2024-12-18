const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileListMenu = document.querySelector('.mobile_list_menu');

function Resize() {
    if (window.innerWidth > 1024) {
        mobileListMenu.style.display = 'none';
        closeBtn.style.display = 'none';

        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
            origin: 'bottom'
        });
        
        ScrollReveal().reveal('.logo', { origin: 'top' });
        ScrollReveal().reveal('hero, .image_content, .footer__bottom', { origin: 'bottom' });
        ScrollReveal().reveal('.vr_content, .desktop_nav', { origin: 'left' });
        ScrollReveal().reveal('.hero, .vr_image, .logo_bottom', { origin: 'right' });
        
    }
}

openBtn.addEventListener('click', () => {
    mobileListMenu.style.display = 'block';
    closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
    mobileListMenu.style.display = 'none';
    closeBtn.style.display = 'none'

});

window.addEventListener('resize', Resize);
Resize();


