import sequelize from '../config/database.js';
import User from './User.js';
import Wallets from './Wallet.js';
import Funds from './Fund.js';
import FundAllocation from './Fund_Allocation.js';
import Category from './Category.js';
import Transaction from './Transaction.js';

User.hasMany(Wallets, { foreignKey: 'user_id' });
Wallets.belongsTo(User, { foreignKey: 'user_id' }); 

User.hasMany(Funds, { foreignKey: 'user_id' });
Funds.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Category, { foreignKey: 'user_id' });
Category.belongsTo(User, { foreignKey: 'user_id' });

Wallets.hasMany(FundAllocation, { foreignKey: 'wallet_id' });
FundAllocation.belongsTo(Wallets, { foreignKey: 'wallet_id' });

Funds.hasMany(FundAllocation, { foreignKey: 'fund_id' });
FundAllocation.belongsTo(Funds, { foreignKey: 'fund_id' });

Funds.hasMany(Transaction, { foreignKey: 'fund_id' });
Transaction.belongsTo(Funds, { foreignKey: 'fund_id' });

Category.hasMany(Transaction, { foreignKey: 'category_id' });
Transaction.belongsTo(Category, { foreignKey: 'category_id' });


export {
    sequelize,
    User,
    Wallets,
    Funds,
    FundAllocation,
    Category,
    Transaction,
  };