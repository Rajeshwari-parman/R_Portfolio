import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rajeshwari-parman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajeshwari-paraman/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rajeshwari@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-300 hover:scale-105 transition-transform duration-200"
              >
                Rajeshwari
              </button>
              <p className="text-gray-400 leading-relaxed">
                Passionate software developer dedicated to creating exceptional digital experiences
                through innovative solutions and clean, efficient code.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>Mysuru, KA</p>
                <p>rajeshwari.pb.308gmail.com</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
              <span>by Rajeshwari B</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} Rajeshwari B. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
