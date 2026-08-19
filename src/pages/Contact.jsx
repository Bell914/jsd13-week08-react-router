import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-2xl mx-auto w-full mt-2">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Contact Us
      </h1>
      <Form method="post" className="space-y-4">
        <div>
          <label className="block text-gray-600 text-sm mb-1.5">
            Message:
          </label>
          <input
            name="message"
            type="text"
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#138c82] focus:border-transparent text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#138c82] hover:bg-[#0f736b] text-white font-medium px-4 py-2 rounded-md text-sm transition-colors shadow-sm"
          >
            Send Message
          </button>
        </div>
      </Form>
    </div>
  );
}