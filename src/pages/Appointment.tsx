import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    treatments: [] as string[],
    description: '',
  });

  const timeSlots = [
    { value: 'morning', label: 'Morning (10:00 AM - 2:00 PM)' },
    { value: 'evening', label: 'Evening (5:00 PM - 9:00 PM)' },
  ];

  const treatmentOptions = [
    'General Checkup',
    'Dental Cleaning',
    'Tooth Filling',
    'Root Canal Treatment',
    'Dental Implants',
    'Teeth Whitening',
    'Pediatric Dentistry',
    'Cosmetic Dentistry',
    'Emergency Treatment',
    'Orthodontics',
    'Gum Treatment',
    'Oral Surgery',
  ];

  // Function to disable Mondays and past dates
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const isDateDisabled = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDay() === 1; // Monday is day 1
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTreatmentChange = (treatment: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      treatments: checked
        ? [...prev.treatments, treatment]
        : prev.treatments.filter(t => t !== treatment)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.date || !formData.timeSlot) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check if selected date is Monday
    if (isDateDisabled(formData.date)) {
      alert('Sorry, we are closed on Mondays. Please select a different date.');
      return;
    }

    // Format the WhatsApp message
    const message = `Hello, I'd like to book a dental appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Preferred Date: ${new Date(formData.date).toLocaleDateString('en-IN', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}
Time Slot: ${timeSlots.find(slot => slot.value === formData.timeSlot)?.label}
Treatments: ${formData.treatments.length > 0 ? formData.treatments.join(', ') : 'General consultation'}
${formData.description ? `Note: ${formData.description}` : ''}

Sent from bhargavadentalcare.com`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919818032955?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Book an Appointment
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Schedule your visit with our expert dental team. We're here to help you achieve optimal oral health.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Appointment Details</CardTitle>
                <p className="text-muted-foreground">
                  Fill in your details below and we'll connect you via WhatsApp to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <User className="mr-2" size={20} />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Calendar className="mr-2" size={20} />
                      Preferred Date & Time
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          min={getMinDate()}
                          value={formData.date}
                          onChange={(e) => {
                            if (!isDateDisabled(e.target.value)) {
                              handleInputChange('date', e.target.value);
                            }
                          }}
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          We are closed on Mondays
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="timeSlot">Time Slot *</Label>
                        <select
                          id="timeSlot"
                          value={formData.timeSlot}
                          onChange={(e) => handleInputChange('timeSlot', e.target.value)}
                          className="w-full p-2 border border-input rounded-md bg-background"
                          required
                        >
                          <option value="">Select time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Treatment Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Treatment Required</h3>
                    <p className="text-sm text-muted-foreground">
                      Select all treatments you're interested in (optional)
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {treatmentOptions.map((treatment) => (
                        <div key={treatment} className="flex items-center space-x-2">
                          <Checkbox
                            id={treatment}
                            checked={formData.treatments.includes(treatment)}
                            onCheckedChange={(checked) => 
                              handleTreatmentChange(treatment, checked as boolean)
                            }
                          />
                          <Label 
                            htmlFor={treatment} 
                            className="text-sm cursor-pointer"
                          >
                            {treatment}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Notes (Optional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Any specific concerns, symptoms, or preferences you'd like to mention..."
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-button flex items-center justify-center space-x-2"
                  >
                    <MessageSquare size={20} />
                    <span>Book via WhatsApp</span>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Clicking this button will open WhatsApp with your appointment details pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Clinic Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Clinic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Clinic Timings</p>
                    <p className="text-sm text-muted-foreground">
                      Tue-Sun: 10am-2pm, 5pm-9pm<br />
                      <span className="text-red-600">Monday: Closed</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +91 98180 32955<br />
                      +91 120 4374921
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      bhargavadentalcare@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-card bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-red-700">Emergency?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600 mb-3">
                  For dental emergencies, please call us directly:
                </p>
                <Button 
                  asChild 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                >
                  <a href="tel:+919818032955">Call Now: +91 98180 32955</a>
                </Button>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• We'll confirm your appointment via WhatsApp</p>
                  <p>• Please arrive 10 minutes early</p>
                  <p>• Bring any previous dental records</p>
                  <p>• Insurance cards (if applicable)</p>
                  <p>• List of current medications</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appointment;