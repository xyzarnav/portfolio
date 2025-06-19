import { Link } from "react-router-dom";

const navItems = [
  { label: "About", page: "about", icon: "person-outline" },
  { label: "Resume", page: "resume", icon: "document-text-outline" },
  { label: "Portfolio", page: "portfolio", icon: "briefcase-outline" },
  { label: "Blog", page: "blog", icon: "newspaper-outline" },
  { label: "Contact", page: "contact", icon: "mail-outline" },
];

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="w-full bg-[rgba(30,30,36,0.9)] backdrop-blur-lg border border-jet rounded-lg shadow-shadow-2 z-50 mb-4 sm:mb-6">
    <ul className="flex flex-wrap justify-center items-center px-2 sm:px-4">
      {navItems.map((item) => (
        <li className="navbar-item" key={item.page}>
          <Link
            to={`/${item.page}`}
            className={`flex items-center text-light-gray py-3 px-3 sm:px-4 transition-all duration-300 hover:text-orange-yellow-crayola focus:text-orange-yellow-crayola md:py-4 lg:font-fw-500 ${
              activePage === item.page
                ? "text-orange-yellow-crayola relative after:content-[''] after:absolute after:bottom-[6px] after:left-[50%] after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-orange-yellow-crayola lg:after:bottom-0 lg:after:h-0.5 lg:after:w-full"
                : ""
            }`}
            onClick={() => setActivePage(item.page)}
          >
            <ion-icon
              name={item.icon}
              class="text-lg mr-2 md:mr-1.5"
            ></ion-icon>
            <span className="text-[13px] sm:text-fs-7">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
