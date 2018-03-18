import Phaser from 'phaser'
import { Boot, Game } from 'scenes'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [
    Boot,
    Game
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
