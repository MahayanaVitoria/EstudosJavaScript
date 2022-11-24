//SOLUÇÃO 1
// function getFormvalue()
// {
//     var x=document.getElementById("form1");
//     for (var i=0;i<x.length;i++)
//     {
//     if (x.elements[i].value!='Submit')
//     {  
//         console.log(x.elements[i].value);
//         }  
//     }
// }
    
//SOLUÇÃO 2
const btn = document.querySelector("#form1")

btn.addEventListener("click", function(e){

    e.preventDefault(e)

    const fname = document.querySelector("#fname")
    const value1 = fname.value
    console.log(value1)

    const lname = document.querySelector("#lname")
    const value2 = lname.value
    console.log(value2)

})