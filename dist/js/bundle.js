/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./x/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./x/js/homeworld2/goblinmesh.js":
/*!***************************************!*\
  !*** ./x/js/homeworld2/goblinmesh.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goblinmesh; });
/* harmony import */ var _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x/graphics/obj.js */ "./x/js/x/graphics/obj.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Goblinmesh = /*#__PURE__*/function (_Obj) {
  _inherits(Goblinmesh, _Obj);

  function Goblinmesh(name, parent, status) {
    var _this;

    _classCallCheck(this, Goblinmesh);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Goblinmesh).call(this, name, 0, status));
    _this.__singlemesh = null;
    _this.__parent = parent;
    return _this;
  }

  _createClass(Goblinmesh, [{
    key: "render",
    value: function render(gl, model, level) {
      this.__singlemesh.render(gl, model, level);
    }
  }, {
    key: "init",
    value: function init(gl) {
      this.__singlemesh.init(gl);
    }
  }, {
    key: "singlemesh",
    get: function get() {
      return this.__singlemesh;
    },
    set: function set(o) {
      this.__singlemesh = o;
    }
  }, {
    key: "status",
    get: function get() {
      return this.__status;
    },
    set: function set(v) {
      this.__status = v;
      this.__singlemesh.status = v;
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.__parent;
    }
  }]);

  return Goblinmesh;
}(_x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/homeworld2/joint.js":
/*!**********************************!*\
  !*** ./x/js/homeworld2/joint.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Joint; });
/* harmony import */ var _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x/graphics/matrix.js */ "./x/js/x/graphics/matrix.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Joint = /*#__PURE__*/function () {
  function Joint(name, parent, position, rotation, scale, axis, freedom) {
    _classCallCheck(this, Joint);

    this.__name = name;
    this.__parent = parent;
    this.__position = position;
    this.__rotation = rotation;
    this.__scale = scale;
    this.__axis = axis;
    this.__freedom = freedom;
    this.__children = new Map();
    this.__objects = new Array();
    this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].identity();
  }

  _createClass(Joint, [{
    key: "render",
    value: function render(gl, model, level) {
      var _this = this;

      this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].translate(model, this.__position);

      if (this.__axis[0] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__axis[0], [1, 0, 0, 0]);
      }

      if (this.__axis[1] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__axis[1], [0, 1, 0, 0]);
      }

      if (this.__axis[2] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__axis[2], [0, 0, 1, 0]);
      }

      if (this.__rotation[1] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__position[0] > 0 ? this.__rotation[1] : -this.__rotation[1], [1, 0, 0, 0]);
      }

      if (this.__rotation[0] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__rotation[0], [0, 1, 0, 0]);
      }

      if (this.__rotation[2] !== 0) {
        this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotate(this.__model, this.__rotation[2], [0, 0, 1, 0]);
      }

      this.__model = _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(this.__model, this.__scale);

      this.__objects.forEach(function (o) {
        o.render(gl, _this.__model, level);
      });

      this.__children.forEach(function (o) {
        o.render(gl, _this.__model, level);
      });
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.__parent;
    }
  }, {
    key: "children",
    get: function get() {
      return this.__children;
    }
  }, {
    key: "objects",
    get: function get() {
      return this.__objects;
    }
  }]);

  return Joint;
}();



/***/ }),

