const barrack = (sequelize, DataTypes) => {
    const Barrack = sequelize.define('barrack', {
		topCategory:{
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				notEmpty: true
			},
		},
		dep0:{
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }	
		},
		dep1:{
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }	
		},
		dep2:{
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }	
		},
		building: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		room: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
    });
    Barrack.associate = models => {
        Barrack.hasMany(models.User);
    };
    return Barrack;
};
export default barrack;