# Git flow

## Git Branch

Dự án áp dụng mô hình quản lý nhánh gồm 3 loại chính: `main`, `dev`, và `feature/*`.  
Mục tiêu là **tách biệt code ổn định, code đang phát triển và code đang làm tính năng**.

---

### 1. Nhánh `main`

**Mục đích**
- Chứa **phiên bản ổn định** của dự án
- Sẵn sàng để deploy lên môi trường production

**Đặc điểm**
- Code trên `main` phải luôn:
  - Build thành công
  - Chạy ổn định
  - Không chứa code thử nghiệm

**Quy tắc**
- Không commit trực tiếp vào `main`
- Chỉ merge từ nhánh `dev`
- Mỗi lần merge vào `main` tương ứng với một version hoặc mốc phát hành

---

### 2. Nhánh `dev`

**Mục đích**
- Là nhánh phát triển chính của dự án
- Dùng để tích hợp các tính năng đã hoàn thành từ các nhánh `feature/*`

**Đặc điểm**
- Code trên `dev`:
  - Có thể chưa hoàn toàn ổn định
  - Nhưng phải build được và chạy được
- Là nơi kiểm tra việc tích hợp nhiều tính năng trước khi đưa lên `main`

**Quy tắc**
- Không commit trực tiếp vào `dev`
- Chỉ merge thông qua Pull Request từ `feature/*`
- Nên pull/rebase thường xuyên để tránh conflict

---

### 3. Nhánh `feature/xxx`

**Mục đích**
- Dùng để phát triển **một tính năng cụ thể** hoặc **phần việc của một người**

**Cách đặt tên**
- Theo chức năng:
  - `feature/login`
  - `feature/user-management`
- Theo người tham gia:
  - `feature/taiphd`

**Đặc điểm**
- Mỗi nhánh chỉ nên tập trung vào **một feature**
- Có thể commit tự do trong quá trình phát triển

**Quy tắc**
- Khi hoàn thành feature:
  - Push code lên repo
  - Tạo Pull Request vào nhánh `dev`
- Sau khi merge:
  - Có thể xóa nhánh `feature/xxx` để tránh repo ngày càng nặng

---

### Luồng làm việc tổng quát

```text
feature/xxx  →  dev  →  main
```
1. Tạo nhánh feature/xxx từ dev

2. Phát triển tính năng trên feature/xxx

3. Tạo Pull Request merge vào dev

4. Khi dev ổn định → merge vào main

### Quy ước commit message
- Viết bằng tiếng Việt

- Tiêu đề ngắn gọn

- Sử dụng tiền tố + tiêu đề khi commit

| Prefix     | Ý nghĩa                                 |
| ---------- | --------------------------------------- |
| `feat`     | Thêm tính năng mới                      |
| `fix`      | Sửa lỗi                                 |
| `refactor` | Tái cấu trúc code, không thay đổi logic |
| `perf`     | Cải thiện hiệu năng                     |
| `style`    | Chỉnh format, không ảnh hưởng logic     |
| `test`     | Thêm hoặc sửa test                      |
| `docs`     | Cập nhật tài liệu                       |
| `chore`    | Công việc phụ trợ (config, build, deps) |
| `ci`       | Thay đổi CI/CD                          |
| `revert`   | Hoàn tác commit trước                   |

#### Ví dụ commit message hợp lệ
- feat: cập nhật login API

- docs: thêm tài liệu git workflow guide