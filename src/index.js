import { Game as PhaserGame, AUTO as PhaserAUTO } from 'phaser'
import logo from 'images/logo.png'

function preload () {
  this.load.image('logo', logo)
}

function create () {
  const logo = this.add.image(400, 150, 'logo')

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  })
}

const config = {
  type: PhaserAUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new PhaserGame(config) // eslint-disable-line no-unused-vars
