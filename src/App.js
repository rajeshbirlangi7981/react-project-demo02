import React from 'react';
import Block from './Block';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';

const itemsBlock1 = [
  { name: 'BAJAJ-AUTO', price: '5.12' },
  { name: 'BPCL', price: '2.19' },
  { name: 'COALINDIA', price: '2.15' },
  { name: 'SUNPHARMA', price: '1.73' },
  { name: 'TATAMOTORS', price: '1.72' },
  { name: 'BHARTIARTL', price: '1.52' },
  { name: 'APOLLOHOSP', price: '1.28' },
  { name: 'ICICIBANK', price: '1.13' },
];

const itemsBlock2 = [
  { name: 'ICICIGI', price: '1.37' },
  { name: 'ICICIBANK', price: '1.13' },
  { name: 'ICICIPRULI', price: '0.99' },
  { name: 'BAJAJFINSV', price: '0.32' },
  { name: 'HDFCLIFE', price: '0.59' },
  { name: 'BAJFINANCE', price: '0.24' },
  { name: 'LICHSGFIN', price: '-0.98' },
];

const itemsBlock3 = [
  { name: 'ICICIBANK', price: '1.13' },
  { name: 'INDUSINDBK', price: '0.55' },
];

const itemsBlock4 = [
  { name: 'MINDACORP', price: '19.56' },
  { name: 'PCBL', price: '12.43' },
  { name: 'HSCL', price: '9.37' },
  { name: 'NYKAA', price: '9.11' },
  { name: 'DOMS', price: '8.72' },
  { name: 'FORTIS', price: '5.73' },
  { name: 'DIXON', price: '3.75' },
  { name: 'HFCL', price: '3.56' },
];

const itemsBlock5 = [
  { name: 'MINDACORP', price: '13.56' },
  { name: 'CESC', price: '11.56' },
  { name: 'LICHSGFIN', price: '9.56' },
  { name: 'GAEL', price: '7.54' },
  { name: 'SUNDRMBRAK', price: '6.11' },
  { name: 'NAGREEKEXP', price: '5.55' },
  { name: 'ORIENTALTL', price: '3.55' },
  { name: 'ROUTIE', price: '2.1' },
  { name: 'PNCINFRA', price: '1.89' },
];

const sideBlockItems = [
  { name: 'ALBERTDAVD', price: '20.00' },
  { name: 'SUNDRMBRAK', price: '20.00' },
  { name: 'NAGREEKEXP', price: '19.99' },
  { name: 'SEPC', price: '19.98' },
  { name: 'ORIENTALTL', price: '19.90' },
  { name: 'SGL', price: '18.68' },
  { name: 'SMSPHARMA', price: '18.39' },
  { name: 'JETFREIGHT', price: '18.00' },
  { name: 'POWERMECH', price: '15.79' },
  { name: 'GUJAPOLLO', price: '14.15' },
  { name: 'RANEENGINE', price: '13.88' },
  { name: 'ELIN', price: '13.17' },
];

function App() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto p-5 mx-auto bg-gray-900">
      <div className="flex justify-center mb-10 space-x-4 overflow-x-auto">
        <Block title="NIFTY" items={itemsBlock1} titleBgColor="bg-green-100" />
        <Block title="FINNIFTY" items={itemsBlock2} titleBgColor="bg-green-500" />
        <Block title="BANKNIFTY" items={itemsBlock3} titleBgColor="bg-green-300" />
        <Block title="SMART MONEY" items={itemsBlock4} titleBgColor="bg-blue-500" />
        <Block title="5MIN Intraday Performers" items={itemsBlock5} titleBgColor="bg-purple-500" />
      </div>
      
      <div className="flex flex-col items-start justify-between w-full gap-6 md:flex-row">
        <MainBlock title="Intraday Performs & Intraday Buzz" content="This is the bottom block content" />
        <SideBlock title="Saving" items={sideBlockItems} />
      </div>
      </div>
  );
}

export default App;
