import { MapPin, Phone, Mail, Clock, Instagram, Award, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import clinicHero from '@/assets/clinic-hero.jpg';

const Contact = () => {
  const services = [
    'General Dentistry',
    'Pediatric Dentistry',
    'Dental Implants',
    'Root Canal Treatment',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Dental Crowns & Bridges',
    'Preventive Care',
    'Emergency Dental Care',
    'Oral Surgery',
    'Orthodontics',
    'Gum Disease Treatment',
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'Indian Dental Association Member',
    'Delhi State Dental Council Registered',
    'Infection Control Compliance',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${clinicHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contact & About Us
          </h1>
          <p className="text-xl opacity-90">
            Get in touch with us for appointments or learn more about our comprehensive dental services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8 text-primary">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          Bhargava Dental Care<br />
                          706, Ward 8, Sector 29<br />
                          Noida, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Phone Numbers</h3>
                        <p className="text-muted-foreground">
                          +91 98180 32955<br />
                          +91 120 4374921
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          bhargavadentalcare@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Instagram className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Social Media</h3>
                        <p className="text-muted-foreground">
                          @bhargavadentalcare
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Clinic Timings</h3>
                        <div className="text-muted-foreground">
                          <p>Tuesday - Sunday: 10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM</p>
                          <p className="text-red-600 font-medium">Monday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="shadow-button">
                  <Link to="/appointment">Book an Appointment</Link>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                Find Us on Map
              </h3>
              <div className="bg-white rounded-lg overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.375!3d28.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzMwLjAiTiA3N8KwMjInMzAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhargava Dental Care Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
              About Bhargava Dental Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 35 years of dedicated service, we have been the trusted dental care provider 
              for families in Noida and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide compassionate, high-quality dental care using the latest technology 
                  while maintaining the personal touch that has defined our practice for decades.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Patient-centered care, clinical excellence, integrity, and continuous learning 
                  are the cornerstones of our practice and guide everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to staying at the forefront of dental technology and 
                  techniques to provide the best possible care for our patients.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">Our History</h3>
            <div className="bg-muted p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1985 by the late Dr. Balram Bhargava, Bhargava Dental Care began as a 
                small practice with a big vision: to provide exceptional dental care to the growing 
                community of Noida.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the years, we have evolved into a comprehensive multispecialty dental clinic, 
                offering a full range of dental services under one roof. Our commitment to excellence 
                and patient care has remained unchanged throughout our journey.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, led by Dr. Vikram Khanna and Dr. Geetima Khanna, we continue to honor 
                Dr. Balram Bhargava's legacy while embracing modern dental technology and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Our Complete Range of Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Certifications & Trust Badges
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;