import React from 'react'
import faqData from './faqData'
import SingleFaq from './SingleFaq'

const Faq = () => {
  return (
    <div className="relative w-full bg-white dark:bg-gray-dark px-6 pt-10 pb-8 mt-8  ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-[1000px]  sm:px-10">
      <div className="mx-auto sm:px-6 ">
        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl text-center lg:text-xl xl:text-2xl">
            FAQs
          </h3>
        </div>
        {faqData.map((faq)=>(
          <SingleFaq  key={faq.id} faqdata={faq}/>
        ))}
        
      </div>
    </div>

  )
}

export default Faq