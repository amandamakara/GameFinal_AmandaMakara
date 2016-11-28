var hero;
//declaring hero
var heroState = 'regular';
//declare hero state
var bullets;
//declaring group of sprites
var enemies;
//declaring enemy sprites
var canvasMultiplier = 40;
//can change the aspect ratio



var enemyRate = 150;
//how many enemies fall per frame
var powerRate = 650;
var enemyAngle = 60;
var enemyDrunkness = 50;
var enemyDrunkDirection = 2;
//drunk direction is the magnitude of direction shifts
var heroSpeed = 13;
//setting the speed of the hero within 
var explosionDensity = 20;
//how many particles are released when an explosion occurs 
var score = 0;
//sets the score counter at 0
var gameState = 'startUp';
//this is the start screen of the game when it begins
var heroHealth = 3;
//allows the hero to be hit 3 times before lose
var powerUps;
//declares powerup sprites


//var enemyOneDefault, enemyTwoDefault, enemyThreeDefault;
//declaring enemy sprite image
var bg_level1, bg_level2, bg_level3, bg_title, bg_win, bg_lose, bg_countdown;
//variables for background images
var health_empty, health_half, health_full
  //health bar
//var heroDefault, heroLeft, heroRight;
//creat variable for different animations
var powerUpImg;
//declare powerup image
var bulletImg


var count1Downtimer = 0;
var count2Downtimer = 0;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 15;

var soundWhip;
var soundEnemyDie;
var soundGrunt;
var soundPower;

var startMusic;
var levelOneMusic;
var levelTwoMusic;
var levelThreeMusic;

//ADDING ANIMATION THROUGH SPRITE SHEET
var gpa_sheet;

var gpa_animation;
var gpa_frames = [
      {'name':'gpa_default01','frame':{'x':0, 'y':0, 'width':256, 'height':256}},
      {'name':'gpa_default02','frame':{'x':256, 'y':0, 'width':256, 'height':256}},
      {'name':'gpa_default03','frame':{'x':512, 'y':0, 'width':256, 'height':256}},
      {'name':'gpa_default04','frame':{'x':768, 'y':0, 'width':256, 'height':256}},
      {'name':'gpa_default05','frame':{'x':1024, 'y':0, 'width':256, 'height':256}},
   ];

//ADDING LEFT ANIMATION THROUGH SPRITE SHEET   
var gpa_sheet_left;

var gpa_left_animation;
var gpa_left_frames = [
    {'name':'gpa_left01','frame':{'x':0,'y':256, 'width':256,'height':256}},
    {'name':'gpa_left02','frame':{'x':256,'y':256, 'width':256,'height':256}},
    {'name':'gpa_left03','frame':{'x':512,'y':256, 'width':256,'height':256}},
    {'name':'gpa_left04','frame':{'x':768,'y':256, 'width':256,'height':256}},
    {'name':'gpa_left05','frame':{'x':1024,'y':256, 'width':256,'height':256}},
  ];

//ADDING RIGHT ANIMATION THROUGH SPRITE SHEET
var gpa_sheet_right;

var gpa_right_animation;
var gpa_right_frames = [
    {'name':'gpa_right01','frame':{'x':0,'y':512, 'width':256,'height':256}},
    {'name':'gpa_right02','frame':{'x':256,'y':512, 'width':256,'height':256}},
    {'name':'gpa_right03','frame':{'x':512,'y':512, 'width':256,'height':256}},
    {'name':'gpa_right04','frame':{'x':768,'y':512, 'width':256,'height':256}},
    {'name':'gpa_right05','frame':{'x':1024,'y':512, 'width':256,'height':256}},
  ];
  
//ADDING ENEMY_ONE ANIMATION THROUGH SPRITE SHEET
var enemey_one_sheet;

var enemy_one_animation;
var enemy_one_frames = [
    {'name':'enemy_one01','frame':{'x':0,'y':768, 'width':256,'height':256}},
    {'name':'enemy_one02','frame':{'x':256,'y':768, 'width':256,'height':256}},
    {'name':'enemy_one03','frame':{'x':512,'y':768, 'width':256,'height':256}},
    {'name':'enemy_one04','frame':{'x':768,'y':768, 'width':256,'height':256}},
    {'name':'enemy_one05','frame':{'x':1024,'y':768, 'width':256,'height':256}},
  ];
  
