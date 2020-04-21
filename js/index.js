console.clear();

;(function(){
  
navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

if ( !navigator.getUserMedia ) { return false; }
  
  var width = 0, height = 0;
  
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
      ctx.id = "canvas"
  document.querySelector(".div_capturar").appendChild(canvas);
  
  var video = document.createElement('video'),
      track;
  video.setAttribute('autoplay',true);
  
  window.vid = video;
  
  function getWebcam(){ 
  
    navigator.getUserMedia({ video: true, audio: false }, function(stream) {
      video.srcObject = stream;
      track = stream.getTracks()[0];
    }, function(e) {
      console.error('Rejected!', e);
    });
  }
  
  getWebcam();
  
  var rotation = 0,
      loopFrame,
      centerX,
      centerY,
      twoPI = Math.PI * 2;
  
  function loop(){
    
    loopFrame = requestAnimationFrame(loop);
    
    ctx.save();

    ctx.globalAlpha = 0.1;
    ctx.drawImage(video, 0, 0, width, height);
    
    ctx.restore();

  }
  
  function startLoop(){ 
    loopFrame = loopFrame || requestAnimationFrame(loop);
  }
  
  video.addEventListener('loadedmetadata',function(){
    width = canvas.width = video.videoWidth;
    height = canvas.height = video.videoHeight;
    /*centerX = width / 2;
    centerY = height / 2;*/
    startLoop();
  });
  
  
})()
