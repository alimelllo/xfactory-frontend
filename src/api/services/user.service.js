import http from "../http-common";

class UserDataService {
  getAllUsers() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/register", data);
  }
}

export default new UserDataService();
