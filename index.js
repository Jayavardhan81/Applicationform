document.querySelector("#form").addEventListener("submit",jobSubmit);   
let jobArr;
if (localStorage.getItem("jobList")!==null){
    jobArr=JSON.parse(localStorage.getItem("jobList"));
}
else{
    jobArr=[];
}
function jobSubmit(){
    event.preventDefault();
let jobObj={
PersonName:document.querySelector("#name").value,
PersonEmail:form.email.value,
PersonRole:form.role.value,
PersonSalary:form.salary.value,
PersonResume:form.resume.value,
};
jobArr.push(jobObj);
localStorage.setItem("jobList",JSON.stringify(jobArr));
window.location.href="applicationform.html";
}