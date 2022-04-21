import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '~/services/api';
import {updateProfileFailure, updateProfileSuccess} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = Object.assign(
      {name, email, avatar_id},
      rest.OldPassword ? rest : {},
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso.');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro durante a atualização do perfil. Verifique seus dados.',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
