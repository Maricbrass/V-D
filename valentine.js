// valentine.js

const answers = ["No", "Are you sure?", "Really sure?", "Are you positive?", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very very sad", "Fine, I'll stop asking!", "Just kidding, PLEASE SAY YES!!", "I'll be very very very very very very sad", "You're breaking my heart :("];

const image = document.getElementById('gif');
const heading = document.getElementById('headline');
const YES = document.getElementById('yes');
const NO = document.getElementById('no');
let yesCount = 0;
let noCount = 0;
let counter = 1;
const w_factor = 4;
const h_factor = 3;
const audio = new Audio("./static/meme.mp3");

YES.addEventListener('click', function() {
  const message = prompt("Enter your message:");
  if (message != null && message != "") {
   var answer = true;
    Answer(answer , message);
  }
});

NO.addEventListener('click', function() {
  Answer(false);
});

function Answer(answer , message) {
    const style = window.getComputedStyle(YES);
    let width = parseInt(style.getPropertyValue("width").replace('px', ''));
    let height = parseInt(style.getPropertyValue("height").replace('px', ''));

    if (counter > 12) {
      counter = 0;
    }

    if (answer) {
      image.src = 'static/bearkiss.gif';
      heading.innerHTML = "Awww! YAY!!!";
      const data = {
        Name: localStorage.getItem('username'),
        Message: message,
        No_count: noCount,
      };
      saveData(data);
    } else {
      playAudio();
      width += w_factor;
      height += h_factor;
      YES.style.width = width + "px";
      YES.style.height = height + "px";
      NO.innerHTML = answers[counter];
      counter += 1;
      noCount++;
    }
}

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function saveData(data) {
  const jsonData = JSON.stringify(data);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'saveData.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert('Message saved successfully!');
      } else {
        alert('Failed to save message!');
      }
    }
  };
  xhr.send(jsonData);
}
