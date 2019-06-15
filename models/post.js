/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    school_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qt_sem: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    program_start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    program_end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    ed_level: {
      type: DataTypes.STRING
    },
    cip_code_one: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Student, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
