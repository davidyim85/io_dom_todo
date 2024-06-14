// console.log('hello world')


//target the button
const buttonEl = document.querySelector('button')

/*
//add a CLICK event listner to our button on the page
buttonEl.addEventListener('click', () => {
    // console.log('click')
})

//after clicking on the button, we are going to run the callback function. 
//that call back function, which is () => { console.log('click')},  is invoked
*/

/*
buttonEl.addEventListener('click', () => {
    //1. create an <li> element
    const liEl = document.createElement('li')

    //2. use the text from the input field 
    //  a. selecting the input element

    const inputField = document.querySelector('input')

    //3. make the text of li element equal that text from the input field
    //using the dot value (.value) property of the inputField to get that text (can used on input elements)
    liEl.textContent = inputField.value

    //then append that li to the ul element 
    //4. target the UL
    //5. then append

    //doing it in 1 line
    document.querySelector('ul').appendChild(liEl)

    // doing it in 2 lines
    // const ulEl = document.querySelector('ul')
    // ulEl.appendChild(liEl)

    //6.removing the text from the input field
    inputField.value = ''

})
    */


buttonEl.addEventListener('click', () => {
    const liEl = document.createElement('li')
    const inputField = document.querySelector('input')
    liEl.textContent = inputField.value

    // **************
    //before i append, i want to add an event lister for the li element
    //this li element will toggle the class name of done 

    liEl.addEventListener('click', () => {
        //to add a toggle on the class list, 
        //we use the .classList 
        //followed by the .toggle with our class name
        //the .toggle either adds or removes the class name
        liEl.classList.toggle('done')

    })
    // **************


    
    document.querySelector('ul').appendChild(liEl)
    inputField.value = ''
})


// **************
//target the delete button
const deleteEl = document.querySelector('#delete')

//add an event listner on the delete to clear out the todo's
deleteEl.addEventListener('click', () => {
    // remove any li items in ul
    //innerHTML is all of the html inside the targeted tag
    document.querySelector('ul').innerHTML = ''
})