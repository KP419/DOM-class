function saveTask(){
    console.log("Saving....");

//get vaules
const title = $("#inputTitle").val();
const description = $("#inputDescription").val();
const color = $("#inputColor").val();
const budget = $("#inputBudget").val();
const date = $("#inputDate").val();
const status = $("#inputStatus").val();

console.log(title,description,date,budget,color,status);

let x = new Task(title,description,color,date,status,budget);
console.log(x)




}
function init(){
    console.log("this is a task manager");
// load data

// hook events
$("#btnSave").click(saveTask);
}

window.onload = init;