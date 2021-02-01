//UI VARIABLES
var UIImage;

//BACKGROUND VARIABLES
var corridor;

//SOUND VARIABLES
var attackSound;
var blockSound;
var blockHurtSound;
var encounterSound;
var gameoverSound;
var hurtSound;
var monsterDeathSound;
var potionSound;
var stealSound;
var levelSound;
var treasureFoundSound;
var treasureOpenSound;
var allocateSound;
var fourhpSound;
var onehpSound;

var song1;
var deathSong;

//BUTTON VARIABLES

//ATTACK
var attackButton;
var attackButtonImage;

//MOVE
var moveButton;
var moveButtonImage;

//DEFEND
var defendButton;
var defendButtonImage;

//INTERACT
var interactButton;
var interactButtonImage;

//POTION
var potionButton;

//USE
var useButtonImage;

//ALLOCATE
var allocateImage;

//MUTE
var muteButton;
var muteButtonImage;
var soundButtonImage;
var mute;

//TOOLTIP VARIABLES
var info = " ";
var help = " ";
var monsterAttack = " ";

//EVENT VARIABLES
var encounterPicker;
var encounter;
var monsterPicker;
var gameOver;

var treasureSprite;
var treasureSpriteImage;
var treasureChance;
var treasureFound;



//PLAYER VARIABLES
var playerDamage;
var attackDamageIncrease;
var block;

//WEAPON VARIABLES
var weaponClass;
var weaponName;
var weaponDamage;

//  STATS
//      HEALTH
var maxHealth;
var health;
var healthImage;
var healthIcon;

var needHealth;
var dying;

//      STRENGTH
var strength;
var strIcon;
var strengthImage;

//      INTELLIGENCE
var intelligence;
var intIcon;
var intelligenceImage;

//      AGILITY
var agility;
var agiIcon;
var agilityImage;

// EXPERIENCE & LEVELING
var playerXP;
var xpRequired;
var playerLevel;
var plusStat;

var healthGainButton;
var strGainButton;
var agiGainButton;
var intGainButton;

//INVENTORY VARIABLES
var potionAmount;

//MONSTER VARIABLES
//Monster's Individual Name
var monster_One;
var monster_Cube;
var monster_Keeper;

//Monster Sprites
var spr_One;
var spr_Cube;
var spr_Keeper;

//Monster Stats
var monsterName;
var monsterHealth;
var monsterDamage;
var monsterDamageCalc;
var monsterDescription;
var lootChance;

var monsterPrizeXP;

//TIMING VARIABLES
var waiting;
var timer;
var canAttack;

//SCORE VARIABLES
var rooms;

function preload() {

    //IMAGES
    attackButtonImage = loadImage("image/attack Button.png")
    interactButtonImage = loadImage("image/interact Button.png")
    moveButtonImage = loadImage("image/move Button.png")
    defendButtonImage = loadImage("image/defend Button.png")
    useButtonImage = loadImage("image/useButton.png")
    UIImage = loadImage("image/PLACEHOLDERUI.png")
    allocateImage = loadImage("image/UI/addbutton.png")

    healthImage = loadImage("image/stats/health.png")
    healthIcon = loadImage("image/stats/healthIcon.png")

    strengthImage = loadImage("image/stats/strength.png")
    strIcon = loadImage("image/stats/strIcon.png")

    intelligenceImage = loadImage("image/stats/intelligence.png")
    intIcon = loadImage("image/stats/intIcon.png")

    agilityImage = loadImage("image/stats/agility.png")
    agiIcon = loadImage("image/stats/agiIcon.png")

    treasureSpriteImage = loadImage("image/treasure.png")


    //Mute Button
    muteButtonImage = loadImage("image/UI/muteButton.png")
    soundButtonImage = loadImage("image/UI/soundButton.png")



    //Backgrounds
    corridor = loadImage("image/backgrounds/corridor.png")

    //Monsters
    spr_Keeper = loadImage("image/monster/keeper.png")
    spr_One = loadImage("image/monster/one.png")
    spr_Cube = loadImage("image/monster/cube.png")


    //SOUNDS
    attackSound = loadSound("sound/attack.wav");
    blockSound = loadSound("sound/block.wav");
    blockHurtSound = loadSound("sound/blockHurt.wav");
    encounterSound = loadSound("sound/encounter.wav");
    gameoverSound = loadSound("sound/gameover.wav");
    hurtSound = loadSound("sound/hurt.wav");
    monsterDeathSound = loadSound("sound/monsterDeath.wav");
    potionSound = loadSound("sound/potion.wav");
    stealSound = loadSound("sound/steal.wav");
    levelSound = loadSound("sound/levelup.wav");
    allocateSound = loadSound("sound/allocate.wav");
    treasureFoundSound = loadSound("sound/treasureFound.wav");
    treasureOpenSound = loadSound("sound/treasureOpen.wav");

    fourhpSound = loadSound("sound/closetodeath.wav");
    onehpSound = loadSound("sound/1hp.wav");

    //SONGS
    song1 = loadSound("sound/songs/song1.wav");
    deathSong = loadSound("sound/songs/deathSong.wav");

}

