const work = (sequelize, DataTypes) => {
    const Work = sequelize.define('work', {
		date: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
		},
    });
    Work.associate = models => {
        Work.belongsTo(models.User);
		Work.belongsTo(models.Worktype);
    };
    return Work;
};
export default work;