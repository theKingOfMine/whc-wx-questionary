import * as echarts from '../../ec-canvas/echarts'; // 导入 echarts

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {},
    xAxis: {
      data: ["苹果", "香蕉", "橙子", "草莓", "西瓜", "芒果"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20] // 虚拟数据
    }]
  };
  chart.setOption(option);
  return chart;
}


Component({
  data: {
    ec: {
      onInit: initChart
    }
  }
})
