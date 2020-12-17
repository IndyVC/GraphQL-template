const { RESTDataSource } = require("apollo-datasource-rest");

//In this datasource we will use an existing REST service. Since GRaphQL is used a lot over existing API services, this makes a good example of how.
class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get(`/`);
    return data;
  }
}

module.exports = SpeakerAPI;
