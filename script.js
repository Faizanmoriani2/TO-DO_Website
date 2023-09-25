const inputBox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')
const btnClear = document.getElementById('clear')

function addTask(){
    if(inputBox.value === ''){
        alert('you must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00d7' // code for cross symbol
        li.appendChild(span);

    }
    inputBox.value = ""
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

btnClear.addEventListener("click", function(e) {
    if(e.target.tagName = "BUTTON"){
        console.log('Local storage need to be clear')
        localStorage.clear();
        alert('Local Storage has been cleared!')
    }
})

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem('data');
}

function clear(){
    localStorage.clear('data');
}

showTask();