import Phaser from 'phaser'
import logo from 'images/logo.png'
import mushroom from 'images/mushroom2.png'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot' })
  }

  preload () {
    const progress = this.add.graphics()

    this.load.on('fileprogress', (file, value) => {
      progress.clear()
      progress.fillStyle(0xffffff, 0.75)
      progress.fillRect(700 - (value * 600), 250, value * 600, 100)
    })

    this.load.image('logo', logo)
    this.load.image('mushroom', mushroom)
  }

  create () {
    this.scene.start('Game')
  }
}
