let windowHeight = $(window).height();
let windowWidth = $(window).width();
if (windowWidth > 500) {
    windowWidth = 500;
    windowHeight -= windowHeight/10;
}
else {
    if (windowHeight > 600) windowHeight = 600;
    else windowHeight -= windowHeight/10;
}
import { snakeFunc } from './snake.js';
import { calculatorFunc } from './calculator.js';
import { gameFunc } from './game.js';

$(document).ready(() => {
    const $content = $('#content');
    const $name = $('#name');
    const $startButton = $('#start');
    const divCss = {
        width: windowWidth,
        height: windowHeight,
        background: "black",
        "border-radius": "5%"
    };
  
    $name.remove();
    $startButton.remove();
    const customDiv = $("<div></div>").attr('id','customDiv').css(divCss);
    $content.wrap(customDiv);
    createMainMenu();
});

function createMainMenu(fromApp) {
    const $content = $('#content');
    if(!fromApp) {
    $('#customDiv').css({height: `${windowHeight + 30}`, "border-radius": "0% 0% 5% 5%"});
    $content.css({"background-image": 'url("background2.jpg")', "background-color": "unset"});
    if ($('#topPanel').length == 0) {
    const topPanel = $('<div></div>').attr('id', 'topPanel');
    $content.before(topPanel);
    const topPanelText = $('<p></p>').attr('id', 'topPanelText').text('Tele 2');
    topPanel.append(topPanelText);
    const $topPanelDiv = $('<div></div>').attr('class', 'topPanelDiv');
    topPanel.append($topPanelDiv);
    const $bars = $('<i></i>').attr('class', 'fa fa-cog cog');
    $topPanelDiv.append($bars);
    const $optionsDiv = $('<div></div>').attr('class', 'options hide');
    $topPanelDiv.append($optionsDiv);
    $optionsDiv.append($('<p></p>').attr('class', 'option-button first-option').text('Logout'));
    $optionsDiv.append($('<p></p>').attr('class', 'option-button second-option').text('Reset progress'));
    $bars.on('click', () => $optionsDiv.slideToggle(200, () => $optionsDiv.toggleClass('hide')));
    $('.first-option').on('click', async () => {
        await logoutUser();
    });
    $('.second-option').on('click', async () => {
        await deleteUserState();
        window.location.reload(false);
    });
    }
    const appBlock = $('<div></div>').attr('id', 'appBlock').css({width: windowWidth, height: windowHeight});
    $content.append(appBlock);
    }
    const $appBlock = $('#appBlock');
    createApp('Snake');
    const $snake = $('#Snake');
    $snake.on('click', () => {
        const $whiteBlock = $('<div></div>').attr('class', 'white-block')
        $appBlock.append($whiteBlock);
        $whiteBlock.animate({
            'margin-top': '0',
            width: windowWidth,
            height: windowHeight
        }, 200, snakeFunc);
    });
    createApp('Message');
    const $message = $('#Message');
    $message.on('click', () => {
        $appBlock.children().empty();
        $message.css({
            "overflow-y": "hidden",
            "background": "rgb(31, 29, 29)",
            "opacity": "0.5"
        });
        const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
        $message.append($messegeTopBlock);
        const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
            "vertical-align": "super",
            "padding-left": "1.5px",
            "font-size": "5px",
            "cursor": "pointer"
        });
        $messegeTopBlock.append($arrow);
        const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": "0",
        "padding-top": "1px",
        "vertical-align": "super",
        "font-size": "5px",
        "padding-left": "1.5px",
        "display": "inline-block"}).text("Messages");
        $messegeTopBlock.append($text);
        let senderName = '8-800-555-35-35';
        let $block = $('<div></div>').attr({
            'class': 'senderBlock',
            'id': senderName
        });
        $message.append($block);
        let $sender = $('<h3></h3>').attr('class', 'sender').text('1 chapter. Mental health hospital').css({"font-size": "5px", "margin": "1px 0 0.5px 0"});
        let $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
        let $senderText = $('<p></p>').attr('class', 'senderText').text('...').css({"font-size": "5px", "margin": "0 0 0.5px 0"});
        $block.append($sender);
        $block.append($unreadedMesseges);
        $block.append($senderText);
        senderName = '55644994';
        $block = $('<div></div>').attr({
            'class': 'senderBlock',
            'id': senderName
        });
        $message.append($block);
        $sender = $('<h3></h3>').attr('class', 'sender').text('2 chapter. Monster').css({"font-size": "5px", "margin": "1px 0 0.5px 0"});
        $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
        $senderText = $('<p></p>').attr('class', 'senderText').text('...').css({"font-size": "5px", "margin": "0 0 0.5px 0"});
        $block.append($sender);
        $block.append($unreadedMesseges);
        $block.append($senderText);
        senderName = '515253545';
        $block = $('<div></div>').attr({
            'class': 'senderBlock',
            'id': senderName
        });
        $message.append($block);
        $sender = $('<h3></h3>').attr('class', 'sender').text('3 chapter. Book').css({"font-size": "5px", "margin": "1px 0 0.5px 0"});
        $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
        $senderText = $('<p></p>').attr('class', 'senderText').text('...').css({"font-size": "5px", "margin": "0 0 0.5px 0"});
        $block.append($sender);
        $block.append($unreadedMesseges);
        $block.append($senderText);
        $(function () {
            $message.animate({
                width: windowWidth,
                height: windowHeight,
                opacity: "1"
            }, {
                duration: 200,
                progress: function(animation, progress, msRemaining) {
                    if($message.width() >= 200) {
                        $appBlock.children('div:not(#Message)').remove();
                        $message.css({
                            'margin-top': '0',
                            'border-radius': '5%'
                        });
                        $message.unwrap('#appBlock');
                    }
                },
                complete: function() {
                    $content.css({"background-image": "unset", "background-color": "rgb(31, 29, 29)"});
                    $message.children().unwrap($message);
                    gameFunc();
                }
            })
            $('.sender').animate({
                "font-size": "1.17em",
                "margin": "10px 0 5px 0"
            }, 200)
            $('.senderText').animate({
                "font-size": "1em",
                "margin": "0 0 5px 0"
            }, 200)
            $('.fa-arrow-left').animate({
                "padding-left": "15px",
                "font-size": "1em",
            }, 200)
            $('#messageText').animate({
                "padding-top": "10px",
                "font-size": "2em",
                "padding-left": "15px",
            }, 200, function () {$(this).css("vertical-align", "unset")});
        });
    });
    createApp('Chess');
    createApp('Calculator');
    const $calculator = $('#Calculator');
    $calculator.on('click', () => {
        const $whiteBlock = $('<div></div>').attr('class', 'white-block')
        $appBlock.append($whiteBlock);
        $whiteBlock.animate({
            'margin-top': '0',
            width: windowWidth,
            height: windowHeight
        }, 200, calculatorFunc);
    });
}

