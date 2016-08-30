document.addEventListener('DOMContentLoaded', function() {
	
		var ctx = document.querySelector('canvas').getContext('2d');
		
		var randX = Math.floor(Math.random() * 300) + 10;
		var randY = Math.floor(Math.random() * 100) + 10;
		var bonus = new BonusBall(ctx, 100, 100, 3, 'yellow');
		var me = new UserBall(ctx, 100, 130, 10, 'red');
		me.drawBall();
		bonus.drawBonus();	
}, false)