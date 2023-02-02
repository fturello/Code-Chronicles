const AbstractManager = require("./AbstractManager");

class PopularManager extends AbstractManager {
  constructor() {
    super({ table: "populars" });
  }
}

module.exports = PopularManager;