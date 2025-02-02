module.exports = {
  apps: [
    {
      name: "modularwebworx-backend",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: require('dotenv').config().parsed
    },
  ],
};
