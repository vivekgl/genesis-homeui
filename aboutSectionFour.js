// const yearS = ['1973','1975','1979','1983','1987'];

// const images = ["About1.jpg","About2.jpg","About3.jpg"];






// const imgEl = document.getElementById("img1-about-sec4");

const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

// let years = 0 ;

// prevEl.addEventListener("click", ()=>{
//     imgEl.src = images[years]
//     if(years <= 0){
//         years = 2;
//     }else{
//         years-- ;
//     }
// })

// nextEl.addEventListener("click", ()=>{
//     imgEl.src = images[years]
//     if(years >= 2){
//         years = 0;
//     }else{
//         years++ ;
//     }
// })



const imagesEl = document.querySelectorAll('#img1-about-sec4');
console.log(imagesEl)


const imageContainerEl = document.querySelector('.company-images');



const sentenceContainerEl = document.querySelector('.sentence-Container-About');

const sentencesEl = document.querySelectorAll('.h1');
console.log(sentencesEl)

const yearsEl = document.querySelectorAll('.y1');
// console.log(yearsEl)

const yearContainerEl = document.querySelector('.year-container');

let currentYear = 1;

prevEl.addEventListener('click', ()=>{
    currentYear--;
    updateYear();
    updateSentence();
    updateImage();
    // console.log("prevClicked")
})
nextEl.addEventListener('click', ()=>{
    currentYear++;
    updateYear();
    updateSentence();
    updateImage();
    // console.log("nextClicked");
})

function updateYear(){
   
        if(currentYear > yearsEl.length){
            currentYear = 1;
        }else if(currentYear < 1){
            currentYear = yearsEl.length;
            
        }
        if(window.screen.width >=1461){
            yearContainerEl.style.transform = `translateX(-${(currentYear - 1) * 256.5}px)`;
        }else if(window.screen.width <1461){
            yearContainerEl.style.transform = `translateX(-${(currentYear - 1) * 200}px)`;
        }
}

function updateSentence(){

    if(currentYear > sentencesEl.length){
        currentYear = 1;
    }else if(currentYear < 1){
        currentYear = sentencesEl.length;
    }
    
        
    if(window.screen.width >=1460){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 265}px)`
    }else if(window.screen.width <1460 && window.screen.width >=1230){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 220}px)`
    }
    else if(window.screen.width <1231 && window.screen.width>=1084){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 175}px)`
    }
    else if(window.screen.width <1084 && window.screen.width>=975){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 145}px)`
    }
    else if(window.screen.width <975 && window.screen.width>=785){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 180}px)`
    }else if(window.screen.width <785 && window.screen.width>=526){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 110}px)`
    }else if(window.screen.width <526 && window.screen.width>=390){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 145}px)`
    }else if(window.screen.width <390 ){
        sentenceContainerEl.style.transform = `translateY(-${(currentYear - 1) * 145}px)`
    }
}


function updateImage(){
    if(currentYear > imagesEl.length){
        currentYear = 1;
    }else if(currentYear < 1){
        currentYear = imagesEl.length;
    }

    if(window.screen.width >=1460){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 673}px)`
    }else if(window.screen.width >=1230 && window.screen.width <1460 ){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 580}px)`
    }else if(window.screen.width >=1080 && window.screen.width <1231){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 500}px)`
    }else if(window.screen.width < 1080 && window.screen.width >= 975){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 500}px)`
    }else if(window.screen.width < 975 && window.screen.width >= 785){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 450}px)`
    }else if(window.screen.width < 785){
        imageContainerEl.style.transform = `translateY(-${(currentYear -1) * 450}px)`
    }

    
}
