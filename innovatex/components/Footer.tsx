import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Form */}
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#FD532E]">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#FD532E]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FD532E] text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#FD532E]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FD532E] text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#FD532E]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FD532E] text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FD532E] text-white py-2 px-4 rounded-md hover:bg-[#E64A2E] transition-colors duration-300 flex items-center justify-center font-medium"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Footer Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#FD532E] mb-4">AI Guardian</h3>
            <p className="mb-4 text-sm md:text-base">Protecting your digital assets with cutting-edge AI technology.</p>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="hover:text-[#FD532E] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#FD532E] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-[#FD532E] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-[#FD532E] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2 text-[#FD532E]">Quick Links</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li><Link href="/" className="hover:text-[#FD532E] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FD532E] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#FD532E] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FD532E] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AI Guardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter