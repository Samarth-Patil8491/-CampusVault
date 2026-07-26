import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            CampusVault
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 text-gray-700 md:flex">
          <li className="cursor-pointer transition hover:text-blue-600">
            Home
          </li>
          <li className="cursor-pointer transition hover:text-blue-600">
            Features
          </li>
          <li className="cursor-pointer transition hover:text-blue-600">
            Browse Notes
          </li>
          <li className="cursor-pointer transition hover:text-blue-600">
            About
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="cursor-pointer font-medium text-gray-700 transition hover:text-blue-600">
            Login
          </button>

          <Button>
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;