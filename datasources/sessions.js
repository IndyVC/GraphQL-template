const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    return sessions.find((s) => s.id === parseInt(id));
  }
}

module.exports = SessionAPI;