function setup() {

    createCanvas(1200, 700);
    textSize(18);

    //VARIABLES SET

    //MONSTER VARIABLE SETS
    //FOR NOW THE MONSTER MUST BE DEFINED HERE IN ORDER FOR THE DEATH TO WORK.
    monster_One = createSprite(0, 0, 0, 0);
    monster_Cube = createSprite(0, 0, 0, 0);
    monster_Keeper = createSprite(0, 0, 0, 0);


    muted = false
    needHealth = false
    dying = false


    treasureSprite = createSprite(0, 0, 0, 0);

    healthGainButton = createSprite(0, 0, 0, 0);
    strGainButton = createSprite(0, 0, 0, 0);
    intGainButton = createSprite(0, 0, 0, 0);
    agiGainButton = createSprite(0, 0, 0, 0);

    help = ("Press the arrow to begin");


    playerStats();
    weapons();

    //TIMING VARIABLES SET --------------------- FIX
    //    timer = 0;
    //    waiting = false;
    //    canAttack = true;
    //    print("timer: " + timer)
    //    print("waiting: " + waiting)

    //ENCOUNTER VARIABLES SET
    encounter = false

    treasureFound = false

    //INVENTORY VARIABLE SET
    potionAmount = 1

    //SCORE VARIABLE SET
    rooms = 0


    //SONG
    song1.loop(0, 1, .35);

    //createSprite(Position X, Position Y, width, height)

    //BACKGROUNDS
    var background = createSprite(width / 2, 174, 600, 348);
    background.addImage(corridor)

    //UI BACKGROUND
    var statMenu = createSprite(width / 2, height / 2, width / 2, height / 2);
    statMenu.addImage(UIImage)



    //Health
    var healthSprite = createSprite(60, 71, 150, 30);
    healthSprite.addImage(healthImage);
    var heartSprite = createSprite(160, 71, 50, 30);
    heartSprite.addImage(healthIcon)
    //  Action
    healthSprite.onMouseOver = healthMouseOver;
    heartSprite.onMouseOver = healthMouseOver;

    //Strength
    var strengthSprite = createSprite(85, 103, 150, 30);
    strengthSprite.addImage(strengthImage);
    var strSprite = createSprite(157, 103, 140, 30);
    strSprite.addImage(strIcon)

    //  Action
    strengthSprite.onMouseOver = strMouseOver;
    strSprite.onMouseOver = strMouseOver;

    //Intelligence
    var intelligenceSprite = createSprite(85, 135, 150, 30);
    intelligenceSprite.addImage(intelligenceImage);
    var intSprite = createSprite(157, 135, 140, 30);
    intSprite.addImage(intIcon)

    //  Action
    intelligenceSprite.onMouseOver = intMouseOver;
    intSprite.onMouseOver = intMouseOver;

    //Agility
    var agilitySprite = createSprite(75, 167, 150, 30);
    agilitySprite.addImage(agilityImage);
    var agiSprite = createSprite(157, 167, 140, 30);
    agiSprite.addImage(agiIcon)
    //  Action
    agilitySprite.onMouseOver = agiMouseOver;
    agiSprite.onMouseOver = agiMouseOver;

    //BUTTONS

    //  Attack
    //      Visual
    attackButton = createSprite(175, 475, 175, 50);
    attackButton.addImage(attackButtonImage)
    //      Action
    attackButton.onMousePressed = attack;
    attackButton.onMouseOver = attackMouseOver;
    attackButton.onMouseOut = spriteOut;
    attackButton.onMouseReleased = spriteReleased;

    //  Defend
    //      Visual
    defendButton = createSprite(450, 475, 175, 50);
    defendButton.addImage(defendButtonImage)
    //      Action
    defendButton.onMousePressed = defend;
    defendButton.onMouseOver = defendMouseOver;
    defendButton.onMouseOut = spriteOut;
    defendButton.onMouseReleased = spriteReleased;

    //  Move
    //      Visual
    moveButton = createSprite(175, 575, 175, 50);
    moveButton.addImage(moveButtonImage)

    //      Action
    moveButton.onMousePressed = move;
    moveButton.onMouseOver = moveMouseOver;
    moveButton.onMouseOut = spriteOut;
    moveButton.onMouseReleased = spriteReleased;

    //  Interact
    //      Visual
    interactButton = createSprite(450, 575, 175, 50);
    interactButton.addImage(interactButtonImage)
    //      Action
    interactButton.onMousePressed = interact;
    interactButton.onMouseOver = interactMouseOver;
    interactButton.onMouseOut = spriteOut;
    interactButton.onMouseReleased = spriteReleased;

    //  Potion Use
    //      Visual
    potionButton = createSprite(1040, 103, 20, 20);
    potionButton.addImage(useButtonImage)
    //      Action
    potionButton.onMousePressed = usePotion;
    potionButton.onMouseOver = potionMouseOver;
    potionButton.onMouseOut = spriteOut;
    potionButton.onMouseReleased = spriteReleased;

    //  Mute
    //      Visual
    muteButton = createSprite(25, 675, 20, 20);
    muteButton.addImage(muteButtonImage);
    muteButton.addImage(soundButtonImage);
    //      Action
    muteButton.onMousePressed = mute;
    muteButton.onMouseOver = muteMouseOver;
    muteButton.onMouseOut = spriteOut;
    muteButton.onMouseReleased = spriteReleased;




}


