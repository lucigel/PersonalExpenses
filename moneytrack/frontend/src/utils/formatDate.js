/**
 * Format ngày tháng thành định dạng Việt Nam
 * @param {Date|string} date - Ngày cần format
 * @param {string} format - Định dạng (mặc định: 'DD/MM/YYYY')
 * @returns {string} - Chuỗi ngày đã format
 */
export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) return '';

  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  switch (format) {
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'DD/MM/YYYY HH:mm':
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    case 'HH:mm':
      return `${hours}:${minutes}`;
    default:
      return `${day}/${month}/${year}`;
  }
};

/**
 * Lấy ngày đầu tháng
 * @param {Date} date - Ngày tham chiếu
 * @returns {Date} - Ngày đầu tháng
 */
export const getStartOfMonth = (date = new Date()) => {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Lấy ngày cuối tháng
 * @param {Date} date - Ngày tham chiếu
 * @returns {Date} - Ngày cuối tháng
 */
export const getEndOfMonth = (date = new Date()) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  d.setHours(23, 59, 59, 999);
  return d;
};

/**
 * Tính số ngày giữa 2 ngày
 * @param {Date} date1 - Ngày đầu
 * @param {Date} date2 - Ngày cuối
 * @returns {number} - Số ngày
 */
export const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
};

/**
 * Kiểm tra xem ngày có trong tháng hiện tại không
 * @param {Date} date - Ngày cần kiểm tra
 * @returns {boolean}
 */
export const isCurrentMonth = (date) => {
  const now = new Date();
  const d = new Date(date);
  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
};

/**
 * Format ngày thành text thân thiện (Hôm nay, Hôm qua, ...)
 * @param {Date|string} date - Ngày cần format
 * @returns {string}
 */
export const formatDateFriendly = (date) => {
  if (!date) return '';
  
  const d = new Date(date);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  
  const diffTime = targetDate - today;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Hôm nay';
  if (diffDays === -1) return 'Hôm qua';
  if (diffDays === 1) return 'Ngày mai';
  if (diffDays > 1 && diffDays <= 7) return `${diffDays} ngày tới`;
  if (diffDays < -1 && diffDays >= -7) return `${Math.abs(diffDays)} ngày trước`;
  
  return formatDate(d);
};



