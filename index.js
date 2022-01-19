document.querySelector('form').addEventListener('submit',addMovie);


let message = document.querySelector('#message')
function addMovie (event){
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    //delete button 

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = ('TRASH')
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)


    let list = document.querySelector('ul');
    list.appendChild(movie);

    
}
//DELETE FUNCTION 
function deleteMovie (event){
    event.target.parentNode.remove();
    message.textContent = 'its gone and never coming back nope to late to change your mind now buddy'
}
//line through the movie list item being referenced from CSS
function crossOffMovie (e){
    e.target.classList.toggle('checked');

    if(e.target.classList.contains('checked')==true){
        message.textContent='Ive seen this one before !'
    }else {
        message.textContent = 'Move added back'
    }
}
// function revealMessage (){
//     setTimeout(){

//     })
// }