function draw() {
    background(200);

    if (gameOver == true) {
        //THIS IS WHEN GAME OVER
        textSize(110);
        text("Game Over", 260, height / 2);
        text("Died in room #" + rooms, 160, width / 2);
        fourhpSound.stop()
        onehpSound.stop()
        song1.stop();
    } else {

        // THIS IS ALL WHEN NOT GAME OVER **********************************************************************************************************
        drawSprites();
        textSize(15);
        fill(170);

        weapons();
        //Help Text
        text("Help: " + help, 660, 390);

        //Info Text
        text("Info: " + info, 660, 420);



        //Monster Damage Log
        if (monsterHealth > 0) {
            text("Damage Log: " + monsterAttack, 660, 500);
        } else {
            text("", 660, 500);
        }

        //Monster Description
        if (monsterHealth > 0) {
            text("Description: " + monsterDescription, 660, 600);
        } else {
            text("", 660, 500);
        }



        //Player Stats Text
        text("Player Stats", 100, 37);
        text(health + " / " + maxHealth, 190, 75);
        text(strength, 210, 110);
        text(intelligence, 210, 142);
        text(agility, 210, 175);
        text("Damage: " + round(1 + (.95 * (strength / 1.05)) + weaponDamage) + " + " + attackDamageIncrease, 15, 207);
        text("Experience: " + playerXP + " / " + xpRequired, 20, 300);
        text("Player Level: " + playerLevel, 20, 330);
        text("Room: " + rooms, 20, 270);
        text("Level points available: " + plusStat, 20, 240);

        //Inventory Text
        text("Inventory", 1000, 37);
        text("Weapon: " + weaponName, 925, 75);
        text("Potions: " + potionAmount + "x", 925, 110);

        //EVENT CHECKS -------------------------------------------------------------------------------------------------------------------------------
        //checks variable changes etc

        //  MONSTERS this constantly updates the monster's health so it can be changed
        monsterHealth = monsterHealth

        //This will show its health
        if (monsterHealth > 0) {
            text("Monster Name: " + monsterName, 350, 322)
            text("Monster health: " + monsterHealth, 720, 322)
        } else if (monsterHealth <= 0) {
            text(" ", 300, 350)
        }
        //  DEATH since draw is constantly checking variable changes, death must be placed here
        if (monsterHealth <= 0) {
            monster_One.remove();
            monster_Cube.remove();
            monster_Keeper.remove();
            //print("dead");
            encounter = false;
        }
        // Player Death
        if (health <= 0) {
            gameoverSound.play();
            deathSong.play(0, 1, .70);
            gameOver = true
            print("dead")

        }
        //  If somehow you are overhealed this will make sure you are set to your max HP instead
        if (health > maxHealth) {
            health = maxHealth
            print("cannot be overhealed")
        }
        //  Player Leveling
        if (playerXP >= xpRequired) {
            levelUp();
            print("Leveled Up" + " add: " + plusStat)
        }

        if (plusStat <= 0) {
            healthGainButton.remove();
            strGainButton.remove();
            intGainButton.remove();
            agiGainButton.remove();
        }

        if (weaponClass > 4) {
            weaponClass = 4
            info = ("You already wield the strongest weapon.")
        }

        if (playerLevel <= 1) {
            levelUp();
        }

        if (health <= 5 && health > 2 && needHealth == false) {
            needHealthPlay();
        } else if (health <= 2 && dying == false) {
            dyingPlay();
        } else if (health > 5 || health <= 0) {
            needHealth = false
            dying = false
            fourhpSound.stop()
            onehpSound.stop()
        }


    } // END OF WHEN NOT GAME OVER*****************************************************************************************************************
}

