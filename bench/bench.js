import test from 'ava'
import ben from 'ben'
import chalk from 'chalk'

import React from 'react-native'
import { shallow } from 'enzyme'

import Picker1 from '../src/Picker'
import Picker2 from '../src/Picker.2'
import Option from '../src/Option'

const createPicker1 = () => {
  return shallow(
    <Picker1>
      <Option value="one" />
      <Option value="two" />
      <Option value="three" />
    </Picker1>
  )
}

const createPicker2 = () => {
  shallow(
    <Picker2>
      <Option value="one" />
      <Option value="two" />
      <Option value="three" />
    </Picker2>
  )
}

test('benchmark', t => {
  let ms1 = ben(5000, createPicker1)
  let ms2 = ben(5000, createPicker2)

  console.log('Benchmark results: ')
  console.log(chalk.yellow(`Picker 1: ${ms1}`))
  console.log(chalk.yellow(`Picker 2: ${ms2}`))
  console.log(chalk.magenta(`Picker ${ms1 < ms2 ? '1' : '2'} was victorious! ~${(Math.abs(ms1-ms2)/Math.max(ms1, ms2)*100).toFixed(2)}% faster`))
})
