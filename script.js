const cards = document.querySelectorAll('.card');
const startTurnButton = document.getElementById('start-turn');
const nextTurnButton = document.getElementById('next-turn');
const skipTurnButton = document.getElementById('skip-turn');
const messageDisplay = document.getElementById('message');
const playerNameInput = document.getElementById('player-name');
const cardNumberInput = document.getElementById('card-number');

const penaltyQuestions = [
  'What is your biggest fear?',
  'What is the most embarrassing thing you have done?',
  'What is a secret you’ve never told anyone?',
  'If you could swap lives with someone, who would it be?',
  'What is your most awkward moment in school?',
  'What is the worst lie you’ve ever told?',
  'What is the most embarrassing thing you’ve done for love?',
  'Have you ever cheated on a test or in a relationship?',
  'What is something you’ve done that you still regret?',
  'If you could change one thing about your past, what would it be?',
  'What is a habit you’re most embarrassed about?',
  'What is the worst fashion choice you’ve ever made?',
  'If you could erase one moment from your life, what would it be?',
  'What’s the most embarrassing thing you’ve done on social media?',
  'What’s a secret that you keep from your best friend?',
  'What’s the most awkward thing that’s ever happened to you during a date?',
  'What’s the biggest mistake you’ve made at work/school?',
  'Have you ever accidentally said something really awkward in front of someone?',
  'What’s the most embarrassing thing you’ve said to someone you liked?',
  'If you could meet your future self, what advice would you ask for?',
  'What is something you’ve done in public that you immediately regretted?',
  'What’s the strangest dream you’ve ever had?',
  'What’s the most embarrassing thing that’s happened to you in front of your family?',
  'What’s one thing you’ve never told your parents?',
  'If you had to confess a crime, what would it be?',
  'What’s something you’ve always wanted to try but never had the guts to?',
  'What’s a fear that you’ve never shared with anyone?',
  'If you could live anywhere in the world, where would it be and why?',
  'What’s the most childish thing you still do?',
  'What’s the longest time you’ve gone without talking to a family member?',
  'Have you ever accidentally sent a message to the wrong person?',
  'What’s something you did as a kid that you hope no one ever finds out about?',
  'What’s the most embarrassing thing you’ve done in front of your crush?',
  'If you could swap lives with anyone for a day, who would it be?',
  'What’s the silliest thing you’ve ever argued about?',
  'What’s a terrible decision you’ve made that you’d do anything to take back?',
  'What’s the most embarrassing thing you’ve ever done while drunk?',
  'What’s the worst thing you’ve ever done to someone, and do you regret it?',
  'Have you ever had a crush on someone your friend liked?',
  'What’s something you’ve never told your best friend?',
  'What’s the craziest thing you’ve done on a dare?',
  'What’s the worst advice you’ve ever followed?',
  'What’s the most embarrassing social media post you’ve ever made?',
  'What’s something you regret saying to a friend or family member?',
  'Have you ever broken something at someone’s house and never told them?',
  'What’s the most embarrassing text you’ve ever sent?',
  'What’s the strangest habit you have?',
  'What’s the biggest lie you’ve ever told and got away with?',
  'What’s the most awkward situation you’ve been in during a job interview?',
  'Have you ever been caught doing something you shouldn’t have?',
  'What’s the biggest rumor you’ve heard about yourself?',
  'What’s the worst thing you’ve ever done at a party?',
  'What’s the most ridiculous thing you’ve ever been afraid of?',
  'What’s the most embarrassing thing you’ve done while on vacation?',
  'What’s something you’ve done that you’re too embarrassed to tell anyone?',
  'What’s the weirdest thing you’ve done when you were really tired?',
  'What’s the biggest embarrassment you’ve had in a public place?',
  'Have you ever made a fool of yourself in front of a celebrity or famous person?'
];



