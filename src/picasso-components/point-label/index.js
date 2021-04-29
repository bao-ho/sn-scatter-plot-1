import { getLabels, DISTANCE } from './get-labels';

const DY = DISTANCE - 1;

export default {
  require: ['chart', 'renderer'],
  defaultSettings: {
    settings: {
      rtl: false,
      label: () => {},
      showLabel: () => true,
      target: {
        point: 'point-component',
      },
      mode: 1,
    },
    style: {
      fontFamily: 'QlikView Sans, sans-serif',
      fontSize: '12px',
      fill: '#333',
    },
  },
  preferredSize() {
    return {
      edgeBleed: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
    };
  },
  render() {
    const { settings } = this.settings;
    const { target, label, showLabel, mode, debugMode } = settings;
    const key = target.point;
    const component = this.chart.component(key);

    if (!component) {
      return [];
    }

    const nodeFilter = (node) => node.key === key && showLabel(node);
    const nodes = [...this.chart.findShapes('circle'), ...this.chart.findShapes('path')].filter(nodeFilter);

    if (!nodes.length) {
      return [];
    }

    const { style } = this;

    const measureText = (text) =>
      this.renderer.measureText({
        text,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
      });
    const labelHeight = measureText('M').height - 2;

    const { topLabels, bottomLabels } = getLabels({ measureText, mode, nodes, label, labelHeight });

    const labels1 = topLabels.map((node) => ({
      type: 'text',
      text: node.text,
      x: node.cx,
      y: node.topRect.y2,
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      fill: style.fill,
      baseline: 'text-after-edge',
      anchor: 'middle',
    }));
    const rects1 =
      mode === 2 || !debugMode
        ? []
        : topLabels.map((node) => ({
            type: 'rect',
            x: node.topRect.x1,
            y: node.topRect.y1,
            width: node.labelWidth,
            height: labelHeight,
            fill: 'yellow',
          }));
    const lines1 = topLabels.map((node) => ({
      type: 'line',
      x1: node.cx,
      x2: node.cx,
      y1: node.topRect.y2,
      y2: node.topRect.y2 + DY,
      stroke: 'black',
      strokeWidth: 1,
    }));
    const labels2 = bottomLabels.map((node) => ({
      type: 'text',
      text: node.text,
      x: node.cx,
      y: node.bottomRect.y1,
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      fill: style.fill,
      baseline: 'text-before-edge',
      anchor: 'middle',
    }));
    const rects2 =
      mode === 2 || !debugMode
        ? []
        : bottomLabels.map((node) => ({
            type: 'rect',
            x: node.bottomRect.x1,
            y: node.bottomRect.y1,
            width: node.labelWidth,
            height: labelHeight,
            fill: 'yellow',
          }));
    const lines2 = bottomLabels.map((node) => ({
      type: 'line',
      x1: node.cx,
      x2: node.cx,
      y1: node.bottomRect.y1 - DY,
      y2: node.bottomRect.y1,
      stroke: 'black',
      strokeWidth: 1,
    }));
    return [...rects1, ...rects2, ...labels1, ...labels2, ...lines1, ...lines2];
  },
};
