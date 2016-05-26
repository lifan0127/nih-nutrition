System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/shared/json-viewer/json-viewer.component.js",["@angular/core","rxjs/Observable"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("rxjs/Observable"),h=function(){function a(){}return a.prototype.ngOnInit=function(){var a=this;this.data.subscribe(function(b){a.data=a.syntaxHighlight(b)})},a.prototype.syntaxHighlight=function(a){return"string"!=typeof a&&(a=JSON.stringify(a,void 0,2)),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(a){return/^"/.test(a)?/:$/.test(a)?'<span style="color: red;">'+a+"</span>":'<span style="color: green;">'+a+"</span>":/true|false/.test(a)?'<span style="color: blue;">'+a+"</span>":/null/.test(a)?'<span style="color: magenta;">'+a+"</span>":'<span style="color: darkorange;">'+a+"</span>"})},d([f.Input(),e("design:type",g.Observable)],a.prototype,"data",void 0),a=d([f.Component({moduleId:c.id,selector:"app-json-viewer",templateUrl:"json-viewer.component.html",styleUrls:["json-viewer.component.css"]}),e("design:paramtypes",[])],a)}();return b.JsonViewerComponent=h,c.exports}),System.registerDynamic("app/shared/json-viewer/index.js",["./json-viewer.component"],!0,function(a,b,c){"use strict";var d=a("./json-viewer.component");return b.JsonViewerComponent=d.JsonViewerComponent,c.exports}),System.registerDynamic("app/modal-window/modal-window.component.js",["@angular/core","@angular/http","@angular2-material/icon","../shared/json-viewer"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("@angular2-material/icon"),i=a("../shared/json-viewer"),j=function(){function a(a){this.http=a,this.close=new f.EventEmitter}return a.prototype.ngOnInit=function(){this.entry.data=this.http.get("data/"+this.entry.source).map(function(a){return a.json()})},a.prototype.closeModal=function(){this.close.emit(!1)},d([f.Input(),e("design:type",Object)],a.prototype,"entry",void 0),d([f.Input(),e("design:type",String)],a.prototype,"view",void 0),d([f.Output(),e("design:type",Object)],a.prototype,"close",void 0),a=d([f.Component({moduleId:c.id,selector:"app-modal-window",templateUrl:"modal-window.component.html",styleUrls:["modal-window.component.css"],directives:[h.MdIcon,i.JsonViewerComponent],providers:[h.MdIconRegistry]}),e("design:paramtypes",[g.Http])],a)}();return b.ModalWindowComponent=j,c.exports}),System.registerDynamic("app/modal-window/index.js",["./modal-window.component"],!0,function(a,b,c){"use strict";var d=a("./modal-window.component");return b.ModalWindowComponent=d.ModalWindowComponent,c.exports}),System.registerDynamic("app/nih-nutrition.component.js",["@angular/core","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/list","@angular2-material/card","@angular2-material/input","@angular2-material/checkbox","@angular2-material/radio","@angular2-material/icon","./modal-window"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular2-material/toolbar"),h=a("@angular2-material/button"),i=a("@angular2-material/sidenav"),j=a("@angular2-material/list"),k=a("@angular2-material/card"),l=a("@angular2-material/input"),m=a("@angular2-material/checkbox"),n=a("@angular2-material/radio"),o=a("@angular2-material/icon"),p=a("./modal-window"),q=function(){function a(){this.title="Analysis of NIH Spending on Nutrition Research",this.visuals=[{title:"Breakthroughs & Significant Events",description:"Timeline to visualize NIH breakthroughs and significant events on nutrition-related topics.",source:"nih-event-timeline.json",visual:"timeline"},{title:"NIH Spending Trend",description:"NIH spending trend on nutrition-related researches.",source:"nih-spending-trend.json",visual:"barchart"},{title:"Overview of NIH-Sponsored Projects",description:"NIH-sponsored research projects in nutrition research.",source:"nih-project-overview.json",visual:"linechart"},{title:"Organization",description:"Overview of organizations supported by NIH grant.",source:"nih-funded-organizations.json",visual:"map"}],this.modal=!1,this.view="visual"}return a.prototype.openModal=function(a,b){this.entry=a,this.view=b,this.modal=!0},a.prototype.closeModal=function(a){this.modal=!1},a=d([f.Component({moduleId:c.id,selector:"nih-nutrition-app",templateUrl:"nih-nutrition.component.html",styleUrls:["nih-nutrition.component.css"],directives:[i.MD_SIDENAV_DIRECTIVES,j.MD_LIST_DIRECTIVES,k.MD_CARD_DIRECTIVES,g.MdToolbar,h.MdButton,l.MdInput,m.MdCheckbox,n.MdRadioGroup,n.MdRadioButton,o.MdIcon,p.ModalWindowComponent],providers:[o.MdIconRegistry,n.MdRadioDispatcher]}),e("design:paramtypes",[])],a)}();return b.NihNutritionAppComponent=q,c.exports}),System.registerDynamic("app/index.js",["./environment","./nih-nutrition.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./nih-nutrition.component")),c.exports});