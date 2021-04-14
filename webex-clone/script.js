var videos = document.querySelectorAll(".webcam-video");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        for (video of videos) {
            video.srcObject = stream;
        }
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}