
const Partners = () => {
  const partners = [
    { name: "HP", logo: "HP" },
    { name: "AQUAGUARD", logo: "AQUAGUARD" },
    { name: "ACER", logo: "ACER" },
    { name: "LENOVO", logo: "LENOVO" },
    { name: "BROTHER", logo: "BROTHER" },
    { name: "EPSON", logo: "EPSON" },
    { name: "CWC", logo: "CWC" },
    { name: "MICROTECH", logo: "MICROTECH" },
    { name: "CYBER POWER", logo: "CYBER POWER" },
    { name: "RDP", logo: "RDP" },
    { name: "HASONS", logo: "HASONS" },
    { name: "INP", logo: "INP" },
    { name: "VIEWSONIC", logo: "VIEWSONIC" },
    { name: "LG", logo: "LG" },
    { name: "WHISTEL", logo: "WHISTEL" },
    { name: "iBall", logo: "iBall" },
    { name: "CtrlS", logo: "CtrlS" }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Authorized Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to be authorized partners of these leading brands in the technology industry.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-vedant-600">{partner.logo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
