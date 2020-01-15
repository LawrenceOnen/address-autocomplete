import React, { FC } from 'react';
import AddressAutocomplete from './components/AddressAutocomplete';

const App: FC = () => (
  <AddressAutocomplete
    onAutocomplete={(address: any) => {
      console.log(address);
    }}
  />
);

export default App;
