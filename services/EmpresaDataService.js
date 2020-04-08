import http from "./http-common";

class EmpresaDataService {
  getAll() {
    return http.get("/empresas");
  }
  getAllProdutos(id) {
    return http.get(`/empresa/${id}`);
  }
}

export default new EmpresaDataService();
