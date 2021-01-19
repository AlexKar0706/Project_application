import {createApp, createMainMenu, windowWidth, windowHeight} from './main.js';
export function calculatorFunc () {
  function calculatorWindow () {
      var calcNum = '';
      var numArr = [''];
      var i = 0;
      var Num;
      function createButtonDesign (str, className) {
          const $button = $('<button></button>').css({width: "unset"}).text(str);
          $button.attr('class', `grid-item ${className}`);
          return $button;
      }
      function createButton (str, className) {
          const $button = createButtonDesign(str, className);
          $button.on('click', e => numArr[i] += e.currentTarget.innerText);
          $gridContent.append($button);
      }
      function createOperation (str) {
          var iconName;
          if (str == '*') iconName = 'times'
          else if (str == '/') iconName = 'divide';
          else if (str == '-') iconName = 'minus'
          else if (str == '+') iconName = 'plus'
          $button = $('<button></button>').css({width: "unset"});
          $button.append($('<i></i>').attr("class", `fa fa-${iconName}`));
          $button.attr('class', `grid-item item2`);
          $button.on('click', () => {
              if (numArr.length > 1 && !Num) return;
              else {
                  if (!Num) {
                  i++;
                  numArr[i] = '';
                  numArr[i] += str;
                  } else {
                      numArr = [Num];
                      i=1;
                      numArr[i] = '';
                      numArr[i] += str;
                  }
              }
          });
          $gridContent.append($button);
      }         
      const $content = $('#content');
      const $appBlock = $('#appBlock');
      $content.css({"background-image": "unset", "background-color": "white"});
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
                      createMainMenu(true);
                  }
              })
          })
      });
      const $numBlock = $('<div></div>').attr('class', 'num-content');
      $content.append($numBlock);
      let $numLine = $('<p></p>').attr('class', 'num-line line1');
      $numBlock.append($numLine);
      $numLine = $('<p></p>').attr('class', 'num-line line2');
      $numBlock.append($numLine);
      const $gridContent = $('<div></div>').attr('class', 'grid-content');
      $content.append($gridContent);
      let $button = $('<button></button>').css({width: "unset"}).text('C');
      $button.attr('class', 'grid-item item2');
      $button.on('click', () => {
          numArr = [''];
          i = 0
      });
      $gridContent.append($button);
      createOperation('/');
      createOperation('*');
      $button = $('<button></button>').css({width: "unset"});
      $button.append($('<i></i>').attr("class", 'fa fa-backspace'));
      $button.attr('class', `grid-item item2`);
      $button.on('click', () => {
          numArr[i] = numArr[i].substring(0, numArr[i].length-1);
          if(numArr[i] == '' && i>0) {
              numArr.pop();
              i--;
          }
      });
      $gridContent.append($button);
      createButton('7', 'item1');
      createButton('8', 'item1');
      createButton('9', 'item1');
      createOperation('-');
      createButton('4', 'item1');
      createButton('5', 'item1');
      createButton('6', 'item1');
      createOperation('+');
      createButton('1', 'item1');
      createButton('2', 'item1');
      createButton('3', 'item1');
      $button = $('<button></button>').css({width: "unset"});
      $button.append($('<i></i>').attr("class", 'fa fa-equals'));
      $button.attr('class', `grid-item equal-button`);
      $button.on('click', () => {
          calcNum = '';
          numArr.forEach(str => calcNum += str);
          calcNum = eval(calcNum).toString();
          i = 0;
          numArr = [''];
          numArr[i] = calcNum;
          $('.line1').text(calcNum);
          Num = '';
          $('.line2').text('');
      });
      $gridContent.append($button);
      $button = createButtonDesign('%', 'item1');
      $button.on('click', () => {
          if (numArr.length > 1 && !Num) return;
              else {
                  if (!Num) {
                  i++;
                  numArr[i] = '';
                  numArr[i] += '/100';
                  } else {
                      numArr = [Num];
                      i=1;
                      numArr[i] = '';
                      numArr[i] += '/100';
                  }
              }
      });
      $gridContent.append($button);
      createButton('0', 'item1');
      $button = createButtonDesign('.', 'item1');
      $button.on('click', () => {
          if(!numArr[i].includes('.')) numArr[i] += '.';
          else return;
      });
      $gridContent.append($button);
      $('.grid-item:not(.equal-button)').on('click', () => {
          calcNum = '';
          numArr.forEach(str => calcNum += str);
          $('.line1').text(calcNum);
          try {
              Num = eval(calcNum).toString();
              if (Num == '55555') $('.line2').text('Viies');
              else if (Num == '666666') $('.line2').text('Kuues');
              else if (Num == '88005553535') $('.line2').text('Проще позвонить чем у кого-то занимать');
              else $('.line2').text(Num);
          } catch (err) {
              $('.line2').text('');
          }
      });
      $('.grid-item').on('mousedown', e => {
          $(e.currentTarget).addClass('pressedButton');
          $(e.currentTarget).on('mouseup mouseleave', e => $(e.currentTarget).removeClass('pressedButton'));
      });
      const $progCalc = $('<button></button>').attr('class', 'progCalc').text('Switch to programmer calculator');
      $progCalc.on('click', () => {
          calcNum = '', numArr = [''], i = 0, Num = '0';
          $gridContent.empty();
          $('.line1').text('');
          $('.line2').text('');
          $progCalc.text('Switch to usual calculator');
          $progCalc.on('click', calculatorWindow);
          $gridContent.addClass('grid-prog');
          let currentMode = 4;
          let formatArr = [], negArr = [];
          let $progFormat, visualStr = '';
          function createProgButton (str, className) {
              const $button = createButtonDesign(str, className);
              $button.on('click', e => {
                  if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
                  else {
                      if (formatArr[3].length < 9) numArr[i] += e.currentTarget.innerText;
                  }
              });
              $gridContent.append($button);
          }
          function createProgOperation (str, className) {
              var iconName = 0, $button;
              if (str == '*') iconName = 'times'
              else if (str == '/') iconName = 'divide';
              else if (str == '-') iconName = 'minus';
              else if (str == '+') iconName = 'plus';

              if (iconName !== 0) {
                  $button = $('<button></button>').css({width: "unset"});
                  $button.append($('<i></i>').attr("class", `fa fa-${iconName}`));
                  $button.attr('class', `grid-item item2`);
              } else $button = createButtonDesign(str, className);
              $button.on('click', () => {
                  if (numArr.length === 2 && !Num) return;
                  else {
                      if (!Num) {
                      i++;
                      numArr[i] = '';
                      numArr[i] += str;
                      } else {
                          numArr = [formatArr[currentMode-1]];
                          i=1;
                          numArr[i] = '';
                          numArr[i] += str;
                      }
                  }
              });
              $gridContent.append($button);
          };
          function printData () {
              if (currentMode === 1) $('.line1, .line2').css('font-size', '1.2em');
              else $('.line1, .line2').css('font-size', '2em');

              if (numArr.length < 2) {
                  calcNum = '';
                  numArr.forEach(str => calcNum += str);
                  if(calcNum === '' || calcNum === '0') formatArr = ['0','0','0','0'];
                  else formatArr = convertNum(toBinary(calcNum, currentMode));
                  $('.line1').text(calcNum);
                  $('.line2').text('');
                  $('.HEX').text('HEX: ' + formatArr[3]);
                  $('.DEC').text('DEC: ' + formatArr[2]);
                  $('.OCT').text('OCT: ' + formatArr[1]);
                  $('.BIN').text('BIN: ' + formatArr[0]);
              } else {
                  calcNum = '', visualStr = '', negArr = null;
                  numArr.forEach(str => visualStr += str);
                  for(let i = 0; i<numArr.length; i++) {
                      if(numArr[i].includes('*') || numArr[i].includes('/') || numArr[i].includes('%')) {
                          if(toDecimal(numArr[0], currentMode) >= 2147483648 && toDecimal(numArr[0], currentMode) < 4294967295) {
                              negArr = [];
                              negArr[0] = '-' + convertNum(toBinary((toDecimal('FFFFFFFF', 4) - toDecimal(numArr[0], currentMode)+1),3))[currentMode-1];
                              for (let j = 1; i<numArr.length; i++) negArr[j] = numArr[j];
                          }
                      }
                  }
                  if (negArr === null) calcNum = createExpression(numArr, currentMode);
                  else calcNum = createExpression(negArr, currentMode);
                  $('.line1').text(visualStr);
                  try {
                      Num = eval(calcNum).toString();
                      if (Num > 4294967295) Num='1';
                      formatArr = convertNum(toBinary(Num, 3));
                      $('.line2').text(formatArr[currentMode-1]);
                  } catch (err) {
                      formatArr = ['0','0','0','0'];
                      $('.line2').text('');
                  }
                  $('.HEX').text('HEX: ' + formatArr[3]);
                  $('.DEC').text('DEC: ' + formatArr[2]);
                  $('.OCT').text('OCT: ' + formatArr[1]);
                  $('.BIN').text('BIN: ' + formatArr[0]);
              }
          }
          function ActivateButton (str) {
              $(str).off('click');
              $(str).on('click', e => {
                  if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
                  else {
                      if (formatArr[3].length < 9) numArr[i] += e.currentTarget.innerText;
                  }
              })
              $(str).removeClass('inactive');
              $(str).on('click', printData);
          };
          formatArr = ['0','0','0','0'];
          $progFormat = $('<p></p>').attr('class', 'prog-format HEX selected-format').text('HEX: 0');
          $progFormat.on('click', e => {
              $('.addMinus').addClass('inactive');
              $('.selected-format').removeClass('selected-format');
              $(e.currentTarget).addClass('selected-format');
              ActivateButton('.2, .3, .4, .5, .6, .7, .8, .9, .A, .B, .C, .D, .E, .F');
              if (formatArr[3] !== '0') numArr = [formatArr[3]];
              else numArr = [''];
              i=0
              calcNum = '';
              numArr.forEach(str => calcNum += str);
              $('.line1').text(calcNum);
              $('.line2').text('');
              currentMode = 4;
          });
          $numBlock.append($progFormat);
          $progFormat = $('<p></p>').attr('class', 'prog-format DEC').text('DEC: 0');
          $progFormat.on('click', e => {
              $('.addMinus').removeClass('inactive');
              $('.selected-format').removeClass('selected-format');
              $(e.currentTarget).addClass('selected-format');
              $('.A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
              ActivateButton('.2, .3, .4, .5, .6, .7, .8, .9');

              if (formatArr[2] !== '0') numArr = [formatArr[2]];
              else numArr = [''];
              i=0
              calcNum = '';
              numArr.forEach(str => calcNum += str);
              $('.line1').text(calcNum);
              $('.line2').text('');
              currentMode = 3;
          });
          $numBlock.append($progFormat);
          $progFormat = $('<p></p>').attr('class', 'prog-format OCT').text('OCT: 0');
          $progFormat.on('click', e => {
              $('.addMinus').addClass('inactive');
              $('.selected-format').removeClass('selected-format');
              $(e.currentTarget).addClass('selected-format');
              $('.8, .9, .A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
              ActivateButton('.2, .3, .4, .5, .6, .7');
              if (formatArr[1] !== '0') numArr = [formatArr[1]];
              else numArr = [''];
              i=0
              calcNum = '';
              numArr.forEach(str => calcNum += str);
              $('.line1').text(calcNum);
              $('.line2').text('');
              currentMode = 2;
          });
          $numBlock.append($progFormat);
          $progFormat = $('<p></p>').attr('class', 'prog-format BIN').text('BIN: 0');
          $progFormat.on('click', e => {
              $('.addMinus').addClass('inactive');
              $('.selected-format').removeClass('selected-format');
              $(e.currentTarget).addClass('selected-format');
              $('.2, .3, .4, .5, .6, .7, .8, .9, .A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
              if (formatArr[0] !== '0') numArr = [formatArr[0]];
              else numArr = [''];
              i=0
              calcNum = '';
              numArr.forEach(str => calcNum += str);
              $('.line1').text(calcNum);
              $('.line2').text('');
              currentMode = 1;
          });
          $numBlock.append($progFormat);
          $('.prog-format').on('mouseenter', e => {
              $(e.currentTarget).addClass('on-format');
              $(e.currentTarget).on('mouseleave', e => $(e.currentTarget).removeClass('on-format'));
          });
          $('.line2').addClass('prog-line');
          createButton('A', 'item1 A');
          createProgOperation('<<', 'item2');
          createProgOperation('>>', 'item2');
          $button = createButtonDesign('CE', 'item2');
          $button.on('click', () => {
              numArr = [''];
              i = 0
          });
          $gridContent.append($button);
          $button = $('<button></button>').css({width: "unset"});
          $button.append($('<i></i>').attr("class", 'fa fa-backspace'));
          $button.attr('class', `grid-item item2`);
          $button.on('click', () => {
              var condition = (numArr.length === 2 && ((numArr[1].length == 2 || (numArr[1].includes('<<') || numArr[1].includes('>>'))) || (numArr[1].length === 3 && numArr[1].includes('>>>'))));
              if(condition) {
                  numArr.pop();
                   i--;
              } else {
                  numArr[i] = numArr[i].substring(0, numArr[i].length-1);
                  if(numArr[i] == '' && i>0) {
                      numArr.pop();
                      i--;
                  }
              }
          });
          $gridContent.append($button);
          createProgButton('B', 'item1 B');
          $button = createButtonDesign('', 'item2');
          $gridContent.append($button);
          createProgOperation('>>>', 'item2');
          createProgOperation('%', 'item2');
          createProgOperation('/', 'item2');
          createProgButton('C', 'item1 C');
          createProgButton('7', 'item1 7');
          createProgButton('8', 'item1 8');
          createProgButton('9', 'item1 9');
          createProgOperation('*', 'item2');
          createProgButton('D', 'item1 D');
          createProgButton('4', 'item1 4');
          createProgButton('5', 'item1 5');
          createProgButton('6', 'item1 6');
          createProgOperation('-', 'item2');
          createProgButton('E', 'item1 E');
          createProgButton('1', 'item1 1');
          createProgButton('2', 'item1 2');
          createProgButton('3', 'item1 3');
          createProgOperation('+', 'item2');
          createProgButton('F', 'item1 F');
          $button = createButtonDesign('+/-', 'item1 inactive addMinus');
          $button.on('click', () => {
              if(numArr.length === 1 && numArr[0].length > 0 && currentMode === 3) {
                  if(!numArr[0].includes('-')) {
                      numArr[0] = '-' + numArr[0];
                  } else if (numArr[0].includes('-')) {
                      numArr[0] = numArr[0].substring(1, numArr[0].length);
                  }
              }
          });
          $gridContent.append($button);
          $button = createButtonDesign('0', 'item1 0');
          $button.on('click', e => {
              for (let i = 0; i<numArr.length; i++) {
                  if (numArr[i].length === 0) return;
              }
              if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
              else {
                  if (formatArr[3].length < 8) numArr[i] += e.currentTarget.innerText;
              }
          });
          $gridContent.append($button);
          $button = $('<button></button>').css({width: "unset"});
          $button.append($('<i></i>').attr("class", 'fa fa-equals'));
          $button.attr('class', `grid-item item2 equal-button-prog`);
          $button.on('click', () => {
              if (Num) {
                  numArr = [formatArr[currentMode-1]];
                  i = 0
              }
              else return;
          });
          $gridContent.append($button);
          $('.grid-item').on('click', printData);
      });
      $content.append($progCalc);
  }

  function createExpression (arr, currentMode) {
      let newStr = '', tempStr = '', isItNumber, isNextCharNumber, tempArr = [];
      for(let i =0; i<arr.length; i++) {
          for(let j = 0; j<arr[i].length; j++) {
              isItNumber = (arr[i].charCodeAt(j) > 47 && arr[i].charCodeAt(j) < 58) || (arr[i].charCodeAt(j) > 64 && arr[i].charCodeAt(j) < 71);
              isNextCharNumber = (arr[i].charCodeAt(j+1) > 47 && arr[i].charCodeAt(j+1) < 58) || (arr[i].charCodeAt(j+1) > 64 && arr[i].charCodeAt(j+1) < 71);
              if(!isItNumber) newStr += arr[i][j];
              else {
                  tempStr += arr[i][j];
                  if(!isNextCharNumber) newStr += toDecimal(tempStr, currentMode);
              }
          }
          tempArr[i] = newStr;
          newStr = '', tempStr = '';
      }
      return tempArr.join('');
  }

  function convertNum (num) {
      let numArr = [];
      num = num.toString();
      for(let i = 0; i<num.length; i++) {
          numArr[i] = num[i];
      }
      //vosmerichnaja
      let octModulo = numArr.length%3;
      let octArr = [];
      let str='';
      if(octModulo == 1) {
          str = '001';
          octArr[0] = str;
          numArr.shift();
      } else if (octModulo == 2) {
          str = '0';
          str += numArr.shift();
          str += numArr.shift();
          octArr[0] = str;
      }
      for (let k = 0; k<numArr.length/3; k++) {
          str = numArr[0+3*k] + numArr[1+3*k] + numArr[2+3*k];
          octArr[octArr.length] = str;
      }
      for (let i = 0; i<octArr.length; i++) {
          str = (octArr[i][0] * 2**2 +  octArr[i][1] * 2**1 + octArr[i][2] * 2**0).toString();
          octArr[i] = str;
      }
      //desjatirichnaja
      let decNum = 0;
      for(let i = 0; i<num.length; i++) {
          numArr[i] = num[i];
      }
      if (numArr.length === 32) {
          numArr = numArr.map(str => str === '1' ? '0' : '1');
          while (numArr) {
              if(numArr[0] === '0') numArr.shift();
              else break;
          }
          decNum = '-' + (Number(toDecimal(numArr.join(''), 1))+1)
      }else for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 2 ** i;
      //Shesdnatsatirichnaja
      numArr = [];
      for(let i = 0; i<num.length; i++) {
          numArr[i] = num[i];
      }
      let hexModulo = numArr.length%4;
      let hexArr = [];
      str='';
      if(hexModulo == 1) {
          str = '0001';
          hexArr[0] = str;
          numArr.shift();
      } else if (hexModulo == 2) {
          str = '00';
          str += numArr.shift();
          str += numArr.shift();
          hexArr[0] = str;
      } else if (hexModulo == 3) {
          str = '0';
          str += numArr.shift();
          str += numArr.shift();
          str += numArr.shift();
          hexArr[0] = str;
      }
      for (let k = 0; k<numArr.length/4; k++) {
          str = numArr[0+4*k] + numArr[1+4*k] + numArr[2+4*k] + numArr[3+4*k];
          hexArr[hexArr.length] = str;
      }
      for (let i = 0; i<hexArr.length; i++) {
          str = (hexArr[i][0] * 2**3 +  hexArr[i][1] * 2**2 + hexArr[i][2] * 2**1 + hexArr[i][3] * 2**0);
          if (str < 10) str.toString();
          else {
              switch (str) {
                  case 10:
                      str = 'A';
                      break;
                  case 11:
                      str = 'B';
                      break;
                  case 12:
                      str = 'C';
                      break;
                  case 13:
                      str = 'D';
                      break;
                  case 14:
                      str = 'E';
                      break;
                  case 15:
                      str = 'F';
                      break;
              }
          }
          hexArr[i] = str;
      }
      return [num, octArr.join(''), decNum.toString(), hexArr.join('')];
  }

  function toBinary (num, currentMode) {
      var negStr;
      if(num[0] == '-') {
          negStr = num.substring(1, num.length);
          if(currentMode === 2) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode)+1,3);
          else if (currentMode ===3) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode)+1,3);
          else if(currentMode === 4) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode),3);
      }
      //vosmerichnaja
      if (currentMode === 1) return num;
      else if (currentMode === 2) {
          var tempNum = num.toString(), octNum, tempArr = [], octModulo, octArr = [];
          for (let i = 0; i<tempNum.length; i++) {
              octNum = Number(tempNum[i]);
              while (octNum) {
                  octModulo = octNum%2;
                  if (octModulo) tempArr.unshift(1);
                  else tempArr.unshift(0);
                  octNum = Math.floor(octNum/2);
              }
              if (i>0) {
                  if (tempArr.length == 2) tempArr.unshift(0);
                  else if (tempArr.length == 1) {
                      tempArr.unshift(0);
                      tempArr.unshift(0);
                  } else if (tempArr.length == 0) tempArr = ['0', '0', '0'];
              }
              octArr.push(tempArr.join(''));
              tempArr = [];
          }
          return octArr.join('');
      } else if (currentMode === 3) { //desjatirichnaja
          var tempNum = num, decModulo, decArr = []; 
          while (tempNum) {
              decModulo = tempNum%2;
              if (decModulo) decArr.unshift(1);
              else decArr.unshift(0);
              tempNum = Math.floor(tempNum/2);
          }
          return decArr.join('');
      } else if (currentMode === 4) {//shesdnatsjatirichnaja
          var tempNum = num.toString(), tempArr = [], hexNum, hexModulo, hexArr = [];
          for (let i = 0; i<tempNum.length; i++) {
              if (tempNum[i] < 10) hexNum = Number(tempNum[i]);
              else {
                  switch (tempNum[i]) {
                      case 'A':
                          hexNum = 10;
                          break;
                      case 'B':
                          hexNum = 11;
                          break;
                      case 'C':
                          hexNum = 12;
                          break;
                      case 'D':
                          hexNum = 13;
                          break;
                      case 'E':
                          hexNum = 14;
                          break;
                      case 'F':
                          hexNum = 15;
                          break;
                  }
              }
              while (hexNum) {
                  hexModulo = hexNum%2;
                  if (hexModulo) tempArr.unshift(1);
                  else tempArr.unshift(0);
                  hexNum = Math.floor(hexNum/2);
              }
              if (i>0) {
                  if (tempArr.length == 3) tempArr.unshift(0);
                  else if (tempArr.length == 2) {
                      tempArr.unshift(0);
                      tempArr.unshift(0);
                  } else if (tempArr.length == 1) {
                      tempArr.unshift(0);
                      tempArr.unshift(0);
                      tempArr.unshift(0);
                  }else if (tempArr.length == 0) tempArr = ['0', '0', '0', '0'];
              }
              hexArr.push(tempArr.join(''));
              tempArr = [];
          }
          return hexArr.join('');
      }
  }

  function toDecimal(num, currentMode) {
      if (currentMode === 1){//dvoichnaja
          let decNum = 0;
          for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 2 ** i;
          return decNum.toString();
      } else if (currentMode === 2) {//vosmerichanja
          let decNum = 0;
          for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 8 ** i;
          return decNum.toString();
      } else if (currentMode === 3) return num;
      else if (currentMode === 4) {//shesdnatsjatirichnaja
          let decNum = 0, tempNum;
          for (let i = num.length-1, j=0; i>=0; i--, j++) {
              if (!(num[j] < 10)) {
                  switch (num[j]) {
                      case 'A':
                          tempNum = 10;
                          break;
                      case 'B':
                          tempNum = 11;
                          break;
                      case 'C':
                          tempNum = 12;
                          break;
                      case 'D':
                          tempNum = 13;
                          break;
                      case 'E':
                          tempNum = 14;
                          break;
                      case 'F':
                          tempNum = 15;
                          break;
                  }
              } else tempNum = Number(num[j]);
              decNum += tempNum * 16 ** i;
          }
          return decNum.toString();
      }
  }
  calculatorWindow();
}