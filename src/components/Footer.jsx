export default function Footer() {
  return (
    <footer className="bg-red-900 text-yellow-400 text-center py-6 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} E.J. Hosbach Mechanical Contractors, LLC
        </div>
        <div>
          Licensed & Insured | Proudly Serving Chadds Ford & Chester County
        </div>
      </div>
    </footer>
  );
}
