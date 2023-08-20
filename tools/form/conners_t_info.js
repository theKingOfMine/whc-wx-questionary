import {
  formattedDateTime
} from "./utils"

const questionsBox = [
  "1. 在座位上扭动不停，课堂经常不能安坐在座位上，小动作多；",
  "2. 在不应出声的场合制造噪音，如课堂上、安静的集体活动上；",
  "3. 提出要求必须立即得到满足，否则会出现较大的情绪波动；",
  "4. 在社交环境下动作粗鲁，与老师交谈不使用问候语，没礼貌；",
  "5. 在校期间突发状况较为频繁，暴怒及不能预料的行为较多；",
  "6. 对批评过分敏感，不能忍受批评，或是单独对自己的批评；",
  "7. 上课听课效率很低，存在容易分心或注意不集中等问题；",
  "8. 与同学之间社交动作过度，伤害其他同学（推搡-攻击）；",
  "9. 课堂上持续出现走神/神游现象，课上注意集中度低于 2/3；",
  "10. 易激惹、易怒，往往因为小事与同学和老师产生对抗行为；",
  "11. 情绪变化迅速和激烈，不能很好的控制自己的情绪；",
  "12. 与同学之间好争吵，课堂上随意说话话，不能很好控制行为；",
  "13. 课堂上对老师单独指令不遵守，用语言/情绪对抗老师；",
  "14. 课堂需要书本文具时，儿童经常“忙碌”地找东西；",
  "15. 易兴奋，易冲动，容易与其他同学发生矛盾/冲突/肢体冲撞；",
  "16. 为了引起老师和其他同学的注意而发生一些不恰当行为；",
  "17. 由于行为鲁莽和过度，常常破坏规则，不为集体所接受；",
  "18. 好像容易被其他小孩领导，充当破坏者；",
  "19. 阅读量少，生活常识和基本的竞赛知识储备很少；",
  "20. 逻辑性差、卫生不良、缺乏对同学或事件的领导和组织能力；",
  "21. 做事有始无终，不能坚持，尤其是需要精力高度投入的事情；",
  "22. 稚气和不成熟，语言和语境显得比较幼稚，与实际年龄不符；",
  "23. 犯错收到批评时往往借口很多，抵赖错误或归罪他人；",
  "24. 不能与其他儿童相处；",
  "25. 集体活动中往往与同学在合作时容易产生矛盾；",
  "26. 在努力中容易泄气、放弃，且非常无所谓；",
  "27. 与教师不合作",
  "28. 在语文的阅读/理解上，或是数学应用题方面存在学习困难；"
]

const answerBox = [{
    label: '无',
    value: '0'
  },
  {
    label: '稍有',
    value: '1'
  },
  {
    label: '很多',
    value: '2'
  },
  {
    label: '相当多',
    value: '3'
  }
]

let questions = {}
let count = 0
for (let i in questionsBox) {
  count = count + 1
  questions['question' + count] = {
    label: questionsBox[i],
    name: 'question' + count,
    type: 'int',
    value: null,
    component: 'radio-lot',
    placeholder: '请选择',
    selectList: answerBox,
    isHide: false, // 如果是登记则隐藏，如果是更新则显示
    disable: false,
    isReadonly: false,
    isRequired: true,
    keyboard: null,
    length: null,
  }
}

const conners_t_info = (askfor) => {
  const teacher_id = getApp().globalData.info.teacher_id;
  return {
    title: {
      value: '[DSM-5/CONNERS/T]学龄儿童在校行为发展及学习/生活表现 教育实践综合评估量表（教师问卷版）',
      isHide: false
    },
    notes: {
      value: '评估提示：填写此表时请根据儿童过去 1-2 个月的行为举止认真/客观地填写此表！ 本报告为教育实践评估，最终评价需结合医疗诊断评估报告综合评定。',
      isHide: false
    },
    table: 'conners_t',
    database: 'mck_school',
    key: 'conners_t_id',
    askfor: askfor,
    submitTitle: askfor == 'insert' ? '登记CONNERS_T报告' : '更新CONNERS_T报告',
    form: {
      conners_t_id: {
        label: '报告ID',
        name: 'conners_t_id',
        type: 'int',
        value: null,
        component: 'input',
        placeholder: 'conners_t报告唯一编码',
        isHide: askfor == 'insert' ? true : false, // 如果是登记则隐藏，如果是更新则显示
        disable: true,
        isReadonly: true,
        isRequired: false,
        keyboard: 'text',
        length: null,
      },
      stu_id: {
        label: '学生ID',
        name: 'stu_id',
        type: 'int',
        value: null,
        component: 'input',
        placeholder: '',
        isHide: false,
        disable: false,
        isReadonly: true,
        isRequired: true,
        keyboard: 'text',
        length: null,
      },
      teacher_id: {
        label: '教师ID',
        name: 'teacher_id',
        type: 'int',
        value: teacher_id,
        component: 'input',
        placeholder: '教师登记唯一编码',
        isHide: false, 
        disable: false, 
        isReadonly: true,
        isRequired: true,
        keyboard: 'text',
        length: null,
      },
      register_time: {
        label: '登记时间',
        name: 'register_time',
        type: 'string',
        value: (formattedDateTime)(),
        component: 'datetime',
        placeholder: null,
        isHide: askfor == 'insert' ? true : false, 
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
      },
      ...questions
    }
  }
}


export class conners {
  constructor(askfor) {
    this.info = conners_t_info(askfor)
  }
}