//Button Actions --------------------------------------------------------------------------------------------------------------------------------------------
//This is how the buttons will act

//  Attack
function attack() {

    this.scale = .95

    if (encounter == true) {
        playerAttack();
        info = ("You've attacked for " + playerDamage);
        print("attacked");

    } else {
        info = ("You've attacked nothing");
        print("attacked");
    }

    //TIMER IS DONE INSTANTLY MUST FIGURE OUT HOW TO MAKE WORK PROPERLY
    // -------------------------------------------------- FIX
    //    if (canAttack == true && waiting == false) {
    //        print("attacked");
    //        info = ("You've attacked");
    //        canAttack = false
    //        wait();
    //
    //    }
    //    if (waiting == false) {
    //        canAttack = true
    //    }
    //    if (canAttack == false) {
    //        info = ("Wait");
    //    }
    //    if (canAttack == true) {
    //        print("can now attack");
    //    }

}

function attackMouseOver() {
    print("Going to attack");
    help = ("Press to attack");
    this.scale = 1.05
}


//  Interact
function interact() {
    print("interacted");
    playerInteract();
    this.scale = .95
}

function interactMouseOver() {
    print("Going to interact");
    if (encounter == true) {
        help = ("Press to Steal");
    }
    this.scale = 1.05
}

//  Defend
function defend() {
    print("defended");
    this.scale = .95
    if (encounter == true) {
        playerBlock();
    } else {
        info = ("There's nothing to block")
    }
}

function defendMouseOver() {
    print("Going to defend");
    help = ("Press to defend. Gives bonus damage!");
    this.scale = 1.05
}

//  Move
function move() {
    if (encounter == false) {
        print("moved");
        info = ("You've moved");
        rooms += 1;

        treasureSprite.remove();
        treasureFound = false;

        encounterPicker = random(1, 100);

        print(encounterPicker)
        //Here is the encounter picker, chance is found under player stats, the monster event is the base event meaning if treasure is not found it'll activate the monster.

        if (encounterPicker <= treasureChance) {

            treasureEvent();

        } else {

            //This is an encounter will add encounter picker when more encounters are added.
            monsterEvent();
            this.scale = .95;
        }
    }
}

function moveMouseOver() {
    if (encounter == false) {
        print("Going to move");
        help = ("Press to move");
        this.scale = 1.05
    } else {
        info = ("You must Fight");
    }
}

//  Potion
function usePotion() {

    this.scale = .95
    if (potionAmount > 0 && health < maxHealth) {
        print("Potion Used");
        healPotion();
    } else if (health == maxHealth) {
        print("Full Health");
        info = ("You're already at full health!");
    } else {
        print("No Potions left!");
        info = ("No potions left!");
    }
}

function potionMouseOver() {
    print("Going to heal");
    help = ("Press to heal");
    this.scale = 1.05
}


//  MUTE
function mute() {



    muted = !muted
    print("Mute = " + muted)

    this.scale = .95
    if (muted == true) {
        info = ("Muted Music");
        muteButton.changeImage(muteButtonImage);
        song1.stop();
    }
    if (muted == false) {
        info = ("Unmuted Music");
        muteButton.changeImage(soundButtonImage);
        song1.loop(0, 1, .35);
    }

}

function muteMouseOver() {
    print("Going to mute");
    help = ("Press to mute the music.");
    this.scale = 1.05
}

