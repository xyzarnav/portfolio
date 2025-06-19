import { Link } from "react-router-dom";

const navItems = [
	{ label: "About", page: "about", icon: "person-outline" },
	{ label: "Resume", page: "resume", icon: "document-text-outline" },
	{ label: "Portfolio", page: "portfolio", icon: "briefcase-outline" },
	{ label: "Contact", page: "contact", icon: "mail-outline" },
];

const Navbar = ({ activePage, setActivePage }) => (
	<nav className="w-full bg-[rgba(30,30,36,0.9)] backdrop-blur-lg border border-jet rounded-lg shadow-shadow-2 z-50 mb-4 sm:mb-6 mx-auto">
		<ul className="flex w-full justify-between items-center px-0 sm:px-4 gap-0 sm:gap-2">
			{navItems.map((item) => (
				<li
					className="navbar-item flex-1 min-w-0 text-center"
					key={item.page}
				>
					<Link
						to={`/${item.page}`}
						className={`flex flex-col items-center justify-center text-light-gray py-1 px-0 sm:flex-row sm:py-3 sm:px-3 transition-all duration-300 hover:text-orange-yellow-crayola focus:text-orange-yellow-crayola md:py-4 lg:font-fw-500 ${
							activePage === item.page
								? "text-orange-yellow-crayola relative after:content-[''] after:absolute after:bottom-[6px] after:left-[50%] after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-orange-yellow-crayola lg:after:bottom-0 lg:after:h-0.5 lg:after:w-full"
								: ""
						}`}
						onClick={() => setActivePage(item.page)}
					>
						<ion-icon
							name={item.icon}
							class="text-lg mb-0.5 sm:mb-0 sm:mr-1.5"
						></ion-icon>
						<span className="text-[11px] sm:text-fs-7">
							{item.label}
						</span>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Navbar;
