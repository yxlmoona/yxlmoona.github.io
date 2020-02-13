// console.log($);
const data = []
data[0] = {
  text:'The original cocktail combined which ingredients?',
  answers: [
    {correct: true, text: "spirits,sugar,water and bitters"},
    {correct: false, text: "spirits,sugar,water and lime juice"},
    {correct: false, text: "spirits,tonic,bitters and lime zest"}
  ]
}
data[1] = {
  text:'What turns a plain martini into a dirty martini?',
  answers: [
    {correct: false, text: "more gin"},
    {correct: true, text: "olives"},
    {correct: false, text: "lime"}
  ]
}
data[2] = {
  text:'A gimlet requires two specific ingredients. Which of the following is NOT in a gimlet?',
  answers: [
    {correct: false, text: "gin"},
    {correct: false, text: "preserved lime juice"},
    {correct: true, text: "fresh lime juice"}
  ]
}
data[3] = {
  text:'According to mixologist Dale DeGroff, what is the maximum size a cocktail should be?',
  answers: [
    {correct: false, text: "3 ounces"},
    {correct: true, text: "5 ounces"},
    {correct: false, text: "7 ounces"}
  ]
}
data[4] = {
  text:'True or false: Absinthe was banned from the U.S. because it was thought to be a hallucinogen.',
  answers: [
    {correct: false, text: "true"},
    {correct: true, text: "false"},
    // {correct: false, text: "Absinthe was banned, but any hallucinations were probably caused by its high alcohol content, not its other ingredients."}
  ]
}
data[5] = {
  text:'Which drink did Ernest Hemingway call his favorite?',
  answers: [
    {correct: true, text: "daiquiri"},
    {correct: false, text: "margarita"},
    {correct: false, text: "mojito"}
  ]
}

// console.log(data);
let score = 0;
//on load function
$(() => {
  let i = 0
  const showQuiz = () => {
    $('.quiz-section').show()
    $('#redo-button').show()
    $('h4').empty()
    const $questionDiv = $('<div>').addClass('question')
    const $h3 = $('<h3>').html(data[i].text);
    $h3.appendTo($questionDiv)
    $questionDiv.appendTo('.quiz-section')
    const $answerDiv = $('<div>').addClass('answer-section')
    $answerDiv.appendTo('.quiz-section')
    for(let x = 0; x<data[i].answers.length; x++){
      const $button = $('<button>').text(data[i].answers[x].text)
      $button.appendTo($answerDiv)
      $button.on('click', () => {
        // $('h4').empty()
        $('.answer-section>button').css('pointer-events','none')
        // $(event.currentTarget).css('pointer-events','visible')
        $('.next-button').remove()
        const $h4 = $('<h4>')
        if(data[i-1].answers[x].correct === true){
          $(event.currentTarget).css('border','0.3em solid green')
          .css('background-color','green')
          .css('color','white')
          $h4.text('Correct')
          $h4.css('background-color','green')
          score = score + 1;
        }else{
          let b = 0
          $(event.currentTarget).css('border','0.3em solid red')
          .css('background-color','red')
          .css('color','white')
          while(data[i-1].answers[b].correct !== true){
            b++
          }

          $h4.css('background-color','red')
          $h4.text('Incorrect.The correct answer is ' + data[i-1].answers[b].text)
        }
        const $correctDiv = $('<div>').addClass('correct-answer')
        $correctDiv.appendTo($('.quiz-section'))
        $h4.appendTo($correctDiv)
        $nextButton = $('<button>').addClass('next-button').text('Next Question')
        $nextButton.appendTo($correctDiv)
        $nextButton.on('click', showQuiz)
          if(i === data.length){
          const $modal = $('<div>').addClass('modal')
          .appendTo('.quiz-section')
          const $h2 = $('<h2>').text('you complete all the questions. Your score:' + Math.floor(score/6*100) + '%')
          const $closeButton = $('<button>').addClass('close-button').attr('type','button').appendTo($h2).text('close')
          $('#redo-button').appendTo($h2)
          $h2.appendTo($modal)
          $nextButton.remove()
          $closeButton.on('click', () => {
          $modal.hide()
          })
        }
      })
    }
    return i++;


  }
  $('#start-button').on('click', showQuiz)
  $('#redo-button').on('click', () => {
    location.reload();
  })
})//close for on load function
