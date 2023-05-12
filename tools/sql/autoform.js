export const generateInsertSQL = (table, data) => {
  let columns = [];
  let values = [];

  for (let [key, { value, type }] of Object.entries(data)) {
    console.log(key)
    if (!data[key].disable) {
      columns.push(key);
      if (type === 'int' || type === 'float' || type === 'double') {
        values.push(value);
      } else if (type === 'string' || type === 'date' || type === 'time') {
        values.push(`'${value}'`);
      }
    }
  }

  let columnStr = columns.join(', ');
  let valueStr = values.join(', ');

  return `INSERT INTO ${table} (${columnStr}) VALUES (${valueStr})`;
}

export const generateUpdateSQL = (table, data, condition) => {
  let sets = [];

  for (let [key, { value, type }] of Object.entries(data)) {
    if (type === 'int' || type === 'float' || type === 'double') {
      sets.push(`${key} = ${value}`);
    } else if (type === 'string' || type === 'date' || type === 'time') {
      sets.push(`${key} = '${value}'`);
    }
  }

  let setStr = sets.join(', ');
  return `UPDATE ${table} SET ${setStr} WHERE ${condition}`;
}

// 将普通对象数据转成autoForm表单需要的格式
//将普通对象数据传输给表单格式的对象数据
export const transferDataToForm = (info, formInfo) => {
  for (let i in info) {
    for (let j in formInfo.info) {
      if (i == j) {
        formInfo.info[j].value = info[i]
      }
    }
  }
  return formInfo
}