//      Stats info --------------------------------------------------------------------------------------------------------------------------
function healthMouseOver() {
    print("Health");
    help = ("This your health / max health.");

}

function strMouseOver() {
    print("Strength");
    help = ("Influences base attack damage and damage blocking.");

}

function intMouseOver() {
    print("Intelligence");
    help = ("Influences potion heal amount and level experience.");

}

function agiMouseOver() {
    print("Agility");
    help = ("Influences bonus damage after blocking and stealing from enemies.");

}
//      Stats info --------------------------------------------------------------------------------------------------------------------------


//  Leveling -----------------------------------------------------------------------------------------------------------------------------------------


//On Clicks

function healthLeveling() {
    if (plusStat > 0) {
        print("leveled");
        info = ("You've leveled health");

        maxHealth += 2
        health += round((health / 2) + 1);

        placeStat(); // acts the same as plusStat = plusStat - 1 however as a function... still doesn't work. if player levels twice before placing stats all points are dumped into which stat they leveled and the buttons are not removed.

        this.scale = .95
        print("plusStat New value: " + plusStat);

    }

}

function strLeveling() {
    if (plusStat > 0) {
        print("leveled");
        info = ("You've leveled Strength");

        strength += 1
        placeStat();
        this.scale = .95
        print("plusStat New value: " + plusStat);

    }
}

function intLeveling() {
    if (plusStat > 0) {
        print("leveled");
        info = ("You've leveled Intelligence");

        intelligence += 1
        placeStat();
        this.scale = .95
        print("plusStat New value: " + plusStat);

    }
}

function agiLeveling() {
    if (plusStat > 0) {
        print("leveled");
        info = ("You've leveled Agility");

        agility += 1
        placeStat();
        this.scale = .95
        print("plusStat New value: " + plusStat);

    }
}

//Mouse Overs

function healthLevelMouseOver() {
    print("Going to level");
    help = ("Press to level Max Health");
    this.scale = 1.05
}

function strLevelMouseOver() {
    print("Going to level");
    help = ("Press to level Strength");
    this.scale = 1.05
}


function intLevelMouseOver() {
    print("Going to level");
    help = ("Press to level Intelligence");
    this.scale = 1.05
}

function agiLevelMouseOver() {
    print("Going to level");
    help = ("Press to level Agility");
    this.scale = 1.05
}
//  Leveling ------------------------------------------------------------------------------------------------------------------------------------------


//  ALL BUTTONS
function spriteOut() {
    this.scale = 1
}

function spriteReleased() {
    this.scale = 1
}





//PLAYER FUNCTIONS ---------------------------------------------------------------------------------------------------------------------------------PLAYER FUNCTIONS


//  PLAYER ATTACK
//This is where damage will be calculated
function playerAttack() {

    //Damage Calculation
    playerDamage = round(1 + (.95 * (strength / 1.05)) + random(-2, 2) + attackDamageIncrease + weaponDamage);

    print("You've attacked for " + playerDamage);

    //Attack Sound
    attackSound.play();

    //Attacks against monsters
    monsterHealth = monsterHealth - playerDamage;

    //Resets Bonus Damage
    attackDamageIncrease = 0


    //Because a monster will always attack after your attack it will attack whenever a player attack is called
    //MONSTER'S ACTION
    //The monster will do an action after you attack
    monsterAction();

    if (monsterHealth < 0) {
        monsterHealth = 0
    }
    //Debug
    print("Monster's new health: " + monsterHealth)
}





//  PLAYER DEFENCE
//This is where block will be calculated
function playerBlock() {


    //Block Calculation: Takes strength into consideration
    block = round(.65 * (strength / 1.80) + random(-1, 1));
    print("Block = " + block)

    //Riposte Damage: Will do bonus damage based on agility
    attackDamageIncrease = round(.95 * (agility / 1.08));

    //Debug
    print("Blocked: " + block);
    print("Bonus Damage: " + attackDamageIncrease);


    info = ("You've defended for " + block);

    //Monster will attack after Block
    monsterAction();

    //Resets Block
    block = 0
}


