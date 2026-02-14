// import { useState } from "react";
// import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   // Logo Colors swapped per your request
//   const logoBrown = "#5D4037"; // Now for buttons/icons
//   const logoGreen = "#3D6D4D"; // Now for headers/labels

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleWhatsAppSend = (e) => {
//     e.preventDefault();
//     const text = `*New Inquiry from Website*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
//     window.open(`https://wa.me/919573311300?text=${text}`, "_blank");
//   };

//   const contactDetails = [
//     { 
//       icon: MapPin, 
//       title: "Address", 
//       content: "402, Indra Enclave, Alfa Gardens, Ayyappa Nagar, KR Puram, Bangalore, KA-560049" 
//     },
//     { 
//       icon: Phone, 
//       title: "Phone", 
//       content: "9573311300 / 7899130336" 
//     },
//     { 
//       icon: Mail, 
//       title: "Email", 
//       content: "gangadharam.konangi@gmail.com" 
//     },
//   ];

//   return (
//     <section className="py-12 lg:py-20 bg-white">
//       <div className="container-main">
//         {/* Swapped Dual Color Heading */}
//         <h2 className="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-2">
//           <span style={{ color: logoGreen }}>Contact</span>
//           <span style={{ color: logoBrown }}>Information</span>
//         </h2>
        
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
          
//           {/* Left Column: Info Cards */}
//           <div className="space-y-6">
//             {contactDetails.map((item, i) => (
//               <div key={i} className="flex items-center gap-6 p-6 bg-[#fffbeb] rounded-xl border border-[#fef3c7] shadow-sm">
//                 <div 
//                   className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
//                   style={{ backgroundColor: logoBrown }}
//                 >
//                   <item.icon className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg" style={{ color: logoGreen }}>{item.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.content}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Social Link with Green accent */}
//             <div className="pt-4">
//               <a
//                 href="https://www.instagram.com/p/DO5yeM8k25_/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-dashed transition-all hover:bg-orange-50"
//                 style={{ borderColor: `${logoBrown}40`, color: logoGreen }}
//               >
//                 <Instagram className="w-6 h-6" style={{ color: logoBrown }} />
//                 <span className="font-bold text-base uppercase tracking-wide">Follow us on Instagram</span>
//               </a>
//             </div>
//           </div>

//           {/* Right Column: Form Section */}
//           <div className="bg-[#fffbeb] p-8 lg:p-10 rounded-3xl border border-[#fef3c7] shadow-sm">
//             <h3 className="text-2xl font-bold mb-8" style={{ color: logoGreen }}>Send us a Message</h3>
            
//             <form onSubmit={handleWhatsAppSend} className="space-y-4">
//               <div className="space-y-1">
//                 <label className="block font-bold text-sm" style={{ color: logoGreen }}>Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="block font-bold text-sm" style={{ color: logoGreen }}>Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="your@email.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="block font-bold text-sm" style={{ color: logoGreen }}>Phone *</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   maxLength={10}
//                   pattern="[0-9]{10}"
//                   placeholder="10-digit phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="block font-bold text-sm" style={{ color: logoGreen }}>Message *</label>
//                 <textarea
//                   name="message"
//                   required
//                   rows="2" 
//                   placeholder="How can we help you?"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-white py-3.5 mt-2 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg"
//                 style={{ backgroundColor: logoBrown }}
//               >
//                 <MessageCircle className="w-6 h-6" /> 
//                 Send via WhatsApp
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Branding Colors
  const logoBrown = "#5D4037"; // Primary for buttons/icons
  const logoGreen = "#3D6D4D"; // Primary for labels/headers

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Website*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919573311300?text=${text}`, "_blank");
  };

  const contactDetails = [
    { 
      icon: MapPin, 
      title: "Address", 
      content: "402, Indra Enclave, Alfa Gardens, Ayyappa Nagar, KR Puram, Bangalore, KA-560049" 
    },
    { 
      icon: Phone, 
      title: "Phone", 
      content: "9573311300 / 7899130336" 
    },
    { 
      icon: Mail, 
      title: "Email", 
      content: "gangadharam.konangi@gmail.com" 
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container-main">
        {/* Shuffled Color Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-2">
          <span style={{ color: logoBrown }}>Contact</span>
          <span style={{ color: logoGreen }}>Information</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-[#fffbeb] rounded-xl border border-[#fef3c7] shadow-sm">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                  style={{ backgroundColor: logoBrown }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: logoGreen }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}

            {/* Instagram Link */}
            <div className="pt-4">
              <a
                href="https://www.instagram.com/p/DO5yeM8k25_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-dashed transition-all hover:bg-orange-50"
                style={{ borderColor: `${logoBrown}40`, color: logoGreen }}
              >
                <Instagram className="w-6 h-6" style={{ color: logoBrown }} />
                <span className="font-bold text-base uppercase tracking-wide">Follow us on Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form Section */}
          <div className="bg-[#fffbeb] p-8 lg:p-10 rounded-3xl border border-[#fef3c7] shadow-sm">
            <h3 className="text-2xl font-bold mb-8" style={{ color: logoGreen }}>Send us a Message</h3>
            
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-bold text-sm" style={{ color: logoGreen }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-sm" style={{ color: logoGreen }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-sm" style={{ color: logoGreen }}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-sm" style={{ color: logoGreen }}>Message *</label>
                <textarea
                  name="message"
                  required
                  rows={3} 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5D4037] focus:ring-1 focus:ring-[#5D4037] transition-all bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-3.5 mt-2 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg"
                style={{ backgroundColor: logoBrown }}
              >
                <MessageCircle className="w-6 h-6" /> 
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;