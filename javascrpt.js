let taskDom = document.querySelector('#task')
let listDom = document.querySelector('#list')



function addItem(){

    let buttonDom = document.createElement('button') // button 
    buttonDom.className = "xBtn"
    let buttonInfo = document.createTextNode("X")
    buttonDom.appendChild(buttonInfo)

    let checkboxDom = document.createElement("input") // radio
    checkboxDom.setAttribute("type","checkbox")


    let spanDom =document.createElement('span')//CREATE SPAN
    spanDom.className = "checkBox"//SPAN CLAS NAME ADD
    spanDom.appendChild(checkboxDom) // INSIDE SPAN ADD CHCK BOX 



    

    let liDom = document.createElement('li') //li
    liDom.innerHTML = taskDom.value
    
    liDom.appendChild(spanDom)
    listDom.appendChild(liDom)
    liDom.appendChild(buttonDom)

}