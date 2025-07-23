import { useState } from 'react';
import { Search, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  const categories = ['All', 'Dental Hygiene', 'Child Care', 'Implants', 'Cosmetic', 'Prevention'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Regular Dental Checkups',
      category: 'Prevention',
      excerpt: 'Learn why regular dental visits are crucial for maintaining optimal oral health and preventing serious complications.',
      date: '2024-01-15',
      author: 'Dr. Vikram Khanna',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'How to Make Dental Visits Fun for Kids',
      category: 'Child Care',
      excerpt: 'Tips and strategies to help children overcome dental anxiety and make their visits to the dentist a positive experience.',
      date: '2024-01-10',
      author: 'Dr. Geetima Khanna',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3078d1?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Understanding Dental Implants: A Complete Guide',
      category: 'Implants',
      excerpt: 'Everything you need to know about dental implants, from the procedure to recovery and long-term care.',
      date: '2024-01-05',
      author: 'Dr. Vikram Khanna',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Daily Oral Hygiene: Best Practices',
      category: 'Dental Hygiene',
      excerpt: 'Simple yet effective daily routines to maintain healthy teeth and gums at home.',
      date: '2024-01-01',
      author: 'Dr. Geetima Khanna',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Cosmetic Dentistry: Transform Your Smile',
      category: 'Cosmetic',
      excerpt: 'Explore modern cosmetic dental procedures that can give you the confident smile you\'ve always wanted.',
      date: '2023-12-28',
      author: 'Dr. Vikram Khanna',
      image: 'https://images.unsplash.com/photo-1487053191772-9051e5edbbed?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Preventing Tooth Decay in Children',
      category: 'Child Care',
      excerpt: 'Effective strategies for parents to help prevent tooth decay and maintain their children\'s oral health.',
      date: '2023-12-25',
      author: 'Dr. Geetima Khanna',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Dental Health Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay informed with the latest dental health tips, treatments, and advice from our expert team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="shadow-soft"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Signup */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get the latest dental health tips and updates delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full shadow-button">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-sm hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
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

export default Blog;