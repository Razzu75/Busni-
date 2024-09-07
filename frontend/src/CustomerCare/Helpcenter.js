import { useEffect } from "react";
const Helpcenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        {/* General Queries */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">General Queries</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>What is Busni Online Store?</strong>
              <p>
                Busni Online Store is a leading online shopping destination that
                offers a wide range of high-quality products at unbeatable
                prices.
              </p>
            </li>
            <li className="mb-2">
              <strong>How can I create an account?</strong>
              <p>
                To create an account, click on the "Sign Up" button at the top
                right corner of the page and fill in the required details.
              </p>
            </li>
            <li className="mb-2">
              <strong>How do I reset my password?</strong>
              <p>
                Click on the "Forgot Password" link on the login page and follow
                the instructions to reset your password.
              </p>
            </li>
          </ul>
        </div>

        {/* Orders */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Orders</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>How can I track my order?</strong>
              <p>
                Once your order has shipped, you will receive an email with a
                tracking number. You can use this number to track your order on
                our website.
              </p>
            </li>
            <li className="mb-2">
              <strong>Can I change or cancel my order?</strong>
              <p>
                Orders can be changed or canceled within 24 hours of placement.
                Please contact our customer service for assistance.
              </p>
            </li>
            <li className="mb-2">
              <strong>What payment methods do you accept?</strong>
              <p>
                We accept various payment methods including esewa, Khalti, Phone
                Pay and other online banking systems.
              </p>
            </li>
          </ul>
        </div>

        {/* Shipping */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Shipping</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>What are the shipping options?</strong>
              <p>
                We offer standard and expedited shipping options. Shipping times
                and costs vary based on your location and the shipping method
                selected.
              </p>
            </li>
            <li className="mb-2">
              <strong>Do you ship internationally?</strong>
              <p>
                Yes, we ship to many countries worldwide. Please check our
                shipping policy for more details on international shipping.
              </p>
            </li>
            <li className="mb-2">
              <strong>How do I change my shipping address?</strong>
              <p>
                You can change your shipping address in your account settings or
                during the checkout process before placing your order.
              </p>
            </li>
          </ul>
        </div>

        {/* Returns & Refunds */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Returns & Refunds</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>What is your return policy?</strong>
              <p>
                We accept returns within 7 days of purchase. Items must be in
                their original condition and packaging. Please visit our returns
                page for more information.
              </p>
            </li>
            <li className="mb-2">
              <strong>How do I initiate a return?</strong>
              <p>
                To initiate a return, log into your account, go to your order
                history, and select the item you wish to return. Follow the
                instructions to complete the return process.
              </p>
            </li>
            <li className="mb-2">
              <strong>When will I receive my refund?</strong>
              <p>
                Refunds are processed within 5-7 business days after we receive
                and inspect the returned item. You will receive a confirmation
                email once the refund is issued.
              </p>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>How can I contact customer support?</strong>
              <p>
                You can contact our customer support team through the "Contact
                Us" page on our website or by emailing us at
                busnitrade@gmail.com
              </p>
            </li>
            <li className="mb-2">
              <strong>What are your customer service hours?</strong>
              <p>
                Our customer service team is available from Sunday to Friday, 9
                AM to 5 PM (local time).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Helpcenter;
