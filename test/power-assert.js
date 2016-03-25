import test from 'ava'

const someArray = ['a', 'b']

test('check on some variable', t => {
  t.is(someArray.indexOf('a'), 1)
})
