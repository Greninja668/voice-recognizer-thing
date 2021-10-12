//https://teachablemachine.withgoogle.com/models/8B_Zcp32k/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8B_Zcp32k/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
 if (error) {
  console.error(error)   
 } else {
    console.log("gotResult")
    randomnumber_r=Math.floor(Math.random()*255)+1
    randomnumber_g=Math.floor(Math.random()*255)+1 
    randomnumber_b=Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label
    document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+" %"
    document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")"
    document.getElementById("result_confidence").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")"
    img=document.getElementById('alien1')
    img1=document.getElementById('alien2')
    img2=document.getElementById('alien3')
    img3=document.getElementById('alien4')
if (results[0].label== "Gears") {
   img.src="aliens-01.gif"
    img1.src="aliens-02.png"
    img2.src="aliens-03.png"
    img3.src="aliens-04.png"
} else if  (results[0].label== "clapping") {
    img.src="aliens-01.png"
     img1.src="aliens-02.gif"
     img2.src="aliens-03.png"
     img3.src="aliens-04.png"    
}
else if  (results[0].label== "snorting") {
    img.src="aliens-01.png"
     img1.src="aliens-02.png"
     img2.src="aliens-03.gif"
     img3.src="aliens-04.png"
}
else {
    img.src="aliens-01.png"
     img1.src="aliens-02.png"
     img2.src="aliens-03.png"
     img3.src="aliens-04.gif"   
}}}
