import React, {
  Component,
  PropTypes,
  ScrollView,
  Text,
  UIManager,
  View,
} from 'react-native'

class Picker extends Component {

  _options = {};
  _picker = null;

  static propTypes = {
    activeIndex: React.PropTypes.number,
    children: React.PropTypes.node,
    onSelect: React.PropTypes.func,
    renderFooter: React.PropTypes.func,
    renderHeader: React.PropTypes.func,
    selectedBackground:  View.propTypes.style,
    selectedText: Text.propTypes.style,
    style: View.propTypes.style,
  };

  static defaultProps = {
    renderFooter: () => null,
    renderHeader: () => null,
  };

  state = {
    activeIndex: this.props.activeIndex ? this.props.activeIndex : 0
  };

  componentWillReceiveProps(nextProps) {
    nextProps.activeIndex && this.setState({ activeIndex: nextProps.activeIndex })
  }

  componentDidMount() {
    // @TODO a not so pretty setTimeout to make sure layout is computed
    setTimeout(() => this._initializeActiveIndex(this.props.activeIndex), 0)
  }

  _initializeActiveIndex = (activeIndex) => {
    this.setState({ activeIndex })
    let handle = React.findNodeHandle(this._options[activeIndex])
    if (handle) {
      let m = UIManager.measureLayoutRelativeToParent(
        handle,
        (err) => {},
        (x, y, w, h) => {
          if (this._picker) this._picker.scrollTo({y: Math.max(0, y - 95), x: null, animated: true})
        }
      )
    }
  };

  _setActiveIndex = (value) => {
    let { children, onSelect } = this.props

    let activeChild = children.find(c => c.props.value === value)
    let activeIndex = children.findIndex(c => c.props.value === value)

    this.setState({ activeIndex })
    onSelect && onSelect(value)
  };

  _renderChildren = () => {
    return React.Children.map(this.props.children, (child, ii) => {
      if (ii === this.state.activeIndex)
        return child
        // return React.cloneElement(child, {
        //   selected: true,
        //   selectedBackground: this.props.selectedBackground,
        //   selectedText: this.props.selectedText,
        //   setActiveIndex: this._setActiveIndex,
        //   ref: (ref) => {this._options[ii] = ref}
        // })
      else
        return React.cloneElement(child, {
          selected: false,
          setActiveIndex: this._setActiveIndex,
          ref: (ref) => {this._options[ii] = ref}
        })
    })
  };

  render() {
    return (
      <ScrollView style={this.props.style} ref={(picker) => this._picker = picker}>
        {this.props.renderHeader()}
        {this._renderChildren()}
        {this.props.renderFooter()}
      </ScrollView>
    )
  }
}

module.exports = Picker
