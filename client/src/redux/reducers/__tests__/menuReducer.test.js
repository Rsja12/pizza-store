import menuReducer from '../menuReducer';
import { MENU_DATA } from '../../menu/menuData';

const INITIAL_STATE = MENU_DATA;

it('returns INITIAL_STATE as default', () => {
    expect(menuReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
});
