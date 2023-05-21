import {formattedDateTime} from "../normal"
const teacher_id = wx.getStorageSync('teacher_id')

export const SLD_PRS_T = [
  {
    title: '一. 听觉的理解和记忆 Understanding and memory',
    form: [{
        label: '1. 对词汇意思的理解能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 和同年级的儿童相比，对词汇意思的理解能力非常差；',
          '2. 和同年级的儿童相比，对词汇的意思容易理解错；',
          '3. 能够很好地理解同年级儿童使用的词汇意思；',
          '4. 不仅能够很好地理解同年级儿童使用的词汇意思，而且还能够理解比自 己年龄稍大一些的儿童使用的词汇意思；',
          '5. 能够理解很多抽象语，对词汇意思理解能力优秀；'
        ]
      },
      {
        label: '2. 对指示的服从能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能服从指示，对指示不知所措；',
          '2. 往往需要在周围人的帮助下，才能服从一般简单的指示；',
          '3. 能够服从听惯了的指示和不复杂的指示；',
          '4. 能够理解包含几层意思的指示，并能服从这个指示；',
          '5. 理解指示的内容，并能够非常好地服从这个指示；'
        ]
      },
      {
        label: '3. 在班级理解对话的能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能理解；',
          '2. 能够听进，但不能很好地理解；',
          '3. 能够参与同年级同学之间的交流；',
          '4. 能够很好地理解班级同学之间的对话；',
          '5. 积极参与班级同学之间的对话，能够充分理解对话的内容；'
        ]
      },
      {
        label: '4. 对信息的记忆能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 对曾经接受过的信息，在大多数时候想不出来，记忆力贫弱；',
          '2. 经过多次反复后，能够记住简单的事情及其发生的经过；',
          '3. 对信息的记忆能力和同年级儿童相当，无特殊问题；',
          '4. 能够记住各种各样的信息，即使过了一段时间，也能够很快地想起来；',
          '5. 能够准确地记忆事情的细节及其内容；'
        ]
      }
    ]
  },
  {
    title: '二. 会话用语 Conversational competence',
    form: [{
        label: '5. 词汇',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 与同年级的儿童相比，常常使用幼稚的语言，词汇量少；',
          '2. 只能使用单纯的名词，不大会使用形容词；',
          '3. 具有的词汇量与同年级的儿童相当，无特殊问题；',
          '4. 具有比同年级儿童更多的词汇量，能使用正确的语言，而且叙述生动；',
          '5. 具有比同年级儿童更高水平的表达能力，不仅能使用正确的语言叙述事 情，而且能够描述抽象的内容；'
        ]
      },
      {
        label: '6. 语法',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能明确表达概念，不会使用介词短语；',
          '2. 常常使用一些语法错误很多且不完整的语言；',
          '3. 一般能使用正确的语法，有时发生语法错误，能力与同年级儿童相当；',
          '4. 能使用比同年级儿童更多的语言，且很少出现语法错误；',
          '5. 总是能够使用正确的语法说话；'
        ]
      },
      {
        label: '7. 回忆语言的能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能想起过去所处情境中用过的正确语言；',
          '2. 说正在思考着的事情时，往往堵塞，说不出来；',
          '3. 能选择正确的语言说话，能力与同年级的儿童相当；',
          '4. 叙述过去发生过的事情很少有堵塞、说不出来的时候，回忆语言的能力 超过同年级儿童；',
          '5. 总能够很好地回忆语言，能力非常强，决不会说不出来或说错；'
        ]
      },
      {
        label: '8. 叙述经验的能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 当别人问经历过的事情时，不能理解所问的问题；',
          '2. 不能有条理地叙述经历过的事情；',
          '3. 能够叙述经历过的事情，能力和同年级儿童相当，无特殊问题；',
          '4. 能够有条理地叙述经历过的事情，具有超过同年级儿童以上的能力；',
          '5. 叙述经历过的事情时，条理很清楚，能力十分优秀；'
        ]
      },
      {
        label: '9. 表达能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能够说明一个个相关事实之间的联系；',
          '2. 很难说清楚一个个相关事实之间的联系；',
          '3. 能够说明一个个相关事实之间的联系，能力和同年级儿童相当；',
          '4. 能够叙述清楚事实之间以及事实和自己想法之间的联系，具有超过同年 级儿童以上的能力；',
          '5. 总是能够说清楚事实之间以及事实与自己想法之间的联系，表达能力非 常优秀；'
        ]
      },
    ]
  },
  {
    title: '三. 时间空间知觉 Temporal and spatial perception',
    form: [{
        label: '10. 时间的判断',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 缺乏时间概念，上学总是迟到；',
          '2. 有时间的概念，但总是慢腾腾或常常迟到；',
          '3. 时间的判断能力和同年级儿童相当，无特殊问题；',
          '4. 与同年级的儿童相比，能够机敏地判断时间，即使迟到时，也常常有正 当的理由；',
          '5. 在规定的时间内，能够很好地完成计划；'
        ]
      },
      {
        label: '11. 地面方位感觉',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 方向感觉差，在校园里以及住所附近经常迷路；',
          '2. 即使是在比较熟悉的场所，也常常迷路；',
          '3. 在熟悉的场所不会迷路，能力和同年级的儿童相当；',
          '4. 具有超过同年级儿童以上的能力，很少迷路、彷徨；',
          '5. 能很好地适应新场所，不会迷路；'
        ]
      },
      {
        label: '12. 关系的判断（大— 小，远—近，重— 轻）',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 总是不确切地判断；',
          '2. 能够初步判断；',
          '3. 能力与同年级儿童相当，无特殊问题；',
          '4. 遇到新的情况则不能判断；',
          '5. 经常能够正确地判断，并能够在新的情况下进行正确的判断；'
        ]
      },
      {
        label: '13. 位置感觉',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不知道左右、东西、南北，总是彷徨、迷路；',
          '2. 不知道左右、东西、南北，常常彷徨、迷路；',
          '3. 对左右、东西、南北的理解没有问题，能力和同年级儿童相当；',
          '4. 方向感觉好；',
          '5. 方向感觉非常好；'
        ]
      },
    ]
  },
  {
    title: '四. 运动能力 Sports development ability',
    form: [{
        label: '14. 一般的运动（走、 跑、跳、攀登）',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 动作很笨拙；',
          '2. 动作笨拙，不灵巧，与同年级儿童比，在平均以下；',
          '3. 动作不生硬，和同年级儿童相当；',
          '4. 能够很好地做动作，能力在同年级儿童以上；',
          '5. 动作非常好；'
        ]
      },
      {
        label: '15. 平衡感觉',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 平衡感非常差，显得非常不灵巧；',
          '2. 常常跌倒，平衡能力与同年级的儿童相比，在平均以下；',
          '3. 能力和同年级儿童相当，无特殊问题；',
          '4. 在需要进行平衡的运动方面，能力超过同年级儿童；',
          '5. 能非常好地实现平衡；'
        ]
      },
      {
        label: '16. 手指的灵巧程度 （使用剪刀、扣纽 扣、书写、握球等）',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 手指很笨拙；',
          '2. 手指笨拙、不灵活，与同年级的儿童相比，在平均以下；',
          '3. 能力和同年级儿童相当，无特殊问题；',
          '4. 手指比同年级儿童灵巧；',
          '5. 手指非常灵巧，即使是新动作，也能够很好地掌握要领；'
        ]
      },
    ]
  },
  {
    title: '五. 社会行为 Social behavior',
    form: [{
        label: '17. 协调性',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能够抑制自己的行为和反应，总是搅乱班级纪律；',
          '2. 常常有多嘴、想说的表现，引起周围人的注意；',
          '3. 能力与同年级儿童相当，无特殊问题；',
          '4. 能够很好地协调，能力超过同年级的儿童；',
          '5. 即使没有大人的指导，也能够很好地协调，协调能力强；'
        ]
      },
      {
        label: '18. 注意力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1.完全不能集中注意力；',
          '2.注意力常常转移，几乎不听别人说；',
          '3.能力与同年级儿童相当，无特殊问题；',
          '4.能够集中注意力，能力超过同年级儿童；',
          '5.能够长久持续地集中注意力；'
        ]
      },
      {
        label: '19. 安排工作程序的 能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能理解工作程序，极其散漫，安排差；',
          '2. 工作程序常常不正确；',
          '3. 能够安排工作程序，能力和同年级儿童相当；',
          '4. 能够安排工作程序并按程序完成，能力在平均以上；',
          '5. 能够按时完成任务，工作程序的安排方法优秀，如安排生日聚会、娱乐 晚会、郊游等；'
        ]
      },
      {
        label: '20. 适应新情况的 能力',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 在新情况下易兴奋，不能适应，完全不能自我控制；',
          '2. 在新情况下往往有过度反应，显得不知所措；',
          '3. 能力与同年级儿童相当，无特殊问题；',
          '4. 自信，能了解、适应新情况；',
          '5. 有独立性，能够率先行为，适应能力非常优秀；'
        ]
      },
      {
        label: '21. 社会的接受',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能得到朋友的接受；',
          '2. 需要得到朋友的宽容和忍耐，才能交往；',
          '3. 能被朋友接受，和同年级的儿童相当，无特殊问题；',
          '4. 经常受到朋友的喜欢；',
          '5. 不经被朋友接受，而且取得朋友的信赖；'
        ]
      },
      {
        label: '22. 责任感',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 完全不想负责任；',
          '2. 接受分配任务时，总想回避责任；',
          '3. 负责任，责任感和同年级儿童相当；',
          '4. 责任感超过同年级儿童；',
          '5. 率先努力，主动承担责任；'
        ]
      },
      {
        label: '23. 理解任务并进行处 理的能力（作业、 规定、大家所决定 的事等）',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 给予指导也不能完成；',
          '2. 给予指导，有的事不能完成；',
          '3. 能完成，能力与同年级儿童相当，无特殊问题；',
          '4. 即使没有人指导，也能完成任务，而且比同年级儿童完成得好；',
          '5. 总是能独立自主地完成任务；'
        ]
      },
      {
        label: '24. 关心',
        component: 'radio-lot',
        type: 'string',
        selectList: [
          '1. 不能理解别人的心情，总是采取粗野的行为；',
          '2. 往往采取无视朋友心情的行为；',
          '3. 能力与同年级儿童相当，无特殊问题；',
          '4. 几乎从不采取对社会不恰当的行为，比同年级儿童更会关心、体贴别人；',
          '5. 完全没有对社会不恰当的行为，总是无微不至地关心别人；'
        ]
      },
    ]
  }
]
let questions = {}
let count = 0
for(let i in SLD_PRS_T){
  for(let j of SLD_PRS_T[i].form){
    count = count + 1
    questions['question' + count ] = {
      value: null,
      component: 'radio-lot',
      name: 'question' + count,
      label: j.label,
      placeholder: '请选择',
      type: 'int',
      isHide: false,
      isRequired: true,
      disable: false,
      selectList: j.selectList.map((item, index) => ({
        label: item,
        value: index + 1 + ''
      }))
    }
  }
}


