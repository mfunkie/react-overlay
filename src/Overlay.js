const { Children, Component, PropTypes } = React;

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.buildContainer();
    this.renderOverlay();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.container !== nextProps.container) {
      this.removeContainer();
      this.buildContainer(nextProps);
    }
    this.renderOverlay(nextProps);
  }

  componentWillUnmount() {
    React.unmountComponentAtNode(this._overlayContainer);
    this.removeContainer();
  }

  buildContainer(props) {
    const thisProps = props || this.props;
    this._overlayContainer = document.createElement(thisProps.elementType);
    const container = thisProps.container;
    container.appendChild(this._overlayContainer);
  }

  removeContainer() {
    this.props.container.removeChild(this._overlayContainer);
    this._overlayContainer = null;
  }

  renderOverlay(props) {
    const thisProps = props || this.props;
    React.render(
      React.Children.only(thisProps.children),
      this._overlayContainer
    );
  }

  render() {
    return null;
  }
}

Overlay.propTypes = {
  container: PropTypes.object
};
Overlay.defaultProps = {
  container:   document.body,
  elementType: 'div'
};

export default Overlay;
