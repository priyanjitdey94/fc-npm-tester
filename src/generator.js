
import { pluckNumber, defined, createData, getObjectCopy } from './utils';

class Generator {
  constructor () {
    this.dataSource = {};
    this.config = {};
  }

  setDataFormat (dataType) {
    this.config.dataFormat = dataType;
  }

  generate (config = {}) {
    let generator = this,
      i,
      j,
      dataObj,
      dsCount = pluckNumber(config.dsCount),
      dataCount = pluckNumber(config.dataCount, 1),
      dataSource = generator.dataSource;

    if (defined(dsCount)) {
      dataSource.dataset = [];
      for (i = 0; i < dsCount; i++) {
        dataObj = {
          data: []
        };
        for (j = 0; j < dataCount; j++) {
          dataObj.data.push(createData(i));
        }
        dataSource.dataset.push(dataObj);
      }
    } else {
      dataSource.data = [];
      for (i = 0; i < dataCount; i++) {
        dataSource.data.push(createData(i));
      }
    }

    dataSource.chart = {
      'caption': 'Monthly',
      'xaxisname': 'Month',
      'yaxisname': 'Revenue',
      'numberprefix': '$',
      'showvalues': '1',
      'animation': '1'
    }

    return this;
  }

  getData () {
    return getObjectCopy(this.dataSource);
  }
};

export default Generator;