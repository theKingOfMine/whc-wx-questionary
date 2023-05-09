// 建设conners_t数据库表单对象

// table: 数据库表名，
// database: 数据库名
// key: 关键字段，用于自动更新等 where key=form[key]
// form: 表单字段
// form的属性名为表单字段名，
//   字段.value: 值, 
//       .component: 需要用到的输入组件名 列入: input, select, data-pocker等
//       .name: 字段名，字符串形式
//       .label: form表单label
//       .placeholder: form表单placeholder
//       .type: value的值类型
//       .disable: 是否可编辑

import {
  req
} from "../request"

const conners_t_FormInfo = {
  title: '[DSM-5/SLD/PRS/T]学龄儿童学习能力持续性发展特质 教育实践综合评估量表（教师问卷版）',
  table: 'conners_t',
  database: 'mck_school',
  key: 'id',
  notes: '评估提示：填写此表时请根据儿童过去 6 个月的行为举止认真/客观地填写此表！ 本报告为教育实践评估，最终评价需结合医疗诊断评估报告综合评定。',
  form: {
    id: {
      value: null,
      component: 'input',
      name: 'id',
      label: '编号',
      placeholder: '',
      type: 'int',
      disable: true
    },
    stu_id: {
      value: '马吉春',
      component: 'input',
      name: 'stu_name',
      label: '学生姓名',
      placeholder: '',
      type: 'string'
    },
    teacher_id: {
      value: '马吉春',
      component: 'input',
      name: 'teacher_name',
      label: '教师姓名',
      placeholder: '',
      type: 'string'
    },
    register_time: {
      value: new Date().toLocaleDateString('zh-CN'),
      component: 'date-picker',
      name: 'register_time',
      label: '填写时间',
      placeholder: '',
      type: 'string'
    }
  }
}

export const conners_t = async () => {
  const sql = "SELECT column_name, column_comment FROM information_schema.columns WHERE table_schema = 'mck_school' AND table_name = 'conners_t';"
  const res = await req({
    askfor: 'getDataWithSql',
    sql: sql,
    database: 'mck_school'
  })
  const column_name = res.data.data.splice(4, 31)

  for (let i of column_name) {
    conners_t_FormInfo.form[i.column_name] = {
      value: null,
      component: 'radio',
      name: i.column_name,
      label: i.column_comment,
      placeholder: '',
      type: 'int',
      selectList: [1, 2, 3, 4, 5]
    }
  }

  return conners_t_FormInfo

} 
