(function(){
    const header = document.querySelector('.header');
    const header_wrapper = document.querySelector('.header__wrapper')
    

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
                header.classList.add('header_active');
                header_wrapper.style.paddingTop = '20px';
                
                
        }
        if (window.pageYOffset < 50) {
            header.classList.remove('header_active')
            header_wrapper.style.paddingTop = '56px';
        }
    }
}());

(function(){
    const menu = document.querySelector('.header__nav');
    const burgerItem = document.querySelector('.burger');
    const closeItem = document.querySelector('.header__nav-close');
    const menuItems = menu.querySelectorAll('.header__list .header__item');
    if (window.innerWidth < 768){
        console.log(window.innerWidth);
    }
    menuItems.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            menu.classList.remove('header__nav_active')
        });
    })
    
    
    burgerItem.addEventListener('click', (e)=>{
        menu.classList.add('header__nav_active');  
    })
    closeItem.addEventListener('click', (e)=>{
        menu.classList.remove('header__nav_active');  
    })

}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight + 5;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());