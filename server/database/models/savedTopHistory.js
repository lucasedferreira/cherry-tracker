module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "SavedTopHistory",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "saved_top_history",
      underscored: true,
      timestamps: false,
    }
  );
};
