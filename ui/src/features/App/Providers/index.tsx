import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#783278',
          },
        }}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default Providers;
