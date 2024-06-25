//import SettingsManager from "./settings-manager.js";
//import GamePlay from "./game-play.js";
//import SettingsScene from "./settings-scene.js";
//import HelpPage from "./help-page.js";
//import GameOver from "./game-over.js";

// Define the MainMenu Scene
class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  // Preload assets
  preload() {
    this.load.image("background", "/assets/pineapple.png", { frameWidth: 480, frameHeight: 300 });
    //this.load.audio("backgroundMusic", "../../assets/tanks/epic-angry-uplifting-143440.mp3");
  }



  // Create scene elements
  create() {

    /* create and loop background music */
    //this.song = this.sound.add('backgroundMusic', { loop: true });
    //this.song.setVolume(0.0005);
    //this.song.play();



    const background = this.add.image(400, 300, "background").setScale(1.75, 2);
    const title = this.add.text(395, 136, "text", { fontFamily: "Arialr", fontSize: "80px", fill: "#FFFFFF" }).setOrigin(0.5);

    // Create buttons and set click handlers
    // const playGameButton = this.createButton(400, 280, languageObj.start_game[language]);
    const playGameButton = this.add.sprite(400, 240, "background").setScale(3, 2.75).setFrame(0).setInteractive();
    const playGameText = this.add.text(400, 240, "play", { fontFamily: "Arial", fontSize: "30px", fill: "#FFF" }).setOrigin(0.5);
    playGameButton.on("pointerdown", () => {
      //this.anims.resumeAll();
      //this.scene.start("GamePlay");
    });

    // const helpButton = this.createButton(400, 380, languageObj.help[language]);
    //const helpButton = this.add.sprite(400, 330, "scroll-xs").setScale(3, 2.75).setFrame(2).setInteractive();
    //const helpText = this.add.text(400, 330, languageObj.help[language], { fontFamily: "Army Buster", fontSize: "30px", fill: "#010101" }).setOrigin(0.5);
    //helpButton.on("pointerdown", () => {
    //  this.scene.start("HelpPage");
    //});

    // const settingsButton = this.createButton(400, 480, languageObj.settings[language]);
    /*const settingsButton = this.add.sprite(400, 430, "scroll-xs").setScale(3, 2.75).setFrame(1).setInteractive();
    const settingsText = this.add.text(400, 430, languageObj.settings[language], { fontFamily: "Army Buster", fontSize: "30px", fill: "#010101" }).setOrigin(0.5);
    settingsButton.on("pointerdown", () => {
      this.scene.start("SettingsScene", {
        selectedOption: this.scene.get("SettingsScene").selectedOption,
        previousScene: "MainMenu",
      });
    });
  */}
}

// Add SettingsScene to the scene configuration
const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    expandParent: false,
  },
  scene: [MainMenu], // Include all scene classes here
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
      debug: false // set to true to see hit boxes
    },
  },
  //fps: { forceSetTimeOut: true, target: 30 } // limit update rate to 30 times per second.
};

const game = new Phaser.Game(config);
