import {
  useEffect,
  useState,
  useStaleLayout,
  useTheme,
  useConstraints,
  useTranslator,
  useApp,
  useAppLayout,
  useModel,
  useOptions,
  useRect,
  useSelections,
} from '@nebula.js/stardust';

import createLayoutModel from '../models/layout-model';
import createChartModel from '../models/chart-model';
import createTickModel from '../models/tick-model';
import createDockModel from '../models/dock-model';
import createSelectionModel from '../models/selection-model';
import createThemeModel from '../models/theme-model';
import createColorService from '../models/color-service';
import getLogicalSize from '../logical-size';
import createViewState from '../models/chart-model/viewstate';
import createExtremumModel from '../models/extremum-model';
import createDisclaimerModel from '../models/disclaimer-model';

const useModels = ({ core, flags }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const constraints = useConstraints();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
  const app = useApp();
  const { qLocaleInfo: localeInfo } = useAppLayout();
  const [selectionModel, setSelectionModel] = useState();
  const [models, setModels] = useState();

  useEffect(() => {
    if (!core) {
      return () => {};
    }

    const { chart, actions } = core;
    const sm = createSelectionModel({
      chart,
      actions,
      selections,
      document,
    });

    setSelectionModel(sm);

    return () => {
      sm.command.destroy();
    };
  }, [core]);

  useEffect(() => {
    if (!layout || !selectionModel) {
      return;
    }

    const { picassoInstance, chart, actions } = core;
    const layoutModel = createLayoutModel({ layout });
    const logicalSize = getLogicalSize({ layout: layoutModel.getLayout(), options });
    const dockModel = createDockModel({ layoutModel, size: logicalSize || rect, rtl: options.direction === 'rtl' });
    const themeModel = createThemeModel({ theme });
    const extremumModel = createExtremumModel(layoutModel, options.viewState);
    const tickModel = createTickModel({ layoutModel, dockModel, extremumModel, themeModel, chart });
    const viewState = createViewState(layoutModel, options.viewState, tickModel);
    const colorService = createColorService({
      actions,
      localeInfo,
      app,
      chart,
      theme,
      translator,
      options,
      model,
      layoutModel,
      picasso: picassoInstance,
      viewState,
    });

    const chartModel = createChartModel({
      chart,
      localeInfo,
      layoutModel,
      dockModel,
      model,
      picasso: picassoInstance,
      options,
      viewState,
      colorService,
      extremumModel,
    });

    const disclaimerModel = createDisclaimerModel({ layoutModel, flags });

    selectionModel.command.setLayout({ layout });
    setModels({
      layoutModel,
      tickModel,
      chartModel,
      dockModel,
      selectionModel,
      themeModel,
      disclaimerModel,
      colorService,
    });
  }, [
    model,
    app,
    selectionModel,
    layout,
    constraints,
    theme.name(),
    translator.language(),
    options.direction,
    options.viewState,
  ]);

  return models;
};

export default useModels;
