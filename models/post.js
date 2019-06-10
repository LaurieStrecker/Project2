module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
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
        isEmail: true,
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
        isDate: true,
        len: [1]
      }
    },
    program_end: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    ed_level: {
      type: DataTypes.STRING(50)
    },
    cip_code_one: {
      type: DataTypes.DECIMAL(4, 4),
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Student
    // A Post can't be created without an Student due to the foreign key constraint
    Post.belongsTo(models.Student, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
