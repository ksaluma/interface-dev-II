var player,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
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
    updateProgressBar();
    updateTimerDisplay();

    clearInterval(time_update_interval);

    time_update_interval= setInterval(function() {
        if(player.getPlayerState()===1) {
            updateProgressBar();
        }
    }, 1000);


// Load video

$('.thumbnail').on('click', function () {

    var url = $(this).attr('data-video-id');

    player.cueVideoById(url);

});

$("#video_wrapper").hover(function(){
    $('#controls_placeholder').show();
},function(){
    $('#controls_placeholder').hide();
});
}

//previous and next videos

$('#next').on('click', function() {
    player.nextVideo();
});

$('#prev').on('click', function() {
    player.previousVideo();
});

//mute and volume toggle

$('#mute-toggle').on('click', function() {
    var mute_toggle= $(this);
    if(player.isMuted()){
        player.unMute();
        mute_toggle.text('volume_up');
    }
    else{
        player.mute();
        mute_toggle.text('volume_off');
    }
});

//play toggle

$('#play-toggle').on('click', function(){
    var play_toggle= $(this);
    var playing= player.getPlayerState();

    if(playing===1){
        player.pauseVideo();
        play_toggle.text('play_arrow');
    }
    else if(playing===2){
        player.playVideo();
        play_toggle.text('pause');
    }

});

//Update Progress Bar

function updateProgressBar(){
    $('#progress-bar').val(player.getCurrentTime()/player.getDuration()*100);
}

//scrub

$('#progress-bar').on('mouseup', function(e){
//calculate new time for the video
    var newTime= player.getDuration()*(e.target.value/100);
    player.seekTo(newTime);

});

//

function updateTimerDisplay(){
    //update current time display
    $('#current-time').text(formatTime(player.getCurrentTime()));
    $('#duration').text(formatTime(player.getDuration()));
}


//volume

$('#volume-input').on('change', function() {
    player.setVolume($(this).val());
});
$('#speed').on('change', function() {
    player.setPlaybackRate($(this).val());
});
$('#quality').on('change', function() {
    player.setPlaybackQuality($(this).val());
});

// Helper Functions

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

