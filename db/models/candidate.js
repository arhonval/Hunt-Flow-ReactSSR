'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Vacancy, Comment, History }) {
      // define association here
      this.belongsTo(Vacancy, { foreignKey: 'vacancy_id' });
      this.hasMany(Comment, { foreignKey: 'candidate_id' });
      this.belongsToMany(Stage, {
        through: History,
        foreignKey: 'candidate_id',
      });
    }
  }
  Candidate.init(
    {
      vacancy_id: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      experience_age: DataTypes.INTEGER,
      phone_number: DataTypes.BIGINT,
      email: DataTypes.STRING,
      pdf: DataTypes.STRING,
      photo: DataTypes.STRING,
      stage_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Candidate',
    }
  );
  return Candidate;
};
