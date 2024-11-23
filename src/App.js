import React from 'react';
import Block from './Block';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';


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

const table1 = [
      { date: "16 July 2024", symbol: "ASIENENE", intra_volume: 190603, longterm_volume: "85,773.00" },
      { date: "16 July 2024", symbol: "CHENNPETRO", intra_volume: 9999598, longterm_volume: "13,70,927.00" },
      { date: "16 July 2024", symbol: "GLOBE", intra_volume: 8611673, longterm_volume: "21,09,082.00" },
      { date: "16 July 2024", symbol: "HARIOMPIPE", intra_volume: 493565, longterm_volume: "94,880.00" },
      { date: "16 July 2024", symbol: "HATSUN", intra_volume: 997195, longterm_volume: "53,521.00" },
      { date: "16 July 2024", symbol: "HBLPOWER", intra_volume: 7425790, longterm_volume: "15,60,662.00" },
      { date: "16 July 2024", symbol: "INTENTECH", intra_volume: 772315, longterm_volume: "3,169.00" },
      { date: "16 July 2024", symbol: "ISMTLTD", intra_volume: 3644519, longterm_volume: "10,62,749.00" },
      { date: "16 July 2024", symbol: "KABRAEXTRU", intra_volume: 685868, longterm_volume: "1,33,793.00" },
      { date: "16 July 2024", symbol: "KEYFINSERV", intra_volume: 88572, longterm_volume: "9,818.00" },
      { date: "16 July 2024", symbol: "MTNL", intra_volume: 40105792, longterm_volume: "16,162.00" },
      { date: "16 July 2024", symbol: "NITINSPIN", intra_volume: 995340, longterm_volume: "13,083.00" },
      { date: "16 July 2024", symbol: "PNC", intra_volume: 276148, longterm_volume: "1,35,587.00" },
      { date: "16 July 2024", symbol: "SERVOTECH", intra_volume: 8883498, longterm_volume: "9,55,950.00" },
      { date: "16 July 2024", symbol: "SPORTKING", intra_volume: 99101, longterm_volume: "15,689.00" },
      { date: "16 July 2024", symbol: "STYRENIX", intra_volume: 388579, longterm_volume: "47,140.00" },
      { date: "16 July 2024", symbol: "UMANGDAIRY", intra_volume: 917150, longterm_volume: "16,029.00" },
      { date: "16 July 2024", symbol: "WANBURY", intra_volume: 472959, longterm_volume: "1,03,192.00" },
    ];

    const table2 = [
        { symbol: 'AARTIIND', volume: 763559, avgVolume: '3,42,987.47', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'ABB', volume: 91176, avgVolume: '31,642.80', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'ADANIENT', volume: 255854, avgVolume: '1,21,281.13', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'ALKEM', volume: 40724, avgVolume: '14,024.48', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'AMBUJACEM', volume: 740065, avgVolume: '3,59,287.00', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'APOLLOHOSP', volume: 206921, avgVolume: '65,020.64', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'ASIANPAINT', volume: 259726, avgVolume: '1,23,206.19', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'AXISBANK', volume: 1321726, avgVolume: '5,98,026.19', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BAJAJ-AUTO', volume: 153440, avgVolume: '76,497.43', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BAJAJFINSV', volume: 628892, avgVolume: '2,36,366.63', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BAJFINANCE', volume: 360646, avgVolume: '1,59,751.31', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BALKRISIND', volume: 54884, avgVolume: '26,927.04', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BATAINDIA', volume: 191354, avgVolume: '92,592.04', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BERGEPAINT', volume: 490926, avgVolume: '1,61,753.31', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BHARATFORG', volume: 390908, avgVolume: '1,83,691.74', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BOSCHLTD', volume: 8559, avgVolume: '4,077.10', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'BPCL', volume: 5806235, avgVolume: '10,38,738.28', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'CANBK', volume: 17000540, avgVolume: '81,92,126.19', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'CHAMBLFERT', volume: 3483240, avgVolume: '12,03,548.94', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'COLPAL', volume: 114282, avgVolume: '41,254.28', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'CONCOR', volume: 528183, avgVolume: '2,06,482.75', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'CUB', volume: 500895, avgVolume: '2,45,274.73', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'CUMMINSIND', volume: 109151, avgVolume: '52,338.89', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'DABUR', volume: 797406, avgVolume: '3,29,189.12', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'DALBHARAT', volume: 468854, avgVolume: '2,45,738.41', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'DEEPAKNTR', volume: 439659, avgVolume: '1,98,354.31', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'DIVISLAB', volume: 259116, avgVolume: '1,25,156.38', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'ESCORTS', volume: 183371, avgVolume: '86,117.12', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'EXIDEIND', volume: 1810465, avgVolume: '5,09,662.78', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'FEDERALBNK', volume: 2605347, avgVolume: '1,23,456.23', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'GMRINFRA', volume: 4136286, avgVolume: '17,42,113.23', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'GNFC', volume: 727766, avgVolume: '3,46,116.18', timestamp: '27-09-2024 10:59:51' },
        { symbol: 'GODREJCP', volume: 2771271, avgVolume: '12,58,681.52', timestamp: '27-09-2024 10:59:51' },
      ];

      const table3 = [
        { date: '27 September 2024', symbol: 'AVADHSUGAR', intraVolume: 420968 },
        { date: '27 September 2024', symbol: 'GOPAL', intraVolume: 969205 },
        { date: '27 September 2024', symbol: 'MAGADSUGAR', intraVolume: 94675 },
        { date: '27 September 2024', symbol: 'SEQUENT', intraVolume: 9870346 },
        { date: '27 September 2024', symbol: 'ADDFOODS', intraVolume: 4884268 },
        { date: '12 September 2024', symbol: 'ADL', intraVolume: 757222 },
        { date: '12 September 2024', symbol: 'ARIHANTCAP', intraVolume: 1325155 },
        { date: '12 September 2024', symbol: 'BECTORFOOD', intraVolume: 851326 },
        { date: '12 September 2024', symbol: 'CREATIVE', intraVolume: 309679 },
        { date: '12 September 2024', symbol: 'FDC', intraVolume: 997792 },
        { date: '12 September 2024', symbol: 'FLEXITUFF', intraVolume: 127722 },
        { date: '12 September 2024', symbol: 'GOKULAGRO', intraVolume: 5912072 },
        { date: '12 September 2024', symbol: 'KAYNES', intraVolume: 601408 },
        { date: '12 September 2024', symbol: 'NORBTEAEXP', intraVolume: 16927 },
        { date: '12 September 2024', symbol: 'PREMIERPOL', intraVolume: 947640 },
        { date: '12 September 2024', symbol: 'SPORTKING', intraVolume: 81409 },
        { date: '12 September 2024', symbol: 'VAISHALI', intraVolume: 997413 },
        { date: '12 September 2024', symbol: 'ZAGGLE', intraVolume: 5399741 },
        { date: '10 September 2024', symbol: 'AEROFLEX', intraVolume: 5173513 },
        { date: '10 September 2024', symbol: 'AETHER', intraVolume: 994662 },
        { date: '10 September 2024', symbol: 'BAJAJHLDNG', intraVolume: 81748 },
        { date: '10 September 2024', symbol: 'BASML', intraVolume: 4016193 },
        { date: '10 September 2024', symbol: 'BHAGERIA', intraVolume: 559335 },
        { date: '10 September 2024', symbol: 'DJML', intraVolume: 293945 },
        { date: '10 September 2024', symbol: 'EPACK', intraVolume: 5151130 },
        { date: '10 September 2024', symbol: 'EPIGRAL', intraVolume: 714389 },
        { date: '10 September 2024', symbol: 'FDC', intraVolume: 998112 },
        { date: '10 September 2024', symbol: 'FSL', intraVolume: 7925463 },
        { date: '10 September 2024', symbol: 'GLOBUSSPR', intraVolume: 974567 },
        { date: '10 September 2024', symbol: 'GULFPETRO', intraVolume: 347424 },
        { date: '10 September 2024', symbol: 'INDOTHIA', intraVolume: 95733 },
        { date: '10 September 2024', symbol: 'KAMOPAINTS', intraVolume: 2483323 },
        { date: '10 September 2024', symbol: 'LAURUSLABS', intraVolume: 3100501 },
        { date: '10 September 2024', symbol: 'MOTISONS', intraVolume: 9289039 },
      ];

      const table4 = [
        { symbol: 'ABBOTINDIA', change: '-0.29'},
        { symbol: 'ABCAPITAL', change: '-0.30'},
        { symbol: 'ACC', change: '-1.31'},
        { symbol: 'ACANIENT', change: '-0.15'},
        { symbol: 'ADANIPORTS', change: '-0.48'},
        { symbol: 'ALIKEM', change: '-0.92'},
        { symbol: 'AMBUJACEM', change: '-0.26'},
        { symbol: 'APOLLOHOSP', change: '-0.77'},
        { symbol: 'APOLLOTYRE', change: '-2.68'},
        { symbol: 'ASHOKLEY', change: '-0.25'},
        { symbol: 'ASTRAL', change: '-1.12'},
        { symbol: 'ATUL', change: '-0.07'},
        { symbol: 'AUBANK', change: '-0.93'},
        { symbol: 'AUROPHARMA', change: '-1.27'},
        { symbol: 'AXISBANK', change: '-0.50'},
        { symbol: 'BAJAJ-AUTO', change: '-0.50'},
        { symbol: 'BAJAJFINSV', change: '-0.61'},
        { symbol: 'BAJFINANCE', change: '-0.70'},
        { symbol: 'BALKRISIND', change: '-1.03'},
        { symbol: 'BANKBARODA', change: '-0.18'},
        { symbol: 'BATAINDIA', change: '-0.03'}
      ];

