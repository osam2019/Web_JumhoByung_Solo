const unit = (sequelize, DataTypes) => {
    const Unit = sequelize.define('unit', {
		topCategory: {
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				notEmpty:true
			}
		},
		dep0: {
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				notEmpty:true
			}
		},
		dep1: {
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				notEmpty:true
			}
		},
		dep2: {
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				notEmpty:true
			}
		},
		dep3: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		dep4: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		dep5: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		dep6: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		}
    });
    Unit.associate = models => {
        Unit.hasMany(models.User);
		Unit.hasOne(models.Manager);
		Unit.belongsToMany(models.Worktype, 
						   {through: 'unitworktype'});
    };
    return Unit;
};
export default unit;