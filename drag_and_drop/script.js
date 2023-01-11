const cards = document.querySelectorAll('.card') //creates a variable that have all .card classes in html
const dropzones = document.querySelectorAll('.dropzone')

//#region cards


cards.forEach((card) => {
                        //wait any of the function bellow (before comma) be executed in a card to execute a funcition bellow this event (called after commma)
    card.addEventListener('dragstart', drag_start) 
    card.addEventListener('drag',  drag)
    card.addEventListener('dragend', drag_end)

}) // create a function for every card #the arg of the function is (card)

function drag_start(){
    
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}

function drag(){
    //while drag
}

function drag_end(){
    
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

//#endregion

//#region place that we will drop the cards

dropzones.forEach( (dropzone) => {

    dropzone.addEventListener('dragenter', drag_enter)
    dropzone.addEventListener('dragover', drag_over)
    dropzone.addEventListener('dragleave', drag_leave)
    dropzone.addEventListener('drop', drop)

})

function drag_enter(){
    //console.log('DROPZONE: entered in the zone')
    
}

function drag_over(){
    //console.log('>CARD: you are inside the zone')
    this.classList.add('over') //this = dropzone

    const cardBeingDragged = document.querySelector('.is-dragging') // cath the card that is dragging by the class that we use when a specific card is selected

    this.appendChild(cardBeingDragged) 
}

function drag_leave(){
    //console.log('>CARD: you leaved the zone')
    this.classList.remove('over')
}

function drop(){
    
    //console.log('>CARD:you dropped')
}
//#endregion