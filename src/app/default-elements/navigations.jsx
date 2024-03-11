import "./nav-bod-foo.css";
function Navigations() {
  return (
    <div className="navbar bg-base-100 h-32">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
            <li>
              <a>About Us</a>
              <ul className="p-2">
                <li>
                  <a>Our Profiles</a>
                </li>
                <li>
                  <a>Our Mission and Mission</a>
                </li>
                <li>
                  <a>Principle</a>
                </li>
                <li>
                  <a>The Team Members</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Programe</a>
              <ul className="p-2">
                <li>
                  <a>Food Security</a>
                </li>
                <li>
                  <a>Rural Community</a>
                </li>
                <li>
                  <a>Community Developtment</a>
                </li>
                <li>
                  <a>Emergency Response</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Projects</a>
              <ul className="p-2">
                <li>
                  <a>Current Project</a>
                </li>
                <li>
                  <a>Strategy Plan 2024-2030</a>
                </li>
                <li>
                  <a>Achievments</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Learning Platform</a>
              <ul className="p-2">
                <li>
                  <a>Food Security Moduls</a>
                </li>
                <li>
                  <a>Analitical Task</a>
                </li>
                <li>
                  <a>Modul: Planning for Community Developtment</a>
                </li>
                <li>
                  <a>Potential Resources</a>
                </li>
              </ul>
            </li>
            <li>
              <a>News Event</a>
            </li>
            <li>
              <a>C-Community</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="w-40">
              <summary>About Us</summary>
              <ul className="p-2">
                <li>
                  <a>Our Profiles</a>
                </li>
                <li>
                  <a>Our Mission and Vision</a>
                </li>
                <li>
                  <a>Principle</a>
                </li>
                <li>
                  <a>The Team Members</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="w-40">
              <summary>Programe</summary>
              <ul className="p-2">
                <li>
                  <a>Food Security</a>
                </li>
                <li>
                  <a>Rural Community</a>
                </li>
                <li>
                  <a>Community Developtment</a>
                </li>
                <li>
                  <a>Emergency Response</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navigations;
