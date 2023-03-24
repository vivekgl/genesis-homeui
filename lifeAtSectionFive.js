const deptEl = [
    {
        "heading": "Graphic Designer",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "Commercial Sales Manager",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "Resale Manager",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "HR Executive",
        "place":"Bangalore - Millers Rd Office"
    },
    {
        "heading": "Sr. Manager / AGM - Brand Experience & Marketing Activations",
        "place":"Bangalore"
    },
    {
        "heading": "Sr. Executive / Asst. Manager - Billing, MIS and Analytics",
        "place":"Bangalore"
    },
    {
        "heading": "Mgr. / Sr. Mgr. - Brand Marketing",
        "place":"Bangalore"
    },
    {
        "heading": "Softscape Manager",
        "place":"Bangalore"
    },
    {
        "heading": "Project Lead - CRM",
        "place":"Bangalore"
    },
    {
        "heading": "Sales Manager (Aspirational)",
        "place":"Bangalore"
    },
    {
        "heading": "Sales Manager (Luxury)",
        "place":"Bangalore"
    }
]

const marketingEl = [
    {
        "heading": "Graphic Designer",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "Sr. Manager / AGM - Brand Experience & Marketing Activations",
        "place":"Bangalore"
    },
    {
        "heading": "Mgr. / Sr. Mgr. - Brand Marketing",
        "place":"Bangalore"
    }
]

const salesEl = [
    {
        "heading": "Commercial Sales Manager",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "Resale Manager",
        "place":"Bangalore - Hebbal"
    },
    {
        "heading": "Sales Manager (Aspirational)",
        "place":"Bangalore"
    },
    {
        "heading": "Sales Manager (Luxury)",
        "place":"Bangalore"
    }
]

const humanResourcesEl = [
    {
        "heading": "HR Executive",
        "place":"Bangalore - Millers Rd Office"
    }
]

const misEl = [
    {
        "heading": "Sr. Executive / Asst. Manager - Billing, MIS and Analytics",
        "place":"Bangalore"
    }
]

const architectureEl = [
    {
        "heading": "Softscape Manager",
        "place":"Bangalore"
    }
]

const customerEl = [
    {
        "heading": "Project Lead - CRM",
        "place":"Bangalore"
    }
]

const containerEl = document.querySelector('.detailsContainer2-sec5-lifeAt');

const mainContainerEl = document.querySelector('.container2-sec5-lifeAt');

const p1El = document.querySelector('.p1-sec5-lifeAt');
const p2El = document.querySelector('.p2-sec5-lifeAt');
const p3El = document.querySelector('.p3-sec5-lifeAt');
const p4El = document.querySelector('.p4-sec5-lifeAt');
const p5El = document.querySelector('.p5-sec5-lifeAt');
const p6El = document.querySelector('.p6-sec5-lifeAt');
const p7El = document.querySelector('.p7-sec5-lifeAt');
const p8El = document.querySelector('.p8-sec5-lifeAt');
const p9El = document.querySelector('.p9-sec5-lifeAt');
const p10El = document.querySelector('.p10-sec5-lifeAt');
const p11El = document.querySelector('.p11-sec5-lifeAt');

window.addEventListener('load',()=>{
    allDepartments();
})

function constants(){
    p1El.style.fontWeight = '400'
    p2El.style.fontWeight = '400'
    p3El.style.fontWeight = '400'
    p4El.style.fontWeight = '400'
    p5El.style.fontWeight = '400'
    p6El.style.fontWeight = '400'
    p7El.style.fontWeight = '400'
    p8El.style.fontWeight = '400'
    p9El.style.fontWeight = '400'
    p10El.style.fontWeight = '400'
    p11El.style.fontWeight = '400'
}

function allDepartments(){
    let content ='';
    deptEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });

    containerEl.innerHTML = content;
    mainContainerEl.style.overflowY = 'scroll';
    mainContainerEl.style.overflowX = 'hidden';
    constants();
    p1El.style.fontWeight = '600'
}

function financeAccounts(){
    containerEl.innerHTML = `Sorry, we do not have opening for this<br>department at this moment.`;
    containerEl.style.fontSize = '25px';
    containerEl.style.fontWeight = '700';
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p2El.style.fontWeight = '600';
}

function legalCompanies(){
    containerEl.innerHTML = `Sorry, we do not have opening for this<br>department at this moment.`;
    containerEl.style.fontSize = '25px';
    containerEl.style.fontWeight = '700';
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p3El.style.fontWeight = '600';
}

function marketing(){
    let content ='';
    marketingEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p4El.style.fontWeight = '600';
}


function sales(){

    let content ='';
    salesEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p5El.style.fontWeight = '600';
}

function humanResources(){
    let content ='';
    humanResourcesEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p6El.style.fontWeight = '600';
}

function assetManagement(){
    containerEl.innerHTML = `Sorry, we do not have opening for this<br>department at this moment.`;
    containerEl.style.fontSize = '25px';
    containerEl.style.fontWeight = '700';
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p7El.style.fontWeight = '600';
}

function projects(){
    containerEl.innerHTML = `Sorry, we do not have opening for this<br>department at this moment.`;
    containerEl.style.fontSize = '25px';
    containerEl.style.fontWeight = '700';
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p8El.style.fontWeight = '600';
}

function mis(){
    let content ='';
    misEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p9El.style.fontWeight = '600';
}

function architecture(){
    let content ='';
    architectureEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p10El.style.fontWeight = '600';
}

function customer(){
    let content ='';
    customerEl.forEach(element => {
        content +=`<a href="#">
                    <div>
                        <h2>${element.heading}</h2>
                        <p>${element.place}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>`
    });
    containerEl.innerHTML = content;
    mainContainerEl.style.overflow = 'hidden';
    constants();
    p11El.style.fontWeight = '600';
}