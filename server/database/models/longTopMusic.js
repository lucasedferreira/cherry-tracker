module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "LongTopMusic",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      spotify_id: {
        type: DataTypes.STRING,
      },
      complement: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      tableName: "long_top_musics",
      underscored: true,
      timestamps: false,
    }
  );
};
