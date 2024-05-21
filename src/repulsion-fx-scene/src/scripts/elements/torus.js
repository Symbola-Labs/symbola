import { radians } from '../helpers';
import * as THREE from 'three';

export default class Torus {
  constructor() {
    this.geom = new THREE.TorusGeometry(.3, .12, 30, 200);
    this.rotationX = radians(90);
    this.rotationY = 0;
    this.rotationZ = 0;
  }
}
