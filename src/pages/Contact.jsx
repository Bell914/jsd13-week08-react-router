import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-lg mx-auto w-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
          <input
            name="message"
            type="text"
            placeholder="พิมพ์ข้อความที่นี่..."
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2bbbad] focus:border-transparent text-sm"/>
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#2bbbad] hover:bg-[#26a69a] text-white rounded-md font-medium text-sm transition-colors shadow-sm">
          Send Message
        </button>
      </Form>
    </div>
  );
}