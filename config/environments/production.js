module.exports = {
  web: {
    port: 3000
  },
  logging: {
    appenders: [
      { type: 'console', layout: { type: 'basic' } }
    ]
  }
};
