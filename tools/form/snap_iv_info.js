import {formattedDateTime} from "./utils"
const teacher_id = wx.getStorageSync('teacher_id')

const questionsBox = [
  "1. 在完成作业时或者参与集体活动时，常出现拖拉、磨蹭、马虎大意等情况，致 使经常容易出现错误或完成不及时；", 
  "2. 很难专注于持续性的作业与活动，尤其是需要多步工序或是需要高度精力集中 的作业任务或集体活动；", 
  "3. 经常沉迷于属于自己特定的活动，可以很长时间专注于此，对外界的干预/叫停/呼唤看起来好像没有听到别人对其说话的内容；", 
  "4. 在课堂中经常不能遵循教师的指示，课堂上学习状态散漫/走神/发呆，无法连 续性的进行知识的学习，也无法完成特定的作业任务；", 
  "5. 家庭/学校中的生活状态或特定事件逻辑性很差，对于分配一些任务或组织一个 活动，在资源调配上和人员协调上存在困难；", 
  "6. 逃避，或表达不愿意，或很难从事于需要持续性动脑的工作，如：随堂作业不 能完成、课堂即时性问题不能回答、家庭作业磨磨蹭蹭，没有良好的时间观念；", 
  "7. 会弄丢作业或活动所必需的东西（例如：学校作业，铅笔，书，工具，或玩具）；", 
  "8. 很容易受外在刺激影响而分心；", 
  "9. 短时记忆不好，很快遗忘，呈现一种与应有智力发展水平不一致的学习状态和记忆力水平",
  "10. 在座位上小动作很多，玩弄手脚或不好好坐着；",
  "11. 在教室或其它必须持续坐着的场合，会任意离开座位；",
  "12. 在不适当的场合，乱跑或爬高爬低，且显得兴奋度很高；",
  "13. 打断或干扰别人，社交活动中经常出现由于过度的行为而给他人带来一些麻烦，总给他人一种经常“捣乱”的感觉；",
  "14. 对环境的约束力缺乏感知能力，搞不懂集体下不成文的规定；",
  "15. 说话很少思考，在课堂中或家庭生活中存在和长辈/老师抢话/插嘴/说一些与主题无关的话等情况；",
  "16. 不能按捺情绪或抑制行为，经常在问题还没问完前就急着回答；",
  "17. 在游戏中或团体活动中，无法排队或等待轮流，经常冲出队伍或不按游戏规则进行活动；",
  "18. 集体环境下社交伙伴比较固定，基本都是活泼好动的同伴，很难与安静的/性格内向的同学/邻居建立起社交关系；",
  "19. 情绪波动很大，很小的事情会引发情绪问题，如：没有得到奖励/被批评/感觉被忽略等；可能会出现暴怒/哭泣/摔门（其他物品）/攻击等行为；", 
    "20. 对于父母/亲属/老师的指令性要求经常会刨根问底或争论“为什么这么做”，主动地反抗或拒绝父母/亲属/老师的要求与规定，当反抗行为被制止或拒绝后，会出现赌气/情绪波动/不恰当行为；", 
    "21. 对于父母/亲属/老师临时更改原有的奖励或物质刺激时，会产生情绪问题；", 
    "22. 故意地做一些事去干扰别人，通过看似恶作剧或捣乱的行为来引起特定人群的关注和注意；", 
    "23. 因自己犯的错或不适当的行为而怪罪别人，或是不能自己单独接受批评；", 
    "24. 易怒的或很容易被别人激怒，经常会和同学发生矛盾和摩擦，甚至是肢体冲突；", 
    "25. 容易因为一件小事很生气，或是迁怒周围的人；", 
    "26. 因为某些事件，存在故意的报复同学的行为；"
]



const answerBox = [
  { label: '完全没有', value: '0' },
  { label: '只有一点', value: '1' },
  { label: '还算不少', value: '2' },
  { label: '非常的多', value: '3' }
]


let questions = {}
let count = 0
for(let i in questionsBox){
  count = count + 1
  questions['question' + count ] = {
    label: questionsBox[i],
    name: 'question' + count,
    type: 'int',
    value: null,
    component: 'radio-lot',
    placeholder: '请选择',
    selectList: answerBox,
    isHide: false, 
    disable: false,
    isReadonly: false,
    isRequired: true,
    keyboard: null,
    length: null
  }
}

const snap_iv_info = (askfor) => {
  const teacher_id = getApp().globalData.info.teacher_id;
  return {
    title: {
      value: '[DSM-5/SNAP-IV]学龄儿童主动性注意能力教育实践 综合评估量表',
      isHide: false
    },
    table: 'snap_iv',
    database: 'mck_school',
    key: 'snap_iv_id',
    askfor: askfor,
    notes: {
      value: '评估提示：填写此表时请根据儿童过去 12 个月的行为举止认真/客观地填写此表！ 本报告为教育实践评估，最终评价需结合医疗诊断评估报告综合评定。\n \n 问题1~9，注意力-持续性注意能力表现 Performance of sustained attention ability\n \n 问题10~18，冲动/多动-不特定场合行为约束与自我控制能力表现 Behavior restraint and self-control performance \n \n 问题19~26，对立/违抗-特定情况下情绪抑制与控制能力表现 Emotional inhibition and control performance',
      isHide: false
    },
    submitTitle: '提交报告',
    form: {
      snap_iv_id:  {
        label: '报告ID',
        name: 'snap_iv_id',
        type: 'int',
        value: null,
        component: 'input',
        placeholder: '请输入ID',
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

export class snap_iv {
  constructor(askfor){
    this.info = snap_iv_info(askfor)
  }
}