const truthDareSituations = [
  // Truths
  { type: 'Truth', content: 'What is your most embarrassing memory?' },
  { type: 'Truth', content: 'If you could change one thing about your past, what would it be?' },
  { type: 'Truth', content: 'Who is the one person you secretly admire?' },
  { type: 'Truth', content: 'What is the biggest lie you’ve ever told?' },
  { type: 'Truth', content: 'What is the most adventurous thing you’ve ever done?' },
  { type: 'Truth', content: 'Have you ever cheated in a test or game?' },
  { type: 'Truth', content: 'What’s the strangest dream you’ve ever had?' },
  { type: 'Truth', content: 'What’s one secret you’ve never told anyone?' },
  { type: 'Truth', content: 'What’s the most childish thing you still do?' },
  { type: 'Truth', content: 'Who in this room do you trust the most and why?' },
  { type: 'Truth', content: 'What’s your biggest fear in life?' },
  { type: 'Truth', content: 'What’s the most embarrassing thing you’ve done for love?' },
  { type: 'Truth', content: 'What would you do if you found a wallet on the street?' },
  { type: 'Truth', content: 'Have you ever lied to your parents about where you were?' },
  { type: 'Truth', content: 'What’s your biggest regret so far?' },
  { type: 'Truth', content: 'What’s the worst advice you’ve ever followed?' },
  { type: 'Truth', content: 'Who is your favorite person in the world and why?' },
  { type: 'Truth', content: 'Have you ever broken someone’s heart?' },
  { type: 'Truth', content: 'What is something you’ve never done but would love to try?' },
  { type: 'Truth', content: 'What’s one thing you’ve never told your best friend?' },
  { type: 'Truth', content: 'What’s the longest time you’ve gone without talking to a family member?' },
  { type: 'Truth', content: 'What’s the first thing you notice about someone you meet for the first time?' },
  { type: 'Truth', content: 'What is the biggest change you’ve ever made in your life?' },
  { type: 'Truth', content: 'If you could swap lives with someone for a day, who would it be?' },
  { type: 'Truth', content: 'What’s the craziest thing you’ve done on a dare?' },
  { type: 'Truth', content: 'What is your most embarrassing social media post?' },
  { type: 'Truth', content: 'If you could meet anyone in the world, who would it be?' },
  { type: 'Truth', content: 'What’s your most unpopular opinion?' },
  { type: 'Truth', content: 'Have you ever had a crush on someone your friend liked?' },
  { type: 'Truth', content: 'If you could change your name, what would you choose?' },
  { type: 'Truth', content: 'What’s the most expensive thing you’ve ever bought?' },
  { type: 'Truth', content: 'Have you ever broken a promise to someone?' },
  { type: 'Truth', content: 'What’s the most embarrassing thing that’s ever happened to you in school?' },
  { type: 'Truth', content: 'What is the strangest habit you have?' },
  { type: 'Truth', content: 'Who is the most important person in your life right now?' },
  { type: 'Truth', content: 'What’s one thing you’re really bad at?' },
  { type: 'Truth', content: 'What’s the funniest thing you’ve ever done while drunk?' },
  { type: 'Truth', content: 'What’s your favorite childhood memory?' },
  { type: 'Truth', content: 'What’s the worst thing you’ve ever done to someone?' },

  // Dares
  { type: 'Dare', content: 'Imitate your favorite celebrity for 1 minute.' },
  { type: 'Dare', content: 'Let someone tickle you for 30 seconds without stopping.' },
  { type: 'Dare', content: 'Do 10 push-ups and shout your favorite superhero name each time.' },
  { type: 'Dare', content: 'Eat a spoonful of ketchup, mustard, or any available sauce.' },
  { type: 'Dare', content: 'Speak only in rhymes until your next turn.' },
  { type: 'Dare', content: 'Balance a book on your head and walk across the room.' },
  { type: 'Dare', content: 'Call someone and sing them a random song.' },
  { type: 'Dare', content: 'Let someone draw a mustache on your face with a pen.' },
  { type: 'Dare', content: 'Hold a funny pose for 1 minute.' },
  { type: 'Dare', content: 'Post a silly selfie on your social media.' },
  { type: 'Dare', content: 'Do an impression of someone in the room.' },
  { type: 'Dare', content: 'Let someone else style your hair however they want.' },
  { type: 'Dare', content: 'Dance with no music for 30 seconds.' },
  { type: 'Dare', content: 'Try to lick your elbow.' },
  { type: 'Dare', content: 'Do your best chicken dance outside on the lawn.' },
  { type: 'Dare', content: 'Wear socks on your hands for the next 3 rounds.' },
  { type: 'Dare', content: 'Act like a baby for 2 minutes.' },
  { type: 'Dare', content: 'Read the last text message you received out loud.' },
  { type: 'Dare', content: 'Pretend to be a waiter/waitress and take snack orders from everyone.' },
  { type: 'Dare', content: 'Pretend to be an animal of your choice for 3 minutes.' },
  { type: 'Dare', content: 'Talk in an accent (choose one) for the next 10 minutes.' },
  { type: 'Dare', content: 'Post a funny video on your social media.' },
  { type: 'Dare', content: 'Do your best impression of a baby crying.' },
  { type: 'Dare', content: 'Let someone else do your makeup.' },
  { type: 'Dare', content: 'Do a cartwheel in the next 10 seconds.' },
  { type: 'Dare', content: 'Do 20 jumping jacks and yell "I love ice cream!" after each one.' },
  { type: 'Dare', content: 'Sing the chorus of a song at the top of your lungs.' },
  { type: 'Dare', content: 'Post a funny status on your social media account.' },
  { type: 'Dare', content: 'Let someone create a funny TikTok using your phone.' },
  { type: 'Dare', content: 'Pretend to be a teacher and give a lecture on any topic.' },
  { type: 'Dare', content: 'Do 5 squats and make funny noises with each one.' },
  { type: 'Dare', content: 'Do a dramatic reading of a random text message.' },
  { type: 'Dare', content: 'Do your best superhero pose and shout your superhero name.' },

  // Situations
  { type: 'Situation', content: 'If you were stranded on an island, what three things would you bring?' },
  { type: 'Situation', content: 'If you could swap lives with someone for a day, who would it be and why?' },
  { type: 'Situation', content: 'What would you do if you woke up as the opposite gender?' },
  { type: 'Situation', content: 'If you had only 24 hours to live, how would you spend it?' },
  { type: 'Situation', content: 'If you found a time machine, where and when would you go?' },
  { type: 'Situation', content: 'If a genie granted you one wish, what would it be?' },
  { type: 'Situation', content: 'If you could live anywhere in the world, where would it be?' },
  { type: 'Situation', content: 'If you were invisible for a day, what would you do?' },
  { type: 'Situation', content: 'If you could only eat one food for the rest of your life, what would it be?' },
  { type: 'Situation', content: 'If you could have any superpower, what would it be and why?' },
  { type: 'Situation', content: 'What would you do if you won a lottery worth 10 million dollars?' },
  { type: 'Situation', content: 'If you could change one thing about the world, what would it be?' },
  { type: 'Situation', content: 'If you could be famous for one thing, what would it be?' },
  { type: 'Situation', content: 'If you could bring one fictional character to life, who would it be?' },
  { type: 'Situation', content: 'If you had the power to make one rule for everyone in the world to follow, what would it be?' },
  { type: 'Situation', content: 'If you could time travel, what era would you visit first?' },
  { type: 'Situation', content: 'If you were given one superpower, what would you choose and how would you use it?' },
  { type: 'Situation', content: 'If you had a chance to meet your future self, what would you ask them?' },
  { type: 'Situation', content: 'If you could make a documentary about anything, what would it be?' },
  { type: 'Situation', content: 'If you had the chance to live in a different country, where would you go and why?' },
  { type: 'Situation', content: 'If you could meet any historical figure, who would it be?' },
  { type: 'Situation', content: 'If you could have dinner with any three people, dead or alive, who would you invite?' },
  { type: 'Situation', content: 'If you could be any animal for a day, which would you choose and why?' },
  { type: 'Situation', content: 'If you could erase one event from history, which one would you choose?' },
  { type: 'Situation', content: 'If you had a chance to live in a fantasy world, what kind of world would you want?' },
  { type: 'Situation', content: 'If you had the ability to solve one global issue, which would you tackle first?' },
  { type: 'Situation', content: 'If you could write a letter to your past self, what advice would you give?' },
  { type: 'Situation', content: 'If you could switch lives with anyone for a week, who would you choose?' },
  { type: 'Situation', content: 'If you could only watch one TV show forever, what would it be?' },
  { type: 'Situation', content: 'If you were in a room full of strangers, how would you start a conversation?' },
  { type: 'Situation', content: 'If you were to write a book about your life, what would be the title?' },
  { type: 'Situation', content: 'If you could live without one modern convenience, what would you choose to give up?' },
  { type: 'Situation', content: 'If you could spend one day with any fictional character, who would it be?' }
];


