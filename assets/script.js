
// AFFIX
var affixEl = document.createElement('div');
affixEl.classList.add('affix');
affixEl.id = 'affix';

var target = document.getElementById('topnav');
target.parentNode.insertBefore(affixEl, target.nextSibling);

var affix = document.getElementById('affix');
affix.appendChild(target.cloneNode(true));

var element = document.getElementById('affix')
if (element !== null) {
  var positionTop = target.offsetTop;
  console.log(positionTop);
  window.addEventListener('scroll', function () {
    var height = window.scrollY;
    console.log(height);
    if (height > positionTop) {
      target.style.visibility = 'hidden';
      affix.style.display = 'block';
    } else {
      affix.style.display = 'none';
      target.style.visibility = 'visible';
    }
  })
}


// BURGER MENU
function toggleMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}