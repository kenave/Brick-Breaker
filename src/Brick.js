class Brick{
  constructor(game, position){
    this.image = document.querySelector("img#brick")
    this.game = game
    this.position = position
    this.width = 40
    this.height = 40
    this.markedForDelete = false   
  }

  update(){
    // debugger
    // console.log(this.game.balls[0])
    collisionDetection(this.game.ball, this)
  }

  draw(ctx){
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}