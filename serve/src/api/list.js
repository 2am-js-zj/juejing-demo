import request from "@/utlis/request";

export const findList = () => {
  return request('/api/article', 'get')
}
