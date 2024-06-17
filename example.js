// Example Phaser3 Scene found on the main branch

// Define the Example scene
class Example extends Phaser.Scene {
  constructor() {
    super({ key: "Example" });
  }

  // Preload assets
  preload() {
    this.load.image("background", "./path_through_space", { width: 800, height: 600 });
  }

  // Create scene elements
  create() {
    // add an image for the background
    const background = this.add.image(400, 300, "background").setOrigin(0);
    background.setScale(Math.max(cameraWidth / background.width, cameraHeight / background.height));

    // add a text object
    const title = this.add.text(395, 136, "Phaser3\nExample Scene", { fontFamily: "Arial", fontSize: "80px", fill: "#FFFFFF" }).setOrigin(0.5);
  }
  update() {
  }
}
// Phaser3 game configuartion settings
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  expandParent: false,
  scene: [Example], // Include all scene classes here
};

// Creates the actual Phaser 3 Game Object
const game = new Phaser.Game(config);