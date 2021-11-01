import 'react-native-gesture-handler';
import React from 'react';

import NavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <NavContainer></NavContainer>
    </GlobalProvider>
  );
}
