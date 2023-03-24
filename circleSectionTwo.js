const imagesOne = ["https://centurycircle.loyalie.com/wp-content/uploads/2022/03/RE-IMG3.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/03/RE-IMG1.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/03/RE-IMG2.jpg"]


const imagesTwo = ["https://centurycircle.loyalie.com/wp-content/uploads/2021/11/Offers-3.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/04/HomeOffersImg2.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/04/HomeOffersImg.jpg"]

const imagesThree = ["https://centurycircle.loyalie.com/wp-content/uploads/2022/04/HomeEvent_Img.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/03/RE-IMG3-1.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2022/03/WEven-IMG1.jpg"]

const imagesFour = ["https://centurycircle.loyalie.com/wp-content/uploads/2021/11/Blogs-1.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2021/11/Blogs-2.jpg",
                "https://centurycircle.loyalie.com/wp-content/uploads/2021/11/Blogs-3.jpg"]

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

const imgE1 = document.getElementById('img1-sec2-circle');

const imgE2 = document.getElementById('img2-sec2-circle');

const imgE3 = document.getElementById('img3-sec2-circle');

const imgE4 = document.getElementById('img4-sec2-circle');

window.addEventListener('load',()=>{
    imgE1.src = imagesOne[index1];
    imgE2.src = imagesTwo[index2];
    imgE3.src = imagesThree[index3];
    imgE4.src = imagesFour[index4];
    index1++;
    index2++;
    index3++;
    index4++;

    setInterval(()=>{
    
        if(index1 > imagesOne.length-1 ){
            index1 = 0; 
        }
        if(index2 > imagesTwo.length-1){
            index2 = 0
        }
        if(index3 > imagesThree.length-1 ){
            index3 = 0; 
        }
        if(index4 > imagesFour.length-1 ){
            index4 = 0; 
        }
        imgE1.src = imagesOne[index1];
        imgE2.src = imagesTwo[index2];
        imgE3.src = imagesThree[index3];
        imgE4.src = imagesFour[index4];
        index1++
        index2++
        index3++
        index4++
    },3000)

})

