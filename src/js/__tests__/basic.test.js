import Validator from '../app';

test('check true name', () => {
  const result = 'sdf222ww';
  const name = new Validator('sdf222ww').validateUsername();
  expect(name).toBe(result);
});

test('check false name', () => {
  const name = new Validator('_sdf222ww').validateUsername();
  expect(name).toBe('Неправильное имя!');
});
