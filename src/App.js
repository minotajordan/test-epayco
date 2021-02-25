import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from  "./components/sidebar";
import Nav from  "./components/nav";
import Footer from  "./components/footer";
import FormClient from "./containers/formClient";

function App() {
  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper" class="page-content-wrapper">
          <button
            href="#menu-toggle"
            className="wrapper_toggle_btn"
            id="menu-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="clearfix" />
          {/* Header */}
          <Nav />
          {/* /#header */}
          {/* Content area */}
          <div className="container-fluid">
            <div className="content-area">
              {/* content overview */}
              <div className="row">
                <FormClient />
              </div>
            </div>
          </div>
          {/* /#Content area */}
          {/* Footer area */}
            <Footer />
          {/* /#Footer area */}
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
}

export default App;
