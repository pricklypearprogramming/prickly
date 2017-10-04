import * as types from '../constants/constants';

export const addUser = (id, userName) => ({type: types.ADD_USER, id, UserName});
