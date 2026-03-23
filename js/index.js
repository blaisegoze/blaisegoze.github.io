////// Nav Smooth Scroll //////

const navScroll = () => {
    // Define selector for selecting
    // anchor links with the hash
    let anchorSelector = 'a[href^="/#"]';

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


////// Nav Scroll Highlight //////

const navScrollHighlight = () => {
    const section = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav .nav-content a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        section.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(scrollY >= (sectionTop - sectionHeight/3)){
                current = section.getAttribute('id');
            }
        })

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.classList.contains(current)){
                a.classList.add('active');
            }
        })
    })
}


////// Showreel Modal //////

const showreelModal = () => {
    const modal = document.getElementById('showreel-modal');
    const openModal = document.getElementById('showreel-modal-open');
    const closeModal = document.getElementById('showreel-modal-close');
    const iframe = document.getElementById('showreel-modal-iframe');

    const embedUrl = `https://www.youtube.com/embed/OixT9ifYYZA?si=mFs3rGCA2x7olnQ2&autoplay=1&mute=0&loop=1&controls=1&color=black&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&playlist=OixT9ifYYZA`;

    openModal.addEventListener('click', () => {
        modal.showModal();
        iframe.src = embedUrl;
    });

    closeModal.addEventListener('click', () => {
        modal.close();
        iframe.src = '';
    });

    // Close when clicking outside the dialog content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
            iframe.src = '';
        }
    });
    
    // End video when closing by escape key
    modal.addEventListener('close', () => {
        iframe.src = '';
    });
}


////// Nav Portfolio //////

const navPortfolio = () => {
    // Selecting all required elements
    const filterBtn = document.querySelector(".portfolio-nav-btns");
    const filterTile = document.querySelectorAll(".gallery-tile");

    window.onload = ()=>{ //once window loaded
        filterBtn.onclick = (selectedBtn)=>{ //when user clicked on filterBtn button
            if(selectedBtn.target.classList.contains("btn")){ //if user click element has .btn class
                filterBtn.querySelector(".active").classList.remove("active"); //remove the active class which is in the first element
                selectedBtn.target.classList.add("active"); //add that active class on user clicked button
                let filterName = selectedBtn.target.getAttribute("data-name"); //getting data-name value of the user clicked btn and storing it in a filterName variable
                filterTile.forEach((galleryTile)=>{
                    let filterTiles = galleryTile.getAttribute("data-name"); //get image data-name value
                    //if user clicked tile data-name value is equal to image data-name value
                    //or user clicked tile data-name value is equal to "all"
                    if((filterTiles.includes(filterName)) || filterName == "all"){
                        galleryTile.classList.remove("hide");
                        galleryTile.classList.add("show");
                    }else{
                        galleryTile.classList.add("hide");
                        galleryTile.classList.remove("show");
                    }
                });
            }
        }
    }
}


////// Website Alert //////

const websiteAlert = () => {
    // Website under development alert
    var alerted = sessionStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
        alert("Website is under development! Some features may not be complete.");
        sessionStorage.setItem('alerted','yes');
    }
    //sessionStorage.clear();
}


////// Portfolio Page Order //////

onclick = ()=>{
    sessionStorage.setItem('mediaType', document.querySelector('.btn.active').dataset.name);
}


navScroll();
navScrollHighlight();
showreelModal();
navPortfolio();
//websiteAlert();