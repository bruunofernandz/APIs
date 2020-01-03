module.exports = (sequelize, Sequelize) => {
  const VendaPdv = sequelize.define('vendapdv', {
    schema: 'public'
  });
  
  return VendaPdv;
}