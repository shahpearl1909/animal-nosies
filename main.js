function classifier(){
    navigator.mediaDevices.getUserMedia({audio:true });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TjOt2hOGx/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }else{
        console.log(result);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;

        document.getElementById("sound_name").innerHTML="I can hear - "+result[0].label;
        document.getElementById("confident").innerHTML="accuracy - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound_name").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("confident").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";



        if (result[0].label == "dog"){
         document.getElementById("animals").src="dog.gif";
        }else if (result[0].label == "cow"){
            document.getElementById("animals").src="cow.gif";
        }else if (result[0].label == "horse"){
            document.getElementById("animals").src="horse.gif";
        }else {
            document.getElementById("animals").src="https://static.vecteezy.com/system/resources/previews/000/654/477/original/speaker-icon-image-vector.jpg";
        }
    }
}
