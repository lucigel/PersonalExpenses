import sequelize from './config/database.js';
import User from './models/User.js';   

const main = async () => {
    try {
        await sequelize.authenticate(); 
        console.log('DB Connection Successfully !')

        const desc = await User.describe(); 
        console.log(desc); 

        const u = await User.create({
            username: 'testuser', 
            password_hash: 'hash123'
        }); 

        console.log('created user with id', u.id); 

        const found = await User.findByPk(u.id); 
        console.log('found username', found.username); 

        await found.destroy(); 
    } catch (e) {
        console.error(e); 
    } finally {
        await sequelize.close();
    }
};

main();
