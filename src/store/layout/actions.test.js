import { Types, Creators } from '.';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('Deve retornar a action type SHOW_MESSAGE', () => {
      expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE');
    });
    test('Deve retornar a action type HIDE_MESSAGE', () => {
      expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE');
    });
  });
  describe('Actions Creators', () => {
    test('Deve retornar a action creator showMenssage {type: SHOW_MESSAGE}', () => {
      expect(Creators.showMessage()).toEqual({ type: Types.SHOW_MESSAGE });
    });
    test('Deve retornar a action creator hideMenssage {type: HIDE_MESSAGE}', () => {
      expect(Creators.hideMessage()).toEqual({ type: Types.HIDE_MESSAGE });
    });
  });
});

/* import { hideMessage, showMessage } from '.';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('Deve retornar a action type SHOW_MESSAGE', () => {
      expect(showMessage.type).toEqual('SHOW_MESSAGE');
    });
    test('Deve retornar a action type HIDE_MESSAGE', () => {
      expect(hideMessage.type).toEqual('HIDE_MESSAGE');
    });
  });
  describe('Actions Creators', () => {
    test('Deve retornar a action creator showMessage {type: SHOW_MESSAGE}', () => {
      expect(showMessage()).toEqual({ type: 'SHOW_MESSAGE' });
    });
    test('Deve retornar a action creator showMessage {type: HIDE_MESSAGE}', () => {
      expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE' });
    });
  });
});
 */
