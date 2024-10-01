import React from 'react';

function Block({ title, items, titleBgColor }) {
  const isBlock5 = title === '5MIN Intraday Performers';

  return (
    <div className="w-[300px] h-[300px] bg-gray-700 border-none m-2 rounded-2xl p-5 shadow-lg flex flex-col justify-between items-center">
      <div className={`w-full h-8 rounded-xl ${titleBgColor}`}>
        <h1 className="text-xl font-bold text-center text-black">{title}</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-around font-bold text-white">
        {!isBlock5 &&<span>SYMBOL</span>}
          {!isBlock5 && <span>%CHANGE</span>}
        </div>
      </div>

      <ul className="h-48 overflow-y-auto text-white list-none scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex justify-start p-2">
            <span className="mr-8 text-start min-w-24">{item.name}</span>
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
              <span className="ml-8 text-center">{item.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Block;
