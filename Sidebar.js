// Creating element for toggle button (button)
const tooggle = document.getElementById('toogle');
// Query selector to get child element of the given element (aside)
const ele = document.querySelector('.sidebar'); // stored as (div)
tooggle.addEventListener('click', function() {
    ele.classList.toggle('show-elements'); // unused class called which was created in CSS
});