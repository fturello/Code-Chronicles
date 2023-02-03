const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password) values (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
