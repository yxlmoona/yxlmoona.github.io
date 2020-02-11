
//onload function
$(() => {
  $('#random').on('click', (event) => {
    $('h6').empty()
    $('.cocktail-imgs').empty()
    $('.carousel-button').css('display','block')
    $('h2').css('display','none')


    $.ajax({
      url:'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    }).then(
      (data) => {
        const EventHandlers = {

          showInstruction: () => {

            $('h2').css('display','block')
            const $h1 = $('<h6>').text(data.drinks[0].strIngredient1)
            const $h2 = $('<h6>').text(data.drinks[0].strIngredient2)
            const $h3 = $('<h6>').text(data.drinks[0].strIngredient3)
            const $h4 = $('<h6>').text(data.drinks[0].strIngredient4)
            const $h5 = $('<h6>').text(data.drinks[0].strIngredient5)
            const $h6 = $('<h6>').text(data.drinks[0].strInstructions)
            $('.main-ingredient').append($h1,$h2,$h3,$h4,$h5)
            $('.instruction').append($h6)
            // console.log(data.drinks[0].strInstructions)
          }
        }
        console.log(data);
        const $div = $('<div>').addClass('search-imgs')
        $div.appendTo($('.cocktail-imgs'))
        const $img = $('<img>').attr('src',data.drinks[0].strDrinkThumb)
        $img.appendTo($div)
        const $h3 = $('<h3>').text(data.drinks[0].strDrink)
        $h3.appendTo($div)

        $('.cocktail-imgs img').on('click', EventHandlers.showInstruction)
      },
      () => {
        console.log('bad input');
      }
    )
  })//close click random
  $('#search').on('click', () => {
    $('h2').css('display','none')
    $('.carousel-button').css('display','block')
    $('.cocktail-imgs').empty()
    $('h6').empty()
    $('.next').off()
    let currentImgIndex = 0
    const userInput = $('input').val()
    $.ajax({
        url:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
    }).then(
        (data)=>{

          const EventHandlers = {

            onClickFlipNext: () => {
              // console.log(currentImgIndex);
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','none')
              if(currentImgIndex < highestIndex){
                currentImgIndex ++;
              }else{
                currentImgIndex = 0;
              }
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','block')
            },
            onClickFlipPrevious: () => {
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','none')
              if(currentImgIndex > 0){
                currentImgIndex --;
              }else{
                currentImgIndex = highestIndex;
              }
              $('.cocktail-imgs').children().eq(currentImgIndex).css('display','block')
            },

          }//close for EventHandlers
            data.drinks.forEach((i) => {
                const showInstruction = () => {
                console.log(i);
                $('h2').css('display','block')
                $('h6').empty()
                const $h1 = $('<h6>').text(i.strIngredient1)
                const $h2 = $('<h6>').text(i.strIngredient2)
                const $h3 = $('<h6>').text(i.strIngredient3)
                const $h4 = $('<h6>').text(i.strIngredient4)
                const $h5 = $('<h6>').text(i.strIngredient5)
                const $h6 = $('<h6>').text(i.strInstructions)
                $('.main-ingredient').append($h1,$h2,$h3,$h4,$h5)
                $('.instruction').append($h6)
              }
              const $div = $('<div>').addClass('search-imgs')
              $div.appendTo($('.cocktail-imgs'))
              const $img = $('<img>').attr('src',i.strDrinkThumb)
              $img.appendTo($div)
              const $h3 = $('<h3>').text(i.strDrink)
              $h3.appendTo($div)
              $img.on('click', showInstruction)

            })//close forEach
            let highestIndex = $('.cocktail-imgs').children().length - 1
            console.log(highestIndex);

            ///////////////////////////////////////////////////
            $('.next').on('click', EventHandlers.onClickFlipNext)
            $('.previous').on('click', EventHandlers.onClickFlipPrevious )
        },
        ()=>{
            console.log('bad request');
        }
    );//close for ajax

  })//close for click serch fun

})//close for onload
