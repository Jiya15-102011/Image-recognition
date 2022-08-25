Webcam.attach(camera);
camera=document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format:'jpeg',
    jpeg_quality: 90
});
function y(){
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="w" src="'+data_uri+'"/>';
    } );
}

console.log("ml5 version is ",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rthDJI7Cu/model.json',n);
function n(){
    console.log("model is loaded");
}

function j(){
z=document.getElementById("w");
x.classify(z,answer);
}
function answer(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
document.getElementById("j").innerHTML=result[0].label;
document.getElementById("b").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
}
}