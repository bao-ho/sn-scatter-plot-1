export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qId: 'upMhB',
          qType: 'sn-scatter-plot',
        },
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata'],
        },
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 4,
            qcy: 38,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'Sales Rep Name',
              qApprMaxGlyphCount: 16,
              qCardinal: 63,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['Sales Rep Name'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 63,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$ascii', '$text'],
              qDimensionType: 'D',
              qGrouping: 'N',
              qNumFormat: {
                qType: 'R',
                qnDec: 14,
                qUseThou: 1,
                qFmt: '##############',
                qDec: '.',
                qThou: ',',
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['Sales Rep Name'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 63,
                qHypercubeCardinal: 38,
                qAllValuesCardinal: -1,
              },
              qLibraryId: 'XFhtUb',
              title: 'Sales Rep Name',
              autoSort: true,
              cId: 'JZxnSwp',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
            {
              qFallbackTitle: 'Expense Amount',
              qApprMaxGlyphCount: 14,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'M',
                qnDec: 2,
                qUseThou: 0,
                qFmt: '$#,##0.00;($#,##0.00)',
                qDec: '.',
                qThou: ',',
              },
              qMin: 7320.990000000003,
              qMax: 18331342.660000015,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'napvtJ',
              qTrendLines: [],
              autoSort: true,
              cId: 'RPjZje',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
            {
              qFallbackTitle: 'Budget',
              qApprMaxGlyphCount: 11,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'R',
                qnDec: 0,
                qUseThou: 0,
                qFmt: '##############',
                qDec: '.',
                qThou: ',',
              },
              qMin: 12.143190000000004,
              qMax: 19827.185060000047,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'VjxMHP',
              qTrendLines: [],
              autoSort: true,
              cId: 'RZqEhA',
              numFormatFromTemplate: true,
              quarantine: {
                qNumFormat: {},
                isCustomFormatted: false,
              },
            },
            {
              qFallbackTitle: '# of Customers',
              qApprMaxGlyphCount: 3,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'I',
                qnDec: 0,
                qUseThou: 1,
                qFmt: '###0',
                qDec: '.',
              },
              qMin: 0,
              qMax: 9,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'DSrjAGm',
              qTrendLines: [],
              coloring: {
                gradient: {
                  colors: [
                    {
                      color: '#ecc43d',
                      index: 6,
                    },
                    {
                      color: '#578b60',
                      index: 10,
                    },
                  ],
                  breakTypes: [false],
                  limits: [0.219],
                  limitType: 'percent',
                },
              },
              autoSort: true,
              cId: 'ULEWmxL',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
          ],
          qEffectiveInterColumnSortOrder: [3, 2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '$36,215,504.17',
              qNum: 36215504.16999994,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '49609.47729',
              qNum: 49609.47729000036,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '130',
              qNum: 130,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
          ],
          qDataPages: [],
          qPivotDataPages: [],
          qStackedDataPages: [],
          qMode: 'S',
          qNoOfLeftDims: -1,
          qHasOtherValues: false,
          qTreeNodesOnDim: [],
          qColumnOrder: [],
        },
        refLine: {
          refLinesX: [],
          refLinesY: [],
        },
        showTitles: true,
        title: '',
        subtitle: '',
        footnote: '',
        disableNavMenu: false,
        showDetails: false,
        showDisclaimer: true,
        navigation: false,
        dataPoint: {
          bubbleSizes: 5,
          rangeBubbleSizes: [16, 20],
        },
        labels: {
          mode: 2,
        },
        gridLine: {
          auto: false,
          spacing: 2,
        },
        color: {
          auto: false,
          mode: 'primary',
          formatting: {
            numFormatFromTemplate: true,
          },
          useBaseColors: 'off',
          paletteColor: {
            index: 6,
          },
          useDimColVal: true,
          useMeasureGradient: true,
          persistent: false,
          expressionIsColor: true,
          expressionLabel: '',
          measureScheme: 'sg',
          reverseScheme: false,
          dimensionScheme: '12',
          autoMinMax: true,
          measureMin: 0,
          measureMax: 10,
          altLabel: 'jgxpDbw',
          byDimDef: {
            label: 'jgxpDbw',
            key: 'jgxpDbw',
            type: 'libraryItem',
          },
        },
        legend: {
          show: true,
          dock: 'bottom',
          showTitle: true,
        },
        xAxis: {
          show: 'all',
          dock: 'near',
          spacing: 2,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        yAxis: {
          show: 'all',
          dock: 'near',
          spacing: 2,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        tooltip: {
          auto: true,
          hideBasic: false,
          title: '',
          description: '',
        },
        visualization: 'sn-scatter-plot',
        version: '2.0.0',
        extensionMeta: {
          translationKey: '',
          icon: 'puzzle',
          iconChar: 'puzzle',
          isLibraryItem: true,
          visible: true,
          name: 'sn-scatter-plot',
          description: 'A scatter plot.',
          template: 'sn-scatter-plot',
          iconPath:
            'M14.5,9 L13,9 L13,3.3 C13,3.1 12.9,3 12.7,3 L8,3 L8,1.5 C8,0.7 7.3,0 6.5,0 C5.7,0 5,0.7 5,1.5 L5,3 L0.3,3 C0.1,3 0,3.1 0,3.3 L0,9 L1.5,9 C2.3,9 3,9.7 3,10.5 C3,11.3 2.3,12 1.5,12 L0,12 L0,15.7 C0,15.9 0.1,16 0.3,16 L5,16 L5,14.5 C5,13.7 5.7,13 6.5,13 C7.3,13 8,13.7 8,14.5 L8,16 L12.7,16 C12.9,16 13,15.9 13,15.7 L13,12 L14.5,12 C15.3,12 16,11.3 16,10.5 C16,9.7 15.3,9 14.5,9 Z',
          isThirdParty: true,
          version: '2.0.0',
          author: 'QlikTech International AB',
          type: 'visualization',
          supernova: true,
        },
      },
      getHyperCubeData: [
        {
          qMatrix: [
            [
              {
                qText: 'Edward Smith',
                qNum: 'NaN',
                qElemNumber: 17,
                qState: 'O',
              },
              {
                qText: '$18,331,342.66',
                qNum: 18331342.660000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19827.18506',
                qNum: 19827.185060000047,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kathy Clinton',
                qNum: 'NaN',
                qElemNumber: 26,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'John Greg',
                qNum: 'NaN',
                qElemNumber: 13,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Craig Lary',
                qNum: 'NaN',
                qElemNumber: 7,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'David Laychak',
                qNum: 'NaN',
                qElemNumber: 10,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Edward Laychak',
                qNum: 'NaN',
                qElemNumber: 14,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Deborah Halmon',
                qNum: 'NaN',
                qElemNumber: 9,
                qState: 'O',
              },
              {
                qText: '$15,471,055.98',
                qNum: 15471055.979999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16751.63965',
                qNum: 16751.639650000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Judy Thurman',
                qNum: 'NaN',
                qElemNumber: 27,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cheryle Sincock',
                qNum: 'NaN',
                qElemNumber: 19,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Dennis Fisher',
                qNum: 'NaN',
                qElemNumber: 11,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Judy Rowlett',
                qNum: 'NaN',
                qElemNumber: 12,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cary Frank',
                qNum: 'NaN',
                qElemNumber: 6,
                qState: 'O',
              },
              {
                qText: '$14,318,431.93',
                qNum: 14318431.929999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15360.67369',
                qNum: 15360.673690000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jose Bowen',
                qNum: 'NaN',
                qElemNumber: 18,
                qState: 'O',
              },
              {
                qText: '$12,799,619.81',
                qNum: 12799619.810000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13784.3721',
                qNum: 13784.372099999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Karen Clinton',
                qNum: 'NaN',
                qElemNumber: 28,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Lisa Taylor',
                qNum: 'NaN',
                qElemNumber: 31,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ken Roberts',
                qNum: 'NaN',
                qElemNumber: 25,
                qState: 'O',
              },
              {
                qText: '$11,477,932.19',
                qNum: 11477932.189999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12625.70343',
                qNum: 12625.703430000012,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Janice Scott',
                qNum: 'NaN',
                qElemNumber: 16,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'David Howard',
                qNum: 'NaN',
                qElemNumber: 8,
                qState: 'O',
              },
              {
                qText: '$15,850,606.58',
                qNum: 15850606.579999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17069.97836',
                qNum: 17069.978360000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cart Lynch',
                qNum: 'NaN',
                qElemNumber: 5,
                qState: 'O',
              },
              {
                qText: '$13,503,284.34',
                qNum: 13503284.340000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14496.99545',
                qNum: 14496.995450000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Michael Stephens',
                qNum: 'NaN',
                qElemNumber: 33,
                qState: 'O',
              },
              {
                qText: '$4,817,874.83',
                qNum: 4817874.830000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5059.44361',
                qNum: 5059.443610000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Micheal Williams',
                qNum: 'NaN',
                qElemNumber: 32,
                qState: 'O',
              },
              {
                qText: '$3,978,021.91',
                qNum: 3978021.9099999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4143.06639',
                qNum: 4143.066389999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Martha Richard',
                qNum: 'NaN',
                qElemNumber: 34,
                qState: 'O',
              },
              {
                qText: '$2,940,084.82',
                qNum: 2940084.820000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3164.88111',
                qNum: 3164.881110000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'John Davis',
                qNum: 'NaN',
                qElemNumber: 15,
                qState: 'O',
              },
              {
                qText: '$14,134,749.47',
                qNum: 14134749.469999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15171.68747',
                qNum: 15171.687469999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Karl Anderson',
                qNum: 'NaN',
                qElemNumber: 30,
                qState: 'O',
              },
              {
                qText: '$11,735,257.41',
                qNum: 11735257.409999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12910.31092',
                qNum: 12910.310920000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Max Blagburn',
                qNum: 'NaN',
                qElemNumber: 35,
                qState: 'O',
              },
              {
                qText: '$2,546,450.49',
                qNum: 2546450.4900000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2716.39093',
                qNum: 2716.3909300000078,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Amanda Honda',
                qNum: 'NaN',
                qElemNumber: 1,
                qState: 'O',
              },
              {
                qText: '$419,013.73',
                qNum: 419013.7300000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '454.54084',
                qNum: 454.54084000000046,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Brenda Kegler',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
              },
              {
                qText: '$419,013.73',
                qNum: 419013.7300000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '454.54084',
                qNum: 454.54084000000046,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Amalia Craig',
                qNum: 'NaN',
                qElemNumber: 0,
                qState: 'O',
              },
              {
                qText: '$387,519.88',
                qNum: 387519.88000000064,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '418.50586',
                qNum: 418.5058600000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Dennis Johnson',
                qNum: 'NaN',
                qElemNumber: 21,
                qState: 'O',
              },
              {
                qText: '$10,554,818.77',
                qNum: 10554818.76999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11108.15638',
                qNum: 11108.156379999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Craig Amundson',
                qNum: 'NaN',
                qElemNumber: 24,
                qState: 'O',
              },
              {
                qText: '$9,528,637.88',
                qNum: 9528637.880000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10196.26976',
                qNum: 10196.269759999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kim Williams',
                qNum: 'NaN',
                qElemNumber: 29,
                qState: 'O',
              },
              {
                qText: '$7,419,934.78',
                qNum: 7419934.780000009,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8164.54537',
                qNum: 8164.545370000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Don Simmons',
                qNum: 'NaN',
                qElemNumber: 20,
                qState: 'O',
              },
              {
                qText: '$6,750,522.85',
                qNum: 6750522.850000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7102.38316',
                qNum: 7102.383159999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Donna Brown',
                qNum: 'NaN',
                qElemNumber: 22,
                qState: 'O',
              },
              {
                qText: '$2,905,794.77',
                qNum: 2905794.7699999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2958.10685',
                qNum: 2958.1068499999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jimmie Holley',
                qNum: 'NaN',
                qElemNumber: 23,
                qState: 'O',
              },
              {
                qText: '$1,756,592.03',
                qNum: 1756592.0300000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1997.67832',
                qNum: 1997.6783200000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Brenda Gibson',
                qNum: 'NaN',
                qElemNumber: 3,
                qState: 'O',
              },
              {
                qText: '$139,727.00',
                qNum: 139727.0000000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '146.94371',
                qNum: 146.94370999999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Amelia Fields',
                qNum: 'NaN',
                qElemNumber: 2,
                qState: 'O',
              },
              {
                qText: '$86,892.00',
                qNum: 86892.00000000012,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '91.86719',
                qNum: 91.86719000000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Marian White',
                qNum: 'NaN',
                qElemNumber: 36,
                qState: 'O',
              },
              {
                qText: '$11,352.12',
                qNum: 11352.12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12.14319',
                qNum: 12.143190000000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: '-',
                qNum: 'NaN',
                qElemNumber: -2,
                qState: 'L',
                qIsNull: true,
              },
              {
                qText: '$7,320.99',
                qNum: 7320.990000000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10440.64171',
                qNum: 10440.641709999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '0',
                qNum: 0,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
          ],
          qTails: [
            {
              qUp: 0,
              qDown: 0,
            },
          ],
          qArea: {
            qLeft: 0,
            qTop: 0,
            qWidth: 4,
            qHeight: 38,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
