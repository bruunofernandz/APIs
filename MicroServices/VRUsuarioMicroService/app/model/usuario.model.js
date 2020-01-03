module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    schema: 'public'
  });
  
  return Usuario;
}