const { Router } = require('express');

const presetRouter =
  () => {
    const router = Router();
    return router;
  };

module.exports = {
  presetRouter
};

