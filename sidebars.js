/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Phân hệ đón tiếp',
      items: [
        // Mục 1: Đặt mục "Giao diện và Đăng nhập" lên trên cùng
        'phan-he-don-tiep/giao-dien-va-dang-nhap',

        // Mục 2: Đặt mục "Ý nghĩa" ở vị trí thứ hai
        'phan-he-don-tiep/y-nghia-chuc-nang-phan-mem',
      ],
    },
  ],
};

module.exports = sidebars;