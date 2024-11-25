import React from 'react';

function Block({ title, subtitle, items, titleBgColor }) {
  const isBlock5 = title === '5MIN Intraday Performers';

  return (
    <div className="w-full h-24vh sm:h-28vh bg-gray-800 border-none m-1 mr-0 rounded-2xl p-3 shadow-lg flex flex-col justify-between items-center">
      <div className={`w-full h-7 rounded-xl flex justify-around items-center  ${titleBgColor}`}>
        <h1 className="text-md font-bold text-start text-black">{title}</h1>
        <span className="text-md font-bold text-start text-black">{subtitle}</span>
      </div>

      <div className="w-full">
        <div className="flex justify-around font-bold text-white pt-2">
          {!isBlock5 &&<span>SYMBOL</span>}
          {!isBlock5 && <span>%CHANGE</span>}
        </div>
      </div>

      <ul className="h-48 overflow-y-auto text-white list-none" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {items.map((item, index) => (
          <li key={index} className="flex justify-start p-2">
            <span className="mr-6 text-start min-w-24" >{item.name}</span>
            {isBlock5 ? (
              <div className="flex flex-row items-start justify-start">
                <div
                  className="rounded-lg bg-gradient-to-r from-black to-blue-600"
                  style={{
                    height: '10px',
                    width: `${item.price * 10}px`,
                    marginLeft: '5px',
                  }}
                />
              </div>
            ) : (
              <span className="ml-6 text-center">{item.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Block;
