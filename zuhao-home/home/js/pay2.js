$(function () {
    $('#video').on('play',function () {
        $('#video-button').attr('src','images/pause.png');
    }).on('pause',function () {
        $('#video-button').attr('src','images/play.png');
    });
    //点击btn则播放/暂停视频
    $('#video-button').click(function () {
        if(video.paused){    //视频当前处于暂停状态
            video.play();
        }else {           //视频当前处于播放状态
            video.pause();
        }
    });
    //鼠标进入#container则显示按钮，移除则隐藏
    $('#video').parent().on('mouseenter',function () {
        $('#video-button').show()
    }).on('mouseleave',function () {
        $('#video-button').hide()
    })
});