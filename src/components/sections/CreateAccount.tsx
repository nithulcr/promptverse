import React from 'react'
const CreateAccount: React.FC = () => {
  return (
   <section className="relative w-full bg-[#0E0E0E] text-white flex flex-col items-center justify-center  py-16 pt-[124px]">
    <img className='absolute left-8 top-[70px] -translate-y-1/2 w-[100px] h-[100px] object-contain' src="/icons/star.svg"/>
        <div className="text-center mb-12">
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            Promptverse has no limitation.
          </h1>
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            Get Started in a journey with promptverse.
          </h1>
         
          <div className="flex justify-center space-x-4">
           
            <button className="bg-[#FFFFFF] text-[#000000] font-poppins font-medium text-[16px] leading-[100%] tracking-[0] text-center px-[34px] py-[15px] rounded-[50px] hover:bg-gray-200 transition-all duration-300 mt-10">
              Create an Acoount
            </button>
          </div>
        </div>
      </section>
  )
}

export default CreateAccount