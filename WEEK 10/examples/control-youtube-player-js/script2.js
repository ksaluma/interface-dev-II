var player,
    time_update_interval = 0;

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'Xa0Q0J5tOP0',
        playerVars: {
            controls: 0,
            autoplay: 1,
            disablekb: 1,
            enablejsapi: 1,
            iv_load_policy: 3,
            modestbranding: 1,
            showinfo: 0,
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);

//replacing with vanilla java
    var volumeInput= document.getElementById('volume-input');

    volumeInput.value= Math.round(player.getVolume())


//     $('#volume-input').val(Math.round(player.getVolume()));
}


// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.

    //replacing with vanilla Java
    var currentTime=
    document.getElementById('current-time');
    currentTime.innerHTML= formatTime(
        player.getCurrentTime())


    var duration=
    document.getElementById('duration');
    duration.innerHTML= formatTime(
        player.getDuration())



    // $('#current-time').text(formatTime( player.getCurrentTime() ));
    // $('#duration').text(formatTime( player.getDuration() ));
}


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.

    //replacing with vanilla Java
    var progressBar =document.getElementById('progress-bar');
    progressBar.value= (player.getCurrentTime() / player.getDuration()) * 100;

    // $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}


// Progress bar

var progressBar =document.getElementById('progress-bar');
progressBar.addEventListener('mouseup', function (e)
{

// $('#progress-bar').on('mouseup', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});



// Playback

var play= document.getElementById('play')
play.addEventListener('click', function(e){
    player.playVideo();
}
);

// $('#play').on('click', function () {
//     player.playVideo();
// });


$('#pause').on('click', function () {
    player.pauseVideo();
});


// Sound volume

var muteToggle= document.getElementById('mute-toggle');
muteToggle.addEventListener('click', function() {
    var mute_toggle = this;

    if(player.isMuted()){
        player.unMute();
        mute_toggle.innerHTML   = 'volume_up'; //calling icons from HTML
    }
    else{
        player.mute();
        mute_toggle.innerHTML   = 'volume_off';
    }

});

// $('#mute-toggle').on('click', function() {
//     var mute_toggle = $(this);

//     if(player.isMuted()){
//         player.unMute();
//         mute_toggle.innerHTML   = 'volume_up';
//     }
//     else{
//         player.mute();
//         mute_toggle.innerHTML   = 'volume_off';
//     }
// });

var volumeInput = document.getElementById('volume-input');
volumeInput.addEventListener('change', function(){
    player.setVolume(this.value);
});


// Other options

var speed = document.getElementById('speed');
speed.addEventListener('change', function(){
    player.setPlaybackRate(this.value);
});



// $('#speed').on('change', function () {
//     player.setPlaybackRate($(this).val());
// });

$('#quality').on('change', function () {
    player.setPlaybackQuality($(this).val());
});


// Playlist

$('#next').on('click', function () {
    player.nextVideo()
});

$('#prev').on('click', function () {
    player.previousVideo()
});


// Load video

$('.thumbnail').on('click', function () {

    var url = $(this).attr('data-video-id');

    player.cueVideoById(url);

});


// Helper Functions

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    // seconds = seconds < 10 ? '0' + seconds : seconds;

    if(seconds < 10){
        seconds='0'+seconds;
    }

    return minutes + ":" + seconds;
}


$('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
});














