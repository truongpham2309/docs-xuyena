/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Phân hệ đón tiếp',
      items: [
        'phan-he-don-tiep/giao-dien-va-dang-nhap',
        'phan-he-don-tiep/y-nghia-chuc-nang-phan-mem',
        'phan-he-don-tiep/tiep-don-benh-nhan-bhyt',
        'phan-he-don-tiep/tiep-don-benh-nhan-khong-co-the-bhyt',
        'phan-he-don-tiep/xem-tinh-trang-cac-phong-kham',
        'phan-he-don-tiep/nhap-cac-thong-tin-lien-quan',
        'phan-he-don-tiep/chinh-sua-thong-tin-hanh-chinh',
        'phan-he-don-tiep/canh-bao-khi-tiep-don',
        'phan-he-don-tiep/chinh-sua-phong-kham',
        'phan-he-don-tiep/in-lai-phieu-kham',          
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ thu ngân',
      items: [
        'phan-he-thu-ngan/dang-nhap-chon-phong-thu-ngan',
        'phan-he-thu-ngan/gioi-thieu-chung-mang-hinh-thu-ngan',
        'phan-he-thu-ngan/cac-truong-loc-tim-kiem-bn-quet-ma-qrcode',
        'phan-he-thu-ngan/y-nghia-cac-mau-tai-man-hinh-vien-phi-duyet-bhyt',
        'phan-he-thu-ngan/y-nghia-cac-thong-tin-tai-man-hinh-chi-tiet-vien-phi',
        'phan-he-thu-ngan/cac-thao-tac-thu-ngan',
        'phan-he-thu-ngan/khoa-vien-phi',
        'phan-he-thu-ngan/duyet-khoa-BH',
        'phan-he-thu-ngan/kiem-tra-lich-su-giao-dich',
        'phan-he-thu-ngan/xem-bang-ke-chi-phi',
        'phan-he-thu-ngan/huy-giao-dich-in-phieu-tuong-ung',
        'phan-he-thu-ngan/mien-giam-khi-thanh-toan-tien',
        'phan-he-thu-ngan/thao-tac-khoa-mo-bh-vien-phi',
        'phan-he-thu-ngan/bao-cao',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ phòng khám',
      items: [
        'phan-he-phong-kham/dang-nhap-chon-phong-kham',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ nội trú',
      items: [
        'phan-he-noi-tru/dang-nhap-dang-xuat-doi-mat-khau',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ dược / vật tư',
      items: [
        'phan-he-duoc-vat-tu/dang-nhap-chon-phong'
      ],
    },
  ],
};

module.exports = sidebars;