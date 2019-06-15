/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    /* id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, */
    firstname: {
      type: DataTypes.STRING(50),
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

  /* Students.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Students.belongsTo(models.cipTable, {
      foreignKey: {
        allowNull: false
      }
    });
  }; */

  return Students;
};
