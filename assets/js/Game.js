document.addEventListener('DOMContentLoaded', function() {
		var isStarted = true;
		var ctx = document.querySelector('canvas').getContext('2d');
		var userball = new UserBall(ctx, 100, 130, 10, 'yellow');
		var small = new SmallBall(ctx, 333, 512, 5, 'red');
		userball.draw();	
		small.draw();
		userball.init();
		function loop() {
			if (isStarted) {
				ctx.clearRect(0, 0, 1000, 650);
				userball.move();
				userball.draw();
				small.draw();
			}

			requestAnimationFrame(loop);
		}
		requestAnimationFrame(loop);


		

}, false)