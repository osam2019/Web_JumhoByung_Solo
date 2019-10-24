import bcrypt from 'bcrypt';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
	email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
	militaryServiceNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
	serviceStart: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
	serviceEnd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42],
      },
    },
	roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
	  allowNull: false,
    },
	
  });
  User.beforeCreate(async user => {
    user.password = await user.generatePasswordHash();
  });
  User.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
  };
  User.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  User.associate = models => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
	User.hasMany(models.Work, { onDelete: 'CASCADE' });
    User.belongsTo(models.Unit, { onDelete: 'CASCADE' });
	User.belongsTo(models.Barrack, { onDelete: 'CASCADE' });
  };
	
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });
    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }
    return user;
  };
	
  return User;
};
export default user;