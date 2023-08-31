"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate }) {
      // define association here
      this.hasMany(Candidate, { foreignKey: "vacancy_id" });
    }
  }
  Vacancy.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      needs: DataTypes.TEXT,
      salary: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vacancy",
    }
  );
  return Vacancy;
};
