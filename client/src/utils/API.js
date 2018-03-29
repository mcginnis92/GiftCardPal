import axios from "axios";

export default {
  // Gets all gift cards
  getCards: function() {
    return axios.get("/api/giftcards");
  },
  // Gets the gift card with the given name
  getCard: function(id) {
    return axios.get("/api/giftcards/" + id);
  },
  // Deletes the gift card with the given id
  deleteCard: function(id) {
    return axios.delete("/api/giftcards/" + id);
  },
  // Saves a giftcard to the database
  saveCard: function(newCard) {
    return axios.post("/api/giftcards", newCard);
  },
  //Updates a giftcard
  updateCard: function(id, newAmount){
    return axios.put("/api/giftcards/" + id, newAmount)
  },
  /****************** USER ROUTES **********************/

  // Saves a user to the database
  // saveUser: function(newUser) {
  //   return axios.post("/api/users", newUser);
  // },
  //Finds a user's gift cards
  getUserGC: function(username){
    return axios.get("/api/users/" + username.username);
  },
  // Saves a user to the database
  signUp: function(newUser) {
    return axios.post("/api/users", newUser);
  },
};
