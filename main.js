let counter=0;
const back= document.querySelector('#back');//back i seçti
const next= document.querySelector('#next');// nexti seçti
const slider= document.querySelector('#slider');
const max =document.querySelectorAll('.slide').length - 1;//max slide seçiyor

//slider'in sağa akışını sağlıyorum
next.addEventListener('click',() => {
    if(counter < max){
        counter++;
        slider.style.left = '-' + 800 * counter + 'px';
    }else{
        counter=0;
        slider.style.left = '-' + 800 * counter + 'px';
    }

});

back.addEventListener( 'click', () => {
    if (counter > 0) {
        counter--;
        slider.style.left = '-' + 800 * counter + 'px';

    }
})



