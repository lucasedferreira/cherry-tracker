module.exports = models => {
  models.User.hasMany(models.LongTopMusic, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
  models.User.hasMany(models.MediumTopMusic, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
  models.User.hasMany(models.ShortTopMusic, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });

  models.LongTopMusic.belongsTo(models.User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
  models.MediumTopMusic.belongsTo(models.User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
  models.ShortTopMusic.belongsTo(models.User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
};
