module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    /* id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, */
    firstname: {
      type: DataTypes.STRING(50),
      validate: {
        len: [1]
      }
    },
    lastname: {
      type: DataTypes.STRING(50),
      validate: {
        len: [1]
      }
    },
    googleId: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING(50),
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING(50),
      validate: {
        len: [1]
      }
    },
    school_name: {
      type: DataTypes.STRING(50),
      validate: {
        len: [1]
      }
    },
    qt_sem: {
      type: DataTypes.STRING(50),
      validate: {
        len: [1]
      }
    },
    program_start: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    program_end: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    ed_level: {
      type: DataTypes.STRING(50)
    },
    cip_code_one: {
      type: DataTypes.DECIMAL(6, 4),
      validate: {
        len: [1]
      }
    },
    last_login: {
      type: DataTypes.DATEONLY
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  Students.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Students.hasMany(models.Post, {
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
