let theYear = document.querySelector("#year");

let theMonth = document.querySelector("#month");

let theDate = document.querySelector("#date");

let theTable = document.querySelector(".tb");

let infoTxt=document.querySelector(".info .txt span");


theDate.setAttribute("disabled", "disabled");

theYear.addEventListener("change", addDate);
theMonth.addEventListener("change", addDate);

let docFrag = document.createDocumentFragment();
for (let i = 2010; i <= 2025; i++) {
    let opt = document.createElement("option");

    opt.setAttribute("value", i);

    let opTxt = document.createTextNode(i);

    opt.appendChild(opTxt);

    docFrag.appendChild(opt);
}
theYear.appendChild(docFrag);

docFrag = document.createDocumentFragment();
for (let i = 1; i <= 12; i++) {
    let opt = document.createElement("option");

    opt.setAttribute("value", i);

    let opTxt = document.createTextNode(i);

    opt.appendChild(opTxt);

    docFrag.appendChild(opt);
}
theMonth.appendChild(docFrag);

let yy, mm;
function addDate() {
    yy = theYear.value;
    mm = theMonth.value;
    let date = new Date(yy, mm, 0).getDate();
    //console.log(new Date(yy, mm, 0));
    if (theYear.value != "請選擇" && theMonth.value != "請選擇") {
        theDate.removeAttribute("disabled", "disabled");
        
    }
    else {
        theDate.setAttribute("disabled", "disabled");
        calendarCount=document.querySelectorAll(".tb td");
        if(calendarCount.length>0){
            for(let item of calendarCount){
                item.remove();
            }
        }
        return;
    }

    let dateOpt= document.querySelectorAll("#date option")
    
    if (dateOpt.length > 0) {
        for(let item of dateOpt){
            item.remove();
        }
    }

    docFrag = document.createDocumentFragment();
    for (let i = 1; i <= date; i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);

        let opTxt = document.createTextNode(i);

        opt.appendChild(opTxt);
        docFrag.appendChild(opt);
    }
    theDate.appendChild(docFrag);
    addCalendar();
}

let calendarCount;

function addCalendar() {
    let day = (new Date(yy, (mm - 1), 1).getDay());

    calendarCount=document.querySelectorAll(".tb td");
    if(calendarCount.length>0){
        for(let item of calendarCount){
            item.remove();
        }
    }
    //console.log(day);
    let date = new Date(yy, mm, 0).getDate();
    let count = 0;
    let str = `<tr>`;
    for (let i = 1; i <= day; i++) {
        str += `<td>&nbsp</td>`;
        count++;
    }

    for(let i=1;i<=date;i++){
        if(count%7==0){
            str+=`</tr>`
            str+=`</tr>`
        }
        count++;
        str+=`<td class="tdReal">${i}</td>`
    }

    theTable.innerHTML+=str; 

    calendarCount=document.querySelectorAll(".tb .tdReal");
    for(let td of calendarCount){
        td.addEventListener("mouseenter",function(){
            this.style="background-color:rgba(240,128,128,0.7)";
        })
        td.addEventListener("mouseleave",function(){
            this.style="background-color:rgba(119,136,153,0.7)";
        })
        td.addEventListener("click",function(){
            console.log(this);
            infoTxt.innerHTML=`您選擇的日期為${theYear.value}年${theMonth.value}月${this.innerText}日`
        })
    }
}
