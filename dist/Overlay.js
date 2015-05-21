'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Overlay = (function (_Component) {
  function Overlay(props) {
    _classCallCheck(this, Overlay);

    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Overlay, _Component);

  _createClass(Overlay, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildContainer();
      this.renderOverlay();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.container !== nextProps.container) {
        this.removeContainer();
        this.buildContainer(nextProps);
      }
      this.renderOverlay(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _react2['default'].unmountComponentAtNode(this._overlayContainer);
      this.removeContainer();
    }
  }, {
    key: 'buildContainer',
    value: function buildContainer(props) {
      var thisProps = props || this.props;
      this._overlayContainer = document.createElement(thisProps.elementType);
      var container = thisProps.container;
      container.appendChild(this._overlayContainer);
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      this.props.container.removeChild(this._overlayContainer);
      this._overlayContainer = null;
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay(props) {
      var thisProps = props || this.props;
      _react2['default'].render(_react2['default'].Children.only(thisProps.children), this._overlayContainer);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Overlay;
})(_react.Component);

Overlay.propTypes = {
  container: _react.PropTypes.object,
  elementType: _react.PropTypes.string
};
Overlay.defaultProps = {
  container: document.body,
  elementType: 'div'
};

exports['default'] = Overlay;
module.exports = exports['default'];