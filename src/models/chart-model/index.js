import KEYS from '../../constants/keys';
import createViewHandler from '../../view-handler';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  colorService,
  picasso,
  viewState,
  extremumModel,
  dataHandler,
}) {
  const EXCLUDE = [
    KEYS.COMPONENT.X_AXIS_TITLE,
    KEYS.COMPONENT.Y_AXIS_TITLE,
    // KEYS.COMPONENT.X_AXIS,
    // KEYS.COMPONENT.Y_AXIS,
    // KEYS.COMPONENT.GRID_LINES,
  ];

  const viewHandler = createViewHandler({
    extremumModel,
    viewState,
  });

  const mainConfig = {
    key: KEYS.DATA.MAIN,
    data: layoutService.getHyperCube(),
    config: {
      localeInfo,
    },
  };

  const getBinnedDataConfig = () => {
    if (!dataHandler.getMeta().isBinnedData) {
      return [];
    }

    return [
      {
        key: KEYS.DATA.BIN,
        type: 'matrix',
        data: dataHandler.binArray,
        config: {
          parse: {
            fields() {
              return [
                {
                  key: KEYS.FIELDS.BIN,
                  title: 'Bin',
                },
                {
                  key: KEYS.FIELDS.BIN_X,
                  title: 'X',
                },
                {
                  key: KEYS.FIELDS.BIN_Y,
                  title: 'Y',
                },
                {
                  key: KEYS.FIELDS.BIN_DENSITY,
                  title: 'Density',
                },
              ];
            },
            row(d) {
              return {
                bin: d.qElemNumber,
                binX: (d.qText[0] + d.qText[2]) / 2,
                binY: (d.qText[1] + d.qText[3]) / 2,
                binDensity: d.qNum,
              };
            },
          },
        },
      },
    ];
  };

  const dataset = picasso.data('q')(mainConfig);

  function updatePartial() {
    requestAnimationFrame(() => {
      // TODO: cancel requests as well to optimize???
      // const startTime = Date.now();
      chart.update({
        partialData: true,
        excludeFromUpdate: EXCLUDE,
        // transforms: [
        //   {
        //     key: KEYS.COMPONENT.POINT,
        //     transform: { a: 1, b: 0, c: 0, d: 1, e: x, f: y },
        //   },
        // ],
      });
      // TODO: debounce -> interactionInProgess = false
      // console.log('chart rendered in ', Date.now() - startTime, ' ms');
    });
  }

  const update = ({ settings } = {}) => {
    chart.update({
      data: [
        {
          type: 'q',
          ...mainConfig,
        },
        ...getBinnedDataConfig(),
        ...colorService.getData(),
      ],
      settings,
    });
  };
  let { scale: currentScale } = viewHandler.getMeta();
  const handleDataViewUpdate = () => {
    const binnedBeforeFetch = dataHandler.getMeta().isBinnedData;
    dataHandler
      .fetch()
      // Promise rejected if trying to fetch same data window twice in a row
      .catch(() => {})
      .finally(() => {
        const miniMapIsToggled =
          (currentScale >= 1 && viewHandler.getMeta().scale < 1) || // Off -> On
          (currentScale < 1 && viewHandler.getMeta().scale >= 1); // On -> Off
        if (binnedBeforeFetch !== dataHandler.getMeta().isBinnedData || miniMapIsToggled) {
          update(); // Switching between binned and not binned data - requires complete chart update.
        } else {
          updatePartial();
        }
        currentScale = viewHandler.getMeta().scale;
      });
  };

  viewState.onChanged('dataView', handleDataViewUpdate);

  const state = { isPrelayout: true };

  const chartModel = {
    query: {
      getViewState: () => viewState,
      getViewHandler: () => viewHandler,
      getDataHandler: () => dataHandler,
      getLocaleInfo: () => localeInfo,
      getFormatter: (fieldName) => dataset.field(fieldName).formatter(),
      isPrelayout: () => state.isPrelayout,
    },
    command: {
      layoutComponents: ({ settings } = {}) => {
        chart.layoutComponents({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...getBinnedDataConfig(),
            ...colorService.getData(),
          ],
          settings,
        });
        state.isPrelayout = false;
      },
      update,
    },
  };

  return chartModel;
}