/***/ "./x/js/homeworld2/multimesh.js":
/*!**************************************!*\
  !*** ./x/js/homeworld2/multimesh.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Multimesh; });
/* harmony import */ var _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x/graphics/obj.js */ "./x/js/x/graphics/obj.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Multimesh = /*#__PURE__*/function (_Obj) {
  _inherits(Multimesh, _Obj);

  function Multimesh(name, parent, status) {
    var _this;

    _classCallCheck(this, Multimesh);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Multimesh).call(this, name, 0, status));
    _this.__parent = parent;
    _this.__singlemesh = new Map();
    return _this;
  }

  _createClass(Multimesh, [{
    key: "render",
    value: function render(gl, model, level) {
      this.__singlemesh.forEach(function (singlemesh, index) {
        if (level === index) {
          singlemesh.render(gl, model, level);
        }
      });
    }
  }, {
    key: "init",
    value: function init(gl) {
      this.__singlemesh.forEach(function (singlemesh) {
        singlemesh.init(gl);
      });
    }
  }, {
    key: "singlemesh",
    get: function get() {
      return this.__singlemesh;
    }
  }, {
    key: "status",
    get: function get() {
      return this.__status;
    },
    set: function set(v) {
      this.__status = v;

      this.__singlemesh.forEach(function (singlemesh) {
        singlemesh.status = v;
      });
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.__parent;
    }
  }]);

  return Multimesh;
}(_x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/homeworld2/obj.js":
/*!********************************!*\
  !*** ./x/js/homeworld2/obj.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homeworld2Object; });
/* harmony import */ var _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x/graphics/obj.js */ "./x/js/x/graphics/obj.js");
/* harmony import */ var _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../x/graphics/matrix.js */ "./x/js/x/graphics/matrix.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Homeworld2Object = /*#__PURE__*/function (_Obj) {
  _inherits(Homeworld2Object, _Obj);

  function Homeworld2Object(name, level, status) {
    var _this;

    _classCallCheck(this, Homeworld2Object);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Homeworld2Object).call(this, name, level, status));
    _this.__version = 0;
    _this.__category = "";
    _this.__materials = new Map();
    _this.__textures = new Map();
    _this.__multimesh = new Map();
    _this.__goblinmesh = new Map();
    _this.__joints = new Map();
    _this.__root = null;
    return _this;
  }

  _createClass(Homeworld2Object, [{
    key: "init",
    value: function init(gl) {
      console.log("homeworld2 object init");
      console.log({
        version: this.__version,
        category: this.__category
      });

      this.__multimesh.forEach(function (multimesh) {
        multimesh.init(gl);
      });

      this.__goblinmesh.forEach(function (goblinmesh) {
        goblinmesh.init(gl);
      });
    }
  }, {
    key: "render",
    value: function render(gl) {
      this.__root.render(gl, _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_1__["default"].identity(), 0); // this.__multimesh.forEach(multimesh => {
      //     multimesh.render(gl);
      // });
      // this.__goblinmesh.forEach(goblinmesh => {
      //     goblinmesh.render(gl);
      // });

    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "program",
    get: function get() {
      return this.__program;
    },
    set: function set(o) {
      this.__program = o;
    }
  }, {
    key: "buffer",
    get: function get() {
      return this.__buffer;
    }
  }, {
    key: "multimesh",
    get: function get() {
      return this.__multimesh;
    }
  }, {
    key: "goblinmesh",
    get: function get() {
      return this.__goblinmesh;
    }
  }, {
    key: "joints",
    get: function get() {
      return this.__joints;
    }
  }, {
    key: "mode",
    set: function set(v) {
      this.__vertices.mode = v;
    }
  }, {
    key: "target",
    set: function set(v) {
      this.__buffer.target = v;
    }
  }, {
    key: "usage",
    set: function set(v) {
      this.__buffer.usage = v;
    }
  }, {
    key: "root",
    set: function set(o) {
      this.__root = o;
    }
  }]);

  return Homeworld2Object;
}(_x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/homeworld2/object.file.js":
/*!****************************************!*\
  !*** ./x/js/homeworld2/object.file.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectFile; });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./x/js/homeworld2/obj.js");
/* harmony import */ var _multimesh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multimesh.js */ "./x/js/homeworld2/multimesh.js");
/* harmony import */ var _goblinmesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goblinmesh.js */ "./x/js/homeworld2/goblinmesh.js");
/* harmony import */ var _singlemesh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singlemesh.js */ "./x/js/homeworld2/singlemesh.js");
/* harmony import */ var _x_graphics_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../x/graphics/primitive.js */ "./x/js/x/graphics/primitive.js");
/* harmony import */ var _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../x/graphics/obj.js */ "./x/js/x/graphics/obj.js");
/* harmony import */ var _x_graphics_buffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../x/graphics/buffer.js */ "./x/js/x/graphics/buffer.js");
/* harmony import */ var _x_graphics_vertices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../x/graphics/vertices.js */ "./x/js/x/graphics/vertices.js");
/* harmony import */ var _joint_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./joint.js */ "./x/js/homeworld2/joint.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var ObjectFile = /*#__PURE__*/function () {
  function ObjectFile() {
    _classCallCheck(this, ObjectFile);
  }

  _createClass(ObjectFile, null, [{
    key: "load",
    value: function load(path, name, application) {
      return new Promise(function (resolve, reject) {
        var w = new Worker('/js/homeworld2/object.unpack.js');
        var o = new _obj_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, 0, 1);
        w.postMessage({
          path: path
        });

        w.onmessage = function (event) {
          if (event.data.version) {
            console.log("version");
            o.__version = event.data.version;
          } else if (event.data.category) {
            console.log("category");
            o.__category = event.data.category;
          } else if (event.data.material) {
            console.log("material"); // TODO: DATA TO MATERIAL CLASS
            // o.__materials.set(event.data.material.name, event.data.material);
          } else if (event.data.texture) {
            console.log("texture"); // TODO: DATA TO TEXTURE CLASS
            // o.__textures.set(event.data.texture.name, event.data.texture);
          } else if (event.data.multimesh) {
            console.log("multimesh");
            var multimesh = new _multimesh_js__WEBPACK_IMPORTED_MODULE_1__["default"](event.data.multimesh.name, event.data.multimesh.parent, _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_5__["default"].enable);
            event.data.multimesh.children.forEach(function (_singlemesh) {
              var singlemesh = new _singlemesh_js__WEBPACK_IMPORTED_MODULE_3__["default"](_singlemesh.level, multimesh.status);

              _singlemesh.primitives.forEach(function (_primitive) {
                var primitive = new _x_graphics_primitive_js__WEBPACK_IMPORTED_MODULE_4__["default"]("", _singlemesh.level, multimesh.status);
                primitive.target = _x_graphics_buffer_js__WEBPACK_IMPORTED_MODULE_6__["default"].targetFromStr(_primitive.target);
                primitive.usage = _x_graphics_buffer_js__WEBPACK_IMPORTED_MODULE_6__["default"].usageFromStr(_primitive.usage);
                primitive.mode = _x_graphics_vertices_js__WEBPACK_IMPORTED_MODULE_7__["default"].modeFromStr(_primitive.mode);
                primitive.program = application.programs.get(_primitive.program);
                primitive.vertices.set(_primitive.vertices);
                primitive.buffer.data = _primitive.data;
                primitive.indices = _primitive.indices;
                singlemesh.add(primitive);
              });

              multimesh.singlemesh.set(singlemesh.level, singlemesh);
            });
            o.multimesh.set(multimesh.name, multimesh); // if(multimesh.name === "Root_mesh")
            // {
            //     multimesh.status = Obj.enable;
            // }
            //
            // if(multimesh.name === "Weapon_BigGun_Position_mesh")
            // {
            //     multimesh.status = Obj.enable;
            // }
          } else if (event.data.goblinmesh) {
            console.log("goblinmesh");
            var goblinmesh = new _goblinmesh_js__WEBPACK_IMPORTED_MODULE_2__["default"](event.data.goblinmesh.name, event.data.goblinmesh.parent, _x_graphics_obj_js__WEBPACK_IMPORTED_MODULE_5__["default"].enable);
            goblinmesh.singlemesh = new _singlemesh_js__WEBPACK_IMPORTED_MODULE_3__["default"](event.data.goblinmesh.singlemesh.level, goblinmesh.status);
            event.data.goblinmesh.singlemesh.primitives.forEach(function (_primitive) {
              var primitive = new _x_graphics_primitive_js__WEBPACK_IMPORTED_MODULE_4__["default"]("", event.data.goblinmesh.singlemesh.level, goblinmesh.status);
              primitive.target = _x_graphics_buffer_js__WEBPACK_IMPORTED_MODULE_6__["default"].targetFromStr(_primitive.target);
              primitive.usage = _x_graphics_buffer_js__WEBPACK_IMPORTED_MODULE_6__["default"].usageFromStr(_primitive.usage);
              primitive.mode = _x_graphics_vertices_js__WEBPACK_IMPORTED_MODULE_7__["default"].modeFromStr(_primitive.mode);
              primitive.program = application.programs.get(_primitive.program);
              primitive.vertices.set(_primitive.vertices);
              primitive.buffer.data = _primitive.data;
              primitive.indices = _primitive.indices;
              goblinmesh.singlemesh.add(primitive);
            });
            o.goblinmesh.set(goblinmesh.name, goblinmesh);
          } else if (event.data.joints) {
            console.log("joints");
            event.data.joints.forEach(function (_joint) {
              var joint = new _joint_js__WEBPACK_IMPORTED_MODULE_8__["default"](_joint.name, _joint.parent, _joint.position, _joint.rotation, _joint.scale, _joint.axis, _joint.freedom);
              o.joints.set(joint.name, joint);
            });
          } else if (event.data.engineshape) {
            console.log("engineshape"); // console.log({engineshape: event.data.engineshape});
          } else if (event.data.engineburn) {
            console.log("engineburn"); // console.log({engineburn: event.data.engineburn});
          } else if (event.data.navlights) {
            console.log("navlights"); // console.log({navlights: event.data.navlights});
          } else if (event.data.marker) {
            console.log("marker"); // console.log({marker: event.data.marker});
          } else if (event.data.boundary) {
            console.log("boundary"); // console.log({boundary: event.data.boundary});
          } else if (event.data.collision) {
            console.log("collision"); // console.log({collision: event.data.collision});
          } else if (event.data.basicmesh) {
            console.log("basicmesh"); // console.log({basicmesh: event.data.basicmesh});
          } else if (event.data.information) {
            console.log("information"); // console.log({information: event.data.information});
          } else if (event.data.finish) {
            if (event.data.error) {
              w.terminate();
              w = null;
              reject(new Error(event.data.error));
            } else {
              console.log({
                multimesh: o.multimesh
              });
              console.log("finish");
              o.joints.forEach(function (joint) {
                if (joint.parent === '') {
                  o.root = joint;
                } else {
                  var parent = o.joints.get(joint.parent);
                  parent.children.set(joint.name, joint);
                }
              });
              o.multimesh.forEach(function (multimesh) {
                var parent = o.joints.get(multimesh.parent);
                parent.objects.push(multimesh);
              });
              o.goblinmesh.forEach(function (goblinmesh) {
                var parent = o.joints.get(goblinmesh.parent);
                parent.objects.push(goblinmesh);
              });
              w.terminate();
              w = null;
              application.objects.add(o);
              resolve(o);
            }
          }
        };
      });
    }
  }]);

  return ObjectFile;
}();



/***/ }),

/***/ "./x/js/homeworld2/singlemesh.js":
/*!***************************************!*\
  !*** ./x/js/homeworld2/singlemesh.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Singlemesh; });
/* harmony import */ var _x_graphics_complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x/graphics/complex.js */ "./x/js/x/graphics/complex.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Singlemesh = /*#__PURE__*/function (_Complex) {
  _inherits(Singlemesh, _Complex);

  function Singlemesh(level, status) {
    _classCallCheck(this, Singlemesh);

    return _possibleConstructorReturn(this, _getPrototypeOf(Singlemesh).call(this, "", level, status));
  }

  _createClass(Singlemesh, [{
    key: "level",
    get: function get() {
      return this.__level;
    }
  }, {
    key: "status",
    set: function set(v) {
      this.__status = v;

      this.__children.forEach(function (o) {
        return o.status = v;
      });
    }
  }]);

  return Singlemesh;
}(_x_graphics_complex_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/index.js":
/*!***********************!*\
  !*** ./x/js/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x/graphics/application.js */ "./x/js/x/graphics/application.js");
/* harmony import */ var _homeworld2_object_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeworld2/object.file.js */ "./x/js/homeworld2/object.file.js");
/* harmony import */ var _x_graphics_vertex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x/graphics/vertex.js */ "./x/js/x/graphics/vertex.js");
/* harmony import */ var _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./x/graphics/shader.js */ "./x/js/x/graphics/shader.js");
/* harmony import */ var _x_graphics_program_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./x/graphics/program.js */ "./x/js/x/graphics/program.js");
/* harmony import */ var _x_graphics_primitives_cube_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./x/graphics/primitives/cube.js */ "./x/js/x/graphics/primitives/cube.js");
/* harmony import */ var _x_graphics_primitives_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./x/graphics/primitives/triangle.js */ "./x/js/x/graphics/primitives/triangle.js");
/* harmony import */ var _x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./x/graphics/matrix.js */ "./x/js/x/graphics/matrix.js");








