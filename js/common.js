var smallpics = document.querySelectorAll('#smallpic-container div');
var bigpics = document.querySelectorAll('#bigpic-container img');

for (let i = 0; i < smallpics.length; i++) {
    imgExchange(i);
}


function imgExchange(ii){
    //console.log( smallpics[ii] );
    smallpics[ii].addEventListener('click', function(){

        if(!this.classList.contains('active')){
            for (let i = 0; i < smallpics.length; i++) {
                smallpics[i].classList.remove('active');
                bigpics[i].classList.remove('active');
            }

            this.classList.add('active');
            bigpics[ii].classList.add('active');
        }

    });
}