//PlAYER INTERACT
//This is how the interact functions
function playerInteract() {

    //****** WITHIN MONSTER ENCOUNTER ******
    if (encounter == true) {
        var stealChance = 10 + (.95 * (agility * 7.5));

        var stealNumberPicker = random(1, 100);
        print(stealNumberPicker + " <= " + stealChance)

        if (stealNumberPicker <= stealChance) {

            stealSound.play();

            info = ("You've stolen a potion");

            potionAmount += 1

            monsterAction();

        } else {

            info = ("You were unable to steal from " + monsterName);

            monsterAction();

        }
    } //****** OUT OF MONSTER ENCOUNTER ******

    //****** TREASURE EVENT ******
    else if (treasureFound == true) {

        treasureOpenSound.play();
        treasureAct();



    } else {
        info = ("Nothing to interact with.")
    }


}


//  PLAYER STATS
//This is where stats are including health
function playerStats() {

    weaponClass = 1

    maxHealth = 12
    health = maxHealth
    strength = 1
    intelligence = 1
    agility = 1
    attackDamageIncrease = 0
    playerLevel = -3;
    playerXP = 0;
    xpRequired = 100;
    plusStat = 0



    treasureChance = 15;

}





//EXPERIENCE FUNCTION

function levelUp() {

    //This is to change your base stats at the beginning of the game
    if (playerLevel < 1) {
        playerLevel += 1
        plusStat += 1
        if (plusStat == 1) {
            healthGainButton = createSprite(265, 71, 30, 30);
            healthGainButton.addImage(allocateImage);

            strGainButton = createSprite(265, 103, 30, 30);
            strGainButton.addImage(allocateImage);

            intGainButton = createSprite(265, 135, 30, 30);
            intGainButton.addImage(allocateImage);

            agiGainButton = createSprite(265, 167, 30, 30);
            agiGainButton.addImage(allocateImage);
        }
        info = ("You can level your stats!")
        statAllocation();
        print(plusStat)
    }

    //Once the player has leveled past the xpRequired it will increase your level and remove your xp based on what the level costed, then increase the xp required.
    if (playerXP >= xpRequired) {

        playerLevel += 1
        plusStat += 1
        maxHealth += 1
        health += 1

        info = ("You've leveled up!")

        levelSound.play();

        health += round(1 + (health / 2));

        print("plusStat = " + plusStat);


        //THE DRAW FUNCTION MAKES 2 BUTTONS JUST CHANGE POSITION WITH .position.x

        if (plusStat == 1) {
            healthGainButton = createSprite(265, 71, 30, 30);
            healthGainButton.addImage(allocateImage);

            strGainButton = createSprite(265, 103, 30, 30);
            strGainButton.addImage(allocateImage);

            intGainButton = createSprite(265, 135, 30, 30);
            intGainButton.addImage(allocateImage);

            agiGainButton = createSprite(265, 167, 30, 30);
            agiGainButton.addImage(allocateImage);
        }

        statAllocation();

        playerXP = playerXP - xpRequired


        //  New experience requirement
        xpRequired = xpRequired + round(25 + playerLevel * 50)

    }

}

function placeStat() {
    if (plusStat > 0) {
        allocateSound.play();
        plusStat = plusStat - 1;
    }
}

//This actually allows you to cash in your level ups
function statAllocation() {

    // Max Health
    healthGainButton.onMousePressed = healthLeveling;
    healthGainButton.onMouseOver = healthLevelMouseOver;
    healthGainButton.onMouseOut = spriteOut;
    healthGainButton.onMouseReleased = spriteReleased;

    // Strength
    strGainButton.onMousePressed = strLeveling;
    strGainButton.onMouseOver = strLevelMouseOver;
    strGainButton.onMouseOut = spriteOut;
    strGainButton.onMouseReleased = spriteReleased;

    // Intelligence
    intGainButton.onMousePressed = intLeveling;
    intGainButton.onMouseOver = intLevelMouseOver;
    intGainButton.onMouseOut = spriteOut;
    intGainButton.onMouseReleased = spriteReleased;

    // Agility
    agiGainButton.onMousePressed = agiLeveling;
    agiGainButton.onMouseOver = agiLevelMouseOver;
    agiGainButton.onMouseOut = spriteOut;
    agiGainButton.onMouseReleased = spriteReleased;


}

function needHealthPlay() {

    if (health <= 5 && health > 2) {
        print("play 5hp")
        onehpSound.stop
        fourhpSound.loop(0, 1, .25)
        needHealth = true

    }

}

function dyingPlay() {
    if (health <= 2) {
        fourhpSound.stop()
        onehpSound.loop(0, .90, .35)
        print("Player 2 HP")
        dying = true
    }
}

//PLAYER FUNCTIONS --------------------------------------------------------------------------------------------------------------------------END OF PLAYER FUNCTIONS