console.log(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].scale(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].identity(), [2, 2, 2, 0]));
console.log(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].translate(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].identity(), [2, 2, 2, 0]));
console.log(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].rotate(_x_graphics_matrix_js__WEBPACK_IMPORTED_MODULE_7__["default"].identity(), 45 * 0.01745329251994329576923690768489, [0, 1, 0, 0]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].load("/shader/simple.fragment.shader", "simple fragment", _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].fragment, _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].none, _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].load("/shader/simple.vertex.shader", "simple vertex", _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].vertex, _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].none, _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].load("/shader/standard.fragment.shader", "standard fragment", _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].fragment, _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].none, _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].load("/shader/standard.vertex.shader", "standard vertex", _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].vertex, _x_graphics_shader_js__WEBPACK_IMPORTED_MODULE_3__["default"].none, _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_program_js__WEBPACK_IMPORTED_MODULE_4__["default"].load("standard", ["standard fragment", "standard vertex"], ["mvp", "cameraPos", "lightColor", "lightPos", "ambientStrength"], ["vertexPosition", "vertexNormal"], _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_x_graphics_program_js__WEBPACK_IMPORTED_MODULE_4__["default"].load("simple", ["simple fragment", "simple vertex"], [], ["vertexPosition"], _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"])); // application.dispatch(Triangle.load("triangle", "simple", application));
// application.dispatch(Cube.load("cube", "standard", application));

_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_homeworld2_object_file_js__WEBPACK_IMPORTED_MODULE_1__["default"].load("/sample.hod", "sample", _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
_x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].execute().then(function (results) {
  return _x_graphics_application_js__WEBPACK_IMPORTED_MODULE_0__["default"].run();
})["catch"](function (e) {
  return console.log(e);
});
console.log("hello world");

/***/ }),

/***/ "./x/js/x/core/executor.js":
/*!*********************************!*\
  !*** ./x/js/x/core/executor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Executor; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Executor = /*#__PURE__*/function () {
  function Executor() {
    _classCallCheck(this, Executor);

    this.__queue = null;
  }

  _createClass(Executor, [{
    key: "dispatch",
    value: function dispatch(o) {
      if (o) {
        this.__queue = this.__queue || [];

        this.__queue.push(o);
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      if (this.__queue) {
        return Promise.all(this.__queue);
      }

      return Promise.reject(new Error());
    }
  }]);

  return Executor;
}();



/***/ }),

/***/ "./x/js/x/graphics/application.js":
/*!****************************************!*\
  !*** ./x/js/x/graphics/application.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return application; });
/* harmony import */ var _surface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surface.js */ "./x/js/x/graphics/surface.js");
/* harmony import */ var _core_executor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/executor.js */ "./x/js/x/core/executor.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects.js */ "./x/js/x/graphics/objects.js");
/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix.js */ "./x/js/x/graphics/matrix.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Application = /*#__PURE__*/function (_Executor) {
  _inherits(Application, _Executor);

  function Application() {
    var _this;

    _classCallCheck(this, Application);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Application).call(this));
    _this.__x = 0;
    _this.__y = 0;
    _this.__width = 0;
    _this.__height = 0;
    _this.__name = "";
    _this.__shaders = new Map();
    _this.__programs = new Map();
    _this.__surface = null;
    _this.__objects = new _objects_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.__major = 4;
    _this.__minor = 5;
    _this.__mode = 0;
    return _this;
  }

  _createClass(Application, [{
    key: "init",
    value: function init() {
      // create canvas and
      if (!this.__surface) {
        var canvas = document.createElement("canvas");
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        document.body.appendChild(canvas);
        this.__surface = new _surface_js__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);

        this.__surface.init();
      }
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.__programs.forEach(function (program) {
        program.create(_this2.__surface.gl, _this2);
      });

      console.log(this.__objects);

      this.__objects.init(this.__surface.gl);

      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      console.log("application render");
      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      this.gl.clearColor(this.background[0], this.background[1], this.background[2], this.background[3]);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.COLOR_DEPTH_BIT);

      this.__objects.render(this.gl, _matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].identity(), 0);
    }
  }, {
    key: "shader",
    value: function shader(o) {
      this.__shaders.set(o.name, o);

      return o;
    }
  }, {
    key: "gl",
    get: function get() {
      return this.__surface.gl;
    }
  }, {
    key: "programs",
    get: function get() {
      return this.__programs;
    }
  }, {
    key: "shaders",
    get: function get() {
      return this.__shaders;
    }
  }, {
    key: "objects",
    get: function get() {
      return this.__objects;
    }
  }, {
    key: "background",
    get: function get() {
      return this.__surface.background;
    }
  }]);

  return Application;
}(_core_executor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

var application = new Application();


/***/ }),

/***/ "./x/js/x/graphics/buffer.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/buffer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buffer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Buffer = /*#__PURE__*/function () {
  _createClass(Buffer, null, [{
    key: "targetFromStr",
    value: function targetFromStr(s) {
      if (s === "array") {
        s = Buffer.array;
      } else {
        throw new Error();
      }

      return s;
    }
  }, {
    key: "usageFromStr",
    value: function usageFromStr(s) {
      if (s[0] === "statical") {
        s[0] = Buffer.statical;
      } else {
        throw new Error();
      }

      if (s[1] === "draw") {
        s[1] = Buffer.draw;
      } else {
        throw new Error();
      }

      return s;
    }
  }, {
    key: "getTarget",
    value: function getTarget(gl, target) {
      switch (target) {
        case Buffer.array:
          return gl.ARRAY_BUFFER;

        default:
          throw new Error();
      }
    }
  }, {
    key: "getUsage",
    value: function getUsage(gl, usage) {
      switch (usage[0]) {
        case Buffer.statical:
          switch (usage[1]) {
            case Buffer.draw:
              return gl.STATIC_DRAW;

            default:
              throw new Error();
          }

        default:
          throw new Error();
      }
    }
  }, {
    key: "none",
    get: function get() {
      return 0;
    }
  }, {
    key: "array",
    get: function get() {
      return 1;
    }
  }, {
    key: "atomic_counter",
    get: function get() {
      return 2;
    }
  }, {
    key: "copy_read",
    get: function get() {
      return 3;
    }
  }, {
    key: "copy_write",
    get: function get() {
      return 4;
    }
  }, {
    key: "dispatch_indirect",
    get: function get() {
      return 5;
    }
  }, {
    key: "draw_indirect",
    get: function get() {
      return 6;
    }
  }, {
    key: "element_array",
    get: function get() {
      return 7;
    }
  }, {
    key: "pixel_pack",
    get: function get() {
      return 8;
    }
  }, {
    key: "pixel_unpack",
    get: function get() {
      return 9;
    }
  }, {
    key: "query",
    get: function get() {
      return 10;
    }
  }, {
    key: "shader_storage",
    get: function get() {
      return 11;
    }
  }, {
    key: "texture",
    get: function get() {
      return 12;
    }
  }, {
    key: "transform_feedback",
    get: function get() {
      return 13;
    }
  }, {
    key: "uniform",
    get: function get() {
      return 14;
    }
  }, {
    key: "stream",
    get: function get() {
      return 1;
    }
  }, {
    key: "statical",
    get: function get() {
      return 2;
    }
  }, {
    key: "dynamical",
    get: function get() {
      return 3;
    }
  }, {
    key: "draw",
    get: function get() {
      return 1;
    }
  }, {
    key: "read",
    get: function get() {
      return 2;
    }
  }, {
    key: "copy",
    get: function get() {
      return 3;
    }
  }]);

  function Buffer() {
    _classCallCheck(this, Buffer);

    this.__data = null;
    this.__target = Buffer.none;
    this.__usage = [Buffer.none, Buffer.none];
    this.__id = 0;
  }

  _createClass(Buffer, [{
    key: "init",
    value: function init(gl) {
      if (!this.__id) {
        this.__id = gl.createBuffer();
        gl.bindBuffer(Buffer.getTarget(gl, this.__target), this.__id);
        gl.bufferData(Buffer.getTarget(gl, this.__target), this.__data, Buffer.getUsage(gl, this.__usage));
      }
    }
  }, {
    key: "bind",
    value: function bind(gl) {
      gl.bindBuffer(Buffer.getTarget(gl, this.__target), this.__id);
    }
  }, {
    key: "target",
    set: function set(v) {
      this.__target = v;
    }
  }, {
    key: "usage",
    set: function set(v) {
      this.__usage = v;
    }
  }, {
    key: "data",
    set: function set(v) {
      this.__data = v;
    },
    get: function get() {
      return this.__data;
    }
  }, {
    key: "size",
    get: function get() {
      return this.__data ? this.__data.length : 0;
    }
  }]);

  return Buffer;
}();