let currentPlayer = '';

startTurnButton.addEventListener('click', () => {
  const playerName = playerNameInput.value.trim();
  const cardNumber = parseInt(cardNumberInput.value);

  if (!playerName) {
    alert('Please enter a player name!');
    return;
  }

  if (!cardNumber || cardNumber < 1 || cardNumber > cards.length) {
    alert('Please choose a valid card number!');
    return;
  }

  currentPlayer = playerName;
  const selectedCard = document.querySelector(`.card[data-card-number="${cardNumber}"]`);

  if (selectedCard) {
    const randomIndex = Math.floor(Math.random() * truthDareSituations.length);
    const { type, content } = truthDareSituations[randomIndex];

    const cardBack = selectedCard.querySelector('.card-back');
    cardBack.innerHTML = `
      <h3>${type}</h3>
      <p>${content}</p>
    `;
    selectedCard.querySelector('.card-inner').classList.add('flipped');

    messageDisplay.innerText = `${currentPlayer}, complete the challenge and press "Next Turn" when done! or if u want to skip then u have to face the penalty`;

    // Hide the start turn button and show the next turn button
    nextTurnButton.style.display = 'inline-block';
    startTurnButton.style.display = 'none';

    // Show the Skip Turn button
    skipTurnButton.style.display = 'inline-block';
  }
});

