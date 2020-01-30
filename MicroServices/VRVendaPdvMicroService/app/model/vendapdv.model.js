module.exports = (sequelize) => {
  const VendaPdv = sequelize.define('dados', {
    schema: 'public'
  });
  
  return VendaPdv;
}