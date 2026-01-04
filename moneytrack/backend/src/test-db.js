import sequelize from './config/database.js';

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Kết nối database thành công!');
        console.log('📊 Database:', sequelize.config.database);
        console.log('🖥️  Host:', sequelize.config.host);
        console.log('🔌 Port:', sequelize.config.port);
        
        // Đóng kết nối sau khi test
        await sequelize.close();
        console.log('🔒 Đã đóng kết nối database');
        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi kết nối database:');
        console.error('   Message:', error.message);
        console.error('   Chi tiết:', error);
        process.exit(1);
    }
}

testConnection();

