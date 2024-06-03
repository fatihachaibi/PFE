(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[4],{124:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a.n(s),i=a(12),n=a.n(i),r=a(48),l=a(16),d=a(0),c=a(8);class data_table_DataTableFormat extends i.Component{constructor(...e){super(...e),o()(this,"csvSeparator",this.props.uiSettings.get("csv:separator",",")),o()(this,"quoteValues",this.props.uiSettings.get("csv:quoteValues",!0)),o()(this,"state",{})}static renderCell({table:e,columnIndex:t,rowIndex:a,formattedValue:s,uiActions:o,isFilterable:i}){const n=e.columns[t];return Object(c.jsx)(l.EuiFlexGroup,{responsive:!1,gutterSize:"s",alignItems:"center"},Object(c.jsx)(l.EuiFlexItem,{grow:!1},s),Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiFlexGroup,{responsive:!1,gutterSize:"none",alignItems:"center"},i&&Object(c.jsx)(l.EuiToolTip,{position:"bottom",content:Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.filterForValueButtonTooltip",defaultMessage:"Filter for value"})},Object(c.jsx)(l.EuiButtonIcon,{iconType:"plusInCircle",color:"text","aria-label":d.i18n.translate("data.inspector.table.filterForValueButtonAriaLabel",{defaultMessage:"Filter for value"}),"data-test-subj":"filterForInspectorCellValue",className:"insDataTableFormat__filter",onClick:()=>{const s=e.rows[a][n.id],i={table:e,column:t,row:a,value:s};o.executeTriggerActions("VALUE_CLICK_TRIGGER",{data:{data:[i]}})}})),i&&Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiToolTip,{position:"bottom",content:Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.filterOutValueButtonTooltip",defaultMessage:"Filter out value"})},Object(c.jsx)(l.EuiButtonIcon,{iconType:"minusInCircle",color:"text","aria-label":d.i18n.translate("data.inspector.table.filterOutValueButtonAriaLabel",{defaultMessage:"Filter out value"}),"data-test-subj":"filterOutInspectorCellValue",className:"insDataTableFormat__filter",onClick:()=>{const s=e.rows[a][n.id],i={table:e,column:t,row:a,value:s};o.executeTriggerActions("VALUE_CLICK_TRIGGER",{data:{data:[i],negate:!0}})}}))))))}static getDerivedStateFromProps({data:e,uiActions:t,fieldFormats:a,isFilterable:s}){return e?{columns:e.columns.map(((o,i)=>{const n={id:"string",...o.meta.params},r=a.deserialize(n),l=s(o);return{name:o.name,field:o.id,sortable:!0,render:a=>{const s=r.convert(a),n=e.rows.findIndex((e=>e[o.id]===a))||0;return data_table_DataTableFormat.renderCell({table:e,columnIndex:i,rowIndex:n,formattedValue:s,uiActions:t,isFilterable:l})}}})),rows:e.rows}:{columns:null,rows:null}}render(){const{columns:e,rows:t}=this.state;return Object(c.jsx)(l.EuiInMemoryTable,{className:"insDataTableFormat__table","data-test-subj":"inspectorTable",columns:e,items:t,sorting:!0,pagination:{pageSizeOptions:[10,20,50],initialPageSize:20}})}}class data_table_selector_TableSelector extends i.Component{constructor(...e){super(...e),o()(this,"state",{isPopoverOpen:!1}),o()(this,"togglePopover",(()=>{this.setState((e=>({isPopoverOpen:!e.isPopoverOpen})))})),o()(this,"closePopover",(()=>{this.setState({isPopoverOpen:!1})})),o()(this,"renderTableDropdownItem",((e,t)=>Object(c.jsx)(l.EuiContextMenuItem,{key:t,icon:e===this.props.selectedTable?"check":"empty",onClick:()=>{this.props.onTableChanged(e),this.closePopover()},"data-test-subj":`inspectorTableChooser${t}`},Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.tableLabel",defaultMessage:"Table {index}",values:{index:t+1}}))))}render(){const e=this.props.tables.findIndex((e=>e===this.props.selectedTable));return Object(c.jsx)(l.EuiFlexGroup,{alignItems:"center",gutterSize:"xs"},Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)("strong",null,Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.tableSelectorLabel",defaultMessage:"Selected:"}))),Object(c.jsx)(l.EuiFlexItem,{grow:!0},Object(c.jsx)(l.EuiPopover,{id:"inspectorTableChooser",button:Object(c.jsx)(l.EuiButtonEmpty,{iconType:"arrowDown",iconSide:"right",size:"s",onClick:this.togglePopover,"data-test-subj":"inspectorTableChooser"},Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.tableLabel",defaultMessage:"Table {index}",values:{index:e+1}})),isOpen:this.state.isPopoverOpen,closePopover:this.closePopover,panelPaddingSize:"none",anchorPosition:"downLeft",repositionOnScroll:!0},Object(c.jsx)(l.EuiContextMenuPanel,{items:this.props.tables.map(this.renderTableDropdownItem),"data-test-subj":"inspectorTableChooserMenuPanel"}))))}}var p=a(1),u=a(106),b=a(3);const j=Object(p.memoize)((e=>e.some((({columns:e,rows:t})=>Object(b.tableHasFormulas)(e,t)))));class download_options_DataDownloadOptions extends i.Component{constructor(...e){super(...e),o()(this,"state",{isPopoverOpen:!1}),o()(this,"onTogglePopover",(()=>{this.setState((e=>({isPopoverOpen:!e.isPopoverOpen})))})),o()(this,"closePopover",(()=>{this.setState({isPopoverOpen:!1})})),o()(this,"exportCsv",((e=!0)=>{let t=this.props.title;t&&0!==t.length||(t=d.i18n.translate("data.inspector.table.downloadOptionsUnsavedFilename",{defaultMessage:"unsaved"}));const a=this.props.datatables.reduce(((a,s,o)=>{if(s){const i=this.props.datatables.length>1?`-${o+1}`:"";a[`${t}${i}.csv`]={content:Object(b.datatableToCSV)(s,{csvSeparator:this.props.uiSettings.get("csv:separator",","),quoteValues:this.props.uiSettings.get("csv:quoteValues",!0),raw:!e,formatFactory:this.props.fieldFormats.deserialize,escapeFormulaValues:!1}),type:b.CSV_MIME_TYPE}}return a}),{});a&&Object(u.downloadMultipleAs)(a)})),o()(this,"exportFormattedCsv",(()=>{this.exportCsv(!0)})),o()(this,"exportFormattedAsRawCsv",(()=>{this.exportCsv(!1)}))}renderFormattedDownloads(){const e=j(this.props.datatables),t=Object(c.jsx)(l.EuiButton,{iconType:"arrowDown",iconSide:"right",size:"s",onClick:this.onTogglePopover},Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.downloadCSVToggleButtonLabel",defaultMessage:"Download CSV"})),a=e?Object(c.jsx)(l.EuiToolTip,{position:"top",content:d.i18n.translate("data.inspector.table.exportButtonFormulasWarning",{defaultMessage:"Your CSV contains characters that spreadsheet applications might interpret as formulas."})},t):t,s=[Object(c.jsx)(l.EuiContextMenuItem,{key:"csv",onClick:this.exportFormattedCsv,toolTipContent:Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.formattedCSVButtonTooltip",defaultMessage:"Download the data in table format"}),toolTipPosition:"left"},Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.formattedCSVButtonLabel",defaultMessage:"Formatted CSV"})),Object(c.jsx)(l.EuiContextMenuItem,{key:"rawCsv",onClick:this.exportFormattedAsRawCsv,toolTipContent:Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.rawCSVButtonTooltip",defaultMessage:"Download the data as provided, for example, dates as timestamps"}),toolTipPosition:"left"},Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.rawCSVButtonLabel",defaultMessage:"Raw CSV"}))];return Object(c.jsx)(l.EuiPopover,{id:"inspectorDownloadData",button:a,isOpen:this.state.isPopoverOpen,closePopover:this.closePopover,panelPaddingSize:"none",repositionOnScroll:!0},Object(c.jsx)(l.EuiContextMenuPanel,{className:"eui-textNoWrap",items:s}))}render(){return this.renderFormattedDownloads()}}class data_view_DataViewComponent extends i.Component{constructor(...e){super(...e),o()(this,"state",{}),o()(this,"onUpdateData",(e=>{const t=Object.keys(e),a=t.length?e[t[0]]:void 0;a&&this.setState({datatable:a})})),o()(this,"selectTable",(e=>{e!==this.state.datatable&&this.setState({datatable:e})}))}static getDerivedStateFromProps(e,t){if(t&&e.adapters===t.adapters)return null;const{tables:a}=e.adapters.tables,s=Object.keys(a),o=s.length?a[s[0]]:void 0;return{adapters:e.adapters,datatable:o}}componentDidMount(){this.props.adapters.tables.on("change",this.onUpdateData)}componentWillUnmount(){this.props.adapters.tables.removeListener("change",this.onUpdateData)}static renderNoData(){return Object(c.jsx)(l.EuiEmptyPrompt,{title:Object(c.jsx)("h2",null,Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.noDataAvailableTitle",defaultMessage:"No data available"})),body:Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)("p",null,Object(c.jsx)(r.FormattedMessage,{id:"data.inspector.table.noDataAvailableDescription",defaultMessage:"The element did not provide any data."})))})}render(){var e;if(!this.state.datatable)return data_view_DataViewComponent.renderNoData();const t=Object.values(this.state.adapters.tables.tables);return Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(l.EuiFlexGroup,null,Object(c.jsx)(l.EuiFlexItem,{grow:!0},t.length>1?Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(l.EuiText,{size:"xs"},Object(c.jsx)("p",{role:"status","aria-live":"polite","aria-atomic":"true"},Object(c.jsx)(r.FormattedMessage,{"data-test-subj":"inspectorDataViewSelectorLabel",id:"data.inspector.table.tablesDescription",defaultMessage:"There are {tablesCount, plural, one {# table} other {# tables} } in total",values:{tablesCount:t.length}}))),Object(c.jsx)(l.EuiSpacer,{size:"xs"}),Object(c.jsx)(data_table_selector_TableSelector,{tables:t,selectedTable:this.state.datatable,onTableChanged:this.selectTable})):null),Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(download_options_DataDownloadOptions,{title:(null===(e=this.props.options)||void 0===e?void 0:e.fileName)||this.props.title,uiSettings:this.props.uiSettings,datatables:t,fieldFormats:this.props.fieldFormats}))),Object(c.jsx)(l.EuiSpacer,{size:"s"}),Object(c.jsx)(data_table_DataTableFormat,{data:this.state.datatable,uiSettings:this.props.uiSettings,fieldFormats:this.props.fieldFormats,uiActions:this.props.uiActions,isFilterable:this.props.isFilterable}))}}t.default=data_view_DataViewComponent}}]);