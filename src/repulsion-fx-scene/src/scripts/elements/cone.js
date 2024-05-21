import { radians } from '../helpers';
import * as THREE from 'three';

export default class Cone {
  constructor() {
    this.geom = new THREE.ConeGeometry(.3, .5, 32);
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = radians(-180);
  }
}
