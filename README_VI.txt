HƯỚNG DẪN ĐĂNG WEBSITE ANBAO STUDIO LÊN GITHUB PAGES

1. MỞ FILE config.js VÀ SỬA 3 CHỖ:
   - supportEmail: thay YOUR_EMAIL@gmail.com bằng email hỗ trợ thật.
   - developerWebsite: thay YOUR_GITHUB_USERNAME bằng username GitHub.
   - playStoreUrl: thay dấu # bằng link Google Play khi game có link công khai.

2. TẠO REPOSITORY GITHUB:
   - Nếu username GitHub là thanh123 thì repository phải tên:
     thanh123.github.io
   - Chọn Public.
   - Không cần tạo README vì bộ website này đã có sẵn file.

3. UPLOAD TOÀN BỘ NỘI DUNG BÊN TRONG THƯ MỤC:
   - index.html
   - privacy.html
   - terms.html
   - contact.html
   - config.js
   - app-ads.txt
   - thư mục assets
   - thư mục games

4. BẬT GITHUB PAGES:
   Settings > Pages > Deploy from a branch
   Branch: main
   Folder: /root
   Sau đó bấm Save.

5. KIỂM TRA:
   https://YOUR_GITHUB_USERNAME.github.io
   https://YOUR_GITHUB_USERNAME.github.io/app-ads.txt

6. CẬP NHẬT GOOGLE PLAY:
   Play Console > Store settings / Thông tin liên hệ của nhà phát triển
   Website:
   https://YOUR_GITHUB_USERNAME.github.io

7. QUAY LẠI ADMOB:
   app-ads.txt > Kiểm tra để tìm bản cập nhật.

CÁCH UPDATE SAU NÀY:
- Vào repository GitHub.
- Bấm file muốn sửa.
- Bấm biểu tượng bút chì.
- Sửa nội dung.
- Bấm Commit changes.
- Website tự cập nhật sau khoảng 1–5 phút.

LƯU Ý:
- app-ads.txt phải nằm ở thư mục gốc, ngang hàng với index.html.
- Không đổi nội dung app-ads.txt trừ khi AdMob đưa mã mới.
- Privacy Policy hiện là mẫu chung. Khi game thêm đăng nhập, thu thập email,
  vị trí chính xác, dữ liệu trẻ em hoặc dịch vụ mới, cần cập nhật lại chính sách.