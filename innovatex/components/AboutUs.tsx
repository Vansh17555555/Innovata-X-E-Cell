import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="flex flex-col rounded-xl mx-4 md:mx-20 mt-12 md:mt-36">
      <div className="text-2xl md:text-4xl font-medium text-center mb-6 md:mb-10 text-[#FD532E]">
        Our Idea
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center mt-10 md:mt-10 space-y-10 md:space-y-0 md:space-x-10">
        <div>
          <Image
            src="/1520143590794.jpeg"
            width={2000}
            height={200}
            alt="Our Team"
            className="border-black rounded-md"
          />
        </div>
        <div className="text-lg md:text-base lg:text-xl xl:text-2xl px-4 md:px-0 text-center md:text-left">
          SecureFlow is dedicated to safeguarding your financial transactions from credit card fraud with cutting-edge technology and expert support. Founded to address the growing threats in digital finance, our platform uses advanced algorithms to monitor and analyze your credit card activity in real-time, swiftly detecting any suspicious transactions. Our mission is to empower individuals and businesses with reliable tools and knowledge to prevent and address fraud effectively. Committed to integrity, innovation, and excellence, we provide a user-friendly experience with immediate alerts and personalized assistance.
        </div>
      </div>
    </div>
  )
}

export default AboutUs
