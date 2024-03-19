import React from 'react';
import DataDisplay from './components/DataDisplay';
import {RecoilRoot} from 'recoil';
export default function App() {
  return (
    <div>
      <RecoilRoot> 
        <DataDisplay/>
      </RecoilRoot>
    </div>
  )
}
