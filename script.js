const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to use to select a media stream, pass to video element, then play 
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        };
    }
    catch (error){
        console.log('We have an Error here', error);
    }
}

button.addEventListener('click', async ()=>{
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// on load
selectMediaStream();