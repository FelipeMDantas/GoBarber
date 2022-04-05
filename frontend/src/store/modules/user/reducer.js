import produce from "immer";

const INITAL_STATE = {
  profile: null,
};

export default function user(state = INITAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      console.tron.log('user/reducer');
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}

/*export default function auth(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }

      default:
    }
  });
}*/
