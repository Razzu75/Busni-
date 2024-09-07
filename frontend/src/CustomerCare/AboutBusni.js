import { useEffect } from "react";

const AboutBusni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Welcome to <span className="font-bold">Busni Online Store</span>, your
        one-stop destination for all your shopping needs! we have been committed
        to offering a wide range of high-quality products at unbeatable prices.
        From the latest fashion trends to everyday essentials, our carefully
        curated collections are designed to meet the diverse needs of our
        customers.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        At <span className="font-bold">Busni Online Store</span>, we believe in
        providing a seamless and enjoyable shopping experience. Our
        user-friendly website, secure payment options, and fast shipping ensure
        that your orders reach you in no time. We take pride in our exceptional
        customer service and are always here to assist you with any queries or
        concerns.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Our mission is to bring you the best products from around the world,
        backed by a team of dedicated professionals who are passionate about
        what they do. We continuously strive to enhance our offerings and
        services to make your shopping experience even better.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Thank you for choosing Our online platform for shopping
        <span className="font-bold">Busni Online Store</span>. We look forward
        to serving you and making your online shopping experience truly
        remarkable!
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Buy Happiness!
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        <span className="font-bold">Busni Team</span>
      </p>
    </div>
  );
};

export default AboutBusni;
