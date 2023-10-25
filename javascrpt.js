let taskDom = document.querySelector('#task')
let listDom = document.querySelector('#list')




    function addItem(){

        if(taskDom.value){


    let liDom = document.createElement('li') //li
    liDom.classList.add("list-group-item", "text-center")
    liDom.innerHTML = taskDom.value
    
    taskDom.value = ""    

    let buttonDom = document.createElement('button') // button 
    buttonDom.classList.add("list-group-item")


    buttonDom.className = "btn btn-danger  btn-sm float-end"
    

    let buttonInfo = document.createTextNode("X")
    buttonDom.appendChild(buttonInfo)
    buttonDom.onclick = function close (){

        listDom.removeChild(liDom)
        
        }

    let checkboxDom = document.createElement("input") // radio
    checkboxDom.className ="form-check"
    checkboxDom.setAttribute("type","checkbox")
    checkboxDom.onclick = function finishAct(){


        if (checkboxDom.checked == true){
        
        liDom.style.textDecoration = "line-through"
    }else{
        

        liDom.style.textDecoration ="none"
    }

    }


    let spanDom =document.createElement('span')//CREATE SPAN
    spanDom.className = "checkBox","btn btn-danger"//SPAN CLAS NAME ADD
    spanDom.appendChild(checkboxDom) // INSIDE SPAN ADD CHCK BOX 




    


    
    liDom.appendChild(spanDom)
    listDom.appendChild(liDom)
    liDom.appendChild(buttonDom)



        }else{

            console.log("please enter")
            let alertDom = document.querySelector('#alert')
            alertDom.className = "alert alert-danger"
            alertDom.innerHTML = `${"Your task not have to be empty!!"}`

            

        }
        
    
    
        
       






}

