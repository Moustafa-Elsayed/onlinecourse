// redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import coursesReducer from "./slices/coursesSlice";
import cartReducer from "./slices/cartSlice";
import allUsersSlice from "./slices/usersSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "courses", "users"], 
};

const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  cart: cartReducer,
  users: allUsersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
