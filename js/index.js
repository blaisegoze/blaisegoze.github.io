////// Smooth Scroll for Clicking on Links //////

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


////// Nav Portfolio //////

const navPortfolio = () => {
    // Selecting all required elements
    const filterBtn = document.querySelector(".portfolio_nav_btns");
    const filterTile = document.querySelectorAll(".gallery_tile");

    window.onload = ()=>{ //once window loaded
        filterBtn.onclick = (selectedBtn)=>{ //when user clicked on filterBtn button
            if(selectedBtn.target.classList.contains("btn")){ //if user click element has .btn class
                filterBtn.querySelector(".active").classList.remove("active"); //remove the active class which is in the first element
                selectedBtn.target.classList.add("active"); //add that active class on user clicked button
                let filterName = selectedBtn.target.getAttribute("data-name"); //getting data-name value of the user clicked btn and storing it in a filterName variable
                filterTile.forEach((gallery_tile)=>{
                    let filterTiles = gallery_tile.getAttribute("data-name"); //get image data-name value
                    //if user clicked tile data-name value is equal to image data-name value
                    //or user clicked tile data-name value is equal to "all"
                    if((filterTiles == filterName) || filterName == "all"){
                        gallery_tile.classList.remove("hide");
                        gallery_tile.classList.add("show");
                    }else{
                        gallery_tile.classList.add("hide");
                        gallery_tile.classList.remove("show");
                    }
                });
            }
        }
    }
}


navScroll();
navPortfolio();