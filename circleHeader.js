const navBarEl = document.getElementById('mySidenav');

const barContainerEl = document.querySelector('.bar-container');

function openNav(){
    barContainerEl.style.display = 'flex'; 
    navBarEl.style.width = '100%';
}

function closeNav(){
    barContainerEl.style.display = 'none'; 
    navBarEl.style.width = '0';   
}