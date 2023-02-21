import http from "../http-common";

class MessageService {
  
  getAllMessages() {
    return http.get("/messages");
  }
}

export default new MessageService();