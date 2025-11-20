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
    component: ComponentCreator('/', 'f6d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a41'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'eca'),
            routes: [
              {
                path: '/phan-he-don-tiep/chon-chuc-nang-tiep-don-2',
                component: ComponentCreator('/phan-he-don-tiep/chon-chuc-nang-tiep-don-2', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-benh-nhan',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-benh-nhan', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-danh-sach-y-lenh',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-danh-sach-y-lenh', 'cb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-doi-phong-kham',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-doi-phong-kham', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-ho-so-dieu-tri',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-ho-so-dieu-tri', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-lich-su-dieu-tri',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-lich-su-dieu-tri', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-don-tiep/chuc-nang-sua-yeu-cau-kham',
                component: ComponentCreator('/phan-he-don-tiep/chuc-nang-sua-yeu-cau-kham', 'd65'),
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
                path: '/phan-he-duoc-vat-tu/bao-cao-duoc',
                component: ComponentCreator('/phan-he-duoc-vat-tu/bao-cao-duoc', 'ef7'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/dang-nhap-chon-phong',
                component: ComponentCreator('/phan-he-duoc-vat-tu/dang-nhap-chon-phong', 'e8a'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/danh-sach-lo-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/danh-sach-lo-thuoc-vat-tu', '113'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/danh-sach-loai-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/danh-sach-loai-thuoc-vat-tu', '1c0'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-bu-co-so-tu-truc',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-bu-co-so-tu-truc', 'f9d'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-phieu-nhap-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-phieu-nhap-kho', '452'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/duyet-phieu-tra-noi-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/duyet-phieu-tra-noi-tru', '634'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/kiem-tra-ton-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/kiem-tra-ton-kho', '62d'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/nhap-hang-tu-hoa-don',
                component: ComponentCreator('/phan-he-duoc-vat-tu/nhap-hang-tu-hoa-don', '602'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/quan-ly-thau',
                component: ComponentCreator('/phan-he-duoc-vat-tu/quan-ly-thau', '279'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-loai-thuoc-moi',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-loai-thuoc-moi', '0ad'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-loai-vat-tu-moi',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-loai-vat-tu-moi', '6d4'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/tao-phieu-tra-nha-cung-cap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/tao-phieu-tra-nha-cung-cap', '1f7'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/them-moi-nha-cung-cap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/them-moi-nha-cung-cap', '81a'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/xem-the-kho-lich-su-xuat-nhap',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xem-the-kho-lich-su-xuat-nhap', '385'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-chuyen-kho',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-chuyen-kho', 'f34'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-don-thuoc-ngoai-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-don-thuoc-ngoai-tru', 'd5e'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-khac',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-khac', '0a3'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/xuat-phieu-linh-noi-tru',
                component: ComponentCreator('/phan-he-duoc-vat-tu/xuat-phieu-linh-noi-tru', 'f5d'),
                exact: true
              },
              {
                path: '/phan-he-duoc-vat-tu/y-nghia-thong-tin-thuoc-vat-tu',
                component: ComponentCreator('/phan-he-duoc-vat-tu/y-nghia-thong-tin-thuoc-vat-tu', 'cfb'),
                exact: true
              },
              {
                path: '/phan-he-noi-tru/dang-nhap-chon-buong-benh',
                component: ComponentCreator('/phan-he-noi-tru/dang-nhap-chon-buong-benh', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/giao-dien-buong-benh',
                component: ComponentCreator('/phan-he-noi-tru/giao-dien-buong-benh', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/ket-thuc-dieu-tri',
                component: ComponentCreator('/phan-he-noi-tru/ket-thuc-dieu-tri', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-noi-tru/mot-so-loi-thuong-gap',
                component: ComponentCreator('/phan-he-noi-tru/mot-so-loi-thuong-gap', '4e0'),
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
                path: '/phan-he-noi-tru/xu-ly-dieu-tri',
                component: ComponentCreator('/phan-he-noi-tru/xu-ly-dieu-tri', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chuc-nang-danh-sach-y-lenh',
                component: ComponentCreator('/phan-he-phong-kham/chuc-nang-danh-sach-y-lenh', '083'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chuc-nang-ho-so-dieu-tri',
                component: ComponentCreator('/phan-he-phong-kham/chuc-nang-ho-so-dieu-tri', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chuc-nang-lich-su-dieu-tri',
                component: ComponentCreator('/phan-he-phong-kham/chuc-nang-lich-su-dieu-tri', '82b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chuc-nang-man-hinh-cho',
                component: ComponentCreator('/phan-he-phong-kham/chuc-nang-man-hinh-cho', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/chuc-nang-sua-yeu-cau-kham',
                component: ComponentCreator('/phan-he-phong-kham/chuc-nang-sua-yeu-cau-kham', '850'),
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
                path: '/phan-he-phong-kham/giao-dien-phong-kham',
                component: ComponentCreator('/phan-he-phong-kham/giao-dien-phong-kham', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-phong-kham/xu-ly-kham',
                component: ComponentCreator('/phan-he-phong-kham/xu-ly-kham', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phan-he-thu-ngan/bao-cao-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/bao-cao-vien-phi', 'a42'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/dang-nhap-chon-phong-thu-ngan',
                component: ComponentCreator('/phan-he-thu-ngan/dang-nhap-chon-phong-thu-ngan', 'a27'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/duyet-khoa-bao-hiem',
                component: ComponentCreator('/phan-he-thu-ngan/duyet-khoa-bao-hiem', 'c4b'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/gioi-thieu-man-hinh-thu-ngan',
                component: ComponentCreator('/phan-he-thu-ngan/gioi-thieu-man-hinh-thu-ngan', '7bf'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/huy-giao-dich',
                component: ComponentCreator('/phan-he-thu-ngan/huy-giao-dich', '3b1'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/khoa-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/khoa-vien-phi', '37b'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/lich-su-giao-dich',
                component: ComponentCreator('/phan-he-thu-ngan/lich-su-giao-dich', '048'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/mien-giam',
                component: ComponentCreator('/phan-he-thu-ngan/mien-giam', '34d'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/mo-khoa-ho-so',
                component: ComponentCreator('/phan-he-thu-ngan/mo-khoa-ho-so', '462'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/tao-so-bien-lai-hoa-don',
                component: ComponentCreator('/phan-he-thu-ngan/tao-so-bien-lai-hoa-don', 'a7d'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/thao-tac-thanh-toan',
                component: ComponentCreator('/phan-he-thu-ngan/thao-tac-thanh-toan', '830'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/tim-kiem-benh-nhan',
                component: ComponentCreator('/phan-he-thu-ngan/tim-kiem-benh-nhan', '0b7'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/xem-bang-ke-chi-phi',
                component: ComponentCreator('/phan-he-thu-ngan/xem-bang-ke-chi-phi', '74b'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/y-nghia-mau-sac-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/y-nghia-mau-sac-vien-phi', '406'),
                exact: true
              },
              {
                path: '/phan-he-thu-ngan/y-nghia-thong-tin-chi-tiet-vien-phi',
                component: ComponentCreator('/phan-he-thu-ngan/y-nghia-thong-tin-chi-tiet-vien-phi', '761'),
                exact: true
              },
              {
                path: '/su-dung-vat-tu-tai-su-dung',
                component: ComponentCreator('/su-dung-vat-tu-tai-su-dung', '325'),
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
