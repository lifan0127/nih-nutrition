import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-json-viewer',
  templateUrl: 'json-viewer.component.html',
  styleUrls: ['json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {
  @Input() data: Observable<JSON>
  
  constructor() {}

  ngOnInit() {
    this.data.subscribe(json => {
      this.data = this.syntaxHighlight(json);
    });
  }

  syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                return '<span style="color: red;">' + match + '</span>';  // key
            } else {
                return '<span style="color: green;">' + match + '</span>';  // string
            }
        } else if (/true|false/.test(match)) {
            return '<span style="color: blue;">' + match + '</span>';  // boolean
        } else if (/null/.test(match)) {
            return '<span style="color: magenta;">' + match + '</span>';  // null
        }
        return '<span style="color: darkorange;">' + match + '</span>';  // number
    });
  }
}
