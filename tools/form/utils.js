import {formUpload} from "../tools"

export const school = {
  nameBox: [
    '天通苑学校【天通苑学区】',
    '天通苑小学【天通苑学区】',
    '清华附小昌平学校【天通苑学区】',
    '天通苑小学东小口学校【天通苑学区】',
    '昌平一中天通苑校区【天通苑学区】',
    '昌平一中中滩学校【天通苑学区】',
    '昌平二中教育集团回龙观校区【回龙观东学区】',
    '昌平第二实验小学【回龙观东学区】',
    '霍营中心小学【回龙观东学区】',
    '回龙观二小【回龙观东学区】',
    '首师大附属回龙观育新教育集团本部【回龙观东学区】',
    '首师大附属回龙观育新教育集团华电附中【回龙观东学区】',
    '首师大附属回龙观育新教育集团华电附小【回龙观东学区】',
    '清华附中悦府小学【回龙观东学区】',
    '人大附中昌平学校【回龙观东学区】',
    '北京市第一六一中学回龙观学校【回龙观东学区】',
    '北京育翔小学回龙观学校【回龙观东学区】',
    '史各庄中心小学【回龙观东学区】',
    '回龙观中心小学【回龙观东学区】',
    '首师大附属回龙观幼儿园【回龙观东学区】',
    '棉花胡同幼儿园回龙观园【回龙观东学区】',
    '北京市第六幼儿园回龙观园【回龙观东学区】',
    '十五中南口学校【回龙观东学区】',
    '桃洼学校【回龙观东学区】',
    '南口学校【回龙观东学区】',
    '南口镇小学【回龙观东学区】',
    '南口中心小学【回龙观东学区】',
    '南口铁道北小学【回龙观东学区】',
    '南口职业学校（小学）【回龙观东学区】',
    '老峪沟中心小学【回龙观东学区】',
    '高崖口中心小学【回龙观东学区】',
    '流村中心小学【回龙观东学区】',
    '流村中学【回龙观东学区】',
    '特殊教育学校【回龙观东学区】',
    '北师大二附中未来科技城学校【未来科学城学区】',
    '燕丹学校【未来科学城学区】',
    '西府冠华学校【未来科学城学区】',
    '十一未来城学校【未来科学城学区】',
    '北师大实验小学未来科技城学校【未来科学城学区】',
    '首师大附中昌平学校【未来科学城学区】',
    '北七家中心小学【未来科学城学区】',
    '平西府中心小学【未来科学城学区】',
    '昌平实验三小【未来科学城学区】',
    '黄城根小学昌平学校【未来科学城学区】',
    '中关村二小昌平学校【未来科学城学区】',
    '北师大昌平附属学校【高教园学区】',
    '百善学校【高教园学区】',
    '巩华学校【高教园学区】',
    '巩华中心小学【高教园学区】',
    '沙河中心小学【高教园学区】',
    '七里渠中心小学【高教园学区】',
    '昌平实验四小【高教园学区】',
    '育新教育集团沙河校区【高教园学区】',
    '北航附小昌平学校【高教园学区】',
    '小汤山中学【小汤山兴寿学区】',
    '大东流中学【小汤山兴寿学区】',
    '兴寿学校【小汤山兴寿学区】',
    '上苑学校（上学中学与小学合并）【小汤山兴寿学区】',
    '小汤山中心小学【小汤山兴寿学区】',
    '大东流中心小学【小汤山兴寿学区】',
    '昌平区第五学校南邵中学【昌平新城学区】',
    '昌盛园小学南邵学校【昌平新城学区】',
    '崔村中学【昌平新城学区】',
    '崔村中心小学【昌平新城学区】',
    '马池口中学【马池口阳坊学区】',
    '亭自庄学校【马池口阳坊学区】',
    '阳坊学校【马池口阳坊学区】',
    '二一学校【马池口阳坊学区】',
    '马池口中心小学【马池口阳坊学区】',
    '西贯市回民小学【马池口阳坊学区】',
    '十三陵中学【十三陵学区】',
    '十三陵中心小学【十三陵学区】',
    '长陵学校【十三陵学区】',
    '黑山寨学校【十三陵学区】',
    '下庄学校【十三陵学区】',
    '昌平一中【昌平城区学区】',
    '昌平二中【昌平城区学区】',
    '昌平一中西关校区【昌平城区学区】',
    '前锋学校【昌平城区学区】',
    '实验学校【昌平城区学区】',
    '昌平第五学校【昌平城区学区】',
    '昌平二中西环路校区【昌平城区学区】',
    '城北中心小学【昌平城区学区】',
    '城关小学【昌平城区学区】',
    '昌盛园小学【昌平城区学区】',
    '二毛学校【昌平城区学区】',
    '城南中心小学【昌平城区学区】'
  ],

  positionBox: ['班主任', '教学干部', '管理人员', '资源教师', '其他人员'],

  gradeBox: ['幼儿园', '小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级', '初中一年级', '初中二年级', '初中三年级', '初中四年级', '高中一年级', '高中二年级', '高中三年级', '融合中心'],

  classBox: ["一班", "二班", "三班", "四班", "五班", "六班", "七班", "八班", "九班", "十班", "十一班", "十二班", "十三班", "十四班", "十五班", "十六班", '资源教室', '心理教室', '其他'],

  sexBox: ['男', '女'],
  ageBox: Array.from({length: 20}, (_, i) => i + 2),
  stuStatusBox: ['在读..', '已转学', '已毕业'],
  teacherStatusBox: ['在职..', '已离职'],
}

// 返回当前时间的datatime时间 y-M-D h:m:s
export const formattedDateTime = (yearsToAdd = 0) => {
  const now = new Date();
  now.setFullYear(now.getFullYear() + yearsToAdd);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
};

// 新增信息的是后预处理表单对象
export const addNewInfo = (info) => {
  info.askfor = 'insert'
  info.submitTitle = '添加'
  for (let key in info.form) {
      if (info.form[key].component.indexOf('date') === -1) {
          info.form[key].value = null;
      }
  }
  return info
}
// 更新信息的是后预处理表单对象
export const updateInfo = (info, newInfo)=> {
  info.askfor = 'update'
  for (let key in info.form) {
      info.form[key].value = newInfo[key] || null;
  }
  return info
}
// 删除报告
export const deleteReport = (info)=>{
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '请确认是否删除学生' + info.name + '的' + info.source_table + '报告数据',
      content: '注：数据删除后将不可恢复，请慎重选择！',
      complete: async (res) => {
        if (res.confirm) {
          const res = await formUpload({
            askfor: 'delete',
            table: info.source_table,
            key: {
              name: info.source_table + '_id',
              value: info.id,
              type: 'int'
            }
          });

          console.log(res)

          if (res.code == 200) {
            wx.showToast({
              title: '报告已删除',
              icon: 'success'
            })
            
          } else {
            wx.showToast({
              title: '故障，删除失败',
              icon: 'error'
            })
          }
          resolve({code: res.code})
        }else{
          resolve({code: 400}) 
        }
      }
    })



  })
}

// 手机号校验
export const checkPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) {
      return false;
  }
  var check = /^1\d{10}$/;
  return check.test(phoneNumber);
}

// 身份证号正则表达式（支持15位和18位）
export const checkIdCard = (idCard)=> {
  const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return idCardRegex.test(idCard);
}

