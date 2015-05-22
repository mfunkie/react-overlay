const React = require('react');
const { PropTypes } = React;

const Overlay = React.createClass({
  displayName: 'Overlay',

  propTypes: {
    container:   PropTypes.object,
    elementType: PropTypes.string
  },

  getDefaultProps() {
    return {
      container:   document.body,
      elementType: 'div'
    };
  },

  shouldComponentUpdate() {
    return false;
  },

  componentDidMount() {
    this.buildContainer();
    this.renderOverlay();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.container !== nextProps.container) {
      this.removeContainer();
      this.buildContainer(nextProps);
    }
    this.renderOverlay(nextProps);
  },

  componentWillUnmount() {
    this.removeContainer();
  },

  buildContainer(props) {
    const thisProps = props || this.props;
    this._overlayContainer = document.createElement(thisProps.elementType);
    const container = thisProps.container;
    container.appendChild(this._overlayContainer);
  },

  removeContainer() {
    React.unmountComponentAtNode(this._overlayContainer);
    this.props.container.removeChild(this._overlayContainer);
    this._overlayContainer = null;
  },

  renderOverlay(props) {
    const thisProps = props || this.props;
    React.render(
      React.Children.only(thisProps.children),
      this._overlayContainer
    );
  },

  render() {
    return null;
  }
});

module.exports = Overlay;
