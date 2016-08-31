function UserBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
	
	this.isMovingUp = false;
	this.isMovingRight = false;
	this.isMovingLeft = false;
	this.isMovingDown = false;
	this.speed = 3;
	
}


UserBall.prototype = Object.create(Ball.prototype);
UserBall.prototype.constructor = UserBall;

UserBall.prototype.moveKeyCode = function (key, value) {
	
	if (key == 39) {
		this.isMovingRight = value;
	}
	if (key == 38) {
		this.isMovingUp = value;
	}
	if (key == 40) {
		this.isMovingDown = value;
	}
	if (key == 37) {
		this.isMovingLeft = value;
	}
	
};

UserBall.prototype.move = function () {

	if (this.isMovingUp) {
		this.y -= this.speed;
	}

	if (this.isMovingDown) {
		this.y += this.speed;
	}

	if (this.isMovingeft) {
		this.x -= this.speed;
	}

	if (this.isMovingRight) {
		this.x += this.speed;
	}
};

UserBall.prototype.init = function () {
	var _this = this;
	document.addEventListener('keydown',function (e){
		var key = e.keyCode;
		_this.moveKeyCode(key,true);
	},false);
	document.addEventListener('keyup',function (e){
		var key = e.keyCode;
		_this.moveKeyCode(key,false);
	},false);
};