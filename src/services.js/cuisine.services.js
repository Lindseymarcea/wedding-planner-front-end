import http from '../http-common';

class CuisineDataService {
  getAll() {
    return http.get('/cuisine/');
  }

  get(id) {
    return http.get(`/cuisine/${id}`);
  }

  create(data) {
    return http.post('/cuisine/', data);
  }

  update(id, data) {
    return http.put(`/cuisine/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cuisine/${id}`);
  }

  deleteAll() {
    return http.delete(`/cuisine`);
  }

  findByTitle(title) {
    return http.get(`/cuisine?title=${title}`);
  }
}

export default new CuisineDataService();
