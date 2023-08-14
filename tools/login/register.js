import {req} from "./api"
// 注册
export const register = async (forminfo) => {
  try {
    const res = await req({
      askfor: 'register',
      forminfo: forminfo
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return res
    }
  } catch (err) {
    throw err;
  }
};