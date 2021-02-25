import React, { useState, useEffect } from "react";
import Api from "../../controllers/api";
import swal from 'sweetalert';

function FormClient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [document, setDocument] = useState('');
  const [country, setCountry] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  const REGEXP = {
    letter: /^[a-zA-Z\s]+$/,
    number: /^[0-9]+$/,
  }

  const send = () => {
    if (validateForm() === true) {
      swal ( "formulario enviado con éxito" ,  "" ,  "success", 
      { buttons: "Regresar" })
    } else {
      swal ( "Formulario contiene errores!" ,  "" ,  "error", 
      { buttons: "Regresar" })
    }
  }

  const validateForm = () => {
    return (validate(firstName)) && (validate(lastName)) && (validate(country)) && (validate(document))
  }

  const validate = (atr) => {
    return ( (atr.length) > 0 )
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await Api.getCountry();
      setListCountry(response);
    }

    fetchMyAPI();
  }, [])

  useEffect(() => {
    console.log('nombre', firstName);
    console.log('apellido', lastName);
    console.log('documento', document);
    console.log('country', country);
  }, [country, firstName, lastName, country])

  return (
    <>
      <div className="col-lg-12">
        <div className="panel panel-default">
          <div class="card">
            <div class="card-header">
              <h3 className="panel-title">Información del formulario</h3>
            </div>
            <div class="card-body">
              <p className="subtitle mt-4">
                Ingrese el titulo y la descripción que visualizarán los usuarios
                durante el proceso de pago
              </p>

              <form onSubmit={(e) => send()}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nombre</label>
                      <input
                        className="form-control"
                        onChange={ 
                          (e) => setFirstName(( ( REGEXP.letter).test(e.target.value) || e.target.value == 0) ? e.target.value : firstName)
                        }
                        value={ firstName }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Apellido</label>
                      <input
                        className="form-control"
                        onChange={ 
                          (e) => setLastName( ( (REGEXP.letter).test(e.target.value) || e.target.value == 0) ? e.target.value : lastName ) 
                        }
                        value={ lastName }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Seleccione un pais
                      </label>
                      <select
                          value={country}
                          class="form-control"
                          onChange={e => setCountry(e.target.value)}>
                          <option value=''> Seleccionar </option>
                          {
                            listCountry.map((item, key) => {
                              return  key <= 20 &&  <option key={key} value={item.name} >{ item.name }</option>
                            })
                          }
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Número de documento *
                      </label>
                      <input
                        className="form-control"
                        onChange={ 
                          (e) => setDocument( ((REGEXP.number).test(e.target.value) || e.target.value == 0) ? e.target.value : document ) 
                        }
                        value={ document }
                      />
                    </div>
                  </div>
                </div>
                <div className="row"></div>

                <button type="submit" className="btn btn-primary btn-ok">
                Enviar
              </button>
              <button type="submit" className="btn btn-primary btn-cancel">
                Cancelar
              </button>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormClient;
