const sentence = [  "BUILDING LANDMARKS <br> SINCE 2010",
                    "",
                    "ONE OF THE MOST <br> RESPECTED AND TRUSTWORTHY <br> NAMES IN INDIAN REAL ESTATE.",
                    "",
                    "OVER 3,000 ACRES OF<br> LAND BANK, WITH TRANSFORMATIVE <br> DEVELOPMENT POTENTIAL",
                    "",
                    "OVER 20 MN. SQ. FT. OF QUALITY<br> RESIDENTIAL AND COMMERCIAL<br> ASSETS UNDER CONSTRUCTION",
                    "",
                    "PARTNERS IN MULTIPLE PREMIUM<br> HOUSING AND WORLD-CLASS<br>COMMERCIAL SPACES FOR THOUSANDS<br>OF BENGALURU RESIDENTS.",
                    "",
                    "LEADER'S IN THE NORTH BANGALORE <br>GROWTH STORY",]

const sentence2 = [ "A company whose future is built on the foundations of its past.",
                    "",
                    "Pioneers in land-banking to the City's earliest developers.",
                    "",
                    "One of the first private enterprises to enter plotted development.",
                    "",
                    "A company which has always embraced innovation and growth",
                    "",
                    "One of the first private enterprises to pioneer mixed-use development projects",
                    "",
                    "One of the first private developers to introduce an apartment culture in the City."
                    ]

let i = 0;

const sectionTwoEl = document.querySelector('.sectionTwo-container');

const paragraphElone = document.getElementById("onVideo-p1");
const paragraphEltwo = document.getElementById("onVideo-p2");

function fun(index) {

    paragraphElone.innerHTML = sentence[index];
    paragraphEltwo.textContent = sentence2[index];

    if(index === 5) {
        i = 0;
    }else {
        i++;
    }
}


setInterval(()=>{
    fun(i) 
},2000)



function scrollDown(){
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 750;
    if(window.screen.width <=420){
        document.documentElement.scrollTop = sectionTwoEl.offsetTop-80;
    }else{
        document.documentElement.scrollTop = sectionTwoEl.offsetTop-120;
    }
    
    // console.log(sectionTwoEl.offsetTop);
}

