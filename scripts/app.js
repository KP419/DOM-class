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

let task = new Task(title,description,color,date,status,budget);
console.log(task)




}

function testRequest(){
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function(response){
            console.log(response);

        },
        error: function(error){
            console.log(error);
        }
    });
}


function init(){
    console.log("this is a task manager");
// load data

// hook events
$("#btnSave").click(saveTask);
}

window.onload = init;