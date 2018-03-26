import axios from "axios";

export default {
  // Gets all gift cards
  getCards: function() {
    return axios.get("/api/giftcards");
  },
  // Gets the gift card with the given id
  getCard: function(id) {
    return axios.get("/api/giftcards/" + id);
  },
  // Deletes the gift card with the given id
  deleteCards: function(id) {
    return axios.delete("/api/giftcards/" + id);
  },
  // Saves a giftcard to the database
  saveCard: function(newCard) {
    return axios.post("/api/giftcards", newCard);
  }
};