//POTION FUNCTION ----------------------------------------------------------------------------------------------------------------------------

function healPotion() {
    //Potion Healing calculations
    var potionHealed = round((.85 * (intelligence / 1.2) + .25) + 3.06);

    if (potionAmount > 0) {
        info = ("You've healed for " + potionHealed);

        //This is where you actually heal, the Overheal check is done in draw.
        health = health + potionHealed;

        //Heal Sound
        potionSound.play(0, 1, .50);

        //Makes sure to subtract a potion from the inventory
        potionAmount = potionAmount - 1;
    }


} //END OF POTION FUNCTION --------------------------------------------------------------------------------------------------------------END OF POTION FUNCTION





//EVENTS -----------------------------------------------------------------------------------------------------------------------------------------------------
//This is where all the events will be defined

function monsterEvent() {
    print("YOU'VE ENCOUNTERED A MONSTER!")
    info = ("YOU'VE ENCOUNTERED A MONSTER!")

    encounter = true
    encounterSound.play();

    monsterAttack = ("Monster has yet to attack.")

    //This is where the monster is picked
    monsterPicker = round(random(1, 3)); //--------------------------- FOR NOW WE WORK WITH ONE ***INCREASE VALUE TO ADD MORE MONSTERS***
    print("The monster that was picked was: " + monsterPicker);

    //MONSTERS ----------------------------------------------------------------------------------------------------------------------------THIS IS PART OF THE EVENTS---

    //  THE ONE --------------------------------------------MONSTER 1
    if (monsterPicker == 1) {



        //Monster Sprite
        monster_One = createSprite(600, 172, 256, 256);
        monster_One.addImage(spr_One);

        //MONSTER STATS

        //NAME
        monsterName = ("The One")

        //  Monster health
        monsterHealth = 6 + floor((playerLevel) / 5 + (rooms / 10));

        //  Monster Base damage
        monsterDamage = 1;

        //  Monster Damage Spread
        monsterMinDamage = -1
        monsterMaxDamage = 1

        //  Monster Experience Given
        monsterPrizeXP = 15

        //  Monster Loot Drop Rate
        lootChance = 8

        //  Monster's Interact Description
        monsterDescription = ("It's eye stares deeply into your soul...")


    }
    //  THE CUBE --------------------------------------------MONSTER 2
    if (monsterPicker == 2) {

        //Monster Sprite
        monster_Cube = createSprite(600, 172, 256, 256);
        monster_Cube.addImage(spr_Cube);

        //MONSTER STATS
        //NAME
        monsterName = ("The Cube")

        //  Monster health
        monsterHealth = 8 + floor((playerLevel) / 5 + (rooms / 10));

        //  Monster Base damage
        monsterDamage = 1;

        // Monster Damage Spread This gives it more variety to attacks.
        monsterMinDamage = -1
        monsterMaxDamage = 2

        //  Monster Experience Given
        monsterPrizeXP = 30

        //  Monster Loot Drop Rate
        lootChance = 15

        //  Monster's Interact Description
        monsterDescription = ("It's form boggles your mind, making you lose your sanity...")

    }

    //  THE KEEPER --------------------------------------------MONSTER 3
    if (monsterPicker == 3) {

        //Monster Sprite
        monster_Keeper = createSprite(600, 172, 256, 256);
        monster_Keeper.addImage(spr_Keeper);

        //MONSTER STATS
        //NAME
        monsterName = ("The Dungeon Keeper")

        //  Monster health
        monsterHealth = 11 + floor((playerLevel) / 5 + (rooms / 10));

        //  Monster Base damage
        monsterDamage = 2;

        // Monster Damage Spread This gives it more variety to attacks.
        monsterMinDamage = -1
        monsterMaxDamage = 2

        //  Monster Experience Given
        monsterPrizeXP = 110

        //  Monster Loot Drop Rate
        lootChance = 35

        //  Monster's Interact Description
        monsterDescription = ("It stands tall, sword ready to strike...")

    }
    //Debug
    print(monsterName + "  HEALTH: " + monsterHealth + "  MIN DAMAGE: " + (monsterDamage + monsterMinDamage) + "  MAX DAMAGE: " + (monsterDamage + monsterMaxDamage + (floor(rooms / 12))));
    //MONSTERS ----------------------------------------------------------------------------------------------------------------------------THIS IS PART OF THE EVENT----

}
//END OF MONSTER EVENT-------------------------------------------------------------------------------------------------------------------------END OF MONSTER EVENT---


