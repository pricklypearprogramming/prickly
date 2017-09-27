import * as types from '../constants/constants';

const initialState = [
  {
    id: 76360,
    firstname: 'Jesse',
    lastname: 'Tomchak',
    userName: 'jthomchak',
    email: 'jtomchak@codercamp.com',
    password: 'password',
  },
  {
    id: 150330,
    firstname: 'Kyle',
    lastname: 'Simpson',
    userName: 'ksimpson',
    email: 'jksimpson@codercamp.com',
    password: 'password',
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
