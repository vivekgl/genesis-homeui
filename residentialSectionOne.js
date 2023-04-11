


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
    if(window.screen.width >500){
        mainContainer.style.transform = `translateY(-${(currentImg - 1) * 100}vh)`; 
    }else if(window.screen.width <=500 && window.screen.width > 400 ){
        mainContainer.style.transform = `translateY(-${(currentImg - 1) * 80}vh)`; 
    }else if(window.screen.width <=400){
        mainContainer.style.transform = `translateY(-${(currentImg - 1) * 70}vh)`; 
    }
}