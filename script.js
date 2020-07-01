/*
// 1. Create constructor function
const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// 4. Type Method
TypeWriter.prototype.type = function () {
  //   console.log('Hello');

  // Current index of word
  const current = this.wordIndex % this.words.length;
  //   console.log(current); // 0

  // Get full text of current word
  const fullTxt = this.words[current];
  //   console.log(fullTxt); // Developper many times

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Type speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    //   typeSpeed = typeSpeed / 2;
    typeSpeed /= 2;
  }

  // Check if word is completed
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), 500);
};

// 2. Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// 3. Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
*/

// ES6 Class
// 1. Create constructor class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  // 1.2. Create method type()
  type() {
    //   console.log('Hello');

    // Current index of word
    const current = this.wordIndex % this.words.length;
    //   console.log(current); // 0

    // Get full text of current word
    const fullTxt = this.words[current];
    //   console.log(fullTxt); // Developper many times

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      //   typeSpeed = typeSpeed / 2;
      typeSpeed /= 2;
    }

    // Check if word is completed
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), 500);
  }
}

// 2. Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// 3. Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // 3.1 Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
