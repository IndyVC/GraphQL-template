module.exports = {
  sessions: (parent, args, context, info) => {
    return context.dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, args, context, info) => {
    const { id } = args;
    return context.dataSources.sessionAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
