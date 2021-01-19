import { createApp, createMainMenu, windowWidth, windowHeight} from './main.js';
import { gameObject } from './gameObject.js';
import { gameObject2 } from './gameObject2.js';
import { gameObject3 } from './gameObject3.js';
export function gameFunc () {
  async function messageWindow (fromLobby) {
    game();
    const $content = $('#content');
    if (!fromLobby) {
    $content.css({"background-image": "unset", "background-color": "rgb(31, 29, 29)"});
    const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
    $content.append($messegeTopBlock);
    const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
        "vertical-align": "super",
        "padding-left": "15px",
        "cursor": "pointer"
    });
    $messegeTopBlock.append($arrow);
    const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": 0,
    "padding-top": "10px",
    "padding-left": "15px",
    "display": "inline-block"}).text("Messages");
    $messegeTopBlock.append($text);
    createSender('8-800-555-35-35');
    createSender('55644994');
    createSender('515253545');
    }
    $('.fa-arrow-left').on("click", () => {
        const appBlock = $('<div></div>').attr('id', 'appBlock').css({width: windowWidth, height: windowHeight});
        $content.children().wrapAll(appBlock);
        const app = $('<div></div>').attr({class: "app", id: "MessageS"}).css({
            width: windowWidth,
            height: windowHeight,
            'margin-top': '0',
            'border-radius': '5%',
            "overflow-y": "hidden",
            "background": "rgb(31, 29, 29)",
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
                    createMainMenu(true);
                }
            })
        })
    });
    var state = await getUserState();
    var currentLevel = 'level1';
    var currentSender = '8-800-555-35-35';
    if (state.level1.length > 0 && state.level1[state.level1.length-1].playerAnswer === 'Victory') {
      currentLevel = 'level2';
      currentSender = '55644994';
      $('#8-800-555-35-35').children('p.senderText').text('Victory');
      if (state.level2.length > 0 && state.level2[state.level2.length-1].playerAnswer === 'Victory') {
        currentLevel = 'level3';
        currentSender = '515253545';
        $('#55644994').children('p.senderText').text('Victory');
      } else {
        $('#515253545').children('p.senderText').text('Complete the second chapter  ').append($('<i></i>').attr('class', 'fa fa-lock'));
        $('#515253545').on('click', e => alert($(e.currentTarget).children('p.senderText').text()));
      }
    } else {
      $('#55644994').children('p.senderText').text('Complete the first chapter  ').append($('<i></i>').attr('class', 'fa fa-lock'));
      $('#515253545').children('p.senderText').text('Complete the second chapter  ').append($('<i></i>').attr('class', 'fa fa-lock'));
      $('#515253545, #55644994').on('click', e => alert($(e.currentTarget).children('p.senderText').text()));
    }
    let stateLastElement = state[currentLevel].length-1;
    if(stateLastElement > 0) {
        if(state[currentLevel][stateLastElement].playerAnswer) {
            $(`#${currentSender}`).children('.senderText').css('display', 'block').text(state[currentLevel][stateLastElement].playerAnswer);
        } else {
            if (state[currentLevel][stateLastElement].sender) {
                let senderArrLastElement = state[currentLevel][stateLastElement].sender.length-1
                $(`#${currentSender}`).children('.senderText').css('display', 'block').text(state[currentLevel][stateLastElement].sender[senderArrLastElement]);
            } else  $(`#${currentSender}`).children('.senderText').css('display', 'none');
        }
    }
    var unreadedMessegesTimer = setInterval(async () => {
        try {
          let len = 0;
          state = await getUserState();
          for(let i = 0; i<state[currentLevel].length; i++) len += state[currentLevel][i].sender.length;
          if (len > state.readedMesseges) $(`#${currentSender}`).children('.unreadedMesseges').css('display', 'block').text(len-state.readedMesseges);
          else $(`#${currentSender}`).children('.unreadedMesseges').css('display', 'none');
          let stateLastElement = state[currentLevel].length-1;
          if(state[currentLevel][stateLastElement].playerAnswer) {
              $(`#${currentSender}`).children('.senderText').css('display', 'block').text(state[currentLevel][stateLastElement].playerAnswer);
          } else {
              if (state[currentLevel][stateLastElement].sender) {
                  let senderArrLastElement = state[currentLevel][stateLastElement].sender.length-1
                  $(`#${currentSender}`).children('.senderText').css('display', 'block').text(state[currentLevel][stateLastElement].sender[senderArrLastElement]);
              } else  $(`#${currentSender}`).children('.senderText').css('display', 'none');
          }
        } catch (e) {}
    }, 750)
    $('.fa-arrow-left').on('click', () => clearInterval(unreadedMessegesTimer));
    $content.children("div").on('click', async (e) => {
        if (e.currentTarget.id !== currentSender) {
          if (e.currentTarget.id === '8-800-555-35-35' && (currentSender === '515253545' || currentSender === '55644994')) {
            currentLevel = 'level1';
            currentSender = '8-800-555-35-35';
          } else if (e.currentTarget.id === '55644994' && currentSender === '515253545') {
            currentLevel = 'level2';
            currentSender = '55644994';
          } else return;
        }
        clearInterval(unreadedMessegesTimer);
        if (e.currentTarget.id === "messegeTopBlock") return;
        const senderId = e.currentTarget.id;
        $content.children().remove();
        const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
        $content.append($messegeTopBlock);
        const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
            "vertical-align": "super",
            "padding-left": "15px",
            "cursor": "pointer"
        });
        $arrow.on("click", () => {
            $content.children().remove();
            messageWindow();
        });
        $messegeTopBlock.append($arrow);
        const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": 0,
        "padding-top": "10px",
        "padding-left": "15px",
        "display": "inline-block"}).text(senderId);
        $messegeTopBlock.append($text);
        const $messegeMainBlock = $('<div></div>').attr('id', 'messegeMainBlock').css({"overflow-y": "auto",
        "height": `${windowHeight-$messegeTopBlock.height()-150}px`});
        $content.append($messegeMainBlock);
        const $messegeBottomBlock = $('<div></div>').attr('id', 'messegeBottomBlock').css({
            'height': `${windowHeight-$messegeTopBlock.height()-$messegeMainBlock.height()}px`,
            'border-top': '1px solid grey'
        });
        $content.append($messegeBottomBlock);
        state = await getUserState();
        const tempState = state[currentLevel];
        var readedMesseges = 0;
        var flag = 0;
        tempState.forEach((obj, index) => {
            if(obj) {
                obj.sender.forEach(str => {
                    createSenderMesseges(str);
                    readedMesseges += 1;
                });
                if(obj.playerAnswer) createSenderMesseges(obj.playerAnswer, false, obj.questId);
                else {
                    if (obj.answers.length > 0) {
                      for(let i = 0; i<obj.answers.length; i++) 
                        createAnswer(obj.answers[i], index, obj.nextQuestId[i], currentLevel);
                      flag = 1;
                    }
                    
                }
            }
        });
        var objDiv = document.getElementById('messegeMainBlock');
        objDiv.scrollTop = objDiv.scrollHeight;
        let i = state[currentLevel].length-1;
        async function repeatedTimout () {
            state = await getUserState();
            var count = 0;
            try {
              if (currentLevel === 'level3') {
                if (state[currentLevel][i].alert && (state[currentLevel][i].playerAnswer !== 'Game over' || state[currentLevel][i].playerAnswer !== 'Game over')) {
                  window.alert(state[currentLevel][i].alert);
                  gameObject3.map(obj => {
                    if (obj.id === state[currentLevel][i].nextQuestId[0]) obj.func('level3');
                  });
                  i++;
                }
              }
              if(state[currentLevel].length > 0) {
                  if (i==0 || (currentLevel === 'level3' && i==3)) {
                      for (let j = 0; j<state[currentLevel][i].sender.length; j++) {
                          if (!$('.messegesBlock')[j]) {
                              createSenderMesseges(state[currentLevel][i].sender[j]);
                              readedMesseges += 1;
                              objDiv.scrollTop = objDiv.scrollHeight;
                          }
                      }
                  } else {
                      if (currentLevel === 'level3') {
                        for (let j = 0; j<state[currentLevel].length; j++) count += state[currentLevel][j].sender.length;
                        if(count > $('.messegesBlock:not(.notSender)').length) {
                          createSenderMesseges(state[currentLevel][i].sender[state[currentLevel][i].sender.length-(count-$('.messegesBlock:not(.notSender)').length)]);
                          readedMesseges += 1;
                          objDiv.scrollTop = objDiv.scrollHeight;
                        }
                      }
                      else {
                      for (let j = 0; j<state[currentLevel][i].sender.length; j++) {
                          if (!$(`.notSender[id=${state[currentLevel][i-1].questId}]~.messegesBlock`)[j]) {
                              createSenderMesseges(state[currentLevel][i].sender[j]);
                              readedMesseges += 1
                              objDiv.scrollTop = objDiv.scrollHeight;
                          }
                        } 
                      }
                    }
                    if (state[currentLevel][i].playerAnswer === 'Game over') {
                        if (state[currentLevel][i].alert) window.alert(state[currentLevel][i].alert);
                        createAnswer('Start again?', 0,0, currentLevel);
                        clearTimeout(timer);
                        return;
                    } else if (state[currentLevel][i].playerAnswer === 'Victory') {
                      if (state[currentLevel][i].alert) window.alert(state[currentLevel][i].alert);
                      clearTimeout(timer);
                      return;
                    } else {
                      if(state[currentLevel][i].playerAnswer) {
                          if(!$(`.notSender[id=${state[currentLevel][i].questId}]`).length) {
                              createSenderMesseges(state[currentLevel][i].playerAnswer, false, state[currentLevel][i].questId);
                              objDiv.scrollTop = objDiv.scrollHeight;
                              i++;
                              flag = 0;
                          }
                      }
                      else {
                          if($('.answerBlock').length < 1 && flag !== 1) {
                                  if (state[currentLevel][i].answers.length > 0) {
                                      for(let k = 0; k<state[currentLevel][i].answers.length; k++) 
                                        createAnswer(state[currentLevel][i].answers[k], i, state[currentLevel][i].nextQuestId[k], currentLevel);
                                    flag = 1;
                                  }
                          }
                      }
                    }
                }
              timer = setTimeout(repeatedTimout, 750);
            } catch (e) {
              objDiv.scrollTop = objDiv.scrollHeight;
              timer = setTimeout(repeatedTimout, 750);
            }
        }
        var timer = setTimeout(repeatedTimout, 750);
        $('.fa-arrow-left').on('click', async () => {
            clearTimeout(timer);
            try {
            if (state[currentLevel][i].playerAnswer !== 'Victory') await postReadedMesseges(readedMesseges);
            } catch (e) {
              clearTimeout(timer);
            }
        });
    });
};


  function compare(arr1, arr2) {
      let isItEqual = true;
      for (let i = 0; i<arr1.length; i++) {
          if (arr1[i] !== arr2[i]) { 
              isItEqual = false;
              break
          }
      }
      if (isItEqual) return true;
      else return false;
  }

  async function game () {
    try {
      var state = await getUserState();
      if (state.level1.length < 1) {
          console.log('Level1 started');
          gameObject[0].func('level1');
      } else {
        if (state.level1[state.level1.length-1].playerAnswer === 'Victory' && state.level2.length < 1) {
            console.log('Level2 started');
            await deleteReadedMesseges();
            gameObject2[0].func('level2');
        } else {
          if (state.level2[state.level2.length-1].playerAnswer === 'Victory' && state.level3.length < 1) {
          console.log('Level3 started');
          await deleteReadedMesseges();
          gameObject3[0].func('level3');
          }
        }
      }
    } catch (e) {}
  }

  function createSender (senderName) {
      const $content = $('#content');
      const $block = $('<div></div>').attr({
          'class': 'senderBlock',
          'id': senderName
      });
      $content.append($block);
      var questName;
      if (senderName === '8-800-555-35-35') questName = '1 chapter. Mental health hospital'
      else if (senderName === '55644994') questName = '2 chapter. Monster'
      else if (senderName === '515253545') questName = '3 chapter. Book'
      const $sender = $('<h3></h3>').attr('class', 'sender').text(questName);
      const $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
      const $senderText = $('<p></p>').attr('class', 'senderText').text('...');
      $block.append($sender);
      $block.append($unreadedMesseges);
      $block.append($senderText);
  }

  function createSenderMesseges (string, isItSender, answerId) {
      if(isItSender === undefined) isItSender = true;
      const $messegeMainBlock = $('#messegeMainBlock');
      let messageWidth = Math.ceil((string.length + 10)*1.2);
      if (messageWidth > 57) messageWidth = 57;
      if (isItSender) {
          const $messegesBlock = $("<div></div>").attr("class", "messegesBlock").css({
              "width": `${messageWidth}%`,
              "margin": "10px auto 0 30px",
              "background": "rgb(45, 43, 43)",
              "border-radius": "20px",
              "padding": "1px"
          });
          $messegeMainBlock.append($messegesBlock);
          const $messegeText = $("<p></p>").text(string).css({
              "color": "#f1f1f1",
              "margin-left": "10px",
              "margin-right": "10px"
          });
          $messegesBlock.append($messegeText);
      } else {
          const $messegesBlock = $("<div></div>").attr({
              class: "messegesBlock notSender",
              id: answerId
          }).css({
              "width": `${messageWidth}%`,
              /*"margin": "10px 30px 0 auto",
              "background": "darkseagreen",
              "border-radius": "20px",
              "padding": "1px"*/
          });
          $messegeMainBlock.append($messegesBlock);
          const $messegeText = $("<p></p>").text(string).css({
              /*"color": "darkslategray",
              "margin-left": "10px",
              "margin-right": "10px"*/
          });
          $messegesBlock.append($messegeText);
      }
  }

  async function createAnswer (string, index, nextQuestId, prop) {
      const $messegeBottomBlock = $('#messegeBottomBlock');
      const $answerBlock = $('<div></div>').attr('class', "answerBlock");
      if (prop === 'level2' || prop === 'level3') $answerBlock.css('width', '350px');
      $answerBlock.on('click', async () => {
          if (string === 'Start again?') {
              await resetLevel(prop);
              $('#content').children().remove();
              messageWindow();
          } else {
              $messegeBottomBlock.empty();
              if (prop === 'level1') {
              await postUserAnswer(string);
              gameObject.map(obj => {
                  if (obj.id === nextQuestId) obj.func(prop);
              });
              } else if (prop === 'level2') {
                await postUserAnswer2(string);
                gameObject2.map(obj => {
                  if (obj.id === nextQuestId) obj.func(prop);
              });
              } else if (prop === 'level3') {
                await postUserAnswer3(string);
                gameObject3.map(obj => {
                  if (obj.id === nextQuestId) obj.func(prop);
              });
              }
          }
      });
      $messegeBottomBlock.append($answerBlock);
      const $answerText = $('<p></p>').attr('class', 'answerText').text(string).css('cursor', 'pointer');
      $answerBlock.append($answerText);
  }

  async function getUserState () {
      try {
          const response = await fetch('/game', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          const json = await response.json();
          return json;
      } catch (e) {
          console.log(e);
      }    
  }

  async function postUserAnswer (string) {
      const obj = { answer: string };
      try {
          const response = await fetch('/answer', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          });
      } catch (e) {
          console.log(e);
      }
  }

  async function postUserAnswer2 (string) {
      const obj = { answer: string };
      try {
          const response = await fetch('/answer2', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          });
      } catch (e) {
          console.log(e);
      }
  }

  async function postUserAnswer3 (string) {
      const obj = { answer: string };
      try {
          const response = await fetch('/answer3', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          });
      } catch (e) {
          console.log(e);
      }
  }

  async function postReadedMesseges (num) {
      const obj = { readedMesseges: num };
      try {
          const response = await fetch ('/readed', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          });
      } catch (e) {
          console.log(e);
      }
  }

  async function resetLevel (currentLevel) {
      const data = {currentLevel: currentLevel};
      try {
          const response = await fetch ('/restart', {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
      } catch (e) {
          console.log(e);
      }
  }

  async function deleteReadedMesseges () {
      try {
          const response = await fetch ('/readed', {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
      } catch (e) {
          console.log(e);
      }
  }

  messageWindow(true);
}