import "./sidebar.css";
import Logo from "../../components/svg/epayco-davivienda";

function Sidebar() {
  return (
    <>
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Logo />
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-area-chart" /> Clientes
              </a>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Sidebar;
