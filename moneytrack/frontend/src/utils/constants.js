// Các hằng số dùng chung trong ứng dụng

// Danh mục chi tiêu
export const EXPENSE_CATEGORIES = [
  { id: 'food', name: 'Ăn uống', icon: '🍔', color: '#FF6B6B' },
  { id: 'transport', name: 'Giao thông', icon: '🚗', color: '#4ECDC4' },
  { id: 'shopping', name: 'Mua sắm', icon: '🛍️', color: '#95E1D3' },
  { id: 'bills', name: 'Hóa đơn', icon: '📄', color: '#F38181' },
  { id: 'entertainment', name: 'Giải trí', icon: '🎬', color: '#AA96DA' },
  { id: 'health', name: 'Sức khỏe', icon: '💊', color: '#FCBAD3' },
  { id: 'education', name: 'Giáo dục', icon: '📚', color: '#A8E6CF' },
  { id: 'other', name: 'Khác', icon: '📦', color: '#D3D3D3' },
  { id: 'dream hobbies', name: 'Sở thích trong mơ',  icon: '💭', color:'#'}
];

// Danh mục thu nhập
export const INCOME_CATEGORIES = [
  { id: 'salary', name: 'Lương', icon: '💰', color: '#51CF66' },
  { id: 'bonus', name: 'Thưởng', icon: '🎁', color: '#FFD93D' },
  { id: 'investment', name: 'Đầu tư', icon: '📈', color: '#6BCB77' },
  { id: 'other', name: 'Khác', icon: '💵', color: '#95E1D3' },
];

// Loại giao dịch
export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
};

// Màu sắc theme
export const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  success: '#51CF66',
  danger: '#FF6B6B',
  warning: '#FFD93D',
  info: '#4ECDC4',
  light: '#F8F9FA',
  dark: '#212529',
};

// Định dạng ngày tháng
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  FULL: 'DD/MM/YYYY HH:mm',
};

