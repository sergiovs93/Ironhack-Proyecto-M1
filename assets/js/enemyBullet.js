class EnemyBullet{
    constructor(ctx,x,y){
        this.ctx = ctx

        this.x = x
        this.y = y

        this.vx = 3

        this.width = 11
        this.height = 4

        this.movements = {
    
            left : false,
            right : false
    
        }        

        this.img = new Image()
        this.img.src = './assets/img/enemy-bullet.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,               
        )
    }

    move(){
        this.x -= this.vx

        if(!this.movements.right && !this.movements.left) {
            this.vx = 3;
        }

        if (this.movements.right) {
          this.vx = -this.speed;

        }
        if (this.movements.left) {
          this.vx = this.speed;
        }
    }

    setUpListeners(event){
        const status = event.type === 'keydown';

        if(!this.movements.right && !this.movements.left) {
            this.vx = 3;
        }

        if (this.movements.right) {
          this.vx = -this.speed -this.background.speed;

        }
        if (this.movements.left) {
          this.vx = this.speed;
        }
    }

    collidesWithPlayer(player) {
        if (
            this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.width > player.y
        ) {
        return true
        }
    }
}