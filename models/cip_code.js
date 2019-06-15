module.exports = function(sequelize, DataTypes) {
  var cipTable = sequelize.define("cipTable", {
    /* id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, */
    cip_code: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false
    },
    cip_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    stem: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  });

  /* cipTable.associate = function(models) {
    cipTable.hasMany(models.Students, {
      onDelete: "cascade"
    });
  }; */
  return cipTable;
};
