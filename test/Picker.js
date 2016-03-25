import test from 'ava';

import React, { View } from 'react-native'
import Option from '../src/Option'
import Picker from '../src/Picker'

import { shallow } from 'enzyme'

test('<Picker /> should render <Option /> children when passed in', t => {
  const wrapper = shallow(
    <Picker>
      <Option value="one" />
      <Option value="two" />
      <Option value="three" />
    </Picker>
  )
  t.is(wrapper.length, 1)
  t.is(wrapper.find(Option).length, 3)
})

test('<Picker /> should render footer and header when provided as props', t => {
  const wrapper = shallow(
    <Picker
      renderHeader={() => <View />}
      renderFooter={() => <View />}
      >
      <Option value="one" />
      <Option value="two" />
    </Picker>
  )
  t.is(wrapper.length, 1)
  t.is(wrapper.find(View).length, 2)
})
