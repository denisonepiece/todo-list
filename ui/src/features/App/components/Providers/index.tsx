import { ConfigProvider, theme } from 'antd';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../../../store';

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        token: {
          // colorPrimary: '#b4132d',
        }
      }}>{children}</ConfigProvider>
    </Provider>
  );
}

export default Providers;
