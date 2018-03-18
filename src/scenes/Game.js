import Phaser from 'phaser'
import { Logo } from '../images'
import { Mushroom } from '../sprites'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Game' })
  }

  create () {
    this.logo = new Logo(this, 400, 150)
    this.tweens.add({
      targets: this.logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })

    this.mushroom = new Mushroom(this, 0, 0)
    Phaser.Display.Align.In.Center(this.mushroom, this.add.zone(400, 300, 800, 600))
  }

  update () {
    this.mushroom.update()
  }
}
