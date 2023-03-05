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


////// Nav Portfolio //////

function filterAll() {
    var filt2d = document.querySelectorAll(".filter_2d");
    var filt3d = document.querySelectorAll(".filter_3d");
    var filtVideo = document.querySelectorAll(".filter_video");
        for(var i=0; i<filt2d.length; i++)
        {
            filt2d[i].style.display = "block";
        }
        for(var i=0; i<filt3d.length; i++)
        {
            filt3d[i].style.display = "block";
        }
        for(var i=0; i<filtVideo.length; i++)
        {
            filtVideo[i].style.display = "block";
        }
}

function filter2d() {
    var filt3d = document.querySelectorAll(".filter_3d");
    var filt2d = document.querySelectorAll(".filter_2d");
    var filtVideo = document.querySelectorAll(".filter_video");
        for(var i=0; i<filt3d.length; i++)
        {
            filt3d[i].style.display = "none";
        }
        for(var i=0; i<filt2d.length; i++)
        {
            filt2d[i].style.display = "block";
        }
        for(var i=0; i<filtVideo.length; i++)
        {
            filtVideo[i].style.display = "none";
        }
}

function filter3d() {
    var filt2d = document.querySelectorAll(".filter_2d");
    var filt3d = document.querySelectorAll(".filter_3d");
    var filtVideo = document.querySelectorAll(".filter_video");
        for(var i=0; i<filt2d.length; i++)
        {
            filt2d[i].style.display = "none";
        }
        for(var i=0; i<filt3d.length; i++)
        {
            filt3d[i].style.display = "block";
        }
        for(var i=0; i<filtVideo.length; i++)
        {
            filtVideo[i].style.display = "block";
        }
}

function filterVideo() {
    var filt2d = document.querySelectorAll(".filter_2d");
    var filt3d = document.querySelectorAll(".filter_3d");
    var filtVideo = document.querySelectorAll(".filter_video");
        for(var i=0; i<filt2d.length; i++)
        {
            filt2d[i].style.display = "none";
        }
        for(var i=0; i<filt3d.length; i++)
        {
            filt3d[i].style.display = "none";
        }
        for(var i=0; i<filtVideo.length; i++)
        {
            filtVideo[i].style.display = "block";
        }
}


//    var x = document.getElementById("2d");
//    if (x.style.display === "none") {
//      x.style.display = "block";
//    } else {
//      x.style.display = "none";
//    }


navSlide();
navScroll();