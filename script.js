// THIS CONTAINS THREE VARIABLES AND A FUNCTION THAT RETURNS THE ITEM OF AN ARRAY AT RANDOM.
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// THIS CONTAINS TEXT STRINGS WHICH WILL ACT AS INPUT FOR OUR SILLY STORY GENERATOR.
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin', 'Big Daddy','Father Christmas']

let insertY = ['the soup kitchen', 'Disneyland', 'the White House']

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

// AN EVENT LISTENER WITH A FUNCTION THAT CHECKS IF A NAME WAS ENTERED IN THE INPUT BOX AND ALSO CONVERTS MEASURES INTO ITS RESPECTIVE COUNTRY WAY OF MEASURING.
randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94 -32) * (5 / 9)) + ' centigrade';
    storyText = storyText.replace('94 fahrenheit', temperature);
    storyText = storyText.replace('300 pounds', weight);
  }

 
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

let nightMode = document.querySelector('.night');
let dayMode = document.querySelector('.day');

dayMode.addEventListener('click', colorful)
nightMode.addEventListener('click', darken);
function darken() {
    document.querySelector('html').style.backgroundColor = 'black';
    document.querySelector('html').style.color = 'white';
    document.querySelector('footer').style.boxShadow = '0 -3px 5px #bbb';
    document.querySelector('.day').style.display = 'block';
    document.querySelector('.night').style.display = 'none';
    document.querySelector('.day').style.cursor = 'pointer';
}
function colorful() {
    document.querySelector('html').style.backgroundColor = '#fff';
    document.querySelector('html').style.color = '#000';
   
    document.querySelector('footer').style.boxShadow = '0 -2px 5px #aaa';
    document.querySelector('.day').style.display = 'none';
    document.querySelector('.night').style.display = 'block';
}
let close = document.querySelector('.close');
function myClose() {
    document.querySelector('.note').style.display = 'none';
}
close.addEventListener('click', myClose);