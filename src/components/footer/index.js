import SvgDavivienda from '../../components/svg/davivienda';
import SvgEpayco from '../../components/svg/epayco';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="float-left">
            <p className="copy-text">
              ePayco 2011 - 2019 todos los derecho reservado.
            </p>
          </div>

          <div className="float-right">
            <p className="copy-text">
              <SvgEpayco/>
            </p>
          </div>
          <div className="float-right">
            <p className="copy-text">
              <SvgDavivienda/>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
