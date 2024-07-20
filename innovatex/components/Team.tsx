import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Shivam Singh Rajput',
    role: 'ML and Backend Engineer',
    photo: '/WhatsApp Image 2024-07-20 at 3.25.28 PM.jpeg',
    description: 'I am aspiring AI engineer. I have role to train model and do backend development in the team.',
    objectPosition: 'center center'
  },
  {
    name: 'Shivansh Mahajan',
    role: 'ML Engineer',
    photo: '/WhatsApp Image 2024-07-20 at 3.30.30 PM.jpeg',
    description: 'Shivansh is an aspiring data scientist, specializing in data manipulation and model training.',
    objectPosition: 'center center'
  },
  {
    name: 'Shivansh Shukla',
    role: 'Frontend and ML enthusiast',
    photo: '/WhatsApp Image 2024-07-20 at 3.47.11 PM.jpeg',
    description: 'I am Shivansh Shukla. I aim to became an AI engineer. I worked on ML and frontend.',
    objectPosition: 'center 30%'
  },
  {
    name: 'Vansh Verma',
    role: 'Full Stack Developer',
    photo: '/WhatsApp Image 2024-07-20 at 3.47.47 PM.jpeg',
    description: 'I am Full stack Developer. I have a role to develop frontend as well as develop backend of website for the team',
    objectPosition: 'center 20%'
  }
]

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#FD532E]">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-800">
            <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
              <Image
                src={member.photo}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                objectPosition={member.objectPosition}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-[#FD532E] mb-3">{member.role}</p>
            <p className="text-sm text-gray-300 text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team