import {req} from "../request"

export const stu = {
  handleForm: async (info)=>{
    const res = await req({
      info: info
    })
    let stu = res.data.data;
    return stu;
  }
}