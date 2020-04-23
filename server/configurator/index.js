
const cfgMandantory =
  (key, source) => {
    const root = source ? source : process.env;
    if (!root[key]) {
      throw new Error(`Configuration not found: ${key}`);
    }
    return root[key];
  };

const cfgOptional =
  (key, defaultValue, source) => {
    const root = source ? source : process.env;
    if (!root[key] && defaultValue === undefined) {
      throw new Error(`Configuration not found: ${key}`);
    } else if (!root[key] && defaultValue !== undefined) {
      return defaultValue;
    }
    return root[key];
  };

module.exports = {
  cfgMandantory,
  cfgOptional
};
