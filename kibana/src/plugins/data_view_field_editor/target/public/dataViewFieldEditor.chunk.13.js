(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[13],{79:function(e,o,t){"use strict";t.r(o),t.d(o,"ColorFormatEditor",(function(){return ColorFormatEditor}));var r=t(3),a=t.n(r),i=t(1),n=t(4),s=t(2),d=t(12),l=t(18),c=t(7),u=t(25),g=t(0);class ColorFormatEditor extends c.DefaultFormatEditor{constructor(e){super(e),a()(this,"onColorChange",((e,o)=>{const t=[...this.props.formatParams.colors];t[o]={...t[o],...e},this.onChange({colors:t})})),a()(this,"addColor",(()=>{const e=[...this.props.formatParams.colors||[]];this.onChange({colors:[...e,{...l.DEFAULT_CONVERTER_COLOR}]})})),a()(this,"removeColor",(e=>{const o=[...this.props.formatParams.colors];o.splice(e,1),this.onChange({colors:o})})),this.onChange({fieldType:e.fieldType})}render(){const{formatParams:e,fieldType:o}=this.props,t=e.colors&&e.colors.length&&e.colors.map(((e,o)=>({...e,index:o})))||[],r=["string"===o?{field:"regex",name:Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.patternLabel",defaultMessage:"Pattern (regular expression)"}),render:(e,o)=>Object(g.jsx)(n.EuiFieldText,{value:e,"data-test-subj":`colorEditorKeyPattern ${o.index}`,onChange:e=>{this.onColorChange({regex:e.target.value},o.index)}})}:{field:"range",name:Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.rangeLabel",defaultMessage:"Range (min:max)"}),render:(e,o)=>Object(g.jsx)(n.EuiFieldText,{value:e,"data-test-subj":`colorEditorKeyRange ${o.index}`,onChange:e=>{this.onColorChange({range:e.target.value},o.index)}})},{field:"text",name:Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.textColorLabel",defaultMessage:"Text color"}),render:(e,o)=>Object(g.jsx)(n.EuiColorPicker,{color:e,"data-test-subj":`colorEditorColorPicker ${o.index}`,onChange:e=>{this.onColorChange({text:e},o.index)}})},{field:"background",name:Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.backgroundLabel",defaultMessage:"Background color"}),render:(e,o)=>Object(g.jsx)(n.EuiColorPicker,{color:e,"data-test-subj":`colorEditorBackgroundPicker ${o.index}`,onChange:e=>{this.onColorChange({background:e},o.index)}})},{name:Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.exampleLabel",defaultMessage:"Example"}),render:e=>Object(g.jsx)("div",{style:{background:e.background,color:e.text}},"123456")},{field:"actions",name:s.i18n.translate("indexPatternFieldEditor.color.actions",{defaultMessage:"Actions"}),actions:[{name:s.i18n.translate("indexPatternFieldEditor.color.deleteAria",{defaultMessage:"Delete"}),description:s.i18n.translate("indexPatternFieldEditor.color.deleteTitle",{defaultMessage:"Delete color format"}),onClick:e=>{this.removeColor(e.index)},type:"icon",icon:"trash",color:"danger",available:()=>t.length>1,"data-test-subj":"colorEditorRemoveColor"}]}];return Object(g.jsx)(i.Fragment,null,Object(g.jsx)(n.EuiBasicTable,{items:t,columns:r}),Object(g.jsx)(n.EuiSpacer,{size:"m"}),Object(g.jsx)(n.EuiButton,{iconType:"plusInCircle",size:"s",onClick:this.addColor,"data-test-subj":"colorEditorAddColor"},Object(g.jsx)(d.FormattedMessage,{id:"indexPatternFieldEditor.color.addColorButton",defaultMessage:"Add color"})),Object(g.jsx)(n.EuiSpacer,{size:"l"}))}}a()(ColorFormatEditor,"formatId",u.a)}}]);