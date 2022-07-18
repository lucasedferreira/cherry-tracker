module.exports = (sequelize, DataTypes) => {
  const TopMusic = sequelize.define(
    'TopMusic',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      spotify_id: {
        type: DataTypes.STRING
      },
      complement: {
        type: DataTypes.JSONB,
        allowNull: true
      }
    },
    {
      tableName: 'top_musics',
      underscored: true,
      timestamps: false
    }
  );

  return TopMusic;
};
