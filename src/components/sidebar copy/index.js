import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <>
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                <img src="img/logo.png" className="logo" alt="Logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-area-chart" /> Analytics
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-tree" /> Treading
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shield" /> Privacy
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-foursquare" /> Forum
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-support" /> Support
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-signal" /> Settings
              </a>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Sidebar;
