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

        if(window.screen.width <= 1280){
            logoEl1.style.fontSize = '50px'
            logoEl1.style.lineHeight = '40px'
        }
        if(window.screen.width<=1024){
            navContainerEl.style.height = '100px';
            logoEl1.style.fontSize = '38px'
            logoEl1.style.lineHeight = '32px'
            logoEl2.style.fontSize = '11px'
            logoEl2.style.lineHeight = '13px'
        }

        if(window.screen.width<=750){
            navContainerEl.style.height = '90px';
        }
        

        
        if(window.screen.width <= 420){
            navContainerEl.style.height = '70px';
            logoEl1.style.fontSize = '30px'
            logoEl1.style.lineHeight = '26px'
            logoEl2.style.fontSize = '10px'
            logoEl2.style.lineHeight = '8px'
        }

    } else {
        navContainerEl.style.height = '100px';
        navContainerEl.style.backgroundColor = 'brown';
        navContainerEl.style.transition = 'height 1s';
        logoEl1.style.fontSize = '50px';
        logoEl1.style.lineHeight = '35px'
        logoEl1.style.transition = 'font-size 0.5s';
        logoEl2.style.fontSize = '11px';
        logoEl2.style.transition = 'font-size 0.5s';
        buttonEl.style.color = 'brown';
        buttonEl.style.backgroundColor = 'white';

        

        if(window.screen.width<=1024){
            navContainerEl.style.height = '80px';
            logoEl1.style.fontSize = '36px'
            logoEl1.style.lineHeight = '32px'
            logoEl2.style.fontSize = '10px'
            logoEl2.style.lineHeight = '11px'
        }
        
        if(window.screen.width <=420){
            navContainerEl.style.height = '65px';
            logoEl1.style.fontSize = '25px';
            logoEl1.style.lineHeight = '20px'
            logoEl1.style.transition = 'font-size 0.5s';
            logoEl2.style.fontSize = '9px';
            logoEl2.style.lineHeight = '7px'
            logoEl2.style.transition = 'font-size 0.5s';
        }
    }
})


// < - - - - - - - - - - - - - - - >

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}








function stopWinScroll(event) {
    event.preventDefault();
    event.stopPropagation();
}