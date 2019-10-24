const worktype = (sequelize, DataTypes) => {
    const Worktype = sequelize.define('worktype', {
		typename: {
			type: DataTypes.STRING,
			unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		worktime: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		isInTroopMorning: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		outTroopExpMorning:{
			type: DataTypes.STRING,
		},
		isInTroopEvening: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		outTroopExpEvening:{
			type: DataTypes.STRING,
		},
		affectMorningAttend: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		absenceExpMorning:{
			type: DataTypes.STRING,
		},
		affectEveningAttend:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		absenceExpEvening:{
			type: DataTypes.STRING,
		},
    });
    Worktype.associate = models => {
        Worktype.belongsToMany(models.Unit, 
							   {through: 'unitworktype'});
		Worktype.hasMany(models.Work)
    };
    return Worktype;
};
export default worktype;