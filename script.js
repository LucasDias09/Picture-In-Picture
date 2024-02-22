const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMdiaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error
    console.log("whoops, error here", error);
  }
}

button.addEventListener("click", async () => {
  // Diseable Buton
  button.disabled = true;
  // Strat picture in picture
  await videoElement.requestPictureInPicture();
  //   Reset Button
  button.disabled = false;
});
//on Load
selectMdiaStream();
