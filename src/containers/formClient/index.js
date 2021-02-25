function FormClient() {
  return (
    <>

        


      <div className="col-lg-12">
        <div className="panel panel-default">
        <div class="card">
            <div class="card-header">
                <h3 className="panel-title">
                    Información del formulario
                </h3>
            </div>
            <div class="card-body">
                <p className="subtitle mt-4">
                    Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago
                </p>
                
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nombre</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Apellido</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Seleccione un pais</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Número de documento *</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                    
                </form>  
                
            </div>
        </div>
        </div>
      </div>

        <button type="submit" className="btn btn-primary btn-ok">Enviar</button>
        <button type="submit" className="btn btn-primary btn-cancel">Cancelar</button>
    </>
  );
}

export default FormClient;
