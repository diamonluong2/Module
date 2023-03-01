// export: Khai báo để các module khác có thể gọi tới để sử dụng biến/hàm này
// - 1 module có thể export nhiều biến/hàm
// - khi ta import cần đặt trong cặp {} và tên biến phải giống với tên đã export

export const PI = 3.14;
export const MAX = 99999;

export function circleArea(r) {
  return PI * r ** 2;
}
