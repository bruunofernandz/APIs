module.exports = (sequelize) => {
  const Usuario = sequelize.define('dados', {
    schema: 'public'
  });
  
  return Usuario;
}