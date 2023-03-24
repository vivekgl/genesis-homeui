const imagesTwo = ["https://centurycircle.loyalie.com/wp-content/uploads/2021/11/Offers-3.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/04/HomeOffersImg2.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/04/HomeOffersImg.jpg"]


let index = 0;


const imgEl2 = document.getElementById('img2-sec2-circle');

window.addEventListener('load',()=>{
    imgEl2.src = imagesTwo[index];
    index++

    setInterval(()=>{
    
        if(index > imagesTwo.length-1){
            index = 0; 
        }
        imgEl2.src = imagesTwo[index];
        index++;
    },3000)

})