/***/ }),

/***/ "./x/js/x/graphics/camera.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/camera.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function Camera() {
  _classCallCheck(this, Camera);

  this.__center = [];
  this.__up = [];
  this.__position = [];
  this.__matrix = []; //         protected:  x::graphics::vector __center;
  // protected:  x::graphics::vector __up;
  // protected:  x::graphics::vector __position;
  // protected:  x::graphics::matrix __matrix;
};



/***/ }),

/***/ "./x/js/x/graphics/complex.js":
/*!************************************!*\
  !*** ./x/js/x/graphics/complex.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Complex; });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./x/js/x/graphics/obj.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Complex = /*#__PURE__*/function (_Obj) {
  _inherits(Complex, _Obj);

  function Complex(name, level, status) {
    var _this;

    _classCallCheck(this, Complex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Complex).call(this, name, level, status));
    _this.__children = new Array();
    return _this;
  }

  _createClass(Complex, [{
    key: "add",
    value: function add(o) {
      this.__children.push(o);
    }
  }, {
    key: "render",
    value: function render(gl, model, level) {
      this.__children.forEach(function (o) {
        o.render(gl, model, level);
      });
    }
  }, {
    key: "init",
    value: function init(gl) {
      this.__children.forEach(function (o) {
        o.init(gl);
      });
    }
  }, {
    key: "status",
    set: function set(v) {
      this.__status = v;

      this.__children.forEach(function (o) {
        o.status = v;
      });
    }
  }]);

  return Complex;
}(_obj_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/x/graphics/indices.js":
/*!************************************!*\
  !*** ./x/js/x/graphics/indices.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Indices; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Indices = /*#__PURE__*/function () {
  function Indices(indices) {
    _classCallCheck(this, Indices);

    this.__data = null;
    this.__id = null;
    this.__indices = indices;
  }

  _createClass(Indices, [{
    key: "init",
    value: function init(gl) {
      if (this.__indices) {
        if (!this.__id) {
          if (!this.__data) {
            this.__data = new Uint16Array(this.__indices);
          }

          this.__id = gl.createBuffer();
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.__id);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.__data, gl.STATIC_DRAW);
        }
      }
    }
  }, {
    key: "bind",
    value: function bind(gl) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.__id);
    }
  }, {
    key: "size",
    get: function get() {
      return this.__indices.length;
    }
  }]);

  return Indices;
}();



/***/ }),

/***/ "./x/js/x/graphics/light.js":
/*!**********************************!*\
  !*** ./x/js/x/graphics/light.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Light; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Light = function Light() {
  _classCallCheck(this, Light);

  this.__position = [0, 0, 0, 0];
  this.__color = [1, 1, 1, 1];
  this.__ambient = 1;
};



/***/ }),

