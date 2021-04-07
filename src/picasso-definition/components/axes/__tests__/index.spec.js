import * as glyphCount from '../glyph-count';
import createAxes from '../index';

describe('axes', () => {
  let sandbox;
  let context;
  let layout;
  let layoutModel;
  let dockModel;
  let axes;
  let themeModel;

  before(() => {
    sandbox = sinon.createSandbox();
    context = {
      rtl: false,
      theme: {
        getStyle: sandbox.spy(),
      },
    };
    dockModel = {
      chartSize: {
        width: 700,
        height: 600,
      },
      x: {
        dock: 'bottom',
      },
      y: {
        dock: 'left',
      },
    };
    layout = {
      xAxis: {
        show: 'all',
        label: 'auto',
      },
      yAxis: {
        show: 'all',
      },
    };
    layoutModel = {
      getLayout: () => layout,
      getLayoutValue: sandbox.stub(),
    };
    const gridLine = {
      auto: true,
      spacing: 1,
    };
    layoutModel.getLayoutValue.withArgs('gridLine', {}).returns(gridLine);
    const style = {
      axis: {
        label: {
          name: {
            color: '#595959',
            fontFamily: "'Source Sans Pro', 'Arial', 'sans-serif'",
            fontSize: '13px',
          },
        },
        line: {
          major: { color: '#595959' },
          minor: { color: '#595959' },
        },
      },
    };
    themeModel = {
      query: {
        getStyle: () => style,
      },
    };

    sandbox.stub(glyphCount, 'default').returns(5);
  });

  it('should create two axes', () => {
    axes = createAxes({ context, layoutModel, dockModel, themeModel });
    expect(axes.length).to.equal(2);
    expect(axes[0].type).to.equal('axis');
    expect(axes[1].type).to.equal('axis');
  });
});
