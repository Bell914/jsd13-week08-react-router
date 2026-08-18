import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <input
            name="message"
            type="text"
            className="w-full p-2 border border-gray-..."
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-teal-600 text-white..."
        >
          Send Message
        </button>
      </Form>
    </div>
  );
}