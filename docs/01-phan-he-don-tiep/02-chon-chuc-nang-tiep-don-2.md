---
sidebar_label: '2. Chọn chức năng Tiếp đón 2'
title: 'Chọn chức năng Tiếp đón 2'
sidebar_position: 2
---

# Giới thiệu ý nghĩa chức năng phần mềm.

## 1. Chức năng Tiếp đón 2 (Đăng ký khám bệnh)

- Click vào nút Đăng ký thông tin bệnh nhân khám

<div className="center-container">
  <img src="/img/dang-ky-thong-tin-benh-nhan-kham.png" alt="Đăng ký thông tin bệnh nhân khám" />
</div>

### Dùng máy đọc mã vạch
Đưa con trỏ chuột vào đúng ô mô tả trên hình, đưa thẻ vào máy đọc mã vạch, toàn bộ thông tin BHYT của BN sẽ được load ra:
- Dùng nhiều phương pháp để tiếp đón: "mã bệnh nhân", "CMND/CCCD", thẻ bhyt....
- Với BN quay lại viện điều trị lần 2. Có thể dùng mã bệnh nhân để đăng ký nhanh cho bệnh nhân.
<div className="center-container">
  <img src="/img/dung-may-doc-ma-vach.jpg" alt="Dùng máy đọc mã vạch" />
</div>

### Dùng máy quét thẻ BHYT
<div className="center-container">
  <img src="/img/dung-may-quet-the-bhyt.jpg" alt="Dùng máy quét thẻ BHYT" />
</div>

### Lưu ý bệnh nhân BHYT có giấy giới thiệu, chuyển tuyến
- Bệnh nhân giới thiệu sẽ phải nhập đầy đủ thông tin chuyển tuyến.
<div className="center-container">
  <img src="/img/giao-dien-chuyen-tuyen.jpg" alt="Chức năng chuyển tuyến" />
</div>

## 2.	Hướng dẫn chuyển đổi thông tin hành chánh từ 3 cấp sang 2 cấp:
**Bước 1: ** Tìm thông tin địa chỉ hành chánh 2 cấp mã Tỉnh, Xã mới ban hành.
-	Truy cập vào  website:  https://address-converter.io.vn/
-	Nhập thông tin địa chỉ hành chánh 3 cấp cũ 
<div className="center-container">
  <img src="/img/nhap-thong-tin-dia-chi-hanh-chinh-3-cap-cu.jpg" alt="Nhập thông tin địa chỉ hành chánh 3 cấp cũ" />
</div>
Nhập xong click chuột vào Chuyển đổi địa chỉ
<div className="center-container">
  <img src="/img/ket-qua-chuyen-doi.jpg" alt="Kết quả chuyển đổi địa chỉ" />
</div>
**Bước 2:** Đón tiếp BN chuyển đổi hành chính từ 3 cấp sang 2 cấp.
-	Nhấp chuột và kéo thanh chuyển đổi sang phải như trên hình và chọn Có
<div className="center-container">
  <img src="/img/chuyen-doi-hanh-chinh-tu-3-cap-sang-2-cap.jpg" alt="Chuyển đổi hành chính từ 3 cấp sang 2 cấp" />
</div>
-	Khi kéo thanh sang phải thành công sẽ hiển thị màu xanh và chỉ còn hiển thị ô Tỉnh và Xã.
<div className="center-container">
  <img src="/img/chuyen-doi-hanh-chinh-tu-2-cap-sang-3-cap.jpg" alt="Chuyển đổi hành chính từ 2 cấp sang 3 cấp" />
</div>
-	Sau đó copy mã Tỉnh và mã Xã trên website vừa chuyễn đỗi vào từng ô tương ứng vào phần mềm HisPro. Ô địa chỉ thẻ BHYT sẽ tự động cập nhật địa chỉ hành chính.

## 3.	Check thông tin BN với cổng giám định BHYT:
Khi nhập đầy đủ thông tin của bệnh nhân sẽ hiển thị thẻ có hợp lệ hay không:
<div className="center-container">
  <img src="/img/kiem-tra-thong-tin-tren-cong-giam-dinh.jpg" alt="Kiểm tra thông tin bệnh nhân với công giám đinh BHYT" />
</div>
- Nếu sai thông tin màn hình sẽ hiển thị thông báo cập nhật lại thông tin trên cổng thông tin
- Người dùng “click” vào đồng ý để cập nhật.
<div className="center-container">
  <img src="/img/ket-qua-thong-tin-tren-cong-giam-dinh.jpg" alt="Kết quả thẻ hợp lệ" />
</div>
- Nếu hợp lệ sẽ hiện thị Thẻ hợp lệ. 
- Sau đó sẽ sử dụng nút **Lưu** hoặc **Ctrl + S** để hoàn thành đăng ký 1 bệnh nhân.
**Lưu ý :** Đối với bệnh nhân dịch vụ trực tiếp không qua phòng khám sau khi nhấn nút **Lưu** hoặc **Ctrl + S**  có thể sử dụng nút nút **Chỉ định** hoặc **Ctrl + D** để chỉ định dịch vụ
<div className="center-container">
  <img src="/img/chi-dinh-dich-vu.jpg" alt="Chỉ định dịch vụ" />
</div>
Chỉ định trực tiếp không cần nhập ICD chính và phụ

## 4.	Chức năng Bệnh nhân: 
Danh sách bệnh nhân
Là chức năng chỉnh sửa bổ sung thông tin hồ sơ hành chính của bệnh nhân : Họ tên, tuổi, địa chỉ, số điện thoại, nghề nghiệp, đơn vị công tác, người thân ….

## 5.	Cập nhật thẻ

Là chức năng tìm kiếm để chỉnh sửa thông tin thẻ BHYT của bệnh nhân.
## 6.	Chức năng Danh sách y lệnh:

Là chức năng tra cứu, chỉnh sửa , xóa các yêu cầu dịch vụ do bộ phận tiếp đón tạo ra.
## 7.	Chức năng Đổi phòng khám:

Là chức năng để đổi lại phòng khám của yêu cầu khám đã đăng ký. (ví dụ: Khám ngoại tiết niệu ở phòng khám 1 => phòng khám 2)
## 8.	Chức năng Hồ sơ điều trị:

Là chức năng quan trọng của phần mềm. Hồ sơ điều trị là nơi tra cứu, tìm kiếm từng đợt điều trị của bệnh nhân, xem y bạ điện tử, bảng kê chi phí, lịch sử điều trị ..v..v
## 9.	Chức năng Lịch sử điều trị:

Là chức năng tra cứu lịch sử điều trị trên phần mềm của một hay nhiều bệnh nhân.
## 10.	Chức năng Sửa yêu cầu khám:

Là chức năng thay đổi yêu cầu khám của người bệnh (ví dụ Khám Nội => Khám ngoại)
