import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Bhargava Dental Care
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Estd. 1985 – A multispecialty and multidisciplinary dental clinic 
              situated in the heart of Noida, NCR.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Bhargava Dental Care, 706, Ward 8, Sector 29, 
                  Noida, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 98180 32955</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 120 4374921</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>bhargavadentalcare@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <span>@bhargavadentalcare</span>
              </div>
            </div>
          </div>

          {/* Clinic Timings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Clinic Timings</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div>
                  <div>Tue–Sun: 10am–2pm, 5pm–9pm</div>
                  <div className="text-red-200">Monday: Closed</div>
                </div>
              </div>
            </div>
            <Button 
              asChild 
              variant="secondary" 
              className="mt-4 bg-white text-primary hover:bg-gray-100"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Find Us</h4>
          <div className="bg-white rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.375!3d28.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzMwLjAiTiA3N8KwMjInMzAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhargava Dental Care Location"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Bhargava Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;