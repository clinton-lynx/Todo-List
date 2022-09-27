// DECLARATIONS AND VARIABLES

const deleteBtn = document.querySelector('.delete-container')
// const taskEl  = document.querySelector('.task-container')
var taskId  = 0
const editBtn = document.getElementsByClassName('edit-btn')
const taskDetails = document.querySelector('.Task-details')
const InputValue = document.getElementById('Task-input')
const AddBtn = document.querySelector('.add-task-container')
const taskWrapper = document.querySelector('.parent-main-container')
var taskEl = document.createElement('li')
var taskElOne = document.createElement('div')
var taskElThree = document.createElement('div')
var taskElSix = document.createElement('div')
var taskElSeven = document.createElement('div')
var taskElEight = document.createElement('h2')
var taskElNine = document.createElement('div')
var taskElTen = document.createElement('div')
var taskElElven = document.createElement('i')
var taskElTwelve = document.createElement('button')




AddBtn.onclick = (e) =>{
    e.preventDefault()
    if(InputValue.value.trim() == ""){
        alert("Please input a task")
    }else{

        const task = InputValue.value

        var taskEl = document.createElement('li')
        var taskElOne = document.createElement('div')
        var taskElThree = document.createElement('div')
        var taskElSix = document.createElement('div')
        var taskElSeven = document.createElement('div')
        var taskElEight = document.createElement('h2')
        var taskElNine = document.createElement('div')
        var taskElTen = document.createElement('div')
        var taskElElven = document.createElement('i')
        var taskElTwelve = document.createElement('button')
        


        taskElOne.className = "task-one-container"
        taskEl.className = 'task-container';
        taskElThree.className = 'second-task-container'
        taskElSix.className = 'individual-task'
        taskElSeven.className = 'edit-delete-container'
        taskElEight.className = 'Task-details'
        taskElNine.className = 'delete-container'
        taskElTen.className = 'edit-container'
        taskElElven.className = 'fa fa-trash-o'
        taskElTwelve.className ='edit-btn'


        taskWrapper.append(taskEl)
        taskEl.appendChild(taskElOne)
        taskElOne.appendChild(taskElThree)
        taskElThree.appendChild(taskElSix)
        taskElThree.appendChild(taskElSeven)
        taskElSix.appendChild(taskElEight)
        taskElSeven.appendChild(taskElNine)
        taskElSeven.appendChild(taskElTen)
        taskElNine.appendChild(taskElElven)
        taskElTen.appendChild(taskElTwelve)
        taskElTwelve.innerHTML = 'edit'
        taskElEight.innerHTML = task

        InputValue.value = "";
        
        //localstorage
        localStorage.setItem('task',taskWrapper.innerHTML) 
        
    }

}

taskWrapper.innerHTML = localStorage.getItem('task')



taskWrapper.addEventListener('click', function (e) {
    if (e.target.className === 'delete-container') {
        console.log(e.target.parentElement.parentElement.parentElement.remove());  
        localStorage.clear();
        localStorage.setItem('task',taskWrapper.innerHTML) 
      taskId = 0
    }else if(e.target.className === 'edit-btn'){
        InputValue.value =  e.target.parentElement.parentElement.previousElementSibling.firstChild.innerHTML
        e.target.parentElement.parentElement.parentElement.remove()
        InputValue.focus()
    }
} )


// STORING TASKS WITH LOCAL STORAGE




