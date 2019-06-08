module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("student", {
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    google_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    school_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qt_sem: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    program_start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    program_end: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ed_level: {
      type: DataTypes.STRING(50)
    },
    cip_code_one: {
      type: DataTypes.DECIMAL(2,4)
    }
  });
  return Student;
};
