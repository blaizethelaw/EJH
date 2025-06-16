export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white text-red-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input className="p-3 rounded border" type="text" placeholder="Your Name" />
          <input className="p-3 rounded border" type="email" placeholder="Your Email" />
          <input className="p-3 rounded border" type="tel" placeholder="Your Phone" />
          <textarea className="p-3 rounded border" placeholder="How can we help?" rows={4}></textarea>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-3 rounded mt-2">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <div className="mb-2"><strong>Phone:</strong> (610) 291-0950</div>
          <div className="mb-2"><strong>Email:</strong> ejhosbach@comcast.net</div>
          <div><strong>Location:</strong> Chadds Ford, PA</div>
        </div>
      </div>
    </section>
  );
}
