import http from "../http-common";

class EmpresaDataService {
  getAll() {
    return http.get("/empresas");
  }
}

export default new EmpresaDataService();
