// DOM ELEMENTS
const modalClose = document.querySelector(".modal-container-close");
const modalWindow = document.querySelector(".modal")
const modalText = document.querySelector(".rules")
const mainContainer = document.querySelector(".container-bg")
//const btnTrue = document.querySelector("#true")

// TOTAL SCORE COUNTER
let score = 0;

// LISTENERS
// Document Ready
document.addEventListener("DOMContentLoaded", startGame);
// Submit ballot listener
document.addEventListener("click", submitBallot);


// Modal close FUNCTION
modalClose.addEventListener('click', () => {
  setTimeout(() => {
    modalWindow.classList.add("hide");
  }, 1000);
  modalWindow.classList.remove("fade-in")
  modalWindow.classList.toggle('fade-out');
  // Show first ballot
  document.querySelector(".hide").style.display = "block"

})

// Modal Meassage Typing FUNCTION
function printMessage() {
  const txt = `You need to find fake voting ballots. Look for suspicious data (eligible age is from 18 to 110, signature is mandatory, bullet should be print on official blank with all stamps, the only one candidate should be chosen etc.). Be careful, the future of
our election depends on you!`
  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      modalText.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  typeWriter()
}

function showBallot(options) {
  const div = document.createElement('div');
  div.innerHTML = `
  <!-- BALLOT -->
    <div class="ballot-wrapper d-flex">
      <div class="ballot d-flex pattern3 p-1">
            <div class="ballot-logo">
              <img src="images/ballot-logo.png" alt="ballot logo">
            </div>
            <div class="ballot-full-name d-flex p-1 inner-border">
              <p class="text-small">Full name: </p>
              <div class="first-name pl-1 input-font">${options.name}</div>
              <div class="last-name pl-1 input-font">${options.lName}</div>
            </div>
            <div class="ballot-birth-date d-flex p-1 inner-border">
              <p class="text-small">Date of Birth:  </p>
              <p class="pl-1 input-font">${options.birth}</p>
            </div>
            <div class="ballot-signature d-flex p-1 inner-border">
              <p class="text-small">Signature: </p>
              <p class="signature pl-1 input-font">${options.signature}</p>
            </div>
            <div class="ballot-candidate p-1 inner-border">
              <p class="text-small">Candidates:</p>
              <div class="donald">Donald Duck - <span class="check-candidate">${options.choice === "donald" ? "&#x2714;": ""}</span></div>
              <div class="joe">Joe Bidet - <span class="check-candidate">${options.choice === "joe" ? "&#x2714;": ""}</span></div>
            </div>
            <div class="ballot-submit d-flex">
              <div id="true" class="btn btn-green">
              <p>GOOD</p>
            </div>
            <div id="false" class="btn btn-red">
              <p>FAKE</p>
            </div>
            </div>
          </div>
    </div>
    <!-- BALLOT ENDs-->
  `;
  // hide each div class
  div.classList.add("hide")
  mainContainer.appendChild(div)
}

function renderBallots() {
  for(const ballot of BALLOTS) {
      showBallot(ballot);
  }
}

function submitBallot() {

}

// ===== > START GAME FUNCTION < ======
function startGame() {
  // Modal appears
  modalWindow.classList.toggle('fade-in');
  // Modal text typing
  printMessage();
  renderBallots();
  const btnGood = document.querySelector("#true");
  const btnFake = document.querySelector("#false");

}

const BALLOTS = [
  {
    name: "Bob",
    lName: "Ross",
    birth: "1967/Jun/18",
    signature: "BR",
    choice: "donald",
    status: true
  },
  {
    name: "Mike",
    lName: "Mouse",
    birth: "1997/Oct/38",
    signature: "Mike j Mouse",
    choice: "joe",
    status: false
  }
];

class Storage {
  constructor() {

  }
  addBallots(ballotArray){

  }
  getBallot() {

  }
}
