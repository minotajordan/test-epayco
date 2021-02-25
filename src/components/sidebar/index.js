import "./sidebar.css";
import IcoHome from "../../components/svg/ico/home/index";
import Logo from "../../components/svg/epayco-davivienda";
import IcoClient from "../../components/svg/ico/client/index";

function Sidebar() {
  return (
    <>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand d-flex justify-content-center">
            <Logo />
          </li>

          <div className='nameProfile'>
            <p>
              ALEXANDER CEBA...
            </p>
          </div>

          <li>
            <a href="#">
              <span> <IcoHome /> </span>
              <i className="fa fa-dashboard" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <span> </span>
              <i className="fa fa-area-chart" /> Clientes
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
