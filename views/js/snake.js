import {createApp, createMainMenu, windowWidth, windowHeight} from './main.js';
export function snakeFunc () {
  function snakeWindow () {
      const $content = $('#content');
      const $appBlock = $('#appBlock');
      $content.css({"background-image": "unset", "background-color": "rgb(142, 179, 102)"});
      $appBlock.remove();
      $content.empty();
      const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
          "padding-top": "15px",
          "padding-left": "15px",
          "cursor": "pointer"
      });
      $content.append($arrow);
      $('.fa-arrow-left').on("click", () => {
          const appBlock = $('<div></div>').attr('id', 'appBlock').css({width: windowWidth, height: windowHeight});
          $content.children().wrapAll(appBlock);
          const app = $('<div></div>').attr({class: "app", id: "MessageS"}).css({
              width: windowWidth,
              height: windowHeight,
              'margin-top': '0',
              'border-radius': '5%',
              "overflow-y": "hidden",
              "background": "white",
              "position": 'absolute',
              'z-index': '10'
          })
          $('#appBlock').children().wrapAll(app);
          $content.css({"background-image": 'url("background2.jpg")', "background-color": "unset"});
          const $message = $('#MessageS');
          createApp('Snake');
          createApp('Message');
          createApp('Chess');
          createApp('Calculator');
          $(function() {
              $message.animate({
                  width: '70px',
                  height: '50px',
                  'margin-top': '40px',
                  opacity: '0'
              }, {
                  duration: 200,
                  complete: function() {
                      $message.remove();
                      if (snakeTimer) clearInterval(snakeTimer);
                      createMainMenu(true);
                  }
              })
          })
      });
      const $snakeButton = $('<h1></h1>').attr('class', 'snake-button').text('Start game');
      $snakeButton.on('click', () => {
          $snakeButton.remove();
          let $canvas
          if (windowWidth === 500) {
              $canvas = $('<canvas></canvas>').attr({
                  id: 'snake',
                  width: '400',
                  height: '400'
              });
          } else if (windowWidth >= 450) {
              $canvas = $('<canvas></canvas>').attr({
                  id: 'snake',
                  width: '300',
                  height: '300'
              });
          } else {
              $canvas = $('<canvas></canvas>').attr({
                  id: 'snake',
                  width: '250',
                  height: '250'
              });
          }
          $content.append($canvas);
          const $arrowDisplay = $('<div></div>').attr('class', 'arrow-display');
          $content.append($arrowDisplay);
          const $arrowUp = $("<i></i>").attr("class", "fa fa-arrow-up snake-up")
          $arrowDisplay.append($arrowUp);
          const $leftRightBlock = $('<div></div>').attr("class", "left-right-block");
          $arrowDisplay.append($leftRightBlock);
          const $arrowLeft = $("<i></i>").attr("class", "fa fa-arrow-left snake-left");
          $leftRightBlock.append($arrowLeft);
          const $arrowRight = $("<i></i>").attr("class", "fa fa-arrow-right snake-right");
          $leftRightBlock.append($arrowRight);
          const $arrowDown = $("<i></i>").attr("class", "fa fa-arrow-down snake-down");
          $arrowDisplay.append($arrowDown);
          const $currentScore = $('<p></p>').attr('class', 'current-score')
          $content.append($currentScore);
          const $bestScore = $('<p></p>').attr('class', 'best-score')
          $content.append($bestScore);
          snakeGame();
      });
      $content.append($snakeButton);
  }
  
  snakeWindow();
  var bestScore = 0
  var snakeTimer;

  function snakeGame () {
      var currentScore = 0;
      var canvas = document.getElementById('snake');
      var ctx = canvas.getContext('2d');
      let height;
      let width;
      let block = 20;
      if (windowWidth === 500) {
          height = 400;
          width = 400;
      } else if (windowWidth >= 450) {
          height = 300;
          width = 300;
      } else {
          height = 250;
          width = 250;
      }
      let scale = width/block;
      let snake = [];
      let move;
      let food = {
          x: Math.floor(Math.random() * block) * scale,
          y: Math.floor(Math.random() * block) * scale,
      };

      function createFood () {
          var foodX = Math.floor(Math.random() * block) * scale;
          var foodY = Math.floor(Math.random() * block) * scale;
          for(let i = 0; i<snake.length; i++) {
              if(foodX == snake[i].x && foodY == snake[i].y) {
                  foodX = Math.floor(Math.random() * block) * scale;
                  foodY = Math.floor(Math.random() * block) * scale;
                  i=0;
              }
          }
          food = {
              x: foodX,
              y: foodY
          };
      }

      snake = [{}];

      snake[0] = {
          x: width/2,
          y: height/2
      }

      function reset () {
          snake = [];
          snake[0] = {
              x: width/2,
              y: height/2
          }
          move = "";
          currentScore = 0;
          createFood();
      }

      function drawGame () {
          for (let i = 0; i<=width; i+=scale)
              for (let j = 0; j<=height; j+= scale){
                  /*ctx.beginPath();
                  ctx.strokeStyle = "green" 
                  ctx.lineWidth = 3;
                  ctx.strokeRect(i, j, scale, scale);*/

                  ctx.fillStyle = "rgb(142, 179, 102)";
                  ctx.fillRect(i, j, scale, scale);
                  ctx.fill();
              }
          //ctx.save();
          ctx.beginPath();
          ctx.fillStyle = "rgb(255, 202, 40)";
          ctx.arc(scale/2 + food.x, scale/2 + food.y, scale/2 - scale/10, 0, 2 * Math.PI);
          ctx.fill();
          //ctx.clip();


          ctx.restore();
          for (let i = 0; i<snake.length; i++) {
              ctx.fillStyle = "#125212";
              ctx.fillRect (snake[i].x+1, snake[i].y+1, scale-3, scale-3);
          }

          let stepX = snake[0].x;
          let stepY = snake[0].y;

          if(stepX === food.x && stepY === food.y) {
              currentScore++;
              if (currentScore > bestScore) bestScore = currentScore
              createFood();
          } else snake.pop();

          $('.current-score').text('Current Score: ' + currentScore);
          $('.best-score').text('Best Score: ' + bestScore);

          for (let i=1; i<snake.length; i++)  {
              if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                  reset();
                  return;
              }
          }

          if (move === "left") stepX -= scale;
          if (move === "up") stepY -= scale;
          if (move === "right") stepX += scale;
          if (move === "down") stepY += scale;

          if (stepX < 0) {
              stepX = width-scale;
          } else if (stepX === width) {
              stepX = 0;
          }

          if (stepY < 0) {
              stepY = height-scale;
          } else if (stepY === height) {
              stepY = 0;
          }

          let snakeStep = {
              x: stepX,
              y: stepY
          }
          snake.unshift(snakeStep);
      }

      document.addEventListener("keydown", (event) => {
          if(event.keyCode === 37 && move !== "right") {
              move = "left";
          } else if (event.keyCode === 38 && move !== "down") {
              move = "up";
          } else if (event.keyCode === 39 && move !== "left") {
              move = "right";
          } else if (event.keyCode === 40 && move !== "up") {
              move = "down";
          }
      })

      $('.snake-up').click(() => move !== "down" ? move="up" : 1);
      $('.snake-left').click(() => move !== "right" ? move="left" : 1);
      $('.snake-right').click(() => move !== "left" ? move="right" : 1);
      $('.snake-down').click(() => move !== "up" ? move="down" : 1);

      snakeTimer = setInterval(drawGame, 90);
  }
}