import * as echarts from '../../../ec-canvas/echarts'; // 导入 echarts

function initChart(canvas, width, height, dpr, chartData) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {},
    xAxis: {
      data: chartData.x // 使用传递的 x 数据
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: chartData.y // 使用传递的 y 数据
    }]
  };
  chart.setOption(option);
  return chart;
}

Component({
  properties: {
    data: {
      type: Object,
      value: {
        x: [],
        y: []
      }
    }
  },
  observers: {
    'data': function(n, o){
      if (n) {
        this.initChartWithData(n);
      }
    }
  },
  data: {
    ec: {
      onInit: null
    }
  },
  lifetimes: {

  },
  methods: {
    initChartWithData: function(data) {
      this.setData({
        'ec.onInit': (canvas, width, height, dpr) => {
          return initChart(canvas, width, height, dpr, data);
        }
      });
    }
  }
});
