// eslint-disable-next-line @typescript-eslint/no-var-requires
const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig('default', 'AI-READI', 'aireadi.org', false);

module.exports = config;
