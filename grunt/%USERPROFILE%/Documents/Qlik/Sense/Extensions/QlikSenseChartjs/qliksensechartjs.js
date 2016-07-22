define(["jquery","underscore","./qliksensechartjs-properties","./qliksensechartjs-initialproperties","./lib/js/extensionUtils","./lib/js/chartjsUtils","text!./lib/css/style.css","./lib/js/contents","./lib/js/Chart"],function($,_,props,initProps,extensionUtils,chartjsUtils,cssContent,contents,Chart){"use strict";extensionUtils.addStyleToHeader(cssContent);var base=requirejs.s.contexts._.config.baseUrl+requirejs.s.contexts._.config.paths.extensions;return{definition:props,initialProperties:initProps,support:{snapshot:!0,"export":!0,exportData:!0},controller:["$scope",function($scope){}],paint:function($element,layout){var self=this,dim_count=layout.qHyperCube.qDimensionInfo.length,measure_count=layout.qHyperCube.qMeasureInfo.length;if(dim_count<chartjs.filter(function(d){return d.id===layout.chart})[0].min_dims||dim_count>chartjs.filter(function(d){return d.id===layout.chart})[0].max_dims||measure_count<chartjs.filter(function(d){return d.id===layout.chart})[0].measures)$element.html("This chart requires "+chartjs.filter(function(d){return d.id===layout.chart})[0].min_dims+" dimensions and "+chartjs.filter(function(d){return d.id===layout.chart})[0].measures+" measures.");else{var src=chartjs.filter(function(d){return d.id===layout.chart})[0].src,url=base+"/qliksensechartjs/lib/js/"+src;jQuery.getScript(url,function(){visualize($element,layout,self,chartjsUtils)})}}}});