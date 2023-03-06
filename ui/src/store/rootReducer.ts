import rootApi from '../api/rootApi';
import auth from '../features/Auth/ducks/authSlice';

export default {
  auth,
  [rootApi.reducerPath]: rootApi.reducer,
};
