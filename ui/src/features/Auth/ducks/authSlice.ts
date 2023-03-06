import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { authApi } from './authApi';

const initialState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
} as { isAuthenticated: boolean; token: string | null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('access_token');
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuthenticated = true;
        localStorage.setItem('access_token', payload.access_token);
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
