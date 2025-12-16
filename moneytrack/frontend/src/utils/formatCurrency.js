/**
 * Format số tiền thành định dạng tiền tệ Việt Nam
 * @param {number} amount - Số tiền cần format
 * @param {string} currency - Loại tiền tệ (mặc định: 'VND')
 * @returns {string} - Chuỗi đã format (ví dụ: "100.000 đ")
 */
export const formatCurrency = (amount, currency = 'vi-VN') => {
    if(amount == null || amount == 'undefined' || amount == ''){
      return '0 đ'
    };
    const numAmount = Number(amount);

    const formatAmount = new Intl.NumberFormat(
      currency, 
      {
        minimumFractionDigits:0, 
        maximumFractionDigits: 0
      }
    ).format(numAmount);
    return `${formatAmount} đ`
}

/**
 * Parse chuỗi tiền tệ thành sốa
 * @param {string} currencyString - Chuỗi tiền tệ (ví dụ: "100.000 đ")
 * @returns {number} - Số tiền
 */
export const parseCurrency = (currencyString) => {
  if (!currencyString) return 0;
  
  // Loại bỏ tất cả ký tự không phải số
  const numberString = currencyString.replace(/[^\d]/g, '');
  return parseInt(numberString, 10) || 0;
};

/**
 * Format số tiền ngắn gọn (ví dụ: 1.5K, 1.2M)
 * @param {number} amount - Số tiền
 * @returns {string} - Chuỗi đã format
 */
export const formatCurrencyShort = (amount) => {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M đ`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}K đ`;
  }
  return `${amount} đ`;
};




