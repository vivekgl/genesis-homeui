const navContainerEl = document.querySelector('.nav-container');
const logoEl1 = document.querySelector('.logo1');
const html = document.querySelector('html');
const logoEl2 = document.querySelector('.logo2');
const buttonEl = document.getElementById('enquire');

// navContainerEl.onwheel =
window.addEventListener('scroll', () => {
    if (html.scrollTop >= 0 && html.scrollTop < 20) {
        navContainerEl.style.height = '120px';
        navContainerEl.style.backgroundColor = '#9f163580';
        logoEl1.style.fontSize = '60px'
        logoEl1.style.lineHeight = '45px'
        logoEl2.style.fontSize = '13px'
        buttonEl.style.color = 'white';
        buttonEl.style.backgroundColor = 'brown';
        // if(screen.width<750){
        //     logoEl1.style.fontSize = '45px'
        // }else{
        //     logoEl1.style.fontSize = '60px';
        // }

    } else {
        navContainerEl.style.height = '100px';
        navContainerEl.style.backgroundColor = 'brown';
        navContainerEl.style.transition = 'height 1s';
        logoEl1.style.fontSize = '50px';
        logoEl1.style.lineHeight = '35px'
        logoEl1.style.transition = 'font-size 1s';
        logoEl2.style.fontSize = '11px';
        logoEl2.style.transition = 'font-size 1s';
        buttonEl.style.color = 'brown';
        buttonEl.style.backgroundColor = 'white';
        // if(screen.width<750){
        //     logoEl1.style.fontSize = '35px'
        // }else{
        //     logoEl1.style.fontSize = '50px';
        // }
    }

    // console.log(html.scrollTop)
})


// < - - - - - - - - - - - - - - - >

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}








function stopWinScroll(event) {
    event.preventDefault();
    event.stopPropagation();
}