/***/ "./x/js/x/graphics/matrix.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/matrix.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ "./x/js/x/graphics/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    _classCallCheck(this, Matrix);
  }

  _createClass(Matrix, null, [{
    key: "identity",
    value: function identity() {
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
  }, {
    key: "zero",
    value: function zero() {
      return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  }, {
    key: "deepcopy",
    value: function deepcopy(m) {
      var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (var i = 0; i < result.length; i++) {
        result[i] = m[i];
      }

      return result;
    }
  }, {
    key: "lookat",
    value: function lookat(eye, center, up) {
      var f = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(_vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].minus(center, eye));
      var s = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(_vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(f, up));
      var u = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(s, f);
      var result = Matrix.identity();
      result[0 * 4 + 0] = s[0];
      result[1 * 4 + 0] = s[1];
      result[2 * 4 + 0] = s[2];
      result[0 * 4 + 1] = u[0];
      result[1 * 4 + 1] = u[1];
      result[2 * 4 + 1] = u[2];
      result[0 * 4 + 2] = -f[0];
      result[1 * 4 + 2] = -f[1];
      result[2 * 4 + 2] = -f[2];
      result[3 * 4 + 0] = -_vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].dot(s, eye);
      result[3 * 4 + 1] = -_vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].dot(u, eye);
      result[3 * 4 + 2] = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].dot(f, eye);
      return result;
    }
  }, {
    key: "perspective",
    value: function perspective(fovy, aspect, near, far) {
      var half = Math.tan(fovy / 2.0);
      var result = Matrix.zero();
      result[0] = 1.0 / (aspect * half);
      result[4 + 1] = 1.0 / half;
      result[2 * 4 + 2] = (far + near) / (near - far);
      result[2 * 4 + 3] = -1.0;
      result[3 * 4 + 2] = -(2.0 * far * near) / (far - near);
      return result;
    }
  }, {
    key: "multiply",
    value: function multiply(x, y) {
      var result = Matrix.zero();
      result[0 * 4 + 0] = x[0 * 4 + 0] * y[0 * 4 + 0] + x[0 * 4 + 1] * y[1 * 4 + 0] + x[0 * 4 + 2] * y[2 * 4 + 0] + x[0 * 4 + 3] * y[3 * 4 + 0];
      result[0 * 4 + 1] = x[0 * 4 + 0] * y[0 * 4 + 1] + x[0 * 4 + 1] * y[1 * 4 + 1] + x[0 * 4 + 2] * y[2 * 4 + 1] + x[0 * 4 + 3] * y[3 * 4 + 1];
      result[0 * 4 + 2] = x[0 * 4 + 0] * y[0 * 4 + 2] + x[0 * 4 + 1] * y[1 * 4 + 2] + x[0 * 4 + 2] * y[2 * 4 + 2] + x[0 * 4 + 3] * y[3 * 4 + 2];
      result[0 * 4 + 3] = x[0 * 4 + 0] * y[0 * 4 + 3] + x[0 * 4 + 1] * y[1 * 4 + 3] + x[0 * 4 + 2] * y[2 * 4 + 3] + x[0 * 4 + 3] * y[3 * 4 + 3];
      result[1 * 4 + 0] = x[1 * 4 + 0] * y[0 * 4 + 0] + x[1 * 4 + 1] * y[1 * 4 + 0] + x[1 * 4 + 2] * y[2 * 4 + 0] + x[1 * 4 + 3] * y[3 * 4 + 0];
      result[1 * 4 + 1] = x[1 * 4 + 0] * y[0 * 4 + 1] + x[1 * 4 + 1] * y[1 * 4 + 1] + x[1 * 4 + 2] * y[2 * 4 + 1] + x[1 * 4 + 3] * y[3 * 4 + 1];
      result[1 * 4 + 2] = x[1 * 4 + 0] * y[0 * 4 + 2] + x[1 * 4 + 1] * y[1 * 4 + 2] + x[1 * 4 + 2] * y[2 * 4 + 2] + x[1 * 4 + 3] * y[3 * 4 + 2];
      result[1 * 4 + 3] = x[1 * 4 + 0] * y[0 * 4 + 3] + x[1 * 4 + 1] * y[1 * 4 + 3] + x[1 * 4 + 2] * y[2 * 4 + 3] + x[1 * 4 + 3] * y[3 * 4 + 3];
      result[2 * 4 + 0] = x[2 * 4 + 0] * y[0 * 4 + 0] + x[2 * 4 + 1] * y[1 * 4 + 0] + x[2 * 4 + 2] * y[2 * 4 + 0] + x[2 * 4 + 3] * y[3 * 4 + 0];
      result[2 * 4 + 1] = x[2 * 4 + 0] * y[0 * 4 + 1] + x[2 * 4 + 1] * y[1 * 4 + 1] + x[2 * 4 + 2] * y[2 * 4 + 1] + x[2 * 4 + 3] * y[3 * 4 + 1];
      result[2 * 4 + 2] = x[2 * 4 + 0] * y[0 * 4 + 2] + x[2 * 4 + 1] * y[1 * 4 + 2] + x[2 * 4 + 2] * y[2 * 4 + 2] + x[2 * 4 + 3] * y[3 * 4 + 2];
      result[2 * 4 + 3] = x[2 * 4 + 0] * y[0 * 4 + 3] + x[2 * 4 + 1] * y[1 * 4 + 3] + x[2 * 4 + 2] * y[2 * 4 + 3] + x[2 * 4 + 3] * y[3 * 4 + 3];
      result[3 * 4 + 0] = x[3 * 4 + 0] * y[0 * 4 + 0] + x[3 * 4 + 1] * y[1 * 4 + 0] + x[3 * 4 + 2] * y[2 * 4 + 0] + x[3 * 4 + 3] * y[3 * 4 + 0];
      result[3 * 4 + 1] = x[3 * 4 + 0] * y[0 * 4 + 1] + x[3 * 4 + 1] * y[1 * 4 + 1] + x[3 * 4 + 2] * y[2 * 4 + 1] + x[3 * 4 + 3] * y[3 * 4 + 1];
      result[3 * 4 + 2] = x[3 * 4 + 0] * y[0 * 4 + 2] + x[3 * 4 + 1] * y[1 * 4 + 2] + x[3 * 4 + 2] * y[2 * 4 + 2] + x[3 * 4 + 3] * y[3 * 4 + 2];
      result[3 * 4 + 3] = x[3 * 4 + 0] * y[0 * 4 + 3] + x[3 * 4 + 1] * y[1 * 4 + 3] + x[3 * 4 + 2] * y[2 * 4 + 3] + x[3 * 4 + 3] * y[3 * 4 + 3];
      return result;
    }
  }, {
    key: "translate",
    value: function translate(m, v) {
      var result = Matrix.deepcopy(m);
      result[3 * 4 + 0] = m[0 * 4 + 0] * v[0] + m[1 * 4 + 0] * v[1] + m[2 * 4 + 0] * v[2] + m[3 * 4 + 0];
      result[3 * 4 + 1] = m[0 * 4 + 1] * v[0] + m[1 * 4 + 1] * v[1] + m[2 * 4 + 1] * v[2] + m[3 * 4 + 1];
      result[3 * 4 + 2] = m[0 * 4 + 2] * v[0] + m[1 * 4 + 2] * v[1] + m[2 * 4 + 2] * v[2] + m[3 * 4 + 2];
      result[3 * 4 + 3] = m[0 * 4 + 3] * v[0] + m[1 * 4 + 3] * v[1] + m[2 * 4 + 3] * v[2] + m[3 * 4 + 3];
      return result;
    }
  }, {
    key: "rotate",
    value: function rotate(m, angle, v) {
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      var axis = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(v);
      var temp = _vector_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(axis, 1 - c);
      var rotation = Matrix.zero();
      rotation[0 * 4 + 0] = c + temp[0] * axis[0];
      rotation[0 * 4 + 1] = temp[0] * axis[1] + s * axis[2];
      rotation[0 * 4 + 2] = temp[0] * axis[2] - s * axis[1];
      rotation[1 * 4 + 0] = temp[1] * axis[0] - s * axis[2];
      rotation[1 * 4 + 1] = c + temp[1] * axis[1];
      rotation[1 * 4 + 2] = temp[1] * axis[2] + s * axis[0];
      rotation[2 * 4 + 0] = temp[2] * axis[0] + s * axis[1];
      rotation[2 * 4 + 1] = temp[2] * axis[1] - s * axis[0];
      rotation[2 * 4 + 2] = c + temp[2] * axis[2];
      var result = Matrix.zero();
      result[0 * 4 + 0] = m[0 * 4 + 0] * rotation[0 * 4 + 0] + m[1 * 4 + 0] * rotation[0 * 4 + 1] + m[2 * 4 + 0] * rotation[0 * 4 + 2];
      result[0 * 4 + 1] = m[0 * 4 + 1] * rotation[0 * 4 + 0] + m[1 * 4 + 1] * rotation[0 * 4 + 1] + m[2 * 4 + 1] * rotation[0 * 4 + 2];
      result[0 * 4 + 2] = m[0 * 4 + 2] * rotation[0 * 4 + 0] + m[1 * 4 + 2] * rotation[0 * 4 + 1] + m[2 * 4 + 2] * rotation[0 * 4 + 2];
      result[0 * 4 + 3] = m[0 * 4 + 3] * rotation[0 * 4 + 0] + m[1 * 4 + 3] * rotation[0 * 4 + 1] + m[2 * 4 + 3] * rotation[0 * 4 + 2];
      result[1 * 4 + 0] = m[0 * 4 + 0] * rotation[1 * 4 + 0] + m[1 * 4 + 0] * rotation[1 * 4 + 1] + m[2 * 4 + 0] * rotation[1 * 4 + 2];
      result[1 * 4 + 1] = m[0 * 4 + 1] * rotation[1 * 4 + 0] + m[1 * 4 + 1] * rotation[1 * 4 + 1] + m[2 * 4 + 1] * rotation[1 * 4 + 2];
      result[1 * 4 + 2] = m[0 * 4 + 2] * rotation[1 * 4 + 0] + m[1 * 4 + 2] * rotation[1 * 4 + 1] + m[2 * 4 + 2] * rotation[1 * 4 + 2];
      result[1 * 4 + 3] = m[0 * 4 + 3] * rotation[1 * 4 + 0] + m[1 * 4 + 3] * rotation[1 * 4 + 1] + m[2 * 4 + 3] * rotation[1 * 4 + 2];
      result[2 * 4 + 0] = m[0 * 4 + 0] * rotation[2 * 4 + 0] + m[1 * 4 + 0] * rotation[2 * 4 + 1] + m[2 * 4 + 0] * rotation[2 * 4 + 2];
      result[2 * 4 + 1] = m[0 * 4 + 1] * rotation[2 * 4 + 0] + m[1 * 4 + 1] * rotation[2 * 4 + 1] + m[2 * 4 + 1] * rotation[2 * 4 + 2];
      result[2 * 4 + 2] = m[0 * 4 + 2] * rotation[2 * 4 + 0] + m[1 * 4 + 2] * rotation[2 * 4 + 1] + m[2 * 4 + 2] * rotation[2 * 4 + 2];
      result[2 * 4 + 3] = m[0 * 4 + 3] * rotation[2 * 4 + 0] + m[1 * 4 + 3] * rotation[2 * 4 + 1] + m[2 * 4 + 3] * rotation[2 * 4 + 2];
      result[3 * 4 + 0] = m[3 * 4 + 0];
      result[3 * 4 + 1] = m[3 * 4 + 1];
      result[3 * 4 + 2] = m[3 * 4 + 2];
      result[3 * 4 + 3] = m[3 * 4 + 3];
      return result;
    }
  }, {
    key: "scale",
    value: function scale(m, v) {
      var result = Matrix.zero();
      result[0 * 4 + 0] = m[0 * 4 + 0] * v[0];
      result[0 * 4 + 1] = m[0 * 4 + 1] * v[0];
      result[0 * 4 + 2] = m[0 * 4 + 2] * v[0];
      result[0 * 4 + 3] = m[0 * 4 + 3] * v[0];
      result[1 * 4 + 0] = m[1 * 4 + 0] * v[1];
      result[1 * 4 + 1] = m[1 * 4 + 1] * v[1];
      result[1 * 4 + 2] = m[1 * 4 + 2] * v[1];
      result[1 * 4 + 3] = m[1 * 4 + 3] * v[1];
      result[2 * 4 + 0] = m[2 * 4 + 0] * v[2];
      result[2 * 4 + 1] = m[2 * 4 + 1] * v[2];
      result[2 * 4 + 2] = m[2 * 4 + 2] * v[2];
      result[2 * 4 + 3] = m[2 * 4 + 3] * v[2];
      result[3 * 4 + 0] = m[3 * 4 + 0];
      result[3 * 4 + 1] = m[3 * 4 + 1];
      result[3 * 4 + 2] = m[3 * 4 + 2];
      result[3 * 4 + 3] = m[3 * 4 + 3];
      return result;
    }
  }, {
    key: "vectorMultiply",
    value: function vectorMultiply(m, v) {
      var result = [0, 0, 0, 0];
      result[0] = m[0 * 4 + 0] * v[0] + m[0 * 4 + 1] * v[1] + m[0 * 4 + 2] * v[2] + m[0 * 4 + 3] * v[3];
      result[1] = m[1 * 4 + 0] * v[0] + m[1 * 4 + 1] * v[1] + m[1 * 4 + 2] * v[2] + m[1 * 4 + 3] * v[3];
      result[2] = m[2 * 4 + 0] * v[0] + m[2 * 4 + 1] * v[1] + m[2 * 4 + 2] * v[2] + m[2 * 4 + 3] * v[3];
      result[3] = m[3 * 4 + 0] * v[0] + m[3 * 4 + 1] * v[1] + m[3 * 4 + 2] * v[2] + m[3 * 4 + 3] * v[3];
      return result;
    }
  }]);

  return Matrix;
}();



