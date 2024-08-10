'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ tabItems, activeTab, onTabChange }) => {
    return (
      <div className="max-w-md bg-black p-1 rounded-xl flex justify-between items-start gap-x-2 font-bold text-white ">
        {tabItems.map((item) => (
          <button
            key={item.title}
            className={`outline-none w-full p-2 hover:bg-gray-700 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-black${
              activeTab === item.title ? "ring-2 bg-white text-black" : ""
            }`}
            onClick={() => onTabChange(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
    );
  };
// const TabsComponent = ({ items }) => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const firstBtnRef = useRef();

//   useEffect(() => {
//     firstBtnRef.current.focus();
//   }, []);

//   return (
//     <div className='bg-white flex items-start '>
//       <div className=' flex flex-col gap-y-2 w-full justify-start'>
//         <div className='max-w-md bg-black p-1 rounded-xl flex justify-between items-start gap-x-2 font-bold text-white '>
//           {items.map((item, index) => (
//             <button
//               ref={index === 0 ? firstBtnRef : null}
//               key={index}
//               onClick={() => setSelectedTab(index)}
//               className={`outline-none w-full p-2 hover:bg-gray-700 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-black ${
//                 selectedTab === index ? 'ring-2 bg-white text-black' : ''
//               } `}
//             >
//               {item.title}
//             </button>
//           ))}
//         </div>
    

//         <div className='bg-white p-2 rounded-xl'>
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={`${selectedTab === index ? '' : 'hidden'}`}
//             >
//               {item.content}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };




export default TabsComponent;