import React from 'react'

const SingleFaq = ({faqdata}) => {
  return (
    <div className="mx-auto mt-8 grid w-full divide-y divide-neutral-200">
      <div className="py-2 border-b-2 border-gray-400/[.2]">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium pr-[10px] text-base leading-relaxed text-body-color">
            <span>{faqdata.question}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 pr-[10px] text-sm font-medium leading-relaxed text-body-color ">{faqdata.answer}</p>
        </details>
      </div>
    </div>
  )
}

export default SingleFaq