/***/ }),

/***/ "./x/js/x/graphics/obj.js":
/*!********************************!*\
  !*** ./x/js/x/graphics/obj.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Obj; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Obj = /*#__PURE__*/function () {
  _createClass(Obj, null, [{
    key: "enable",
    get: function get() {
      return 1;
    }
  }, {
    key: "disable",
    get: function get() {
      return 0;
    }
  }]);

  function Obj(name, level, status) {
    _classCallCheck(this, Obj);

    this.__name = name;
    this.__level = level || 0;
    this.__status = status;
  }

  _createClass(Obj, [{
    key: "render",
    value: function render(gl, model, level) {
      console.log("render");
    }
  }, {
    key: "init",
    value: function init(gl) {
      console.log("init");
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "status",
    set: function set(v) {
      this.__status = v;
    }
  }]);

  return Obj;
}();



/***/ }),

/***/ "./x/js/x/graphics/objects.js":
/*!************************************!*\
  !*** ./x/js/x/graphics/objects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Objects; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Objects = /*#__PURE__*/function () {
  function Objects() {
    _classCallCheck(this, Objects);

    this.__objects = new Map();
  }

  _createClass(Objects, [{
    key: "add",
    value: function add(o) {
      this.__objects.set(o.name, o);
    }
  }, {
    key: "init",
    value: function init(gl) {
      this.__objects.forEach(function (o) {
        o.init(gl);
      });
    }
  }, {
    key: "render",
    value: function render(gl, model, level) {
      this.__objects.forEach(function (o) {
        o.render(gl, model, level);
      });
    }
  }]);

  return Objects;
}();



/***/ }),

