// components/Contact.tsx or wherever you're using it

const Contact = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-4">Let’s Connect</h3>
      <p className="text-gray-600 mb-6">
        Have a vision in mind? Whether you're starting fresh or thinking of a transformation, we're here to help.
      </p>
      <p className="text-gray-600 mb-6">
        Drop us an email anytime and we’ll get back to you shortly.
      </p>
      <a 
        href="mailto:info@contemporaryelevation.com"
        className="inline-block text-white bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
      >
        Send Email
      </a>
    </div>
  );
};

export default Contact;