//ADDING ENEMY_TWO ANIMATION THROUGH SPRITE SHEET
var enemey_two_sheet;

var enemy_two_animation;
var enemy_two_frames = [
    {'name':'enemy_two01','frame':{'x':0,'y':1024, 'width':256,'height':256}},
    {'name':'enemy_two02','frame':{'x':256,'y':1024, 'width':256,'height':256}},
    {'name':'enemy_two03','frame':{'x':512,'y':1024, 'width':256,'height':256}},
    {'name':'enemy_two04','frame':{'x':768,'y':1024, 'width':256,'height':256}},
    {'name':'enemy_two05','frame':{'x':1024,'y':1024, 'width':256,'height':256}},
  ];
  
//ADDING ENEMY_THREE ANIMATION THROUGH SPRITE SHEET
var enemey_three_sheet;

var enemy_three_animation;
var enemy_three_frames = [
    {'name':'enemy_three01','frame':{'x':0,'y':1280, 'width':256,'height':256}},
    {'name':'enemy_three02','frame':{'x':256,'y':1280, 'width':256,'height':256}},
    {'name':'enemy_three03','frame':{'x':512,'y':1280, 'width':256,'height':256}},
    {'name':'enemy_three04','frame':{'x':768,'y':1280, 'width':256,'height':256}},
    {'name':'enemy_three05','frame':{'x':1024,'y':1280, 'width':256,'height':256}},
    {'name':'enemy_three06','frame':{'x':1280,'y':1280, 'width':256,'height':256}},
  ];
  
//ADDING BULLET/NEWSPAPER ANIMATION
var bullet_sheet;

