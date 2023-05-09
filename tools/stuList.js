import {req} from "./request"

export const stu = {
  getStuList: async ()=>{
    const res = await req({
      askfor: 'getDataWithSql',
      sql: "select *, DATE_FORMAT(apply_time, '%Y-%m-%d') as day from stu where status='normal' order by day desc",
      database: 'class_information'
    })
    let stu = res.data.data;
    return stu;
  }
}