// Generated by CoffeeScript 1.6.3
!function(){var t,n,e=[].slice,r=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1};t="undefined"!=typeof module&&null!==module&&null!=module.exports,n=function(n){var o,a,i;if(null==n)throw"Can't find moment";return i=["en"],o=function(){function o(t,e,r){this.start=n(t),this.end=n(e),this.allDay=r||!1}return o._extend=function(){var t,n,r,o,a,i;for(n=arguments[0],o=2<=arguments.length?e.call(arguments,1):[],a=0,i=o.length;i>a;a++){r=o[a];for(t in r)"undefined"!=typeof r[t]&&(n[t]=r[t])}return n},o.defaults={twentyFourHour:!1,allDaySimple:{fn:function(t){return function(){return t.allDay}},slot:0,pre:" "},dayOfWeek:{fn:function(t){return function(n){return n.format(t.weekdayFormat)}},slot:1,pre:" "},allDayMonth:{fn:function(t){return function(n){return n.format(""+t.monthFormat+" "+t.dayFormat)}},slot:2,pre:" "},month:{fn:function(t){return function(n){return n.format(t.monthFormat)}},slot:2,pre:" "},date:{fn:function(t){return function(n){return n.format(t.dayFormat)}},slot:3,pre:" "},year:{fn:function(t){return function(n){return n.format(t.yearFormat)}},slot:4,pre:", "},time:{fn:function(t){return function(n){var e;return e=0===n.minutes()&&t.implicitMinutes&&!t.twentyFourHour?n.format(t.hourFormat):n.format(""+t.hourFormat+":"+t.minuteFormat),t.groupMeridiems||t.twentyFourHour||(t.spaceBeforeMeridiem&&(e+=" "),e+=n.format(t.meridiemFormat)),e}},slot:5,pre:", "},meridiem:{fn:function(t){return function(n){return n.format(t.meridiemFormat)}},slot:6,pre:function(t){return t.spaceBeforeMeridiem?" ":""}}},o.registerLang=function(t,e){return n.lang(t,{twix:o._extend({},o.defaults,e)})},o.prototype.isSame=function(t){return this.start.isSame(this.end,t)},o.prototype.length=function(t){return this._trueEnd().add(1,"millisecond").diff(this._trueStart(),t)},o.prototype.count=function(t){var n,e;return e=this.start.clone().startOf(t),n=this.end.clone().startOf(t),n.diff(e,t)+1},o.prototype.countInner=function(t){var n,e,r;return r=this._inner(t),e=r[0],n=r[1],e>=n?0:n.diff(e,t)},o.prototype.iterate=function(t,n){var e,r,o,a=this;return o=this.start.clone().startOf(t),e=this.end.clone().startOf(t),r=function(){return e>=o&&(!n||o.valueOf()!==e.valueOf()||a.end.hours()>n||a.allDay)},this._iterateHelper(t,o,r)},o.prototype.iterateInner=function(t){var n,e,r,o;return o=this._inner(t),r=o[0],n=o[1],e=function(){return n>r},this._iterateHelper(t,r,e)},o.prototype.humanizeLength=function(){return this.allDay?this.isSame("day")?"all day":this.start.from(this.end.clone().add(1,"day"),!0):this.start.from(this.end,!0)},o.prototype.asDuration=function(){var t;return t=this.end.diff(this.start),n.duration(t)},o.prototype.isPast=function(){return this.allDay?this.end.clone().endOf("day")<n():this.end<n()},o.prototype.isFuture=function(){return this.allDay?this.start.clone().startOf("day")>n():this.start>n()},o.prototype.isCurrent=function(){return!this.isPast()&&!this.isFuture()},o.prototype.contains=function(t){return t=n(t),this._trueStart()<=t&&this._trueEnd()>=t},o.prototype.overlaps=function(t){return this._trueEnd().isAfter(t._trueStart())&&this._trueStart().isBefore(t._trueEnd())},o.prototype.engulfs=function(t){return this._trueStart()<=t._trueStart()&&this._trueEnd()>=t._trueEnd()},o.prototype.union=function(t){var n,e,r;return n=this.allDay&&t.allDay,n?(r=this.start<t.start?this.start:t.start,e=this.end>t.end?this.end:t.end):(r=this._trueStart()<t._trueStart()?this._trueStart():t._trueStart(),e=this._trueEnd()>t._trueEnd()?this._trueEnd():t._trueEnd()),new o(r,e,n)},o.prototype.intersection=function(t){var e,r,a,i;return i=this.start>t.start?this.start:t.start,this.allDay?(r=n(this.end),r.add(1,"day"),r.subtract(1,"millisecond"),a=t.allDay?r<t.end?this.end:t.end:r<t.end?r:t.end):a=this.end<t.end?this.end:t.end,e=this.allDay&&t.allDay,new o(i,a,e)},o.prototype.isValid=function(){return this._trueStart()<=this._trueEnd()},o.prototype.equals=function(t){return t instanceof o&&this.allDay===t.allDay&&this.start.valueOf()===t.start.valueOf()&&this.end.valueOf()===t.end.valueOf()},o.prototype.toString=function(){var t;return"{start: "+this.start.format()+", end: "+this.end.format()+", allDay: "+(null!=(t=this.allDay)?t:{"true":"false"})+"}"},o.prototype.simpleFormat=function(t,n){var e,r;return e={allDay:"(all day)"},o._extend(e,n||{}),r=""+this.start.format(t)+" - "+this.end.format(t),this.allDay&&e.allDay&&(r+=" "+e.allDay),r},o.prototype.format=function(t){var e,r,a,i,u,s,l,f,h,d,m,c,p,y,_=this;for(this._lazyLang(),h={groupMeridiems:!0,spaceBeforeMeridiem:!0,showDate:!0,showDayOfWeek:!1,twentyFourHour:this.langData.twentyFourHour,implicitMinutes:!0,implicitYear:!0,yearFormat:"YYYY",monthFormat:"MMM",weekdayFormat:"ddd",dayFormat:"D",meridiemFormat:"A",hourFormat:"h",minuteFormat:"mm",allDay:"all day",explicitAllDay:!1,lastNightEndsAt:0},o._extend(h,t||{}),u=[],h.twentyFourHour&&(h.hourFormat=h.hourFormat.replace("h","H")),l=h.lastNightEndsAt>0&&!this.allDay&&this.end.clone().startOf("day").valueOf()===this.start.clone().add(1,"day").startOf("day").valueOf()&&this.start.hours()>12&&this.end.hours()<h.lastNightEndsAt,f=h.showDate||!this.isSame("day")&&!l,this.allDay&&this.isSame("day")&&(!h.showDate||h.explicitAllDay)&&u.push({name:"all day simple",fn:this._formatFn("allDaySimple",h),pre:this._formatPre("allDaySimple",h),slot:this._formatSlot("allDaySimple")}),!f||h.implicitYear&&this.start.year()===n().year()&&this.isSame("year")||u.push({name:"year",fn:this._formatFn("year",h),pre:this._formatPre("year",h),slot:this._formatSlot("year")}),!this.allDay&&f&&u.push({name:"all day month",fn:this._formatFn("allDayMonth",h),ignoreEnd:function(){return l},pre:this._formatPre("allDayMonth",h),slot:this._formatSlot("allDayMonth")}),this.allDay&&f&&u.push({name:"month",fn:this._formatFn("month",h),pre:this._formatPre("month",h),slot:this._formatSlot("month")}),this.allDay&&f&&u.push({name:"date",fn:this._formatFn("date",h),pre:this._formatPre("date",h),slot:this._formatSlot("date")}),f&&h.showDayOfWeek&&u.push({name:"day of week",fn:this._formatFn("dayOfWeek",h),pre:this._formatPre("dayOfWeek",h),slot:this._formatSlot("dayOfWeek")}),!h.groupMeridiems||h.twentyFourHour||this.allDay||u.push({name:"meridiem",fn:this._formatFn("meridiem",h),pre:this._formatPre("meridiem",h),slot:this._formatSlot("meridiem")}),this.allDay||u.push({name:"time",fn:this._formatFn("time",h),pre:this._formatPre("time",h),slot:this._formatSlot("time")}),m=[],r=[],e=[],c=!0,d=function(t){var n,o,i;return i=t.fn(_.start),n=t.ignoreEnd&&t.ignoreEnd()?i:t.fn(_.end),o={format:t,value:function(){return i}},n===i&&c?e.push(o):(c&&(c=!1,e.push({format:{slot:t.slot,pre:""},value:function(){return""+a(m)+" -"+a(r,!0)}})),m.push(o),r.push({format:t,value:function(){return n}}))},p=0,y=u.length;y>p;p++)i=u[p],d(i);return s=!0,a=function(t,n){var e,r,o,a,i,u;for(e=!0,o="",u=t.sort(function(t,n){return t.format.slot-n.format.slot}),a=0,i=u.length;i>a;a++)r=u[a],s||(o+=e&&n?" ":r.format.pre),o+=r.value(),s=!1,e=!1;return o},a(e)},o.prototype._trueStart=function(){return this.allDay?this.start.clone().startOf("day"):this.start.clone()},o.prototype._trueEnd=function(t){return null==t&&(t=!1),this.allDay?t?this.end.clone().add(1,"day"):this.end.clone().endOf("day"):this.end.clone()},o.prototype._iterateHelper=function(t,n,e){return{next:function(){var r;return e()?(r=n.clone(),n.add(1,t),r):null},hasNext:e}},o.prototype._inner=function(t){var n,e;return null==t&&(t="milliseconds"),e=this._trueStart(),n=this._trueEnd(!0),e>e.clone().startOf(t)&&e.startOf(t).add(1,t),n<n.clone().endOf(t)&&n.startOf(t),[e,n]},o.prototype._lazyLang=function(){var n,e,a,u,s;if(a=this.start.lang(),null!=a&&this.end.lang()._abbr!==a._abbr&&this.end.lang(a._abbr),null==this.langData||this.langData._abbr!==a._abbr){if(t&&(u=a._abbr,!(r.call(i,u)>=0))){try{e=require("./lang/"+a._abbr),e(o)}catch(l){n=l}i.push(a._abbr)}return this.langData=null!=(s=null!=a?a._twix:void 0)?s:o.defaults}},o.prototype._formatFn=function(t,n){return this.langData[t].fn(n)},o.prototype._formatSlot=function(t){return this.langData[t].slot},o.prototype._formatPre=function(t,n){return"function"==typeof this.langData[t].pre?this.langData[t].pre(n):this.langData[t].pre},o.prototype._deprecate=function(t,n,e){return"undefined"!=typeof console&&null!==console&&null!=console.warn&&console.warn("#"+t+" is deprecated. Use #"+n+" instead."),e.apply(this)},o.prototype.sameDay=function(){return this._deprecate("sameDay","isSame('day')",function(){return this.isSame("day")})},o.prototype.sameYear=function(){return this._deprecate("sameYear","isSame('year')",function(){return this.isSame("year")})},o.prototype.countDays=function(){return this._deprecate("countDays","countOuter('days')",function(){return this.countOuter("days")})},o.prototype.daysIn=function(t){return this._deprecate("daysIn","iterate('days' [,minHours])",function(){return this.iterate("days",t)})},o.prototype.past=function(){return this._deprecate("past","isPast()",function(){return this.isPast()})},o.prototype.duration=function(){return this._deprecate("duration","humanizeLength()",function(){return this.humanizeLength()})},o.prototype.merge=function(t){return this._deprecate("merge","union(other)",function(){return this.union(t)})},o}(),a=function(t){return"function"==typeof Object.getPrototypeOf?Object.getPrototypeOf(t):"".__proto__===String.prototype?t.__proto__:t.constructor.prototype},o._extend(a(n.fn._lang),{_twix:o.defaults}),n.twix=function(){return function(t,n,e){e.prototype=t.prototype;var r=new e,o=t.apply(r,n);return Object(o)===o?o:r}(o,arguments,function(){})},n.fn.twix=function(){return function(t,n,e){e.prototype=t.prototype;var r=new e,o=t.apply(r,n);return Object(o)===o?o:r}(o,[this].concat(e.call(arguments)),function(){})},n.fn.forDuration=function(t,n){return new o(this,this.clone().add(t),n)},n.duration.fn.afterMoment=function(t,e){return new o(t,n(t).clone().add(this),e)},n.duration.fn.beforeMoment=function(t,e){return new o(n(t).clone().subtract(this),t,e)},o},t&&(module.exports=n(require("moment"))),"function"==typeof define&&define("twix",["moment"],function(t){return n(t)}),null!=this.moment&&(this.Twix=n(this.moment))}.call(this);