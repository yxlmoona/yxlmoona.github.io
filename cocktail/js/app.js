
//onload function
$(() => {
  $('#search').on('click', () => {
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
            // console.log(data);

        },
        ()=>{
            console.log('bad request');
        }
    );//close for ajax
  })//close for click serch fun


})//close for onload
