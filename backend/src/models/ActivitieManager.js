const AbstractManager = require("./AbstractManager");

class ActivitieManager extends AbstractManager {
  constructor() {
    super({ table: "activities" });
  }
}

module.exports = ActivitieManager;