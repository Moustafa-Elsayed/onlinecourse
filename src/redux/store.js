// redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import coursesReducer from "./slices/coursesSlice";
import cartReducer from "./slices/cartSlice";
import allUsersSlice from "./slices/usersSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "courses", "users"], // Specify which slices to persist
};

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  cart: cartReducer,
  users: allUsersSlice,
});

// Apply persistence to the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the persist action types and any non-serializable values
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor to persist the store
export const persistor = persistStore(store);
