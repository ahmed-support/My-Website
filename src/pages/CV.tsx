
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer } from "lucide-react";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print/Download Controls - Hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={handlePrint} className="bg-primary hover:bg-primary/90">
          <Printer className="w-4 h-4 mr-2" />
          Print PDF
        </Button>
        <Button onClick={handleDownload} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* CV Content */}
      <div className="cv-container max-w-4xl mx-auto p-8 bg-white text-gray-900">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 pb-6 border-b-2 border-teal-600">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-teal-600">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/025fc11e-7d1e-4851-ac76-41e69d150bb7.png`}
                alt="Ahmed S. Abdi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ahmed S. Abdi</h1>
            <h2 className="text-2xl text-teal-600 mb-4 font-semibold">IT Support Technician</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>ahmed.abdi@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Your City, Country</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-600" />
                <span>portfolio-website.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
          <p className="text-gray-700 leading-relaxed">
            Aspiring IT Support Technician with hands-on experience in troubleshooting, networking basics, 
            and end-user support through home labs and real-world situations. Proven ability to resolve 
            technical issues efficiently while maintaining excellent customer service standards. Currently 
            pursuing CompTIA A+ certification to formalize technical expertise.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">WORK EXPERIENCE</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">Sales Coordinator</h4>
                  <p className="text-teal-600 font-medium">A.H. Alsagar & Bros Co.</p>
                </div>
                <span className="text-sm text-gray-600">2024 – Present</span>
              </div>
              <p className="text-gray-700 mb-2">
                Provided internal IT support for office printers, PCs, and networking issues while managing 
                technical sales operations and reporting.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>IT Support and troubleshooting for office equipment</li>
                <li>Network troubleshooting and maintenance</li>
                <li>Technical sales operations and customer service</li>
                <li>System reporting and documentation</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">Waiter/Cashier</h4>
                  <p className="text-teal-600 font-medium">Tabliah Restaurant</p>
                </div>
                <span className="text-sm text-gray-600">2022 – 2024</span>
              </div>
              <p className="text-gray-700 mb-2">
                Managed POS and thermal printer troubleshooting including IP configuration, cable testing, 
                and device error resolution alongside customer service duties.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>POS system maintenance and troubleshooting</li>
                <li>Thermal printer IP configuration and repair</li>
                <li>Hardware troubleshooting and cable testing</li>
                <li>Customer service and payment processing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">EDUCATION & CERTIFICATIONS</h3>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">CompTIA A+ Certification</h4>
                  <p className="text-gray-700">In Progress</p>
                </div>
                <span className="text-sm text-gray-600">2024</span>
              </div>
              <p className="text-sm text-gray-600">
                Comprehensive IT support certification covering hardware, software, networking, and security fundamentals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Self-Directed IT Education</h4>
              <p className="text-gray-700">Home Lab Projects & Continuous Learning</p>
              <p className="text-sm text-gray-600">
                Hands-on experience with virtualization, Windows Server, Active Directory, and network simulation using Cisco Packet Tracer.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">TECHNICAL SKILLS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Operating Systems</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Windows 10/11 (Advanced)</li>
                <li>• Windows Server (Intermediate)</li>
                <li>• Linux basics (Beginner)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Networking</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• TCP/IP, DHCP, DNS (Intermediate)</li>
                <li>• Cisco Packet Tracer (Intermediate)</li>
                <li>• Network troubleshooting (Advanced)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Software & Tools</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• VirtualBox (Advanced)</li>
                <li>• PowerShell scripting (Intermediate)</li>
                <li>• Active Directory (Intermediate)</li>
                <li>• POS Systems (Advanced)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Hardware</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PC assembly and repair (Advanced)</li>
                <li>• Printer troubleshooting (Advanced)</li>
                <li>• Cable testing and management (Advanced)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">KEY PROJECTS</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900">Home Lab Environment</h4>
              <p className="text-sm text-gray-700">
                Built and maintained a virtualized home lab using VirtualBox with Windows Server, Active Directory, 
                and multiple client machines for hands-on learning and skill development.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Network Simulation Projects</h4>
              <p className="text-sm text-gray-700">
                Designed and configured network topologies using Cisco Packet Tracer, implementing VLAN 
                configurations, routing protocols, and troubleshooting network connectivity issues.
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-teal-600 mb-3 border-b border-gray-300 pb-1">LANGUAGES</h3>
          <div className="flex gap-6">
            <span className="text-gray-700">English (Native)</span>
            <span className="text-gray-700">Arabic (Fluent)</span>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-8 pt-4 border-t border-gray-300">
          References available upon request
        </div>
      </div>
    </div>
  );
};

export default CV;
