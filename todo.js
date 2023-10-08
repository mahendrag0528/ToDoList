const x=document.getElementById("add-item");
const items=document.getElementById("list");

function addTask(){
    if(x.value===''){
        alert("enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=x.value;
        items.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    }
    x.value="";
    saveData();
}

items.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
e.target.classList.toggle("checked");
saveData();
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();
    }
},false);

function saveData(){
    //if(!(localStorage.getItem("data").value===undefined))
    localStorage.setItem("data",items.innerHTML);
}


function showTask(){
    items.innerHTML=localStorage.getItem("data");
}
showTask();