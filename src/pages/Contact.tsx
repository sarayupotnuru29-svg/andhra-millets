import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

const Contact = () => (
  <section className="section-padding">
    <div className="container-main">
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Have questions about our millets? We'd love to hear from you.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {[
            { icon: Phone, title: "Phone", content: "9573311300 / 7899130336" },
            { icon: Mail, title: "Email", content: "gangadharam.konangi@gmail.com" },
            { icon: MapPin, title: "Address", content: "402, Indra Enclave, Alfa Gardens, Ayyappa Nagar, KR Puram, Bangalore, KA-560049" },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.content}</p>
              </div>
            </div>
          ))}

          <a
            href="https://www.instagram.com/p/DO5yeM8k25_/?igsh=MTJxdTl1OWQxMnhreA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">Instagram</h3>
              <p className="text-muted-foreground text-sm">Follow us for updates</p>
            </div>
          </a>

          <a
            href="https://wa.me/919573311300?text=Hello%20Andhra%20Millets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        {/* Map placeholder */}
        <div className="rounded-lg overflow-hidden border border-border bg-muted h-[400px] lg:h-auto flex items-center justify-center">
          <iframe
            title="Andhra Millets Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7!2d77.7!3d12.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI0LjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full min-h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
