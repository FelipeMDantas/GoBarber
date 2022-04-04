import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { signInSuccess, signFailure } from "./actions";
import api from "~/services/api";
import history from "~/services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
      Headers: {
        "Content-Type": "application/json",
      },
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error("Usuário não é prestador.");
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados.");
    yield put(signFailure());
  }
  console.tron.log('sagas: ' + api.defaults);
}

export function* SignUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password,
      provider: true,
    });

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados.");

    yield put(signFailure());
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", SignUp),
]);
