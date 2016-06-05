System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+nih-nutrition/nih-nutrition.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-nih-nutrition",templateUrl:"nih-nutrition.component.html",styleUrls:["nih-nutrition.component.css"]}),e("design:paramtypes",[])],a)}();return b.NihNutritionComponent=g,c.exports}),System.registerDynamic("app/+nih-nutrition/index.js",["./nih-nutrition.component"],!0,function(a,b,c){"use strict";var d=a("./nih-nutrition.component");return b.NihNutritionComponent=d.NihNutritionComponent,c.exports}),System.registerDynamic("app/+visual-gallery/visual-gallery.component.js",["@angular/core","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/tabs/tabs","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular2-material/toolbar"),h=a("@angular2-material/button"),i=a("@angular2-material/sidenav"),j=a("@angular2-material/tabs/tabs"),k=a("@angular2-material/list"),l=a("@angular2-material/card"),m=a("@angular2-material/input"),n=a("@angular2-material/checkbox"),o=a("@angular2-material/radio"),p=a("@angular2-material/icon"),q=function(){function a(){this.title="Analysis of NIH Spending on Nutrition Research",this.visuals=[{title:"Breakthroughs & Significant Events",description:"Timeline to visualize NIH breakthroughs and significant events on nutrition-related topics.",source:"nih-events.json",visual:"timeline-nih-events"},{title:"NIH Funding Trends in Nutrition Research",description:"Comparison of NIH research funding trends in various nutrition-related areas.",source:"nih-spending-trend.json",visual:"barchart"},{title:"Overview of NIH-Sponsored Projects",description:"Overview of NIH-sponsored research projects to advance our understanding in nutrition science.",source:"nih-project-overview.json",visual:"linechart"},{title:"Geographical Distribution of NIH Organizations",description:"Geographical distribution of organizations supported by NIH grant in the United States.",source:"nih-funded-organizations.json",visual:"map"},{title:"US National Nutrition Research Roadmap",description:"Research priorities for human nutrition over the next five to ten years.",source:"nutrition-research-roadmap.json",visual:"piecircle-nutrition-research-roadmap"}]}return a.prototype.ngOnInit=function(){},a.prototype.openModal=function(a,b){},a=d([f.Component({moduleId:c.id,selector:"app-visual-gallery",templateUrl:"visual-gallery.component.html",styleUrls:["visual-gallery.component.css"],directives:[i.MD_SIDENAV_DIRECTIVES,k.MD_LIST_DIRECTIVES,l.MD_CARD_DIRECTIVES,j.MD_TABS_DIRECTIVES,g.MdToolbar,h.MdButton,m.MdInput,n.MdCheckbox,o.MdRadioGroup,o.MdRadioButton,p.MdIcon],providers:[p.MdIconRegistry,o.MdRadioDispatcher]}),e("design:paramtypes",[])],a)}();return b.VisualGalleryComponent=q,c.exports}),System.registerDynamic("app/+visual-gallery/index.js",["./visual-gallery.component"],!0,function(a,b,c){"use strict";var d=a("./visual-gallery.component");return b.VisualGalleryComponent=d.VisualGalleryComponent,c.exports}),System.registerDynamic("app/shared/to-date.pipe.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.transform=function(a){return new Date(a)},a=d([f.Pipe({name:"toDate"}),e("design:paramtypes",[])],a)}();return b.ToDate=g,c.exports}),System.registerDynamic("app/visual/timeline/timeline.component.js",["@angular/core","rxjs/Observable","../../shared/iscroll.directive","../../shared/to-date.pipe"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("rxjs/Observable"),h=a("../../shared/iscroll.directive"),i=a("../../shared/to-date.pipe"),j=function(){function a(){this.multiplier=3,this.keyterm="",this.months=[{mon:"Jan",pos:0},{mon:"Feb",pos:31},{mon:"Mar",pos:59},{mon:"Apr",pos:90},{mon:"May",pos:120},{mon:"Jun",pos:151},{mon:"Jul",pos:181},{mon:"Aug",pos:212},{mon:"Sept",pos:243},{mon:"Oct",pos:273},{mon:"Nov",pos:304},{mon:"Dec",pos:334}]}return a.prototype.ngOnInit=function(){var a=this;this.events.subscribe(function(b){a.title=b.title,a.description=b.description,a.data=b.data,a.selectedEvent=a.data[0]})},a.prototype.stringDivider=function(a,b){if(a.length>b){for(var c=b;c>0&&!/\s/.test(a[c]);)c--;if(c>0){var d=[a.substring(0,c)],e=a.substring(c+1);return d.concat(this.stringDivider(e,b))}}return[a]},a.prototype.getDayInYear=function(a){var b=new Date(a);return this.months[b.getMonth()].pos+b.getDate()-1},a.prototype.selectEvent=function(a){this.selectedEvent=this.highlightedEvent},a.prototype.addHighlight=function(a){this.highlightedEvent=this.data[a]},a.prototype.removeHighlight=function(a){},d([f.Input(),e("design:type",g.Observable)],a.prototype,"events",void 0),a=d([f.Component({moduleId:c.id,selector:"app-timeline",templateUrl:"timeline.component.html",styleUrls:["timeline.component.css"],directives:[h.Iscroll],pipes:[i.ToDate]}),e("design:paramtypes",[])],a)}();return b.TimelineComponent=j,c.exports}),System.registerDynamic("app/visual/timeline/index.js",["./timeline.component"],!0,function(a,b,c){"use strict";var d=a("./timeline.component");return b.TimelineComponent=d.TimelineComponent,c.exports}),System.registerDynamic("app/visual/piecircle/piecircle.component.js",["@angular/core","rxjs/Observable"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("rxjs/Observable"),h=function(){function a(){this.topics=[],this.circleRadius=182,this.onSelected=!1}return a.prototype.ngOnInit=function(){var a=this;this.themes.subscribe(function(b){a.title=b.title,a.description=b.description,a.data=b.data,a.data.forEach(function(b){a.topics=a.topics.concat(b.topics)}),a.topics.map(function(b,c){var d=a.circleCoord(c,a.topics.length);return b.x=d.x,b.y=d.y,b})})},a.prototype.circleCoord=function(a,b){var c=2*Math.PI/b,d=Math.cos(Math.PI/2-c*(.5+a))*this.circleRadius,e=Math.sin(Math.PI/2-c*(.5+a))*this.circleRadius;return{x:d,y:e}},a.prototype.addHighlight=function(a){this.selectedTopic=this.topics[a]},a.prototype.removeHighlight=function(){var a=this;this.onSelected||setTimeout(function(){a.onSelected||(a.selectedTopic=null)},500)},a.prototype.stringDivider=function(a,b){if(a.length>b){for(var c=b;c>0&&!/\s/.test(a[c]);)c--;if(c>0){var d=[a.substring(0,c)],e=a.substring(c+1);return d.concat(this.stringDivider(e,b))}}return[a]},d([f.Input(),e("design:type",g.Observable)],a.prototype,"themes",void 0),a=d([f.Component({moduleId:c.id,selector:"app-piecircle",templateUrl:"piecircle.component.html",styleUrls:["piecircle.component.css"]}),e("design:paramtypes",[])],a)}();return b.PiecircleComponent=h,c.exports}),System.registerDynamic("app/visual/piecircle/index.js",["./piecircle.component"],!0,function(a,b,c){"use strict";var d=a("./piecircle.component");return b.PiecircleComponent=d.PiecircleComponent,c.exports}),System.registerDynamic("app/shared/json-viewer/json-viewer.component.js",["@angular/core","rxjs/Observable"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("rxjs/Observable"),h=function(){function a(){}return a.prototype.ngOnInit=function(){var a=this;this.data.subscribe(function(b){a.data=a.syntaxHighlight(b)})},a.prototype.syntaxHighlight=function(a){return"string"!=typeof a&&(a=JSON.stringify(a,void 0,2)),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(a){return/^"/.test(a)?/:$/.test(a)?'<span style="color: red;">'+a+"</span>":'<span style="color: green;">'+a+"</span>":/true|false/.test(a)?'<span style="color: blue;">'+a+"</span>":/null/.test(a)?'<span style="color: magenta;">'+a+"</span>":'<span style="color: darkorange;">'+a+"</span>"})},d([f.Input(),e("design:type",g.Observable)],a.prototype,"data",void 0),a=d([f.Component({moduleId:c.id,selector:"app-json-viewer",templateUrl:"json-viewer.component.html",styleUrls:["json-viewer.component.css"]}),e("design:paramtypes",[])],a)}();return b.JsonViewerComponent=h,c.exports}),System.registerDynamic("app/shared/json-viewer/index.js",["./json-viewer.component"],!0,function(a,b,c){"use strict";var d=a("./json-viewer.component");return b.JsonViewerComponent=d.JsonViewerComponent,c.exports}),System.registerDynamic("app/shared/iscroll.directive.js",["@angular/core","iscroll"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("iscroll"),h=function(){function a(a){this.elementRef=a}return a.prototype.ngAfterViewInit=function(){var a={mouseWheel:!0,scrollbars:!0,interactiveScrollbars:!0};this.iscroll=new g(this.elementRef.nativeElement,a)},a.prototype.ngAfterViewChecked=function(){this.elementRef.nativeElement.children[0].offsetHeight&&this.iscroll.refresh()},a=d([f.Directive({selector:"[iscroll]"}),e("design:paramtypes",[f.ElementRef])],a)}();return b.Iscroll=h,c.exports}),System.registerDynamic("app/modal-window/modal-window.component.js",["@angular/core","@angular/http","@angular2-material/icon","../visual/timeline","../visual/piecircle","../shared/json-viewer","../shared/iscroll.directive"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("@angular2-material/icon"),i=a("../visual/timeline"),j=a("../visual/piecircle"),k=a("../shared/json-viewer"),l=a("../shared/iscroll.directive"),m=function(){function a(a){this.http=a,this.close=new f.EventEmitter}return a.prototype.ngOnInit=function(){this.entry.data=this.http.get("data/"+this.entry.source).map(function(a){return a.json()})},a.prototype.closeModal=function(){this.close.emit(!1)},d([f.Input(),e("design:type",Object)],a.prototype,"entry",void 0),d([f.Input(),e("design:type",String)],a.prototype,"view",void 0),d([f.Output(),e("design:type",Object)],a.prototype,"close",void 0),a=d([f.Component({moduleId:c.id,selector:"app-modal-window",templateUrl:"modal-window.component.html",styleUrls:["modal-window.component.css"],directives:[h.MdIcon,k.JsonViewerComponent,i.TimelineComponent,j.PiecircleComponent,l.Iscroll],providers:[h.MdIconRegistry]}),e("design:paramtypes",[g.Http])],a)}();return b.ModalWindowComponent=m,c.exports}),System.registerDynamic("app/modal-window/index.js",["./modal-window.component"],!0,function(a,b,c){"use strict";var d=a("./modal-window.component");return b.ModalWindowComponent=d.ModalWindowComponent,c.exports}),System.registerDynamic("app/nih-nutrition.component.js",["@angular/core","@angular/router","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/tabs/tabs","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","./+nih-nutrition","./+visual-gallery","./modal-window"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular2-material/toolbar"),i=a("@angular2-material/button"),j=a("@angular2-material/sidenav"),k=a("@angular2-material/tabs/tabs"),l=a("@angular2-material/list"),m=a("@angular2-material/card"),n=a("@angular2-material/input"),o=a("@angular2-material/checkbox"),p=a("@angular2-material/radio"),q=a("@angular2-material/icon"),r=a("./+nih-nutrition"),s=a("./+visual-gallery"),t=a("./modal-window"),u=function(){function a(a){this.router=a,this.title="Nutrition Research",this.modal=!1,this.view="visual",this.views=[{name:"NIH Nutrition",description:"NIH-sponsored nutrition research",icon:"assignment ind",route:"/nih-nutrition"},{name:"Visual Gallery",description:"Data visualization gallery",icon:"pets",route:"/visual-gallery"}]}return a.prototype.ngOnInit=function(){this.router.navigate(["/visual-gallery"])},a=d([f.Component({moduleId:c.id,selector:"nih-nutrition-app",templateUrl:"nih-nutrition.component.html",styleUrls:["nih-nutrition.component.css"],directives:[g.ROUTER_DIRECTIVES,j.MD_SIDENAV_DIRECTIVES,l.MD_LIST_DIRECTIVES,m.MD_CARD_DIRECTIVES,k.MD_TABS_DIRECTIVES,h.MdToolbar,i.MdButton,n.MdInput,o.MdCheckbox,p.MdRadioGroup,p.MdRadioButton,q.MdIcon,t.ModalWindowComponent],providers:[q.MdIconRegistry,p.MdRadioDispatcher]}),g.Routes([{path:"/nih-nutrition",component:r.NihNutritionComponent},{path:"/visual-gallery",component:s.VisualGalleryComponent}]),e("design:paramtypes",[g.Router])],a)}();return b.NihNutritionAppComponent=u,c.exports}),System.registerDynamic("app/index.js",["./environment","./nih-nutrition.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./nih-nutrition.component")),c.exports});