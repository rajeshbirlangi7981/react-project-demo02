import React from 'react';

function BottomBlock({ title }) {
  return (
    <div className="w-[74vw] bg-gray-800 rounded-2xl px-auto p-3 ml-1.5 shadow-lg flex flex-col border-none justify-start items-center">
      <div className="px-4 py-2 mb-5 text-xl font-bold text-black bg-pink-300 rounded-full">
        <p className="text-center">{title}</p>
      </div>

      <div className="flex w-[100%] h-full space-x-1">
        <div className="flex flex-col space-y-1">
          <div className="w-[140px] h-[125px] flex flex-col items-between justify-between text-white bg-blue-500 shadow-md">
            <div className='pl-1 pt-1'>MINDACORP</div>
            <div className='pl-1 pb-1'>19.56</div>
          </div>

          <div className="w-[140px] h-[95px] flex flex-col items-between justify-between text-white bg-blue-500 opacity-80 shadow-md">
            <div className='pl-1 pt-1'>PCBL</div>
            <div className='pl-1 pb-1'>12.43</div>
          </div>

          <div className="w-[140px] h-[80px] flex flex-col items-between justify-between text-white bg-blue-500 opacity-70 shadow-md">
            <div className='pl-1 pt-1'>PCBL</div>
            <div className='pl-1 pb-1'>12.43</div>
          </div>

          <div className="w-[140px] h-[69px] flex flex-col items-between justify-between text-white bg-blue-500 opacity-60 shadow-md">
            <div className='pl-1 pt-1'>PCBL</div>
            <div className='pl-1 pb-1'>12.43</div>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-[110px] h-[90px] flex flex-col  items-between justify-between bg-green-300 text-white shadow-md">
            <div className='pl-1 pt-1'>DOMS</div>
            <div className='pl-1 pb-1'>8.72</div>
          </div>

          <div className="w-[110px] h-[80px] flex flex-col items-between justify-between bg-green-300 opacity-90 text-white shadow-md">
            <div className='pl-1 pt-1'>ELEGIEQUIP</div>
            <div className='pl-1 pb-1'>7.34</div>
          </div>

          <div className="w-[110px] h-[75px] flex flex-col items-between justify-between bg-green-300 opacity-80 text-white shadow-md">
            <div className='pl-1 pt-1'>ALLCARGO</div>
            <div className='pl-1 pb-1'>6.93</div>
          </div>

          <div className="w-[110px] h-[70px] flex flex-col items-between justify-between bg-green-300 opacity-70 text-white shadow-md">        
            <div className='pl-1 pt-1'>SPARC</div>
            <div className='pl-1 pb-1'>6.56</div>
          </div>

          <div className="w-[110px] h-[50px] flex flex-col items-between justify-between bg-green-300 opacity-60 text-white shadow-md">
            <div className='pl-1 pt-1'>FORTIS</div>
            <div className='pl-1 pb-1'>5.73</div>
          </div>
        </div>

        <div className="flex flex-col space-y-1">  
          <div className="flex space-x-1 ">
            <div className="w-[90px] h-[120px] flex flex-col items-between justify-between bg-sky-400 text-white shadow-md">
              <div className='pl-1 pt-1'>CRAFTS</div>
              <div className='pl-1 pb-1'>5.23</div>
            </div>
            <div className="w-[90px] h-[120px]  flex flex-col items-between justify-between bg-sky-400 opacity-90 text-white shadow-md">
              <div className='pl-1 pt-1'>APARIN..</div>
              <div className='pl-1 pb-1'>5.17</div>
            </div>
            <div className="w-[90px] h-[120px] flex flex-col items-between justify-between bg-sky-400 opacity-80 text-white shadow-md">
              <div className='pl-1 pt-1'>INDIGO</div>
              <div className='pl-1 pb-1'>5.17</div>
            </div>
            <div className="w-[90px] h-[120px] flex flex-col items-between justify-between bg-sky-400 opacity-70 text-white shadow-md">
              <div className='pl-1 pt-1'>SYRMA</div>
              <div className='pl-1 pb-1'>5.16</div>
            </div>
            <div className="w-[90px] h-[120px] flex flex-col items-between justify-between bg-sky-400 opacity-60 text-white shadow-md">
              <div className='pl-1 pt-1'>BAJAJ-_</div>
              <div className='pl-1 pb-1'>5.12</div>
            </div>
            <div className="w-[90px] h-[120px] flex flex-col items-between justify-between bg-sky-400 opacity-50 text-white shadow-md">
              <div className='pl-1 pt-1'>RADICO</div>
              <div className='pl-1 pb-1'>4.99</div>
            </div> 
          </div>
          
        <div className="flex flex-row space-x-1 w-[200px]">
          <div className="flex flex-col space-y-1 w-[200px]">
            <div className="w-[100px] h-[48px] flex items-between justify-between bg-teal-400 text-white shadow-md">
              <div className='text-sm pl-1'>DEVYANI</div>
              <div className='text-sm pr-1'>4.53</div>
            </div>
            <div className="w-[100px] h-[48px] flex items-between justify-between bg-teal-400 opacity-90 text-white shadow-md">
            <div></div>
              <div className='text-sm pr-1'>4.53</div>
            </div>
            <div className="w-[100px] h-[48px] flex items-between justify-between bg-teal-400 opacity-80 text-white shadow-md">
              <div className='text-sm pl-1'>TATATECK</div>
              <div className='text-sm pr-1'>4.42</div>
            </div>
            <div className="w-[100px] h-[48px] flex items-between justify-between bg-teal-400 opacity-70 text-white shadow-md">
              <div className='text-sm pl-1'>SUNTECK</div>
              <div className='text-sm pr-1'>4.40</div>
            </div>
            <div className="w-[100px] h-[49px] flex items-between justify-between bg-teal-400 opacity-60 text-white shadow-md">
              <div className='text-sm pl-1'>GPIL</div>
              <div className='text-sm pr-1'>4.33</div>
            </div>
          </div>
        <div>
        <div className="flex flex-col space-y-1">  
          <div className="flex space-x-1 ">
            <div className="w-[90px] h-[90px] flex flex-col items-between justify-between bg-cyan-400 text-white shadow-md">
              <div className='pl-1 pt-1'>PRSMJ..</div>
              <div className='pl-1 pb-1'>4.31</div>
            </div>
            <div className="w-[90px] h-[90px] flex flex-col items-between justify-between bg-cyan-400 opacity-90 text-white shadow-md">
              <div className='pl-1 pt-1'>FSL</div>
              <div className='pl-1 pb-1'>3.99</div>
            </div>
            <div className="w-[90px] h-[90px] flex flex-col items-between justify-between bg-cyan-400 opacity-80 text-white shadow-md">
              <div className='pl-1 pt-1'>KPIL</div>
              <div className='pl-1 pb-1'>3.84</div>
            </div>
            <div className="w-[90px] h-[90px] flex flex-col items-between justify-between bg-cyan-400 opacity-70 text-white shadow-md">
              <div className='pl-1 pt-1'>DIXION</div>
              <div className='pl-1 pb-1'>3.75</div>
            </div>
            <div className="w-[80px] h-[90px] flex flex-col items-between justify-between bg-cyan-400 opacity-60 text-white shadow-md">
              <div className='pl-1 pt-1'>EASE...</div>
              <div className='pl-1 pb-1'>3.73</div>
            </div>
          </div>
        
        <div className="flex flex-row space-x-1 w-[200px]">
        <div className="flex flex-col space-y-1 w-[200px]">
          <div className="w-[150px] h-[38px] flex items-between justify-between bg-indigo-400 text-white shadow-md">
            <div className='pl-1 pt-1'>CONCORDBIO</div>
            <div className='pr-1 pt-1'>3.60</div>
          </div>
          <div className="w-[150px] h-[38px] flex items-between justify-between bg-indigo-400 opacity-90 text-white shadow-md">
            <div className='pl-1 pt-1'>HFCL</div>
            <div className='pr-1 pt-1'>3.56</div>
          </div>
          <div className="w-[150px] h-[38px] flex items-between justify-between bg-indigo-400 opacity-80 text-white shadow-md">
            <div className='pl-1 pt-1'>CHOLAHLD</div>
            <div className='pr-1 pt-1'>3.44</div>
          </div>
          <div className="w-[150px] h-[37px] flex items-between justify-between bg-indigo-400 opacity-70 text-white shadow-md">
            <div className='pl-1 pt-1'>RAINBOW</div>
            <div className='pr-1 pt-1'>3.39</div>
          </div>
          
        </div>
        <div>
        <div>
        <div className="flex flex-col space-y-1">  
        <div className="flex space-x-1 ">
          <div className="w-[74px] h-[80px] flex flex-col items-between justify-between bg-emerald-400 text-white shadow-md">
            <div className='pt-1 pl-1'>SUZI..</div>
            <div className='pl-1 pb-1'>3.35</div>
          </div>
          <div className="w-[72px] h-[80px] flex flex-col items-between justify-between bg-emerald-400 opacity-90 text-white shadow-md">
            <div className='pt-1 pl-1'>POLY...</div>
            <div className='pl-1 pb-1'>3.25</div>
          </div>
          <div className="w-[72px] h-[80px] flex flex-col items-between justify-between bg-emerald-400 opacity-80 text-white shadow-md">
            <div className='pt-1 pl-1'>JIND..</div>
            <div className='pl-1 pb-1'>3.20</div>
          </div>
          <div className="w-[72px] h-[80px] flex flex-col items-between justify-between bg-emerald-400 opacity-70 text-white shadow-md">
            <div className='pt-1 pl-1'>MCX</div>
            <div className='pl-1 pb-1'>3.15</div>
          </div>
          
          {/* <div className="w-[100px] h-[120px] flex items-center justify-center bg-green-300 text-white shadow-md">
            Block 15
          </div> */}
        </div>
        
        <div className="flex flex-row space-x-1 w-[200px]">
        <div className="flex flex-col space-y-1 w-[200px]">
          <div className="w-[97px] h-[37px] flex items-between justify-between bg-rose-400 text-white shadow-md">
            <div className='pl-1 pt-1'>RBA</div>
            <div className='pr-1 pt-1'>3.14</div>
          </div>
          <div className="w-[97px] h-[38px] flex items-between justify-between bg-rose-400 opacity-80 text-white shadow-md">
            <div className='pl-1 pt-1'>RBA</div>
            <div className='pl-1 pt-1'>3.13</div>
          </div>
          
        </div>
        <div className="flex flex-col space-y-1 w-[200px]">
          <div className="w-[97px] h-[23px] flex items-between justify-between bg-amber-300 text-white shadow-md">
            <div className='pl-1'>MASTEX</div>
          </div>
          <div className="w-[97px] h-[24px] flex items-between justify-between bg-amber-300 opacity-70 text-white shadow-md">
            <div className='text-sm pl-1 '>BORDIERNEW</div>
          </div>
          <div className="w-[97px] h-[24px] flex items-between justify-between bg-amber-300 opacity-60 text-white shadow-md">
            <div className='pl-1'>KATMES</div>
          </div>
          
        </div>
        <div className="flex flex-col space-y-1 w-[200px]">
          <div className="w-[99px] h-[79px] flex flex-col items-between justify-between bg-red-300 text-white shadow-md">
            <div className='pl-1 pt-1'>BSE</div>
            <div className=' pl-1 pb-1'>2.64</div>
          </div>
          
        </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        </div>
        </div>
        
        </div>
        
        <div className="flex flex-col space-y-1 w-[100px]">
            <div className="w-[100px] h-[40px] flex items-between justify-between bg-red-400 text-white shadow-md">
              <div className='pl-1 pt-1'>CESC</div>
              <div className='pr-1 pt-1'>4.31</div>
            </div>
            <div className="w-[100px] h-[40px] flex items-between justify-between bg-red-400 opacity=50 text-white shadow-md">
              <div className='pl-1 pt-1'>HEMS</div>
              <div className='pr-1 pt-1'>0.99</div>
            </div>
            <div className="w-[100px] h-[60px] flex flex-col items-between justify-between bg-red-400 opacity=40 text-white shadow-md">
              <div className='pl-1 pt-1'>FNCL</div>
              <div className='pl-1 pb-1'>-0.88</div>
            </div>
            <div className="w-[100px] h-[60px] flex-col items-between justify-between bg-red-400 opacity=30 text-white shadow-md">
              <div></div>
              <div  className='pl-1 pt-1'>-0.88</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="flex flex-col space-y-1">
                <div className="w-[60px] h-[50px] flex-col items-between justify-between bg-red-500 text-white shadow-md">
                  <div className='pl-1'>PNCIN..</div>
                  <div className='pl-1'>12.43</div>
                </div>
                <div className="w-[60px] h-[35px] flex items-between justify-start bg-red-500 opacity-90 text-white shadow-md">
                  <div className='pl-1'>CESC</div>
                </div>
                <div className="w-[60px] h-[35px] flex-col items-between justify-start bg-red-500 opcity-70 text-white shadow-md">
                  <div className='pl-1'>GAEL</div>
                </div>
                <div className="w-[60px] h-[33px] flex-col items-start justify-start bg-red-500 opcity-50 text-white shadow-md">
                  <div className='pl-1'>LICHS...</div>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="w-[35px] h-[80px] flex-col items-start justify-start bg-red-700 text-white shadow-md">
                  <div className='pl-1 pt-1'>SGL</div>
                  <div className='pl-1 pt-3'>12</div>
                </div>
                <div className="w-[35px] h-[81px] flex-col items-between justify-between bg-red-700 opcity-70 text-white shadow-md">
                  <div className='text-sm pt-1'>HFCL</div>
                </div>
              </div>

            </div> 
          </div>
      </div>
    </div>
  );
}

export default BottomBlock;