/***/ "./x/js/x/graphics/primitive.js":
/*!**************************************!*\
  !*** ./x/js/x/graphics/primitive.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Primitive; });
/* harmony import */ var _vertices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertices.js */ "./x/js/x/graphics/vertices.js");
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer.js */ "./x/js/x/graphics/buffer.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obj.js */ "./x/js/x/graphics/obj.js");
/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix.js */ "./x/js/x/graphics/matrix.js");
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex.js */ "./x/js/x/graphics/vertex.js");
/* harmony import */ var _indices_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indices.js */ "./x/js/x/graphics/indices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Primitive = /*#__PURE__*/function (_Obj) {
  _inherits(Primitive, _Obj);

  function Primitive(name, level, status) {
    var _this;

    _classCallCheck(this, Primitive);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Primitive).call(this, name, level, status));
    _this.__vertices = new _vertices_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.__buffer = new _buffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this.__program = null;
    _this.__indices = null;
    return _this;
  }

  _createClass(Primitive, [{
    key: "push",
    value: function push(o) {
      this.__vertices.push(o);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      if (!this.__buffer.size) {
        this.__vertices.serialize(this.__buffer);
      }
    }
  }, {
    key: "init",
    value: function init(gl) {
      this.__program.init(gl);

      if (this.__indices) {
        this.__indices.init(gl);
      }

      this.__buffer.init(gl);
    }
  }, {
    key: "render",
    value: function render(gl, model, level) {
      var _this2 = this;

      if (this.__status) {
        if (this.__level === level) {
          gl.useProgram(this.__program.id);

          this.__program.uniforms.forEach(function (value, name) {
            if (name === "mvp") {
              var fovy = 45 * 0.01745329251994329576923690768489;
              var aspect = gl.canvas.width / gl.canvas.height;
              var near = 0.1;
              var far = 1000;
              var projection = _matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].perspective(fovy, aspect, near, far);
              var view = _matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].lookat([0, 0, 90, 1], [0, 0, 0, 0], [0, 1, 0, 0]); // let model = Matrix.identity();

              var mvp = _matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(_matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(model, view), projection);
              gl.uniformMatrix4fv(value, false, new Float32Array(mvp));
            } else if (name === "cameraPos") {
              gl.uniform4fv(value, [0, 0, 90, 0]);
            } else if (name === "lightColor") {
              gl.uniform4fv(value, [1, 1, 1, 1]);
            } else if (name === "lightPos") {
              gl.uniform4fv(value, [18, 4, 3, 1]);
            } else if (name === "ambientStrength") {
              gl.uniform1f(value, 0.8);
            } else {
              throw new Error();
            }
          });

          this.__program.attributes.forEach(function (value, name) {
            if (value >= 0) {
              gl.enableVertexAttribArray(value);

              _this2.buffer.bind(gl);

              if (name === "vertexPosition") {
                gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_4__["default"].stride, 0);
              } else if (name === "vertexNormal") {
                gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_4__["default"].stride, 4 * 4);
              }
            }
          }); // console.log(this.__vertices.size);


          this.buffer.bind(gl);

          if (this.__indices) {
            this.__indices.bind(gl);

            gl.drawElements(gl.TRIANGLES, this.__indices.size, gl.UNSIGNED_SHORT, 0);
          } else {
            gl.drawArrays(gl.TRIANGLES, 0, this.__vertices.size);
          }
        }
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "vertices",
    get: function get() {
      return this.__vertices;
    }
  }, {
    key: "buffer",
    get: function get() {
      return this.__buffer;
    }
  }, {
    key: "mode",
    set: function set(v) {
      this.__vertices.mode = v;
    }
  }, {
    key: "target",
    set: function set(v) {
      this.__buffer.target = v;
    }
  }, {
    key: "usage",
    set: function set(v) {
      this.__buffer.usage = v;
    }
  }, {
    key: "indices",
    set: function set(v) {
      this.__indices = new _indices_js__WEBPACK_IMPORTED_MODULE_5__["default"](v);
    }
  }, {
    key: "status",
    set: function set(v) {
      this.__status = v;
    }
  }, {
    key: "program",
    set: function set(v) {
      this.__program = v;
    }
  }]);

  return Primitive;
}(_obj_js__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./x/js/x/graphics/primitives/cube.js":
/*!********************************************!*\
  !*** ./x/js/x/graphics/primitives/cube.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cube; });
/* harmony import */ var _primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitive.js */ "./x/js/x/graphics/primitive.js");
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vertex.js */ "./x/js/x/graphics/vertex.js");
/* harmony import */ var _vertices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertices.js */ "./x/js/x/graphics/vertices.js");
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffer.js */ "./x/js/x/graphics/buffer.js");
/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../matrix.js */ "./x/js/x/graphics/matrix.js");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vector.js */ "./x/js/x/graphics/vector.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Cube = /*#__PURE__*/function (_Primitive) {
  _inherits(Cube, _Primitive);

  _createClass(Cube, null, [{
    key: "load",
    value: function load(name, program, application) {
      return new Promise(function (resolve, reject) {
        var o = new Cube(name, 0, 1, application.programs.get(program));
        o.serialize();
        application.objects.add(o);
        resolve(o);
      });
    }
  }]);

  function Cube(name, level, status, program) {
    var _this;

    _classCallCheck(this, Cube);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cube).call(this, name, level, status));
    _this.mode = _vertices_js__WEBPACK_IMPORTED_MODULE_2__["default"].triangle;
    _this.target = _buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].array;
    _this.usage = [_buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].statical, _buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].draw];
    _this.__program = program;

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, 1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, 1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, 1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, -1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [0.0, 0.0, -1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, 1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, -1.0, 1.0], [-1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, 1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, 1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, -1.0, 1.0], [0.0, -1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, -1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, -1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, -1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, -1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, 1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, -1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, -1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, 1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, -1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, 1.0, 1.0], [0.0, 1.0, 0.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, 1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-1.0, 1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([1.0, -1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    return _this;
  }

  _createClass(Cube, [{
    key: "render",
    value: function render(gl) {
      var _this2 = this;

      gl.useProgram(this.__program.id);

      this.__program.uniforms.forEach(function (value, name) {
        if (name === "mvp") {
          var fovy = 45 * 0.01745329251994329576923690768489;
          var aspect = gl.canvas.width / gl.canvas.height;
          var near = 0.1;
          var far = 1000;
          var projection = _matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"].perspective(fovy, aspect, near, far);
          var view = _matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"].lookat([4, 3, 3, 0], [0, 0, 0, 0], [0, 1, 0, 0]);
          var model = _matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"].identity();
          var mvp = _matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"].multiply(_matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"].multiply(model, view), projection);
          gl.uniformMatrix4fv(value, false, new Float32Array(mvp));
        } else if (name === "cameraPos") {
          gl.uniform4fv(value, [4, 3, 3, 0]);
        } else if (name === "lightColor") {
          gl.uniform4fv(value, [1, 1, 1, 1]);
        } else if (name === "lightPos") {
          gl.uniform4fv(value, [18, 4, 3, 1]);
        } else if (name === "ambientStrength") {
          gl.uniform1f(value, 0.8);
        } else {
          throw new Error();
        }
      });

      this.__program.attributes.forEach(function (value, name) {
        if (value >= 0) {
          gl.enableVertexAttribArray(value);

          _this2.buffer.bind(gl);

          if (name === "vertexPosition") {
            gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"].stride, 0);
          } else if (name === "vertexNormal") {
            gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"].stride, 4 * 4);
          }
        }
      });

      gl.drawArrays(gl.TRIANGLES, 0, this.__vertices.size);
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "program",
    get: function get() {
      return this.__program;
    },
    set: function set(o) {
      this.__program = o;
    }
  }, {
    key: "buffer",
    get: function get() {
      return this.__buffer;
    }
  }, {
    key: "mode",
    set: function set(v) {
      this.__vertices.mode = v;
    }
  }, {
    key: "target",
    set: function set(v) {
      this.__buffer.target = v;
    }
  }, {
    key: "usage",
    set: function set(v) {
      this.__buffer.usage = v;
    }
  }]);

  return Cube;
}(_primitive_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/x/graphics/primitives/triangle.js":
/*!************************************************!*\
  !*** ./x/js/x/graphics/primitives/triangle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Triangle; });
/* harmony import */ var _primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitive.js */ "./x/js/x/graphics/primitive.js");
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vertex.js */ "./x/js/x/graphics/vertex.js");
/* harmony import */ var _vertices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertices.js */ "./x/js/x/graphics/vertices.js");
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffer.js */ "./x/js/x/graphics/buffer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Triangle = /*#__PURE__*/function (_Primitive) {
  _inherits(Triangle, _Primitive);

  _createClass(Triangle, null, [{
    key: "load",
    value: function load(name, program, application) {
      return new Promise(function (resolve, reject) {
        var o = new Triangle(name, 0, 1, application.programs.get(program));
        o.serialize();
        application.objects.add(o);
        resolve(o);
      });
    }
  }]);

  function Triangle(name, level, status, program) {
    var _this;

    _classCallCheck(this, Triangle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Triangle).call(this, name, level, status));
    _this.mode = _vertices_js__WEBPACK_IMPORTED_MODULE_2__["default"].triangle;
    _this.target = _buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].array;
    _this.usage = [_buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].statical, _buffer_js__WEBPACK_IMPORTED_MODULE_3__["default"].draw];
    _this.program = program;

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0.0, 0.5, 0.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([-0.5, -0.5, 0.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    _this.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0.5, -0.5, 0.0, 1.0], [0.0, 0.0, 1.0, 0.0]));

    return _this;
  }

  _createClass(Triangle, [{
    key: "render",
    value: function render(gl) {
      var _this2 = this;

      console.log(this.program.id);
      console.log("render");
      gl.useProgram(this.program.id);
      this.program.uniforms.forEach(function (value, name) {// ["mvp", "cameraPos", "lightColor", "lightPos", "ambientStrength"]
        // console.log(name);
      });
      this.program.attributes.forEach(function (value, name) {
        console.log(name);
        gl.enableVertexAttribArray(value);

        _this2.buffer.bind(gl);

        if (name === "vertexPosition") {
          gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"].stride, 0);
          console.log("position");
        } else if (name === "vertexNormal") {
          gl.vertexAttribPointer(value, 4, gl.FLOAT, false, _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"].stride, 4 * 4);
          console.log("normal");
        }
      });
      gl.drawArrays(gl.TRIANGLES, 0, this.__vertices.size);
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "program",
    get: function get() {
      return this.__program;
    },
    set: function set(o) {
      this.__program = o;
    }
  }, {
    key: "buffer",
    get: function get() {
      return this.__buffer;
    }
  }, {
    key: "mode",
    set: function set(v) {
      this.__vertices.mode = v;
    }
  }, {
    key: "target",
    set: function set(v) {
      this.__buffer.target = v;
    }
  }, {
    key: "usage",
    set: function set(v) {
      this.__buffer.usage = v;
    }
  }]);

  return Triangle;
}(_primitive_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./x/js/x/graphics/program.js":
/*!************************************!*\
  !*** ./x/js/x/graphics/program.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Program; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Program = /*#__PURE__*/function () {
  _createClass(Program, null, [{
    key: "load",
    value: function load(name, shaders, uniforms, attributes, application) {
      return new Promise(function (resolve, reject) {
        var o = new Program(name, shaders, uniforms, attributes);

        if (!application.programs.get(name)) {
          application.programs.set(name, o);
          resolve(o);
        } else {
          reject(new Error());
        }
      });
    }
  }]);

  function Program(name, shaders, uniforms, attributes) {
    _classCallCheck(this, Program);

    this.__name = name;
    this.__id = 0;
    this.__shaders = shaders || new Array();
    this.__uniforms = uniforms ? new Map(uniforms.map(function (o) {
      return [o, null];
    })) : new Map();
    this.__attributes = attributes ? new Map(attributes.map(function (o) {
      return [o, null];
    })) : new Map();
  }

  _createClass(Program, [{
    key: "create",
    value: function create(gl, application) {
      var _this = this;

      if (!this.__id) {
        this.__id = gl.createProgram();

        this.__shaders.forEach(function (name) {
          var o = application.shaders.get(name);
          o.attach(gl, _this.__id);
        });

        gl.linkProgram(this.__id);

        if (gl.getProgramParameter(this.__id, gl.LINK_STATUS)) {
          this.__shaders.forEach(function (name) {
            var o = application.shaders.get(name);
            o.detach(gl, _this.__id);
          });

          return this;
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    }
  }, {
    key: "init",
    value: function init(gl) {
      var _this2 = this;

      this.__attributes.forEach(function (value, name) {
        return _this2.__attributes.set(name, gl.getAttribLocation(_this2.__id, name));
      });

      this.__uniforms.forEach(function (value, name) {
        return _this2.__uniforms.set(name, gl.getUniformLocation(_this2.__id, name));
      });
    }
  }, {
    key: "id",
    get: function get() {
      return this.__id;
    }
  }, {
    key: "attributes",
    get: function get() {
      return this.__attributes;
    }
  }, {
    key: "uniforms",
    get: function get() {
      return this.__uniforms;
    }
  }]);

  return Program;
}();



/***/ }),

/***/ "./x/js/x/graphics/projection.js":
/*!***************************************!*\
  !*** ./x/js/x/graphics/projection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Projection = function Projection() {
  _classCallCheck(this, Projection);

  this.__fovy;
  this.__aspect;
  this.__near;
  this.__far;
  this.__matrix;
};



/***/ }),