function treasureEvent() {

    print("treasure found")
    info = ("You've found treasure.")
    treasureFoundSound.play();
    treasureSprite = createSprite(600, 220, 150, 100)
    treasureSprite.addImage(treasureSpriteImage)
    treasureFound = true

}

function helperEvent() {

    info = ("You see an invigorating ball of light. A voice Calls to you...")
}



//END OF EVENTS ------------------------------------------------------------------------------------------------------------------------------------------END OF EVENTS

//Enemy Attack Function ----------------------------------------------------------------------------------------------------------------------------------------------
function monsterAction() {

    //This is the monster Calculation: Monster's Base damage + its min damage spread, and max damage spread.
    monsterDamageCalc = floor(monsterDamage + round(random(monsterMinDamage, monsterMaxDamage)) + rooms / 10)

    //Attack

    if (monsterHealth > 0) {
        //  This is how the attack is done if you had blocked.
        if (block > 0) {

            //  This makes sure you don't heal if your block is more than the attack, then proceeds the attack
            if (block >= monsterDamage) {

                block = monsterDamageCalc


            }

            //  Sets the player health to current health minus (monster's damage minus player's block value then rounded down)
            health = health - (monsterDamageCalc - block);

            //Block Sound
            blockSound.play();

            //Debug
            print("Monster has attack for " + (monsterDamageCalc - block));
            monsterAttack = ("Monster has attack for " + (monsterDamageCalc - block));
        }
        //  This is how the attack is done if you haven't blocked. Sets the player health to current health minus monster's damage
        else {
            health = health - monsterDamageCalc;

            if (monsterDamageCalc == 0) {

                monsterAttack = ("Monster has missed!");

            } else {
                //Sound
                hurtSound.play();

                //Debug
                print("Monster has attack for " + monsterDamageCalc);
                monsterAttack = ("Monster has attack for " + monsterDamageCalc);
            }
        }
    } else {

        //Experience Given
        playerXP = playerXP + round(monsterPrizeXP + (intelligence / 2.35) * 45)

        //Loot Drop
        lootDrop();

        //Death Sound
        monsterDeathSound.play();
        //Debug
        print("Monster Died cannot attack")

    }
}

//END OF Enemy Attack Function ------------------------------------------------------------------------------------------------------------END OF Enemy Attack Function

//Treasure Action ---------------------------------------------------------------------------------------------------------------------------------------

function treasureAct() {

    var randomTreasure = random(1, 100)
    var weaponFoundChance = 25

    print("Weapon Chance: " + randomTreasure + " <= " + weaponFoundChance)

    if (randomTreasure <= weaponFoundChance && weaponClass < 4) {
        info = ("You open the treasure and found a new weapon!");
        weaponClass += 1

    } else {

        info = ("You open the treasure and find two potions!");
        potionAmount += 2;
    }

    treasureSprite.remove();

    treasureFound = false;

}



function spriteAct() {


}

function lootDrop() {

    var randomDropCheck = random(1, 100);
    print("Drop Chance: " + randomDropCheck + " <= " + lootChance)

    if (randomDropCheck <= lootChance) {
        treasureOpenSound.play();
        info = ("Potion Found!")
        potionAmount += 1
    }
}

function weapons() {

    if (weaponClass == 1) {

        //Name
        weaponName = ("Rusty Sword")

        //Damage Added
        weaponDamage = 1

    }
    if (weaponClass == 2) {

        //Name
        weaponName = ("Short Sword")

        //Damage Added
        weaponDamage = 2

    }
    if (weaponClass == 3) {

        //Name
        weaponName = ("Long Sword")

        //Damage Added
        weaponDamage = 3


    }
    if (weaponClass == 4) {

        //Name
        weaponName = ("Great Sword")

        //Damage Added
        weaponDamage = 4


    }

}
//TIMING ------------------------------- MUST FIX BUT IGNORE FOR NOW ------------------------------------------------------------------------------------------
//Wait function This gives time inbetween button inputs.
//function wait() {
//    waiting = true
//    print("Now waiting " + waiting)
//    if (waiting == true && timer == 0) {
//        for (timer = 0; timer <= 2000; timer++) {
//            //print(timer)
//        }
//        if (timer >= 2000) {
//            waiting = false
//            timer = 0
//            print("waiting finished")
//        }
//    }
//}
