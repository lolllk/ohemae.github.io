var color = 'blue';
setInterval(function() {
    document.body.style.backgroundColor = color;
    color = (color === 'blue') ? 'red' : 'blue';
}, 5000);