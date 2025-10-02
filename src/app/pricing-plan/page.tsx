'use client';
<<<<<<< HEAD
import Link from 'next/link';
import Footer from "../components/Footer";
import Services from "../components/MovingServices";
import { useEffect, useRef } from "react";
import { color } from 'framer-motion';

/* ✅ Optimized Cursor Following Dot Component */
function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    let animationFrameId: number;
    let visible = false;

    const updatePosition = (x: number, y: number) => {
      if (!dotRef.current) return;
      dotRef.current.style.left = `${x - 8}px`;
      dotRef.current.style.top = `${y - 8}px`;
      if (!visible) {
        dotRef.current.style.opacity = '1';
        visible = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
        visible = false;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
=======
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";
import Services from "../components/MovingServices";
import { useState, useEffect } from "react";

/* ✅ Cursor Following Dot Component */
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
      document.removeEventListener("mouseleave", handleMouseLeave);
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
    };
  }, []);

  return (
    <div
<<<<<<< HEAD
      ref={dotRef}
      className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu opacity-0"
      style={{
        transition: "left 0.12s ease-out, top 0.12s ease-out",
=======
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
      }}
    />
  );
}

export default function PricingPlan() {
<<<<<<< HEAD
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

=======
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
  return (
    <div className="!w-full bg-black text-white pb-10">
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div
        className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
<<<<<<< HEAD
        style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}
      >
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <h1 className="text-5xl xl:text-7xl">
            Our <span className="text-red-500">Pricing</span>
          </h1>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ul className="flex items-center space-x-2 text-lg font-semibold text-white">
              <li>
                <Link className="hover:underline" href="/">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">›</span>
                <span className="text-red-500">Pricing Plan</span>
=======
      >
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <span className="text-5xl text-center xl:text-7xl">
            Our <span className="text-default">Pricing</span>
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">Pricing plan</span>
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
              </li>
            </ul>
          </nav>
        </div>
      </div>

<<<<<<< HEAD
      <Services />
=======
      {/* ✅ Services Section */}
      <div className="bg-black">
        <Services />
      </div>
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1

      {/* ✅ Pricing Cards Section */}
      <div className="bg-black">
        <div className="container mx-auto py-20">
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Top Row - 2 cards */}
            <PricingCard
              title="Bronze League"
              price="$449.00"
               features={[
    'Logo Design',
    '5 Logo Concepts',
    '3 Dedicated Designers',
    'Stationary + Business Card',
    '5 Pages Static Website',
    'Team of Designers & Developers',
    '3 Banner Designs',
    '100% Satisfaction Guarantee',
    'Facebook Page Design',
    'Value Added Services',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee',
    'NOTE: Add CMS for Additional $150',
    'Add Mobile Responsive for Additional $99'
  ]}
              description="Our popular Plan for small teams."
            />

            <PricingCard
              title="Silver League"
              price="$999.99"
              features={[
    'Logo Design',
    '10 Logo Concepts',
    '5 Dedicated Designers',
    'Icon Design',
    'Stationary',
    'Business Card, Letterhead, Envelope, Fax Template',
    'MS Word Letterhead',
    'Website',
    '10 Unique Pages Website',
    'Content Management System (CMS)',
    'Mobile Responsive',
    'Team of Expert Designers & Developers',
    '8 Stock images',
    '5 Banner Designs',
    'Jquery Sliders',
    'Free Google Friendly Sitemap',
    'Complete W3C Certified HTML',
    'Complete Deployment',
    'Facebook Page Design',
    'Twitter Page Design',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Satisfaction Guarantee',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee'
  ]}
              description="Advanced features and reporting"
            />

            {/* Bottom Row - 1 card centered */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-full md:w-2/3">
                <PricingCard
                  title="Gold League"
                  price="$1399.99"
                   features={[
    'Logo Design',
    'Unlimited Logo Concepts',
    '8 Dedicated Designers',
    'Icon Design',
    'Stationary',
    '2 Free Custom Stationary Designs',
    'MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)',
    'Company Profile Design (4 pages)',
    'Trifold Brochure Design',
    'Presentation Folder Design',
    'Website',
    'Up to 15 Unique Pages Website',
    'Conceptual and Dynamic Liquid Website',
    'Content Management System (CMS)',
    'Team of Expert Designers & Developers',
    'Mobile Responsive',
    'Online Reservation/Appointment Tool (Optional)',
    'Online Payment Integration (Optional)',
    'Custom Forms',
    'Lead Capturing Forms (Optional)',
    'Striking Hover Effects',
    'Social Media Integration',
    'Search Engine Submission',
    '15 Stock Images',
    '8 Unique Banner Designs',
    'Jquery Sliders',
    'Free Google Friendly Sitemap',
    'Complete W3C Certified HTML',
    'Facebook Page Design',
    'Twitter Page Design',
    'YouTube Page Design',
    'Google+ Page Design',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Satisfaction Guarantee',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee'
  ]}
                  description="Gold for idea to existence and premium quality"
                />
              </div>
=======
          <div className="grid md:grid-cols-2 gap-8">

            {/* Bronze League Card */}
            <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Bronze League</h3>
                  <p className="text-gray-400">Our popular Plan for small teams.</p>
                </div>
                <div className="text-right">
                  <span className="text-default text-5xl font-medium">$449.00</span>
                  <span className="text-gray-400 text-lg">/per month</span>
                </div>
              </div>
              {/* Features List with Scrollbar */}
              <div className="relative overflow-y-auto h-72 mb-12 pr-2 scrollbar-thin scrollbar-thumb-[#BFF747] scrollbar-track-[#222]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {[
                    'Logo Design','5 Logo Concepts','3 Dedicated Designers','Icon Design','Stationary',
                    'Business Card, Letterhead, Envelope','MS Word Letterhead','Website','5 Pages Static Website',
                    'Team of Expert Designers & Developers','5 Stock Photos + 3 Banner Designs',
                    'Complete W3C Certified HTML','Complete Deployment','Social Media','Facebook Page Design',
                    'Value Added Services','All Final File Formats','Dedicated Account Manager',
                    '100% Ownership Rights','100% Satisfaction Guarantee','100% Unique Design Guarantee',
                    '100% Money Back Guarantee','NOTE: Add CMS for Additional $150',
                    'Add Mobile Responsive for Additional $99'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-check w-3 h-3 text-default">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Silver League Card */}
            <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Silver League</h3>
                  <p className="text-gray-400">Advanced features and reporting</p>
                </div>
                <div className="text-right">
                  <span className="text-default text-5xl font-medium">$999.99</span>
                  <span className="text-gray-400 text-lg">/per month</span>
                </div>
              </div>
              {/* Features List with Scrollbar */}
              <div className="relative overflow-y-auto h-72 mb-12 pr-2 scrollbar-thin scrollbar-thumb-[#BFF747] scrollbar-track-[#222]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {[
                    'Logo Design','10 Logo Concepts','5 Dedicated Designers','Icon Design','Stationary',
                    'Business Card, Letterhead, Envelope, Fax Template','MS Word Letterhead','Website',
                    '10 Unique Pages Website','Content Management System (CMS)','Mobile Responsive',
                    'Team of Expert Designers & Developers','8 Stock images','5 Banner Designs','Jquery Sliders',
                    'Free Google Friendly Sitemap','Complete W3C Certified HTML','Complete Deployment',
                    'Facebook Page Design','Twitter Page Design','All Final File Formats',
                    'Dedicated Account Manager','100% Ownership Rights','100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee','100% Money Back Guarantee'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-check w-3 h-3 text-default">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Gold League Card */}
            <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12">
              <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl text-white mb-2">Gold League</h3>
                  <p className="text-gray-400">Gold for idea to existence and premium quality</p>
                </div>
                <div className="text-right">
                  <span className="text-default text-5xl font-medium">$1399.99</span>
                  <span className="text-gray-400 text-lg">/per month</span>
                </div>
              </div>
              {/* Features List with Scrollbar */}
              <div className="relative overflow-y-auto h-72 mb-12 pr-2 scrollbar-thin scrollbar-thumb-[#BFF747] scrollbar-track-[#222]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
                  {[
                    'Logo Design','Unlimited Logo Concepts','8 Dedicated Designers','Icon Design','Stationary',
                    '2 Free Custom Stationary Designs','MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)',
                    'Company Profile Design (4 pages)','Trifold Brochure Design','Presentation Folder Design','Website',
                    'Up to 15 Unique Pages Website','Conceptual and Dynamic Liquid Website',
                    'Content Management System (CMS)','Team of Expert Designers & Developers','Mobile Responsive',
                    'Online Reservation/Appointment Tool (Optional)','Online Payment Integration (Optional)',
                    'Custom Forms','Lead Capturing Forms (Optional)','Striking Hover Effects',
                    'Social Media Integration','Search Engine Submission','15 Stock Images','8 Unique Banner Designs',
                    'Jquery Sliders','Free Google Friendly Sitemap','Complete W3C Certified HTML',
                    'Complete Deployment','Facebook Page Design','Twitter Page Design','YouTube Page Design',
                    'Google+ Page Design','All Final File Formats','Dedicated Account Manager',
                    '100% Ownership Rights','100% Satisfaction Guarantee','100% Unique Design Guarantee',
                    '100% Money Back Guarantee'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-default flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-check w-3 h-3 text-default">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-colors">
                Get Started
              </button>
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
            </div>

          </div>
        </div>
      </div>
<<<<<<< HEAD
      
=======

      {/* Background Glow */}
      <svg
        className="absolute inset-0 h-full w-full -z-10"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#ef4444" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="120" />
          </filter>
        </defs>
        <g filter="url(#softBlur)">
          <circle cx="320" cy="260" r="280" fill="url(#redGlow)">
            <animate attributeName="cx" values="280; 720; 320" dur="24s" repeatCount="indefinite" />
            <animate attributeName="cy" values="220; 380; 260" dur="24s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
      <Footer />
    </div>
  );
}
<<<<<<< HEAD

/* ✅ Pricing Card Component */
function PricingCard({
  title,
  price,
  features,
  description
}: {
  title: string;
  price: string;
  features: string[];
  description: string;
}) {
  return (
    <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12 transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
        <div>
          <h3 className="text-3xl text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="text-right">
          <span className="text-red-500 text-5xl font-medium">{price}</span>
          <span className="text-gray-400 text-lg">/per month</span>
        </div>
      </div>

      {/* Features List with Scrollbar (Now 2 Columns) */}
      <div className="relative overflow-y-auto h-72 mb-12 pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-[#222]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
{features.map((feature, idx) => (
  <div
    key={idx}
    className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
  >
    {/* 🔴 Circle with Forced Red Border */}
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ border: "2px solid red" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="red"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <span className="text-white transition-all duration-300">{feature}</span>
  </div>
))}




        </div>
      </div>
<button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-all duration-300 transform hover:-translate-y-1"> Get Started </button>

    </div>
  );
}
=======
>>>>>>> 202608e82b0a44b35e1f164faca2153969de5cf1
