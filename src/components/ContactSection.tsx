
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "ugaaska320@gmail.com",
      link: "mailto:ugaaska320@gmail.com",
      icon: "📧"
    },
    {
      label: "LinkedIn",
      value: "Ahmed S. Abdi",
      link: "https://linkedin.com/in/ahmedabdis",
      icon: "💼"
    },
    {
      label: "Location",
      value: "Available for Remote/On-site",
      link: null,
      icon: "📍"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to bring reliable IT support to your team. Let's discuss how I can help with your technical challenges.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-up">
            <h3 className="font-heading font-semibold text-2xl mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-primary hover:text-primary/80 transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-lg mb-4">Why Work With Me?</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Hands-on troubleshooting experience in real environments
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Continuous learning mindset with structured certification path
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Strong communication skills from customer service background
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Proactive approach to problem-solving and documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-2xl mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-foreground/60">
            © 2024 Ahmed S. Abdi. Built with passion for IT support excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
