


const mainContainer = document.querySelector('.mainContainer');




const container = document.querySelectorAll('#idI');
console.log(container)

let currentImg = 1;
window.addEventListener('load',()=>{

    setInterval(() => {        
        updateImg();        
    }, 2000);
})

function updateImg(){
    if(currentImg  > container.length-1){
        currentImg = 0;
        
    }
    currentImg++;
    mainContainer.style.transform = `translateY(-${(currentImg - 1) * 100}vh)`; 
    
}