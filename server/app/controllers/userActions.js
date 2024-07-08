// Import access to database tables
const tables = require("../../database/tables");

const addAvatar = async (req, res, next) => {
  // console.warn("C'est quoi filename ?", req.body.filename)

  const { filename } = req.body;
  const { id } = req.params;

  const relativePath = `/uploads/${filename}`;

  try {
    // Insert the item into the database
    const insertFilename = await tables.user.addAvatar(relativePath, id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res
      .status(201)
      .json({
        message: "The file has been added succesfully !",
        insertFilename,
      });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  addAvatar,
};