function App() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto p-5 mx-auto bg-gray-900 overflow-hidden">
      <div className="flex justify-center mb-4 w-full h-auto space-x-2 overflow-x-hidden">
        <Block title="NIFTY" subtitle="25000" items={itemsBlock1} titleBgColor="bg-green-100"/>
        <Block title="FINNIFTY" subtitle="23000" items={itemsBlock2} titleBgColor="bg-green-500"/>
        <Block title="BANKNIFTY" subtitle="50000" items={itemsBlock3} titleBgColor="bg-green-300" />
        <Block title="SMART MONEY" subtitle="20000" items={itemsBlock4} titleBgColor="bg-blue-500" />
        <Block title="5MIN Intraday Performers" items={itemsBlock5} titleBgColor="bg-purple-500" />
      </div>
      
      <div className="flex flex-col items-start justify-between w-full h-auto gap-3 md:flex-row">
        <MainBlock title="Intraday Performs & Intraday Buzz" content="This is the bottom block content" />
        <SideBlock title="Saving" items={sideBlockItems} />
      </div>

      <div className="flex justify-center gap-2 mt-3 w-full h-auto space-x-1 overflow-x-hidden md:flex-row">
        <Table1 title="Table-1" items={table1} />
        <Table2 title="Table-2" items={table2} />
      </div>
      <div className="flex justify-center gap-2 w-full h-auto overflow-x-hidden md:flex-row">
        <Table3 title="Table-3" items={table3} />
        <Table4 title="Table-4" items={table4} />
      </div>
    </div>
  );
}

export default App;
