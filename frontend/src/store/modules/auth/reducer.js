import produce from "immer";

const INITAL_STATE = {
  token: null,
  signed: null,
  loading: false,
};

/*export default function auth(state = INITAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}*/

export default function auth(state = INITAL_STATE, action) {
  console.tron.log({ action })
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