var bullet_animation;
var bullet_frames = [
    {'name':'bullet01','frame':{'x':0,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet02','frame':{'x':256,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet03','frame':{'x':512,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet04','frame':{'x':768,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet05','frame':{'x':1024,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet06','frame':{'x':1280,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet07','frame':{'x':1536,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet08','frame':{'x':1792,'y':1536, 'width':256, 'height':256}},
    {'name':'bullet09','frame':{'x':0,'y':1792, 'width':256, 'height':256}},
    
  ];



function preload() {
  //use this function to preload any media ie: pictures, animations, sounds

  bg_level1 = loadImage("assets/Level1_Background.png");
  bg_level2 = loadImage("assets/Level2_Background.png");
  bg_level3 = loadImage("assets/Level3_Background.png");
  bg_title = loadImage("assets/Title.png");
  bg_win = loadImage("assets/Win.png");
  bg_lose = loadImage("assets/Lose.png");
  bg_countdown = loadImage("assets/Countdown.png");

  powerUpImg = loadImage("assets/powerup.png");
 // bulletImg = loadImage("assets/Newspaper.png");

  health_empty = loadImage("assets/health_empty.png");
  health_half = loadImage("assets/health_half.png");
  health_full = loadImage("assets/health_full.png");

/*
  enemyOneDefault = loadAnimation("assets/EnemyOneDefault/EnemyOne_Default_00000.png", "assets/EnemyOneDefault/EnemyOne_Default_00010.png");
  enemyTwoDefault = loadAnimation("assets/EnemyTwoDefault/EnemyTwo_Default_00000.png", "assets/EnemyTwoDefault/EnemyTwo_Default_00008.png");
  enemyThreeDefault = loadAnimation("assets/EnemyThreeDefault/EnemyThree_Default_00000.png", "assets/EnemyThreeDefault/EnemyThree_Default_00010.png");
  //loading enemy images
*/
/*
  heroDefault = loadAnimation("assets/HeroDefault/Hero_00000.png", "assets/HeroDefault/Hero_00012.png");
  heroLeft = loadAnimation("assets/HeroLeft/Hero_Left_Turn_00000.png", "assets/HeroLeft/Hero_Left_Turn_00016.png");
  heroRight = loadAnimation("assets/HeroRight/Hero_Right_Turn_00000.png", "assets/HeroRight/Hero_Right_Turn_00018.png");
  //loading animations of hero
*/
  soundWhip = loadSound("assets/throwing-whip-effect.mp3");
  soundEnemyDie = loadSound("assets/cat_hit.mp3");
  soundGrunt = loadSound("assets/grunt.mp3");
  soundPower = loadSound("assets/power_up.mp3");
  
  startMusic = loadSound("assets/Start_Screen.mp3");
  levelOneMusic = loadSound("assets/Level_One.mp3");
  levelTwoMusic = loadSound("assets/Level_Two.mp3");
  levelThreeMusic = loadSound("assets/Level_Three.mp3");

/*
  heroLeft.looping = false;
  heroRight.looping = false;
  //this makes sure these animations do not continuously loop after button is pressed
  heroLeft.frameDelay = 2;
  heroRight.frameDelay = 2;
  //this controls the speed of the animation, lower #'s = faster, higher #'s = slower
  */
  
  //ADDING ANIMATION THROUGH SPRITE SHEET
  gpa_sheet=loadSpriteSheet('assets/Sprite_Sheet.png',gpa_frames);
  gpa_animation = loadAnimation(gpa_sheet);
  
  gpa_sheet_left = loadSpriteSheet('assets/Sprite_Sheet.png',gpa_left_frames);
  gpa_left_animation = loadAnimation(gpa_sheet_left);
  
  gpa_sheet_right = loadSpriteSheet('assets/Sprite_Sheet.png',gpa_right_frames);
  gpa_right_animation = loadAnimation(gpa_sheet_right);
  
  enemy_one_sheet = loadSpriteSheet('assets/Sprite_Sheet.png',enemy_one_frames);
  enemy_one_animation = loadAnimation(enemy_one_sheet);
  
  enemy_two_sheet = loadSpriteSheet('assets/Sprite_Sheet.png',enemy_two_frames);
  enemy_two_animation = loadAnimation(enemy_two_sheet);
  
  enemy_three_sheet = loadSpriteSheet('assets/Sprite_Sheet.png',enemy_three_frames);
  enemy_three_animation = loadAnimation(enemy_three_sheet);
  
  bullet_sheet = loadSpriteSheet('assets/Sprite_Sheet.png',bullet_frames);
  bullet_animation = loadAnimation(bullet_sheet);
}



function setup() {

  var tempWidth = canvasMultiplier * 9;

  var tempHeight = canvasMultiplier * 16;



  createCanvas(tempWidth, tempHeight);
  
  //STARTING THE MUSIC WHEN THE GAME INITIALLY LOADS
  startMusic.amp(0.2);
  startMusic.loop();
  



  //var heroImg = loadImage("assets/Game_Hero.png");
  //loads hero image



  bullets = new Group();
  //initiallizing bullets in new group of sprites
  enemies = new Group();
  //initializing enemies in new group of sprites
  powerUps = new Group();


  hero = createSprite(width / 2, height * .8, 30, 30);
  //define the hero sprite in the middle of canvas towards the bottom
  hero.scale = 0.4;
  hero.setCollider('circle',0,0,100);
  hero.shapeColor = 'blue';
  //creates color for the hero
  hero.friction = 0.85;
  //decrease the # to increase friction, increase the # to decrease the friction of hero

/*
  hero.addAnimation("heroLeft", heroLeft);
  hero.addAnimation("heroRight", heroRight);
  hero.addAnimation("heroDefault", heroDefault);
  //adding the animations to the hero sprite
 */ 
 
  //ADDING ANIMATION THROUGH SPRITE SHEET
  hero.addAnimation('gpa',gpa_animation);
  
  //THIS IS TO SEE HOW LARGE THE SPRITE BOX IS AND NOT THE ACTUAL ANIMATION
  //hero.debug = true;
  hero.addAnimation('gpa_left',gpa_left_animation);
  hero.addAnimation('gpa_right',gpa_right_animation);
  
 
//CHANGING ANIMATION BACK TO DEFAULT THROUGH SPRITE SHEET 
  //hero.changeAnimation('gpa');
  //this starts the animating with the default animation
  
}

function draw() {

  switch (gameState) {
    case 'startUp':
      background(bg_title);
      //text("Press X to START", width / 2, height / 2);
      break;

    case 'lose':
      background(bg_lose);
      //fill('white');
      //text("Game Over", width / 2, height / 2);
      break;

    case 'win':
      background(bg_win);
      //fill('white');
      //text("Mission Complete", width / 2, height / 2);
      break;

    case 'levelOne':
      levelOne();
      break;

    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;

    case 'countDown1':
      background(bg_countdown);
      //background(12, 23, 210);
      //textSize(32);

      if (count1Downtimer === 0) {
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer) / 50);
      //this runs every time
      textAlign(CENTER);
      fill('white');
      textSize(10);
      //text("Get Read for Level 2", width / 2, 800);
      textSize(150);
      if ((3 - flooredCount) <= 0) {

        text("GO!", width / 2, 350);
      } else {
        text(3 - flooredCount, width / 2, 350);
      }

      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelTwo";
        
        //STOPPING THE COUNTDOWN MUSIC AND BEGINNING LEVEL 2 MUSIC
        startMusic.stop();
        levelTwoMusic.amp(0.2);
        levelTwoMusic.loop();
      }
      break;

    case 'countDown2':
      background(bg_countdown);
      //background(12, 23, 210);
      //textSize(32);
      //only runs the first time through the coutdown
      if (count2Downtimer === 0) {
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer) / 50);
      //this runs every time
      textAlign(CENTER);
      fill('white');
      textSize(10);
      //text("Get Read for Level 2", width / 2, 100);
      textSize(150);

      if ((3 - flooredCount) <= 0) {
        text("GO!", width / 2, 350);
      } else {
        text(3 - flooredCount, width / 2, 350);
      }

      if (flooredCount > 3) {
        gameState = "levelThree";
        
        //STOPPING THE COUNTDOWN MUSIC AND BEGINNING LEVEL 3 MUSIC
        startMusic.stop();
        levelThreeMusic.amp(0.2);
        levelThreeMusic.loop();
      }
      break;
  }
}


function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    hero.setSpeed(heroSpeed, 0);
    //provides a burst of speed to the right (zero degrees)
    hero.changeAnimation("gpa_right");
    //changes the animation to the right animation when the right key is pressed
    hero.animation.changeFrame(0);

  } else if (keyCode == LEFT_ARROW) {
    hero.setSpeed(heroSpeed, 180);
    //provides burst of speed to the left (180 degrees)
    hero.changeAnimation("gpa_left");
    //this changes the animation to the left animation when the left key is pressed
    hero.animation.changeFrame(0);

  } else if (key == ' ') {
    if (heroState == 'regular') {

      soundWhip.play();
      
      var panning = map(hero.position.x,0,width,-1.0,1.0);
        soundWhip.pan(panning);

      var bullet = createSprite(hero.position.x, hero.position.y, 8, 8);
      //this sets the location and size of the bullet, starting wherever the hero is at
      bullet.setSpeed(18, 270);
      //sets the speed and direction of the bullet so that it will be shooting upwards
      bullet.life = 50;
      //makes the bullet disappear after a certain number of frames
      bullet.shapeColor = 'white';
      bullet.scale = 0.34;
      bullets.add(bullet);
      //adds a singular bullet to GROUP of bullets
      bullet.addAnimation('bullet',bullet_animation);
      bullet.changeAnimation('bullet');

    }

    if (heroState == 'power') {
       
     soundWhip.play();
      
      for (var i = 0; i < 3; i++) {
        var bullet = createSprite(hero.position.x, hero.position.y, 8, 8);
        //this sets the location and size of the bullet, starting wherever the hero is at
        var angle = 255 + (i * 15);
        bullet.setSpeed(20, angle);
        //sets the speed and direction of the bullet so that it will be shooting upwards
        bullet.life = 50;
        //makes the bullet disappear after a certain number of frames
        bullet.shapeColor = 'white';
        bullets.add(bullet);
        //adds a singular bullet to GROUP of bullets
        bullet.addImage("bulletImg", bulletImg);
      }
    }

  }
}

function keyTyped() {

  if (key === 'x') {
    gameState = 'levelOne';
    
    startMusic.stop();
    levelOneMusic.amp(0.3);
    levelOneMusic.loop();
  }
}