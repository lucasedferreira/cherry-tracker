module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      spotify_id: {
        type: DataTypes.STRING
      },
      spotify_access_token: {
        type: DataTypes.STRING
      },
      spotify_refresh_token: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      complement: {
        type: DataTypes.JSONB,
        allowNull: true
      }
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false
    }
  );

  return User;
};
