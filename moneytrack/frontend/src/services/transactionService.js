// Service xử lý giao dịch (dùng mock data trước, sau sẽ thay bằng API thật)

// Mock data - sẽ thay bằng API call sau
let mockTransactions = [
  {
    id: 1,
    type: 'expense',
    amount: 50000,
    category: 'food',
    description: 'Ăn trưa',
    date: new Date('2024-12-10'),
    createdAt: new Date('2024-12-10T12:00:00'),
  },
  {
    id: 2,
    type: 'expense',
    amount: 200000,
    category: 'transport',
    description: 'Xăng xe',
    date: new Date('2024-12-09'),
    createdAt: new Date('2024-12-09T08:00:00'),
  },
  {
    id: 3,
    type: 'income',
    amount: 10000000,
    category: 'salary',
    description: 'Lương tháng 12',
    date: new Date('2024-12-01'),
    createdAt: new Date('2024-12-01T09:00:00'),
  },
  {
    id: 4,
    type: 'expense',
    amount: 1500000,
    category: 'bills',
    description: 'Tiền điện',
    date: new Date('2024-12-08'),
    createdAt: new Date('2024-12-08T10:00:00'),
  },
];

// Lấy tất cả giao dịch
export const getTransactions = async (filters = {}) => {
  // Giả lập delay API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filtered = [...mockTransactions];
  
  // Lọc theo loại (income/expense)
  if (filters.type) {
    filtered = filtered.filter(t => t.type === filters.type);
  }
  
  // Lọc theo danh mục
  if (filters.category) {
    filtered = filtered.filter(t => t.category === filters.category);
  }
  
  // Lọc theo khoảng thời gian
  if (filters.startDate) {
    filtered = filtered.filter(t => new Date(t.date) >= new Date(filters.startDate));
  }
  if (filters.endDate) {
    filtered = filtered.filter(t => new Date(t.date) <= new Date(filters.endDate));
  }
  
  // Sắp xếp theo ngày (mới nhất trước)
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return filtered;
};

// Lấy giao dịch theo ID
export const getTransactionById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockTransactions.find(t => t.id === parseInt(id));
};

// Thêm giao dịch mới
export const createTransaction = async (transactionData) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const newTransaction = {
    id: Math.max(...mockTransactions.map(t => t.id), 0) + 1,
    ...transactionData,
    date: new Date(transactionData.date),
    createdAt: new Date(),
  };
  
  mockTransactions.push(newTransaction);
  return newTransaction;
};

// Cập nhật giao dịch
export const updateTransaction = async (id, transactionData) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const index = mockTransactions.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    throw new Error('Transaction not found');
  }
  
  mockTransactions[index] = {
    ...mockTransactions[index],
    ...transactionData,
    date: new Date(transactionData.date),
    updatedAt: new Date(),
  };
  
  return mockTransactions[index];
};

// Xóa giao dịch
export const deleteTransaction = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const index = mockTransactions.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    throw new Error('Transaction not found');
  }
  
  mockTransactions.splice(index, 1);
  return { success: true };
};

// Lấy thống kê
export const getStatistics = async (startDate, endDate) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const transactions = await getTransactions({ startDate, endDate });
  
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const savings = income - expense;
  
  // Thống kê theo danh mục
  const categoryStats = {};
  transactions
    .filter(t => t.type === 'expense')
    .forEach(t => {
      categoryStats[t.category] = (categoryStats[t.category] || 0) + t.amount;
    });
  
  return {
    income,
    expense,
    savings,
    categoryStats,
    totalTransactions: transactions.length,
  };
};



