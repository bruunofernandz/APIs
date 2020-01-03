module.exports = (sequelize) => {
  const Loja = sequelize.define('loja', {
    schema: 'public'
  });
  
  return Loja;
}