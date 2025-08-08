import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f35'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c38'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '146'),
            routes: [
              {
                path: '/phan-he-don-tiep/cac-canh-bao-khi-tiep-don',
                component: ComponentCreator('/phan-he-don-tiep/cac-canh-bao-khi-tiep-don', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chinh-sua-thong-tin-hanh-chinh',
                component: ComponentCreator('/phan-he-don-tiep/chinh-sua-thong-tin-hanh-chinh', 'a40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chinh-sua-xoa-ho-so',
                component: ComponentCreator('/phan-he-don-tiep/chinh-sua-xoa-ho-so', '3a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chon-chuc-nang-tiep-don-2',
                component: ComponentCreator('/phan-he-don-tiep/chon-chuc-nang-tiep-don-2', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/dang-nhap-chon-phong-tiep-don',
                component: ComponentCreator('/phan-he-don-tiep/dang-nhap-chon-phong-tiep-don', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/in-lai-phieu-kham',
                component: ComponentCreator('/phan-he-don-tiep/in-lai-phieu-kham', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/nhap-thong-tin-bo-sung',
                component: ComponentCreator('/phan-he-don-tiep/nhap-thong-tin-bo-sung', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/tiep-don-benh-nhan-bhyt',
                component: ComponentCreator('/phan-he-don-tiep/tiep-don-benh-nhan-bhyt', '646'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/tiep-don-benh-nhan-khong-bhyt',
                component: ComponentCreator('/phan-he-don-tiep/tiep-don-benh-nhan-khong-bhyt', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/xem-tinh-trang-phong-kham',
                component: ComponentCreator('/phan-he-don-tiep/xem-tinh-trang-phong-kham', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/bao-cao-duoc',
                component: ComponentCreator('/phan-he-duoc-vat-tu/bao-cao-duoc', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/dang-nhap-chon-phong',
                component: ComponentCreator('/phan-he-duoc-vat-tu/dang-nhap-chon-phong', '123'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/danh-sach-lo-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/danh-sach-lo-thuoc-vat-tu', '91d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/danh-sach-loai-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/danh-sach-loai-thuoc-vat-tu', '115'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-bu-co-so-tu-truc',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-bu-co-so-tu-truc', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-phieu-nhap-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-phieu-nhap-kho', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-phieu-tra-noi-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-phieu-tra-noi-tru', 'd92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/kiem-tra-ton-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/kiem-tra-ton-kho', 'e7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/nhap-hang-tu-hoa-don',
                component: ComponentCreator('/phan-he-duoc-vat-tu/nhap-hang-tu-hoa-don', '1da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/quan-ly-thau',
                component: ComponentCreator('/phan-he-duoc-vat-tu/quan-ly-thau', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-loai-thuoc-moi',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-loai-thuoc-moi', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-loai-vat-tu-moi',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-loai-vat-tu-moi', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-phieu-tra-nha-cung-cap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-phieu-tra-nha-cung-cap', 'cae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/them-moi-nha-cung-cap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/them-moi-nha-cung-cap', 'eb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/xem-the-kho-lich-su-xuat-nhap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xem-the-kho-lich-su-xuat-nhap', 'f19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-chuyen-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-chuyen-kho', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-don-thuoc-ngoai-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-don-thuoc-ngoai-tru', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-khac',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-khac', '1b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-phieu-linh-noi-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-phieu-linh-noi-tru', 'a21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-duoc-vat-tu/y-nghia-thong-tin-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/y-nghia-thong-tin-thuoc-vat-tu', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/bien-ban-hoi-chan',
                component: ComponentCreator('/phan-he-noi-tru/bien-ban-hoi-chan', '139'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/cac-chuc-nang-khac',
                component: ComponentCreator('/phan-he-noi-tru/cac-chuc-nang-khac', 'af1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/cap-nhat-doi-tuong-benh-nhan',
                component: ComponentCreator('/phan-he-noi-tru/cap-nhat-doi-tuong-benh-nhan', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/chi-dinh-dich-vu-ky-thuat',
                component: ComponentCreator('/phan-he-noi-tru/chi-dinh-dich-vu-ky-thuat', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/chon-phong-lam-viec',
                component: ComponentCreator('/phan-he-noi-tru/chon-phong-lam-viec', 'a0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/chuyen-khoa',
                component: ComponentCreator('/phan-he-noi-tru/chuyen-khoa', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/cong-khai-dich-vu',
                component: ComponentCreator('/phan-he-noi-tru/cong-khai-dich-vu', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/dang-nhap-dang-xuat-doi-mat-khau',
                component: ComponentCreator('/phan-he-noi-tru/dang-nhap-dang-xuat-doi-mat-khau', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/ke-don-thuoc',
                component: ComponentCreator('/phan-he-noi-tru/ke-don-thuoc', 'da9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/ke-ngay-giuong',
                component: ComponentCreator('/phan-he-noi-tru/ke-ngay-giuong', '250'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/ke-vat-tu-hao-phi-pttt',
                component: ComponentCreator('/phan-he-noi-tru/ke-vat-tu-hao-phi-pttt', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/ket-thuc-dieu-tri',
                component: ComponentCreator('/phan-he-noi-tru/ket-thuc-dieu-tri', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/lam-benh-an',
                component: ComponentCreator('/phan-he-noi-tru/lam-benh-an', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/linh-hao-phi-khoa-phong',
                component: ComponentCreator('/phan-he-noi-tru/linh-hao-phi-khoa-phong', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/man-hinh-buong-benh',
                component: ComponentCreator('/phan-he-noi-tru/man-hinh-buong-benh', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/nhap-thong-tin-pttt',
                component: ComponentCreator('/phan-he-noi-tru/nhap-thong-tin-pttt', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/quan-ly-thuoc-tu-truc',
                component: ComponentCreator('/phan-he-noi-tru/quan-ly-thuoc-tu-truc', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/quan-ly-y-lenh',
                component: ComponentCreator('/phan-he-noi-tru/quan-ly-y-lenh', 'b79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/tao-phieu-tra',
                component: ComponentCreator('/phan-he-noi-tru/tao-phieu-tra', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/tao-to-dieu-tri',
                component: ComponentCreator('/phan-he-noi-tru/tao-to-dieu-tri', 'e63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/tiep-nhan-benh-nhan-vao-khoa',
                component: ComponentCreator('/phan-he-noi-tru/tiep-nhan-benh-nhan-vao-khoa', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/tong-hop-phieu-linh',
                component: ComponentCreator('/phan-he-noi-tru/tong-hop-phieu-linh', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/xem-va-in-bang-ke',
                component: ComponentCreator('/phan-he-noi-tru/xem-va-in-bang-ke', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chi-dinh-can-lam-sang',
                component: ComponentCreator('/phan-he-phong-kham/chi-dinh-can-lam-sang', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/dang-nhap-chon-phong-kham',
                component: ComponentCreator('/phan-he-phong-kham/dang-nhap-chon-phong-kham', '3a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/goi-benh-nhan-theo-stt',
                component: ComponentCreator('/phan-he-phong-kham/goi-benh-nhan-theo-stt', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/hen-kham-va-giay-to-bhxh',
                component: ComponentCreator('/phan-he-phong-kham/hen-kham-va-giay-to-bhxh', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/in-lai-phieu-chi-dinh-don-thuoc',
                component: ComponentCreator('/phan-he-phong-kham/in-lai-phieu-chi-dinh-don-thuoc', '6d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/ke-don-thuoc',
                component: ComponentCreator('/phan-he-phong-kham/ke-don-thuoc', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/mau-sac-va-bieu-tuong',
                component: ComponentCreator('/phan-he-phong-kham/mau-sac-va-bieu-tuong', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/mo-lai-ho-so',
                component: ComponentCreator('/phan-he-phong-kham/mo-lai-ho-so', 'ddb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/sua-xoa-chi-dinh-don-thuoc',
                component: ComponentCreator('/phan-he-phong-kham/sua-xoa-chi-dinh-don-thuoc', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/tao-mau-xu-ly-kham',
                component: ComponentCreator('/phan-he-phong-kham/tao-mau-xu-ly-kham', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/xem-ket-qua-can-lam-sang',
                component: ComponentCreator('/phan-he-phong-kham/xem-ket-qua-can-lam-sang', 'a19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/xem-lich-su-dieu-tri',
                component: ComponentCreator('/phan-he-phong-kham/xem-lich-su-dieu-tri', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/xu-ly-kham-va-chan-doan',
                component: ComponentCreator('/phan-he-phong-kham/xu-ly-kham-va-chan-doan', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/xu-tri-sau-kham',
                component: ComponentCreator('/phan-he-phong-kham/xu-tri-sau-kham', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/bao-cao-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/bao-cao-vien-phi', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/dang-nhap-chon-phong-thu-ngan',
                component: ComponentCreator('/phan-he-thu-ngan/dang-nhap-chon-phong-thu-ngan', '73b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/duyet-khoa-bao-hiem',
                component: ComponentCreator('/phan-he-thu-ngan/duyet-khoa-bao-hiem', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/gioi-thieu-man-hinh-thu-ngan',
                component: ComponentCreator('/phan-he-thu-ngan/gioi-thieu-man-hinh-thu-ngan', 'c42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/huy-giao-dich',
                component: ComponentCreator('/phan-he-thu-ngan/huy-giao-dich', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/khoa-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/khoa-vien-phi', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/lich-su-giao-dich',
                component: ComponentCreator('/phan-he-thu-ngan/lich-su-giao-dich', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/mien-giam',
                component: ComponentCreator('/phan-he-thu-ngan/mien-giam', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/mo-khoa-ho-so',
                component: ComponentCreator('/phan-he-thu-ngan/mo-khoa-ho-so', 'b21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/tao-so-bien-lai-hoa-don',
                component: ComponentCreator('/phan-he-thu-ngan/tao-so-bien-lai-hoa-don', '262'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/thao-tac-thanh-toan',
                component: ComponentCreator('/phan-he-thu-ngan/thao-tac-thanh-toan', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/tim-kiem-benh-nhan',
                component: ComponentCreator('/phan-he-thu-ngan/tim-kiem-benh-nhan', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/xem-bang-ke-chi-phi',
                component: ComponentCreator('/phan-he-thu-ngan/xem-bang-ke-chi-phi', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/y-nghia-mau-sac-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/y-nghia-mau-sac-vien-phi', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/y-nghia-thong-tin-chi-tiet-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/y-nghia-thong-tin-chi-tiet-vien-phi', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
