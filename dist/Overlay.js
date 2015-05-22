'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Overlay = React.createClass({
  displayName: 'Overlay',

  propTypes: {
    container: PropTypes.object,
    elementType: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      container: document.body,
      elementType: 'div'
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    return false;
  },

  componentDidMount: function componentDidMount() {
    this.buildContainer();
    this.renderOverlay();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.container !== nextProps.container) {
      this.removeContainer();
      this.buildContainer(nextProps);
    }
    this.renderOverlay(nextProps);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.removeContainer();
  },

  buildContainer: function buildContainer(props) {
    var thisProps = props || this.props;
    this._overlayContainer = document.createElement(thisProps.elementType);
    var container = thisProps.container;
    container.appendChild(this._overlayContainer);
  },

  removeContainer: function removeContainer() {
    React.unmountComponentAtNode(this._overlayContainer);
    this.props.container.removeChild(this._overlayContainer);
    this._overlayContainer = null;
  },

  renderOverlay: function renderOverlay(props) {
    var thisProps = props || this.props;
    React.render(React.Children.only(thisProps.children), this._overlayContainer);
  },

  render: function render() {
    return null;
  }
});

module.exports = Overlay;