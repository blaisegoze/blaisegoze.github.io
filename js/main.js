////// Nav Bar //////

const navSlide = () => {
    const burger = document.querySelector('.menu_burger');
    const nav = document.querySelector('.nav_links');
    // Need to fix "navExtend" when not in mobile view
    const navExtend = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav_links li');

    
    burger.addEventListener('click', () => {
        // Toggle Navigation Bar
        nav.classList.toggle('nav_links_active');
        navExtend.classList.toggle('nav_active');

        // Animation Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
            
        });

        // Animation Burger
        burger.classList.toggle('toggle');

    });

    // window.addEventListener('resize',() => {
    //     if(window.innerWidth > 768)
    //     {
    //         nav.classList.remove('nav_links_active');
    //         navExtend.classList.remove('nav_active');

    //         burger.classList.remove('toggle');
    //     } else {
            
    //     }
    // });

}


////// Smooth Scroll for Clicking on Links //////

const navScroll = () => {
    // Define selector for selecting
    // anchor links with the hash
    let anchorSelector = 'a[href^="#"]';

    // Collect all such anchor links
    let anchorList =
        document.querySelectorAll(anchorSelector);

    // Iterate through each of the links
    anchorList.forEach(link => {
        link.onclick = function (e) {

            // Prevent scrolling if the
            // hash value is blank
            e.preventDefault();

            // Get the destination to scroll to
            // using the hash property
            let destination =
                document.querySelector(this.hash);

            // Scroll to the destination using
            // scrollIntoView method
            destination.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


navSlide();
navScroll();