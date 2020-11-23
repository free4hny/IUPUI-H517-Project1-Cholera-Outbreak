var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "addClassNames": true,
  "dataProvider": [{
    "Dates": "30-Aug",
    "Deaths": 8,
    // "GDP_per_capita": 3500,
    // "GDP_actual" : 89800
  }, {
    "Dates": "31-Aug",
    "Deaths": 56,
    // "GDP_per_capita": 1600,
    // "GDP_actual" : 15660
  }, {
    "Dates": "01-Sep",
    "Deaths": 143,
    // "GDP_per_capita": 900,
    // "GDP_actual" : 2903
  }, {
    "Dates": "02-Sep",
    "Deaths": 116,
    // "GDP_per_capita": 2700,
    // "GDP_actual" : 1270
  }, {
    "Dates": "03-Sep",
    "Deaths": 54,
    // "GDP_per_capita": 5800,
    // "GDP_actual" : 145200
  }, {
    "Dates": "04-Sep",
    "Deaths": 46,
    // "GDP_per_capita": 19400,
    // "GDP_actual" : 9100
  }, {
    "Dates": "05-Sep",
    "Deaths": 36,
    // "GDP_per_capita": 6300,
    // "GDP_actual" : 299100
  }, {
    "Dates": "07-Sep",
    "Deaths": 28,
    // "GDP_per_capita": 2100,
    // "GDP_actual" : 23170
  }, {
    "Dates": "06-Sep",
    "Deaths": 20,
    // "GDP_per_capita": 800,
    // "GDP_actual" : 54890
  },{
    "Dates": "08-Sep",
    "Deaths": 12,
    // "GDP_per_capita": 25000,
    // "GDP_actual" : 825
  },
  {
    "Dates": "09-Sep",
    "Deaths": 11,
    // "GDP_per_capita": 25000,
    // "GDP_actual" : 825
  }
],
  "valueAxes": [{
    "stackType": "3d",
    "id": "v1",
    "unit": "",
    "position": "left",
    "title": "Deaths (M) Green Bars",
  }],
  "startDuration": 0,
  "graphs": [{
    "id": "g1",
    "balloonText": "Deaths on [[category]] (Deaths): <b>[[value]]</b>",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "title": "Dates",
    "type": "column",
    "valueField": "Deaths"
  }, {
    "id": "g2",
    "balloonText": "GDP grow in [[category]] (GDP_per_capita): <b>[[value]]</b>",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "title": "2005",
    "type": "column",
    "valueField": "GDP_per_capita"
      },

      {
        "id": "g3",
        "balloonText": "GDP grow in [[category]] (GDP Actual): <b>[[value]]M</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "valueField": "GDP_actual"
          },
          
    ],

  "plotAreaFillAlphas": 0.1,
  "depth3D": 60,
  "angle": 30,
  "categoryField": "Dates",
  "categoryAxis": {
    "gridPosition": "start"
  }
});