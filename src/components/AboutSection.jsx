export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white text-red-900">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src="/images/team.jpg" alt="E.J. Hosbach Team" className="w-48 rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            E.J. Hosbach Mechanical Contractors is a family-owned business serving Chadds Ford and Chester County for over 20 years. Our mission: Deliver quality work with honesty, integrity, and personal service.<br /><br />
            <span className="font-bold">Why Choose Us?</span><br />
            <ul className="list-disc ml-6 mt-2">
              <li>Licensed & Insured</li>
              <li>24/7 Emergency Service</li>
              <li>All Work Guaranteed</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
