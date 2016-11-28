function enemyHit(enemy,bullet){
    
    var panning = map(enemy.position.x,0,width,-1.0,1.0);
        soundEnemyDie.pan(panning);
    var loudness = random(.4,.9);
      soundEnemyDie.amp(loudness);
    
    soundEnemyDie.play();
    
      for(var i=0; i<explosionDensity; i++){
      //this is creating the explosion animation
      
      var p = createSprite(bullet.position.x,bullet.position.y,2,2);
      //this creates where the explosion is initiated and the size of the particles 
      
      p.setSpeed(random(3,5),random(360));
      //sets the speed and direction of particles
      p.friction = 0.95;
      //the friction against the particles
      p.life = 15;
      //how long the explosion lasts
      
    }
    
    //level 3 enemy breaks apart
    if(enemy.type == 2){
     
      var enemyS1 = createSprite(enemy.position.x,enemy.position.y);
          //creates enemy at the top of the screen with a random X axis
            enemyS1.setCollider('circle',0,0,25);
            enemyS1.setSpeed(6.5,random(90 - enemyAngle,90 + enemyAngle));
            //sets the speed and direction the enemy will be coming from
            enemyS1.life = 200;
            //this is how long the enemy will last
            enemyS1.shapeColor = 'yellow';
            enemyS1.type = 1;
            
        
            enemyS1.addAnimation("enemyThree", enemy_three_animation);
            enemyS1.changeAnimation("enemyThree");
            enemyS1.debug = true;
            enemyS1.scale = .30;
            enemies.add(enemyS1);
            //adds a singular enemy to GROUP of enemies
            
      var enemyS2 = createSprite(enemy.position.x,enemy.position.y);
          //creates enemy at the top of the screen with a random X axis
            enemyS2.setCollider('circle',0,0,25);
            enemyS2.setSpeed(6.5,random(90 - enemyAngle,90 + enemyAngle));
            //sets the speed and direction the enemy will be coming from
            enemyS2.life = 200;
            //this is how long the enemy will last
            enemyS2.shapeColor = 'yellow';
            enemyS2.type = 1;
         
        
        
            enemyS2.addAnimation("enemyThree", enemy_three_animation);
            enemyS2.changeAnimation("enemyThree");
            
            enemyS2.scale = .30;
            enemies.add(enemyS2);
            //adds a singular enemy to GROUP of enemies
    }
         
        enemy.remove();
        //removes enemy when bullet overlaps
        bullet.remove();
        //removes bullet when it hits enemy
       heroState = 'regular';
        score++;
    
      if(score == level1ScoreAdvance){
      levelOneMusic.stop();
      startMusic.amp(0.2);
      startMusic.loop();
      gameState = 'countDown1';
      heroState = 'regular';
    }
    if(score == level2ScoreAdvance){
      levelTwoMusic.stop();
      startMusic.amp(0.2);
      startMusic.loop();
      gameState = 'countDown2';
      heroState = 'regular';
    }
      /*
      if(score > 3){
         gameState = 'levelTwo';
      }else if(score > 6){
         gameState = 'levelThree';
      }else if(score > 10){
         gameState = 'win';
      }
      */
  }

function heroHit(enemy,hero){
   
   var panning = map(hero.position.x,0,width,-1.0,1.0);
        soundGrunt.pan(panning);
    var loudness = random(.4,.9);
      soundGrunt.amp(loudness); 
   soundGrunt.play();
    
     heroHealth --;
     //deducts points from health when hero is hit
     heroState = 'regular'; 
    
      if(heroHealth <= 0){
        gameState = 'lose'
       //when enemy hits hero, the lose screen will appear
      }
      
    enemy.remove();
    //removes enemy when it hits the hero
    
    hero.shapeColor = 'white';
    //when enemy hits the hero, the hero turns white
  }
  
function powerHit(powerUp,hero){
   
   var panning = map(powerUp.position.x,0,width,-1.0,1.0);
        soundPower.pan(panning);
   soundPower.play();
   
   powerUp.remove();
   heroState = "power";
}