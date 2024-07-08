const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  async addAvatar(filename, id) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET avatar = ? WHERE id = ?`,
      [filename, id]
    );

    return result;
  }
}

module.exports = UserRepository;
