import React from 'react'

const AboutMoviesSkeleton = () => {
  return (
    <section className="center flex-col lg:gap-14 gap-10 justify-evenly md:flex-row  animate-pulse">
    <div className="flex-shrink-0">
      <div
        className="h-[450px] w-[320px] md:h-[500px] rounded-md bg-gray-200 text-white dark:bg-gray-700"
      ></div>
    </div>
    <div className="details-right">
      <h2 className="bg-gray-200 h-8 w-[80%]  rounded-lg dark:bg-gray-700"></h2>
      <p className=" mb-4 bg-gray-200 h-6 my-4 w-36 rounded-lg dark:bg-gray-700"></p>
      {/* for category tag */}
      <div className="category mb-6">
        {[1,2,3].map((category, i) => (
          <span
            key={i}
            className=" bg-gray-200 h-6 max-lg  dark:bg-gray-700  m-1 py-[0px]  text-center  px-8 rounded-md"
          >
          </span>
        ))}
      </div>
      {/* rating */}
      <div className="rating-trailer center gap-10 mb-8  justify-start">
        <span className=' bg-gray-200 md:p-10 p-6 max-lg rounded-full dark:bg-gray-700'></span>
        <div className=" bg-gray-200 md:p-10 md:px-24 p-6 px-16 rounded-lg dark:bg-gray-700"></div>
      </div>
      {/* overview */}
      <h2 className=" mb-2 bg-gray-200 h-6 w-32 rounded-lg dark:bg-gray-700"></h2>
      <p className="p-2 mb-3 bg-gray-200 md:w-[550px] sm:w-[450px] w-[350px] lg:w-[650px] rounded-lg dark:bg-gray-700"></p>
      <p className="w-[70%]   p-2 mb-6 bg-gray-200  rounded-lg dark:bg-gray-700"></p>
      {/* Status runtime release date */}
      <div className="">
        {[1,2,3].map((item, i) => (
          <div key={i} className="flex m-6 ml-0 flex-nowrap">
            <h4 className="bg-gray-200 h-6 w-40 rounded-lg dark:bg-gray-700"></h4>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default AboutMoviesSkeleton




// <div className="">
//               <h3
//                 className="h-4 bg-gray-200 text-white rounded-full dark:bg-gray-700"
//                 style={{"width":"40%"}}
//               >meganathan</h3>

//               <ul className="mt-5 space-y-3">
//                 <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                 <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                 <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                 <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//               </ul>
//             </div>