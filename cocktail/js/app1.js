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
    {correct: false, text: "Absinthe was banned, but any hallucinations were probably caused by its high alcohol content, not its other ingredients."}
  ]
}
console.log(data);
$(() => {
  let i = 0
  const showQuiz = () => {

    const $h3 = $('<h3>').text(data[i].text);
    $h3.appendTo($('.question'))
    for(let x = 0; x<3; x++){
      const $button = $('<button>').text(data[i].answers[x].text)
      $button.appendTo($('.answers-section'))
      $button.on('click', () => {
        $('h4').empty()
        if(data[i-1].answers[x].correct === true){
          $h4 = $('<h4>').text('Correct')
        }else{
          $h4 = $('<h4>').text('Incorrect')
        }
        $h4.appendTo($('.correct-answer'))
        $nextButton = $('<button>').addClass('next-button').text('Next Question')
        $nextButton.appendTo($('.correct-answer'))
        $nextButton.on('click', showQuiz)
      })
    }


    // $nextButton = $('<button>').text('Next QUESTION')
    // $nextButton.appendTo('.correct-answer')
    return i++;
  }
  $('#start-button').on('click', showQuiz)
})//close for on load function
