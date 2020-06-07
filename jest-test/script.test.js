const googleSearch = require('./script');

// Jest syntax

//Mock database to avoid importing the real one,
// which is expensive
dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

// describe method groups tests
describe('googleSearch', () => {
  // it method creates test
  it('this is a test', () => {
    expect('hello').toBe('hello')
    googleSearch('testtest', dbMock);
  });
  
  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });
  
  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
  
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
})