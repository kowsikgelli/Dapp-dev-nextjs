module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/cryptokowsik/Dapp-dev-nextjs/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  title: {\n    flexGrow: 1\n  }\n}));\n\nconst Layout = ({\n  accounts,\n  children\n}) => {\n  const classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"static\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"h6\",\n    className: classes.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \"Ethereum Dapp\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"inherit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, accounts[0]))), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInRpdGxlIiwiTGF5b3V0IiwiYWNjb3VudHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQUQrQjtBQUlyQ0MsT0FBSyxFQUFFO0FBQ0xELFlBQVEsRUFBRTtBQURMO0FBSjhCLENBQVosQ0FBRCxDQUE1Qjs7QUFTRSxNQUFNRSxNQUFNLEdBQUUsQ0FBQztBQUFDQyxVQUFEO0FBQVVDO0FBQVYsQ0FBRCxLQUF1QjtBQUNuQyxRQUFNQyxPQUFPLEdBQUdULFNBQVMsRUFBekI7QUFDQSxTQUNJO0FBQUssYUFBUyxFQUFFUyxPQUFPLENBQUNOLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUSxNQUFDLCtEQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRU0sT0FBTyxDQUFDSixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLEVBSUEsTUFBQywrREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJFLFFBQVEsQ0FBQyxDQUFELENBQWpDLENBSkEsQ0FESixDQURSLEVBU1NDLFFBVFQsQ0FESjtBQWFELENBZkQ7O0FBaUJlRixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3QgTGF5b3V0ID0oe2FjY291bnRzLGNoaWxkcmVufSk9PntcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRXRoZXJldW0gRGFwcFxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+e2FjY291bnRzWzBdfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./ethereum/build/contracts/Storage.json":
/*!***********************************************!*\
  !*** ./ethereum/build/contracts/Storage.json ***!
  \***********************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"contractName\\\":\\\"Storage\\\",\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"name\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getName\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"metadata\\\":\\\"{\\\\\\\"compiler\\\\\\\":{\\\\\\\"version\\\\\\\":\\\\\\\"0.5.16+commit.9c3226ce\\\\\\\"},\\\\\\\"language\\\\\\\":\\\\\\\"Solidity\\\\\\\",\\\\\\\"output\\\\\\\":{\\\\\\\"abi\\\\\\\":[{\\\\\\\"constant\\\\\\\":true,\\\\\\\"inputs\\\\\\\":[],\\\\\\\"name\\\\\\\":\\\\\\\"getName\\\\\\\",\\\\\\\"outputs\\\\\\\":[{\\\\\\\"internalType\\\\\\\":\\\\\\\"string\\\\\\\",\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"string\\\\\\\"}],\\\\\\\"payable\\\\\\\":false,\\\\\\\"stateMutability\\\\\\\":\\\\\\\"view\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"function\\\\\\\"},{\\\\\\\"constant\\\\\\\":true,\\\\\\\"inputs\\\\\\\":[],\\\\\\\"name\\\\\\\":\\\\\\\"name\\\\\\\",\\\\\\\"outputs\\\\\\\":[{\\\\\\\"internalType\\\\\\\":\\\\\\\"string\\\\\\\",\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"string\\\\\\\"}],\\\\\\\"payable\\\\\\\":false,\\\\\\\"stateMutability\\\\\\\":\\\\\\\"view\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"function\\\\\\\"}],\\\\\\\"devdoc\\\\\\\":{\\\\\\\"methods\\\\\\\":{}},\\\\\\\"userdoc\\\\\\\":{\\\\\\\"methods\\\\\\\":{}}},\\\\\\\"settings\\\\\\\":{\\\\\\\"compilationTarget\\\\\\\":{\\\\\\\"/home/cryptokowsik/Dapp-dev-nextjs/ethereum/contracts/Storage.sol\\\\\\\":\\\\\\\"Storage\\\\\\\"},\\\\\\\"evmVersion\\\\\\\":\\\\\\\"istanbul\\\\\\\",\\\\\\\"libraries\\\\\\\":{},\\\\\\\"optimizer\\\\\\\":{\\\\\\\"enabled\\\\\\\":false,\\\\\\\"runs\\\\\\\":200},\\\\\\\"remappings\\\\\\\":[]},\\\\\\\"sources\\\\\\\":{\\\\\\\"/home/cryptokowsik/Dapp-dev-nextjs/ethereum/contracts/Storage.sol\\\\\\\":{\\\\\\\"keccak256\\\\\\\":\\\\\\\"0x643164d56c157ada5282d18ea24020eff496660116b84c092eb4eda987fb5357\\\\\\\",\\\\\\\"urls\\\\\\\":[\\\\\\\"bzz-raw://3bbc9ae5cc53524767e6b787e9ec638a7d428c20bf9f7ea0fcb733caf94e1edf\\\\\\\",\\\\\\\"dweb:/ipfs/QmYjP9Zr8yBTjRPtxjeXGwGzfmSBWoaAqYmCQJwsauUQ7r\\\\\\\"]}},\\\\\\\"version\\\\\\\":1}\\\",\\\"bytecode\\\":\\\"0x60806040526040518060400160405280600d81526020017f7465737420636f6e7472616374000000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6102b6806101166000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806317d7de7c146100be575b600080fd5b610043610141565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610083578082015181840152602081019050610068565b50505050905090810190601f1680156100b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100c66101df565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101065780820151818401526020810190506100eb565b50505050905090810190601f1680156101335780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101d75780601f106101ac576101008083540402835291602001916101d7565b820191906000526020600020905b8154815290600101906020018083116101ba57829003601f168201915b505050505081565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b505050505090509056fea265627a7a72315820664bc7dffc8ca507e00e0d07dce9b020fbda8461f8f572b036347a4d1bb72bd864736f6c63430005100032\\\",\\\"deployedBytecode\\\":\\\"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806317d7de7c146100be575b600080fd5b610043610141565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610083578082015181840152602081019050610068565b50505050905090810190601f1680156100b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100c66101df565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101065780820151818401526020810190506100eb565b50505050905090810190601f1680156101335780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101d75780601f106101ac576101008083540402835291602001916101d7565b820191906000526020600020905b8154815290600101906020018083116101ba57829003601f168201915b505050505081565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b505050505090509056fea265627a7a72315820664bc7dffc8ca507e00e0d07dce9b020fbda8461f8f572b036347a4d1bb72bd864736f6c63430005100032\\\",\\\"sourceMap\\\":\\\"25:146:1:-;;;47:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;25:146;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:146:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;\\\",\\\"deployedSourceMap\\\":\\\"25:146:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:146:1;;;;;;;;;;;;;;;;;;;;;;;;47:36;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;47:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;89:80;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;89:80:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;47:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;89:80::-;127:13;158:4;151:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;89:80;:::o\\\",\\\"source\\\":\\\"pragma solidity >0.5.0;\\\\n\\\\ncontract Storage{\\\\n    string public name = \\\\\\\"test contract\\\\\\\";\\\\n    function getName()public view returns(string memory){\\\\n        return name;\\\\n    }\\\\n}\\\",\\\"sourcePath\\\":\\\"/home/cryptokowsik/Dapp-dev-nextjs/ethereum/contracts/Storage.sol\\\",\\\"ast\\\":{\\\"absolutePath\\\":\\\"/home/cryptokowsik/Dapp-dev-nextjs/ethereum/contracts/Storage.sol\\\",\\\"exportedSymbols\\\":{\\\"Storage\\\":[50]},\\\"id\\\":51,\\\"nodeType\\\":\\\"SourceUnit\\\",\\\"nodes\\\":[{\\\"id\\\":38,\\\"literals\\\":[\\\"solidity\\\",\\\">\\\",\\\"0.5\\\",\\\".0\\\"],\\\"nodeType\\\":\\\"PragmaDirective\\\",\\\"src\\\":\\\"0:23:1\\\"},{\\\"baseContracts\\\":[],\\\"contractDependencies\\\":[],\\\"contractKind\\\":\\\"contract\\\",\\\"documentation\\\":null,\\\"fullyImplemented\\\":true,\\\"id\\\":50,\\\"linearizedBaseContracts\\\":[50],\\\"name\\\":\\\"Storage\\\",\\\"nodeType\\\":\\\"ContractDefinition\\\",\\\"nodes\\\":[{\\\"constant\\\":false,\\\"id\\\":41,\\\"name\\\":\\\"name\\\",\\\"nodeType\\\":\\\"VariableDeclaration\\\",\\\"scope\\\":50,\\\"src\\\":\\\"47:36:1\\\",\\\"stateVariable\\\":true,\\\"storageLocation\\\":\\\"default\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage\\\",\\\"typeString\\\":\\\"string\\\"},\\\"typeName\\\":{\\\"id\\\":39,\\\"name\\\":\\\"string\\\",\\\"nodeType\\\":\\\"ElementaryTypeName\\\",\\\"src\\\":\\\"47:6:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage_ptr\\\",\\\"typeString\\\":\\\"string\\\"}},\\\"value\\\":{\\\"argumentTypes\\\":null,\\\"hexValue\\\":\\\"7465737420636f6e7472616374\\\",\\\"id\\\":40,\\\"isConstant\\\":false,\\\"isLValue\\\":false,\\\"isPure\\\":true,\\\"kind\\\":\\\"string\\\",\\\"lValueRequested\\\":false,\\\"nodeType\\\":\\\"Literal\\\",\\\"src\\\":\\\"68:15:1\\\",\\\"subdenomination\\\":null,\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_stringliteral_8cebed5b93443beae7e81795c032fedde8e18698d401a0a69108cf6f6a06e00a\\\",\\\"typeString\\\":\\\"literal_string \\\\\\\"test contract\\\\\\\"\\\"},\\\"value\\\":\\\"test contract\\\"},\\\"visibility\\\":\\\"public\\\"},{\\\"body\\\":{\\\"id\\\":48,\\\"nodeType\\\":\\\"Block\\\",\\\"src\\\":\\\"141:28:1\\\",\\\"statements\\\":[{\\\"expression\\\":{\\\"argumentTypes\\\":null,\\\"id\\\":46,\\\"name\\\":\\\"name\\\",\\\"nodeType\\\":\\\"Identifier\\\",\\\"overloadedDeclarations\\\":[],\\\"referencedDeclaration\\\":41,\\\"src\\\":\\\"158:4:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage\\\",\\\"typeString\\\":\\\"string storage ref\\\"}},\\\"functionReturnParameters\\\":45,\\\"id\\\":47,\\\"nodeType\\\":\\\"Return\\\",\\\"src\\\":\\\"151:11:1\\\"}]},\\\"documentation\\\":null,\\\"id\\\":49,\\\"implemented\\\":true,\\\"kind\\\":\\\"function\\\",\\\"modifiers\\\":[],\\\"name\\\":\\\"getName\\\",\\\"nodeType\\\":\\\"FunctionDefinition\\\",\\\"parameters\\\":{\\\"id\\\":42,\\\"nodeType\\\":\\\"ParameterList\\\",\\\"parameters\\\":[],\\\"src\\\":\\\"105:2:1\\\"},\\\"returnParameters\\\":{\\\"id\\\":45,\\\"nodeType\\\":\\\"ParameterList\\\",\\\"parameters\\\":[{\\\"constant\\\":false,\\\"id\\\":44,\\\"name\\\":\\\"\\\",\\\"nodeType\\\":\\\"VariableDeclaration\\\",\\\"scope\\\":49,\\\"src\\\":\\\"127:13:1\\\",\\\"stateVariable\\\":false,\\\"storageLocation\\\":\\\"memory\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_memory_ptr\\\",\\\"typeString\\\":\\\"string\\\"},\\\"typeName\\\":{\\\"id\\\":43,\\\"name\\\":\\\"string\\\",\\\"nodeType\\\":\\\"ElementaryTypeName\\\",\\\"src\\\":\\\"127:6:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage_ptr\\\",\\\"typeString\\\":\\\"string\\\"}},\\\"value\\\":null,\\\"visibility\\\":\\\"internal\\\"}],\\\"src\\\":\\\"126:15:1\\\"},\\\"scope\\\":50,\\\"src\\\":\\\"89:80:1\\\",\\\"stateMutability\\\":\\\"view\\\",\\\"superFunction\\\":null,\\\"visibility\\\":\\\"public\\\"}],\\\"scope\\\":51,\\\"src\\\":\\\"25:146:1\\\"}],\\\"src\\\":\\\"0:171:1\\\"},\\\"legacyAST\\\":{\\\"absolutePath\\\":\\\"/home/cryptokowsik/Dapp-dev-nextjs/ethereum/contracts/Storage.sol\\\",\\\"exportedSymbols\\\":{\\\"Storage\\\":[50]},\\\"id\\\":51,\\\"nodeType\\\":\\\"SourceUnit\\\",\\\"nodes\\\":[{\\\"id\\\":38,\\\"literals\\\":[\\\"solidity\\\",\\\">\\\",\\\"0.5\\\",\\\".0\\\"],\\\"nodeType\\\":\\\"PragmaDirective\\\",\\\"src\\\":\\\"0:23:1\\\"},{\\\"baseContracts\\\":[],\\\"contractDependencies\\\":[],\\\"contractKind\\\":\\\"contract\\\",\\\"documentation\\\":null,\\\"fullyImplemented\\\":true,\\\"id\\\":50,\\\"linearizedBaseContracts\\\":[50],\\\"name\\\":\\\"Storage\\\",\\\"nodeType\\\":\\\"ContractDefinition\\\",\\\"nodes\\\":[{\\\"constant\\\":false,\\\"id\\\":41,\\\"name\\\":\\\"name\\\",\\\"nodeType\\\":\\\"VariableDeclaration\\\",\\\"scope\\\":50,\\\"src\\\":\\\"47:36:1\\\",\\\"stateVariable\\\":true,\\\"storageLocation\\\":\\\"default\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage\\\",\\\"typeString\\\":\\\"string\\\"},\\\"typeName\\\":{\\\"id\\\":39,\\\"name\\\":\\\"string\\\",\\\"nodeType\\\":\\\"ElementaryTypeName\\\",\\\"src\\\":\\\"47:6:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage_ptr\\\",\\\"typeString\\\":\\\"string\\\"}},\\\"value\\\":{\\\"argumentTypes\\\":null,\\\"hexValue\\\":\\\"7465737420636f6e7472616374\\\",\\\"id\\\":40,\\\"isConstant\\\":false,\\\"isLValue\\\":false,\\\"isPure\\\":true,\\\"kind\\\":\\\"string\\\",\\\"lValueRequested\\\":false,\\\"nodeType\\\":\\\"Literal\\\",\\\"src\\\":\\\"68:15:1\\\",\\\"subdenomination\\\":null,\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_stringliteral_8cebed5b93443beae7e81795c032fedde8e18698d401a0a69108cf6f6a06e00a\\\",\\\"typeString\\\":\\\"literal_string \\\\\\\"test contract\\\\\\\"\\\"},\\\"value\\\":\\\"test contract\\\"},\\\"visibility\\\":\\\"public\\\"},{\\\"body\\\":{\\\"id\\\":48,\\\"nodeType\\\":\\\"Block\\\",\\\"src\\\":\\\"141:28:1\\\",\\\"statements\\\":[{\\\"expression\\\":{\\\"argumentTypes\\\":null,\\\"id\\\":46,\\\"name\\\":\\\"name\\\",\\\"nodeType\\\":\\\"Identifier\\\",\\\"overloadedDeclarations\\\":[],\\\"referencedDeclaration\\\":41,\\\"src\\\":\\\"158:4:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage\\\",\\\"typeString\\\":\\\"string storage ref\\\"}},\\\"functionReturnParameters\\\":45,\\\"id\\\":47,\\\"nodeType\\\":\\\"Return\\\",\\\"src\\\":\\\"151:11:1\\\"}]},\\\"documentation\\\":null,\\\"id\\\":49,\\\"implemented\\\":true,\\\"kind\\\":\\\"function\\\",\\\"modifiers\\\":[],\\\"name\\\":\\\"getName\\\",\\\"nodeType\\\":\\\"FunctionDefinition\\\",\\\"parameters\\\":{\\\"id\\\":42,\\\"nodeType\\\":\\\"ParameterList\\\",\\\"parameters\\\":[],\\\"src\\\":\\\"105:2:1\\\"},\\\"returnParameters\\\":{\\\"id\\\":45,\\\"nodeType\\\":\\\"ParameterList\\\",\\\"parameters\\\":[{\\\"constant\\\":false,\\\"id\\\":44,\\\"name\\\":\\\"\\\",\\\"nodeType\\\":\\\"VariableDeclaration\\\",\\\"scope\\\":49,\\\"src\\\":\\\"127:13:1\\\",\\\"stateVariable\\\":false,\\\"storageLocation\\\":\\\"memory\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_memory_ptr\\\",\\\"typeString\\\":\\\"string\\\"},\\\"typeName\\\":{\\\"id\\\":43,\\\"name\\\":\\\"string\\\",\\\"nodeType\\\":\\\"ElementaryTypeName\\\",\\\"src\\\":\\\"127:6:1\\\",\\\"typeDescriptions\\\":{\\\"typeIdentifier\\\":\\\"t_string_storage_ptr\\\",\\\"typeString\\\":\\\"string\\\"}},\\\"value\\\":null,\\\"visibility\\\":\\\"internal\\\"}],\\\"src\\\":\\\"126:15:1\\\"},\\\"scope\\\":50,\\\"src\\\":\\\"89:80:1\\\",\\\"stateMutability\\\":\\\"view\\\",\\\"superFunction\\\":null,\\\"visibility\\\":\\\"public\\\"}],\\\"scope\\\":51,\\\"src\\\":\\\"25:146:1\\\"}],\\\"src\\\":\\\"0:171:1\\\"},\\\"compiler\\\":{\\\"name\\\":\\\"solc\\\",\\\"version\\\":\\\"0.5.16+commit.9c3226ce.Emscripten.clang\\\"},\\\"networks\\\":{\\\"5777\\\":{\\\"events\\\":{},\\\"links\\\":{},\\\"address\\\":\\\"0x279CCCe29C56618725C1919Fcf6C3c81C5A924d9\\\",\\\"transactionHash\\\":\\\"0x6d505e644e0be17fe383b0b2ac4dbe368296fe39695e2276882a9a5bb5a8c287\\\"}},\\\"schemaVersion\\\":\\\"3.1.0\\\",\\\"updatedAt\\\":\\\"2020-06-17T16:27:53.561Z\\\",\\\"networkType\\\":\\\"ethereum\\\",\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2V0aGVyZXVtL2J1aWxkL2NvbnRyYWN0cy9TdG9yYWdlLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ethereum/build/contracts/Storage.json\n");

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/home/cryptokowsik/Dapp-dev-nextjs/pages/_error.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, \"Error occured while fetching data in index.js getInitialProps function\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/NjM0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxxRUFBSTtBQUNmLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RUFESixDQURKO0FBS0gsQ0FORCIsImZpbGUiOiIuL3BhZ2VzL19lcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMj5FcnJvciBvY2N1cmVkIHdoaWxlIGZldGNoaW5nIGRhdGEgaW4gaW5kZXguanMgZ2V0SW5pdGlhbFByb3BzIGZ1bmN0aW9uPC9oMj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web3.js */ \"./web3.js\");\n/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/build/contracts/Storage.json */ \"./ethereum/build/contracts/Storage.json\");\nvar _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../ethereum/build/contracts/Storage.json */ \"./ethereum/build/contracts/Storage.json\", 1);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_error.js */ \"./pages/_error.js\");\nvar _jsxFileName = \"/home/cryptokowsik/Dapp-dev-nextjs/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  static async getInitialProps() {\n    let errorOccured = false;\n    let accounts, networkId, StorageDeployedAddress, StorageInstance, name;\n\n    try {\n      accounts = await _web3_js__WEBPACK_IMPORTED_MODULE_1___default.a.eth.getAccounts();\n      networkId = await _web3_js__WEBPACK_IMPORTED_MODULE_1___default.a.eth.net.getId();\n      StorageDeployedAddress = _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId].address;\n      StorageInstance = await new _web3_js__WEBPACK_IMPORTED_MODULE_1___default.a.eth.Contract(_ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_2__.abi, StorageDeployedAddress);\n      name = await StorageInstance.methods.name().call();\n    } catch (err) {\n      alert(`Failed to load web3, accounts, or contract. Check console for details.`);\n      console.log(error);\n      errorOccured = true;\n    }\n\n    return {\n      accounts,\n      StorageInstance,\n      name,\n      errorOccured\n    };\n  }\n\n  render() {\n    const {\n      accounts,\n      StorageInstance,\n      name,\n      errorOccured\n    } = this.props;\n\n    if (errorOccured === true) {\n      return __jsx(_error_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 20\n        }\n      });\n    }\n\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      accounts: accounts,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, \"Edit index.js file \"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImVycm9yT2NjdXJlZCIsImFjY291bnRzIiwibmV0d29ya0lkIiwiU3RvcmFnZURlcGxveWVkQWRkcmVzcyIsIlN0b3JhZ2VJbnN0YW5jZSIsIm5hbWUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIlN0b3JhZ2UiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJDb250cmFjdCIsImFiaSIsIm1ldGhvZHMiLCJjYWxsIiwiZXJyIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLCtDQUFsQixDQUEyQjtBQUN2QixlQUFhQyxlQUFiLEdBQThCO0FBQzFCLFFBQUlDLFlBQVksR0FBQyxLQUFqQjtBQUNBLFFBQUlDLFFBQUosRUFBYUMsU0FBYixFQUF1QkMsc0JBQXZCLEVBQThDQyxlQUE5QyxFQUE4REMsSUFBOUQ7O0FBQ0EsUUFBRztBQUNDSixjQUFRLEdBQUcsTUFBTUssK0NBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBQWpCO0FBQ0FOLGVBQVMsR0FBRyxNQUFNSSwrQ0FBSSxDQUFDQyxHQUFMLENBQVNFLEdBQVQsQ0FBYUMsS0FBYixFQUFsQjtBQUNBUCw0QkFBc0IsR0FBR1EsbUVBQU8sQ0FBQ0MsUUFBUixDQUFpQlYsU0FBakIsRUFBNEJXLE9BQXJEO0FBQ0FULHFCQUFlLEdBQUcsTUFBTSxJQUFJRSwrQ0FBSSxDQUFDQyxHQUFMLENBQVNPLFFBQWIsQ0FBc0JILG1FQUFPLENBQUNJLEdBQTlCLEVBQW1DWixzQkFBbkMsQ0FBeEI7QUFDQUUsVUFBSSxHQUFHLE1BQU1ELGVBQWUsQ0FBQ1ksT0FBaEIsQ0FBd0JYLElBQXhCLEdBQStCWSxJQUEvQixFQUFiO0FBRUgsS0FQRCxDQU9DLE9BQU1DLEdBQU4sRUFBVTtBQUNQQyxXQUFLLENBQ0Esd0VBREEsQ0FBTDtBQUdFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNGdEIsa0JBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsV0FBTztBQUFDQyxjQUFEO0FBQVdHLHFCQUFYO0FBQTJCQyxVQUEzQjtBQUFnQ0w7QUFBaEMsS0FBUDtBQUNIOztBQUVEdUIsUUFBTSxHQUFFO0FBQ0osVUFBTTtBQUFDdEIsY0FBRDtBQUFXRyxxQkFBWDtBQUEyQkMsVUFBM0I7QUFBZ0NMO0FBQWhDLFFBQThDLEtBQUt3QixLQUF6RDs7QUFDQSxRQUFHeEIsWUFBWSxLQUFLLElBQXBCLEVBQXlCO0FBQ3JCLGFBQU8sTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDSDs7QUFDRCxXQUNJLE1BQUMsMERBQUQ7QUFBUSxjQUFRLEVBQUVDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREo7QUFLSDs7QUEvQnNCOztBQWlDWkosa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vd2ViMy5qcyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuLi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvU3RvcmFnZS5qc29uJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvci5qcydcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGxldCBlcnJvck9jY3VyZWQ9ZmFsc2U7XG4gICAgICAgIGxldCBhY2NvdW50cyxuZXR3b3JrSWQsU3RvcmFnZURlcGxveWVkQWRkcmVzcyxTdG9yYWdlSW5zdGFuY2UsbmFtZTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICBTdG9yYWdlRGVwbG95ZWRBZGRyZXNzID0gU3RvcmFnZS5uZXR3b3Jrc1tuZXR3b3JrSWRdLmFkZHJlc3M7XG4gICAgICAgICAgICBTdG9yYWdlSW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoU3RvcmFnZS5hYmksIFN0b3JhZ2VEZXBsb3llZEFkZHJlc3MpO1xuICAgICAgICAgICAgbmFtZSA9IGF3YWl0IFN0b3JhZ2VJbnN0YW5jZS5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGVycm9yT2NjdXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHthY2NvdW50cywgU3RvcmFnZUluc3RhbmNlLG5hbWUsZXJyb3JPY2N1cmVkfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7YWNjb3VudHMsIFN0b3JhZ2VJbnN0YW5jZSxuYW1lLGVycm9yT2NjdXJlZH09dGhpcy5wcm9wcztcbiAgICAgICAgaWYoZXJyb3JPY2N1cmVkID09PSB0cnVlKXtcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3IgLz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0IGFjY291bnRzPXthY2NvdW50c30+XG4gICAgICAgICAgICAgICAgPGgyPkVkaXQgaW5kZXguanMgZmlsZSA8L2gyPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Web3 = __webpack_require__(/*! web3 */ \"web3\");\n\nlet web3;\n\nlet init = () => {\n  if (false) {}\n\n  if (false) {} else {\n    const provider = new Web3.providers.HttpProvider('http://localhost:7545');\n    web3 = new Web3(provider);\n  }\n};\n\ninit();\nmodule.exports = web3;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIzLmpzPzg5ZDciXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiaW5pdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLElBQUlDLElBQUo7O0FBQ0EsSUFBSUMsSUFBSSxHQUFDLE1BQUk7QUFDWixNQUFHLEtBQUgsRUFBd0UsRUFVdkU7O0FBQ0QsTUFBRyxLQUFILEVBQXFFLEVBQXJFLE1BRUs7QUFDRixVQUFNQyxRQUFRLEdBQUMsSUFBSUosSUFBSSxDQUFDSyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLHVCQUFoQyxDQUFmO0FBQ0RKLFFBQUksR0FBQyxJQUFJRixJQUFKLENBQVNJLFFBQVQsQ0FBTDtBQUNEO0FBQ0QsQ0FsQkQ7O0FBbUJBRCxJQUFJO0FBRUpJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFrQk4sSUFBbEIiLCJmaWxlIjoiLi93ZWIzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBXZWIzID0gcmVxdWlyZSgnd2ViMycpXG5sZXQgd2ViMztcbmxldCBpbml0PSgpPT57XG5cdGlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSd1bmRlZmluZWQnKXtcblx0XHR3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcbiAgICBcdHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKS50aGVuKChyZXMsZXJyKSA9PntcbiAgICBcdFx0aWYoZXJyKXtcbiAgICBcdFx0XHRjb25zb2xlLmxvZyhlcnIpXG4gICAgXHRcdH1lbHNle1xuICAgIFx0XHRcdHJldHVybiByZXNcbiAgICBcdFx0fVxuICAgIFx0XHRcbiAgICBcdH0pXG5cdH1cblx0aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0ndW5kZWZpbmVkJyApe1xuICBcdFx0d2ViMz1uZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuXHR9ZWxzZXtcbiAgXHRcdGNvbnN0IHByb3ZpZGVyPW5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzU0NScpXG4gIFx0d2ViMz1uZXcgV2ViMyhwcm92aWRlcik7XG5cdH1cbn1cbmluaXQoKVxuXG5tb2R1bGUuZXhwb3J0cyA9ICB3ZWIzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cryptokowsik/Dapp-dev-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIj85MWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/AppBar\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI/MzZlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Toolbar\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ })

/******/ });