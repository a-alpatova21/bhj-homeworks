const timer = document.getElementById("timer");

let countdown = setInterval(function() {
    --timer.textContent;
        
    if (timer.textContent == 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
	};

}, 1000);


	