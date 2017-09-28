import * as types from '../constants/constants';

const initialState = [
  {
    id: 76360,
    userName: 'jthomchak',
    password: 'password',
    email: 'jtomchak@codercamp.com',
  },
  {
    id: 150330,
    userName: 'ksimpson',
    password: 'password',
    email: 'jksimpson@codercamp.com',
  },
];

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      const userIndex = state.map(o => o.id).indexOf(action.id);
      return [
        ...state.slice(0, userIndex),
        {...state[userIndex], name: action.name},
        ...state.slice(userIndex + 1, state.length),
      ];
    default:
      return state;
  }
};

export default users;
