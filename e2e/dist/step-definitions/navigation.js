"use strict";

var _cucumber = require("@cucumber/cucumber");

var _navigationBehavior = require("../support/navigation-behavior");

var _waitForBehavior = require("../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageId) {
    var page, globalVariables, globalConfig;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = this.screen.page, globalVariables = this.globalVariables, globalConfig = this.globalConfig;
          _context.next = 3;
          return (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);

        case 3:
          _context.next = 5;
          return (0, _waitForBehavior.waitFor)(function () {
            return (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Given)(/^I am directed to the "([^"]*)" page$/, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageId) {
    var page, globalConfig;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _context2.next = 3;
          return (0, _waitForBehavior.waitFor)(function () {
            return (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig);
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}());