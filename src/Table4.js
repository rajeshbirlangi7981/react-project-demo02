import React from 'react';

function Table4({ title, items }) {
  return (
    <div className="w-[50vw] h-[50vh] m-3 mx-1 bg-gray-800 rounded-xl p-5 shadow-md flex flex-col justify-start items-center">
      {/* <div className="w-full px-4 py-2 mb-5 text-xl font-bold text-center bg-gray-300 rounded-full">
        {title}
      </div> */}

      <div className="w-full mb-2">
        <div className="flex justify-around mb-1 font-bold text-white">
          <span className="flex-1 text-left ml-2 text-red-400">Symbol</span>
          <span className="flex-1 text-left -ml-3 text-red-400">Change</span>
        </div>
      </div>
      <div className="w-full flex-1 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <ul className="text-white list-none">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between px-2 py-2 border-none">
              <span className="flex-1 text-left">{item.symbol}</span>
              <span className="flex-1 text-left">{item.change}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Table4;