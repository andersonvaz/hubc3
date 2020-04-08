import http from "./http-common";

class ProdutoDataService {
  get(id) {
    return http.get(`/empresa/produto/${id}`);
  }

  create(data) {
    return http.post("/empresa/produto", data);
  }

  update(id, data) {
    return http.put(`/empresa/produto/${id}`, data);
  }

  delete(id) {
    return http.delete(`/empresa/produto/${id}`);
  }

  deleteAll() {
    return http.delete(`/empresa/produto`);
  }

  findByTitle(title) {
    return http.get(`/empresa/produto?title=${title}`);
  }
}

export default new ProdutoDataService();
  