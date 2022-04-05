export function signInRequest(email, password) {
  console.tron.log('action signInRequest')
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  console.tron.log('action signInSuccess')
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  console.tron.log('action signUpRequest')
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { name, email, password },
  };
}

export function signFailure() {
  console.tron.log('action signFailure')
  return {
    type: "@auth/SIGN_IN_FAILURE",
  };
}
