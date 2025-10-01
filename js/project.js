////// Portfolio Page Order //////

const portfolioPageOrder = () => {

    //var filterCheck = document.getElementsByClassName('btn');

    // for(var i = 0; i < filterCheck.length; i++) {
    //     filterCheck[i].addEventListener('click', function(){

    //         sessionStorage.setItem('mediaType', document.querySelector('.btn.active').dataset.name);
    //         console.log(sessionStorage.getItem('mediaType'));
        
    //  }, false);
    // }

    const pagesAll = [{page: '/cush-tech', type: '3d video'}, {page: '/px200r', type: 'video'}, {page: '/infinity_air', type: '3d video'}, {page: '/pure', type: '3d video'}, {page: '/variance', type: '2d'}, {page: '/overcome', type: '3d video'}, {page: '/davids', type: '3d'}, {page: '/nepenthe', type: '2d'}, {page: '/fantasy_tavern', type: '3d'}, {page: '/mutant_opie', type: '2d'}, {page: '/watermelon', type: '3d video'}, {page: '/logos', type: '2d'}, {page: '/lollipop', type: '3d'}, {page: '/balloon', type: '3d video'}, {page: '/la_rosa', type: '3d'}, {page: '/build_a_pet', type: '2d'}, {page: '/free_yourself', type: '2d'}, {page: '/turndown_cookie', type: 'video'}, {page: '/weddings', type: 'video'}];

    if (sessionStorage.getItem('mediaType') == 'all' || sessionStorage.getItem('mediaType') == null){
        var filteredPagesArray = pagesAll;
    } else {
        var filteredPagesArray = pagesAll.filter(page => page.type.includes(sessionStorage.getItem('mediaType')));
    }

    sessionStorage.setItem('pageIndex', filteredPagesArray.map(i => i.page).findIndex(slug => window.location.href.includes(slug)));

    function setupNavLink(direction, el) {

        var nextIndex = parseInt(sessionStorage.getItem('pageIndex')) + (direction === 'r' ? 1 : -1);
        if (nextIndex > filteredPagesArray.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = filteredPagesArray.length - 1;
        }
        el.href = filteredPagesArray[nextIndex].page;
    }

    setupNavLink('r', document.querySelector('.arrow_right_link'));
    setupNavLink('l', document.querySelector('.arrow_left_link'));
}


portfolioPageOrder();