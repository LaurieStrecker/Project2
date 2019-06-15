/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    google_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Student.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Student.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Student;
};
