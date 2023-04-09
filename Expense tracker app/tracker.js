let name=document.getElementsByClassName("name");
let amount=document.getElementsByClassName("amount");
let description=document.getElementsByClassName("description");
let sub=document.getElementById("submit");
var arr=JSON.parse(localStorage.getItem("data"))||[];
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj={
        name:name.value,
        amount:email.value,
        description:description.value


    };
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    arr.forEach((e)=>{
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=e.name;
    let col2=document.createElement("td");
    col2.innerText=e.amount;
    let col3=document.createElement("td");
    col3.innerText=e.description;
    let col4=document.createElement("td");
    col4.innerText="delete";
    let col5=document.createElement("td");
    col5.innerText="edit";
    //col3.className="btn btn-danger";
    col4.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
       let ar=JSON.parse(localStorage.getItem("data"))||[];
       arr=ar;
        let a=ar.filter((ele)=>{
            return e.name!=ele.name;
        })
        localStorage.setItem("data",JSON.stringify(a));
    })
    row.append(col1,col2,col3,col4);
    col5.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
        let ar=JSON.parse(localStorage.getItem("data"))||[];
        arr=ar;
        name.value=e.name;
        amount.value=e.amount;
        description.value = e.description;
         let a=ar.filter((ele)=>{
             return e.name!=ele.name;
         })
         localStorage.setItem("data",JSON.stringify(a));
    })
    row.append(col1,col2,col3,col4,col5);
    tbody.append(row);
})
})

