import * as types from '../constants/constants';

export const saveUser = (id, userName) => ({
  type: types.SAVE_USER,
  id,
  userName,
});
