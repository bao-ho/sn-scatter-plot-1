import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';

export default function createComponents({ context, models, flags }) {
  const { colorService, disclaimerModel } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    ...createAxes({ models, flags }),
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint(models),
    ...createAxisTitles(models),
    createPointLabels(models),
    ...colorService.custom.legendComponents(),
    disclaimer,
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
