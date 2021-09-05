
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface) => {
     return queryInterface.bulkInsert(
        'users', 
        [
          {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: await bcrypt.hash('estabelesis', 10),
            created_at: new Date(),
            updated_at: new Date(),
          }
      ], 
     {});
  },

  down: () => {},
};
