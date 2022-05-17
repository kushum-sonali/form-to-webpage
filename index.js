var deletebtn=document.getElementById("dltebtn");
document.getElementById("form").addEventListener("submit",function formdata(e){
    e.preventDefault();
var name=document.getElementById('form-name').value;
var email=document.getElementById('form-email').value;
var number=document.getElementById('form-number').value;
var gender = document.querySelector('input[name="gender"]:checked').id
console.log(gender)
var DOB=document.getElementById('form-DOB').value;
console.log(DOB);
//var Gender=document.getElementById('form-gender').value;
// var hobby=document.getElementById('form-hobby').value;  
if(name==''||email==''||number=='')
{
    alert("fill all required details")
}
else{
document.getElementById("name").innerHTML=name;
document.getElementById("email").innerHTML=email; 
document.getElementById("number").innerHTML=number;
document.getElementById("gender").innerHTML=gender;
document.getElementById("DOB").innerHTML=DOB;
// document.getElementById("hobby").innerHTML=hobby;

document.getElementById('form-name').value='';
document.getElementById('form-email').value='';
document.getElementById('form-number').value='';
document.getElementById('form-gender').value='';
document.getElementById('form-DOB').value='';
// document.getElementById('form-hobby').value='';
deletebtn.style.display="block";
}
});
deletebtn.addEventListener("click",function Delete(){
document.getElementById("name").innerHTML=''
document.getElementById("email").innerHTML=''
document.getElementById("number").innerHTML=''
document.getElementById("gender").innerHTML=''
document.getElementById("DOB").innerHTML=''
//Document.getElementById("hobby").innerHTML=''
deletebtn.style.display="block";
});
