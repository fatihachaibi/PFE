(window.unifiedSearch_bundle_jsonpfunction=window.unifiedSearch_bundle_jsonpfunction||[]).push([[11],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return IndexPatternSelect}));var s=n(9),i=n.n(s),o=n(7),a=n.n(o),d=n(4),h=n.n(d),r=n(1),c=n(3),l=n(0);class IndexPatternSelect extends r.Component{constructor(e){super(e),a()(this,"isMounted",!1),a()(this,"state",void 0),a()(this,"fetchSelectedIndexPattern",(async e=>{if(!e)return void this.setState({selectedIndexPattern:void 0});let t;try{t=(await this.props.indexPatternService.get(e)).title}catch(e){return}this.isMounted&&this.setState({selectedIndexPattern:{value:e,label:t}})})),a()(this,"debouncedFetch",h.a.debounce((async e=>{const t=await this.props.indexPatternService.getIdsWithTitle();if(!this.isMounted||e!==this.state.searchValue)return;const n=[];for(let s=0;s<t.length;s++)t[s].title.toLowerCase().includes(e.toLowerCase())&&n.push({label:t[s].title,value:t[s].id});this.setState({isLoading:!1,options:n}),this.props.onNoIndexPatterns&&""===e&&0===n.length&&this.props.onNoIndexPatterns()}),300)),a()(this,"fetchOptions",((e="")=>{this.setState({isLoading:!0,searchValue:e},this.debouncedFetch.bind(null,e))})),a()(this,"onChange",(e=>{this.props.onChange(h.a.get(e,"0.value"))})),this.state={isLoading:!1,options:[],selectedIndexPattern:void 0,searchValue:void 0}}componentWillUnmount(){this.isMounted=!1,this.debouncedFetch.cancel()}componentDidMount(){this.isMounted=!0,this.fetchOptions(""),this.fetchSelectedIndexPattern(this.props.indexPatternId)}UNSAFE_componentWillReceiveProps(e){e.indexPatternId!==this.props.indexPatternId&&this.fetchSelectedIndexPattern(e.indexPatternId)}render(){const{onChange:e,indexPatternId:t,placeholder:n,onNoIndexPatterns:s,indexPatternService:o,...a}=this.props;return Object(l.jsx)(c.EuiComboBox,i()({},a,{placeholder:n,singleSelection:!0,isLoading:this.state.isLoading,onSearchChange:this.fetchOptions,options:this.state.options,selectedOptions:this.state.selectedIndexPattern?[this.state.selectedIndexPattern]:[],onChange:this.onChange}))}}}}]);