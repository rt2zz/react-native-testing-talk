import React, {
  Component,
  Dimensions,
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

class Option extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    onLayout: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    selectedBackground: View.propTypes.style,
    selectedText: Text.propTypes.style,
    setActiveIndex: React.PropTypes.func,
    style: View.propTypes.style,
    value: React.PropTypes.any,
    selected: React.PropTypes.bool,
  };

  render() {
    let {
      children,
      disabled,
      selectedBackground,
      selectedText,
      setActiveIndex,
      style,
      value,
      selected
    } = this.props

    return (
      <TouchableOpacity
        onPress={() => !disabled && !selected && setActiveIndex(value)}
        onLayout={this.props.onLayout}
        style={[styles.default, style, selectedBackground]}>
        <Text style={selectedText}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
})

module.exports = Option
