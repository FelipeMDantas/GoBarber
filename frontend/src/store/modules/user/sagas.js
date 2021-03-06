import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "~/services/api";
import { updateProfileFailure, updateProfileSuccess } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.OldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);

    toast.success("Perfil atualizado com sucesso!");
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao ataulizar perfil. Confira seus dados.");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
