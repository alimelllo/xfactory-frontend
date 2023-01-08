import http from "../http-common";

class UserDataService {
  getAllUsers() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/register", data);
  }
  
  login(data) {
    return http.post("/login", data);
  }
}

export default new UserDataService();
