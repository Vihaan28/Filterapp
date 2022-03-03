nosex= 0;
nosey= 0;

filter = "";
function preload(){

     clown_nose = loadImage("https://i.postimg.cc/9FTYvXfF/Clown-nose-large.png");
     glasses = loadImage("https://i.postimg.cc/mgsyRxc3/glasses.png");
     bunny_ears = loadImage("https://i.postimg.cc/QNqftd34/bunny-ear.png");
     hats = loadImage("https://i.postimg.cc/85FcJ5F2/hat.png");
     policee = loadImage("https://i.postimg.cc/kGK5spvw/police.png");
     santaa = loadImage("https://i.postimg.cc/FR2Rj437/santa.png");
}

function setup(){
 canvas= createCanvas(550 , 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(550 , 500);
 video.hide();

 poseNet = ml5.poseNet( video , modelLoaded);
 poseNet.on( "pose" , gotpose);
}

function draw(){
image( video , 0 ,0 ,550 , 500);
 if(filter == "setglass"){
      
image( glasses , nosex-100 , nosey -100 , 200 , 240);
 }
 else if ( filter == "setclown"){

     image( clown_nose , nosex-20 , nosey - 20 , 50 , 60);
 }

 else if( filter == "setbunny"){
     image( bunny_ears , nosex-120 , nosey - 250 , 200 , 160);
 }

 else if( filter == "sethat"){
     image( hats , nosex-120 , nosey - 250 , 200 , 160);
 }

 else if( filter == "setpolice"){
     image( policee , nosex-250 , nosey - 250 , 500 , 400);
 }

 else if( filter == "setsanta"){
     image( santaa , nosex-120 , nosey - 250 , 220 , 200);
 }

 

}

function take_snapshot(){
     save("My_Clown_Filter_image.png");
}

function modelLoaded(){
     console.log("PoseNet Loaded");

}

function gotpose(results){
     if(results.length>0){

          console.log(results);

          nosex = results[0].pose.nose.x;
          nosey = results[0].pose.nose.y;

          console.log( "x = " + results[0].pose.nose.x);
          console.log( "y = " + results[0].pose.nose.y);
     }
}

function glass(){
   filter = "setglass";
}

function clown(){
     filter = "setclown";
}

function bunny(){
     filter = "setbunny";
}
function hat(){
     filter = "sethat";
}
function police(){
     filter = "setpolice";
}
function santa(){
     filter = "setsanta";
}

