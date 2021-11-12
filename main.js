var prediction="";
Webcam.set({
width:300,
height:250,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_imaged"  src="'+data_uri+'"/>';
});
}
console.log('ml5version' , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2NhEvjCQi/model.json',modelLoaded);
function modelLoaded() {
console.log('Model Loaded');
}
function speak() {
var synth= window.speechSynthesis;
speakperson= "Prediction Is "+ prediction;
var utterThis = new SpeechSynthesisUtterance(speakperson);
synth.speak(utterThis);
}
