module.exports = {
  // Archivos que Jest debe considerar para las pruebas
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // Directorios que Jest debe ignorar
  testPathIgnorePatterns: ['./node_modules/', './build/'],

  // Configuración de los resultados de las pruebas
  verbose: true,
};