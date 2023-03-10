'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init(
    {
      event_name: DataTypes.STRING,
      date: DataTypes.STRING,
      location_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Location, {
      foreignKey: 'location_id',
    });
    Event.hasMany(models.Tape, {
      foreignKey: 'event_id',
    });
    Event.belongsTo(models.Category, {
      foreignKey: 'category_id',
    });
  };
  return Event;
};
