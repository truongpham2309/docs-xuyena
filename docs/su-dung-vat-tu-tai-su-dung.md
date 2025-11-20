---
sidebar_label: 'Sử dụng vật tư tái sử dụng'
title: 'Hướng dẫn Sử dụng vật tư tái sử dụng'
---

# Hướng dẫn Sử dụng vật tư tái sử dụng

## 1. Cấu hình danh mục vật tư

Trong danh mục vật tư, cần thiết lập các dữ liệu sau:

- **Check là VT đích danh:** Để quản lý vật tư theo số seri.
- **Check là VT TSD:** Đánh dấu đây là vật tư tái sử dụng.
- **Chi phí vệ sinh:** Chi phí hấp sấy cho một lần sử dụng.
- **SL tái SD tối đa:** Số lần sử dụng tối đa của vật tư.
- **SL tái SD tính giá:** Cơ chế tính giá trên bảng kê của vật tư tái sử dụng.
  > Giá thanh toán = (Giá vật tư / SL tái SD tính giá) + Chi phí vệ sinh
- **Trần BHYT:** Trần BHYT thanh toán trong một lần sử dụng của vật tư.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image1.png" alt="Cấu hình danh mục vật tư" />
</div>

## 2. Nhập tồn kho vật tư

- **Nhập thuốc vật tư:** Tiến hành nhập kho như bình thường.
- **Duyệt và Thực nhập phiếu nhập:**
  - Check vào ô **“Tự động sinh số seri theo mã vật tư và năm tạo phiếu nhập”** để phần mềm tự động tạo số seri theo quy tắc: `Mã vật tư` + `Năm tạo phiếu nhập` + `STT tăng dần`.
  - Lưu và in tem theo số seri đã tạo.

> **Lưu ý:** Sau khi thực nhập, cần kiểm tra lại **Danh sách lô** và **Chính sách giá vật tư**.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image2.png" alt="Nhập tồn kho vật tư" />
</div>

## 3. Phòng mổ tạo phiếu yêu cầu chuyển kho

- Đi đến **Tủ trực vật tư tái sử dụng** -> **Nhập xuất tồn** -> **Xuất chuyển kho**.
- Tạo phiếu yêu cầu và in phiếu để lĩnh từ kho vật tư.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image3.png" alt="Phòng mổ tạo phiếu yêu cầu chuyển kho" />
</div>

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image4.png" alt="Phòng mổ tạo phiếu yêu cầu chuyển kho" />
</div>

## 4. Kho vật tư duyệt phiếu yêu cầu của Phòng mổ

- **Kho Vật tư:** Thực hiện **Duyệt phiếu** và **Thực xuất**.
- **Tủ trực vật tư tái sử dụng (Phòng mổ):** Kiểm tra lại phiếu nhập và tồn kho sau khi kho chính đã xuất.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image5.png" alt="Kho vật tư duyệt phiếu yêu cầu của Phòng mổ" />
</div>

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image6.png" alt="Kho vật tư duyệt phiếu yêu cầu của Phòng mổ" />
</div>

## 5. Kê đơn vật tư tái sử dụng

- Trong giao diện kê đơn, chọn **Tủ trực vật tư tái sử dụng**.
- Chuyển sang tab **Vật tư đích danh – TSD**.
- Chọn vật tư cần kê và nhấn **Lưu**.

> **Ghi chú:** Khi kê vật tư, hệ thống sẽ hiển thị số seri và số lần tái sử dụng còn lại của vật tư đó.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image7.png" alt="Kê đơn vật tư tái sử dụng" />
</div>

## 6. In tem mới cho lần tái sử dụng tiếp theo

- Vào **Danh sách y lệnh**.
- Chuột phải vào y lệnh **Đơn tủ trực** vừa kê.
- Chọn **In tem vật tư tái sử dụng**.

> **Lưu ý:** Tem này cần được để riêng với vật tư đã sử dụng khi chuyển xuống Khoa Kiểm soát nhiễm khuẩn (KSNK).

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image8.png" alt="In tem mới cho lần tái sử dụng tiếp theo" />
</div>

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image9.png" alt="In tem mới cho lần tái sử dụng tiếp theo" />
</div>

## 7. Nhập vật tư tái sử dụng

Sau khi Khoa KSNK hoàn tất công đoạn hấp sấy, vệ sinh và dán tem mới, vật tư sẽ được trả về Phòng mổ. Phòng mổ tiến hành nhập lại vật tư vào kho.

- Vào **Tủ vật tư tái sử dụng** -> **Thuốc VT Máu** -> **Nhập tái sử dụng**.
- Quét hoặc nhập số seri của vật tư cần nhập lại.
- Nhấn **Thêm** và sau đó **Lưu**.

> **Ghi chú:** Màn hình **Nhập tái sử dụng** cho phép người dùng theo dõi số lần sử dụng tối đa, số lần đã dùng và số lần còn lại của vật tư. Sau khi nhập, cần kiểm tra lại tồn kho của tủ trực.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image10.png" alt="Nhập vật tư tái sử dụng" />
</div>

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image11.png" alt="Nhập vật tư tái sử dụng" />
</div>

## 8. Kiểm tra bảng kê thanh toán

Cần kiểm tra lại bảng kê chi phí của bệnh nhân tại thời điểm kê đơn và lúc thanh toán viện phí để đảm bảo giá vật tư tái sử dụng được tính toán chính xác theo công thức đã thiết lập.

<div className="center-container">
  <img src="/img/su-dung-vat-tu-tai-su-dung/image12.png" alt="Kiểm tra bảng kê thanh toán" />
</div>