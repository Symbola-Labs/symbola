! function (t) {
  var e = {};

  function i(o) {
    if (e[o]) return e[o].exports;
    var s = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports
  }
  i.m = t, i.c = e, i.d = function (t, e, o) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    })
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var o = Object.create(null);
    if (i.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var s in t) i.d(o, s, function (e) {
        return t[e]
      }.bind(null, s));
    return o
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i(i.s = 1)
}([function (t, e, i) {}, function (t, e, i) {
  "use strict";
  i.r(e);
  i(0);
  var o = function (t) {
      return t * Math.PI / 180
    },
    s = function (t, e, i, o, s) {
      return (t - e) / (i - e) * (s - o) + o
    },
    n = function (t) {
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return e ? {
        r: parseInt(e[1], 16) / 255,
        g: parseInt(e[2], 16) / 255,
        b: parseInt(e[3], 16) / 255
      } : null
    };
  var r = function t() {
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), this.geom = new THREE.ConeBufferGeometry(.3, .5, 32), this.rotationX = 0, this.rotationY = 0, this.rotationZ = o(-180)
  };

  function a(t, e, i, o, s) {
    THREE.BufferGeometry.call(this), this.type = "RoundedBoxGeometry", s = isNaN(s) ? 1 : Math.max(1, Math.floor(s)), t = isNaN(t) ? 1 : t, e = isNaN(e) ? 1 : e, i = isNaN(i) ? 1 : i, o = isNaN(o) ? .15 : o;
    var n = t / 2 - (o = Math.min(o, Math.min(t, Math.min(e, Math.min(i))) / 2)),
      r = e / 2 - o,
      a = i / 2 - o;
    this.parameters = {
      width: t,
      height: e,
      depth: i,
      radius: o,
      radiusSegments: s
    };
    var h, u, c, p, d = s + 1,
      l = d * s + 1 << 3,
      f = new THREE.BufferAttribute(new Float32Array(3 * l), 3),
      w = new THREE.BufferAttribute(new Float32Array(3 * l), 3),
      v = [],
      g = [],
      y = new THREE.Vector3,
      m = [],
      E = [],
      M = [],
      R = d * s,
      b = d * s + 1;
    ! function () {
      for (var t = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(-1, -1, 1)], e = 0; e < 8; e++) v.push([]), g.push([]);
      for (var i = Math.PI / 2, h = new THREE.Vector3(n, r, a), u = 0; u <= s; u++) {
        var c = u / s * i,
          p = Math.cos(c),
          d = Math.sin(c);
        if (u != s)
          for (var l = 0; l <= s; l++) {
            var f = l / s * i;
            y.x = p * Math.cos(f), y.y = d, y.z = p * Math.sin(f);
            var w = y.clone().multiplyScalar(o).add(h);
            v[0].push(w), m.push(w);
            var M = y.clone().normalize();
            g[0].push(M), E.push(M)
          } else {
            y.set(0, 1, 0);
            var R = y.clone().multiplyScalar(o).add(h);
            v[0].push(R), m.push(R);
            var b = y.clone();
            g[0].push(b), E.push(b)
          }
      }
      for (var T = 1; T < 8; T++)
        for (e = 0; e < v[0].length; e++) {
          var H = v[0][e].clone().multiply(t[T]);
          v[T].push(H), m.push(H);
          var x = g[0][e].clone().multiply(t[T]);
          g[T].push(x), E.push(x)
        }
    }(), h = R, u = R + b, c = R + 2 * b, p = R + 3 * b, M.push(h), M.push(u), M.push(c), M.push(h), M.push(c), M.push(p), h = R + 4 * b, u = R + 5 * b, c = R + 6 * b, p = R + 7 * b, M.push(h), M.push(c), M.push(u), M.push(h), M.push(p), M.push(c), h = 0, u = b, c = 4 * b, p = 5 * b, M.push(h), M.push(c), M.push(u), M.push(u), M.push(c), M.push(p), h = 2 * b, u = 3 * b, c = 6 * b, p = 7 * b, M.push(h), M.push(c), M.push(u), M.push(u), M.push(c), M.push(p), h = s, u = s + 3 * b, c = s + 4 * b, p = s + 7 * b, M.push(h), M.push(u), M.push(c), M.push(u), M.push(p), M.push(c), h = s + b, u = s + 2 * b, c = s + 5 * b, p = s + 6 * b, M.push(h), M.push(c), M.push(u), M.push(u), M.push(c), M.push(p),
      function () {
        for (var t = [!0, !1, !0, !1, !1, !0, !1, !0], e = d * (s - 1), i = 0; i < 8; i++) {
          for (var o = b * i, n = 0; n < s - 1; n++)
            for (var r = n * d, a = (n + 1) * d, h = 0; h < s; h++) {
              var u = h + 1,
                c = o + r + h,
                p = o + r + u,
                l = o + a + h,
                f = o + a + u;
              t[i] ? (M.push(c), M.push(l), M.push(p), M.push(p), M.push(l), M.push(f)) : (M.push(c), M.push(p), M.push(l), M.push(p), M.push(f), M.push(l))
            }
          for (var w = 0; w < s; w++) {
            var v = o + e + w,
              g = o + e + w + 1,
              y = o + R;
            t[i] ? (M.push(v), M.push(y), M.push(g)) : (M.push(v), M.push(g), M.push(y))
          }
        }
      }(),
      function () {
        for (var t = 0; t < 4; t++)
          for (var e = t * b, i = 4 * b + e, o = !0 & t, n = 0; n < s; n++) {
            var r = n + 1,
              a = e + n,
              h = e + r,
              u = i + n,
              c = i + r;
            o ? (M.push(a), M.push(u), M.push(h), M.push(h), M.push(u), M.push(c)) : (M.push(a), M.push(h), M.push(u), M.push(h), M.push(c), M.push(u))
          }
      }(),
      function () {
        for (var t = s - 1, e = [0, 1, 4, 5], i = [3, 2, 7, 6], o = [0, 1, 1, 0], n = 0; n < 4; n++)
          for (var r = e[n] * b, a = i[n] * b, h = 0; h <= t; h++) {
            var u = r + s + h * d,
              c = r + (h != t ? s + (h + 1) * d : b - 1),
              p = a + s + h * d,
              l = a + (h != t ? s + (h + 1) * d : b - 1);
            o[n] ? (M.push(u), M.push(p), M.push(c), M.push(c), M.push(p), M.push(l)) : (M.push(u), M.push(c), M.push(p), M.push(c), M.push(l), M.push(p))
          }
      }(),
      function () {
        for (var t = [0, 2, 4, 6], e = [1, 3, 5, 7], i = 0; i < 4; i++)
          for (var o = b * t[i], n = b * e[i], r = 1 >= i, a = 0; a < s; a++) {
            var h = a * d,
              u = (a + 1) * d,
              c = o + h,
              p = o + u,
              l = n + h,
              f = n + u;
            r ? (M.push(c), M.push(l), M.push(p), M.push(p), M.push(l), M.push(f)) : (M.push(c), M.push(p), M.push(l), M.push(p), M.push(f), M.push(l))
          }
      }();
    for (var T = 0, H = 0; H < m.length; H++) f.setXYZ(T, m[H].x, m[H].y, m[H].z), w.setXYZ(T, E[H].x, E[H].y, E[H].z), T++;
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(M), 1)), this.addAttribute("position", f), this.addAttribute("normal", w)
  }
  a.prototype = Object.create(THREE.BufferGeometry.prototype), a.constructor = a;
  var h = function t() {
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), this.geom = new a(.5, .5, .5, .02, .2), this.rotationX = 0, this.rotationY = 0, this.rotationZ = 0
  };
  var u = function t() {
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), this.geom = new THREE.TorusBufferGeometry(.3, .12, 30, 200), this.rotationX = o(90), this.rotationY = 0, this.rotationZ = 0
  };

  function c(t, e) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
    }
  }(new(function () {
    function t() {
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t)
    }
    var e, i, a;
    return e = t, (i = [{
      key: "setup",
      value: function () {
        this.gui = new dat.GUI, this.raycaster = new THREE.Raycaster, this.backgroundColor = "#1b1b1b", this.gutter = {
          size: 1.2
        }, this.meshes = [], this.grid = {
          cols: 15,
          rows: 7
        }, this.width = window.innerWidth, this.height = window.innerHeight, this.mouse3D = new THREE.Vector2, this.repulsion = 1, this.geometries = [new h, new u, new r], this.gui.addFolder("Background").addColor(this, "backgroundColor").onChange((function (t) {
          document.body.style.backgroundColor = t
        })), window.addEventListener("resize", this.onResize.bind(this), {
          passive: !0
        }), window.addEventListener("mousemove", this.onMouseMove.bind(this), {
          passive: !0
        }), this.onMouseMove({
          clientX: 0,
          clientY: 0
        })
      }
    }, {
      key: "createScene",
      value: function () {
        this.scene = new THREE.Scene, this.renderer = new THREE.WebGLRenderer({
          antialias: !0,
          alpha: !0
        }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, document.body.appendChild(this.renderer.domElement)
      }
    }, {
      key: "createCamera",
      value: function () {
        var t = window.innerWidth,
          e = window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(45, t / e, 1), this.camera.position.set(0, 30, 0), this.scene.add(this.camera)
      }
    }, {
      key: "addAmbientLight",
      value: function () {
        var t = {
            color: "#2900af"
          },
          e = new THREE.AmbientLight(t.color, 1);
        this.scene.add(e), this.gui.addFolder("Ambient Light").addColor(t, "color").onChange((function (t) {
          e.color = n(t)
        }))
      }
    }, {
      key: "addSpotLight",
      value: function () {
        var t = {
            color: "#e000ff"
          },
          e = new THREE.SpotLight(t.color, 1, 1e3);
        e.position.set(0, 27, 0), e.castShadow = !0, this.scene.add(e), this.gui.addFolder("Spot Light").addColor(t, "color").onChange((function (t) {
          e.color = n(t)
        }))
      }
    }, {
      key: "addRectLight",
      value: function () {
        var t = {
            color: "#0077ff"
          },
          e = new THREE.RectAreaLight(t.color, 1, 2e3, 2e3);
        e.position.set(5, 50, 50), e.lookAt(0, 0, 0), this.scene.add(e), this.gui.addFolder("Rect Light").addColor(t, "color").onChange((function (t) {
          e.color = n(t)
        }))
      }
    }, {
      key: "addPointLight",
      value: function (t, e) {
        var i = new THREE.PointLight(t, 1, 1e3, 1);
        i.position.set(e.x, e.y, e.z), this.scene.add(i)
      }
    }, {
      key: "getRandomGeometry",
      value: function () {
        return this.geometries[Math.floor(Math.random() * Math.floor(this.geometries.length))]
      }
    }, {
      key: "createGrid",
      value: function () {
        this.groupMesh = new THREE.Object3D;
        var t = {
            color: "#ff00ff",
            metalness: .58,
            emissive: "#000000",
            roughness: .18
          },
          e = new THREE.MeshPhysicalMaterial(t),
          i = this.gui.addFolder("Mesh Material");
        i.addColor(t, "color").onChange((function (t) {
          e.color = n(t)
        })), i.add(t, "metalness", .1, 1).onChange((function (t) {
          e.metalness = t
        })), i.add(t, "roughness", .1, 1).onChange((function (t) {
          e.roughness = t
        }));
        for (var o = 0; o < this.grid.rows; o++) {
          this.meshes[o] = [];
          for (var s = 0; s < this.grid.cols; s++) {
            var r = this.getRandomGeometry(),
              a = this.getMesh(r.geom, e);
            a.position.set(s + s * this.gutter.size, 0, o + o * this.gutter.size), a.rotation.x = r.rotationX, a.rotation.y = r.rotationY, a.rotation.z = r.rotationZ, a.initialRotation = {
              x: a.rotation.x,
              y: a.rotation.y,
              z: a.rotation.z
            }, this.groupMesh.add(a), this.meshes[o][s] = a
          }
        }
        var h = .5 * (this.grid.cols - 1 + (this.grid.cols - 1) * this.gutter.size),
          u = .5 * (this.grid.rows - 1 + (this.grid.rows - 1) * this.gutter.size);
        this.groupMesh.position.set(-h, 0, -u), this.scene.add(this.groupMesh)
      }
    }, {
      key: "getMesh",
      value: function (t, e) {
        var i = new THREE.Mesh(t, e);
        return i.castShadow = !0, i.receiveShadow = !0, i
      }
    }, {
      key: "addCameraControls",
      value: function () {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
      }
    }, {
      key: "addFloor",
      value: function () {
        var t = new THREE.PlaneGeometry(2e3, 2e3),
          e = new THREE.ShadowMaterial({
            opacity: .3
          });
        this.floor = new THREE.Mesh(t, e), this.floor.position.y = 0, this.floor.rotateX(-Math.PI / 2), this.floor.receiveShadow = !0, this.scene.add(this.floor)
      }
    }, {
      key: "init",
      value: function () {
        this.setup(), this.createScene(), this.createCamera(), this.addAmbientLight(), this.addSpotLight(), this.addRectLight(), this.createGrid(), this.addCameraControls(), this.addFloor(), this.animate(), this.addPointLight(16773120, {
          x: 0,
          y: 10,
          z: -100
        }), this.addPointLight(16773120, {
          x: 100,
          y: 10,
          z: 0
        }), this.addPointLight(65280, {
          x: 20,
          y: 5,
          z: 20
        })
      }
    }, {
      key: "onMouseMove",
      value: function (t) {
        var e = t.clientX,
          i = t.clientY;
        this.mouse3D.x = e / this.width * 2 - 1, this.mouse3D.y = -i / this.height * 2 + 1
      }
    }, {
      key: "onResize",
      value: function () {
        this.width = window.innerWidth, this.height = window.innerHeight, this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height)
      }
    }, {
      key: "draw",
      value: function () {
        this.raycaster.setFromCamera(this.mouse3D, this.camera);
        var t, e, i, n, r = this.raycaster.intersectObjects([this.floor]);
        if (r.length)
          for (var a = r[0].point, h = a.x, u = a.z, c = 0; c < this.grid.rows; c++)
            for (var p = 0; p < this.grid.cols; p++) {
              var d = this.meshes[c][p],
                l = (t = h, e = u, i = d.position.x + this.groupMesh.position.x, n = d.position.z + this.groupMesh.position.z, Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - n, 2))),
                f = s(l, 6, 0, 0, 10);
              TweenMax.to(d.position, .2, {
                y: f < 1 ? 1 : f
              });
              var w = d.position.y / 2.5,
                v = w < 1 ? 1 : w;
              TweenMax.to(d.scale, .4, {
                ease: Expo.easeOut,
                x: v,
                y: v,
                z: v
              }), TweenMax.to(d.rotation, .5, {
                ease: Expo.easeOut,
                x: s(d.position.y, -1, 1, o(45), d.initialRotation.x),
                z: s(d.position.y, -1, 1, o(-90), d.initialRotation.z),
                y: s(d.position.y, -1, 1, o(90), d.initialRotation.y)
              })
            }
      }
    }, {
      key: "animate",
      value: function () {
        this.controls.update(), this.draw(), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.animate.bind(this))
      }
    }]) && c(e.prototype, i), a && c(e, a), t
  }())).init()
}]);
