'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var emptyObj = function emptyObj() {
  return {};
};

exports.default = {
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  rowPadding: 0,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  defaultSortMethod: function defaultSortMethod(a, b) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent: _utils2.default.makeTemplateComponent('rt-table', 'Table'),
  TheadComponent: _utils2.default.makeTemplateComponent('rt-thead', 'Thead'),
  TbodyComponent: _utils2.default.makeTemplateComponent('rt-tbody', 'Tbody'),
  TrGroupComponent: _utils2.default.makeTemplateComponent('rt-tr-group', 'TrGroup'),
  TrComponent: _utils2.default.makeTemplateComponent('rt-tr', 'Tr'),
  ThComponent: function ThComponent(_ref) {
    var toggleSort = _ref.toggleSort,
        className = _ref.className,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['toggleSort', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)(className, 'rt-th'),
        onClick: function onClick(e) {
          toggleSort && toggleSort(e);
        }
      }, rest),
      children
    );
  },
  TdComponent: _utils2.default.makeTemplateComponent('rt-td', 'Td'),
  TfootComponent: _utils2.default.makeTemplateComponent('rt-tfoot', 'Tfoot'),
  FilterComponent: function FilterComponent(_ref2) {
    var filter = _ref2.filter,
        _onChange = _ref2.onChange;
    return _react2.default.createElement('input', {
      type: 'text',
      style: {
        width: '100%'
      },
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    });
  },
  ExpanderComponent: function ExpanderComponent(_ref3) {
    var isExpanded = _ref3.isExpanded;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('rt-expander', isExpanded && '-open') },
      '\u2022'
    );
  },
  PivotValueComponent: function PivotValueComponent(_ref4) {
    var subRows = _ref4.subRows,
        value = _ref4.value;
    return _react2.default.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref5) {
    var subRows = _ref5.subRows,
        column = _ref5.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return _react2.default.createElement(
        'span',
        { key: i },
        row[column.id],
        i < subRows.length - 1 ? ', ' : ''
      );
    });
    return _react2.default.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _pagination2.default,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref6) {
    var className = _ref6.className,
        loading = _ref6.loading,
        loadingText = _ref6.loadingText,
        rest = _objectWithoutProperties(_ref6, ['className', 'loading', 'loadingText']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('-loading', { '-active': loading }, className)
      }, rest),
      _react2.default.createElement(
        'div',
        { className: '-loading-inner' },
        loadingText
      )
    );
  },
  NoDataComponent: _utils2.default.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _utils2.default.makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJkZWZhdWx0UGFnZVNpemUiLCJyb3dQYWRkaW5nIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZpbHRlciIsInJvdyIsImNvbHVtbiIsImlkIiwicGl2b3RJZCIsInVuZGVmaW5lZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJ2YWx1ZSIsImRlZmF1bHRTb3J0TWV0aG9kIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5IiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93IiwibWluV2lkdGgiLCJhZ2dyZWdhdGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImdldEhlYWRlclByb3BzIiwiZm9vdGVyQ2xhc3NOYW1lIiwiZm9vdGVyU3R5bGUiLCJnZXRGb290ZXJQcm9wcyIsImZpbHRlck1ldGhvZCIsImZpbHRlckFsbCIsInNvcnRNZXRob2QiLCJleHBhbmRlckRlZmF1bHRzIiwid2lkdGgiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0IiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVDb21wb25lbnQiLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJ0b2dnbGVTb3J0IiwiY2hpbGRyZW4iLCJyZXN0IiwiZSIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiRXhwYW5kZXJDb21wb25lbnQiLCJpc0V4cGFuZGVkIiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsInN1YlJvd3MiLCJsZW5ndGgiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwicHJldmlld1ZhbHVlcyIsImQiLCJtYXAiLCJpIiwiUGl2b3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiUHJldmlvdXNDb21wb25lbnQiLCJOZXh0Q29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7QUFGQTs7O0FBSUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTyxFQUFQO0FBQUEsQ0FBakI7O2tCQUVlO0FBQ2I7QUFDQUMsUUFBTSxFQUZPO0FBR2JDLFdBQVMsS0FISTtBQUliQyxrQkFBZ0IsSUFKSDtBQUtiQyxxQkFBbUIsS0FMTjtBQU1iQyx3QkFBc0IsSUFOVDtBQU9iQyx1QkFBcUIsSUFQUjtBQVFiQyxtQkFBaUIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBUko7QUFTYkMsbUJBQWlCLEVBVEo7QUFVYkMsY0FBWSxDQVZDO0FBV2JDLGdCQUFjLElBWEQ7QUFZYkMsMkJBQXlCLElBWlo7QUFhYkMsd0JBQXNCLElBYlQ7QUFjYkMsd0JBQXNCLElBZFQ7QUFlYkMsc0JBQW9CLEtBZlA7QUFnQmJDLFlBQVUsSUFoQkc7QUFpQmJDLGFBQVcsSUFqQkU7QUFrQmJDLGNBQVksS0FsQkM7QUFtQmJDLG1CQUFpQixLQW5CSjtBQW9CYkMsaUJBQWUsRUFwQkY7QUFxQmJDLG1CQUFpQixFQXJCSjtB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QUpGLEtBRGdCO0FBQUEsR0EvTkw7QUF3T2JxQyxtQkFBaUIsZ0JBQUUvQixxQkFBRixDQUF3QixXQUF4QixFQUFxQyxRQUFyQyxDQXhPSjtBQXlPYmdDLG9CQUFrQixnQkFBRWhDLHFCQUFGLENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLENBek9MO0FBME9iaUMsbUJBQWlCO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47QUFBQTtBQTFPSixDIiwiZmlsZSI6ImRlZmF1bHRQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbidcblxuY29uc3QgZW1wdHlPYmogPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gR2VuZXJhbFxuICBkYXRhOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuICBzaG93UGFnaW5hdGlvblRvcDogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uQm90dG9tOiB0cnVlLFxuICBzaG93UGFnZVNpemVPcHRpb25zOiB0cnVlLFxuICBwYWdlU2l6ZU9wdGlvbnM6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSxcbiAgZGVmYXVsdFBhZ2VTaXplOiAyMCxcbiAgcm93UGFkZGluZzogMCxcbiAgc2hvd1BhZ2VKdW1wOiB0cnVlLFxuICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IHRydWUsXG4gIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiB0cnVlLFxuICBmcmVlemVXaGVuRXhwYW5kZWQ6IGZhbHNlLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgZGVmYXVsdFNvcnREZXNjOiBmYWxzZSxcbiAgZGVmYXVsdFNvcnRlZDogW10sXG4gIGRlZmF1bHRGaWx0ZXJlZDogW10sXG4gIGRlZmF1bHRSZXNpemVkOiBbXSxcbiAgZGVmYXVsdEV4cGFuZGVkOiB7fSxcbiAgZGVmYXVsdEZpbHRlck1ldGhvZDogKGZpbHRlciwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbHRlci5waXZvdElkIHx8IGZpbHRlci5pZFxuICAgIHJldHVybiByb3dbaWRdICE9PSB1bmRlZmluZWRcbiAgICAgID8gU3RyaW5nKHJvd1tpZF0pLnN0YXJ0c1dpdGgoZmlsdGVyLnZhbHVlKVxuICAgICAgOiB0cnVlXG4gIH0sXG4gIGRlZmF1bHRTb3J0TWV0aG9kOiAoYSwgYikgPT4ge1xuICAgIC8vIGZvcmNlIG51bGwgYW5kIHVuZGVmaW5lZCB0byB0aGUgYm90dG9tXG4gICAgYSA9IGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkID8gJycgOiBhXG4gICAgYiA9IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkID8gJycgOiBiXG4gICAgLy8gZm9yY2UgYW55IHN0cmluZyB2YWx1ZXMgdG8gbG93ZXJjYXNlXG4gICAgYSA9IHR5cGVvZiBhID09PSAnc3RyaW5nJyA/IGEudG9Mb3dlckNhc2UoKSA6IGFcbiAgICBiID0gdHlwZW9mIGIgPT09ICdzdHJpbmcnID8gYi50b0xvd2VyQ2FzZSgpIDogYlxuICAgIC8vIFJldHVybiBlaXRoZXIgMSBvciAtMSB0byBpbmRpY2F0ZSBhIHNvcnQgcHJpb3JpdHlcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIC8vIHJldHVybmluZyAwLCB1bmRlZmluZWQgb3IgYW55IGZhbHNleSB2YWx1ZSB3aWxsIHVzZSBzdWJzZXF1ZW50IHNvcnRzIG9yIHRoZSBpbmRleCBhcyBhIHRpZWJyZWFrZXJcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgUHJvcHNcbiAgLy8gcGFnZTogdW5kZWZpbmVkLFxuICAvLyBwYWdlU2l6ZTogdW5kZWZpbmVkLFxuICAvLyBzb3J0ZWQ6IFtdLFxuICAvLyBmaWx0ZXJlZDogW10sXG4gIC8vIHJlc2l6ZWQ6IFtdLFxuICAvLyBleHBhbmRlZDoge30sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBDYWxsYmFja3NcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25Tb3J0ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvblJlc2l6ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25FeHBhbmRlZENoYW5nZTogdW5kZWZpbmVkLFxuXG4gIC8vIFBpdm90aW5nXG4gIHBpdm90Qnk6IHVuZGVmaW5lZCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRHcm91cFRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRib2R5UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUckdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGRQcm9wczogZW1wdHlPYmosXG4gIGdldFRmb290UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRQYWdpbmF0aW9uUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRMb2FkaW5nUHJvcHM6IGVtcHR5T2JqLFxuICBnZXROb0RhdGFQcm9wczogZW1wdHlPYmosXG4gIGdldFJlc2l6ZXJQcm9wczogZW1wdHlPYmosXG5cbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xuICBjb2x1bW46IHtcbiAgICAvLyBSZW5kZXJlcnNcbiAgICBDZWxsOiB1bmRlZmluZWQsXG4gICAgSGVhZGVyOiB1bmRlZmluZWQsXG4gICAgRm9vdGVyOiB1bmRlZmluZWQsXG4gICAgQWdncmVnYXRlZDogdW5kZWZpbmVkLFxuICAgIFBpdm90OiB1bmRlZmluZWQsXG4gICAgUGl2b3RWYWx1ZTogdW5kZWZpbmVkLFxuICAgIEV4cGFuZGVyOiB1bmRlZmluZWQsXG4gICAgRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgLy8gQWxsIENvbHVtbnNcbiAgICBzb3J0YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIHJlc2l6YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIGZpbHRlcmFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBzaG93OiB0cnVlLFxuICAgIG1pbldpZHRoOiAxMDAsXG4gICAgLy8gQ2VsbHMgb25seVxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IHt9LFxuICAgIGdldFByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBQaXZvdCBvbmx5XG4gICAgYWdncmVnYXRlOiB1bmRlZmluZWQsXG4gICAgLy8gSGVhZGVycyBvbmx5XG4gICAgaGVhZGVyQ2xhc3NOYW1lOiAnJyxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgZ2V0SGVhZGVyUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEZvb3RlcnMgb25seVxuICAgIGZvb3RlckNsYXNzTmFtZTogJycsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldEZvb3RlclByb3BzOiBlbXB0eU9iaixcbiAgICBmaWx0ZXJNZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBmaWx0ZXJBbGw6IGZhbHNlLFxuICAgIHNvcnRNZXRob2Q6IHVuZGVmaW5lZCxcbiAgfSxcblxuICAvLyBHbG9iYWwgRXhwYW5kZXIgQ29sdW1uIERlZmF1bHRzXG4gIGV4cGFuZGVyRGVmYXVsdHM6IHtcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMzUsXG4gIH0sXG5cbiAgcGl2b3REZWZhdWx0czoge1xuICAgIC8vIGV4dGVuZCB0aGUgZGVmYXVsdHMgZm9yIHBpdm90ZWQgY29sdW1ucyBoZXJlXG4gIH0sXG5cbiAgLy8gVGV4dFxuICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXG4gIG5leHRUZXh0OiAnTmV4dCcsXG4gIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXG4gIG5vRGF0YVRleHQ6ICdObyByb3dzIGZvdW5kJyxcbiAgcGFnZVRleHQ6ICdQYWdlJyxcbiAgb2ZUZXh0OiAnb2YnLFxuICByb3dzVGV4dDogJ3Jvd3MnLFxuXG4gIC8vIENvbXBvbmVudHNcbiAgVGFibGVDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10YWJsZScsICdUYWJsZScpLFxuICBUaGVhZENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRoZWFkJywgJ1RoZWFkJyksXG4gIFRib2R5Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGJvZHknLCAnVGJvZHknKSxcbiAgVHJHcm91cENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRyLWdyb3VwJywgJ1RyR3JvdXAnKSxcbiAgVHJDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10cicsICdUcicpLFxuICBUaENvbXBvbmVudDogKHsgdG9nZ2xlU29ydCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3J0LXRoJyl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIHRvZ2dsZVNvcnQgJiYgdG9nZ2xlU29ydChlKVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuICBUZENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRkJywgJ1RkJyksXG4gIFRmb290Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGZvb3QnLCAnVGZvb3QnKSxcbiAgRmlsdGVyQ29tcG9uZW50OiAoeyBmaWx0ZXIsIG9uQ2hhbmdlIH0pID0+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPSd0ZXh0J1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyLnZhbHVlIDogJyd9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAvPixcbiAgRXhwYW5kZXJDb21wb25lbnQ6ICh7IGlzRXhwYW5kZWQgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtZXhwYW5kZXInLCBpc0V4cGFuZGVkICYmICctb3BlbicpfT5cbiAgICAgICZidWxsO1xuICAgIDwvZGl2PixcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogKHsgc3ViUm93cywgdmFsdWUgfSkgPT5cbiAgICA8c3Bhbj5cbiAgICAgIHt2YWx1ZX0ge3N1YlJvd3MgJiYgYCgke3N1YlJvd3MubGVuZ3RofSlgfVxuICAgIDwvc3Bhbj4sXG4gIEFnZ3JlZ2F0ZWRDb21wb25lbnQ6ICh7IHN1YlJvd3MsIGNvbHVtbiB9KSA9PiB7XG4gICAgY29uc3QgcHJldmlld1ZhbHVlcyA9IHN1YlJvd3NcbiAgICAgIC5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIC5tYXAoKHJvdywgaSkgPT5cbiAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICB7cm93W2NvbHVtbi5pZF19XG4gICAgICAgICAge2kgPCBzdWJSb3dzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHtwcmV2aWV3VmFsdWVzfVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfSxcbiAgUGl2b3RDb21wb25lbnQ6IHVuZGVmaW5lZCwgLy8gdGhpcyBpcyBhIGNvbXB1dGVkIGRlZmF1bHQgZ2VuZXJhdGVkIHVzaW5nXG4gIC8vIHRoZSBFeHBhbmRlckNvbXBvbmVudCBhbmQgUGl2b3RWYWx1ZUNvbXBvbmVudCBhdCBydW4tdGltZSBpbiBtZXRob2RzLmpzXG4gIFBhZ2luYXRpb25Db21wb25lbnQ6IFBhZ2luYXRpb24sXG4gIFByZXZpb3VzQ29tcG9uZW50OiB1bmRlZmluZWQsXG4gIE5leHRDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTG9hZGluZ0NvbXBvbmVudDogKHsgY2xhc3NOYW1lLCBsb2FkaW5nLCBsb2FkaW5nVGV4dCwgLi4ucmVzdCB9KSA9PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWxvYWRpbmcnLCB7ICctYWN0aXZlJzogbG9hZGluZyB9LCBjbGFzc05hbWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9Jy1sb2FkaW5nLWlubmVyJz5cbiAgICAgICAge2xvYWRpbmdUZXh0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+LFxuICBOb0RhdGFDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC1ub0RhdGEnLCAnTm9EYXRhJyksXG4gIFJlc2l6ZXJDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC1yZXNpemVyJywgJ1Jlc2l6ZXInKSxcbiAgUGFkUm93Q29tcG9uZW50OiAoKSA9PiA8c3Bhbj4mbmJzcDs8L3NwYW4+LFxufVxuIl19