
//onload function
$(() => {
  $('#search').on('click', () => {
    $('.cocktail-imgs').empty()
    const userInput = $('input').val()
    $.ajax({
        url:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
    }).then(
        (data)=>{
            data.drinks.forEach((i) => {

              const $div = $('<div>').addClass('search-imgs')
              $div.appendTo($('.cocktail-imgs'))
              const $img = $('<img>').attr('src',i.strDrinkThumb)
              $img.appendTo($div)
              const $h3 = $('<h3>').text(i.strDrink)
              $h3.appendTo($div)
            })//close forEach
            /////////////////next function/////////////
            let highestIndex = $('.cocktail-imgs').children().length - 1
            console.log(highestIndex);
            let currentImgIndex = 0
            $('.next').on('click', () => {
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','none')
              if(currentImgIndex < highestIndex){
                currentImgIndex ++;
              }else{
                currentImgIndex = 0;
              }
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','block')
            })// close for click next function
            $('.previous').on('click', () => {
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','none')
              if(currentImgIndex > 0){
                currentImgIndex --;
              }else{
                currentImgIndex = highestIndex;
              }
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','block')
            })//close for click previous function
        },
        ()=>{
            console.log('bad request');
        }
    );//close for ajax

  })//close for click serch fun



})//close for onload
