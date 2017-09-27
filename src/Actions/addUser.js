import * as types from '../constants/constants';

export const addUser = (id, name) => ({type: types.ADD_USER, id, name});
