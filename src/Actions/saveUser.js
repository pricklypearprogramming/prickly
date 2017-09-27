import * as types from '../constants/constants';

export const saveUser = (id, name) => ({type: types.SAVE_USER, id, name});
