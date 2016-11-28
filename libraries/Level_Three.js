
function levelThree(){

 if(frameCount%enemyRate=== 0){
     //sets up the enemy to be created every so many frames (30)
     
      var enemy = createSprite(random(width),0,40,40);
          //creates enemy at the top of the screen with a random X axis
          enemy.setCollider('circle',0,0,50);
            enemy.setSpeed(4.8,random(90 - enemyAngle,90 + enemyAngle));
            //sets the speed and direction the enemy will be coming from
            enemy.life = 200;
            //this is how long the enemy will last
            enemy.shapeColor = 'yellow';
            enemy.type = 2;
            enemy.scale = 0.5;
        
            //enemy.addAnimation("enemyThreeDefault", enemyThreeDefault);
          
            enemy.addAnimation('enemyThree',enemy_three_animation);
            enemy.debug = true;
            enemy.changeAnimation("enemyThree");
            enemies.add(enemy);
            //adds a singular enemy to GROUP of enemies
           
  }
  /*
   if(frameCount%powerRate === 0){
     
      var powerUp = createSprite(random(width),0,40,40);

            powerUp.setSpeed(3,random(90 - enemyAngle,90 + enemyAngle));
            powerUp.life = 200;
            powerUps.add(powerUp);
           
        
 } 
  */
  /*
   for(var i = 0;i < enemies.length;i++){
    // || is the OR symbol && is the AND symbol
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
 }
 */
    
    for(var d = 0;d < enemies.length;d++){
    //a technique for timing something randomly
    if(random(300) < enemyDrunkness){
      enemies[d].velocity.x += random(-enemyDrunkDirection,enemyDrunkDirection);
    }
    
    if(enemies[d].position.x > width || enemies[d].position.x < 0){
      enemies[d].velocity.x *= -1;
    }
    
}
  
 
  background(bg_level3);
  
         textSize(20);
         //setting the text size for the score counter
         fill('black');
         //sets the color of the text
         text(score,90,56);
         //naming the score text
         //text("health ",10,60);
         //naming the health text
         
            switch(heroHealth){
               case 1:
                  image(health_empty,100,60);break;
               case 2:
                  image(health_half,100,60);break;
               case 3:
                  image(health_full,100,60);break;
         }
  
      enemies.overlap(bullets,enemyHit);
      //when the enemies and bullets overlap
      
      enemies.overlap(hero,heroHit);
      
      //powerUps.overlap(hero,powerHit);
       //does the powerup hit the hero
       
      
        if(hero.getAnimationLabel() === "gpa_left" && hero.animation.getFrame() === hero.animation.getLastFrame()){
         //above line is to find out if left turn animation is working
         //after the & symbol is to say that when the left turn animation is over, go to the last frame and change to default animation
         hero.changeAnimation("gpa");
         hero.animation.changeFrame(0);
      }
      
      if(hero.getAnimationLabel() === "gpa_right" && hero.animation.getFrame() === hero.animation.getLastFrame()){
         
         hero.changeAnimation("gpa");
         hero.animation.changeFrame(0);
      }
      
          drawSprites();
         //use this in every p5 play program
         //only call it once per frame, almost always at the end of the draw
         
         if(score > 24){
            gameState = 'win';
         }
   }

