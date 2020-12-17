const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }) {
    //session.speakers only contains a name and ID. We want the FULL object to be resolved! This is how we specify/change which data we return.
    const speakers = await dataSources.speakerAPI.getSpeakers();
    console.log(speakers);
    return speakers.filter((s) =>
      session.speakers.map((speaker) => speaker.id).includes(s.id)
    );
  },
};