export const sld_prs_t_info = {
  title: {
    value: '[DSM-5/SLD/PRS/T]学龄儿童学习能力持续性发展特质 教育实践综合评估量表（教师问卷版）',
    isHide: false
  },
  table: 'sld_prs_t',
  database: 'mck_school',
  key: 'id',
  notes: {
    value: '评估提示：填写此表时请根据儿童过去 12 个月的行为举止认真/客观地填写此表！ 本报告为教育实践评估，最终评价需结合医疗诊断评估报告综合评定。\n \n 问题1~4，听觉的理解和记忆 Understanding and memory\n \n 问题5~9，会话用语 Conversational competence \n \n 问题10~13，时间空间知觉 Temporal and spatial perception \n \n 问题14~16，运动能力 Sports development ability \n \n 问题17~24，社会行为 Social behavior',
    isHide: false
  },
  submitTitle: '提交报告',
  form: {
    id: {
      value: null,
      component: 'input',
      name: 'id',
      label: 'ID',
      placeholder: '请输入ID',
      type: 'int',
      isHide: true,
      isRequired: true,
      disable: true,
      keyboard: 'number',
      length: 9
    },
    stu_id: {
      value: null,
      component: 'input',
      name: 'stu_id',
      label: '学生ID',
      placeholder: '请输入学生ID',
      type: 'int',
      isHide: true,
      isRequired: true,
      disable: false,
      keyboard: 'number',
      length: 9
    },
    teacher_id: {
      value: teacher_id,
      component: 'input',
      name: 'teacher_id',
      label: '教师ID',
      placeholder: '请输入教师ID',
      type: 'int',
      isHide: true,
      isRequired: true,
      disable: false,
      keyboard: 'number',
      length: 9
    },
    register_time: {
      value: (formattedDateTime)(),
      component: 'datetime',
      name: 'register_time',
      label: '注册时间',
      placeholder: '请输入注册时间',
      type: 'string',
      isHide: true,
      isRequired: true,
      disable: false,
      keyboard: 'text',
      length: 20
    },
    ...questions
  }

}