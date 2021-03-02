jQuery(document).ready(function ($) {

    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 1500);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

//************** */
// Selecting UI
var click_cnt=0;

function select_ui(){
    //determine number of clicks on button
    click_cnt = parseInt(click_cnt)+parseInt(1);

    var advanced = document.getElementById("advanced_ui");
    var boring = document.getElementById("boring_ui");
    var form = document.getElementById("form1");
    if(click_cnt %2 != 0 || click_cnt == 1){
        parent.document.getElementById("menu").className = "glyphicon glyphicon-menu-up";
        boring.style.display = "block";
        advanced.style.display = "block";
        form.style.display = "none";
    }
    else{
        parent.document.getElementById("menu").className = "glyphicon glyphicon-menu-down";
        boring.style.display = "none";
        advanced.style.display = "none";
        form.style.display = "block";
    }
    

}

//Submit first form
function submit1(){
    
    alert("Again No one cares you noob coder");
}

//audio
// var collection = [];// final collection of sounds to play
// var loadedIndex = 0;// horrible way of forcing a load of audio sounds

// // remap audios to a buffered collection
// function init(audios) {
//     for (var i = 0; i < audios.length; i++) {
//         var audio = new Audio(audios[i]);
//         collection.push(audio);
//         buffer(audio);
//     }
// }

// // did I mention it's a horrible way to buffer?
// function buffer(audio) {
//     if (audio.readyState == 4) return loaded();
//     setTimeout(function () { buffer(audio); }, 100);
// }

// // check if we're leady to dj this
// function loaded() {
//     loadedIndex++;
//     if (collection.length == loadedIndex) playLooped();
// }

// // play and loop after finished
// function playLooped() {
//     var audio = Math.floor(Math.random() * (collection.length));
//     audio = collection[audio];
//     audio.play();
//     setTimeout(playLooped, audio.duration * 1000);
// }

// init([
//     'http://static1.grsites.com/archive/sounds/background/background005.mp3',
//     'http://static1.grsites.com/archive/sounds/background/background006.mp3',
//     'http://static1.grsites.com/archive/sounds/background/background007.mp3'
// ]);
