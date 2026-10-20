/**
 * Please install APM first !!!
 * @docs https://apm-mini-doc-pro.local-pf.jd.com/guide/start.html
 */

// How to install APM:
// <script>
//     !function(){"use strict";!function(e,r,n,t){var o={pre_m:[],run:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];o.pre_m.push({method:e,args:n})}};e[n]=o;var a=function(e,r){void 0===o[e]&&(o[e]=[]),o[e].push(r)};"addEventListener"in e&&"removeEventListener"in e&&(o.errorHandler=function(r){var n=(r=r||e.event).target||r.srcElement;n instanceof Element||n instanceof HTMLElement?a("s_err",r):a("err",r)},o.rejectionHandler=function(e){a("reject",e)},e.addEventListener("error",o.errorHandler,!0),e.addEventListener("unhandledrejection",o.rejectionHandler,!0)),"PerformanceLongTaskTiming"in e&&(o.entries=[],o.observer=new PerformanceObserver((function(e){o.entries=o.entries.concat(e.getEntries())})),o.observer.observe({entryTypes:["longtask"]}));var s=e.document.createElement("script");s.src=r,s.crossOrigin="anonymous",s.setAttribute("globalName".toLowerCase(),n),s.setAttribute("preCollect".toLowerCase(),t),e.document.getElementsByTagName("head")[0].appendChild(s)}(window,"https://storage.360buyimg.com/dev-static/dra/probe-web/1.3.4/browser.js","dra","__dra_PreCollectedData__")}();
// </script>
// <script>
// window.dra.run("init", { aid: "example_aid" });
// window.dra.run("start");
// </script>

import type { ClientBrowser } from "@spark-fe/probe-web";
import { Level } from "../enums.js";

export class ApmProvider {
  private instance: ClientBrowser | null = null;

  constructor() {
    try {
      if (window.dra) {
        this.instance = window.dra;
      } else {
        console.error("DRA not found");
      }
    } catch (error) {
      console.error("Error initializing DRA", error);
    }
  }

  public report(level: Level, code: string, message: string) {
    try {
      this.instance?.sendCustomLogEvent({
        level,
        content: `code: ${code}, message: ${message}`,
      });
    } catch (error) {
      console.error("Error sending custom log event", error);
    }
  }
}
