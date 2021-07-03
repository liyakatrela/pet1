//Create variables here
var dog,happyDog, database, foodS, foodStock , dog1
function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);  
  foodStock= database.ref('/Food');
  foodStock.on("value",realStock);
  dog1 = createSprite(200,200,30,20);
 dog1.addImage(dog);
 dog1.scale = 0.5;

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happyDog);
}

  drawSprites();
  //add styles here
 
  

  
}
  //Function to read values from DB
  function realStock(data){
    foodS=data.val();
  }
  //Function to write values in DB
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })
  }



