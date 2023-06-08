const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

it('should return error if "fullName" is empty', () => {
  const result = formatFullname('');
  expect(result).to.equal('Error');
});

it('should return an error if "fullName" arg is not a string', () => {
  expect(formatFullname(undefined, 20)).to.equal('Error');
  expect(formatFullname(12, 20)).to.equal('Error');
  expect(formatFullname({}, 20)).to.equal('Error');
  expect(formatFullname([], 20)).to.equal('Error');
  expect(formatFullname(function () {}, 20)).to.equal('Error');
});

it('should return an error if "fullName" does not match the expected format', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
});