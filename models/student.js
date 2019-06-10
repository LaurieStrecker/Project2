module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("student", {
    // Giving the student google id of an integer
    google_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Student.associate = function(models) {
    // Associating Student with Posts
    // When an Student is deleted, also delete any associated Posts
    Student.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Student;
};
