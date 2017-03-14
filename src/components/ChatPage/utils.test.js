import { capitalize, toRoomName, toRoomUrl } from './utils';

describe('capitalize', () => {
  it('should capitalize a single word', () => {
    expect(capitalize('foo')).toBe('Foo');
  });

  it('should only capitalize the first word in a sentence', () => {
    expect(capitalize('foo bar')).toBe('Foo bar');
  });
});

describe('toRoomName', () => {
  it('should turn a roomURL into an upper-cased room name', () => {
    expect(toRoomName('some-room-name')).toBe('Some Room Name');
  });
});

describe('toRoomUrl', () => {
  it('should turn a roomName into a dasherized roomURL', () => {
    expect(toRoomUrl('Some Name Here')).toBe('some-name-here');
  });
})
