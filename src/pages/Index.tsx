import { Link } from 'react-router-dom';
import { Heart, Users, Award, Clock, Baby, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import clinicHero from '@/assets/clinic-hero.jpg';
import drBalramBhargava from '@/assets/dr-balram-bhargava.jpg';
import drVikramKhanna from '@/assets/dr-vikram-khanna.jpg';
import drGeetmaKhanna from '@/assets/dr-geetima-khanna.jpg';

const Index = () => {
  const services = [
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children with gentle, child-friendly approach.',
      icon: Baby,
    },
    {
      title: 'Dental Implants',
      description: 'Advanced implant solutions for missing teeth with latest technology.',
      icon: Zap,
    },
    {
      title: 'Root Canal Treatment',
      description: 'Pain-free root canal procedures with modern techniques.',
      icon: Shield,
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic dental procedures.',
      icon: Sparkles,
    },
  ];

  const stats = [
    { number: '35+', label: 'Years of Service' },
    { number: '10,000+', label: 'Patients Treated' },
    { number: '2', label: 'Specialist Doctors' },
    { number: '100%', label: 'Patient Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${clinicHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Bhargava Dental Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
            Estd. 1985 – A multispecialty and multidisciplinary dental clinic 
            situated in the heart of Noida.
          </p>
          <Button asChild size="lg" className="shadow-button animate-scale-in">
            <Link to="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      {/* About Late Dr. Balram Bhargava */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                Founded by Late Dr. Balram Bhargava
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                A visionary dentist who established Bhargava Dental Care in 1985 
                with a mission to provide exceptional dental care to the community.
              </p>
              <p className="text-lg text-muted-foreground">
                His legacy of compassionate care and clinical excellence continues 
                to guide our practice today.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={drBalramBhargava}
                alt="Late Dr. Balram Bhargava"
                className="w-80 h-80 rounded-full object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dental Specialists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary">
            Our Dental Specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img
                  src={drVikramKhanna}
                  alt="Dr. Vikram Khanna"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-soft"
                />
                <h3 className="text-2xl font-heading font-semibold mb-2">Dr. Vikram Khanna</h3>
                <p className="text-primary font-medium mb-4">Implantologist</p>
                <p className="text-muted-foreground">
                  Specialist in dental implants with over 15 years of experience 
                  in advanced implantology and oral surgery.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img
                  src={drGeetmaKhanna}
                  alt="Dr. Geetima Khanna"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-soft"
                />
                <h3 className="text-2xl font-heading font-semibold mb-2">Dr. Geetima Khanna</h3>
                <p className="text-primary font-medium mb-4">Paedodontist</p>
                <p className="text-muted-foreground">
                  Specialized pediatric dentist dedicated to providing gentle, 
                  child-friendly dental care with a focus on prevention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Legacy in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
                About Bhargava Dental Care
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over three decades, Bhargava Dental Care has been at the forefront 
                of dental healthcare in Noida. We combine traditional values of 
                compassionate care with cutting-edge dental technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Heart className="text-primary" size={20} />
                  <span>Compassionate Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary" size={20} />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-primary" size={20} />
                  <span>Quality Treatment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary" size={20} />
                  <span>35+ Years Experience</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Certified</h3>
                  <p className="text-sm text-muted-foreground">ISO Certified Clinic</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Specialist Doctors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
