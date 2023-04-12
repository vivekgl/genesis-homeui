// const imgDetailsContainerEl = document.querySelector('.absoluteContainer-commercial');

// function updateImgDetails1(){
//     imgDetailsContainerEl.style.transform = 'translateY(0)'
// }

// function updateImgDetails2(){
//     imgDetailsContainerEl.style.transform = 'translateY(-100vh)'
// }

// function updateImgDetails3(){
//     imgDetailsContainerEl.style.transform = 'translateY(-200vh)'
// }

const workStrategies = [
    { 
        content:`<p><b>Co-working Sector:</b> It accounted for 19% of transactions in 2021 - a significant jump over the 12% share in 2020. In Q4 2021, co-working operators took up 42% of space</p>
        <p><b>Sustained flexibility</b> in lease terms and tenures to be critical.</p>
        <p><b>Physical offices to stay:</b> portfolio optimization via the right mix of traditional and flexible spaces - Evolution of a 'traditional' to 'hybrid' workforce via work-from-any where.</p>
        <p><b>Workplace strategies</b> - Repositioning spaces, amenities and services through 'phygital' experiences; tech-enhanced spaces to serve as a differentiator of quality.</p>`,
        images:`https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`
    },
    {
        content:`<p>Post COVID-19, India to remain a preferred global outsourcing Destination on the back of low-cost knowledge talent;expected Systematic growth of global capability centres, start-ups and gig Workers.</p>
        <p>The Information Technology Sector, which is the main driver for the Bengaluru office market taking up 39% transactions share throughout The year, continues to enjoy robust business momentum.</p>
        <p>Preparing for manpower and infrastructure capabilities to secure global IT projects,the Indian IT sector made record hiring amid the pandemic, And this will serve as dry powder for office demand when the Omicron Uncertainty subsides.</p>`,
        images:`About3.jpg`
    },
    {
        content:`<p>ORR continues to be the dominant market with 39% transaction share Followed by PBD North, PBD East (Whitefield) and SBD at 17%, 15% and15% respectively during H2 2021.</p>
        <p>Peripheral markets like Whitefield, Hosur Road & Electronic City are Witnessing renewed interest owing to metro lines nearing completion,Improved support infrastructure & lower top line rentals.</p>
        <p>With increased deal activity in Hebbal, Yelahanka and Thanisandra Road,The PBD North business district has seen its share increasing meaningfully Compared to past periods.</p>`,
        images:`https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`
    }
    
];

function updateImgDetails1(event, detailContId, imgid){
    const detailCont = document.getElementById(detailContId);
    const imageTag = document.getElementById(imgid);
    const workStratBtn = document.getElementById('workStratBtn');
    const sectorBtn = document.getElementById('sectorBtn');
    const microMarketBtn = document.getElementById('microMarketBtn');


    if(event?.target?.id === 'workStratBtn') {
        console.log("11111111111111")
        workStratBtn.style.backgroundColor = 'brown';
        workStratBtn.style.color = 'white';

        sectorBtn.style.backgroundColor = 'white';
        sectorBtn.style.color = 'brown';

        microMarketBtn.style.backgroundColor = 'white';
        microMarketBtn.style.color = 'brown';
        detailCont.innerHTML = workStrategies[0]?.content;
        imageTag.src = workStrategies[0]?.images
    } else if(event?.target?.id === 'sectorBtn') {
        console.log("22222222222222")

        workStratBtn.style.backgroundColor = 'white';
        workStratBtn.style.color = 'brown';

        sectorBtn.style.backgroundColor = 'brown';
        sectorBtn.style.color = 'white';

        microMarketBtn.style.backgroundColor = 'white';
        microMarketBtn.style.color = 'brown';
        detailCont.innerHTML = workStrategies[1]?.content;
        imageTag.src = workStrategies[1]?.images
    } else if(event?.target?.id === 'microMarketBtn') {
        console.log("33333333333333")

        workStratBtn.style.backgroundColor = 'white';
        workStratBtn.style.color = 'brown';

        sectorBtn.style.backgroundColor = 'white';
        sectorBtn.style.color = 'brown';

        microMarketBtn.style.backgroundColor = 'brown';
        microMarketBtn.style.color = 'white';
        detailCont.innerHTML = workStrategies[2]?.content;
        imageTag.src = workStrategies[2]?.images
    }
    
}