class InputHandler{
  constructor(game){
    document.addEventListener("keydown", function(e){
      switch(e.keyCode){
        case 37: // left
          game.topPaddle.moveLeft()
          game.bottomPaddle.moveLeft()
          break
        
        case 39: // right
          game.topPaddle.moveRight()
          game.bottomPaddle.moveRight()
          break

        case 38: // up
          game.leftPaddle.moveUp()
          game.rightPaddle.moveUp()
          break

        case 40: // down
          game.leftPaddle.moveDown()
          game.rightPaddle.moveDown()
          break
      }

    })

    document.addEventListener("keyup", function(e){
      switch(e.keyCode){
        case 37: // left
          if(game.bottomPaddle.speed.x < 0){
            game.bottomPaddle.stop()
            game.topPaddle.stop()
          }
          break
        
        case 39: // right
          if(game.bottomPaddle.speed.x > 0){
            game.bottomPaddle.stop()
            game.topPaddle.stop()
          }
          break

        case 38: // up
          if(game.leftPaddle.speed.y < 0){
            game.leftPaddle.stop()
            game.rightPaddle.stop()
          }
          break

        case 40: // down
          if(game.leftPaddle.speed.y > 0){
            game.leftPaddle.stop()
            game.rightPaddle.stop()
          }
          break

        case 32: //spacebar
          if(game.ball.speedV === 0){
            game.ball.speed.x = 7
            game.ball.speed.y = 4
            // console.log(game.ball.speed)
          }
          if(!game.state){
            game.restart()
          }
          break
        }
      })
    let form = scoreForm.querySelector("form")
      form.addEventListener("submit", function(e){
        e.preventDefault()
        let name = e.target[0].value
        let score = parseInt(scoreSpan.innerText)
        let scoreObj = {name: name, score: score}
        console.log(scoreObj)
        // debugger
        game.postScore(scoreObj)
      })
    }
  }