$_mod.def("/fc-npm-tester$1.0.0/src/renderer", function(require, exports, module, __filename, __dirname) { import FusionCharts from 'fusioncharts/core';
import column2d from 'fusioncharts/viz/column2d';
import Generartor from './generator';

FusionCharts.addDep(column2d);

var generator = new Generartor();
var data = generator.generate({
  dataCount: 12
}).getData();

const isReady = () => {
  var chartInstance = new FusionCharts({
    id: 'stockRealTimeChart',
    type: 'column2d',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: data
  });
  chartInstance.render();
};

FusionCharts.ready(isReady);

});