import { Award, Users, Heart, Clock, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import clinicHero from '@/assets/clinic-hero.jpg';

const About = () => {
  const services = [
    'Pediatric Dentistry',
    'Dental Implants',
    'Root Canal Treatment',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Oral Surgery',
    'Teeth Whitening',
    'Dental Cleaning',
    'Crown & Bridges',
    'Dentures'
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'NABH Accredited',
    'Infection Control Protocol',
    'Digital X-Ray Systems',
    'Sterilization Standards'
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-up">
            About Bhargava Dental Care
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-up">
            35+ Years of Excellence in Dental Healthcare
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1985 by Late Dr. Balram Bhargava, Bhargava Dental Care 
                has been serving the Noida community for over three decades. What 
                started as a vision to provide compassionate and quality dental care 
                has grown into a leading multispecialty dental clinic.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, under the expert guidance of Dr. Vikram Khanna and Dr. Geetima Khanna, 
                we continue to uphold the legacy of excellence while incorporating the 
                latest advancements in dental technology and treatment methods.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">35+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Patients Treated</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Compassionate Care</h3>
                  <p className="text-sm text-muted-foreground">Patient comfort first</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quality Excellence</h3>
                  <p className="text-sm text-muted-foreground">ISO certified clinic</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Specialist doctors</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Strict protocols</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary flex items-center">
                  <Heart className="mr-3" size={28} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide comprehensive, compassionate, and quality dental care 
                  to every patient while maintaining the highest standards of safety, 
                  hygiene, and professionalism. We are committed to creating positive 
                  dental experiences that promote lifelong oral health.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary flex items-center">
                  <Award className="mr-3" size={28} />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted dental care provider in the NCR region, 
                  known for our clinical excellence, patient-centered approach, and 
                  commitment to advancing dental healthcare through continuous learning 
                  and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary">
            Certifications & Standards
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary">
            Why Choose Bhargava Dental Care?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">35+ Years Experience</h3>
              <p className="text-muted-foreground">Decades of trusted dental care</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialist Doctors</h3>
              <p className="text-muted-foreground">Expert implantologist and pediatric dentist</p>
            </div>
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-muted-foreground">Latest dental technology and equipment</p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Care</h3>
              <p className="text-muted-foreground">Personalized treatment plans</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;