function city(database, type) {
  const City = database.define(
    "city",
    {
      name: type.STRING,
    },
    { timestamps: false }
  );
//   City.associate = (models) => {
//     City.belongsTo(models.States, { foreignKey: "cityId" });
//   };
  return City;
}

module.exports = city;