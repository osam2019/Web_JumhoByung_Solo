const manager = (sequelize, DataTypes) => {
    const Manager = sequelize.define('manager', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
			unique:true,
            validate: {
            	notEmpty: true
            }
        },
		militaryServiceNumber: {
            type: DataTypes.STRING,
			unique:true,
            allowNull: false,
            validate: {
            	notEmpty: true
            }
        },
    });
    return Manager;
};
export default manager;