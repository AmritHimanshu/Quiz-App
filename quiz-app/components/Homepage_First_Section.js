import React from 'react'

function Homepage_FIrst_Section() {
  return (
    <div className='h-[60vh] relative'>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/animated-bg.mp4" type="video/mp4" />
      </video>

      <div className="p-3 md:p-5 absolute top-0 w-full h-full flex items-center justify-center text-white bg-neutral-900/40">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-10 lg:space-y-0 w-full lg:w-[60%]">
          <div className="w-full lg:w-[50%]">
            <div className="w-full text-[30px] md:text-[50px] xl:text-[60px] 2xl:text-[80px] font-bold">
              Pure <span className="text-customGreen">Organic</span> Products
            </div>
          </div>

          <div className="w-full lg:w-[45%] text-base md:text-lg lg:text-base 2xl:text-xl">
            we are dedicated to deliver fresh and natural mangoes which are
            grown chemical residue free to your door step. We provide all
            variety of mangoes to our customers.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage_FIrst_Section
