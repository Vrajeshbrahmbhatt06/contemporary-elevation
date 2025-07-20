
import { useState } from "react";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import { Instagram, Phone, Mail, ArrowDown } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0cc49de3-12c8-46d8-a599-0bcf698a369c.png" 
                alt="Contemporary Elevation Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-gray-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-600 transition-colors">Our Work</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
              <a href="https://instagram.com/contemporaryelevation" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-900 transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left hover:text-gray-600 transition-colors">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-gray-600 transition-colors">Our Work</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-gray-600 transition-colors">Contact</button>
                <a href="https://instagram.com/contemporaryelevation" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-600 transition-colors">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/0cc49de3-12c8-46d8-a599-0bcf698a369c.png" 
              alt="Contemporary Elevation Logo" 
              className="h-32 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            CONTEMPORARY
            <br />
            <span className="text-gray-600">ELEVATION</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Elevating your vision through exceptional craftsmanship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </button>
            <a 
              href="tel:437-XXX-XXX9"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Call 437.XXX.XXX9
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('services')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </section>

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Together</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your space? Get in touch for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:437-XXX-XXX9" className="flex items-center text-lg hover:text-gray-600 transition-colors group">
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    437.XXX.XXX9
                  </a>
                  <a href="mailto:info@contemporaryelevation.com" className="flex items-center text-lg hover:text-gray-600 transition-colors group">
                    <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    info@contemporaryelevation.com
                  </a>
                  <a href="https://instagram.com/contemporaryelevation" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-600 transition-colors group">
                    <Instagram className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    @contemporaryelevation
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
                <div className="text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/lovable-uploads/0cc49de3-12c8-46d8-a599-0bcf698a369c.png" 
            alt="Contemporary Elevation Logo" 
            className="h-16 w-auto mx-auto mb-6 filter invert"
          />
          <p className="text-gray-400 mb-4">
            © 2024 Contemporary Elevation. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Elevating your vision through exceptional craftsmanship
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
