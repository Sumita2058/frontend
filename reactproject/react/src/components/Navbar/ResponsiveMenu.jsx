import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "../../constants/navlink";
import PropTypes from "prop-types";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex
         h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white
         px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-ms`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={30} />
          <div>
            <h1>hello user</h1>
            <h1 className="text-sm text-slate-500 right-4">preminium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-4">
                <a
                  href={link}
                  className="capitalize inline-block text-lg font-semibold hover:text-primary duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          made by <a href="#">sumita</a>{" "}
        </h1>
      </div>
    </div>
  );
};
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired
}
export default ResponsiveMenu;
