import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export default class Box {
  constructor() {
    this.geom = new RoundedBoxGeometry(.5, .5, .5, .02, .2);
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
  }
}
