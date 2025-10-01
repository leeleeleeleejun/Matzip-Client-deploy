export const requests = [
  {
    placeId: 1,
    placeName: '우돈탄 다산본점',
    categories: [
      { id: 3, name: '한식', iconKey: 'korean' },
      { id: 14, name: '고기·구이', iconKey: 'meat' },
    ],
    requestDate: '2025-09-15',
    registerStatus: 'APPROVED',
  },
  {
    placeId: 2,
    placeName: '김밥천국',
    categories: [
      { id: 3, name: '분식', iconKey: 'bunsik' },
      { id: 14, name: '고기·구이', iconKey: 'meat' },
    ],
    requestDate: '2025-09-15',
    registerStatus: 'PENDING',
  },
  {
    placeId: 3,
    placeName: '디진다 짬뽕',
    categories: [
      { id: 3, name: '중식', iconKey: 'chinese' },
      { id: 14, name: '일식', iconKey: 'japanese' },
    ],
    requestDate: '2025-09-15',
    registerStatus: 'REJECTED',
  },
]

export const requestDetail = {
  placeId: 1,
  placeName: '우돈탄 다산본점',
  photos: [
    {
      photoId: 101,
      photoUrl:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211025_113%2F1635154893487eIc0z_JPEG%2FbPjCPpI1NOW3XI2xDY6PFrQP.jpg',
      displayOrder: 0,
    },
    {
      photoId: 102,
      photoUrl:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA3MjNfNzkg%2FMDAxNzUzMjYzMDcwMDI4.YZPG9RYk5jn6jJtaNcaba70NF9uqeD_o8hY4xJ9xc6Eg.mMpLZc8GqkgQAslKGy-gPgAjiktsTSUGuMPQbNdIDWYg.JPEG%2F20250723_182109.jpg',
      displayOrder: 1,
    },
    {
      photoId: 103,
      photoUrl:
        'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250320_70%2F17424487939563OCfq_JPEG%2F%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA_2.jpg',
      displayOrder: 2,
    },
  ],
  address: '경기 남양주시 다산중앙로82번길 25',
  location: {
    latitude: 37.625,
    longitude: 127.151,
  },
  description:
    '직원이 엄청 친절해요! 근데 화장실에 갔고 냄새나요 ㅠㅠㅠ\n그래도 맛은 있어서 괜찮아요',
  menus: [
    { name: '구워주는 서비스', price: 0, isRecommended: true },
    { name: '숙성우대갈비', price: 32000, isRecommended: true },
    { name: '숙성한돈 1++목살', price: 32000, isRecommended: true },
    { name: '맛있는 짜장면', price: 4000, isRecommended: false },
    { name: '불맛 짬뽕', price: 8000, isRecommended: false },
    { name: '고슬고슬 볶음밥', price: 6500, isRecommended: false },
  ],
  categories: [{ id: 5, name: '고기·구이', iconKey: 'meat' }],
  tags: [
    { id: 3, name: '혼밥하기 좋은', iconKey: 'fingerUp' },
    { id: 4, name: '가성비 좋은', iconKey: 'calculator' },
    { id: 5, name: '분위기 좋은', iconKey: 'blingBling' },
  ],
  registerStatus: 'REJECTED',
  rejectedReason: '내용이 너무 적어요',
}
