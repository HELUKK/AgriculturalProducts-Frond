import axios from "@/axios";
import  MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)
// 过滤http前缀请求
mock.onAny(/^http/).passThrough()
mock.onAny(/^\/api\//).passThrough()
export default mock