function createApp (appName) {
        if($(`#${appName}`).length) return;
    const $appBlock = $('#appBlock');
    const app = $('<div></div>').attr({class: 'app', id: appName});
    const appIconWrap = $("<p></p>").css("text-align", "center");
    var appIcon;
    if (appName === 'Calculator') appIcon = $('<i></i>').attr('class', 'fa fa-calculator').css('font-size', '2.4em');
    else if (appName === 'Snake') appIcon = $('<img>').attr('src', 'snake.jpg').css({
        height: '35px',
        'border-radius': '70%'
    });
    else if (appName === 'Message') appIcon = $('<img>').attr('src','messege_icon.png').css({
        'max-width': '36px',
        'max-height': '36px',
    });
    else if (appName === 'Chess') appIcon = $('<img>').attr('src', 'white-king.png').css({
        'max-width': '35px',
        'max-height': '35px',
    });
    else appIcon = $('<img>').attr('src', 'message.jpg');
    const appText = $('<p></p>').text(appName).attr('class', appName); 
    $appBlock.append(app);
    app.append(appIcon, appText);
    appIcon.wrap(appIconWrap);
}

async function deleteUserState () {
    try {
        const response = await fetch ('/game', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        console.log(e);
    }
}


async function logoutUser () {
    try {
        const response = await fetch('/logout', {
            method: 'DELETE',
            header: {
                'Content-Type': 'aplication/json'
            },
            redirect: 'follow'
        });
        if (response.redirected) window.location.href = response.url;
    } catch (e) {
        console.log(e);
    }
}

export { createApp, createMainMenu, windowWidth, windowHeight};