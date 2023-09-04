// const expandButton = document.querySelector('header button')
// expandButton.addEventListener('click', expand)

// function expand () {
//   document.body.classList.toggle('expand')
// }

const expandButton = document.querySelectorAll('.tile__button');
expandButton.forEach((button) => {
  button.addEventListener('click', expand.bind(this, button));
})

function expand(button) {
  button.parentElement.classList.toggle('tile--fullscreen');
}

// Reef & Co.
// Voor al uw webdesign. En meer... ;)