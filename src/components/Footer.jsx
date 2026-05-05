import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  // 1. Setup state for the live date and time
  const [currentDate, setCurrentDate] = useState(new Date());

  // 2. Setup an interval to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // 3. Format the date to match your desired output (e.g., "May 5, 2026, 3:47:00 PM")
  const formattedDateTime = currentDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Dynamically get just the current year for the copyright symbol
  const currentYear = currentDate.getFullYear();

  // Matches the blue-teal gradient background from the screenshot
  const footerStyle = {
    background: 'linear-gradient(90deg, #184c71 0%, #1e6b81 50%, #184c71 100%)',
    color: '#ffffff',
    fontSize: '0.85rem',
  };

  // INCREASED GAP: Changed mx-2 to mx-4 for wider spacing between links
  const Separator = () => <span className="mx-4 text-white-50">|</span>;

  return (
    <footer style={footerStyle} className="w-100 py-4 mt-auto shadow-lg">
      <div className="container-fluid text-center px-4">
        
        {/* LOGOS SECTION (Top Row) */}
        <div className="footer d-flex flex-wrap justify-content-center align-items-center">
          <img src="/f1.png" alt="data.gov.in" />
          <img src="/f2.png" alt="india.gov.in" />
          <img src="/f3.png" alt="PM INDIA" />
          <img src="/f4.png" alt="Make in India"  />
          <img src="/f5.png" alt="Digital India" />
          <img src="/f6.png" alt="my GOV" />
          <img src="/f7.png" alt="IYC" />
        </div>

        {/* LINKS SECTION 1 */}
        {/* Added gap-2 to provide a little extra vertical breathing room when wrapped on mobile */}
        <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 gap-2">
          <a href="#policy" className="text-white text-decoration-none hover-underline">Website Policy</a>
          <Separator />
          <a href="#mobile-privacy" className="text-white text-decoration-none">Mobile App Privacy Policy</a>
          <Separator />
          <a href="#terms" className="text-white text-decoration-none">Terms & Conditions</a>
          <Separator />
          <a href="#accessibility" className="text-white text-decoration-none">Accessibility Statement</a>
          <Separator />
          <a href="#web-manager" className="text-white text-decoration-none">Web Information Manager</a>
        </div>

        {/* LINKS SECTION 2 */}
        <div className="d-flex flex-wrap justify-content-center align-items-center mb-4 gap-2">
          <a href="#feedback" className="text-white text-decoration-none">Feedback</a>
          <Separator />
          <a href="#sitemap" className="text-white text-decoration-none">Sitemap</a>
          <Separator />
          <a href="#contact" className="text-white text-decoration-none">Contact Us</a>
          <Separator />
          <a href="#vacancies" className="text-white text-decoration-none">Vacancies</a>
          <Separator />
          <a href="#products" className="text-white text-decoration-none">Product & Services</a>
          <Separator />
          <a href="#pricing" className="text-white text-decoration-none">Pricing</a>
          <Separator />
          <a href="#cancellation" className="text-white text-decoration-none">Cancellation Policy</a>
          <Separator />
          <a href="#grievance" className="text-white text-decoration-none">Grievance Management Policy</a>
        </div>

        {/* INFORMATION & COPYRIGHT SECTION */}
        <div className="mb-2">
          Last Updated: 30-01-2024 12:16:17
        </div>
        <div className="mb-3">
          Website Developed & Maintained by Office of the Registrar General & Census Commissioner, India
        </div>
        <div>
          {/* Automatically inserts the current year and the live ticking clock */}
          © {currentYear} - The Registrar General & Census Commissioner, India - 🕒 {formattedDateTime}
        </div>

      </div>
    </footer>
  );
};

export default Footer;