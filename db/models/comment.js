"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate }) {
      // define association here
      this.belongsTo(Candidate, { foreignKey: "candidate_id" });
    }
  }
  Comment.init(
    {
      candidate_id: DataTypes.INTEGER,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
