module.exports = models => {
  models.User.hasMany(models.TopMusic, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });

  models.TopMusic.belongsTo(models.User, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
};