/***/ "./x/js/x/graphics/shader.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/shader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shader = /*#__PURE__*/function () {
  _createClass(Shader, null, [{
    key: "load",
    value: function load(path, name, category, type, application) {
      return new Promise(function (resolve, reject) {
        var w = new Worker('/js/homeworld2/shader.load.js');
        w.postMessage({
          path: path
        });

        w.onmessage = function (event) {
          if (event.data.finish) {
            if (!event.data.error) {
              resolve(application.shader(new Shader(name, category, type, event.data.code)));
            } else {
              reject(e);
            }

            w.terminate();
            w = null;
          }
        };
      });
    }
  }, {
    key: "type",
    value: function type(gl, category, _type) {
      switch (category) {
        case Shader.vertex:
          return gl.VERTEX_SHADER;

        case Shader.fragment:
          return gl.FRAGMENT_SHADER;

        case Shader.compute:
          throw new Error();

        case Shader.geometry:
          throw new Error();

        case Shader.tessellation:
          throw new Error();

        default:
          throw new Error();
      }
    }
  }, {
    key: "none",
    get: function get() {
      return 0;
    }
  }, {
    key: "vertex",
    get: function get() {
      return 1;
    }
  }, {
    key: "fragment",
    get: function get() {
      return 2;
    }
  }, {
    key: "compute",
    get: function get() {
      return 3;
    }
  }, {
    key: "geometry",
    get: function get() {
      return 4;
    }
  }, {
    key: "tessellation",
    get: function get() {
      return 5;
    }
  }, {
    key: "control",
    get: function get() {
      return 1;
    }
  }, {
    key: "evaluation",
    get: function get() {
      return 2;
    }
  }]);

  function Shader(name, category, type, code) {
    _classCallCheck(this, Shader);

    this.__name = name;
    this.__category = category;
    this.__type = type || Shader.none;
    this.__id = 0;
    this.__code = code;
  }

  _createClass(Shader, [{
    key: "attach",
    value: function attach(gl, program) {
      if (!this.__id) {
        this.__id = gl.createShader(Shader.type(gl, this.__category, this.__type));
        gl.shaderSource(this.__id, this.__code);
        gl.compileShader(this.__id);

        if (!gl.getShaderParameter(this.__id, gl.COMPILE_STATUS)) {
          // console.log(gl.getShaderInfoLog(this.__id));
          throw new Error();
        }

        gl.attachShader(program, this.__id);
        return this;
      } else {
        throw new Error();
      }
    }
  }, {
    key: "detach",
    value: function detach(gl) {
      if (this.__id) {
        gl.deleteShader(this.__id);
        this.__id = 0;
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this.__name;
    }
  }, {
    key: "id",
    get: function get() {
      return this.__id;
    }
  }]);

  return Shader;
}();



/***/ }),

/***/ "./x/js/x/graphics/surface.js":
/*!************************************!*\
  !*** ./x/js/x/graphics/surface.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Surface; });
/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./light.js */ "./x/js/x/graphics/light.js");
/* harmony import */ var _camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.js */ "./x/js/x/graphics/camera.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projection.js */ "./x/js/x/graphics/projection.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Surface = /*#__PURE__*/function () {
  function Surface(canvas) {
    _classCallCheck(this, Surface);

    this.__canvas = canvas;
    this.__context = null;
    this.__background = [0, 0, 0, 1];
    this.__references = new Map();
    this.__light = new _light_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.__camera = new _camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.__projection = new _projection_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.__canvas.style.backgroundColor = "black"; // background-color : black;
  }

  _createClass(Surface, [{
    key: "init",
    value: function init() {
      if (!this.__context) {
        this.__context = this.__canvas.getContext("webgl") || this.__canvas.getContext("experimental-webgl");

        this.__context.viewport(0, 0, this.__canvas.width, this.__canvas.height);

        this.__context.enable(this.__context.DEPTH_TEST);

        this.__context.depthFunc(this.__context.LESS);

        this.__context.enable(this.__context.BLEND);

        this.__context.blendFunc(this.__context.SRC_ALPHA, this.__context.ONE_MINUS_SRC_ALPHA);
      }
    }
  }, {
    key: "gl",
    get: function get() {
      return this.__context;
    }
  }, {
    key: "background",
    get: function get() {
      return this.__background;
    }
  }]);

  return Surface;
}();



/***/ }),

/***/ "./x/js/x/graphics/vector.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/vector.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __degree = 57.295779513082320876798154814105;
var __radian = 0.01745329251994329576923690768489;

var Vector = /*#__PURE__*/function () {
  function Vector() {
    _classCallCheck(this, Vector);
  }

  _createClass(Vector, null, [{
    key: "degree",
    value: function degree(o) {
      var result = [0, 0, 0, 0];
      result[0] = o[0] * __degree;
      result[1] = o[1] * __degree;
      result[2] = o[2] * __degree;
      result[3] = o[3] * __degree;
      return result;
    }
  }, {
    key: "radian",
    value: function radian(o) {
      var result = [0, 0, 0, 0];
      result[0] = o[0] * __radian;
      result[1] = o[1] * __radian;
      result[2] = o[2] * __radian;
      result[3] = o[3] * __radian;
      return result;
    }
  }, {
    key: "dot",
    value: function dot(x, y) {
      var result = 0;

      for (var i = 0; i < 4; i++) {
        result += x[i] * y[i];
      }

      return result;
    }
  }, {
    key: "normalize",
    value: function normalize(o) {
      var dot = Math.sqrt(Vector.dot(o, o));
      var result = [0, 0, 0, 0];

      for (var i = 0; i < 4; i++) {
        result[i] = o[i] / dot;
      }

      return result;
    }
  }, {
    key: "cross",
    value: function cross(x, y) {
      var result = [0, 0, 0, 0];
      result[0] = x[1] * y[2] - x[2] * y[1];
      result[1] = x[2] * y[0] - x[0] * y[2];
      result[2] = x[0] * y[1] - x[1] * y[0];
      return result;
    }
  }, {
    key: "minus",
    value: function minus(x, y) {
      var result = [0, 0, 0, 0];

      for (var i = 0; i < 4; i++) {
        result[i] = x[i] - y[i];
      }

      return result;
    }
  }, {
    key: "plus",
    value: function plus(x, y) {
      var result = [0, 0, 0, 0];

      for (var i = 0; i < 4; i++) {
        result[i] = x[i] + y[i];
      }

      return result;
    }
  }, {
    key: "multiply",
    value: function multiply(v, c) {
      var result = [0, 0, 0, 0];

      for (var i = 0; i < 4; i++) {
        result[i] = v[i] * c;
      }

      return result;
    }
  }]);

  return Vector;
}();



/***/ }),

/***/ "./x/js/x/graphics/vertex.js":
/*!***********************************!*\
  !*** ./x/js/x/graphics/vertex.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vertex; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertex = /*#__PURE__*/function () {
  _createClass(Vertex, null, [{
    key: "stride",
    get: function get() {
      return 88;
    }
  }]);

  function Vertex(position, normal, color) {
    _classCallCheck(this, Vertex);

    this.position = position || [0, 0, 0, 1];
    this.normal = normal || [0, 0, 0, 0];
    this.color = color || [0, 0, 0, 1];
    this.texture = [0, 0];
    this.tangent = [0, 0, 0, 0];
    this.binormal = [0, 0, 0, 0];
  }

  return Vertex;
}();



/***/ }),

/***/ "./x/js/x/graphics/vertices.js":
/*!*************************************!*\
  !*** ./x/js/x/graphics/vertices.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vertices; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertices = /*#__PURE__*/function () {
  _createClass(Vertices, null, [{
    key: "modeFromStr",
    value: function modeFromStr(s) {
      if (s === "triangle") {
        return Vertices.triangle;
      } else {
        throw new Error();
      }

      return s;
    }
  }, {
    key: "none",
    get: function get() {
      return 0;
    }
  }, {
    key: "point",
    get: function get() {
      return 1;
    }
  }, {
    key: "line",
    get: function get() {
      return 2;
    }
  }, {
    key: "patch",
    get: function get() {
      return 3;
    }
  }, {
    key: "triangle",
    get: function get() {
      return 4;
    }
  }, {
    key: "strip",
    get: function get() {
      return 1;
    }
  }, {
    key: "loop",
    get: function get() {
      return 2;
    }
  }, {
    key: "fan",
    get: function get() {
      return 3;
    }
  }, {
    key: "adjacent",
    get: function get() {
      return 1;
    }
  }]);

  function Vertices() {
    _classCallCheck(this, Vertices);

    this.__mode = Vertices.none;
    this.__type = Vertices.none;
    this.__adjacency = Vertices.none;
    this.__id = Vertices.none;
    this.__vertices = [];
  }

  _createClass(Vertices, [{
    key: "push",
    value: function push(v) {
      this.__vertices.push(v);
    }
  }, {
    key: "set",
    value: function set(v) {
      this.__vertices = v;
    }
  }, {
    key: "serialize",
    value: function serialize(buffer) {
      var array = [];
      var total = 0;

      this.__vertices.forEach(function (vertex) {
        var result = [];
        array.push(new Float32Array(result.concat(vertex.position, vertex.normal, vertex.color, vertex.texture, vertex.tangent, vertex.binormal)));
        total += array[array.length - 1].length;
      });

      var o = new Float32Array(total);
      total = 0;
      array.forEach(function (value) {
        o.set(value, total);
        total += value.length;
      });
      buffer.data = o;
    }
  }, {
    key: "size",
    get: function get() {
      return this.__vertices.length;
    }
  }, {
    key: "mode",
    set: function set(v) {
      this.__mode = v;
    }
  }]);

  return Vertices;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map