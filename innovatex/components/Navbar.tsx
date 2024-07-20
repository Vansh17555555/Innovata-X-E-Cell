"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
interface NavItem {
  name: string;
  href: string;
}

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === item.href;
  
    return (
      <Link href={item.href} passHref>
        <Button
          onClick={onClick}
          className={`nav-link ${
            isActive ? 'nav-link-active' : 'nav-link-inactive'
          } nav-link-hover`}
        >
          {item.name}
        </Button>
      </Link>
    );
  };
  
  return (
    <nav className="bg-black text-white w-full border-b-0 h-20 text-5xl z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 justify-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                <Image src="/Screenshot_2024-07-20_at_2.29.08_PM_1_-removebg-preview.png" width={180} height={32} alt="logo" className='bg-gray-600 rounded-full'></Image>
              </span>
            </Link>
          </div>

          {!isMobileView && (
            <div className="flex flex-1 justify-center space-x-4 ">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          )}

          {!isMobileView && (
            <div className="flex items-center space-x-4">
              <Button variant="default" className='bg-white text-black'>Sign In</Button>
              <Button variant="destructive" className='bg-[#FD532E]'>Sign Up</Button>
            </div>
          )}

          {isMobileView && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-black ml-auto" // Add margin-left auto to push it to the right
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
        </div>
      </div>
      {isMobileView && isMobileMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              item={item}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
          <div className="flex flex-col space-y-2 mt-4">
            <Button className="bg-white text-black">Login</Button>
            <Button className="bg-primary text-white">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
