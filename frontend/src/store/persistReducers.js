import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default function authPersistence (reducers) {
  console.tron.log('store/persistReducers');
  const persistedReducer = persistReducer(
    {
      key: "gobarber",
      storage,
      whietelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};

/*
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "gobarber",
      storage,
      whietelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};

*/