nextTurnButton.addEventListener('click', () => {
  // Reset the game for the next turn
  resetTurn();

  messageDisplay.innerText = '';
  playerNameInput.value = '';
  cardNumberInput.value = '';
  nextTurnButton.style.display = 'none';
  startTurnButton.style.display = 'inline-block';
  skipTurnButton.style.display = 'none';  // Hide the skip button for the next turn
});

skipTurnButton.addEventListener('click', function() {
  // Hide the Skip Turn button and show the "Complete Penalty" button
  skipTurnButton.style.display = 'none';

  const completePenaltyButton = document.createElement('button');
  completePenaltyButton.textContent = 'Complete Penalty';
  completePenaltyButton.id = 'complete-penalty';
  document.body.appendChild(completePenaltyButton);

  // Show penalty question when the "Complete Penalty" button is clicked
  completePenaltyButton.addEventListener('click', function() {
    // Show the penalty question
    const penaltyQuestion = penaltyQuestions[Math.floor(Math.random() * penaltyQuestions.length)];
    messageDisplay.innerText = penaltyQuestion;

    // Remove the "Complete Penalty" button after it's clicked
    completePenaltyButton.remove();

    // Show the "Next Turn" button for the next round
    nextTurnButton.style.display = 'inline-block';
  });
});

// Function to reset the game for the next round
function resetTurn() {
  // Remove flipped state from all cards
  cards.forEach(card => {
    card.querySelector('.card-inner').classList.remove('flipped');
  });
}


