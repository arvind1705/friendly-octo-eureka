var cupid = document.querySelector('.cupid');
cupid.addEventListener('click', poof, false);

function poof() {
  cupid.classList.add('poofed');
}

var messagePaths = document.querySelectorAll('.mp');
var messagePathLength = [];

for(var i = 0; i < messagePaths.length; i++) {
  messagePathLength[i] = messagePaths[i].getTotalLength();
  $(messagePaths[i]).css('stroke-dasharray', messagePathLength[i]);    
  $(messagePaths[i]).css('stroke-dashoffset', messagePathLength[i]);
}

var tickle = document.querySelector('.tickle');
tickle.addEventListener('click', poof, false);

var refresh = document.querySelector('.refresh');
refresh.addEventListener('click', unpoof, false);

function unpoof() {
  cupid.classList.remove('poofed');
}