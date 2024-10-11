(function(React2, react) {
  "use strict";
  function extend_V2(renderExtensionCallback) {
    return self.extend_V2(renderExtensionCallback);
  }
  function serverless(name, options) {
    return self.serverless(name, options);
  }
  function fetch(url, options) {
    return self.hsFetch(url, options);
  }
  const hubspot = {
    extend: extend_V2,
    serverless,
    fetch
  };
  react.createRemoteReactComponent("Alert");
  react.createRemoteReactComponent("Button", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("ButtonRow");
  react.createRemoteReactComponent("Card");
  react.createRemoteReactComponent("DescriptionList");
  react.createRemoteReactComponent("DescriptionListItem");
  const Divider = react.createRemoteReactComponent("Divider");
  react.createRemoteReactComponent("EmptyState");
  react.createRemoteReactComponent("ErrorState");
  react.createRemoteReactComponent("Form");
  react.createRemoteReactComponent("Heading");
  react.createRemoteReactComponent("Image", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("Input");
  react.createRemoteReactComponent("Link", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("TextArea");
  react.createRemoteReactComponent("Textarea");
  react.createRemoteReactComponent("LoadingSpinner");
  react.createRemoteReactComponent("ProgressBar");
  react.createRemoteReactComponent("Select");
  react.createRemoteReactComponent("Tag", {
    fragmentProps: ["overlay"]
  });
  const Text = react.createRemoteReactComponent("Text");
  react.createRemoteReactComponent("Tile");
  react.createRemoteReactComponent("Stack");
  react.createRemoteReactComponent("ToggleGroup");
  react.createRemoteReactComponent("StatisticsItem");
  react.createRemoteReactComponent("Statistics");
  react.createRemoteReactComponent("StatisticsTrend");
  react.createRemoteReactComponent("Table");
  react.createRemoteReactComponent("TableFooter");
  react.createRemoteReactComponent("TableCell");
  react.createRemoteReactComponent("TableRow");
  react.createRemoteReactComponent("TableBody");
  react.createRemoteReactComponent("TableHeader");
  react.createRemoteReactComponent("TableHead");
  react.createRemoteReactComponent("NumberInput");
  react.createRemoteReactComponent("Box");
  react.createRemoteReactComponent("StepIndicator");
  react.createRemoteReactComponent("Accordion");
  react.createRemoteReactComponent("MultiSelect");
  react.createRemoteReactComponent("Flex");
  react.createRemoteReactComponent("DateInput");
  react.createRemoteReactComponent("Checkbox");
  react.createRemoteReactComponent("RadioButton");
  react.createRemoteReactComponent("List");
  react.createRemoteReactComponent("Toggle");
  react.createRemoteReactComponent("Dropdown");
  react.createRemoteReactComponent("Panel");
  react.createRemoteReactComponent("PanelFooter");
  react.createRemoteReactComponent("PanelBody");
  react.createRemoteReactComponent("PanelSection");
  react.createRemoteReactComponent("StepperInput");
  react.createRemoteReactComponent("Modal");
  react.createRemoteReactComponent("ModalBody");
  react.createRemoteReactComponent("ModalFooter");
  react.createRemoteReactComponent("Icon");
  react.createRemoteReactComponent("StatusTag");
  react.createRemoteReactComponent("LoadingButton", {
    fragmentProps: ["overlay"]
  });
  const BarChart = react.createRemoteReactComponent("BarChart");
  const LineChart = react.createRemoteReactComponent("LineChart");
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }
  function isObject(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }
  function map(arr, fn) {
    var res = [], i, arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
    if (isNowValid) {
      flags = getParsingFlags(m);
      parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
    }
    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [], updateInProgress = false;
  function copyConfig(to2, from2) {
    var i, prop, val, momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = /* @__PURE__ */ new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i, key, argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func = callback;
    if (typeof callback === "string") {
      func = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(
          func.apply(this, arguments),
          token2
        );
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array = format2.match(formattingTokens), i, length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale2.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
  };
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
  };
  function getPrioritizedUnits(unitsObj) {
    var units = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(
      s.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
    );
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i, func = callback, tokenLen;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber(callback)) {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token2.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token2[i]] = func;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input, array, config, token3) {
      config._w = config._w || {};
      callback(input, config._w, config, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input, config) {
    if (input != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input, config._a, config, token2);
    }
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    if (!mom.isValid()) {
      return NaN;
    }
    var d = mom._d, isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
      case "Seconds":
        return isUTC ? d.getUTCSeconds() : d.getSeconds();
      case "Minutes":
        return isUTC ? d.getUTCMinutes() : d.getMinutes();
      case "Hours":
        return isUTC ? d.getUTCHours() : d.getHours();
      case "Date":
        return isUTC ? d.getUTCDate() : d.getDate();
      case "Day":
        return isUTC ? d.getUTCDay() : d.getDay();
      case "Month":
        return isUTC ? d.getUTCMonth() : d.getMonth();
      case "FullYear":
        return isUTC ? d.getUTCFullYear() : d.getFullYear();
      default:
        return NaN;
    }
  }
  function set$1(mom, unit, value) {
    var d, isUTC, year, month, date;
    if (!mom.isValid() || isNaN(value)) {
      return;
    }
    d = mom._d;
    isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
      case "Seconds":
        return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
      case "Minutes":
        return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
      case "Hours":
        return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
      case "Date":
        return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
      case "FullYear":
        break;
      default:
        return;
    }
    year = value;
    month = mom.month();
    date = mom.date();
    date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
    void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addRegexToken("M", match1to2, match1to2NoLeadingZero);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
    var month = config._locale.monthsParse(input, token2, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months["standalone"];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    var month = value, date = mom.date();
    date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
    void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortP = regexEscape(this.monthsShort(mom, ""));
      longP = regexEscape(this.months(mom, ""));
      shortPieces.push(shortP);
      longPieces.push(longP);
      mixedPieces.push(longP);
      mixedPieces.push(shortP);
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._monthsShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
  }
  function createDate(y, m, d, h, M, s, ms) {
    var date;
    if (y < 100 && y >= 0) {
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addRegexToken("w", match1to2, match1to2NoLeadingZero);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2, match1to2NoLeadingZero);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function(input, week, config, token2) {
      week[token2.substr(0, 1)] = toInt(input);
    }
  );
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
    var weekday = config._locale.weekdaysParse(input, token2, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
    week[token2] = toInt(input);
  });
  function parseWeekday(input, locale2) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale2.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale2) {
    if (typeof input === "string") {
      return locale2.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
      }
      if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = get(this, "Day");
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._weekdaysShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
    this._weekdaysMinStrictRegex = new RegExp(
      "^(" + minPieces.join("|") + ")",
      "i"
    );
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2, match1to2HasZero);
  addRegexToken("h", match1to2, match1to2NoLeadingZero);
  addRegexToken("k", match1to2, match1to2NoLeadingZero);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {}, localeFamilies = {}, globalLocale;
  function commonPrefix(arr1, arr2) {
    var i, minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale2 = loadLocale(split.slice(0, j).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    return !!(name && name.match("^[^/\\\\]*$"));
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          console.warn(
            "Locale " + key + " not found. Did you forget to load it?"
          );
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale2, parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        );
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale2 = loadLocale(config.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x) {
          defineLocale(x.name, x.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          config.abbr = name;
        }
        locale2 = new Locale(config);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ], isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2]
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7]
      );
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = /* @__PURE__ */ new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(config) {
      config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
    }
  );
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input
    );
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens2.length;
    for (i = 0; i < tokenLen; i++) {
      token2 = tokens2[i];
      parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(
          string.indexOf(parsedInput) + parsedInput.length
        );
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem
    );
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config._a = map(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      function(obj) {
        return obj && parseInt(obj, 10);
      }
    );
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format2 = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format2 === void 0 && input === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format2)) {
      configFromStringAndArray(config);
    } else if (format2) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  ), prototypeMax = deprecate(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i, orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
    minutes2 * 6e4 + // 1000 * 60
    hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
            this,
            createDuration(input - offset2, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
        // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
  function isString(input) {
    return typeof input === "string" || input instanceof String;
  }
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property, propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(
      output || this.localeData().calendar(format2, this, createLocal(now2))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(
      m,
      utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(key) {
      if (key === void 0) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        );
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        ) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(input, array, config, token2) {
      var era = config._locale.erasParse(input, token2, config._strict);
      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    }
  );
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array, config, token2) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format2) {
    var i, l, date, eras = this._eras || getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date = hooks(eras[i].since).startOf("day");
          eras[i].since = date.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      erasName = regexEscape(eras[i].name);
      erasAbbr = regexEscape(eras[i].abbr);
      erasNarrow = regexEscape(eras[i].narrow);
      namePieces.push(erasName);
      abbrPieces.push(erasAbbr);
      narrowPieces.push(erasNarrow);
      mixedPieces.push(erasName);
      mixedPieces.push(erasAbbr);
      mixedPieces.push(erasNarrow);
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp(
      "^(" + narrowPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(input, week, config, token2) {
      week[token2.substr(0, 2)] = toInt(input);
    }
  );
  addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
    week[token2] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addRegexToken("D", match1to2, match1to2NoLeadingZero);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addRegexToken("m", match1to2, match1to2HasZero);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addRegexToken("s", match1to2, match1to2HasZero);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token, getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    getSetZone
  );
  proto.isDSTShifted = deprecate(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    isDaylightSavingTimeShifted
  );
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format2, index, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index, field) {
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index != null) {
      return get$1(format2, index, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format2, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index = format2;
      localeSorted = false;
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
    if (index != null) {
      return get$1(format2, (index + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format2, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index) {
    return listMonthsImpl(format2, index, "months");
  }
  function listMonthsShort(format2, index) {
    return listMonthsImpl(format2, index, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    }
  });
  hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    getSetGlobalLocale
  );
  hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    getLocale
  );
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round, thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    toISOString$1
  );
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  //! moment.js
  hooks.version = "2.30.1";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  const random = (min2, max2) => {
    return Math.floor(Math.random() * (max2 - min2)) + min2;
  };
  const formatToYearMonth = (date) => {
    return date.format("YYYY-MM");
  };
  const generateSalesOverTimeSamples = ({
    nSamples,
    periodInMonths,
    categories
  }) => Array.from({ length: nSamples }, () => ({
    date: hooks().subtract(random(0, periodInMonths), "months"),
    category: categories[random(0, categories.length)],
    price: random(1, 101)
  }));
  const calculateTotalSalesPerMonth = (sales) => {
    const salesPerMonthAccumulation = {};
    sales.forEach(({ date }) => {
      const yearMonth = formatToYearMonth(date);
      if (salesPerMonthAccumulation[yearMonth]) {
        salesPerMonthAccumulation[yearMonth]++;
      } else {
        salesPerMonthAccumulation[yearMonth] = 1;
      }
    });
    return Object.entries(salesPerMonthAccumulation).map(
      ([yearMonth, sales2]) => ({
        yearMonth,
        sales: sales2
      })
    );
  };
  hubspot.extend(() => /* @__PURE__ */ React2.createElement(Extension, null));
  const Extension = () => {
    const salesOverTimeSamples = generateSalesOverTimeSamples({
      nSamples: 100,
      periodInMonths: 6,
      categories: ["Outdoor apparel", "Footwear", "Camping gear", "Accessories"]
    });
    const totalSalesPerMonthBreakdown = calculateTotalSalesPerMonth(salesOverTimeSamples);
    const revenuePerMonthBreakdown = salesOverTimeSamples.map(
      ({ date, ...salesItem }) => ({
        ...salesItem,
        yearMonth: formatToYearMonth(date)
      })
    );
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Text, null, "This card shows how to use a line and bar chart to display external data. The line chart visualizes a customer’s purchase history trends over time and the stacked bar chart shows customer revenue data by category."), /* @__PURE__ */ React2.createElement(
      LineChart,
      {
        data: totalSalesPerMonthBreakdown,
        axes: {
          x: {
            field: "yearMonth",
            fieldType: "category",
            label: "Time (months)"
          },
          y: {
            field: "sales",
            fieldType: "linear",
            label: "Total Sales"
          }
        },
        options: { title: "Purchase history" }
      }
    ), /* @__PURE__ */ React2.createElement(Divider, null), /* @__PURE__ */ React2.createElement(
      BarChart,
      {
        data: revenuePerMonthBreakdown,
        axes: {
          x: {
            field: "yearMonth",
            fieldType: "category",
            label: "Time (months)"
          },
          y: { field: "price", fieldType: "linear", label: "Revenue ($)" },
          options: { groupFieldByColor: "category", stacking: true }
        },
        options: { title: "Sales distribution", showLegend: true }
      }
    ));
  };
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRzRXhhbXBsZUNhcmQuanMiLCJzb3VyY2VzIjpbIi4uL2V4dGVuc2lvbnMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9odWJzcG90LmpzIiwiLi4vZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2NvcmVDb21wb25lbnRzLmpzIiwiLi4vZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3R5cGVzLmpzIiwiLi4vZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvbW9tZW50L2Rpc3QvbW9tZW50LmpzIiwiLi4vZXh0ZW5zaW9ucy91dGlscy50cyIsIi4uL2V4dGVuc2lvbnMvQ2hhcnRzRXhhbXBsZUNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBleHRlbmRfVjIocmVuZGVyRXh0ZW5zaW9uQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2VsZi5leHRlbmRfVjIocmVuZGVyRXh0ZW5zaW9uQ2FsbGJhY2spO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZlcmxlc3MobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBzZWxmLnNlcnZlcmxlc3MobmFtZSwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlbGYuaHNGZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGNvbnN0IGh1YnNwb3QgPSB7XG4gICAgZXh0ZW5kOiBleHRlbmRfVjIsXG4gICAgc2VydmVybGVzcyxcbiAgICBmZXRjaCxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCB9IGZyb20gJ0ByZW1vdGUtdWkvcmVhY3QnO1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FsZXJ0Jyk7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuZXhwb3J0IGNvbnN0IEJ1dHRvblJvdyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdCdXR0b25Sb3cnKTtcbmV4cG9ydCBjb25zdCBDYXJkID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NhcmQnKTtcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkxpc3QgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnRGVzY3JpcHRpb25MaXN0Jyk7XG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25MaXN0SXRlbSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdEZXNjcmlwdGlvbkxpc3RJdGVtJyk7XG5leHBvcnQgY29uc3QgRGl2aWRlciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdEaXZpZGVyJyk7XG5leHBvcnQgY29uc3QgRW1wdHlTdGF0ZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdFbXB0eVN0YXRlJyk7XG5leHBvcnQgY29uc3QgRXJyb3JTdGF0ZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdFcnJvclN0YXRlJyk7XG5leHBvcnQgY29uc3QgRm9ybSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdGb3JtJyk7XG5leHBvcnQgY29uc3QgSGVhZGluZyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdIZWFkaW5nJyk7XG5leHBvcnQgY29uc3QgSW1hZ2UgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnSW1hZ2UnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbmV4cG9ydCBjb25zdCBJbnB1dCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbnB1dCcpO1xuZXhwb3J0IGNvbnN0IExpbmsgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluaycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHRBcmVhJyk7XG4vLyBUZXh0YXJlYSB3YXMgY2hhbmdlZCB0byBUZXh0QXJlYVxuLy8gRXhwb3J0aW5nIGJvdGggZm9yIGJhY2t3YXJkcyBjb21wYXRcbi8qKiBAZGVwcmVjYXRlZCB1c2UgVGV4dEFyZWEgaW5zdGVhZC4gV2l0aCBhIGNhcGl0YWwgQS4qL1xuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHRhcmVhJyk7XG5leHBvcnQgY29uc3QgTG9hZGluZ1NwaW5uZXIgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTG9hZGluZ1NwaW5uZXInKTtcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdQcm9ncmVzc0JhcicpO1xuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBUYWcgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFnJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG5leHBvcnQgY29uc3QgVGV4dCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0Jyk7XG5leHBvcnQgY29uc3QgVGlsZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUaWxlJyk7XG4vKiogQGRlcHJlY2F0ZWQgdXNlIEZsZXggaW5zdGVhZC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHJlbGVhc2UuICovXG5leHBvcnQgY29uc3QgU3RhY2sgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2snKTtcbmV4cG9ydCBjb25zdCBUb2dnbGVHcm91cCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGVHcm91cCcpO1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3NJdGVtID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3NJdGVtJyk7XG5leHBvcnQgY29uc3QgU3RhdGlzdGljcyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0aXN0aWNzJyk7XG5leHBvcnQgY29uc3QgU3RhdGlzdGljc1RyZW5kID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3NUcmVuZCcpO1xuZXhwb3J0IGNvbnN0IFRhYmxlID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlJyk7XG5leHBvcnQgY29uc3QgVGFibGVGb290ZXIgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVGb290ZXInKTtcbmV4cG9ydCBjb25zdCBUYWJsZUNlbGwgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVDZWxsJyk7XG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVSb3cnKTtcbmV4cG9ydCBjb25zdCBUYWJsZUJvZHkgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVCb2R5Jyk7XG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVIZWFkZXInKTtcbmV4cG9ydCBjb25zdCBUYWJsZUhlYWQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVIZWFkJyk7XG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTnVtYmVySW5wdXQnKTtcbmV4cG9ydCBjb25zdCBCb3ggPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQm94Jyk7XG5leHBvcnQgY29uc3QgU3RlcEluZGljYXRvciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGVwSW5kaWNhdG9yJyk7XG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FjY29yZGlvbicpO1xuZXhwb3J0IGNvbnN0IE11bHRpU2VsZWN0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ011bHRpU2VsZWN0Jyk7XG5leHBvcnQgY29uc3QgRmxleCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdGbGV4Jyk7XG5leHBvcnQgY29uc3QgRGF0ZUlucHV0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0RhdGVJbnB1dCcpO1xuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NoZWNrYm94Jyk7XG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b24gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnUmFkaW9CdXR0b24nKTtcbmV4cG9ydCBjb25zdCBMaXN0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xpc3QnKTtcbmV4cG9ydCBjb25zdCBUb2dnbGUgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVG9nZ2xlJyk7XG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnRHJvcGRvd24nKTtcbmV4cG9ydCBjb25zdCBQYW5lbCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbCcpO1xuZXhwb3J0IGNvbnN0IFBhbmVsRm9vdGVyID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsRm9vdGVyJyk7XG5leHBvcnQgY29uc3QgUGFuZWxCb2R5ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsQm9keScpO1xuZXhwb3J0IGNvbnN0IFBhbmVsU2VjdGlvbiA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbFNlY3Rpb24nKTtcbmV4cG9ydCBjb25zdCBTdGVwcGVySW5wdXQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RlcHBlcklucHV0Jyk7XG5leHBvcnQgY29uc3QgTW9kYWwgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTW9kYWwnKTtcbmV4cG9ydCBjb25zdCBNb2RhbEJvZHkgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTW9kYWxCb2R5Jyk7XG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTW9kYWxGb290ZXInKTtcbmV4cG9ydCBjb25zdCBJY29uID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ljb24nKTtcbmV4cG9ydCBjb25zdCBTdGF0dXNUYWcgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdHVzVGFnJyk7XG5leHBvcnQgY29uc3QgTG9hZGluZ0J1dHRvbiA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG5leHBvcnQgY29uc3QgQmFyQ2hhcnQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQmFyQ2hhcnQnKTtcbmV4cG9ydCBjb25zdCBMaW5lQ2hhcnQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluZUNoYXJ0Jyk7XG4iLCJleHBvcnQgY2xhc3MgRXh0ZW5zaW9uRXZlbnQge1xuICAgIHR5cGU7XG4gICAgYnViYmxlcztcbiAgICB0aW1lU3RhbXA7XG4gICAgaWQ7XG4gICAgY29uc3RydWN0b3IoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5idWJibGVzID0gZXZlbnQuYnViYmxlcztcbiAgICAgICAgdGhpcy50eXBlID0gZXZlbnQudHlwZTtcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBldmVudC50aW1lU3RhbXA7XG4gICAgICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb3JtU3VibWl0RXh0ZW5zaW9uRXZlbnQgZXh0ZW5kcyBFeHRlbnNpb25FdmVudCB7XG4gICAgdGFyZ2V0VmFsdWU7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIHN1cGVyKGV2ZW50KTtcbiAgICAgICAgdGhpcy50YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBjaGFydEZpZWxkVHlwZXMgPSB7XG4gICAgZGF0ZXRpbWU6ICdkYXRldGltZScsXG4gICAgbGluZWFyOiAnbGluZWFyJyxcbiAgICBjYXRlZ29yeTogJ2NhdGVnb3J5Jyxcbn07XG5leHBvcnQgY29uc3QgaWNvbk5hbWVzID0ge1xuICAgIHN1Y2Nlc3M6ICdzdWNjZXNzJyxcbiAgICByZW1vdmU6ICdyZW1vdmUnLFxuICAgIGFkZDogJ2FkZCcsXG4gICAgYXR0YWNoOiAnYXR0YWNoJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgY29weTogJ2R1cGxpY2F0ZScsXG4gICAgZGVsZXRlOiAnZGVsZXRlJyxcbiAgICBlZGl0OiAnZWRpdCcsXG4gICAgZW1haWw6ICdlbWFpbCcsXG4gICAgZXhjbGFtYXRpb246ICdleGNsYW1hdGlvbicsXG4gICAgcXVlc3Rpb246ICdxdWVzdGlvbicsXG4gICAgaG9tZTogJ2hvbWUnLFxuICAgIGxvY2F0aW9uOiAnbG9jYXRpb24nLFxuICAgIHVwQ2FyYXQ6ICd1cENhcmF0JyxcbiAgICBkb3duQ2FyYXQ6ICdkb3duQ2FyYXQnLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBzaG9wcGluZ0NhcnQ6ICdjYXJ0JyxcbiAgICBjbG9jazogJ3RpbWUnLFxuICAgIGNvbW1lbnQ6ICdjb21tZW50cycsXG4gICAgY29udGFjdDogJ2NvbnRhY3RzJyxcbiAgICBzdGFyOiAnZmF2b3JpdGUnLFxuICAgIGZpbGU6ICdmaWxlJyxcbiAgICByZXBvcnRzOiAncmVwb3J0cycsXG4gICAgdmlkZW86ICd2aWRlbycsXG4gICAgcm9ib3Q6ICdzaW1wbGVCb3QnLFxuICAgIHJlZnJlc2g6ICdyZWZyZXNoJyxcbiAgICBmYWNlSGFwcHk6ICdlbW9qaScsXG4gICAgZmFjZU5ldXRyYWw6ICdlbW9qaUxpbmVOZXV0cmFsJyxcbiAgICBmYWNlU2FkOiAnZW1vamlMaW5lU2FkJyxcbiAgICB1cGxvYWQ6ICd1cGxvYWQnLFxuICAgIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICAgIGxlZnQ6ICdsZWZ0JyxcbiAgICByaWdodDogJ3JpZ2h0JyxcbiAgICBkYXRhU3luYzogJ2RhdGFTeW5jJyxcbiAgICBpbWFnZUdhbGxlcnk6ICdpbWFnZUdhbGxlcnknLFxuICAgIHNlYXJjaDogJ3NlYXJjaCcsXG4gICAgc2F2ZTogJ3NhdmVFZGl0YWJsZVZpZXcnLFxuICAgIG5vdGlmaWNhdGlvbjogJ25vdGlmaWNhdGlvbicsXG4gICAgYnVsYjogJ2J1bGInLFxuICAgIHNldHRpbmdzOiAnc2V0dGluZ3MnLFxufTtcbi8qKlxuICogQGNhdGVnb3J5IFNlcnZlcmxlc3NcbiAqL1xuZXhwb3J0IHZhciBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzO1xuKGZ1bmN0aW9uIChTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzKSB7XG4gICAgU2VydmVybGVzc0V4ZWN1dGlvblN0YXR1c1tcIlN1Y2Nlc3NcIl0gPSBcIlNVQ0NFU1NcIjtcbiAgICBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzW1wiRXJyb3JcIl0gPSBcIkVSUk9SXCI7XG59KShTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzIHx8IChTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzID0ge30pKTtcbi8qKiBAZGVwcmVjYXRlZCB1c2UgRXh0ZW5zaW9uRXZlbnQvRm9ybVN1Ym1pdEV4dGVuc2lvbkV2ZW50IGluc3RlYWQgKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVFdmVudCB7XG4gICAgdHlwZTtcbiAgICBidWJibGVzO1xuICAgIHRpbWVTdGFtcDtcbiAgICB0YXJnZXRWYWx1ZTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5idWJibGVzID0gZXZlbnQuYnViYmxlcztcbiAgICAgICAgdGhpcy50eXBlID0gZXZlbnQudHlwZTtcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBldmVudC50aW1lU3RhbXA7XG4gICAgICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCIvLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuMzAuMVxuLy8hIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgbW9tZW50anMuY29tXG5cbnZhciBob29rQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhvb2tzKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgICBpbnB1dCAhPSBudWxsICYmXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1hcChhcnIsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBhcnJMZW4gPSBhcnIubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcnJMZW47ICsraSkge1xuICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgYS50b1N0cmluZyA9IGIudG9TdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICBhLnZhbHVlT2YgPSBiLnZhbHVlT2Y7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCB0cnVlKS51dGMoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wdHk6IGZhbHNlLFxuICAgICAgICB1bnVzZWRUb2tlbnM6IFtdLFxuICAgICAgICB1bnVzZWRJbnB1dDogW10sXG4gICAgICAgIG92ZXJmbG93OiAtMixcbiAgICAgICAgY2hhcnNMZWZ0T3ZlcjogMCxcbiAgICAgICAgbnVsbElucHV0OiBmYWxzZSxcbiAgICAgICAgaW52YWxpZEVyYTogbnVsbCxcbiAgICAgICAgaW52YWxpZE1vbnRoOiBudWxsLFxuICAgICAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcbiAgICAgICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgaXNvOiBmYWxzZSxcbiAgICAgICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcbiAgICAgICAgZXJhOiBudWxsLFxuICAgICAgICBtZXJpZGllbTogbnVsbCxcbiAgICAgICAgcmZjMjgyMjogZmFsc2UsXG4gICAgICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2UsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xuICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0uX3BmO1xufVxuXG52YXIgc29tZTtcbmlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbn0gZWxzZSB7XG4gICAgc29tZSA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyksXG4gICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgdmFyIGZsYWdzID0gbnVsbCxcbiAgICAgICAgcGFyc2VkUGFydHMgPSBmYWxzZSxcbiAgICAgICAgaXNOb3dWYWxpZCA9IG0uX2QgJiYgIWlzTmFOKG0uX2QuZ2V0VGltZSgpKTtcbiAgICBpZiAoaXNOb3dWYWxpZCkge1xuICAgICAgICBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKTtcbiAgICAgICAgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlzTm93VmFsaWQgPVxuICAgICAgICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRXJhICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgICAgICBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4obSkpIHtcbiAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiBtLl9pc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGZsYWdzKSB7XG4gICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLnVzZXJJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbi8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG52YXIgbW9tZW50UHJvcGVydGllcyA9IChob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW10pLFxuICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgIHZhciBpLFxuICAgICAgICBwcm9wLFxuICAgICAgICB2YWwsXG4gICAgICAgIG1vbWVudFByb3BlcnRpZXNMZW4gPSBtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aDtcblxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAobW9tZW50UHJvcGVydGllc0xlbiA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1vbWVudFByb3BlcnRpZXNMZW47IGkrKykge1xuICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbi8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG5mdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAvLyBvYmplY3RzLlxuICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01vbWVudChvYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoXG4gICAgICAgIGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGNvbnNvbGUud2FyblxuICAgICkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0aW9uIHdhcm5pbmc6ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sXG4gICAgICAgICAgICAgICAgYXJnLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJnTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGFyZ3VtZW50c1swXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICBtc2cgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuQXJndW1lbnRzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgZm4pO1xufVxuXG52YXIgZGVwcmVjYXRpb25zID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCBtc2cpIHtcbiAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgfVxuICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcbiAgICB9XG59XG5cbmhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9IGZhbHNlO1xuaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICh0eXBlb2YgRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnICYmIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBzZXQoY29uZmlnKSB7XG4gICAgdmFyIHByb3AsIGk7XG4gICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChjb25maWcsIGkpKSB7XG4gICAgICAgICAgICBwcm9wID0gY29uZmlnW2ldO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xuICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICAvXFxkezEsMn0vLnNvdXJjZVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNoaWxkQ29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSxcbiAgICAgICAgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbn1cblxudmFyIGtleXM7XG5cbmlmIChPYmplY3Qua2V5cykge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cztcbn0gZWxzZSB7XG4gICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICByZXMgPSBbXTtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbn1cblxudmFyIGRlZmF1bHRDYWxlbmRhciA9IHtcbiAgICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJyxcbn07XG5cbmZ1bmN0aW9uIGNhbGVuZGFyKGtleSwgbW9tLCBub3cpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICtcbiAgICAgICAgYWJzTnVtYmVyXG4gICAgKTtcbn1cblxudmFyIGZvcm1hdHRpbmdUb2tlbnMgPVxuICAgICAgICAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fE57MSw1fXxZWVlZWVl8WVlZWVl8WVlZWXxZWXx5ezIsNH18eW8/fGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nLFxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2csXG4gICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksXG4gICAgICAgIGksXG4gICAgICAgIGxlbmd0aDtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oYXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIDogYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9XG4gICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLFxuICAgICAgICAgICAgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zXG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxudmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgIExUOiAnaDptbSBBJyxcbiAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICAgIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcbn07XG5cbmZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0KGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyXG4gICAgICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh0b2spIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0b2sgPT09ICdNTU1NJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ01NJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ0REJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ2RkZGQnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvaztcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG59XG5cbnZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuZnVuY3Rpb24gaW52YWxpZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xufVxuXG52YXIgZGVmYXVsdE9yZGluYWwgPSAnJWQnLFxuICAgIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuZnVuY3Rpb24gb3JkaW5hbChudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICBzOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgc3M6ICclZCBzZWNvbmRzJyxcbiAgICBtOiAnYSBtaW51dGUnLFxuICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgaDogJ2FuIGhvdXInLFxuICAgIGhoOiAnJWQgaG91cnMnLFxuICAgIGQ6ICdhIGRheScsXG4gICAgZGQ6ICclZCBkYXlzJyxcbiAgICB3OiAnYSB3ZWVrJyxcbiAgICB3dzogJyVkIHdlZWtzJyxcbiAgICBNOiAnYSBtb250aCcsXG4gICAgTU06ICclZCBtb250aHMnLFxuICAgIHk6ICdhIHllYXInLFxuICAgIHl5OiAnJWQgeWVhcnMnLFxufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpXG4gICAgICAgID8gb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSlcbiAgICAgICAgOiBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcGFzdEZ1dHVyZShkaWZmLCBvdXRwdXQpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xufVxuXG52YXIgYWxpYXNlcyA9IHtcbiAgICBEOiAnZGF0ZScsXG4gICAgZGF0ZXM6ICdkYXRlJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgZDogJ2RheScsXG4gICAgZGF5czogJ2RheScsXG4gICAgZGF5OiAnZGF5JyxcbiAgICBlOiAnd2Vla2RheScsXG4gICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcbiAgICB3ZWVrZGF5OiAnd2Vla2RheScsXG4gICAgRTogJ2lzb1dlZWtkYXknLFxuICAgIGlzb3dlZWtkYXlzOiAnaXNvV2Vla2RheScsXG4gICAgaXNvd2Vla2RheTogJ2lzb1dlZWtkYXknLFxuICAgIERERDogJ2RheU9mWWVhcicsXG4gICAgZGF5b2Z5ZWFyczogJ2RheU9mWWVhcicsXG4gICAgZGF5b2Z5ZWFyOiAnZGF5T2ZZZWFyJyxcbiAgICBoOiAnaG91cicsXG4gICAgaG91cnM6ICdob3VyJyxcbiAgICBob3VyOiAnaG91cicsXG4gICAgbXM6ICdtaWxsaXNlY29uZCcsXG4gICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxuICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmQnLFxuICAgIG06ICdtaW51dGUnLFxuICAgIG1pbnV0ZXM6ICdtaW51dGUnLFxuICAgIG1pbnV0ZTogJ21pbnV0ZScsXG4gICAgTTogJ21vbnRoJyxcbiAgICBtb250aHM6ICdtb250aCcsXG4gICAgbW9udGg6ICdtb250aCcsXG4gICAgUTogJ3F1YXJ0ZXInLFxuICAgIHF1YXJ0ZXJzOiAncXVhcnRlcicsXG4gICAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxuICAgIHM6ICdzZWNvbmQnLFxuICAgIHNlY29uZHM6ICdzZWNvbmQnLFxuICAgIHNlY29uZDogJ3NlY29uZCcsXG4gICAgZ2c6ICd3ZWVrWWVhcicsXG4gICAgd2Vla3llYXJzOiAnd2Vla1llYXInLFxuICAgIHdlZWt5ZWFyOiAnd2Vla1llYXInLFxuICAgIEdHOiAnaXNvV2Vla1llYXInLFxuICAgIGlzb3dlZWt5ZWFyczogJ2lzb1dlZWtZZWFyJyxcbiAgICBpc293ZWVreWVhcjogJ2lzb1dlZWtZZWFyJyxcbiAgICB3OiAnd2VlaycsXG4gICAgd2Vla3M6ICd3ZWVrJyxcbiAgICB3ZWVrOiAnd2VlaycsXG4gICAgVzogJ2lzb1dlZWsnLFxuICAgIGlzb3dlZWtzOiAnaXNvV2VlaycsXG4gICAgaXNvd2VlazogJ2lzb1dlZWsnLFxuICAgIHk6ICd5ZWFyJyxcbiAgICB5ZWFyczogJ3llYXInLFxuICAgIHllYXI6ICd5ZWFyJyxcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbn1cblxudmFyIHByaW9yaXRpZXMgPSB7XG4gICAgZGF0ZTogOSxcbiAgICBkYXk6IDExLFxuICAgIHdlZWtkYXk6IDExLFxuICAgIGlzb1dlZWtkYXk6IDExLFxuICAgIGRheU9mWWVhcjogNCxcbiAgICBob3VyOiAxMyxcbiAgICBtaWxsaXNlY29uZDogMTYsXG4gICAgbWludXRlOiAxNCxcbiAgICBtb250aDogOCxcbiAgICBxdWFydGVyOiA3LFxuICAgIHNlY29uZDogMTUsXG4gICAgd2Vla1llYXI6IDEsXG4gICAgaXNvV2Vla1llYXI6IDEsXG4gICAgd2VlazogNSxcbiAgICBpc29XZWVrOiA1LFxuICAgIHllYXI6IDEsXG59O1xuXG5mdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgdmFyIHVuaXRzID0gW10sXG4gICAgICAgIHU7XG4gICAgZm9yICh1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKHVuaXRzT2JqLCB1KSkge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh7IHVuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHJldHVybiB1bml0cztcbn1cblxudmFyIG1hdGNoMSA9IC9cXGQvLCAvLyAgICAgICAwIC0gOVxuICAgIG1hdGNoMiA9IC9cXGRcXGQvLCAvLyAgICAgIDAwIC0gOTlcbiAgICBtYXRjaDMgPSAvXFxkezN9LywgLy8gICAgIDAwMCAtIDk5OVxuICAgIG1hdGNoNCA9IC9cXGR7NH0vLCAvLyAgICAwMDAwIC0gOTk5OVxuICAgIG1hdGNoNiA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaDF0bzIgPSAvXFxkXFxkPy8sIC8vICAgICAgIDAgLSA5OVxuICAgIG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LywgLy8gICAgIDk5OSAtIDk5OTlcbiAgICBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy8sIC8vICAgOTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaDF0bzMgPSAvXFxkezEsM30vLCAvLyAgICAgICAwIC0gOTk5XG4gICAgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LywgLy8gICAgICAgMCAtIDk5OTlcbiAgICBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaFVuc2lnbmVkID0gL1xcZCsvLCAvLyAgICAgICAwIC0gaW5mXG4gICAgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLywgLy8gICAgLWluZiAtIGluZlxuICAgIG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2ksIC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG4gICAgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vLCAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuICAgIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgIC8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbiAgICBtYXRjaFdvcmQgPVxuICAgICAgICAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaSxcbiAgICBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvID0gL15bMS05XVxcZD8vLCAvLyAgICAgICAgIDEtOTlcbiAgICBtYXRjaDF0bzJIYXNaZXJvID0gL14oWzEtOV1cXGR8XFxkKS8sIC8vICAgICAgICAgICAwLTk5XG4gICAgcmVnZXhlcztcblxucmVnZXhlcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpXG4gICAgICAgID8gcmVnZXhcbiAgICAgICAgOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4ID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oY29uZmlnLl9zdHJpY3QsIGNvbmZpZy5fbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgIHJldHVybiByZWdleEVzY2FwZShcbiAgICAgICAgc1xuICAgICAgICAgICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcmVnZXhFc2NhcGUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBhYnNGbG9vcihudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciB0b2tlbnMgPSB7fTtcblxuZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaSxcbiAgICAgICAgZnVuYyA9IGNhbGxiYWNrLFxuICAgICAgICB0b2tlbkxlbjtcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgfVxuICAgIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9rZW5MZW4gPSB0b2tlbi5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IHRva2VuTGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuXG52YXIgWUVBUiA9IDAsXG4gICAgTU9OVEggPSAxLFxuICAgIERBVEUgPSAyLFxuICAgIEhPVVIgPSAzLFxuICAgIE1JTlVURSA9IDQsXG4gICAgU0VDT05EID0gNSxcbiAgICBNSUxMSVNFQ09ORCA9IDYsXG4gICAgV0VFSyA9IDcsXG4gICAgV0VFS0RBWSA9IDg7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1knLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICByZXR1cm4geSA8PSA5OTk5ID8gemVyb0ZpbGwoeSwgNCkgOiAnKycgKyB5O1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCA0XSwgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCA1XSwgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIDAsICd5ZWFyJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9XG4gICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbi8vIEhPT0tTXG5cbmhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn07XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG5mdW5jdGlvbiBnZXRJc0xlYXBZZWFyKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldFNldCh1bml0LCBrZWVwVGltZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgdW5pdCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXQobW9tLCB1bml0KSB7XG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdmFyIGQgPSBtb20uX2QsXG4gICAgICAgIGlzVVRDID0gbW9tLl9pc1VUQztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNaWxsaXNlY29uZHMoKSA6IGQuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgICAgIGNhc2UgJ1NlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENTZWNvbmRzKCkgOiBkLmdldFNlY29uZHMoKTtcbiAgICAgICAgY2FzZSAnTWludXRlcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ01pbnV0ZXMoKSA6IGQuZ2V0TWludXRlcygpO1xuICAgICAgICBjYXNlICdIb3Vycyc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0hvdXJzKCkgOiBkLmdldEhvdXJzKCk7XG4gICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENEYXRlKCkgOiBkLmdldERhdGUoKTtcbiAgICAgICAgY2FzZSAnRGF5JzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRGF5KCkgOiBkLmdldERheSgpO1xuICAgICAgICBjYXNlICdNb250aCc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ01vbnRoKCkgOiBkLmdldE1vbnRoKCk7XG4gICAgICAgIGNhc2UgJ0Z1bGxZZWFyJzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRnVsbFllYXIoKSA6IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBOYU47IC8vIEp1c3QgaW4gY2FzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0JDEobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgIHZhciBkLCBpc1VUQywgeWVhciwgbW9udGgsIGRhdGU7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkgfHwgaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkID0gbW9tLl9kO1xuICAgIGlzVVRDID0gbW9tLl9pc1VUQztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDXG4gICAgICAgICAgICAgICAgPyBkLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IGQuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKSk7XG4gICAgICAgIGNhc2UgJ1NlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENTZWNvbmRzKHZhbHVlKSA6IGQuc2V0U2Vjb25kcyh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdNaW51dGVzJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkLnNldE1pbnV0ZXModmFsdWUpKTtcbiAgICAgICAgY2FzZSAnSG91cnMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENIb3Vycyh2YWx1ZSkgOiBkLnNldEhvdXJzKHZhbHVlKSk7XG4gICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENEYXRlKHZhbHVlKSA6IGQuc2V0RGF0ZSh2YWx1ZSkpO1xuICAgICAgICAvLyBjYXNlICdEYXknOiAvLyBOb3QgcmVhbFxuICAgICAgICAvLyAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ0RheSh2YWx1ZSkgOiBkLnNldERheSh2YWx1ZSkpO1xuICAgICAgICAvLyBjYXNlICdNb250aCc6IC8vIE5vdCB1c2VkIGJlY2F1c2Ugd2UgbmVlZCB0byBwYXNzIHR3byB2YXJpYWJsZXNcbiAgICAgICAgLy8gICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTW9udGgodmFsdWUpIDogZC5zZXRNb250aCh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdGdWxsWWVhcic6XG4gICAgICAgICAgICBicmVhazsgLy8gU2VlIGJlbG93IC4uLlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuOyAvLyBKdXN0IGluIGNhc2VcbiAgICB9XG5cbiAgICB5ZWFyID0gdmFsdWU7XG4gICAgbW9udGggPSBtb20ubW9udGgoKTtcbiAgICBkYXRlID0gbW9tLmRhdGUoKTtcbiAgICBkYXRlID0gZGF0ZSA9PT0gMjkgJiYgbW9udGggPT09IDEgJiYgIWlzTGVhcFllYXIoeWVhcikgPyAyOCA6IGRhdGU7XG4gICAgdm9pZCAoaXNVVENcbiAgICAgICAgPyBkLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXRlKVxuICAgICAgICA6IGQuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIGRhdGUpKTtcbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBzdHJpbmdHZXQodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdTZXQodW5pdHMsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgIHZhciBwcmlvcml0aXplZCA9IGdldFByaW9yaXRpemVkVW5pdHModW5pdHMpLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHByaW9yaXRpemVkTGVuID0gcHJpb3JpdGl6ZWQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWRMZW47IGkrKykge1xuICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBtb2QobiwgeCkge1xuICAgIHJldHVybiAoKG4gJSB4KSArIHgpICUgeDtcbn1cblxudmFyIGluZGV4T2Y7XG5cbmlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbn0gZWxzZSB7XG4gICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIC8vIEkga25vd1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB2YXIgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgIHJldHVybiBtb2RNb250aCA9PT0gMVxuICAgICAgICA/IGlzTGVhcFllYXIoeWVhcilcbiAgICAgICAgICAgID8gMjlcbiAgICAgICAgICAgIDogMjhcbiAgICAgICAgOiAzMSAtICgobW9kTW9udGggJSA3KSAlIDIpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ01NJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG4vLyBMT0NBTEVTXG5cbnZhciBkZWZhdWx0TG9jYWxlTW9udGhzID1cbiAgICAgICAgJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID1cbiAgICAgICAgJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXG4gICAgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuXG5mdW5jdGlvbiBsb2NhbGVNb250aHMobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocylcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1snc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV1cbiAgICAgICAgOiB0aGlzLl9tb250aHNbXG4gICAgICAgICAgICAgICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXG4gICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIF1bbS5tb250aCgpXTtcbn1cblxuZnVuY3Rpb24gbG9jYWxlTW9udGhzU2hvcnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldXG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRbXG4gICAgICAgICAgICAgIE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICBdW20ubW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgaWksXG4gICAgICAgIG1vbSxcbiAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KFxuICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZU1vbnRoc1BhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLFxuICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NTScgJiZcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NJyAmJlxuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gc2V0TW9udGgobW9tLCB2YWx1ZSkge1xuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1vbS5sb2NhbGVEYXRhKCkubW9udGhzUGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgLy8gVE9ETzogQW5vdGhlciBzaWxlbnQgZmFpbHVyZT9cbiAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb250aCA9IHZhbHVlLFxuICAgICAgICBkYXRlID0gbW9tLmRhdGUoKTtcblxuICAgIGRhdGUgPSBkYXRlIDwgMjkgPyBkYXRlIDogTWF0aC5taW4oZGF0ZSwgZGF5c0luTW9udGgobW9tLnllYXIoKSwgbW9udGgpKTtcbiAgICB2b2lkIChtb20uX2lzVVRDXG4gICAgICAgID8gbW9tLl9kLnNldFVUQ01vbnRoKG1vbnRoLCBkYXRlKVxuICAgICAgICA6IG1vbS5fZC5zZXRNb250aChtb250aCwgZGF0ZSkpO1xuICAgIHJldHVybiBtb207XG59XG5cbmZ1bmN0aW9uIGdldFNldE1vbnRoKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc2V0TW9udGgodGhpcywgdmFsdWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4XG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb250aHNSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4XG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIG1vbSxcbiAgICAgICAgc2hvcnRQLFxuICAgICAgICBsb25nUDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIHNob3J0UCA9IHJlZ2V4RXNjYXBlKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICBsb25nUCA9IHJlZ2V4RXNjYXBlKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydFApO1xuICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ1ApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdQKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydFApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG5cbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAvLyBjYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgdmFyIGRhdGU7XG4gICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSh5KSB7XG4gICAgdmFyIGRhdGUsIGFyZ3M7XG4gICAgLy8gdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgYXJnc1swXSA9IHkgKyA0MDA7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3LFxuICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgcmVzWWVhcixcbiAgICAgICAgcmVzRGF5T2ZZZWFyO1xuXG4gICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICByZXNXZWVrLFxuICAgICAgICByZXNZZWFyO1xuXG4gICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XG4gICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlZWs6IHJlc1dlZWssXG4gICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG4gICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMl0sICd3bycsICd3ZWVrJyk7XG5hZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcbiAgICBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuICAgIH1cbik7XG5cbi8vIEhFTFBFUlNcblxuLy8gTE9DQUxFU1xuXG5mdW5jdGlvbiBsb2NhbGVXZWVrKG1vbSkge1xuICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDYsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDZ0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbn1cblxuZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFdlZWsoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG5hZGRGb3JtYXRUb2tlbignZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdlJywgMCwgMCwgJ3dlZWtkYXknKTtcbmFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignRScsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICB9XG4gICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTE9DQUxFU1xuZnVuY3Rpb24gc2hpZnRXZWVrZGF5cyh3cywgbikge1xuICAgIHJldHVybiB3cy5zbGljZShuLCA3KS5jb25jYXQod3Muc2xpY2UoMCwgbikpO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID1cbiAgICAgICAgJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQsXG4gICAgZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZCxcbiAgICBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcblxuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XG4gICAgdmFyIHdlZWtkYXlzID0gaXNBcnJheSh0aGlzLl93ZWVrZGF5cylcbiAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xuICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xuICAgICAgICAgICAgICBtICYmIG0gIT09IHRydWUgJiYgdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXG4gICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIF07XG4gICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB3ZWVrZGF5c1ttLmRheSgpXVxuICAgICAgICAgIDogd2Vla2RheXM7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQobSkge1xuICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c1Nob3J0LCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldXG4gICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c01pbihtKSB7XG4gICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHRoaXMuX3dlZWtkYXlzTWluLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXVxuICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW47XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlJDEod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksXG4gICAgICAgIGlpLFxuICAgICAgICBtb20sXG4gICAgICAgIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihcbiAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChcbiAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UkMS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcbiAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPVxuICAgICAgICAgICAgICAgICdeJyArXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArXG4gICAgICAgICAgICAgICAgJ3xeJyArXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICtcbiAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICBmb3JtYXQgPT09ICdkZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG5cbiAgICB2YXIgZGF5ID0gZ2V0KHRoaXMsICdEYXknKTtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayhpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgd2Vla2RheSA9ICh0aGlzLmRheSgpICsgNyAtIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdykgJSA3O1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuXG4gICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KHRoaXMuZGF5KCkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2Vla2RheXNSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXhcbiAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIG1pblBpZWNlcyA9IFtdLFxuICAgICAgICBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIG1vbSxcbiAgICAgICAgbWlucCxcbiAgICAgICAgc2hvcnRwLFxuICAgICAgICBsb25ncDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIG1pbnAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpKTtcbiAgICAgICAgc2hvcnRwID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgbG9uZ3AgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzKG1vbSwgJycpKTtcbiAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgJ2knXG4gICAgKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gaEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG59XG5cbmZ1bmN0aW9uIGtGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMl0sIDAsICdob3VyJyk7XG5hZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG5hZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICBoRm9ybWF0LmFwcGx5KHRoaXMpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0aGlzLmhvdXJzKCkgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMilcbiAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuLCBsb3dlcmNhc2UpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0oXG4gICAgICAgICAgICB0aGlzLmhvdXJzKCksXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIGxvd2VyY2FzZVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5tZXJpZGllbSgnYScsIHRydWUpO1xubWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbn1cblxuYWRkUmVnZXhUb2tlbignYScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG5hZGRSZWdleFRva2VuKCdoJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG5hZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xuICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbn0pO1xuXG4vLyBMT0NBTEVTXG5cbmZ1bmN0aW9uIGxvY2FsZUlzUE0oaW5wdXQpIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuIChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaSxcbiAgICAvLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbiAgICAvLyBzcGVjaWZpZWQgd2hpY2ggaG91ciB0aGV5IHdhbnQuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuICAgIC8vIHRoaXMgcnVsZS5cbiAgICBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcblxuZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgfVxufVxuXG52YXIgYmFzZUNvbmZpZyA9IHtcbiAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UsXG59O1xuXG4vLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG52YXIgbG9jYWxlcyA9IHt9LFxuICAgIGxvY2FsZUZhbWlsaWVzID0ge30sXG4gICAgZ2xvYmFsTG9jYWxlO1xuXG5mdW5jdGlvbiBjb21tb25QcmVmaXgoYXJyMSwgYXJyMikge1xuICAgIHZhciBpLFxuICAgICAgICBtaW5sID0gTWF0aC5taW4oYXJyMS5sZW5ndGgsIGFycjIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWlubDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWlubDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBqLFxuICAgICAgICBuZXh0LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNwbGl0O1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG5leHQgJiZcbiAgICAgICAgICAgICAgICBuZXh0Lmxlbmd0aCA+PSBqICYmXG4gICAgICAgICAgICAgICAgY29tbW9uUHJlZml4KHNwbGl0LCBuZXh0KSA+PSBqIC0gMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbGVOYW1lU2FuZShuYW1lKSB7XG4gICAgLy8gUHJldmVudCBuYW1lcyB0aGF0IGxvb2sgbGlrZSBmaWxlc3lzdGVtIHBhdGhzLCBpLmUgY29udGFpbiAnLycgb3IgJ1xcJ1xuICAgIC8vIEVuc3VyZSBuYW1lIGlzIGF2YWlsYWJsZSBhbmQgZnVuY3Rpb24gcmV0dXJucyBib29sZWFuXG4gICAgcmV0dXJuICEhKG5hbWUgJiYgbmFtZS5tYXRjaCgnXlteL1xcXFxcXFxcXSokJykpO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICB2YXIgb2xkTG9jYWxlID0gbnVsbCxcbiAgICAgICAgYWxpYXNlZFJlcXVpcmU7XG4gICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICBpZiAoXG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBtb2R1bGUgJiZcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgJiZcbiAgICAgICAgaXNMb2NhbGVOYW1lU2FuZShuYW1lKVxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBtYXJrIGFzIG5vdCBmb3VuZCB0byBhdm9pZCByZXBlYXRpbmcgZXhwZW5zaXZlIGZpbGUgcmVxdWlyZSBjYWxsIGNhdXNpbmcgaGlnaCBDUFVcbiAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGZpbmQgZW4tVVMsIGVuX1VTLCBlbi11cyBmb3IgZXZlcnkgZm9ybWF0IGNhbGxcbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBudWxsOyAvLyBudWxsIG1lYW5zIG5vdCBmb3VuZFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleSwgdmFsdWVzKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAvL3dhcm4gdXNlciBpZiBhcmd1bWVudHMgYXJlIHBhc3NlZCBidXQgdGhlIGxvY2FsZSBjb3VsZCBub3QgYmUgc2V0XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZShcbiAgICAgICAgICAgICAgICAnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FuIGV4aXN0aW5nIGxvY2FsZS4gbW9tZW50LmRlZmluZUxvY2FsZShsb2NhbGVOYW1lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpZykgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShjb25maWcucGFyZW50TG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGxvY2FsZSxcbiAgICAgICAgICAgIHRtcExvY2FsZSxcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG5cbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCAmJiBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2hpbGQgbG9jYWxlIGluLXBsYWNlIHRvIGF2b2lkIG1lbW9yeS1sZWFrc1xuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXS5zZXQobWVyZ2VDb25maWdzKGxvY2FsZXNbbmFtZV0uX2NvbmZpZywgY29uZmlnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNRVJHRVxuICAgICAgICAgICAgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUxvY2FsZSBpcyBjYWxsZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZVxuICAgICAgICAgICAgICAgIC8vIFNldCBhYmJyIHNvIGl0IHdpbGwgaGF2ZSBhIG5hbWUgKGdldHRlcnMgcmV0dXJuXG4gICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIG90aGVyd2lzZSkuXG4gICAgICAgICAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZ2V0U2V0R2xvYmFsTG9jYWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmZ1bmN0aW9uIGdldExvY2FsZShrZXkpIHtcbiAgICB2YXIgbG9jYWxlO1xuXG4gICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICBrZXkgPSBrZXkuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICAgIH1cblxuICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbn1cblxuZnVuY3Rpb24gbGlzdExvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cobSkge1xuICAgIHZhciBvdmVyZmxvdyxcbiAgICAgICAgYSA9IG0uX2E7XG5cbiAgICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExXG4gICAgICAgICAgICAgICAgPyBNT05USFxuICAgICAgICAgICAgICAgIDogYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKVxuICAgICAgICAgICAgICAgICAgPyBEQVRFXG4gICAgICAgICAgICAgICAgICA6IGFbSE9VUl0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgYVtIT1VSXSA+IDI0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgKGFbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhW01JTlVURV0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbU0VDT05EXSAhPT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gIT09IDApKVxuICAgICAgICAgICAgICAgICAgICA/IEhPVVJcbiAgICAgICAgICAgICAgICAgICAgOiBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgICAgPyBNSU5VVEVcbiAgICAgICAgICAgICAgICAgICAgICA6IGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gU0VDT05EXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1JTExJU0VDT05EXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd0RheU9mWWVhciAmJlxuICAgICAgICAgICAgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIGlzbyA4NjAxIHJlZ2V4XG4vLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbnZhciBleHRlbmRlZElzb1JlZ2V4ID1cbiAgICAgICAgL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgYmFzaWNJc29SZWdleCA9XG4gICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGR8KSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LyxcbiAgICBpc29EYXRlcyA9IFtcbiAgICAgICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICAgICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICAgICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgICAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgICAgICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS9dLFxuICAgICAgICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVlEREQnLCAvXFxkezd9L10sXG4gICAgICAgIFsnWVlZWU1NJywgL1xcZHs2fS8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZJywgL1xcZHs0fS8sIGZhbHNlXSxcbiAgICBdLFxuICAgIC8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbiAgICBpc29UaW1lcyA9IFtcbiAgICAgICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICAgICAgICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICAgICAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICAgICAgICBbJ0hIJywgL1xcZFxcZC9dLFxuICAgIF0sXG4gICAgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKCgtP1xcZCspL2ksXG4gICAgLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xuICAgIHJmYzI4MjIgPVxuICAgICAgICAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvLFxuICAgIG9ic09mZnNldHMgPSB7XG4gICAgICAgIFVUOiAwLFxuICAgICAgICBHTVQ6IDAsXG4gICAgICAgIEVEVDogLTQgKiA2MCxcbiAgICAgICAgRVNUOiAtNSAqIDYwLFxuICAgICAgICBDRFQ6IC01ICogNjAsXG4gICAgICAgIENTVDogLTYgKiA2MCxcbiAgICAgICAgTURUOiAtNiAqIDYwLFxuICAgICAgICBNU1Q6IC03ICogNjAsXG4gICAgICAgIFBEVDogLTcgKiA2MCxcbiAgICAgICAgUFNUOiAtOCAqIDYwLFxuICAgIH07XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG5mdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgIGFsbG93VGltZSxcbiAgICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgICAgdGltZUZvcm1hdCxcbiAgICAgICAgdHpGb3JtYXQsXG4gICAgICAgIGlzb0RhdGVzTGVuID0gaXNvRGF0ZXMubGVuZ3RoLFxuICAgICAgICBpc29UaW1lc0xlbiA9IGlzb1RpbWVzLmxlbmd0aDtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgIHllYXJTdHIsXG4gICAgbW9udGhTdHIsXG4gICAgZGF5U3RyLFxuICAgIGhvdXJTdHIsXG4gICAgbWludXRlU3RyLFxuICAgIHNlY29uZFN0clxuKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcbiAgICAgICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICAgICAgcGFyc2VJbnQobWludXRlU3RyLCAxMCksXG4gICAgXTtcblxuICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpIHtcbiAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICBpZiAoeWVhciA8PSA0OSkge1xuICAgICAgICByZXR1cm4gMjAwMCArIHllYXI7XG4gICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICByZXR1cm4gMTkwMCArIHllYXI7XG4gICAgfVxuICAgIHJldHVybiB5ZWFyO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICByZXR1cm4gc1xuICAgICAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyLCBwYXJzZWRJbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW5kZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgICAgICB2YXIgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSxcbiAgICAgICAgICAgIHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFswXSxcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsxXSxcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsyXVxuICAgICAgICAgICAgKS5nZXREYXkoKTtcbiAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0LCBtaWxpdGFyeU9mZnNldCwgbnVtT2Zmc2V0KSB7XG4gICAgaWYgKG9ic09mZnNldCkge1xuICAgICAgICByZXR1cm4gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICAgIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAgICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApLFxuICAgICAgICAgICAgbSA9IGhtICUgMTAwLFxuICAgICAgICAgICAgaCA9IChobSAtIG0pIC8gMTAwO1xuICAgICAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgICB9XG59XG5cbi8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xuICAgIHZhciBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKSxcbiAgICAgICAgcGFyc2VkQXJyYXk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcbiAgICAgICAgICAgIG1hdGNoWzRdLFxuICAgICAgICAgICAgbWF0Y2hbM10sXG4gICAgICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgIG1hdGNoWzVdLFxuICAgICAgICAgICAgbWF0Y2hbNl0sXG4gICAgICAgICAgICBtYXRjaFs3XVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICAgICAgICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgICAgICAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIDEpIEFTUC5ORVQsIDIpIElTTywgMykgUkZDIDI4MjIgZm9ybWF0cywgb3IgNCkgb3B0aW9uYWwgZmFsbGJhY2sgaWYgcGFyc2luZyBpc24ndCBzdHJpY3RcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuX3N0cmljdCkge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcbiAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICB9XG59XG5cbmhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICAgICAnZGlzY291cmFnZWQuIFBsZWFzZSByZWZlciB0byBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgfVxuKTtcblxuLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgdmFyIG5vd1ZhbHVlID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENEYXRlKCksXG4gICAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbn1cblxuLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4vLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheShjb25maWcpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgaW5wdXQgPSBbXSxcbiAgICAgICAgY3VycmVudERhdGUsXG4gICAgICAgIGV4cGVjdGVkV2Vla2RheSxcbiAgICAgICAgeWVhclRvVXNlO1xuXG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHxcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICB9XG5cbiAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPT0gbnVsbCA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMFxuICAgICkge1xuICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgIH1cblxuICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW5wdXRcbiAgICApO1xuICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDXG4gICAgICAgID8gY29uZmlnLl9kLmdldFVUQ0RheSgpXG4gICAgICAgIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gICAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICAgIGlmIChcbiAgICAgICAgY29uZmlnLl93ICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheVxuICAgICkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZykge1xuICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdywgY3VyV2VlaztcblxuICAgIHcgPSBjb25maWcuX3c7XG4gICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICBkb3cgPSAxO1xuICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKFxuICAgICAgICAgICAgdy5HRyxcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSxcbiAgICAgICAgICAgIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhclxuICAgICAgICApO1xuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgIH1cbn1cblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbmhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuUkZDXzI4MjIpIHtcbiAgICAgICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25maWcuX2EgPSBbXTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgIHZhciBzdHJpbmcgPSAnJyArIGNvbmZpZy5faSxcbiAgICAgICAgaSxcbiAgICAgICAgcGFyc2VkSW5wdXQsXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHNraXBwZWQsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwLFxuICAgICAgICBlcmEsXG4gICAgICAgIHRva2VuTGVuO1xuXG4gICAgdG9rZW5zID1cbiAgICAgICAgZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuICAgIHRva2VuTGVuID0gdG9rZW5zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHxcbiAgICAgICAgICAgIFtdKVswXTtcbiAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoXG4gICAgICAgICAgICAgICAgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9XG4gICAgICAgIHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMFxuICAgICkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKFxuICAgICAgICBjb25maWcuX2xvY2FsZSxcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdLFxuICAgICAgICBjb25maWcuX21lcmlkaWVtXG4gICAgKTtcblxuICAgIC8vIGhhbmRsZSBlcmFcbiAgICBlcmEgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lcmE7XG4gICAgaWYgKGVyYSAhPT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2FbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFzQ29udmVydFllYXIoZXJhLCBjb25maWcuX2FbWUVBUl0pO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICB2YXIgaXNQbTtcblxuICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgIHZhciB0ZW1wQ29uZmlnLFxuICAgICAgICBiZXN0TW9tZW50LFxuICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgaSxcbiAgICAgICAgY3VycmVudFNjb3JlLFxuICAgICAgICB2YWxpZEZvcm1hdEZvdW5kLFxuICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IGZhbHNlLFxuICAgICAgICBjb25maWdmTGVuID0gY29uZmlnLl9mLmxlbmd0aDtcblxuICAgIGlmIChjb25maWdmTGVuID09PSAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZ2ZMZW47IGkrKykge1xuICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gZmFsc2U7XG4gICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICBpZiAoaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgIGlmICghYmVzdEZvcm1hdElzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQgfHxcbiAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRGb3JtYXRGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbmQoY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKSxcbiAgICAgICAgZGF5T3JEYXRlID0gaS5kYXkgPT09IHVuZGVmaW5lZCA/IGkuZGF0ZSA6IGkuZGF5O1xuICAgIGNvbmZpZy5fYSA9IG1hcChcbiAgICAgICAgW2kueWVhciwgaS5tb250aCwgZGF5T3JEYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sXG4gICAgICAgIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9hID0gbWFwKGlucHV0LnNsaWNlKDApLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xuICAgIHZhciBjID0ge307XG5cbiAgICBpZiAoZm9ybWF0ID09PSB0cnVlIHx8IGZvcm1hdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RyaWN0ID0gZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSB8fCBsb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgbG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcbiAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgYy5faSA9IGlucHV0O1xuICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGZhbHNlKTtcbn1cblxudmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKSxcbiAgICBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4vLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4vL1xuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbmZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgIHZhciByZXMsIGk7XG4gICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgfVxuICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgfVxuICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XG4gICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5mdW5jdGlvbiBtaW4oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBtYXgoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG59XG5cbnZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICtuZXcgRGF0ZSgpO1xufTtcblxudmFyIG9yZGVyaW5nID0gW1xuICAgICd5ZWFyJyxcbiAgICAncXVhcnRlcicsXG4gICAgJ21vbnRoJyxcbiAgICAnd2VlaycsXG4gICAgJ2RheScsXG4gICAgJ2hvdXInLFxuICAgICdtaW51dGUnLFxuICAgICdzZWNvbmQnLFxuICAgICdtaWxsaXNlY29uZCcsXG5dO1xuXG5mdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQobSkge1xuICAgIHZhciBrZXksXG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gZmFsc2UsXG4gICAgICAgIGksXG4gICAgICAgIG9yZGVyTGVuID0gb3JkZXJpbmcubGVuZ3RoO1xuICAgIGZvciAoa2V5IGluIG0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcChtLCBrZXkpICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAobVtrZXldID09IG51bGwgfHwgIWlzTmFOKG1ba2V5XSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG9yZGVyTGVuOyArK2kpIHtcbiAgICAgICAgaWYgKG1bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkJDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbn1cblxuZnVuY3Rpb24gRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pLFxuICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDAsXG4gICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgbm9ybWFsaXplZElucHV0Lmlzb1dlZWsgfHwgMCxcbiAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91ciB8fCAwLFxuICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmQgfHwgMDtcblxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID1cbiAgICAgICAgK21pbGxpc2Vjb25kcyArXG4gICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArIHdlZWtzICogNztcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICsgcXVhcnRlcnMgKiAzICsgeWVhcnMgKiAxMjtcblxuICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgdGhpcy5fYnViYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGlzRHVyYXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiBhYnNSb3VuZChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgIH1cbn1cblxuLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBvZmZzZXQodG9rZW4sIHNlcGFyYXRvcikge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpLFxuICAgICAgICAgICAgc2lnbiA9ICcrJztcbiAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzaWduICtcbiAgICAgICAgICAgIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgK1xuICAgICAgICAgICAgc2VwYXJhdG9yICtcbiAgICAgICAgICAgIHplcm9GaWxsKH5+b2Zmc2V0ICUgNjAsIDIpXG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbm9mZnNldCgnWicsICc6Jyk7XG5vZmZzZXQoJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIHRpbWV6b25lIGNodW5rZXJcbi8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG52YXIgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoc3RyaW5nIHx8ICcnKS5tYXRjaChtYXRjaGVyKSxcbiAgICAgICAgY2h1bmssXG4gICAgICAgIHBhcnRzLFxuICAgICAgICBtaW51dGVzO1xuXG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2h1bmsgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgcGFydHMgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcbiAgICB2YXIgcmVzLCBkaWZmO1xuICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcbiAgICAgICAgZGlmZiA9XG4gICAgICAgICAgICAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dClcbiAgICAgICAgICAgICAgICA/IGlucHV0LnZhbHVlT2YoKVxuICAgICAgICAgICAgICAgIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGVPZmZzZXQobSkge1xuICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5mdW5jdGlvbiBnZXRTZXRPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUsIGtlZXBNaW51dGVzKSB7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICBsb2NhbEFkanVzdDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgYWRkU3VidHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGtlZXBMb2NhbFRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwoa2VlcExvY2FsVGltZSkge1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5wdXQgPSBpbnB1dCA/IGNyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIHZhciBjID0ge30sXG4gICAgICAgIG90aGVyO1xuXG4gICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgIGlmIChjLl9hKSB7XG4gICAgICAgIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID1cbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59XG5cbi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxudmFyIGFzcE5ldFJlZ2V4ID0gL14oLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKTooXFxkKykoPzo6KFxcZCspKFxcLlxcZCopPyk/JC8sXG4gICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4gICAgLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuICAgIGlzb1JlZ2V4ID1cbiAgICAgICAgL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQsIGtleSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgIHNpZ24sXG4gICAgICAgIHJldCxcbiAgICAgICAgZGlmZlJlcztcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1zOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICBNOiBpbnB1dC5fbW9udGhzLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpIHx8ICFpc05hTigraW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uW2tleV0gPSAraW5wdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gbWF0Y2hbMV0gPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZDogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgICAgIGg6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXG4gICAgICAgICAgICBtOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICBzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgICAgICBtczogdG9JbnQoYWJzUm91bmQobWF0Y2hbTUlMTElTRUNPTkRdICogMTAwMCkpICogc2lnbiwgLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICgobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeTogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgTTogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgdzogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgaDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgbTogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAoJ2Zyb20nIGluIGR1cmF0aW9uIHx8ICd0bycgaW4gZHVyYXRpb24pXG4gICAgKSB7XG4gICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShcbiAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLmZyb20pLFxuICAgICAgICAgICAgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pXG4gICAgICAgICk7XG5cbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfaXNWYWxpZCcpKSB7XG4gICAgICAgIHJldC5faXNWYWxpZCA9IGlucHV0Ll9pc1ZhbGlkO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGNyZWF0ZUludmFsaWQkMTtcblxuZnVuY3Rpb24gcGFyc2VJc28oaW5wLCBzaWduKSB7XG4gICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXMgPSB7fTtcblxuICAgIHJlcy5tb250aHMgPVxuICAgICAgICBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICsgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgLS1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzO1xuICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcbiAgICB9XG5cbiAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG5mdW5jdGlvbiBjcmVhdGVBZGRlcihkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgLy9pbnZlcnQgdGhlIGFyZ3VtZW50cywgYnV0IGNvbXBsYWluIGFib3V0IGl0XG4gICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAnbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgK1xuICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvYWRkLWludmVydGVkLXBhcmFtLyBmb3IgbW9yZSBpbmZvLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0bXAgPSB2YWw7XG4gICAgICAgICAgICB2YWwgPSBwZXJpb2Q7XG4gICAgICAgICAgICBwZXJpb2QgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3VidHJhY3QobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgaWYgKG1vbnRocykge1xuICAgICAgICBzZXRNb250aChtb20sIGdldChtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAoZGF5cykge1xuICAgICAgICBzZXQkMShtb20sICdEYXRlJywgZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgbW9tLl9kLnNldFRpbWUobW9tLl9kLnZhbHVlT2YoKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgfVxufVxuXG52YXIgYWRkID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpLFxuICAgIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG4vLyB0eXBlIE1vbWVudElucHV0ID0gTW9tZW50IHwgRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBNb21lbnRJbnB1dE9iamVjdCB8IHZvaWQ7IC8vIG51bGwgfCB1bmRlZmluZWRcbmZ1bmN0aW9uIGlzTW9tZW50SW5wdXQoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpc01vbWVudChpbnB1dCkgfHxcbiAgICAgICAgaXNEYXRlKGlucHV0KSB8fFxuICAgICAgICBpc1N0cmluZyhpbnB1dCkgfHxcbiAgICAgICAgaXNOdW1iZXIoaW5wdXQpIHx8XG4gICAgICAgIGlzTnVtYmVyT3JTdHJpbmdBcnJheShpbnB1dCkgfHxcbiAgICAgICAgaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkgfHxcbiAgICAgICAgaW5wdXQgPT09IG51bGwgfHxcbiAgICAgICAgaW5wdXQgPT09IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzTW9tZW50SW5wdXRPYmplY3QoaW5wdXQpIHtcbiAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgJ3llYXJzJyxcbiAgICAgICAgICAgICd5ZWFyJyxcbiAgICAgICAgICAgICd5JyxcbiAgICAgICAgICAgICdtb250aHMnLFxuICAgICAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICdkYXknLFxuICAgICAgICAgICAgJ2QnLFxuICAgICAgICAgICAgJ2RhdGVzJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdEJyxcbiAgICAgICAgICAgICdob3VycycsXG4gICAgICAgICAgICAnaG91cicsXG4gICAgICAgICAgICAnaCcsXG4gICAgICAgICAgICAnbWludXRlcycsXG4gICAgICAgICAgICAnbWludXRlJyxcbiAgICAgICAgICAgICdtJyxcbiAgICAgICAgICAgICdzZWNvbmRzJyxcbiAgICAgICAgICAgICdzZWNvbmQnLFxuICAgICAgICAgICAgJ3MnLFxuICAgICAgICAgICAgJ21pbGxpc2Vjb25kcycsXG4gICAgICAgICAgICAnbWlsbGlzZWNvbmQnLFxuICAgICAgICAgICAgJ21zJyxcbiAgICAgICAgXSxcbiAgICAgICAgaSxcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIHByb3BlcnR5TGVuID0gcHJvcGVydGllcy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydHlMZW47IGkgKz0gMSkge1xuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xufVxuXG5mdW5jdGlvbiBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHtcbiAgICB2YXIgYXJyYXlUZXN0ID0gaXNBcnJheShpbnB1dCksXG4gICAgICAgIGRhdGFUeXBlVGVzdCA9IGZhbHNlO1xuICAgIGlmIChhcnJheVRlc3QpIHtcbiAgICAgICAgZGF0YVR5cGVUZXN0ID1cbiAgICAgICAgICAgIGlucHV0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOdW1iZXIoaXRlbSkgJiYgaXNTdHJpbmcoaW5wdXQpO1xuICAgICAgICAgICAgfSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlUZXN0ICYmIGRhdGFUeXBlVGVzdDtcbn1cblxuZnVuY3Rpb24gaXNDYWxlbmRhclNwZWMoaW5wdXQpIHtcbiAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgJ3NhbWVEYXknLFxuICAgICAgICAgICAgJ25leHREYXknLFxuICAgICAgICAgICAgJ2xhc3REYXknLFxuICAgICAgICAgICAgJ25leHRXZWVrJyxcbiAgICAgICAgICAgICdsYXN0V2VlaycsXG4gICAgICAgICAgICAnc2FtZUVsc2UnLFxuICAgICAgICBdLFxuICAgICAgICBpLFxuICAgICAgICBwcm9wZXJ0eTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgcHJvcGVydHlUZXN0ID0gcHJvcGVydHlUZXN0IHx8IGhhc093blByb3AoaW5wdXQsIHByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0VGVzdCAmJiBwcm9wZXJ0eVRlc3Q7XG59XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xuICAgIHJldHVybiBkaWZmIDwgLTZcbiAgICAgICAgPyAnc2FtZUVsc2UnXG4gICAgICAgIDogZGlmZiA8IC0xXG4gICAgICAgICAgPyAnbGFzdFdlZWsnXG4gICAgICAgICAgOiBkaWZmIDwgMFxuICAgICAgICAgICAgPyAnbGFzdERheSdcbiAgICAgICAgICAgIDogZGlmZiA8IDFcbiAgICAgICAgICAgICAgPyAnc2FtZURheSdcbiAgICAgICAgICAgICAgOiBkaWZmIDwgMlxuICAgICAgICAgICAgICAgID8gJ25leHREYXknXG4gICAgICAgICAgICAgICAgOiBkaWZmIDwgN1xuICAgICAgICAgICAgICAgICAgPyAnbmV4dFdlZWsnXG4gICAgICAgICAgICAgICAgICA6ICdzYW1lRWxzZSc7XG59XG5cbmZ1bmN0aW9uIGNhbGVuZGFyJDEodGltZSwgZm9ybWF0cykge1xuICAgIC8vIFN1cHBvcnQgZm9yIHNpbmdsZSBwYXJhbWV0ZXIsIGZvcm1hdHMgb25seSBvdmVybG9hZCB0byB0aGUgY2FsZW5kYXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNb21lbnRJbnB1dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICB0aW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NhbGVuZGFyU3BlYyhhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICBmb3JtYXRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxuICAgIHZhciBub3cgPSB0aW1lIHx8IGNyZWF0ZUxvY2FsKCksXG4gICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICBmb3JtYXQgPSBob29rcy5jYWxlbmRhckZvcm1hdCh0aGlzLCBzb2QpIHx8ICdzYW1lRWxzZScsXG4gICAgICAgIG91dHB1dCA9XG4gICAgICAgICAgICBmb3JtYXRzICYmXG4gICAgICAgICAgICAoaXNGdW5jdGlvbihmb3JtYXRzW2Zvcm1hdF0pXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpXG4gICAgICAgICAgICAgICAgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KFxuICAgICAgICBvdXRwdXQgfHwgdGhpcy5sb2NhbGVEYXRhKCkuY2FsZW5kYXIoZm9ybWF0LCB0aGlzLCBjcmVhdGVMb2NhbChub3cpKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xufVxuXG5mdW5jdGlvbiBpc0FmdGVyKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5wdXQudmFsdWVPZigpIDwgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0JldHdlZW4oZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xuICAgIHZhciBsb2NhbEZyb20gPSBpc01vbWVudChmcm9tKSA/IGZyb20gOiBjcmVhdGVMb2NhbChmcm9tKSxcbiAgICAgICAgbG9jYWxUbyA9IGlzTW9tZW50KHRvKSA/IHRvIDogY3JlYXRlTG9jYWwodG8pO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsRnJvbS5pc1ZhbGlkKCkgJiYgbG9jYWxUby5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgIHJldHVybiAoXG4gICAgICAgIChpbmNsdXNpdml0eVswXSA9PT0gJygnXG4gICAgICAgICAgICA/IHRoaXMuaXNBZnRlcihsb2NhbEZyb20sIHVuaXRzKVxuICAgICAgICAgICAgOiAhdGhpcy5pc0JlZm9yZShsb2NhbEZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKSdcbiAgICAgICAgICAgID8gdGhpcy5pc0JlZm9yZShsb2NhbFRvLCB1bml0cylcbiAgICAgICAgICAgIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgIGlucHV0TXM7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcbiAgICAgICAgICAgIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LCB1bml0cyk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsIHVuaXRzKTtcbn1cblxuZnVuY3Rpb24gZGlmZihpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICB2YXIgdGhhdCwgem9uZURlbHRhLCBvdXRwdXQ7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDEyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAxZTM7XG4gICAgICAgICAgICBicmVhazsgLy8gMTAwMFxuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDZlNDtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDg2NGU1O1xuICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gNjA0OGU1O1xuICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoRGlmZihhLCBiKSB7XG4gICAgaWYgKGEuZGF0ZSgpIDwgYi5kYXRlKCkpIHtcbiAgICAgICAgLy8gZW5kLW9mLW1vbnRoIGNhbGN1bGF0aW9ucyB3b3JrIGNvcnJlY3Qgd2hlbiB0aGUgc3RhcnQgbW9udGggaGFzIG1vcmVcbiAgICAgICAgLy8gZGF5cyB0aGFuIHRoZSBlbmQgbW9udGguXG4gICAgICAgIHJldHVybiAtbW9udGhEaWZmKGIsIGEpO1xuICAgIH1cbiAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgYW5jaG9yMixcbiAgICAgICAgYWRqdXN0O1xuXG4gICAgaWYgKGIgLSBhbmNob3IgPCAwKSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yIC0gYW5jaG9yMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG59XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xufVxuXG5mdW5jdGlvbiB0b0lTT1N0cmluZyhrZWVwT2Zmc2V0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHV0YyA9IGtlZXBPZmZzZXQgIT09IHRydWUsXG4gICAgICAgIG0gPSB1dGMgPyB0aGlzLmNsb25lKCkudXRjKCkgOiB0aGlzO1xuICAgIGlmIChtLnllYXIoKSA8IDAgfHwgbS55ZWFyKCkgPiA5OTk5KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgdXRjXG4gICAgICAgICAgICAgICAgPyAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJ1xuICAgICAgICAgICAgICAgIDogJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICBpZiAodXRjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpICsgdGhpcy51dGNPZmZzZXQoKSAqIDYwICogMTAwMClcbiAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdaJywgZm9ybWF0TW9tZW50KG0sICdaJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgIG0sXG4gICAgICAgIHV0YyA/ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyA6ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWidcbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgfVxuICAgIHZhciBmdW5jID0gJ21vbWVudCcsXG4gICAgICAgIHpvbmUgPSAnJyxcbiAgICAgICAgcHJlZml4LFxuICAgICAgICB5ZWFyLFxuICAgICAgICBkYXRldGltZSxcbiAgICAgICAgc3VmZml4O1xuICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgIHpvbmUgPSAnWic7XG4gICAgfVxuICAgIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XG4gICAgeWVhciA9IDAgPD0gdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSA/ICdZWVlZJyA6ICdZWVlZWVknO1xuICAgIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQocHJlZml4ICsgeWVhciArIGRhdGV0aW1lICsgc3VmZml4KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KGlucHV0U3RyaW5nKSB7XG4gICAgaWYgKCFpbnB1dFN0cmluZykge1xuICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKVxuICAgICAgICAgICAgPyBob29rcy5kZWZhdWx0Rm9ybWF0VXRjXG4gICAgICAgICAgICA6IGhvb2tzLmRlZmF1bHRGb3JtYXQ7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGZyb20odGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHwgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKVxuICAgICkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcywgZnJvbTogdGltZSB9KVxuICAgICAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxuICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZyb21Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLmZyb20oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbmZ1bmN0aW9uIHRvKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgZnJvbTogdGhpcywgdG86IHRpbWUgfSlcbiAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b05vdyh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbi8vIElmIHBhc3NlZCBhIGxvY2FsZSBrZXksIGl0IHdpbGwgc2V0IHRoZSBsb2NhbGUgZm9yIHRoaXNcbi8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbmZ1bmN0aW9uIGxvY2FsZShrZXkpIHtcbiAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbnZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXG4gICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZnVuY3Rpb24gbG9jYWxlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xufVxuXG52YXIgTVNfUEVSX1NFQ09ORCA9IDEwMDAsXG4gICAgTVNfUEVSX01JTlVURSA9IDYwICogTVNfUEVSX1NFQ09ORCxcbiAgICBNU19QRVJfSE9VUiA9IDYwICogTVNfUEVSX01JTlVURSxcbiAgICBNU19QRVJfNDAwX1lFQVJTID0gKDM2NSAqIDQwMCArIDk3KSAqIDI0ICogTVNfUEVSX0hPVVI7XG5cbi8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XG5mdW5jdGlvbiBtb2QkMShkaXZpZGVuZCwgZGl2aXNvcikge1xuICAgIHJldHVybiAoKGRpdmlkZW5kICUgZGl2aXNvcikgKyBkaXZpc29yKSAlIGRpdmlzb3I7XG59XG5cbmZ1bmN0aW9uIGxvY2FsU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCBkKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1dGNTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XG4gICAgLy8gRGF0ZS5VVEMgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgIHJldHVybiBEYXRlLlVUQyh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIERhdGUuVVRDKHksIG0sIGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRPZih1bml0cykge1xuICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRPZkRhdGUgPSB0aGlzLl9pc1VUQyA/IHV0Y1N0YXJ0T2ZEYXRlIDogbG9jYWxTdGFydE9mRGF0ZTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIDAsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSAtICh0aGlzLm1vbnRoKCkgJSAzKSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKFxuICAgICAgICAgICAgICAgIHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLFxuICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9TRUNPTkQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZW5kT2YodW5pdHMpIHtcbiAgICB2YXIgdGltZSwgc3RhcnRPZkRhdGU7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMykgKyAzLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgKyAxLCAxKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSArIDdcbiAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtICh0aGlzLmlzb1dlZWtkYXkoKSAtIDEpICsgN1xuICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpICsgMSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSArPVxuICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSIC1cbiAgICAgICAgICAgICAgICBtb2QkMShcbiAgICAgICAgICAgICAgICAgICAgdGltZSArICh0aGlzLl9pc1VUQyA/IDAgOiB0aGlzLnV0Y09mZnNldCgpICogTVNfUEVSX01JTlVURSksXG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICAgICAgKSAtXG4gICAgICAgICAgICAgICAgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lICs9IE1TX1BFUl9TRUNPTkQgLSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9kLnNldFRpbWUodGltZSk7XG4gICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcbn1cblxuZnVuY3Rpb24gdW5peCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgbS55ZWFyKCksXG4gICAgICAgIG0ubW9udGgoKSxcbiAgICAgICAgbS5kYXRlKCksXG4gICAgICAgIG0uaG91cigpLFxuICAgICAgICBtLm1pbnV0ZSgpLFxuICAgICAgICBtLnNlY29uZCgpLFxuICAgICAgICBtLm1pbGxpc2Vjb25kKCksXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHllYXJzOiBtLnllYXIoKSxcbiAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxuICAgICAgICBob3VyczogbS5ob3VycygpLFxuICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQkMigpIHtcbiAgICByZXR1cm4gaXNWYWxpZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcGFyc2luZ0ZsYWdzKCkge1xuICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWRBdCgpIHtcbiAgICByZXR1cm4gZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpLm92ZXJmbG93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3QsXG4gICAgfTtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ04nLCAwLCAwLCAnZXJhQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ05OJywgMCwgMCwgJ2VyYUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCdOTk4nLCAwLCAwLCAnZXJhQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ05OTk4nLCAwLCAwLCAnZXJhTmFtZScpO1xuYWRkRm9ybWF0VG9rZW4oJ05OTk5OJywgMCwgMCwgJ2VyYU5hcnJvdycpO1xuXG5hZGRGb3JtYXRUb2tlbigneScsIFsneScsIDFdLCAneW8nLCAnZXJhWWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5JywgMl0sIDAsICdlcmFZZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigneScsIFsneXl5JywgM10sIDAsICdlcmFZZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigneScsIFsneXl5eScsIDRdLCAwLCAnZXJhWWVhcicpO1xuXG5hZGRSZWdleFRva2VuKCdOJywgbWF0Y2hFcmFBYmJyKTtcbmFkZFJlZ2V4VG9rZW4oJ05OJywgbWF0Y2hFcmFBYmJyKTtcbmFkZFJlZ2V4VG9rZW4oJ05OTicsIG1hdGNoRXJhQWJicik7XG5hZGRSZWdleFRva2VuKCdOTk5OJywgbWF0Y2hFcmFOYW1lKTtcbmFkZFJlZ2V4VG9rZW4oJ05OTk5OJywgbWF0Y2hFcmFOYXJyb3cpO1xuXG5hZGRQYXJzZVRva2VuKFxuICAgIFsnTicsICdOTicsICdOTk4nLCAnTk5OTicsICdOTk5OTiddLFxuICAgIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgdmFyIGVyYSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgaWYgKGVyYSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhID0gZXJhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEVyYSA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuYWRkUmVnZXhUb2tlbigneScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneXknLCBtYXRjaFVuc2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ3l5eScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneXl5eScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneW8nLCBtYXRjaEVyYVllYXJPcmRpbmFsKTtcblxuYWRkUGFyc2VUb2tlbihbJ3knLCAneXknLCAneXl5JywgJ3l5eXknXSwgWUVBUik7XG5hZGRQYXJzZVRva2VuKFsneW8nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpIHtcbiAgICAgICAgbWF0Y2ggPSBpbnB1dC5tYXRjaChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5fbG9jYWxlLmVyYVllYXJPcmRpbmFsUGFyc2UpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKGlucHV0LCBtYXRjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBsb2NhbGVFcmFzKG0sIGZvcm1hdCkge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICBkYXRlLFxuICAgICAgICBlcmFzID0gdGhpcy5fZXJhcyB8fCBnZXRMb2NhbGUoJ2VuJykuX2VyYXM7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgICAgIGRhdGUgPSBob29rcyhlcmFzW2ldLnNpbmNlKS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgICAgICAgICBlcmFzW2ldLnNpbmNlID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSArSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS51bnRpbCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJhcztcbn1cblxuZnVuY3Rpb24gbG9jYWxlRXJhc1BhcnNlKGVyYU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksXG4gICAgICAgIGwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJicixcbiAgICAgICAgbmFycm93O1xuICAgIGVyYU5hbWUgPSBlcmFOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgbmFtZSA9IGVyYXNbaV0ubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBhYmJyID0gZXJhc1tpXS5hYmJyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIG5hcnJvdyA9IGVyYXNbaV0ubmFycm93LnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICBjYXNlICdOTic6XG4gICAgICAgICAgICAgICAgY2FzZSAnTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFiYnIgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnTk5OTic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ05OTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hcnJvdyA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoW25hbWUsIGFiYnIsIG5hcnJvd10uaW5kZXhPZihlcmFOYW1lKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxlRXJhc0NvbnZlcnRZZWFyKGVyYSwgeWVhcikge1xuICAgIHZhciBkaXIgPSBlcmEuc2luY2UgPD0gZXJhLnVudGlsID8gKzEgOiAtMTtcbiAgICBpZiAoeWVhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBob29rcyhlcmEuc2luY2UpLnllYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCkgKyAoeWVhciAtIGVyYS5vZmZzZXQpICogZGlyO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXJhTmFtZSgpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhTmFycm93KCkge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICB2YWwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhQWJicigpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0uYWJicjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhWWVhcigpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgZGlyLFxuICAgICAgICB2YWwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGRpciA9IGVyYXNbaV0uc2luY2UgPD0gZXJhc1tpXS51bnRpbCA/ICsxIDogLTE7XG5cbiAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkgfHxcbiAgICAgICAgICAgIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICh0aGlzLnllYXIoKSAtIGhvb2tzKGVyYXNbaV0uc2luY2UpLnllYXIoKSkgKiBkaXIgK1xuICAgICAgICAgICAgICAgIGVyYXNbaV0ub2Zmc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMueWVhcigpO1xufVxuXG5mdW5jdGlvbiBlcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc05hbWVSZWdleCcpKSB7XG4gICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hbWVSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbn1cblxuZnVuY3Rpb24gZXJhc0FiYnJSZWdleChpc1N0cmljdCkge1xuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNBYmJyUmVnZXgnKSkge1xuICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNBYmJyUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG59XG5cbmZ1bmN0aW9uIGVyYXNOYXJyb3dSZWdleChpc1N0cmljdCkge1xuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYXJyb3dSZWdleCcpKSB7XG4gICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hcnJvd1JlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xufVxuXG5mdW5jdGlvbiBtYXRjaEVyYUFiYnIoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZXJhc0FiYnJSZWdleChpc1N0cmljdCk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoRXJhTmFtZShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5lcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hFcmFOYXJyb3coaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hFcmFZZWFyT3JkaW5hbChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCB8fCBtYXRjaFVuc2lnbmVkO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlRXJhc1BhcnNlKCkge1xuICAgIHZhciBhYmJyUGllY2VzID0gW10sXG4gICAgICAgIG5hbWVQaWVjZXMgPSBbXSxcbiAgICAgICAgbmFycm93UGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIGwsXG4gICAgICAgIGVyYXNOYW1lLFxuICAgICAgICBlcmFzQWJicixcbiAgICAgICAgZXJhc05hcnJvdyxcbiAgICAgICAgZXJhcyA9IHRoaXMuZXJhcygpO1xuXG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGVyYXNOYW1lID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYW1lKTtcbiAgICAgICAgZXJhc0FiYnIgPSByZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpO1xuICAgICAgICBlcmFzTmFycm93ID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYXJyb3cpO1xuXG4gICAgICAgIG5hbWVQaWVjZXMucHVzaChlcmFzTmFtZSk7XG4gICAgICAgIGFiYnJQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgIG5hcnJvd1BpZWNlcy5wdXNoKGVyYXNOYXJyb3cpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGVyYXNOYW1lKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goZXJhc05hcnJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZXJhc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX2VyYXNOYW1lUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBuYW1lUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9lcmFzQWJiclJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgYWJiclBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fZXJhc05hcnJvd1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIG5hcnJvd1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW4sIGdldHRlcikge1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcbn1cblxuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAnaXNvV2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignZycsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdHR0dHJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sXG4gICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcbiAgICB9XG4pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICB0aGlzLndlZWtkYXkoKSArIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3lcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhcihpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGhpcy5pc29XZWVrKCksXG4gICAgICAgIHRoaXMuaXNvV2Vla2RheSgpLFxuICAgICAgICAxLFxuICAgICAgICA0XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoKSB7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyKCkge1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLmlzb1dlZWtZZWFyKCksIDEsIDQpO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrc0luWWVhcigpIHtcbiAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla3NJbldlZWtZZWFyKCkge1xuICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLndlZWtZZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKHRoaXMsIGRvdywgZG95KS55ZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgaWYgKHdlZWsgPiB3ZWVrc1RhcmdldCkge1xuICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRXZWVrQWxsLmNhbGwodGhpcywgaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICB0aGlzLnllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG5hZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRRdWFydGVyKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGxcbiAgICAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcbiAgICAgICAgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArICh0aGlzLm1vbnRoKCkgJSAzKSk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgcmV0dXJuIGlzU3RyaWN0XG4gICAgICAgID8gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlXG4gICAgICAgIDogbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudDtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbmFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgM10sICdERERvJywgJ2RheU9mWWVhcicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG5hZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbmFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0RGF5T2ZZZWFyKGlucHV0KSB7XG4gICAgdmFyIGRheU9mWWVhciA9XG4gICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAodGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpIC0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKSkgLyA4NjRlNVxuICAgICAgICApICsgMTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG5hZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdzJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJIYXNaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTAwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTJywgNF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1MnLCA1XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTJywgNl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTJywgN10sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1MnLCA4XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1NTJywgOV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbn0pO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG5hZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxudmFyIHRva2VuLCBnZXRTZXRNaWxsaXNlY29uZDtcbmZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xufVxuXG5mb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XG59XG5cbmdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd6JywgMCwgMCwgJ3pvbmVBYmJyJyk7XG5hZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRab25lQWJicigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRab25lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG5cbnZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbnByb3RvLmFkZCA9IGFkZDtcbnByb3RvLmNhbGVuZGFyID0gY2FsZW5kYXIkMTtcbnByb3RvLmNsb25lID0gY2xvbmU7XG5wcm90by5kaWZmID0gZGlmZjtcbnByb3RvLmVuZE9mID0gZW5kT2Y7XG5wcm90by5mb3JtYXQgPSBmb3JtYXQ7XG5wcm90by5mcm9tID0gZnJvbTtcbnByb3RvLmZyb21Ob3cgPSBmcm9tTm93O1xucHJvdG8udG8gPSB0bztcbnByb3RvLnRvTm93ID0gdG9Ob3c7XG5wcm90by5nZXQgPSBzdHJpbmdHZXQ7XG5wcm90by5pbnZhbGlkQXQgPSBpbnZhbGlkQXQ7XG5wcm90by5pc0FmdGVyID0gaXNBZnRlcjtcbnByb3RvLmlzQmVmb3JlID0gaXNCZWZvcmU7XG5wcm90by5pc0JldHdlZW4gPSBpc0JldHdlZW47XG5wcm90by5pc1NhbWUgPSBpc1NhbWU7XG5wcm90by5pc1NhbWVPckFmdGVyID0gaXNTYW1lT3JBZnRlcjtcbnByb3RvLmlzU2FtZU9yQmVmb3JlID0gaXNTYW1lT3JCZWZvcmU7XG5wcm90by5pc1ZhbGlkID0gaXNWYWxpZCQyO1xucHJvdG8ubGFuZyA9IGxhbmc7XG5wcm90by5sb2NhbGUgPSBsb2NhbGU7XG5wcm90by5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcbnByb3RvLm1heCA9IHByb3RvdHlwZU1heDtcbnByb3RvLm1pbiA9IHByb3RvdHlwZU1pbjtcbnByb3RvLnBhcnNpbmdGbGFncyA9IHBhcnNpbmdGbGFncztcbnByb3RvLnNldCA9IHN0cmluZ1NldDtcbnByb3RvLnN0YXJ0T2YgPSBzdGFydE9mO1xucHJvdG8uc3VidHJhY3QgPSBzdWJ0cmFjdDtcbnByb3RvLnRvQXJyYXkgPSB0b0FycmF5O1xucHJvdG8udG9PYmplY3QgPSB0b09iamVjdDtcbnByb3RvLnRvRGF0ZSA9IHRvRGF0ZTtcbnByb3RvLnRvSVNPU3RyaW5nID0gdG9JU09TdHJpbmc7XG5wcm90by5pbnNwZWN0ID0gaW5zcGVjdDtcbmlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICE9IG51bGwpIHtcbiAgICBwcm90b1tTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdNb21lbnQ8JyArIHRoaXMuZm9ybWF0KCkgKyAnPic7XG4gICAgfTtcbn1cbnByb3RvLnRvSlNPTiA9IHRvSlNPTjtcbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5wcm90by51bml4ID0gdW5peDtcbnByb3RvLnZhbHVlT2YgPSB2YWx1ZU9mO1xucHJvdG8uY3JlYXRpb25EYXRhID0gY3JlYXRpb25EYXRhO1xucHJvdG8uZXJhTmFtZSA9IGdldEVyYU5hbWU7XG5wcm90by5lcmFOYXJyb3cgPSBnZXRFcmFOYXJyb3c7XG5wcm90by5lcmFBYmJyID0gZ2V0RXJhQWJicjtcbnByb3RvLmVyYVllYXIgPSBnZXRFcmFZZWFyO1xucHJvdG8ueWVhciA9IGdldFNldFllYXI7XG5wcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcbnByb3RvLndlZWtZZWFyID0gZ2V0U2V0V2Vla1llYXI7XG5wcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xucHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcbnByb3RvLm1vbnRoID0gZ2V0U2V0TW9udGg7XG5wcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xucHJvdG8ud2VlayA9IHByb3RvLndlZWtzID0gZ2V0U2V0V2VlaztcbnByb3RvLmlzb1dlZWsgPSBwcm90by5pc29XZWVrcyA9IGdldFNldElTT1dlZWs7XG5wcm90by53ZWVrc0luWWVhciA9IGdldFdlZWtzSW5ZZWFyO1xucHJvdG8ud2Vla3NJbldlZWtZZWFyID0gZ2V0V2Vla3NJbldlZWtZZWFyO1xucHJvdG8uaXNvV2Vla3NJblllYXIgPSBnZXRJU09XZWVrc0luWWVhcjtcbnByb3RvLmlzb1dlZWtzSW5JU09XZWVrWWVhciA9IGdldElTT1dlZWtzSW5JU09XZWVrWWVhcjtcbnByb3RvLmRhdGUgPSBnZXRTZXREYXlPZk1vbnRoO1xucHJvdG8uZGF5ID0gcHJvdG8uZGF5cyA9IGdldFNldERheU9mV2VlaztcbnByb3RvLndlZWtkYXkgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG5wcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xucHJvdG8uZGF5T2ZZZWFyID0gZ2V0U2V0RGF5T2ZZZWFyO1xucHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcbnByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG5wcm90by5zZWNvbmQgPSBwcm90by5zZWNvbmRzID0gZ2V0U2V0U2Vjb25kO1xucHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcbnByb3RvLnV0Y09mZnNldCA9IGdldFNldE9mZnNldDtcbnByb3RvLnV0YyA9IHNldE9mZnNldFRvVVRDO1xucHJvdG8ubG9jYWwgPSBzZXRPZmZzZXRUb0xvY2FsO1xucHJvdG8ucGFyc2Vab25lID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG5wcm90by5oYXNBbGlnbmVkSG91ck9mZnNldCA9IGhhc0FsaWduZWRIb3VyT2Zmc2V0O1xucHJvdG8uaXNEU1QgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbnByb3RvLmlzTG9jYWwgPSBpc0xvY2FsO1xucHJvdG8uaXNVdGNPZmZzZXQgPSBpc1V0Y09mZnNldDtcbnByb3RvLmlzVXRjID0gaXNVdGM7XG5wcm90by5pc1VUQyA9IGlzVXRjO1xucHJvdG8uem9uZUFiYnIgPSBnZXRab25lQWJicjtcbnByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG5wcm90by5kYXRlcyA9IGRlcHJlY2F0ZShcbiAgICAnZGF0ZXMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIGRhdGUgaW5zdGVhZC4nLFxuICAgIGdldFNldERheU9mTW9udGhcbik7XG5wcm90by5tb250aHMgPSBkZXByZWNhdGUoXG4gICAgJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsXG4gICAgZ2V0U2V0TW9udGhcbik7XG5wcm90by55ZWFycyA9IGRlcHJlY2F0ZShcbiAgICAneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsXG4gICAgZ2V0U2V0WWVhclxuKTtcbnByb3RvLnpvbmUgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL3pvbmUvJyxcbiAgICBnZXRTZXRab25lXG4pO1xucHJvdG8uaXNEU1RTaGlmdGVkID0gZGVwcmVjYXRlKFxuICAgICdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJyxcbiAgICBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWRcbik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXgoaW5wdXQpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ab25lKCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xufVxuXG5mdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xuXG5wcm90byQxLmNhbGVuZGFyID0gY2FsZW5kYXI7XG5wcm90byQxLmxvbmdEYXRlRm9ybWF0ID0gbG9uZ0RhdGVGb3JtYXQ7XG5wcm90byQxLmludmFsaWREYXRlID0gaW52YWxpZERhdGU7XG5wcm90byQxLm9yZGluYWwgPSBvcmRpbmFsO1xucHJvdG8kMS5wcmVwYXJzZSA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucG9zdGZvcm1hdCA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucmVsYXRpdmVUaW1lID0gcmVsYXRpdmVUaW1lO1xucHJvdG8kMS5wYXN0RnV0dXJlID0gcGFzdEZ1dHVyZTtcbnByb3RvJDEuc2V0ID0gc2V0O1xucHJvdG8kMS5lcmFzID0gbG9jYWxlRXJhcztcbnByb3RvJDEuZXJhc1BhcnNlID0gbG9jYWxlRXJhc1BhcnNlO1xucHJvdG8kMS5lcmFzQ29udmVydFllYXIgPSBsb2NhbGVFcmFzQ29udmVydFllYXI7XG5wcm90byQxLmVyYXNBYmJyUmVnZXggPSBlcmFzQWJiclJlZ2V4O1xucHJvdG8kMS5lcmFzTmFtZVJlZ2V4ID0gZXJhc05hbWVSZWdleDtcbnByb3RvJDEuZXJhc05hcnJvd1JlZ2V4ID0gZXJhc05hcnJvd1JlZ2V4O1xuXG5wcm90byQxLm1vbnRocyA9IGxvY2FsZU1vbnRocztcbnByb3RvJDEubW9udGhzU2hvcnQgPSBsb2NhbGVNb250aHNTaG9ydDtcbnByb3RvJDEubW9udGhzUGFyc2UgPSBsb2NhbGVNb250aHNQYXJzZTtcbnByb3RvJDEubW9udGhzUmVnZXggPSBtb250aHNSZWdleDtcbnByb3RvJDEubW9udGhzU2hvcnRSZWdleCA9IG1vbnRoc1Nob3J0UmVnZXg7XG5wcm90byQxLndlZWsgPSBsb2NhbGVXZWVrO1xucHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xucHJvdG8kMS5maXJzdERheU9mV2VlayA9IGxvY2FsZUZpcnN0RGF5T2ZXZWVrO1xuXG5wcm90byQxLndlZWtkYXlzID0gbG9jYWxlV2Vla2RheXM7XG5wcm90byQxLndlZWtkYXlzTWluID0gbG9jYWxlV2Vla2RheXNNaW47XG5wcm90byQxLndlZWtkYXlzU2hvcnQgPSBsb2NhbGVXZWVrZGF5c1Nob3J0O1xucHJvdG8kMS53ZWVrZGF5c1BhcnNlID0gbG9jYWxlV2Vla2RheXNQYXJzZTtcblxucHJvdG8kMS53ZWVrZGF5c1JlZ2V4ID0gd2Vla2RheXNSZWdleDtcbnByb3RvJDEud2Vla2RheXNTaG9ydFJlZ2V4ID0gd2Vla2RheXNTaG9ydFJlZ2V4O1xucHJvdG8kMS53ZWVrZGF5c01pblJlZ2V4ID0gd2Vla2RheXNNaW5SZWdleDtcblxucHJvdG8kMS5pc1BNID0gbG9jYWxlSXNQTTtcbnByb3RvJDEubWVyaWRpZW0gPSBsb2NhbGVNZXJpZGllbTtcblxuZnVuY3Rpb24gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgdmFyIGksXG4gICAgICAgIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgaSwgZmllbGQsICdtb250aCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vLyAoKVxuLy8gKDUpXG4vLyAoZm10LCA1KVxuLy8gKGZtdClcbi8vICh0cnVlKVxuLy8gKHRydWUsIDUpXG4vLyAodHJ1ZSwgZm10LCA1KVxuLy8gKHRydWUsIGZtdClcbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgIHNoaWZ0ID0gbG9jYWxlU29ydGVkID8gbG9jYWxlLl93ZWVrLmRvdyA6IDAsXG4gICAgICAgIGksXG4gICAgICAgIG91dCA9IFtdO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzTWluJyk7XG59XG5cbmdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgZXJhczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzaW5jZTogJzAwMDEtMDEtMDEnLFxuICAgICAgICAgICAgdW50aWw6ICtJbmZpbml0eSxcbiAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdBbm5vIERvbWluaScsXG4gICAgICAgICAgICBuYXJyb3c6ICdBRCcsXG4gICAgICAgICAgICBhYmJyOiAnQUQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaW5jZTogJzAwMDAtMTItMzEnLFxuICAgICAgICAgICAgdW50aWw6IC1JbmZpbml0eSxcbiAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdCZWZvcmUgQ2hyaXN0JyxcbiAgICAgICAgICAgIG5hcnJvdzogJ0JDJyxcbiAgICAgICAgICAgIGFiYnI6ICdCQycsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgICAgIHRvSW50KChudW1iZXIgJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ25kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0aCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfSxcbn0pO1xuXG4vLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cbmhvb2tzLmxhbmcgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJyxcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGVcbik7XG5ob29rcy5sYW5nRGF0YSA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsXG4gICAgZ2V0TG9jYWxlXG4pO1xuXG52YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBhYnMoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgIHRoaXMuX21vbnRocyA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcblxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgIGRhdGEubWludXRlcyA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICBkYXRhLm1vbnRocyA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgIGRhdGEueWVhcnMgPSBtYXRoQWJzKGRhdGEueWVhcnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0JDEoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICBkdXJhdGlvbi5fZGF5cyArPSBkaXJlY3Rpb24gKiBvdGhlci5fZGF5cztcbiAgICBkdXJhdGlvbi5fbW9udGhzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG5mdW5jdGlvbiBhZGQkMShpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIDEpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuZnVuY3Rpb24gc3VidHJhY3QkMShpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbn1cblxuZnVuY3Rpb24gYWJzQ2VpbChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1YmJsZSgpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyxcbiAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzLFxuICAgICAgICBkYXRhID0gdGhpcy5fZGF0YSxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIHllYXJzLFxuICAgICAgICBtb250aHNGcm9tRGF5cztcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgICAobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMClcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgIGRheXMgPSAwO1xuICAgICAgICBtb250aHMgPSAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGRhdGEuc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgIGhvdXJzID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXG4gICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG4gICAgZGF0YS5kYXlzID0gZGF5cztcbiAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICBkYXRhLnllYXJzID0geWVhcnM7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheXMpIHtcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgcmV0dXJuIChkYXlzICogNDgwMCkgLyAxNDYwOTc7XG59XG5cbmZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aHMpIHtcbiAgICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcbiAgICByZXR1cm4gKG1vbnRocyAqIDE0NjA5NykgLyA0ODAwO1xufVxuXG5mdW5jdGlvbiBhcyh1bml0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdmFyIGRheXMsXG4gICAgICAgIG1vbnRocyxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzIC8gMztcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAxMjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgLyA3ICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQXMoYWxpYXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgfTtcbn1cblxudmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxuICAgIGFzU2Vjb25kcyA9IG1ha2VBcygncycpLFxuICAgIGFzTWludXRlcyA9IG1ha2VBcygnbScpLFxuICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcbiAgICBhc0RheXMgPSBtYWtlQXMoJ2QnKSxcbiAgICBhc1dlZWtzID0gbWFrZUFzKCd3JyksXG4gICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcbiAgICBhc1F1YXJ0ZXJzID0gbWFrZUFzKCdRJyksXG4gICAgYXNZZWFycyA9IG1ha2VBcygneScpLFxuICAgIHZhbHVlT2YkMSA9IGFzTWlsbGlzZWNvbmRzO1xuXG5mdW5jdGlvbiBjbG9uZSQxKCkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih0aGlzKTtcbn1cblxuZnVuY3Rpb24gZ2V0JDIodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzW3VuaXRzICsgJ3MnXSgpIDogTmFOO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xuICAgIH07XG59XG5cbnZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKSxcbiAgICBzZWNvbmRzID0gbWFrZUdldHRlcignc2Vjb25kcycpLFxuICAgIG1pbnV0ZXMgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyksXG4gICAgaG91cnMgPSBtYWtlR2V0dGVyKCdob3VycycpLFxuICAgIGRheXMgPSBtYWtlR2V0dGVyKCdkYXlzJyksXG4gICAgbW9udGhzID0gbWFrZUdldHRlcignbW9udGhzJyksXG4gICAgeWVhcnMgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG5mdW5jdGlvbiB3ZWVrcygpIHtcbiAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbn1cblxudmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICB0aHJlc2hvbGRzID0ge1xuICAgICAgICBzczogNDQsIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgICAgICBzOiA0NSwgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgbTogNDUsIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICBoOiAyMiwgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgIGQ6IDI2LCAvLyBkYXlzIHRvIG1vbnRoL3dlZWtcbiAgICAgICAgdzogbnVsbCwgLy8gd2Vla3MgdG8gbW9udGhcbiAgICAgICAgTTogMTEsIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgfTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtYmVyIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCB0aHJlc2hvbGRzLCBsb2NhbGUpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCksXG4gICAgICAgIHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKSxcbiAgICAgICAgbWludXRlcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpLFxuICAgICAgICBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpLFxuICAgICAgICBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSksXG4gICAgICAgIG1vbnRocyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpLFxuICAgICAgICB3ZWVrcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd3JykpLFxuICAgICAgICB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpLFxuICAgICAgICBhID1cbiAgICAgICAgICAgIChzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAoc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAobWludXRlcyA8PSAxICYmIFsnbSddKSB8fFxuICAgICAgICAgICAgKG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdKSB8fFxuICAgICAgICAgICAgKGhvdXJzIDw9IDEgJiYgWydoJ10pIHx8XG4gICAgICAgICAgICAoaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSkgfHxcbiAgICAgICAgICAgIChkYXlzIDw9IDEgJiYgWydkJ10pIHx8XG4gICAgICAgICAgICAoZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10pO1xuXG4gICAgaWYgKHRocmVzaG9sZHMudyAhPSBudWxsKSB7XG4gICAgICAgIGEgPVxuICAgICAgICAgICAgYSB8fFxuICAgICAgICAgICAgKHdlZWtzIDw9IDEgJiYgWyd3J10pIHx8XG4gICAgICAgICAgICAod2Vla3MgPCB0aHJlc2hvbGRzLncgJiYgWyd3dycsIHdlZWtzXSk7XG4gICAgfVxuICAgIGEgPSBhIHx8XG4gICAgICAgIChtb250aHMgPD0gMSAmJiBbJ00nXSkgfHxcbiAgICAgICAgKG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSkgfHxcbiAgICAgICAgKHllYXJzIDw9IDEgJiYgWyd5J10pIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICBhWzRdID0gbG9jYWxlO1xuICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBhKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcocm91bmRpbmdGdW5jdGlvbikge1xuICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJvdW5kaW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICB9XG4gICAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBodW1hbml6ZShhcmdXaXRoU3VmZml4LCBhcmdUaHJlc2hvbGRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgd2l0aFN1ZmZpeCA9IGZhbHNlLFxuICAgICAgICB0aCA9IHRocmVzaG9sZHMsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgb3V0cHV0O1xuXG4gICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhcmdUaHJlc2hvbGRzID0gYXJnV2l0aFN1ZmZpeDtcbiAgICAgICAgYXJnV2l0aFN1ZmZpeCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFyZ1dpdGhTdWZmaXggPT09ICdib29sZWFuJykge1xuICAgICAgICB3aXRoU3VmZml4ID0gYXJnV2l0aFN1ZmZpeDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmdUaHJlc2hvbGRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aCA9IE9iamVjdC5hc3NpZ24oe30sIHRocmVzaG9sZHMsIGFyZ1RocmVzaG9sZHMpO1xuICAgICAgICBpZiAoYXJnVGhyZXNob2xkcy5zICE9IG51bGwgJiYgYXJnVGhyZXNob2xkcy5zcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aC5zcyA9IGFyZ1RocmVzaG9sZHMucyAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgdGgsIGxvY2FsZSk7XG5cbiAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxudmFyIGFicyQxID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICAgIHJldHVybiAoeCA+IDApIC0gKHggPCAwKSB8fCAreDtcbn1cblxuZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcbiAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxuICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBzZWNvbmRzID0gYWJzJDEodGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDAsXG4gICAgICAgIGRheXMgPSBhYnMkMSh0aGlzLl9kYXlzKSxcbiAgICAgICAgbW9udGhzID0gYWJzJDEodGhpcy5fbW9udGhzKSxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIHllYXJzLFxuICAgICAgICBzLFxuICAgICAgICB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCksXG4gICAgICAgIHRvdGFsU2lnbixcbiAgICAgICAgeW1TaWduLFxuICAgICAgICBkYXlzU2lnbixcbiAgICAgICAgaG1zU2lnbjtcblxuICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAvLyBidXQgbm90IG90aGVyIEpTIChnb29nLmRhdGUpXG4gICAgICAgIHJldHVybiAnUDBEJztcbiAgICB9XG5cbiAgICAvLyAzNjAwIHNlY29uZHMgLT4gNjAgbWludXRlcyAtPiAxIGhvdXJcbiAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgc2Vjb25kcyAlPSA2MDtcbiAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgcyA9IHNlY29uZHMgPyBzZWNvbmRzLnRvRml4ZWQoMykucmVwbGFjZSgvXFwuPzArJC8sICcnKSA6ICcnO1xuXG4gICAgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XG4gICAgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgIGRheXNTaWduID0gc2lnbih0aGlzLl9kYXlzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgdG90YWxTaWduICtcbiAgICAgICAgJ1AnICtcbiAgICAgICAgKHllYXJzID8geW1TaWduICsgeWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAobW9udGhzID8geW1TaWduICsgbW9udGhzICsgJ00nIDogJycpICtcbiAgICAgICAgKGRheXMgPyBkYXlzU2lnbiArIGRheXMgKyAnRCcgOiAnJykgK1xuICAgICAgICAoaG91cnMgfHwgbWludXRlcyB8fCBzZWNvbmRzID8gJ1QnIDogJycpICtcbiAgICAgICAgKGhvdXJzID8gaG1zU2lnbiArIGhvdXJzICsgJ0gnIDogJycpICtcbiAgICAgICAgKG1pbnV0ZXMgPyBobXNTaWduICsgbWludXRlcyArICdNJyA6ICcnKSArXG4gICAgICAgIChzZWNvbmRzID8gaG1zU2lnbiArIHMgKyAnUycgOiAnJylcbiAgICApO1xufVxuXG52YXIgcHJvdG8kMiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxucHJvdG8kMi5pc1ZhbGlkID0gaXNWYWxpZCQxO1xucHJvdG8kMi5hYnMgPSBhYnM7XG5wcm90byQyLmFkZCA9IGFkZCQxO1xucHJvdG8kMi5zdWJ0cmFjdCA9IHN1YnRyYWN0JDE7XG5wcm90byQyLmFzID0gYXM7XG5wcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG5wcm90byQyLmFzU2Vjb25kcyA9IGFzU2Vjb25kcztcbnByb3RvJDIuYXNNaW51dGVzID0gYXNNaW51dGVzO1xucHJvdG8kMi5hc0hvdXJzID0gYXNIb3VycztcbnByb3RvJDIuYXNEYXlzID0gYXNEYXlzO1xucHJvdG8kMi5hc1dlZWtzID0gYXNXZWVrcztcbnByb3RvJDIuYXNNb250aHMgPSBhc01vbnRocztcbnByb3RvJDIuYXNRdWFydGVycyA9IGFzUXVhcnRlcnM7XG5wcm90byQyLmFzWWVhcnMgPSBhc1llYXJzO1xucHJvdG8kMi52YWx1ZU9mID0gdmFsdWVPZiQxO1xucHJvdG8kMi5fYnViYmxlID0gYnViYmxlO1xucHJvdG8kMi5jbG9uZSA9IGNsb25lJDE7XG5wcm90byQyLmdldCA9IGdldCQyO1xucHJvdG8kMi5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XG5wcm90byQyLnNlY29uZHMgPSBzZWNvbmRzO1xucHJvdG8kMi5taW51dGVzID0gbWludXRlcztcbnByb3RvJDIuaG91cnMgPSBob3VycztcbnByb3RvJDIuZGF5cyA9IGRheXM7XG5wcm90byQyLndlZWtzID0gd2Vla3M7XG5wcm90byQyLm1vbnRocyA9IG1vbnRocztcbnByb3RvJDIueWVhcnMgPSB5ZWFycztcbnByb3RvJDIuaHVtYW5pemUgPSBodW1hbml6ZTtcbnByb3RvJDIudG9JU09TdHJpbmcgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi50b1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLnRvSlNPTiA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLmxvY2FsZSA9IGxvY2FsZTtcbnByb3RvJDIubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG5cbnByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoXG4gICAgJ3RvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpJyxcbiAgICB0b0lTT1N0cmluZyQxXG4pO1xucHJvdG8kMi5sYW5nID0gbGFuZztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG5hZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG5hZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcbn0pO1xuYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG59KTtcblxuLy8hIG1vbWVudC5qc1xuXG5ob29rcy52ZXJzaW9uID0gJzIuMzAuMSc7XG5cbnNldEhvb2tDYWxsYmFjayhjcmVhdGVMb2NhbCk7XG5cbmhvb2tzLmZuID0gcHJvdG87XG5ob29rcy5taW4gPSBtaW47XG5ob29rcy5tYXggPSBtYXg7XG5ob29rcy5ub3cgPSBub3c7XG5ob29rcy51dGMgPSBjcmVhdGVVVEM7XG5ob29rcy51bml4ID0gY3JlYXRlVW5peDtcbmhvb2tzLm1vbnRocyA9IGxpc3RNb250aHM7XG5ob29rcy5pc0RhdGUgPSBpc0RhdGU7XG5ob29rcy5sb2NhbGUgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XG5ob29rcy5pbnZhbGlkID0gY3JlYXRlSW52YWxpZDtcbmhvb2tzLmR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb247XG5ob29rcy5pc01vbWVudCA9IGlzTW9tZW50O1xuaG9va3Mud2Vla2RheXMgPSBsaXN0V2Vla2RheXM7XG5ob29rcy5wYXJzZVpvbmUgPSBjcmVhdGVJblpvbmU7XG5ob29rcy5sb2NhbGVEYXRhID0gZ2V0TG9jYWxlO1xuaG9va3MuaXNEdXJhdGlvbiA9IGlzRHVyYXRpb247XG5ob29rcy5tb250aHNTaG9ydCA9IGxpc3RNb250aHNTaG9ydDtcbmhvb2tzLndlZWtkYXlzTWluID0gbGlzdFdlZWtkYXlzTWluO1xuaG9va3MuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xuaG9va3MudXBkYXRlTG9jYWxlID0gdXBkYXRlTG9jYWxlO1xuaG9va3MubG9jYWxlcyA9IGxpc3RMb2NhbGVzO1xuaG9va3Mud2Vla2RheXNTaG9ydCA9IGxpc3RXZWVrZGF5c1Nob3J0O1xuaG9va3Mubm9ybWFsaXplVW5pdHMgPSBub3JtYWxpemVVbml0cztcbmhvb2tzLnJlbGF0aXZlVGltZVJvdW5kaW5nID0gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmc7XG5ob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG5ob29rcy5jYWxlbmRhckZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0O1xuaG9va3MucHJvdG90eXBlID0gcHJvdG87XG5cbi8vIGN1cnJlbnRseSBIVE1MNSBpbnB1dCB0eXBlIG9ubHkgc3VwcG9ydHMgMjQtaG91ciBmb3JtYXRzXG5ob29rcy5IVE1MNV9GTVQgPSB7XG4gICAgREFURVRJTUVfTE9DQUw6ICdZWVlZLU1NLUREVEhIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIC8+XG4gICAgREFURVRJTUVfTE9DQUxfU0VDT05EUzogJ1lZWVktTU0tRERUSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjFcIiAvPlxuICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBEQVRFOiAnWVlZWS1NTS1ERCcsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgVElNRTogJ0hIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgLz5cbiAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIxXCIgLz5cbiAgICBUSU1FX01TOiAnSEg6bW06c3MuU1NTJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBXRUVLOiAnR0dHRy1bV11XVycsIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgTU9OVEg6ICdZWVlZLU1NJywgLy8gPGlucHV0IHR5cGU9XCJtb250aFwiIC8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob29rcztcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB0eXBlIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcblxudHlwZSBTYWxlU2FtcGxlID0ge1xuICBkYXRlOiBNb21lbnQ7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59O1xuXG5jb25zdCByYW5kb20gPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0VG9ZZWFyTW9udGggPSAoZGF0ZTogTW9tZW50KSA9PiB7XG4gIHJldHVybiBkYXRlLmZvcm1hdCgnWVlZWS1NTScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2FsZXNPdmVyVGltZVNhbXBsZXMgPSAoe1xuICBuU2FtcGxlcyxcbiAgcGVyaW9kSW5Nb250aHMsXG4gIGNhdGVnb3JpZXMsXG59KSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBuU2FtcGxlcyB9LCAoKSA9PiAoe1xuICAgIGRhdGU6IG1vbWVudCgpLnN1YnRyYWN0KHJhbmRvbSgwLCBwZXJpb2RJbk1vbnRocyksICdtb250aHMnKSxcbiAgICBjYXRlZ29yeTogY2F0ZWdvcmllc1tyYW5kb20oMCwgY2F0ZWdvcmllcy5sZW5ndGgpXSxcbiAgICBwcmljZTogcmFuZG9tKDEsIDEwMSksXG4gIH0pKTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsU2FsZXNQZXJNb250aCA9IChzYWxlczogU2FsZVNhbXBsZVtdKSA9PiB7XG4gIGNvbnN0IHNhbGVzUGVyTW9udGhBY2N1bXVsYXRpb24gPSB7fTtcbiAgc2FsZXMuZm9yRWFjaCgoeyBkYXRlIH0pID0+IHtcbiAgICBjb25zdCB5ZWFyTW9udGggPSBmb3JtYXRUb1llYXJNb250aChkYXRlKTtcbiAgICBpZiAoc2FsZXNQZXJNb250aEFjY3VtdWxhdGlvblt5ZWFyTW9udGhdKSB7XG4gICAgICBzYWxlc1Blck1vbnRoQWNjdW11bGF0aW9uW3llYXJNb250aF0rKztcbiAgICB9IGVsc2Uge1xuICAgICAgc2FsZXNQZXJNb250aEFjY3VtdWxhdGlvblt5ZWFyTW9udGhdID0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoc2FsZXNQZXJNb250aEFjY3VtdWxhdGlvbikubWFwKFxuICAgIChbeWVhck1vbnRoLCBzYWxlc10pID0+ICh7XG4gICAgICB5ZWFyTW9udGgsXG4gICAgICBzYWxlcyxcbiAgICB9KSxcbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGl2aWRlciwgVGV4dCB9IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBCYXJDaGFydCB9IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgaHVic3BvdCB9IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlVG90YWxTYWxlc1Blck1vbnRoLFxuICBmb3JtYXRUb1llYXJNb250aCxcbiAgZ2VuZXJhdGVTYWxlc092ZXJUaW1lU2FtcGxlcyxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmh1YnNwb3QuZXh0ZW5kKCgpID0+IDxFeHRlbnNpb24gLz4pO1xuXG5jb25zdCBFeHRlbnNpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNhbGVzT3ZlclRpbWVTYW1wbGVzID0gZ2VuZXJhdGVTYWxlc092ZXJUaW1lU2FtcGxlcyh7XG4gICAgblNhbXBsZXM6IDEwMCxcbiAgICBwZXJpb2RJbk1vbnRoczogNixcbiAgICBjYXRlZ29yaWVzOiBbJ091dGRvb3IgYXBwYXJlbCcsICdGb290d2VhcicsICdDYW1waW5nIGdlYXInLCAnQWNjZXNzb3JpZXMnXSxcbiAgfSk7XG5cbiAgLy8gTGluZUNoYXJ0IHRvdGFsIHNhbGVzIGRhdGFcbiAgY29uc3QgdG90YWxTYWxlc1Blck1vbnRoQnJlYWtkb3duID1cbiAgICBjYWxjdWxhdGVUb3RhbFNhbGVzUGVyTW9udGgoc2FsZXNPdmVyVGltZVNhbXBsZXMpO1xuXG4gIC8vIEJhckNoYXJ0IHJldmVudWUgZGF0YVxuICBjb25zdCByZXZlbnVlUGVyTW9udGhCcmVha2Rvd24gPSBzYWxlc092ZXJUaW1lU2FtcGxlcy5tYXAoXG4gICAgKHsgZGF0ZSwgLi4uc2FsZXNJdGVtIH0pID0+ICh7XG4gICAgICAuLi5zYWxlc0l0ZW0sXG4gICAgICB5ZWFyTW9udGg6IGZvcm1hdFRvWWVhck1vbnRoKGRhdGUpLFxuICAgIH0pLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0PlxuICAgICAgICBUaGlzIGNhcmQgc2hvd3MgaG93IHRvIHVzZSBhIGxpbmUgYW5kIGJhciBjaGFydCB0byBkaXNwbGF5IGV4dGVybmFsXG4gICAgICAgIGRhdGEuIFRoZSBsaW5lIGNoYXJ0IHZpc3VhbGl6ZXMgYSBjdXN0b21lcuKAmXMgcHVyY2hhc2UgaGlzdG9yeSB0cmVuZHNcbiAgICAgICAgb3ZlciB0aW1lIGFuZCB0aGUgc3RhY2tlZCBiYXIgY2hhcnQgc2hvd3MgY3VzdG9tZXIgcmV2ZW51ZSBkYXRhIGJ5XG4gICAgICAgIGNhdGVnb3J5LlxuICAgICAgPC9UZXh0PlxuXG4gICAgICA8TGluZUNoYXJ0XG4gICAgICAgIGRhdGE9e3RvdGFsU2FsZXNQZXJNb250aEJyZWFrZG93bn1cbiAgICAgICAgYXhlcz17e1xuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIGZpZWxkOiAneWVhck1vbnRoJyxcbiAgICAgICAgICAgIGZpZWxkVHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGltZSAobW9udGhzKScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5OiB7XG4gICAgICAgICAgICBmaWVsZDogJ3NhbGVzJyxcbiAgICAgICAgICAgIGZpZWxkVHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYWJlbDogJ1RvdGFsIFNhbGVzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBvcHRpb25zPXt7IHRpdGxlOiAnUHVyY2hhc2UgaGlzdG9yeScgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIDxCYXJDaGFydFxuICAgICAgICBkYXRhPXtyZXZlbnVlUGVyTW9udGhCcmVha2Rvd259XG4gICAgICAgIGF4ZXM9e3tcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICBmaWVsZDogJ3llYXJNb250aCcsXG4gICAgICAgICAgICBmaWVsZFR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICBsYWJlbDogJ1RpbWUgKG1vbnRocyknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeTogeyBmaWVsZDogJ3ByaWNlJywgZmllbGRUeXBlOiAnbGluZWFyJywgbGFiZWw6ICdSZXZlbnVlICgkKScgfSxcbiAgICAgICAgICBvcHRpb25zOiB7IGdyb3VwRmllbGRCeUNvbG9yOiAnY2F0ZWdvcnknLCBzdGFja2luZzogdHJ1ZSB9LFxuICAgICAgICB9fVxuICAgICAgICBvcHRpb25zPXt7IHRpdGxlOiAnU2FsZXMgZGlzdHJpYnV0aW9uJywgc2hvd0xlZ2VuZDogdHJ1ZSB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQiLCJTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzIiwiZm9ybWF0IiwibG9jYWxlIiwidG8iLCJmcm9tIiwibm93Iiwic2lnbiIsInRva2VuIiwib3JkaW5hbCIsImkiLCJkaWZmIiwibG9jYWxlRGF0YSIsImhvdXJzIiwibWludXRlcyIsInRva2VucyIsIm1lcmlkaWVtIiwieWVhcnMiLCJtb250aHMiLCJ3ZWVrcyIsImRheXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwib2Zmc2V0IiwidGhyZXNob2xkcyIsIm1pbiIsIm1heCIsIm1vbWVudCIsInNhbGVzIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7O0FBQU8sV0FBUyxVQUFVLHlCQUF5QjtBQUMvQyxXQUFPLEtBQUssVUFBVSx1QkFBdUI7QUFBQSxFQUNqRDtBQUNPLFdBQVMsV0FBVyxNQUFNLFNBQVM7QUFDdEMsV0FBTyxLQUFLLFdBQVcsTUFBTSxPQUFPO0FBQUEsRUFDeEM7QUFDTyxXQUFTLE1BQU0sS0FBSyxTQUFTO0FBQ2hDLFdBQU8sS0FBSyxRQUFRLEtBQUssT0FBTztBQUFBLEVBQ3BDO0FBQ08sUUFBTSxVQUFVO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQ1orQyxRQUFBLDJCQUFDLE9BQU87QUFDUCxRQUFBLDJCQUFDLFVBQVU7QUFBQSxJQUN2RCxlQUFlLENBQUMsU0FBUztBQUFBLEVBQzdCLENBQUM7QUFDa0QsUUFB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QUFDLENBQUMsV0FBV0MsTUFBSyxPQUFPO0FBQUEsUUFDdkI7QUFBQSxRQUNBLE9BQUFBO0FBQUFBLE1BQUE7QUFBQSxJQUNGO0FBQUEsRUFFSjtBQ2xDQSxVQUFRLE9BQU8sTUFBTyxnQkFBQUMsT0FBQSxjQUFBLFdBQUEsSUFBVSxDQUFFO0FBRWxDLFFBQU0sWUFBWSxNQUFNO0FBQ3RCLFVBQU0sdUJBQXVCLDZCQUE2QjtBQUFBLE1BQ3hELFVBQVU7QUFBQSxNQUNWLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVksQ0FBQyxtQkFBbUIsWUFBWSxnQkFBZ0IsYUFBYTtBQUFBLElBQUEsQ0FDMUU7QUFHSyxVQUFBLDhCQUNKLDRCQUE0QixvQkFBb0I7QUFHbEQsVUFBTSwyQkFBMkIscUJBQXFCO0FBQUEsTUFDcEQsQ0FBQyxFQUFFLE1BQU0sR0FBRyxpQkFBaUI7QUFBQSxRQUMzQixHQUFHO0FBQUEsUUFDSCxXQUFXLGtCQUFrQixJQUFJO0FBQUEsTUFBQTtBQUFBLElBQ25DO0FBR0YsV0FFSSxnQkFBQUEsT0FBQSxjQUFBQSxPQUFBLFVBQUEsTUFBQSxnQkFBQUEsT0FBQSxjQUFDLE1BQUssTUFBQSx1TkFLTixHQUVBLGdCQUFBQSxPQUFBO0FBQUEsTUFBQztBQUFBLE1BQUE7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLEdBQUc7QUFBQSxZQUNELE9BQU87QUFBQSxZQUNQLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxHQUFHO0FBQUEsWUFDRCxPQUFPO0FBQUEsWUFDUCxXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVMsRUFBRSxPQUFPLG1CQUFtQjtBQUFBLE1BQUE7QUFBQSxJQUFBLEdBR3RDLGdCQUFBQSxPQUFBLGNBQUEsU0FBQSxJQUFRLEdBRVQsZ0JBQUFBLE9BQUE7QUFBQSxNQUFDO0FBQUEsTUFBQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osR0FBRztBQUFBLFlBQ0QsT0FBTztBQUFBLFlBQ1AsV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBLEdBQUcsRUFBRSxPQUFPLFNBQVMsV0FBVyxVQUFVLE9BQU8sY0FBYztBQUFBLFVBQy9ELFNBQVMsRUFBRSxtQkFBbUIsWUFBWSxVQUFVLEtBQUs7QUFBQSxRQUMzRDtBQUFBLFFBQ0EsU0FBUyxFQUFFLE9BQU8sc0JBQXNCLFlBQVksS0FBSztBQUFBLE1BQUE7QUFBQSxJQUFBLENBRTdEO0FBQUEsRUFFSjs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDNdfQ==
