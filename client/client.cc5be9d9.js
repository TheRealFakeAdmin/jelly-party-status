function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:P(t,r,e[r])}function I(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){L(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?w(e):_(e)))}function O(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function C(t){return O(t," ")}function H(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function U(t){const e=H(t,"HTML_TAG_START",0),n=H(t,"HTML_TAG_END",e);if(e===n)return new B;L(t);const r=t.splice(e,n+1);y(r[0]),y(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(s)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function D(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function G(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=D();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class B extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=_(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function J(t){h=t}function z(){if(!h)throw new Error("Function called outside component initialization");return h}function W(t){z().$$.on_mount.push(t)}function K(t){z().$$.after_update.push(t)}function V(t){z().$$.on_destroy.push(t)}const F=[],Y=[],X=[],Q=[],Z=Promise.resolve();let tt=!1;function et(t){X.push(t)}let nt=!1;const rt=new Set;function st(){if(!nt){nt=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];J(e),ot(e.$$)}for(J(null),F.length=0;Y.length;)Y.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];rt.has(e)||(rt.add(e),e())}X.length=0}while(F.length);for(;Q.length;)Q.pop()();tt=!1,nt=!1,rt.clear()}}function ot(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}const it=new Set;let at;function ct(){at={r:0,c:[],p:at}}function lt(){at.r||s(at.c),at=at.p}function ut(t,e){t&&t.i&&(it.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),at.c.push((()=>{it.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ft(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function gt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||et((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(et)}function bt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(F.push(t),tt||(tt=!0,Z.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,o,i,a,c,l,u=[-1]){const d=h;J(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),m&&vt(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&ut(e.$$.fragment),gt(e,n.target,n.anchor,n.customElement),p=!1,st()}J(d)}class $t{$destroy(){bt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t=[];function wt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!_t.length;for(const t of s)t[1](),_t.push(t,e);if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Et={};var St={owner:"Jelly-Party",repo:"jelly-party-status",sites:[{name:"Jelly Party Website",url:"https://www.jelly-party.com/"},{name:"Jelly Party Server",check:"tcp-ping",url:"ws.jelly-party.com",port:8080}],"status-website":{cname:"status.jelly-party.com",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Jelly Party Status",introTitle:"Status Page for the Watch Party Browser Extension Jelly Party.",introMessage:"The status of the Jelly Party Server is shown here.",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.jelly-party.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function xt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Tt(e){let n,r,s,o=St["status-website"]&&!St["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=_("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){P(n,"alt",""),c(n.src,r=St["status-website"].logoUrl)||P(n,"src",r),P(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}(),i=St["status-website"]&&!St["status-website"].hideNavTitle&&function(e){let n,r,s=St["status-website"].name+"";return{c(){n=_("div"),r=E(s)},l(t){n=k(t,"DIV",{});var e=I(n);r=O(e,s),e.forEach(y)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=_("div"),r=_("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=k(t,"DIV",{});var e=I(n);r=k(e,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach(y),e.forEach(y),this.h()},h(){P(r,"href",St["status-website"].logoHref||St.path),P(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){St["status-website"]&&!St["status-website"].hideNavLogo&&o.p(t,e),St["status-website"]&&!St["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&y(n),o&&o.d(),i&&i.d()}}}function At(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=_("li"),n=_("a"),r=E(a),i=S(),this.h()},l(t){e=k(t,"LI",{});var s=I(e);n=k(s,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);r=O(o,a),o.forEach(y),i=C(s),s.forEach(y),this.h()},h(){P(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),P(n,"href",o=t[1].href.replace("$OWNER",St.owner).replace("$REPO",St.repo)),P(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(t){t&&y(e)}}}function Pt(e){let n,r,s,o,i,a=St["status-website"]&&St["status-website"].logoUrl&&Tt(),c=St["status-website"]&&St["status-website"].navbar&&function(t){let e,n=St["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=At(xt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=St["status-website"].navbar,o=0;o<n.length;o+=1){const i=xt(t,n,o);r[o]?r[o].p(i,s):(r[o]=At(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),l=St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&function(e){let n,r,s,o=St.i18n.navGitHub+"";return{c(){n=_("li"),r=_("a"),s=E(o),this.h()},l(t){n=k(t,"LI",{});var e=I(n);r=k(e,"A",{href:!0,class:!0});var i=I(r);s=O(i,o),i.forEach(y),e.forEach(y),this.h()},h(){P(r,"href",`https://github.com/${St.owner}/${St.repo}`),P(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=_("nav"),r=_("div"),a&&a.c(),s=S(),o=_("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=I(n);r=k(e,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=C(u),o=k(u,"UL",{class:!0});var d=I(o);c&&c.l(d),i=C(d),l&&l.l(d),d.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){P(o,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){St["status-website"]&&St["status-website"].logoUrl&&a.p(t,e),St["status-website"]&&St["status-website"].navbar&&c.p(t,e),St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&y(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Nt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class It extends $t{constructor(t){super(),yt(this,t,Nt,Pt,i,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Rt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function kt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Lt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Rt(kt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ot(Rt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+kt(s[8])+'" alt="'+kt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+kt(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ot(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+kt(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ct(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ht(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ut(t,e,n){const r=t.slice();return r[8]=e[n],r}function jt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${St.path}/themes/${(St["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Mt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",(St["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Dt(e){let n,r;return{c(){n=_("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){c(n.src,r=e[8].src)||P(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Gt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",e[3].rel),P(n,"href",e[3].href),P(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n;return{c(){n=_("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",e[3].name),P(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Bt(e){let n,r,s,o,i,a,c,u,d,f,h,p,m,b,w,E,T,A,N=Ot(St.i18n.footer.replace(/\$REPO/,`https://github.com/${St.owner}/${St.repo}`))+"",L=(St["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(St["status-website"]||{}).customHeadHtml+"";return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();let R=((St["status-website"]||{}).themeUrl?Mt:jt)(e),O=(St["status-website"]||{}).scripts&&function(t){let e,n=(St["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Dt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=Dt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),H=(St["status-website"]||{}).links&&function(t){let e,n=(St["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Gt(Ht(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ht(t,n,o);r[o]?r[o].p(i,s):(r[o]=Gt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),j=(St["status-website"]||{}).metaTags&&function(t){let e,n=(St["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Ct(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ct(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),M=St["status-website"].css&&function(e){let n,r,s=`<style>${St["status-website"].css}</style>`;return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),D=St["status-website"].js&&function(e){let n,r,s=`<script>${St["status-website"].js}<\/script>`;return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),G=(St["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(St["status-website"]||{}).customBodyHtml+"";return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();p=new It({props:{segment:e[0]}});const J=e[2].default,z=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(J,e,e[1],null);return{c(){L&&L.c(),n=x(),R.c(),r=_("link"),s=_("link"),o=_("link"),O&&O.c(),i=x(),H&&H.c(),a=x(),j&&j.c(),c=x(),M&&M.c(),u=x(),D&&D.c(),d=x(),f=S(),G&&G.c(),h=S(),pt(p.$$.fragment),m=S(),b=_("main"),z&&z.c(),w=S(),E=_("footer"),T=_("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=x(),R.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),O&&O.l(e),i=x(),H&&H.l(e),a=x(),j&&j.l(e),c=x(),M&&M.l(e),u=x(),D&&D.l(e),d=x(),e.forEach(y),f=C(t),G&&G.l(t),h=C(t),mt(p.$$.fragment,t),m=C(t),b=k(t,"MAIN",{class:!0});var l=I(b);z&&z.l(l),l.forEach(y),w=C(t),E=k(t,"FOOTER",{class:!0});var g=I(E);T=k(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${St.path}/global.css`),P(s,"rel","icon"),P(s,"type","image/svg"),P(s,"href",(St["status-website"]||{}).faviconSvg||(St["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(o,"rel","icon"),P(o,"type","image/png"),P(o,"href",(St["status-website"]||{}).favicon||"/logo-192.png"),P(b,"class","container"),P(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),j&&j.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,f,e),G&&G.m(t,e),v(t,h,e),gt(p,t,e),v(t,m,e),v(t,b,e),z&&z.m(b,null),v(t,w,e),v(t,E,e),g(E,T),T.innerHTML=N,A=!0},p(t,[e]){(St["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(St["status-website"]||{}).scripts&&O.p(t,e),(St["status-website"]||{}).links&&H.p(t,e),(St["status-website"]||{}).metaTags&&j.p(t,e),St["status-website"].css&&M.p(t,e),St["status-website"].js&&D.p(t,e),(St["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),z&&z.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(z,J,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(J,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ut(p.$$.fragment,t),ut(z,t),A=!0)},o(t){dt(p.$$.fragment,t),dt(z,t),A=!1},d(t){L&&L.d(t),y(n),R.d(t),y(r),y(s),y(o),O&&O.d(t),y(i),H&&H.d(t),y(a),j&&j.d(t),y(c),M&&M.d(t),y(u),D&&D.d(t),y(d),t&&y(f),G&&G.d(t),t&&y(h),bt(p,t),t&&y(m),t&&y(b),z&&z.d(t),t&&y(w),t&&y(E)}}}function Jt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class zt extends $t{constructor(t){super(),yt(this,t,Jt,Bt,i,{segment:0})}}function Wt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=E(r)},l(t){e=k(t,"PRE",{});var s=I(e);n=O(s,r),s.forEach(y)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&j(n,r)},d(t){t&&y(e)}}}function Kt(e){let n,r,s,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Wt(e);return{c(){r=S(),s=_("h1"),o=E(e[0]),i=S(),a=_("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=C(t),s=k(t,"H1",{class:!0});var n=I(s);o=O(n,e[0]),n.forEach(y),i=C(t),a=k(t,"P",{class:!0});var h=I(a);c=O(h,d),h.forEach(y),l=C(t),f&&f.l(t),u=x(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Wt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(i),t&&y(a),t&&y(l),f&&f.d(t),t&&y(u)}}}function Vt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Ft extends $t{constructor(t){super(),yt(this,t,Vt,Kt,i,{status:0,error:1})}}function Yt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&pt(n.$$.fragment),r=x()},l(t){n&&mt(n.$$.fragment,t),r=x()},m(t,e){n&&gt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?ft(o,[ht(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ct();const t=n;dt(t.$$.fragment,1,0,(()=>{bt(t,1)})),lt()}i?(n=new i(a()),pt(n.$$.fragment),ut(n.$$.fragment,1),gt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ut(n.$$.fragment,t),s=!0)},o(t){n&&dt(n.$$.fragment,t),s=!1},d(t){t&&y(r),n&&bt(n,t)}}}function Xt(t){let e,n;return e=new Ft({props:{error:t[0],status:t[1]}}),{c(){pt(e.$$.fragment)},l(t){mt(e.$$.fragment,t)},m(t,r){gt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){bt(e,t)}}}function Qt(t){let e,n,r,s;const o=[Xt,Yt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ct(),dt(i[c],1,1,(()=>{i[c]=null})),lt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ut(n,1),n.m(r.parentNode,r))},i(t){s||(ut(n),s=!0)},o(t){dt(n),s=!1},d(t){i[e].d(t),t&&y(r)}}}function Zt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new zt({props:o}),{c(){pt(n.$$.fragment)},l(t){mt(n.$$.fragment,t)},m(t,e){gt(n,t,e),r=!0},p(t,[e]){const r=12&e?ft(s,[4&e&&{segment:t[2][0]},8&e&&ht(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ut(n.$$.fragment,t),r=!0)},o(t){dt(n.$$.fragment,t),r=!1},d(t){bt(n,t)}}}function te(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return K(l),u=Et,d=r,z().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ee extends $t{constructor(t){super(),yt(this,t,te,Zt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ne=[],re=[{js:()=>Promise.all([import("./index.bde0d2b0.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.a72846d2.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].4d2b8ec1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].1251488c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.ea2acad5.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],se=(oe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:oe(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:oe(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var oe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ie(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ce,le=1;const ue="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let fe,he;function pe(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function me(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(fe))return null;let e=t.pathname.slice(fe.length);if(""===e&&(e="/"),!ne.some((t=>t.test(e))))for(let n=0;n<se.length;n+=1){const r=se[n],s=r.pattern.exec(e);if(s){const n=pe(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=me(s);if(o){ye(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),ue.pushState({id:ce},"",s.href)}}function be(){return{x:pageXOffset,y:pageYOffset}}function ve(t){if(de[ce]=be(),t.state){const e=me(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else!function(t){le=t}(le+1),function(t){ce=t}(le),ue.replaceState({id:ce},"",location.href)}function ye(t,e,n,r){return ie(this,void 0,void 0,(function*(){const s=!!e;if(s)ce=e;else{const t=be();de[ce]=t,ce=e=++le,de[ce]=n?t:{x:0,y:0}}if(yield he(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[ce]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let _e,we=null;function Ee(t){const e=ae(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=me(new URL(t,$e(document)));if(e)we&&t===we.href||(we={href:t,promise:De(e)}),we.promise}(e.href)}function Se(t){clearTimeout(_e),_e=setTimeout((()=>{Ee(t)}),20)}function xe(t,e={noscroll:!1,replaceState:!1}){const n=me(new URL(t,$e(document)));if(n){const r=ye(n,null,e.noscroll);return ue[e.replaceState?"replaceState":"pushState"]({id:ce},"",t),r}return location.href=t,new Promise((()=>{}))}const Te="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ae,Pe,Ne,Ie=!1,Le=[],Re="{}";const ke={page:function(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:wt(null),session:wt(Te&&Te.session)};let Oe,Ce,He;function Ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function je(t){return ie(this,void 0,void 0,(function*(){Ae&&ke.preloading.set(!0);const e=function(t){return we&&we.href===t.href?we.promise:De(t)}(t),n=Pe={},r=yield e,{redirect:s}=r;if(n===Pe)if(s)yield xe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Me(n,e,Ue(e,t.page))}}))}function Me(t,e,n){return ie(this,void 0,void 0,(function*(){ke.page.set(n),ke.preloading.set(!1),Ae?Ae.$set(e):(e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},e.level0={props:yield Ne},e.notify=ke.page.notify,Ae=new ee({target:He,props:e,hydrate:!0})),Le=t,Re=JSON.stringify(n.query),Ie=!0,Ce=!1}))}function De(t){return ie(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ne){const t=()=>({});Ne=Te.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Oe)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ie(this,void 0,void 0,(function*(){const d=r[a];if(function(t,e,n,r){if(r!==Re)return!0;const s=Le[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:d};const f=c++;let h;if(Ce||u||!Le[a]||Le[a].part!==e.i){u=!1;const{default:r,preload:s}=yield re[e.i].js();let o;o=Ie||!Te.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Oe):{}:Te.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=Le[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Ge,qe,Be;ke.session.subscribe((t=>ie(void 0,void 0,void 0,(function*(){if(Oe=t,!Ie)return;Ce=!0;const e=me(new URL(location.href)),n=Pe={},{redirect:r,props:s,branch:o}=yield De(e);n===Pe&&(r?yield xe(r.location,{replaceState:!0}):yield Me(o,s,Ue(s,e.page)))})))),Ge={target:document.querySelector("#sapper")},qe=Ge.target,He=qe,Be=Te.baseUrl,fe=Be,he=je,"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ue.scrollRestoration="auto"})),addEventListener("load",(()=>{ue.scrollRestoration="manual"})),addEventListener("click",ge),addEventListener("popstate",ve),addEventListener("touchstart",Ee),addEventListener("mousemove",Se),Te.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Te;Ne||(Ne=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ne},level1:{props:{status:o,error:i},component:Ft},segments:s},c=pe(n);Me([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ue.replaceState({id:le},"",e);const n=me(new URL(location.href));if(n)return ye(n,le,!0,t)}));export{bt as A,T as B,s as C,Y as D,U as E,c as F,d as G,B as H,q as I,Ot as J,w as K,xe as L,M,A as N,e as O,N as P,ft as Q,K as R,$t as S,V as T,u as U,ht as V,et as W,G as X,I as a,O as b,k as c,y as d,_ as e,P as f,v as g,g as h,yt as i,S as j,C as k,ct as l,dt as m,t as n,lt as o,ut as p,W as q,St as r,i as s,E as t,j as u,x as v,$ as w,pt as x,mt as y,gt as z};

import __inject_styles from './inject_styles.803b7e80.js';