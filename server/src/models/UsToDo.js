module.exports = (sequelize, DataTypes) => {
  const UsToDo = sequelize.define('UsToDo', {
    ustodotitle: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })
  UsToDo.associate = function (models) {
  }

  return UsToDo
}
