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
  addFriend(data) {
    return http.post("/addFriend", data);
  }
  removeFriend(data) {
    return http.post("/removeFriend", data);
  }
  currentUserInfo(data) {
    return http.post("/currentUserInfo", data);
  }
}

export default new UserDataService();
