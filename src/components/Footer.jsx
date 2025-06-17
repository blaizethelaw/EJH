export default function Footer() {
  return (
    <footer className="py-8 text-center bg-white/80 backdrop-blur shadow-t">
      <div className="text-gray-500 text-sm">
        © {new Date().getFullYear()} E.J. Hosbach Mechanical. All rights reserved.
      </div>
    </footer>
  );
}
