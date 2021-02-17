(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    Bnag: function (t, e) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (t, e) {
      t.exports = function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      };
    },
    Ijbi: function (t, e, i) {
      var s = i("WkPL");
      t.exports = function (t) {
        if (Array.isArray(t)) return s(t);
      };
    },
    KTtF: function (t, e, i) {
      !(function (e, s) {
        "use strict";
        t.exports = (function (t) {
          var e = { version: "2.2.0", plot: {}, aggregateMethod: {} };
          return (
            (e.axis = function (i, s, a, r, n, o) {
              (this.chart = i),
                (this.position = s),
                (this.categoryFields = null == n ? a : [].concat(n)),
                (this.measure = r),
                (this.timeField = n),
                (this.floatingBarWidth = 5),
                (this.hidden = !1),
                (this.showPercent = !1),
                (this.colors = null),
                (this.overrideMin = null),
                (this.overrideMax = null),
                (this.shapes = null),
                (this.showGridlines = null),
                (this.gridlineShapes = null),
                (this.titleShape = null),
                (this.dateParseFormat = null),
                (this.tickFormat = null),
                (this.timePeriod = null),
                (this.timeInterval = 1),
                (this.useLog = !1),
                (this.logBase = 10),
                (this.title = void 0),
                (this.clamp = !0),
                (this.ticks = null),
                (this.fontSize = "10px"),
                (this.fontFamily = "sans-serif"),
                (this.autoRotateLabel = null == o || o),
                (this._slaves = []),
                (this._scale = null),
                (this._min = 0),
                (this._max = 0),
                (this._previousOrigin = null),
                (this._origin = null),
                (this._orderRules = []),
                (this._groupOrderRules = []),
                (this._draw = null),
                (this._getAxisData = function () {
                  var t,
                    e,
                    i = [],
                    s = !1;
                  if (this.chart && this.chart.series) {
                    for (t = 0; t < this.chart.series.length; t += 1)
                      (e = this.chart.series[t])[this.position] === this &&
                        (e.data && e.data.length > 0
                          ? (i = i.concat(e.data))
                          : (s = !0));
                    s && this.chart.data && (i = i.concat(this.chart.data));
                  }
                  return i;
                }),
                (this._getFontSize = function () {
                  return this.fontSize &&
                    "auto" !== this.fontSize.toString().toLowerCase()
                    ? isNaN(this.fontSize)
                      ? this.fontSize
                      : this.fontSize + "px"
                    : (this.chart._heightPixels() / 35 > 10
                        ? this.chart._heightPixels() / 35
                        : 10) + "px";
                }),
                (this._getFormat = function () {
                  var e, i, s, a, r, n, o;
                  return (
                    null !== this.tickFormat && void 0 !== this.tickFormat
                      ? (e = this._hasTimeField()
                          ? t.timeFormat(this.tickFormat)
                          : t.format(this.tickFormat))
                      : this.showPercent
                      ? (e = t.format(".0%"))
                      : this.useLog && null !== this.measure
                      ? (e = function (e) {
                          var i = Math.floor(Math.abs(e), 0).toString().length,
                            s = Math.min(Math.floor((i - 1) / 3), 4),
                            a = "kmBT".substring(s - 1, s),
                            r =
                              "0" ===
                              Math.round((e / Math.pow(1e3, s)) * 10)
                                .toString()
                                .slice(-1)
                                ? 0
                                : 1;
                          return 0 === e
                            ? 0
                            : t.format(",." + r + "f")(e / Math.pow(1e3, s)) +
                                a;
                        })
                      : null !== this.measure
                      ? ((i = Math.floor(Math.abs(this._max), 0).toString()),
                        (s = Math.floor(Math.abs(this._min), 0).toString()),
                        (a = Math.max(s.length, i.length)) > 3
                          ? ((r = Math.min(Math.floor((a - 1) / 3), 4)),
                            (n = "kmBT".substring(r - 1, r)),
                            (o = a - 3 * r <= 1 ? 1 : 0),
                            (e = function (e) {
                              return 0 === e
                                ? 0
                                : t.format(",." + o + "f")(
                                    e / Math.pow(1e3, r)
                                  ) + n;
                            }))
                          : ((o = Math.max(
                              -(this._tick_step
                                ? Math.floor(
                                    Math.log(this._tick_step) / Math.LN10
                                  )
                                : 0),
                              0
                            )),
                            (e = t.format(",." + o + "f"))))
                      : (e = function (t) {
                          return t;
                        }),
                    e
                  );
                }),
                (this._getTimePeriod = function () {
                  var e = this.timePeriod,
                    i = this._max - this._min;
                  return (
                    this._hasTimeField() &&
                      !this.timePeriod &&
                      (e =
                        i / 1e3 <= 30
                          ? t.timeSecond
                          : i / 6e4 <= 30
                          ? t.timeMinute
                          : i / 36e5 <= 30
                          ? t.timeHour
                          : i / 864e5 <= 30
                          ? t.timeHay
                          : i / 6048e5 <= 30
                          ? t.timeWeek
                          : i / 26298e5 <= 30
                          ? t.timeMonth
                          : t.timeYear),
                    e
                  );
                }),
                (this._getTooltipText = function (e, i) {
                  if (this._hasTimeField())
                    i[this.position + "Field"][0] &&
                      e.push(
                        this.timeField +
                          ": " +
                          this._getFormat()(i[this.position + "Field"][0])
                      );
                  else if (this._hasCategories())
                    this.categoryFields.forEach(function (t, s) {
                      null != t &&
                        i[this.position + "Field"][s] &&
                        e.push(
                          t +
                            (i[this.position + "Field"][s] !== t
                              ? ": " + i[this.position + "Field"][s]
                              : "")
                        );
                    }, this);
                  else if (this._hasMeasure())
                    switch (this.position) {
                      case "x":
                        e.push(
                          this.measure + ": " + this._getFormat()(i.width)
                        );
                        break;
                      case "y":
                        e.push(
                          this.measure + ": " + this._getFormat()(i.height)
                        );
                        break;
                      case "p":
                        e.push(
                          this.measure +
                            ": " +
                            this._getFormat()(i.angle) +
                            " (" +
                            t.format(".0%")(i.piePct) +
                            ")"
                        );
                        break;
                      default:
                        e.push(
                          this.measure +
                            ": " +
                            this._getFormat()(i[this.position + "Value"])
                        );
                    }
                }),
                (this._getTopMaster = function () {
                  var t = this;
                  return (
                    null !== this.master &&
                      void 0 !== this.master &&
                      (t = this.master._getTopMaster()),
                    t
                  );
                }),
                (this._hasCategories = function () {
                  return (
                    null !== this.categoryFields &&
                    void 0 !== this.categoryFields &&
                    this.categoryFields.length > 0
                  );
                }),
                (this._hasMeasure = function () {
                  return null !== this.measure && void 0 !== this.measure;
                }),
                (this._hasTimeField = function () {
                  return null !== this.timeField && void 0 !== this.timeField;
                }),
                (this._parseDate = function (e) {
                  return null === this.dateParseFormat ||
                    void 0 === this.dateParseFormat
                    ? isNaN(e)
                      ? Date.parse(e)
                      : new Date(e)
                    : t.timeParse(this.dateParseFormat)(e);
                }),
                (this._update = function (i) {
                  var s,
                    a,
                    r,
                    n,
                    o = [],
                    l = this.ticks || 10,
                    h = function (t, i, s) {
                      var a,
                        r,
                        n = t.categoryFields[0],
                        o = t._getAxisData(),
                        l = n,
                        h = !1,
                        c = !0,
                        u = null;
                      for (a = 0; a < o.length; a += 1)
                        if (null != (u = t._parseDate(o[a][n])) && isNaN(u)) {
                          c = !1;
                          break;
                        }
                      return (
                        c ||
                          t.chart.series.forEach(function (e) {
                            e[i] === t &&
                              e[s]._hasMeasure() &&
                              ((l = e[s].measure), (h = !0));
                          }, this),
                        (r = t._orderRules.concat({ ordering: l, desc: h })),
                        e._getOrderedList(o, n, r)
                      );
                    };
                  if (
                    ((this._min =
                      this.showPercent && this._min < -1 ? -1 : this._min),
                    (this._max =
                      this.showPercent && this._max > 1 ? 1 : this._max),
                    (this._min =
                      null !== this.overrideMin ? this.overrideMin : this._min),
                    (this._max =
                      null !== this.overrideMax ? this.overrideMax : this._max),
                    "x" !== this.position || (null !== this._scale && !i))
                  ) {
                    if ("y" !== this.position || (null !== this._scale && !i))
                      this.position.length > 0 &&
                      "z" === this.position[0] &&
                      null === this._scale
                        ? this.useLog
                          ? (this._scale = t
                              .scaleLog()
                              .range([
                                this.chart._heightPixels() / 300,
                                this.chart._heightPixels() / 10,
                              ])
                              .domain([
                                0 === this._min
                                  ? Math.pow(this.logBase, -1)
                                  : this._min,
                                0 === this._max
                                  ? -1 * Math.pow(this.logBase, -1)
                                  : this._max,
                              ])
                              .clamp(this.clamp)
                              .base(this.logBase))
                          : (this._scale = t
                              .scaleLinear()
                              .range([1, this.chart._heightPixels() / 10])
                              .domain([this._min, this._max])
                              .clamp(this.clamp))
                        : this.position.length > 0 &&
                          "p" === this.position[0] &&
                          null === this._scale
                        ? this.useLog
                          ? (this._scale = t
                              .scaleLog()
                              .range([0, 360])
                              .domain([
                                0 === this._min
                                  ? Math.pow(this.logBase, -1)
                                  : this._min,
                                0 === this._max
                                  ? -1 * Math.pow(this.logBase, -1)
                                  : this._max,
                              ])
                              .clamp(this.clamp)
                              .base(this.logBase))
                          : (this._scale = t
                              .scaleLinear()
                              .range([0, 360])
                              .domain([this._min, this._max])
                              .clamp(this.clamp))
                        : this.position.length > 0 &&
                          "c" === this.position[0] &&
                          null === this._scale &&
                          (this._scale = t
                            .scaleLinear()
                            .range([
                              0,
                              null === this.colors || 1 === this.colors.length
                                ? 1
                                : this.colors.length - 1,
                            ])
                            .domain([this._min, this._max])
                            .clamp(this.clamp));
                    else if (
                      (this._hasTimeField()
                        ? (this._scale = t
                            .scaleTime()
                            .range([
                              this.chart._yPixels() +
                                this.chart._heightPixels(),
                              this.chart._yPixels(),
                            ])
                            .domain([this._min, this._max])
                            .clamp(this.clamp))
                        : this.useLog
                        ? (this._scale = t
                            .scaleLog()
                            .range([
                              this.chart._yPixels() +
                                this.chart._heightPixels(),
                              this.chart._yPixels(),
                            ])
                            .domain([
                              0 === this._min
                                ? Math.pow(this.logBase, -1)
                                : this._min,
                              0 === this._max
                                ? -1 * Math.pow(this.logBase, -1)
                                : this._max,
                            ])
                            .clamp(this.clamp)
                            .base(this.logBase)
                            .nice())
                        : null === this.measure || void 0 === this.measure
                        ? ((o = h(this, "y", "x")),
                          null !== this._slaves &&
                            void 0 !== this._slaves &&
                            this._slaves.forEach(function (t) {
                              o = o.concat(h(t, "y", "x"));
                            }, this),
                          (this._scale = t
                            .scalePoint()
                            .range([
                              this.chart._yPixels() +
                                this.chart._heightPixels(),
                              this.chart._yPixels(),
                            ])
                            .domain(o.concat([""]))))
                        : (this._scale = t
                            .scaleLinear()
                            .range([
                              this.chart._yPixels() +
                                this.chart._heightPixels(),
                              this.chart._yPixels(),
                            ])
                            .domain([this._min, this._max])
                            .clamp(this.clamp)
                            .nice()),
                      !this.hidden)
                    )
                      switch (this.chart._axisIndex(this, "y")) {
                        case 0:
                          (this._draw = t.axisLeft().scale(this._scale)),
                            this.ticks && this._draw.ticks(l);
                          break;
                        case 1:
                          (this._draw = t.axisRight().scale(this._scale)),
                            this.ticks && this._draw.ticks(l);
                      }
                  } else if (
                    (this._hasTimeField()
                      ? (this._scale = t
                          .scaleTime()
                          .range([
                            this.chart._xPixels(),
                            this.chart._xPixels() + this.chart._widthPixels(),
                          ])
                          .domain([this._min, this._max])
                          .clamp(this.clamp))
                      : this.useLog
                      ? (this._scale = t
                          .scaleLog()
                          .range([
                            this.chart._xPixels(),
                            this.chart._xPixels() + this.chart._widthPixels(),
                          ])
                          .domain([
                            0 === this._min
                              ? Math.pow(this.logBase, -1)
                              : this._min,
                            0 === this._max
                              ? -1 * Math.pow(this.logBase, -1)
                              : this._max,
                          ])
                          .clamp(this.clamp)
                          .base(this.logBase)
                          .nice())
                      : null === this.measure || void 0 === this.measure
                      ? ((o = h(this, "x", "y")),
                        null !== this._slaves &&
                          void 0 !== this._slaves &&
                          this._slaves.forEach(function (t) {
                            o = o.concat(h(t, "x", "y"));
                          }, this),
                        (this._scale = t
                          .scalePoint()
                          .range([
                            this.chart._xPixels(),
                            this.chart._xPixels() + this.chart._widthPixels(),
                          ])
                          .domain(o.concat([""]))))
                      : (this._scale = t
                          .scaleLinear()
                          .range([
                            this.chart._xPixels(),
                            this.chart._xPixels() + this.chart._widthPixels(),
                          ])
                          .domain([this._min, this._max])
                          .clamp(this.clamp)
                          .nice()),
                    !this.hidden)
                  )
                    switch (this.chart._axisIndex(this, "x")) {
                      case 0:
                        (this._draw = t.axisBottom().scale(this._scale)),
                          this.ticks && this._draw.ticks(l);
                        break;
                      case 1:
                        (this._draw = t.axisTop().scale(this._scale)),
                          this.ticks && this._draw.ticks(l);
                    }
                  return (
                    null !== this._slaves &&
                      void 0 !== this._slaves &&
                      this._slaves.length > 0 &&
                      this._slaves.forEach(function (t) {
                        t._scale = this._scale;
                      }, this),
                    (null != i && !1 !== i) ||
                      this._hasTimeField() ||
                      null === this._scale ||
                      null === this._scale.ticks ||
                      void 0 === this._scale.ticks ||
                      !(this._scale.ticks(l).length > 0) ||
                      ("x" !== this.position && "y" !== this.position) ||
                      ((a = (s = this._scale.ticks(l))[1] - s[0]),
                      (r = ((this._max - this._min) % a).toFixed(0)),
                      (this._tick_step = a),
                      0 !== r &&
                        ((this._max = Math.ceil(this._max / a) * a),
                        (this._min = Math.floor(this._min / a) * a),
                        this._update(!0))),
                    (n =
                      null != o && o.length > 0
                        ? this._scale.copy()(o[0])
                        : this._min > 0
                        ? this._scale.copy()(this._min)
                        : this._max < 0
                        ? this._scale.copy()(this._max)
                        : this._scale.copy()(0)),
                    this._origin !== n &&
                      ((this._previousOrigin =
                        null === this._origin ? n : this._origin),
                      (this._origin = n)),
                    this
                  );
                }),
                (this.addGroupOrderRule = function (t, e) {
                  this._groupOrderRules.push({ ordering: t, desc: e });
                }),
                (this.addOrderRule = function (t, e) {
                  this._orderRules.push({ ordering: t, desc: e });
                });
            }),
            (e.chart = function (i, s) {
              (this.svg = i),
                (this.x = "10%"),
                (this.y = "10%"),
                (this.width = "80%"),
                (this.height = "80%"),
                (this.data = s),
                (this.noFormats = !1),
                (this.axes = []),
                (this.series = []),
                (this.legends = []),
                (this.storyboard = null),
                (this.titleShape = null),
                (this.shapes = null),
                (this.ease = t.easeCubicInOut),
                (this.staggerDraw = !1),
                (this.transition = {}),
                (this._group = i.append("g")),
                this._group.attr("class", "dimple-chart"),
                (this._gridlines_group = this._group.insert("g")),
                this._gridlines_group.attr("class", "dimple-gridlines-group"),
                (this._axis_group = this._group.insert("g")),
                this._axis_group.attr("class", "dimple-axis-group"),
                (this._tooltipGroup = null),
                (this._assignedColors = {}),
                (this._assignedClasses = {}),
                (this._nextColor = 0),
                (this._nextClass = 0),
                (this._axisIndex = function (t, e) {
                  var i = 0,
                    s = 0,
                    a = -1;
                  for (i = 0; i < this.axes.length; i += 1) {
                    if (this.axes[i] === t) {
                      a = s;
                      break;
                    }
                    (null != e && e[0] !== this.axes[i].position[0]) ||
                      (s += 1);
                  }
                  return a;
                }),
                (this._getAllData = function () {
                  var t = [];
                  return (
                    null !== this.data &&
                      void 0 !== this.data &&
                      this.data.length > 0 &&
                      (t = t.concat(this.data)),
                    null !== this.series &&
                      void 0 !== this.series &&
                      this.series.length > 0 &&
                      this.series.forEach(function (e) {
                        null !== e.data &&
                          void 0 !== e.data &&
                          e.data.length > 0 &&
                          (t = t.concat(e.data));
                      }),
                    t
                  );
                }),
                (this._getData = function (i, s, a, r, n, o, l, h, c, u) {
                  var d,
                    p,
                    g = [],
                    _ = function (t, e) {
                      var i = [];
                      return (
                        null !== t &&
                          (t._hasTimeField()
                            ? i.push(t._parseDate(e[t.timeField]))
                            : t._hasCategories() &&
                              t.categoryFields.forEach(function (t) {
                                i.push(e[t]);
                              }, this)),
                        i
                      );
                    },
                    f = { x: !1, y: !1, z: !1, p: !1, c: !1 },
                    x = { x: [], y: [] },
                    y = { x: [], y: [], z: [], p: [] },
                    m = { min: null, max: null },
                    v = { x: [], y: [], z: [], p: [] },
                    F = [],
                    k = {},
                    b = { x: 0, y: 0, z: 0, p: 0 },
                    w = "",
                    C = [],
                    P = [],
                    B = [],
                    S = "",
                    M = [],
                    L = "",
                    T = [],
                    O = "",
                    z = [],
                    A = [],
                    V = i,
                    D = [];
                  for (p in (this.storyboard &&
                    this.storyboard.categoryFields.length > 0 &&
                    ((w = this.storyboard.categoryFields[0]),
                    (C = e._getOrderedList(V, w, this.storyboard._orderRules))),
                  o &&
                    o._hasCategories() &&
                    o._hasMeasure() &&
                    ((S = o.categoryFields[0]),
                    (M = e._getOrderedList(
                      V,
                      S,
                      o._orderRules.concat([{ ordering: o.measure, desc: !0 }])
                    ))),
                  l &&
                    l._hasCategories() &&
                    l._hasMeasure() &&
                    ((L = l.categoryFields[0]),
                    (T = e._getOrderedList(
                      V,
                      L,
                      l._orderRules.concat([{ ordering: l.measure, desc: !0 }])
                    ))),
                  c &&
                    c._hasCategories() &&
                    c._hasMeasure() &&
                    ((O = c.categoryFields[0]),
                    (z = e._getOrderedList(
                      V,
                      O,
                      c._orderRules.concat([{ ordering: c.measure, desc: !0 }])
                    ))),
                  V.length > 0 &&
                    s &&
                    s.length > 0 &&
                    ((A = [].concat(r)),
                    (P = []),
                    s.forEach(function (t) {
                      void 0 !== V[0][t] && P.push(t);
                    }, this),
                    c && c._hasMeasure()
                      ? A.push({ ordering: c.measure, desc: !0 })
                      : u && u._hasMeasure()
                      ? A.push({ ordering: u.measure, desc: !0 })
                      : h && h._hasMeasure()
                      ? A.push({ ordering: h.measure, desc: !0 })
                      : o && o._hasMeasure()
                      ? A.push({ ordering: o.measure, desc: !0 })
                      : l &&
                        l._hasMeasure() &&
                        A.push({ ordering: l.measure, desc: !0 }),
                    (B = e._getOrderedList(V, P, A))),
                  V.sort(function (t, e) {
                    var i,
                      s,
                      a,
                      r,
                      n,
                      o,
                      l = 0;
                    if (
                      ("" !== w && (l = C.indexOf(t[w]) - C.indexOf(e[w])),
                      "" !== S &&
                        0 === l &&
                        (l = M.indexOf(t[S]) - M.indexOf(e[S])),
                      "" !== L &&
                        0 === l &&
                        (l = T.indexOf(t[L]) - T.indexOf(e[L])),
                      "" !== O &&
                        0 === l &&
                        (l = z.indexOf(t[O]) - T.indexOf(e[O])),
                      P && P.length > 0 && 0 === l)
                    )
                      for (
                        i = [].concat(P), l = 0, a = 0;
                        a < B.length;
                        a += 1
                      ) {
                        for (
                          s = [].concat(B[a]), n = !0, o = !0, r = 0;
                          r < i.length;
                          r += 1
                        )
                          (n = n && t[i[r]] === s[r]),
                            (o = o && e[i[r]] === s[r]);
                        if (n || o) {
                          l = n && o ? 0 : n ? -1 : 1;
                          break;
                        }
                      }
                    return l;
                  }),
                  V.forEach(function (t) {
                    var e,
                      i,
                      r,
                      n,
                      d,
                      p = -1,
                      x = _(o, t),
                      y = _(l, t),
                      m = _(h, t),
                      v = _(c, t),
                      F = [];
                    if (s && 0 !== s.length)
                      for (r = 0; r < s.length; r += 1)
                        void 0 === t[s[r]] ? F.push(s[r]) : F.push(t[s[r]]);
                    else F = ["All"];
                    for (
                      e =
                        F.join("/") +
                        "_" +
                        x.join("/") +
                        "_" +
                        y.join("/") +
                        "_" +
                        v.join("/") +
                        "_" +
                        m.join("/"),
                        i = 0;
                      i < g.length;
                      i += 1
                    )
                      if (g[i].key === e) {
                        p = i;
                        break;
                      }
                    -1 === p &&
                      ((n = {
                        key: e,
                        aggField: F,
                        xField: x,
                        xValue: null,
                        xCount: 0,
                        yField: y,
                        yValue: null,
                        yCount: 0,
                        pField: v,
                        pValue: null,
                        pCount: 0,
                        zField: m,
                        zValue: null,
                        zCount: 0,
                        cValue: 0,
                        cCount: 0,
                        x: 0,
                        y: 0,
                        xOffset: 0,
                        yOffset: 0,
                        width: 0,
                        height: 0,
                        cx: 0,
                        cy: 0,
                        xBound: 0,
                        yBound: 0,
                        xValueList: [],
                        yValueList: [],
                        zValueList: [],
                        pValueList: [],
                        cValueList: [],
                        fill: {},
                        stroke: {},
                      }),
                      g.push(n),
                      (p = g.length - 1)),
                      (d = function (e, i) {
                        var s,
                          r,
                          n = !0,
                          o = { value: 0, count: 1 },
                          l = { value: 0, count: 1 },
                          h = "";
                        null !== i &&
                          ((s = i.getFrameValue()),
                          i.categoryFields.forEach(function (e, i) {
                            i > 0 && (h += "/"), (h += t[e]), (n = h === s);
                          }, this)),
                          null != e &&
                            n &&
                            ((r = g[p]),
                            e._hasMeasure() &&
                              null !== t[e.measure] &&
                              void 0 !== t[e.measure] &&
                              (-1 ===
                                r[e.position + "ValueList"].indexOf(
                                  t[e.measure]
                                ) &&
                                r[e.position + "ValueList"].push(t[e.measure]),
                              isNaN(parseFloat(t[e.measure])) &&
                                (f[e.position] = !0),
                              (o.value = r[e.position + "Value"]),
                              (o.count = r[e.position + "Count"]),
                              (l.value = t[e.measure]),
                              (r[e.position + "Value"] = a(o, l)),
                              (r[e.position + "Count"] += 1)));
                      })(o, this.storyboard),
                      d(l, this.storyboard),
                      d(h, this.storyboard),
                      d(c, this.storyboard),
                      d(u, this.storyboard);
                  }, this),
                  o &&
                    o._hasCategories() &&
                    o.categoryFields.length > 1 &&
                    void 0 !== x.x &&
                    ((D = []),
                    l._hasMeasure() &&
                      D.push({ ordering: l.measure, desc: !0 }),
                    (x.x = e._getOrderedList(
                      V,
                      o.categoryFields[1],
                      o._groupOrderRules.concat(D)
                    ))),
                  l &&
                    l._hasCategories() &&
                    l.categoryFields.length > 1 &&
                    void 0 !== x.y &&
                    ((D = []),
                    o._hasMeasure() &&
                      D.push({ ordering: o.measure, desc: !0 }),
                    (x.y = e._getOrderedList(
                      V,
                      l.categoryFields[1],
                      l._groupOrderRules.concat(D)
                    )),
                    x.y.reverse()),
                  g.forEach(function (t) {
                    null !== o &&
                      (!0 === f.x && (t.xValue = t.xValueList.length),
                      (d =
                        o._hasMeasure() && o._hasCategories()
                          ? (y.x[t.xField.join("/")] || 0) +
                            (o._hasMeasure() ? Math.abs(t.xValue) : 0)
                          : (y.x[t.xField.join("/")] || 0) +
                            (l._hasMeasure() ? Math.abs(t.yValue) : 0)),
                      (y.x[t.xField.join("/")] = d)),
                      null !== l &&
                        (!0 === f.y && (t.yValue = t.yValueList.length),
                        (d =
                          l._hasMeasure() && l._hasCategories()
                            ? (y.y[t.yField.join("/")] || 0) +
                              (l._hasMeasure() ? Math.abs(t.yValue) : 0)
                            : (y.y[t.yField.join("/")] || 0) +
                              (o._hasMeasure() ? Math.abs(t.xValue) : 0)),
                        (y.y[t.yField.join("/")] = d)),
                      null !== c &&
                        (!0 === f.p && (t.pValue = t.pValueList.length),
                        (d =
                          (y.p[t.pField.join("/")] || 0) +
                          (c._hasMeasure() ? Math.abs(t.pValue) : 0)),
                        (y.p[t.pField.join("/")] = d)),
                      null !== h &&
                        (!0 === f.z && (t.zValue = t.zValueList.length),
                        (d =
                          (y.z[t.zField.join("/")] || 0) +
                          (h._hasMeasure() ? Math.abs(t.zValue) : 0)),
                        (y.z[t.zField.join("/")] = d)),
                      null !== u &&
                        ((null === m.min || t.cValue < m.min) &&
                          (m.min = t.cValue),
                        (null === m.max || t.cValue > m.max) &&
                          (m.max = t.cValue));
                  }, this),
                  y.x))
                    y.x.hasOwnProperty(p) && (b.x += y.x[p]);
                  for (p in y.y) y.y.hasOwnProperty(p) && (b.y += y.y[p]);
                  for (p in y.p) y.p.hasOwnProperty(p) && (b.p += y.p[p]);
                  for (p in y.z) y.z.hasOwnProperty(p) && (b.z += y.z[p]);
                  return (
                    g.forEach(function (e) {
                      var i,
                        s,
                        a,
                        r,
                        d = function (t, i, s) {
                          var a, r, o, l, h;
                          null != t &&
                            ((l = t.position),
                            t._hasCategories()
                              ? t._hasMeasure()
                                ? ((a = e[t.position + "Field"].join("/")),
                                  (r = t.showPercent
                                    ? y[t.position][a] / b[t.position]
                                    : y[t.position][a]),
                                  -1 === F.indexOf(a) &&
                                    ((k[a] =
                                      r +
                                      (F.length > 0 ? k[F[F.length - 1]] : 0)),
                                    F.push(a)),
                                  (o = e[l + "Bound"] = e["c" + l] =
                                    ("x" !== l && "y" !== l) || !n ? r : k[a]),
                                  (e[s] = r),
                                  (e[l] =
                                    o -
                                    (("x" === l && r >= 0) ||
                                    ("y" === l && r <= 0)
                                      ? r
                                      : 0)))
                                : ((e[l] = e["c" + l] = e[l + "Field"][0]),
                                  (e[s] = 1),
                                  void 0 !== x[l] &&
                                    null !== x[l] &&
                                    x[l].length >= 2 &&
                                    ((e[l + "Offset"] = x[l].indexOf(
                                      e[l + "Field"][1]
                                    )),
                                    (e[s] = 1 / x[l].length)))
                              : ((r = t.showPercent
                                  ? e[l + "Value"] /
                                    y[i][e[i + "Field"].join("/")]
                                  : e[l + "Value"]),
                                (a =
                                  e[i + "Field"].join("/") +
                                  (e[l + "Value"] >= 0)),
                                (h = v[l][a] =
                                  (null === v[l][a] ||
                                  void 0 === v[l][a] ||
                                  "z" === l ||
                                  "p" === l
                                    ? 0
                                    : v[l][a]) + r),
                                (o = e[l + "Bound"] = e["c" + l] =
                                  ("x" !== l && "y" !== l) || !n ? r : h),
                                (e[s] = r),
                                (e[l] =
                                  o -
                                  (("x" === l && r >= 0) ||
                                  ("y" === l && r <= 0)
                                    ? r
                                    : 0))));
                        };
                      d(o, "y", "width"),
                        d(l, "x", "height"),
                        d(h, "z", "r"),
                        d(c, "p", "angle"),
                        null !== u &&
                          null !== m.min &&
                          null !== m.max &&
                          (m.min === m.max && ((m.min -= 0.5), (m.max += 0.5)),
                          (m.min = u.overrideMin || m.min),
                          (m.max = u.overrideMax || m.max),
                          (e.cValue =
                            e.cValue > m.max
                              ? m.max
                              : e.cValue < m.min
                              ? m.min
                              : e.cValue),
                          (r =
                            (a = t
                              .scaleLinear()
                              .range([
                                0,
                                null === u.colors || 1 === u.colors.length
                                  ? 1
                                  : u.colors.length - 1,
                              ])
                              .domain([m.min, m.max])(e.cValue)) -
                            Math.floor(a)),
                          e.cValue === m.max && (r = 1),
                          u.colors && 1 === u.colors.length
                            ? ((i = t.rgb(u.colors[0])),
                              (s = t.rgb(
                                this.getColor(e.aggField.slice(-1)[0]).fill
                              )))
                            : u.colors && u.colors.length > 1
                            ? ((i = t.rgb(u.colors[Math.floor(a)])),
                              (s = t.rgb(u.colors[Math.ceil(a)])))
                            : ((i = t.rgb("white")),
                              (s = t.rgb(
                                this.getColor(e.aggField.slice(-1)[0]).fill
                              ))),
                          (i.r = Math.floor(i.r + (s.r - i.r) * r)),
                          (i.g = Math.floor(i.g + (s.g - i.g) * r)),
                          (i.b = Math.floor(i.b + (s.b - i.b) * r)),
                          (e.fill = i.toString()),
                          (e.stroke = i.darker(0.5).toString()));
                    }, this),
                    g
                  );
                }),
                (this._getDelay = function (t, i, s) {
                  return function (a) {
                    var r = 0;
                    return (
                      s &&
                        i.staggerDraw &&
                        (s.x._hasCategories()
                          ? (r =
                              (e._helpers.cx(a, i, s) / i._widthPixels()) * t)
                          : s.y._hasCategories() &&
                            (r =
                              (1 - e._helpers.cy(a, i, s) / i._heightPixels()) *
                              t)),
                      r
                    );
                  };
                }),
                (this._getSeriesData = function () {
                  null !== this.series &&
                    void 0 !== this.series &&
                    this.series.forEach(function (t) {
                      var e,
                        i,
                        s,
                        a,
                        r,
                        n = t.data || this.data || [],
                        o = [].concat(t.categoryFields || "All"),
                        l = this._getData(
                          n,
                          o,
                          t.aggregate,
                          t._orderRules,
                          t._isStacked(),
                          t.x,
                          t.y,
                          t.z,
                          t.p,
                          t.c
                        ),
                        h = [],
                        c = {},
                        u = t.startAngle * (Math.PI / 180) || 0,
                        d = (t.endAngle || 360) * (Math.PI / 180);
                      if ((u > d && (u -= 2 * Math.PI), t.p && o.length > 0)) {
                        if (t.x && t.y) {
                          for (
                            o.pop(),
                              h = this._getData(
                                n,
                                ["__dimple_placeholder__"].concat(o),
                                t.aggregate,
                                t._orderRules,
                                t._isStacked(),
                                t.x,
                                t.y,
                                t.z,
                                t.p,
                                t.c
                              ),
                              e = 0;
                            e < l.length;
                            e += 1
                          )
                            for (
                              (s = ["__dimple_placeholder__"].concat(
                                l[e].aggField
                              )).pop(),
                                t.x &&
                                  t.x._hasCategories() &&
                                  (s = s.concat(l[e].xField)),
                                t.y &&
                                  t.y._hasCategories() &&
                                  (s = s.concat(l[e].yField)),
                                a = s.join("|"),
                                i = 0;
                              i < h.length;
                              i += 1
                            )
                              if (
                                ((r = [].concat(h[i].aggField)),
                                t.x &&
                                  t.x._hasCategories() &&
                                  (r = r.concat(h[i].xField)),
                                t.y &&
                                  t.y._hasCategories() &&
                                  (r = r.concat(h[i].yField)),
                                a === r.join("|"))
                              ) {
                                (l[e].xField = h[i].xField),
                                  (l[e].xValue = h[i].xValue),
                                  (l[e].xCount = h[i].xCount),
                                  (l[e].yField = h[i].yField),
                                  (l[e].yValue = h[i].yValue),
                                  (l[e].yCount = h[i].yCount),
                                  (l[e].zField = h[i].zField),
                                  (l[e].zValue = h[i].zValue),
                                  (l[e].zCount = h[i].zCount),
                                  (l[e].x = h[i].x),
                                  (l[e].y = h[i].y),
                                  (l[e].r = h[i].r),
                                  (l[e].xOffset = h[i].xOffset),
                                  (l[e].yOffset = h[i].yOffset),
                                  (l[e].width = h[i].width),
                                  (l[e].height = h[i].height),
                                  (l[e].cx = h[i].cx),
                                  (l[e].cy = h[i].cy),
                                  (l[e].xBound = h[i].xBound),
                                  (l[e].yBound = h[i].yBound),
                                  (l[e].xValueList = h[i].xValueList),
                                  (l[e].yValueList = h[i].yValueList),
                                  (l[e].zValueList = h[i].zValueList),
                                  (l[e].cValueList = h[i].cValueList),
                                  (l[e].pieKey = h[i].key),
                                  (l[e].value = l.pValue),
                                  c[h[i].key] ||
                                    (c[h[i].key] = { total: 0, angle: u }),
                                  (c[h[i].key].total += l[e].pValue);
                                break;
                              }
                        } else
                          for (e = 0; e < l.length; e += 1)
                            (l[e].pieKey = "All"),
                              (l[e].value = l.pValue),
                              c[l[e].pieKey] ||
                                (c[l[e].pieKey] = { total: 0, angle: u }),
                              (c[l[e].pieKey].total += l[e].pValue);
                        for (e = 0; e < l.length; e += 1)
                          0 === c[l[e].pieKey].total
                            ? (l[e].piePct = 0)
                            : (l[e].piePct =
                                l[e].pValue / c[l[e].pieKey].total),
                            (l[e].startAngle = c[l[e].pieKey].angle),
                            (l[e].endAngle =
                              l[e].startAngle + l[e].piePct * (d - u)),
                            (c[l[e].pieKey].angle = l[e].endAngle);
                      }
                      t._positionData = l;
                    }, this);
                }),
                (this._handleTransition = function (t, i, s, a) {
                  var r = null;
                  return (
                    0 === i
                      ? (r = t)
                      : ((r = t
                          .transition()
                          .duration(i)
                          .delay(s._getDelay(i, s, a))),
                        e._ease(r, s.ease)),
                    r
                  );
                }),
                (this._heightPixels = function () {
                  return e._parseYPosition(this.height, this.svg.node());
                }),
                (this._registerEventHandlers = function (i) {
                  null !== i._eventHandlers &&
                    i._eventHandlers.length > 0 &&
                    i._eventHandlers.forEach(function (s) {
                      var a,
                        r = function (a) {
                          var r = new e.eventArgs();
                          null !== i.chart.storyboard &&
                            (r.frameValue = i.chart.storyboard.getFrameValue()),
                            (r.seriesValue = a.aggField),
                            (r.xValue = a.x),
                            (r.yValue = a.y),
                            (r.zValue = a.z),
                            (r.pValue = a.p),
                            (r.colorValue = a.cValue),
                            (r.seriesShapes = i.shapes),
                            (r.selectedShape = t.select(this)),
                            s.handler(r);
                        };
                      if (null !== s.handler && "function" == typeof s.handler)
                        if (null !== i._markers && void 0 !== i._markers)
                          for (a in i._markers)
                            i._markers.hasOwnProperty(a) &&
                              i._markers[a].on(s.event, r);
                        else i.shapes.on(s.event, r);
                    }, this);
                }),
                (this._widthPixels = function () {
                  return e._parseXPosition(this.width, this.svg.node());
                }),
                (this._xPixels = function () {
                  return e._parseXPosition(this.x, this.svg.node());
                }),
                (this._yPixels = function () {
                  return e._parseYPosition(this.y, this.svg.node());
                }),
                (this.addAxis = function (t, i, s, a) {
                  var r,
                    n = null,
                    o = null;
                  if (
                    (null != i && (i = [].concat(i)),
                    "string" == typeof t || t instanceof String)
                  )
                    (n = new e.axis(this, t, i, s, a)), this.axes.push(n);
                  else {
                    if (
                      ((o = t),
                      (n = new e.axis(
                        this,
                        o.position,
                        i,
                        s,
                        a
                      ))._hasMeasure() !== o._hasMeasure()
                        ? (r =
                            "You have specified a composite axis where some but not all axes have a measure - this is not supported, all axes must be of the same type.")
                        : n._hasTimeField() !== o._hasTimeField()
                        ? (r =
                            "You have specified a composite axis where some but not all axes have a time field - this is not supported, all axes must be of the same type.")
                        : (null === n.categoryFields ||
                          void 0 === n.categoryFields
                            ? 0
                            : n.categoryFields.length) !==
                            (null === o.categoryFields ||
                            void 0 === o.categoryFields
                              ? 0
                              : o.categoryFields.length) &&
                          (r =
                            "You have specified a composite axis where axes have differing numbers of category fields - this is not supported, all axes must be of the same type."),
                      r)
                    )
                      throw r;
                    o._slaves.push(n);
                  }
                  return n;
                }),
                (this.addCategoryAxis = function (t, e) {
                  return this.addAxis(t, e, null);
                }),
                (this.addColorAxis = function (t, e) {
                  var i = this.addAxis("c", null, t);
                  return (i.colors = null == e ? null : [].concat(e)), i;
                }),
                (this.addLegend = function (t, i, s, a, r, n) {
                  (n = null == n ? this.series : [].concat(n)),
                    (r = null == r ? "left" : r);
                  var o = new e.legend(this, t, i, s, a, r, n);
                  return this.legends.push(o), o;
                }),
                (this.addLogAxis = function (t, e, i) {
                  var s = this.addAxis(t, null, e, null);
                  return null != i && (s.logBase = i), (s.useLog = !0), s;
                }),
                (this.addMeasureAxis = function (t, e) {
                  return this.addAxis(t, null, e);
                }),
                (this.addPctAxis = function (t, e, i) {
                  var s = null;
                  return (
                    ((s =
                      null != i
                        ? this.addAxis(t, i, e)
                        : this.addMeasureAxis(t, e)).showPercent = !0),
                    s
                  );
                }),
                (this.addSeries = function (t, i, s) {
                  null == s && (s = this.axes),
                    null == i && (i = e.plot.bubble);
                  var a,
                    r = null,
                    n = null,
                    o = null,
                    l = null,
                    h = null;
                  return (
                    s.forEach(function (t) {
                      null !== t &&
                        i.supportedAxes.indexOf(t.position) > -1 &&
                        (null === r && "x" === t.position[0]
                          ? (r = t)
                          : null === n && "y" === t.position[0]
                          ? (n = t)
                          : null === o && "z" === t.position[0]
                          ? (o = t)
                          : null === l && "c" === t.position[0]
                          ? (l = t)
                          : null === l && "p" === t.position[0] && (h = t));
                    }, this),
                    t && (t = [].concat(t)),
                    (a = new e.series(
                      this,
                      t,
                      r,
                      n,
                      o,
                      l,
                      h,
                      i,
                      e.aggregateMethod.sum,
                      i.stacked
                    )),
                    this.series.push(a),
                    a
                  );
                }),
                (this.addTimeAxis = function (t, e, i, s) {
                  var a = this.addAxis(t, null, null, e);
                  return (a.tickFormat = s), (a.dateParseFormat = i), a;
                }),
                (this.assignClass = function (t, e) {
                  return (
                    (this._assignedClasses[t] = e), this._assignedClasses[t]
                  );
                }),
                (this.assignColor = function (t, i, s, a) {
                  return (
                    (this._assignedColors[t] = new e.color(i, s, a)),
                    this._assignedColors[t]
                  );
                }),
                (this.customClassList = {
                  axisLine: "dimple-custom-axis-line",
                  axisLabel: "dimple-custom-axis-label",
                  axisTitle: "dimple-custom-axis-title",
                  tooltipBox: "dimple-custom-tooltip-box",
                  tooltipLabel: "dimple-custom-tooltip-label",
                  tooltipDropLine: "dimple-custom-tooltip-dropline",
                  lineMarker: "dimple-custom-line-marker",
                  lineMarkerCircle: "dimple-custom-line-marker-circle",
                  legendLabel: "dimple-custom-legend-label",
                  legendKey: "dimple-custom-legend-key",
                  areaSeries: "dimple-custom-series-area",
                  barSeries: "dimple-custom-series-bar",
                  bubbleSeries: "dimple-custom-series-bubble",
                  lineSeries: "dimple-custom-series-line",
                  pieSeries: "dimple-custom-series-pie",
                  gridline: "dimple-custom-gridline",
                  colorClasses: [
                    "dimple-custom-format-1",
                    "dimple-custom-format-2",
                    "dimple-custom-format-3",
                    "dimple-custom-format-4",
                    "dimple-custom-format-5",
                    "dimple-custom-format-6",
                    "dimple-custom-format-7",
                    "dimple-custom-format-8",
                    "dimple-custom-format-9",
                    "dimple-custom-format-10",
                  ],
                }),
                (this.defaultColors = [
                  new e.color("#80B1D3"),
                  new e.color("#FB8072"),
                  new e.color("#FDB462"),
                  new e.color("#B3DE69"),
                  new e.color("#FFED6F"),
                  new e.color("#BC80BD"),
                  new e.color("#8DD3C7"),
                  new e.color("#CCEBC5"),
                  new e.color("#FFFFB3"),
                  new e.color("#BEBADA"),
                  new e.color("#FCCDE5"),
                  new e.color("#D9D9D9"),
                ]),
                (this.draw = function (e, i) {
                  e = e || 0;
                  var s,
                    a,
                    r = null,
                    n = null,
                    o = !1,
                    l = !1,
                    h = this._xPixels(),
                    c = this._yPixels(),
                    u = this._widthPixels(),
                    d = this._heightPixels();
                  return (
                    (null != i && !1 !== i) || this._getSeriesData(),
                    this.axes.forEach(function (t) {
                      t._scale = null;
                    }, this),
                    this.axes.forEach(function (t) {
                      if (
                        ((t._min = 0), (t._max = 0), (a = []), t._hasMeasure())
                      ) {
                        var e = !1;
                        this.series.forEach(function (i) {
                          if (i._deepMatch(t)) {
                            var s = i._axisBounds(t.position);
                            t._min > s.min && (t._min = s.min),
                              t._max < s.max && (t._max = s.max),
                              (e = !0);
                          }
                        }, this),
                          e ||
                            this._getAllData().forEach(function (e) {
                              t._min > e[t.measure] && (t._min = e[t.measure]),
                                t._max < e[t.measure] &&
                                  (t._max = e[t.measure]);
                            }, this);
                      } else
                        t._hasTimeField()
                          ? ((t._min = null),
                            (t._max = null),
                            this.series.forEach(function (e) {
                              e._deepMatch(t) &&
                                null !== e[t.position].timeField &&
                                void 0 !== e[t.position].timeField &&
                                -1 === a.indexOf(e[t.position].timeField) &&
                                a.push(e[t.position].timeField);
                            }, this),
                            t._getAxisData().forEach(function (e) {
                              a.forEach(function (i) {
                                var s = t._parseDate(e[i]);
                                (null === t._min || s < t._min) && (t._min = s),
                                  (null === t._max || s > t._max) &&
                                    (t._max = s);
                              }, this);
                            }, this))
                          : t._hasCategories() &&
                            ((t._min = 0),
                            (s = []),
                            this.series.forEach(function (e) {
                              e._deepMatch(t) &&
                                null !== e[t.position].categoryFields[0] &&
                                void 0 !== e[t.position].categoryFields[0] &&
                                -1 ===
                                  a.indexOf(e[t.position].categoryFields[0]) &&
                                a.push(e[t.position].categoryFields[0]);
                            }, this),
                            t._getAxisData().forEach(function (t) {
                              a.forEach(function (e) {
                                -1 === s.indexOf(t[e]) && s.push(t[e]);
                              }, this);
                            }, this),
                            (t._max = s.length));
                      null !== t._slaves &&
                        void 0 !== t._slaves &&
                        t._slaves.length > 0 &&
                        t._slaves.forEach(function (e) {
                          (e._min = t._min), (e._max = t._max);
                        }, this),
                        t._update(),
                        null === r && "x" === t.position
                          ? (r = t)
                          : null === n && "y" === t.position && (n = t);
                    }, this),
                    this.axes.forEach(function (i) {
                      var s = !1,
                        a = null,
                        p = 0,
                        g = null,
                        _ = !1,
                        f = 0,
                        x = { l: null, t: null, r: null, b: null },
                        y = 0,
                        m = 0,
                        v = "",
                        F = this,
                        k = function (t) {
                          return null === a || 0 === e || s
                            ? t
                            : F._handleTransition(t, e, F);
                        },
                        b = function () {
                          var e = t.select(this).selectAll("text");
                          return (
                            !i.measure &&
                              i._max > 0 &&
                              ("x" === i.position
                                ? e.attr("x", u / i._max / 2)
                                : "y" === i.position &&
                                  e.attr("y", ((d / i._max) * -1) / 2)),
                            i.categoryFields &&
                              i.categoryFields.length > 0 &&
                              (i !== r ||
                                (null !== n.categoryFields &&
                                  0 !== n.categoryFields.length) ||
                                e.attr("y", c + d - n._scale(0) + 9),
                              i !== n ||
                                (null !== r.categoryFields &&
                                  0 !== r.categoryFields.length) ||
                                e.attr("x", -1 * (r._scale(0) - h) - 9)),
                            this
                          );
                        },
                        w = function (e) {
                          return function () {
                            var i = t.select(this).attr("class") || "";
                            return (
                              -1 === i.indexOf(e) && (i += " " + e), i.trim()
                            );
                          };
                        };
                      null === i.gridlineShapes
                        ? (i.showGridlines ||
                            (null === i.showGridlines &&
                              !i._hasCategories() &&
                              ((!o && "x" === i.position) ||
                                (!l && "y" === i.position)))) &&
                          ((i.gridlineShapes = this._gridlines_group
                            .append("g")
                            .attr("class", "dimple-gridline")),
                          "x" === i.position ? (o = !0) : (l = !0))
                        : "x" === i.position
                        ? (o = !0)
                        : (l = !0),
                        null === i.shapes &&
                          ((i.shapes = this._axis_group
                            .append("g")
                            .attr(
                              "class",
                              "dimple-axis dimple-axis-" + i.position
                            )
                            .each(function () {
                              F.noFormats ||
                                t
                                  .select(this)
                                  .style("font-family", i.fontFamily)
                                  .style("font-size", i._getFontSize());
                            })),
                          (s = !0)),
                        i === r && null !== n
                          ? ((a =
                              "translate(0, " +
                              (null === n.categoryFields ||
                              0 === n.categoryFields.length
                                ? n._scale(0)
                                : c + d) +
                              ")"),
                            (g = "translate(0, " + (i === r ? c + d : c) + ")"),
                            (p = -d))
                          : i === n && null !== r
                          ? ((a =
                              "translate(" +
                              (null === r.categoryFields ||
                              0 === r.categoryFields.length
                                ? r._scale(0)
                                : h) +
                              ", 0)"),
                            (g = "translate(" + (i === n ? h : h + u) + ", 0)"),
                            (p = -u))
                          : "x" === i.position
                          ? ((g = a =
                              "translate(0, " + (i === r ? c + d : c) + ")"),
                            (p = -d))
                          : "y" === i.position &&
                            ((g = a =
                              "translate(" + (i === n ? h : h + u) + ", 0)"),
                            (p = -u)),
                        null !== a &&
                          null !== i._draw &&
                          (i._hasTimeField()
                            ? k(i.shapes)
                                .call(
                                  i._draw
                                    .ticks(i._getTimePeriod(), i.timeInterval)
                                    .tickFormat(i._getFormat())
                                )
                                .attr("transform", a)
                                .each(b)
                            : i.useLog
                            ? k(i.shapes)
                                .call(i._draw.ticks(4, i._getFormat()))
                                .attr("transform", a)
                                .each(b)
                            : k(i.shapes)
                                .call(i._draw.tickFormat(i._getFormat()))
                                .attr("transform", a)
                                .each(b),
                          null !== i.gridlineShapes &&
                            k(i.gridlineShapes)
                              .call(i._draw.tickSize(p, 0, 0).tickFormat(""))
                              .attr("transform", g)),
                        k(i.shapes.selectAll("text"))
                          .attr("class", w(F.customClassList.axisLabel))
                          .call(function (t) {
                            F.noFormats ||
                              t
                                .style("font-family", i.fontFamily)
                                .style("font-size", i._getFontSize());
                          }),
                        k(i.shapes.selectAll("path, line"))
                          .attr("class", w(F.customClassList.axisLine))
                          .call(function (t) {
                            F.noFormats ||
                              t
                                .style("fill", "none")
                                .style("stroke", "black")
                                .style("shape-rendering", "crispEdges");
                          }),
                        null !== i.gridlineShapes &&
                          (i.gridlineShapes.selectAll("path").remove(),
                          k(i.gridlineShapes.selectAll("line"))
                            .attr("class", w(F.customClassList.gridline))
                            .call(function (t) {
                              F.noFormats ||
                                t
                                  .style("fill", "none")
                                  .style("stroke", "lightgray")
                                  .style("opacity", 0.8);
                            })),
                        (null !== i.measure && void 0 !== i.measure) ||
                          (i.autoRotateLabel
                            ? i === r
                              ? ((f = 0),
                                i.shapes.selectAll("text").each(function () {
                                  var t = this.getComputedTextLength();
                                  f = t > f ? t : f;
                                }),
                                f >
                                u / i.shapes.selectAll("text").nodes().length
                                  ? ((_ = !0),
                                    i.shapes
                                      .selectAll("text")
                                      .style("text-anchor", "start")
                                      .each(function () {
                                        var e = this.getBBox();
                                        t.select(this).attr(
                                          "transform",
                                          "rotate(90," +
                                            e.x +
                                            "," +
                                            (e.y + e.height / 2) +
                                            ") translate(-5, 0)"
                                        );
                                      }))
                                  : ((_ = !1),
                                    i.shapes
                                      .selectAll("text")
                                      .style("text-anchor", "middle")
                                      .attr("transform", "")))
                              : "x" === i.position &&
                                ((f = 0),
                                i.shapes.selectAll("text").each(function () {
                                  var t = this.getComputedTextLength();
                                  f = t > f ? t : f;
                                }),
                                f >
                                u / i.shapes.selectAll("text").nodes().length
                                  ? ((_ = !0),
                                    i.shapes
                                      .selectAll("text")
                                      .style("text-anchor", "end")
                                      .each(function () {
                                        var e = this.getBBox();
                                        t.select(this).attr(
                                          "transform",
                                          "rotate(90," +
                                            (e.x + e.width) +
                                            "," +
                                            (e.y + e.height / 2) +
                                            ") translate(5, 0)"
                                        );
                                      }))
                                  : ((_ = !1),
                                    i.shapes
                                      .selectAll("text")
                                      .style("text-anchor", "middle")
                                      .attr("transform", "")))
                            : ((_ = !1),
                              i.shapes
                                .selectAll("text")
                                .style("text-anchor", "middle")
                                .attr("transform", ""))),
                        null !== i.titleShape &&
                          void 0 !== i.titleShape &&
                          i.titleShape.remove(),
                        i.shapes.selectAll("text").each(function () {
                          var t = this.getBBox();
                          (null === x.l || -9 - t.width < x.l) &&
                            (x.l = -9 - t.width),
                            (null === x.r || t.x + t.width > x.r) &&
                              (x.r = t.x + t.width),
                            _
                              ? ((null === x.t ||
                                  t.y + t.height - t.width < x.t) &&
                                  (x.t = t.y + t.height - t.width),
                                (null === x.b || t.height + t.width > x.b) &&
                                  (x.b = t.height + t.width))
                              : ((null === x.t || t.y < x.t) && (x.t = t.y),
                                (null === x.b || 9 + t.height > x.b) &&
                                  (x.b = 9 + t.height));
                        }),
                        "x" === i.position
                          ? ((m = i === r ? c + d + x.b + 5 : c + x.t - 10),
                            (y = h + u / 2))
                          : "y" === i.position &&
                            (v =
                              "rotate(270, " +
                              (y = i === n ? h + x.l - 10 : h + u + x.r + 20) +
                              ", " +
                              (m = c + d / 2) +
                              ")"),
                        i.hidden ||
                          ("x" !== i.position && "y" !== i.position) ||
                          null === i.title ||
                          ((i.titleShape = this._axis_group
                            .append("text")
                            .attr(
                              "class",
                              "dimple-axis dimple-title " +
                                F.customClassList.axisTitle +
                                " dimple-axis-" +
                                i.position
                            )),
                          i.titleShape
                            .attr("x", y)
                            .attr("y", m)
                            .attr("text-anchor", "middle")
                            .attr("transform", v)
                            .text(
                              void 0 !== i.title
                                ? i.title
                                : null === i.categoryFields ||
                                  void 0 === i.categoryFields ||
                                  0 === i.categoryFields.length
                                ? i.measure
                                : i.categoryFields.join("/")
                            )
                            .each(function () {
                              F.noFormats ||
                                t
                                  .select(this)
                                  .style("font-family", i.fontFamily)
                                  .style("font-size", i._getFontSize());
                            }),
                          i === r
                            ? i.titleShape.each(function () {
                                t.select(this).attr(
                                  "y",
                                  m + this.getBBox().height / 1.65
                                );
                              })
                            : i === n &&
                              i.titleShape.each(function () {
                                t.select(this).attr(
                                  "x",
                                  y + this.getBBox().height / 1.65
                                );
                              }));
                    }, this),
                    this.series.forEach(function (t) {
                      t.plot.draw(this, t, e), this._registerEventHandlers(t);
                    }, this),
                    this.legends.forEach(function (t) {
                      t._draw();
                    }, this),
                    this.storyboard &&
                      (this.storyboard._drawText(),
                      this.storyboard.autoplay &&
                        this.storyboard.startAnimation()),
                    this
                  );
                }),
                (this.getClass = function (t) {
                  return (
                    this._assignedClasses[t] ||
                      ((this._assignedClasses[
                        t
                      ] = this.customClassList.colorClasses[this._nextClass]),
                      (this._nextClass =
                        (this._nextClass + 1) %
                        this.customClassList.colorClasses.length)),
                    this._assignedClasses[t]
                  );
                }),
                (this.getColor = function (t) {
                  return (
                    (null !== this._assignedColors[t] &&
                      void 0 !== this._assignedColors[t]) ||
                      ((this._assignedColors[t] = this.defaultColors[
                        this._nextColor
                      ]),
                      (this._nextColor =
                        (this._nextColor + 1) % this.defaultColors.length)),
                    this._assignedColors[t]
                  );
                }),
                (this.setBounds = function (t, i, s, a) {
                  return (
                    (this.x = t),
                    (this.y = i),
                    (this.width = s),
                    (this.height = a),
                    (this._xPixels = function () {
                      return e._parseXPosition(this.x, this.svg.node());
                    }),
                    this.draw(0, !0),
                    (this._yPixels = function () {
                      return e._parseYPosition(this.y, this.svg.node());
                    }),
                    (this._widthPixels = function () {
                      return e._parseXPosition(this.width, this.svg.node());
                    }),
                    (this._heightPixels = function () {
                      return e._parseYPosition(this.height, this.svg.node());
                    }),
                    this
                  );
                }),
                (this.setMargins = function (t, i, s, a) {
                  return (
                    (this.x = t),
                    (this.y = i),
                    (this.width = 0),
                    (this.height = 0),
                    (this._xPixels = function () {
                      return e._parseXPosition(this.x, this.svg.node());
                    }),
                    (this._yPixels = function () {
                      return e._parseYPosition(this.y, this.svg.node());
                    }),
                    (this._widthPixels = function () {
                      return (
                        e._parentWidth(this.svg.node()) -
                        this._xPixels() -
                        e._parseXPosition(s, this.svg.node())
                      );
                    }),
                    (this._heightPixels = function () {
                      return (
                        e._parentHeight(this.svg.node()) -
                        this._yPixels() -
                        e._parseYPosition(a, this.svg.node())
                      );
                    }),
                    this
                  );
                }),
                (this.setStoryboard = function (t, i) {
                  return (
                    (this.storyboard = new e.storyboard(this, t)),
                    null != i && (this.storyboard.onTick = i),
                    this.storyboard
                  );
                });
            }),
            (e.color = function (e, i, s) {
              (this.fill = e),
                (this.stroke = null == i ? t.rgb(e).darker(0.5).toString() : i),
                (this.opacity = null == s ? 0.8 : s);
            }),
            (e.eventArgs = function () {
              (this.seriesValue = null),
                (this.xValue = null),
                (this.yValue = null),
                (this.zValue = null),
                (this.pValue = null),
                (this.colorValue = null),
                (this.frameValue = null),
                (this.seriesShapes = null),
                (this.selectedShape = null);
            }),
            (e.legend = function (i, s, a, r, n, o, l) {
              (this.chart = i),
                (this.series = l),
                (this.x = s),
                (this.y = a),
                (this.width = r),
                (this.height = n),
                (this.horizontalAlign = o),
                (this.shapes = null),
                (this.fontSize = "10px"),
                (this.fontFamily = "sans-serif"),
                (this._draw = function () {
                  var i,
                    s = this._getEntries(),
                    a = 0,
                    r = 0,
                    n = 0,
                    o = 0,
                    l = this;
                  this.shapes && this.shapes.remove(),
                    (i = this.chart._group
                      .selectAll(".dimple-dont-select-any")
                      .data(s)
                      .enter()
                      .append("g")
                      .attr("class", function (t) {
                        return "dimple-legend " + e._createClass(t.aggField);
                      })
                      .attr("opacity", 1))
                      .append("text")
                      .attr("class", function (t) {
                        return (
                          "dimple-legend dimple-legend-text " +
                          e._createClass(t.aggField) +
                          " " +
                          l.chart.customClassList.legendLabel
                        );
                      })
                      .text(function (t) {
                        return t.key;
                      })
                      .call(function (t) {
                        l.chart.noFormats ||
                          t
                            .style("font-family", l.fontFamily)
                            .style("font-size", l._getFontSize())
                            .style("shape-rendering", "crispEdges");
                      })
                      .each(function () {
                        var t = this.getBBox();
                        t.width > a && (a = t.width),
                          t.height > r && (r = t.height);
                      }),
                    i
                      .append("rect")
                      .attr("class", function (t) {
                        return (
                          "dimple-legend dimple-legend-key " +
                          e._createClass(t.aggField)
                        );
                      })
                      .attr("height", 9)
                      .attr("width", 15),
                    (r = (r < 9 ? 9 : r) + l._getVerticalPadding()),
                    (a += 15 + l._getHorizontalPadding()),
                    i.each(function (i) {
                      n + a > l._widthPixels() && ((n = 0), (o += r)),
                        o > l._heightPixels()
                          ? t.select(this).remove()
                          : (t
                              .select(this)
                              .select("text")
                              .attr(
                                "x",
                                "left" === l.horizontalAlign
                                  ? l._xPixels() + 15 + 5 + n
                                  : l._xPixels() +
                                      (l._widthPixels() - n - a) +
                                      15 +
                                      5
                              )
                              .attr("y", function () {
                                return (
                                  l._yPixels() +
                                  o +
                                  this.getBBox().height / 1.65
                                );
                              })
                              .attr("width", l._widthPixels())
                              .attr("height", l._heightPixels()),
                            t
                              .select(this)
                              .select("rect")
                              .attr("class", function (t) {
                                return (
                                  "dimple-legend dimple-legend-key " +
                                  e._createClass(t.aggField) +
                                  " " +
                                  l.chart.customClassList.legendKey +
                                  " " +
                                  t.css
                                );
                              })
                              .attr(
                                "x",
                                "left" === l.horizontalAlign
                                  ? l._xPixels() + n
                                  : l._xPixels() + (l._widthPixels() - n - a)
                              )
                              .attr("y", l._yPixels() + o)
                              .attr("height", 9)
                              .attr("width", 15)
                              .call(function (t) {
                                l.chart.noFormats ||
                                  t
                                    .style("fill", i.fill)
                                    .style("stroke", i.stroke)
                                    .style("opacity", i.opacity)
                                    .style("shape-rendering", "crispEdges");
                              }),
                            (n += a));
                    }),
                    (this.shapes = i);
                }),
                (this._getEntries = function () {
                  var t = [];
                  return (
                    this.series &&
                      this.series.forEach(function (e) {
                        e._positionData.forEach(function (i) {
                          var s,
                            a = -1,
                            r =
                              e.plot.grouped &&
                              !e.x._hasCategories() &&
                              !e.y._hasCategories() &&
                              i.aggField.length < 2
                                ? "All"
                                : i.aggField.slice(-1)[0];
                          for (s = 0; s < t.length; s += 1)
                            if (t[s].key === r) {
                              a = s;
                              break;
                            }
                          -1 === a &&
                            e.chart._assignedColors[r] &&
                            (t.push({
                              key: r,
                              fill: e.chart._assignedColors[r].fill,
                              stroke: e.chart._assignedColors[r].stroke,
                              opacity: e.chart._assignedColors[r].opacity,
                              css: e.chart._assignedClasses[r],
                              series: e,
                              aggField: i.aggField,
                            }),
                            (a = t.length - 1));
                        });
                      }, this),
                    t
                  );
                }),
                (this._getFontSize = function () {
                  return this.fontSize &&
                    "auto" !== this.fontSize.toString().toLowerCase()
                    ? isNaN(this.fontSize)
                      ? this.fontSize
                      : this.fontSize + "px"
                    : (this.chart._heightPixels() / 35 > 10
                        ? this.chart._heightPixels() / 35
                        : 10) + "px";
                }),
                (this._getHorizontalPadding = function () {
                  return isNaN(this.horizontalPadding)
                    ? 20
                    : this.horizontalPadding;
                }),
                (this._getVerticalPadding = function () {
                  return isNaN(this.verticalPadding) ? 2 : this.verticalPadding;
                }),
                (this._heightPixels = function () {
                  return e._parseYPosition(this.height, this.chart.svg.node());
                }),
                (this._widthPixels = function () {
                  return e._parseXPosition(this.width, this.chart.svg.node());
                }),
                (this._xPixels = function () {
                  return e._parseXPosition(this.x, this.chart.svg.node());
                }),
                (this._yPixels = function () {
                  return e._parseYPosition(this.y, this.chart.svg.node());
                });
            }),
            (e.series = function (t, e, i, s, a, r, n, o, l, h) {
              (this.chart = t),
                (this.x = i),
                (this.y = s),
                (this.z = a),
                (this.c = r),
                (this.p = n),
                (this.plot = o),
                (this.categoryFields = e),
                (this.aggregate = l),
                (this.stacked = h),
                (this.barGap = 0.2),
                (this.clusterBarGap = 0.1),
                (this.lineWeight = 2),
                (this.lineMarkers = !1),
                (this.afterDraw = null),
                (this.interpolation = "linear"),
                (this.tooltipFontSize = "10px"),
                (this.tooltipFontFamily = "sans-serif"),
                (this.radius = "auto"),
                (this._group = t._group.append("g")),
                this._group.attr(
                  "class",
                  "dimple-series-group-" + t.series.length
                ),
                (this._eventHandlers = []),
                (this._positionData = []),
                (this._orderRules = []),
                (this._axisBounds = function (t) {
                  var e,
                    i,
                    s,
                    a = { min: 0, max: 0 },
                    r = null,
                    n = null,
                    o = [],
                    l = 0,
                    h = this._positionData;
                  return (
                    "x" === t
                      ? ((r = this.x), (n = this.y))
                      : "y" === t
                      ? ((r = this.y), (n = this.x))
                      : "z" === t
                      ? (r = this.z)
                      : "p" === t
                      ? (r = this.p)
                      : "c" === t && (r = this.c),
                    r.showPercent
                      ? h.forEach(function (t) {
                          t[r.position + "Bound"] < a.min &&
                            (a.min = t[r.position + "Bound"]),
                            t[r.position + "Bound"] > a.max &&
                              (a.max = t[r.position + "Bound"]);
                        }, this)
                      : null === n ||
                        null === n.categoryFields ||
                        0 === n.categoryFields.length
                      ? h.forEach(function (t) {
                          !this._isStacked() ||
                          ("x" !== r.position && "y" !== r.position)
                            ? (t[r.position + "Value"] < a.min &&
                                (a.min = t[r.position + "Value"]),
                              t[r.position + "Value"] > a.max &&
                                (a.max = t[r.position + "Value"]))
                            : t[r.position + "Value"] < 0
                            ? (a.min = a.min + t[r.position + "Value"])
                            : (a.max = a.max + t[r.position + "Value"]);
                        }, this)
                      : ((e = r.position + "Value"),
                        (i = n.position + "Field"),
                        (s = []),
                        h.forEach(function (t) {
                          var a = t[i].join("/"),
                            r = s.indexOf(a);
                          -1 === r && (s.push(a), (r = s.length - 1)),
                            void 0 === o[r] &&
                              ((o[r] = { min: 0, max: 0 }),
                              r >= l && (l = r + 1)),
                            this.stacked
                              ? t[e] < 0
                                ? (o[r].min = o[r].min + t[e])
                                : (o[r].max = o[r].max + t[e])
                              : (t[e] < o[r].min && (o[r].min = t[e]),
                                t[e] > o[r].max && (o[r].max = t[e]));
                        }, this),
                        o.forEach(function (t) {
                          void 0 !== t &&
                            (t.min < a.min && (a.min = t.min),
                            t.max > a.max && (a.max = t.max));
                        }, this)),
                    a
                  );
                }),
                (this._deepMatch = function (t) {
                  var e = !1;
                  return (
                    this[t.position] === t
                      ? (e = !0)
                      : void 0 !== t._slaves &&
                        null !== t._slaves &&
                        t._slaves.length > 0 &&
                        t._slaves.forEach(function (t) {
                          e = e || this._deepMatch(t);
                        }, this),
                    e
                  );
                }),
                (this._dropLineOrigin = function () {
                  var t = 0,
                    e = 0,
                    i = { x: null, y: null },
                    s = { x: null, y: null };
                  return (
                    this.chart.axes.forEach(function (t) {
                      "x" === t.position && null === s.x
                        ? t._hasTimeField()
                          ? (s.x = this.chart._xPixels())
                          : (s.x = t._origin)
                        : "y" === t.position &&
                          null === s.y &&
                          (t._hasTimeField()
                            ? (s.y =
                                this.chart._yPixels() +
                                this.chart._heightPixels())
                            : (s.y = t._origin));
                    }, this),
                    this.chart.axes.forEach(function (a) {
                      "x" !== a.position || this.x.hidden
                        ? "y" !== a.position ||
                          this.y.hidden ||
                          (this._deepMatch(a) &&
                            (0 === e
                              ? (i.x = s.x)
                              : 1 === e &&
                                (i.x =
                                  this.chart._xPixels() +
                                  this.chart._widthPixels())),
                          (e += 1))
                        : (this._deepMatch(a) &&
                            (0 === t
                              ? (i.y = s.y)
                              : 1 === t && (i.y = this.chart._yPixels())),
                          (t += 1));
                    }, this),
                    i
                  );
                }),
                (this._getTooltipFontSize = function () {
                  return this.tooltipFontSize &&
                    "auto" !== this.tooltipFontSize.toString().toLowerCase()
                    ? isNaN(this.tooltipFontSize)
                      ? this.tooltipFontSize
                      : this.tooltipFontSize + "px"
                    : (this.chart._heightPixels() / 35 > 10
                        ? this.chart._heightPixels() / 35
                        : 10) + "px";
                }),
                (this._isStacked = function () {
                  return (
                    this.stacked &&
                    (this.x._hasCategories() || this.y._hasCategories())
                  );
                }),
                (this.addEventHandler = function (t, e) {
                  this._eventHandlers.push({ event: t, handler: e });
                }),
                (this.addOrderRule = function (t, e) {
                  this._orderRules.push({ ordering: t, desc: e });
                }),
                (this.getTooltipText = function (t) {
                  var e = [];
                  return (
                    null !== this.categoryFields &&
                      void 0 !== this.categoryFields &&
                      this.categoryFields.length > 0 &&
                      this.categoryFields.forEach(function (i, s) {
                        null != i &&
                          null !== t.aggField[s] &&
                          void 0 !== t.aggField[s] &&
                          e.push(
                            i +
                              (t.aggField[s] !== i ? ": " + t.aggField[s] : "")
                          );
                      }, this),
                    this.p
                      ? (this.x &&
                          this.x._hasCategories() &&
                          this.x._getTooltipText(e, t),
                        this.y &&
                          this.y._hasCategories() &&
                          this.y._getTooltipText(e, t),
                        this.z &&
                          this.z._hasCategories() &&
                          this.z._getTooltipText(e, t),
                        this.p._getTooltipText(e, t))
                      : (this.x && this.x._getTooltipText(e, t),
                        this.y && this.y._getTooltipText(e, t),
                        this.z && this.z._getTooltipText(e, t)),
                    this.c && this.c._getTooltipText(e, t),
                    e.filter(function (t, i) {
                      return e.indexOf(t) === i;
                    })
                  );
                });
            }),
            (e.storyboard = function (t, e) {
              null != e && (e = [].concat(e)),
                (this.chart = t),
                (this.categoryFields = e),
                (this.autoplay = !0),
                (this.frameDuration = 3e3),
                (this.storyLabel = null),
                (this.onTick = null),
                (this.fontSize = "10px"),
                (this.fontFamily = "sans-serif"),
                (this._frame = 0),
                (this._animationTimer = null),
                (this._categories = []),
                (this._cachedCategoryFields = []),
                (this._orderRules = []),
                (this._drawText = function () {
                  var e = this,
                    i = 0;
                  e.storyLabel ||
                    (e.chart.axes.forEach(function (t) {
                      "x" === t.position && (i += 1);
                    }, e),
                    (e.storyLabel = e.chart._group
                      .append("text")
                      .attr("class", "dimple-storyboard-label")
                      .attr("opacity", 1)
                      .attr(
                        "x",
                        e.chart._xPixels() + 0.01 * e.chart._widthPixels()
                      )
                      .attr(
                        "y",
                        e.chart._yPixels() +
                          (e.chart._heightPixels() / 35 > 10
                            ? e.chart._heightPixels() / 35
                            : 10) *
                            (i > 1 ? 1.25 : -1)
                      )
                      .call(function (i) {
                        t.noFormats ||
                          i
                            .style("font-family", e.fontFamily)
                            .style("font-size", e._getFontSize());
                      }))),
                    e.storyLabel.text(
                      e.categoryFields.join("\\") + ": " + e.getFrameValue()
                    );
                }),
                (this._getCategories = function () {
                  return (
                    this._categoryFields !== this._cachedCategoryFields &&
                      ((this._categories = []),
                      this.chart._getAllData().forEach(function (t) {
                        var e = "";
                        null !== this.categoryFields &&
                          (this.categoryFields.forEach(function (i, s) {
                            s > 0 && (e += "/"), (e += t[i]);
                          }, this),
                          -1 === this._categories.indexOf(e) &&
                            (this._categories.push(e),
                            this._categories.length));
                      }, this),
                      (this._cachedCategoryFields = this._categoryFields)),
                    this._categories
                  );
                }),
                (this._getFontSize = function () {
                  return this.fontSize &&
                    "auto" !== this.fontSize.toString().toLowerCase()
                    ? isNaN(this.fontSize)
                      ? this.fontSize
                      : this.fontSize + "px"
                    : (this.chart._heightPixels() / 35 > 10
                        ? this.chart._heightPixels() / 35
                        : 10) + "px";
                }),
                (this._goToFrameIndex = function (t) {
                  (this._frame = t % this._getCategories().length),
                    this.chart.draw(this.frameDuration / 2);
                }),
                (this.addOrderRule = function (t, e) {
                  this._orderRules.push({ ordering: t, desc: e });
                }),
                (this.getFrameValue = function () {
                  var t = null;
                  return (
                    this._frame >= 0 &&
                      this._getCategories().length > this._frame &&
                      (t = this._getCategories()[this._frame]),
                    t
                  );
                }),
                (this.goToFrame = function (t) {
                  if (this._getCategories().length > 0) {
                    var e = this._getCategories().indexOf(t);
                    this._goToFrameIndex(e);
                  }
                }),
                (this.pauseAnimation = function () {
                  null !== this._animationTimer &&
                    (window.clearInterval(this._animationTimer),
                    (this._animationTimer = null));
                }),
                (this.startAnimation = function () {
                  var t;
                  null === this._animationTimer &&
                    (null !== this.onTick && this.onTick(this.getFrameValue()),
                    (this._animationTimer = window.setInterval(
                      ((t = this),
                      function () {
                        t._goToFrameIndex(t._frame + 1),
                          null !== t.onTick && t.onTick(t.getFrameValue()),
                          t._drawText(t.frameDuration / 2);
                      }),
                      this.frameDuration
                    )));
                }),
                (this.stopAnimation = function () {
                  null !== this._animationTimer &&
                    (window.clearInterval(this._animationTimer),
                    (this._animationTimer = null),
                    (this._frame = 0));
                });
            }),
            (e.aggregateMethod.avg = function (t, e) {
              return (
                (t.value =
                  null === t.value || void 0 === t.value
                    ? 0
                    : parseFloat(t.value)),
                (t.count =
                  null === t.count || void 0 === t.count
                    ? 1
                    : parseFloat(t.count)),
                (e.value =
                  null === e.value || void 0 === e.value
                    ? 0
                    : parseFloat(e.value)),
                (e.count =
                  null === e.count || void 0 === e.count
                    ? 1
                    : parseFloat(e.count)),
                (t.value * t.count + e.value * e.count) / (t.count + e.count)
              );
            }),
            (e.aggregateMethod.count = function (t, e) {
              return (
                (t.count =
                  null === t.count || void 0 === t.count
                    ? 0
                    : parseFloat(t.count)),
                (e.count =
                  null === e.count || void 0 === e.count
                    ? 0
                    : parseFloat(e.count)),
                t.count + e.count
              );
            }),
            (e.aggregateMethod.max = function (t, e) {
              return (
                (t.value =
                  null === t.value || void 0 === t.value
                    ? 0
                    : parseFloat(t.value)),
                (e.value =
                  null === e.value || void 0 === e.value
                    ? 0
                    : parseFloat(e.value)),
                t.value > e.value ? t.value : e.value
              );
            }),
            (e.aggregateMethod.min = function (t, e) {
              return null === t.value
                ? parseFloat(e.value)
                : parseFloat(t.value) < parseFloat(e.value)
                ? parseFloat(t.value)
                : parseFloat(e.value);
            }),
            (e.aggregateMethod.sum = function (t, e) {
              return (
                (t.value =
                  null === t.value || void 0 === t.value
                    ? 0
                    : parseFloat(t.value)),
                (e.value =
                  null === e.value || void 0 === e.value
                    ? 0
                    : parseFloat(e.value)),
                t.value + e.value
              );
            }),
            (e.plot.area = {
              stacked: !0,
              grouped: !0,
              supportedAxes: ["x", "y", "c"],
              draw: function (i, s, a) {
                var r,
                  n,
                  o,
                  l,
                  h,
                  c,
                  u,
                  d,
                  p,
                  g,
                  _,
                  f,
                  x,
                  y,
                  m,
                  v,
                  F,
                  k,
                  b,
                  w,
                  C,
                  P,
                  B,
                  S,
                  M = s._positionData,
                  L = [],
                  T = null,
                  O = "dimple-series-" + i.series.indexOf(s),
                  z = s.x._hasCategories() || s.y._hasCategories() ? 0 : 1,
                  A = !1,
                  V = {},
                  D = [],
                  E = [],
                  G = function (r, n) {
                    var o;
                    e._drawMarkers(
                      r,
                      i,
                      s,
                      a,
                      O,
                      A,
                      function (i, s, a, r) {
                        t.select(s).style("opacity", 1),
                          e._showPointTooltip(i, s, a, r);
                      },
                      ((o = r),
                      function (i, s, a, r) {
                        t
                          .select(s)
                          .style(
                            "opacity",
                            r.lineMarkers || o.data.length < 2
                              ? e._helpers.opacity(i, a, r)
                              : 0
                          ),
                          e._removeTooltip(i, s, a, r);
                      }),
                      n
                    );
                  },
                  j = function (t, a) {
                    var r;
                    return (
                      "step" === s.interpolation && s[t]._hasCategories()
                        ? ((r =
                            e._helpers[t](a, i, s) +
                            ("y" === t ? e._helpers.height(a, i, s) : 0)),
                          s[t].categoryFields.length < 2 &&
                            (r +=
                              ("y" === t ? 1 : -1) *
                              e._helpers[t + "Gap"](i, s)))
                        : (r = e._helpers["c" + t](a, i, s)),
                      parseFloat(r)
                    );
                  },
                  R = function (i, a) {
                    var r = t
                      .line()
                      .x(function (t) {
                        return s.x._hasCategories() || !a ? t.x : s.x[a];
                      })
                      .y(function (t) {
                        return s.y._hasCategories() || !a ? t.y : s.y[a];
                      });
                    return e._interpolate(r, i), r;
                  },
                  N = function (t, e) {
                    return parseFloat(t) - parseFloat(e);
                  },
                  W = function (t, e) {
                    return parseFloat(t.x) - parseFloat(e.x);
                  },
                  I = function (t, e, i) {
                    var s,
                      a,
                      r = e[e.length - 1],
                      n = 9999,
                      o = r;
                    for (s = 0; s < t.length; s += 1)
                      (t[s].x === r.x && t[s].y === r.y) ||
                        ((a =
                          180 -
                          Math.atan2(t[s].x - r.x, t[s].y - r.y) *
                            (180 / Math.PI)) > i &&
                          a < n &&
                          ((o = t[s]), (n = a)));
                    return e.push(o), n;
                  };
                for (
                  r =
                    "step" === s.interpolation ? "step-after" : s.interpolation,
                    _ = e._getSeriesOrder(s.data || i.data, s),
                    s.c &&
                      ((s.x._hasCategories() && s.y._hasMeasure()) ||
                        (s.y._hasCategories() && s.x._hasMeasure())) &&
                      (A = !0),
                    s.x._hasCategories()
                      ? ((B = "x"), (S = "y"))
                      : s.y._hasCategories() && ((B = "y"), (S = "x")),
                    n = 0;
                  n < M.length;
                  n += 1
                ) {
                  for (h = [], u = -1, l = z; l < M[n].aggField.length; l += 1)
                    h.push(M[n].aggField[l]);
                  for (c = e._createClass(h), l = 0; l < L.length; l += 1)
                    if (L[l].keyString === c) {
                      u = l;
                      break;
                    }
                  -1 === u &&
                    ((u = L.length),
                    L.push({
                      key: h,
                      keyString: c,
                      color: "white",
                      data: [],
                      points: [],
                      area: {},
                      entry: {},
                      exit: {},
                      group:
                        B && M[n][B + "Field"] && M[n][B + "Field"].length >= 2
                          ? M[n][B + "Field"][0]
                          : "All",
                    })),
                    L[u].data.push(M[n]);
                }
                for (
                  _ &&
                    L.sort(function (t, i) {
                      return e._arrayIndexCompare(_, t.key, i.key);
                    }),
                    n = 0;
                  n < L.length;
                  n += 1
                ) {
                  for (
                    L[n].data.sort(e._getSeriesSortPredicate(i, s, _)), o = 0;
                    o < L[n].data.length;
                    o += 1
                  )
                    L[n].points.push({
                      x: j("x", L[n].data[o]),
                      y: j("y", L[n].data[o]),
                    }),
                      B &&
                        (V[L[n].group] || (V[L[n].group] = {}),
                        (V[L[n].group][L[n].points[L[n].points.length - 1][B]] =
                          s[S]._origin));
                  (f = L[n].points),
                    "step" === s.interpolation &&
                      f.length > 1 &&
                      B &&
                      (s.x._hasCategories()
                        ? (f.push({
                            x: 2 * f[f.length - 1].x - f[f.length - 2].x,
                            y: f[f.length - 1].y,
                          }),
                          (V[L[n].group][f[f.length - 1][B]] = s[S]._origin))
                        : s.y._hasCategories() &&
                          ((f = [{ x: f[0].x, y: 2 * f[0].y - f[1].y }].concat(
                            f
                          )),
                          (V[L[n].group][f[0][B]] = s[S]._origin),
                          (L[n].points = f)));
                }
                for (m in V)
                  if (V.hasOwnProperty(m)) {
                    for (v in ((D[m] = []), V[m]))
                      V[m].hasOwnProperty(v) && D[m].push(parseFloat(v));
                    D[m].sort(N);
                  }
                for (n = 0; n < L.length; n += 1) {
                  if (
                    ((f = L[n].points),
                    (F = L[n].group),
                    (x = []),
                    (E = []),
                    A &&
                      e._addGradient(
                        L[n].key,
                        "fill-area-gradient-" + L[n].keyString,
                        s.x._hasCategories() ? s.x : s.y,
                        M,
                        i,
                        a,
                        "fill"
                      ),
                    D[F] && D[F].length > 0)
                  )
                    for (o = 0, l = 0; o < D[F].length; o += 1)
                      D[F][o] >= f[0][B] &&
                        D[F][o] <= f[f.length - 1][B] &&
                        (((y = {})[B] = D[F][o]),
                        (y[S] = V[F][D[F][o]]),
                        x.push(y),
                        f[l][B] > D[F][o]
                          ? E.push(y)
                          : (E.push(f[l]),
                            (V[L[n].group][D[F][o]] = f[l][S]),
                            (l += 1)));
                  else if (s._orderRules && s._orderRules.length > 0)
                    E = f.concat(f[0]);
                  else {
                    (f = f.sort(W)), E.push(f[0]), (P = 0);
                    do {
                      P = I(f, E, P);
                    } while (
                      E.length <= f.length &&
                      (E[0].x !== E[E.length - 1].x ||
                        E[0].y !== E[E.length - 1].y)
                    );
                  }
                  (x = x.reverse()),
                    (k = R(r, "_previousOrigin")(E)),
                    (b = R(
                      "step-after" === r
                        ? "step-before"
                        : "step-before" === r
                        ? "step-after"
                        : r,
                      "_previousOrigin"
                    )(x)),
                    (C =
                      -1 ===
                      (w = R("linear", "_previousOrigin")(E)).indexOf("L")
                        ? void 0
                        : w.indexOf("L")),
                    (L[n].entry =
                      k +
                      (b && b.length > 0 ? "L" + b.substring(1) : "") +
                      (w && w.length > 0 ? "L" + w.substring(1, C) : 0)),
                    (k = R(r)(E)),
                    (b = R(
                      "step-after" === r
                        ? "step-before"
                        : "step-before" === r
                        ? "step-after"
                        : r
                    )(x)),
                    (C =
                      -1 === (w = R("linear")(E)).indexOf("L")
                        ? void 0
                        : w.indexOf("L")),
                    (L[n].update =
                      k +
                      (b && b.length > 0 ? "L" + b.substring(1) : "") +
                      (w && w.length > 0 ? "L" + w.substring(1, C) : 0)),
                    (k = R(r, "_origin")(E)),
                    (b = R(
                      "step-after" === r
                        ? "step-before"
                        : "step-before" === r
                        ? "step-after"
                        : r,
                      "_origin"
                    )(x)),
                    (C =
                      -1 === (w = R("linear", "_origin")(E)).indexOf("L")
                        ? void 0
                        : w.indexOf("L")),
                    (L[n].exit =
                      k +
                      (b && b.length > 0 ? "L" + b.substring(1) : "") +
                      (w && w.length > 0 ? "L" + w.substring(1, C) : 0)),
                    (L[n].color = i.getColor(
                      L[n].key.length > 0
                        ? L[n].key[L[n].key.length - 1]
                        : "All"
                    )),
                    (L[n].css = i.getClass(
                      L[n].key.length > 0
                        ? L[n].key[L[n].key.length - 1]
                        : "All"
                    ));
                }
                i._tooltipGroup && i._tooltipGroup.remove(),
                  (d = (T = s.shapes
                    ? s.shapes.data(L, function (t) {
                        return t.key;
                      })
                    : s._group.selectAll("." + O).data(L, function (t) {
                        return t.key;
                      }))
                    .enter()
                    .append("path")
                    .attr("id", function (t) {
                      return e._createClass([t.key]);
                    })
                    .attr("class", function (t) {
                      return (
                        O +
                        " dimple-line " +
                        t.keyString +
                        " " +
                        i.customClassList.areaSeries +
                        " " +
                        t.css
                      );
                    })
                    .attr("d", function (t) {
                      return t.entry;
                    })
                    .call(function (t) {
                      i.noFormats ||
                        t
                          .attr("opacity", function (t) {
                            return A ? 1 : t.color.opacity;
                          })
                          .style("fill", function (t) {
                            return A
                              ? "url(#" +
                                  e._createClass([
                                    "fill-area-gradient-" + t.keyString,
                                  ]) +
                                  ")"
                              : t.color.fill;
                          })
                          .style("stroke", function (t) {
                            return A
                              ? "url(#" +
                                  e._createClass([
                                    "stroke-area-gradient-" + t.keyString,
                                  ]) +
                                  ")"
                              : t.color.stroke;
                          })
                          .style("stroke-width", s.lineWeight);
                    })
                    .each(function (t) {
                      (t.markerData = t.data), G(t, this);
                    })),
                  (p = i
                    ._handleTransition(T.merge(d), a, i)
                    .attr("d", function (t) {
                      return t.update;
                    })
                    .each(function (t) {
                      (t.markerData = t.data), G(t, this);
                    })),
                  (g = i
                    ._handleTransition(T.exit(), a, i)
                    .attr("d", function (t) {
                      return t.exit;
                    })
                    .each(function (t) {
                      (t.markerData = []), G(t, this);
                    })),
                  e._postDrawHandling(s, p, g, a),
                  (s.shapes = T.merge(d));
              },
            }),
            (e.plot.bar = {
              stacked: !0,
              grouped: !1,
              supportedAxes: ["x", "y", "c"],
              draw: function (t, i, s) {
                var a,
                  r,
                  n,
                  o = i._positionData,
                  l = null,
                  h = ["dimple-series-" + t.series.indexOf(i), "dimple-bar"],
                  c = !i._isStacked() && i.x._hasMeasure(),
                  u = !i._isStacked() && i.y._hasMeasure(),
                  d = "none";
                i.x._hasCategories() && i.y._hasCategories()
                  ? (d = "both")
                  : i.x._hasCategories()
                  ? (d = "x")
                  : i.y._hasCategories() && (d = "y"),
                  t._tooltipGroup && t._tooltipGroup.remove(),
                  (a = (l = i.shapes
                    ? i.shapes.data(o, function (t) {
                        return t.key;
                      })
                    : i._group
                        .selectAll("." + h.join("."))
                        .data(o, function (t) {
                          return t.key;
                        }))
                    .enter()
                    .append("rect")
                    .attr("id", function (t) {
                      return e._createClass([t.key]);
                    })
                    .attr("class", function (i) {
                      var s = [];
                      return (
                        (s = (s = (s = s.concat(i.aggField)).concat(
                          i.xField
                        )).concat(i.yField)),
                        h.join(" ") +
                          " " +
                          e._createClass(s) +
                          " " +
                          t.customClassList.barSeries +
                          " " +
                          e._helpers.css(i, t)
                      );
                    })
                    .attr("x", function (s) {
                      var a = i.x._previousOrigin;
                      return (
                        "x" === d
                          ? (a = e._helpers.x(s, t, i))
                          : "both" === d && (a = e._helpers.cx(s, t, i)),
                        a
                      );
                    })
                    .attr("y", function (s) {
                      var a = i.y._previousOrigin;
                      return (
                        "y" === d
                          ? (a = e._helpers.y(s, t, i))
                          : "both" === d && (a = e._helpers.cy(s, t, i)),
                        a
                      );
                    })
                    .attr("width", function (s) {
                      return "x" === d ? e._helpers.width(s, t, i) : 0;
                    })
                    .attr("height", function (s) {
                      return "y" === d ? e._helpers.height(s, t, i) : 0;
                    })
                    .on("mouseover", function (s) {
                      e._showBarTooltip(s, this, t, i);
                    })
                    .on("mouseleave", function (s) {
                      e._removeTooltip(s, this, t, i);
                    })
                    .call(function (s) {
                      t.noFormats ||
                        s
                          .attr("opacity", function (s) {
                            return e._helpers.opacity(s, t, i);
                          })
                          .style("fill", function (s) {
                            return e._helpers.fill(s, t, i);
                          })
                          .style("stroke", function (s) {
                            return e._helpers.stroke(s, t, i);
                          });
                    })),
                  (r = t
                    ._handleTransition(l.merge(a), s, t, i)
                    .attr("x", function (s) {
                      return c
                        ? e._helpers.cx(s, t, i) - i.x.floatingBarWidth / 2
                        : e._helpers.x(s, t, i);
                    })
                    .attr("y", function (s) {
                      return u
                        ? e._helpers.cy(s, t, i) - i.y.floatingBarWidth / 2
                        : e._helpers.y(s, t, i);
                    })
                    .attr("width", function (s) {
                      return c
                        ? i.x.floatingBarWidth
                        : e._helpers.width(s, t, i);
                    })
                    .attr("height", function (s) {
                      return u
                        ? i.y.floatingBarWidth
                        : e._helpers.height(s, t, i);
                    })
                    .call(function (s) {
                      t.noFormats ||
                        s
                          .attr("fill", function (s) {
                            return e._helpers.fill(s, t, i);
                          })
                          .attr("stroke", function (s) {
                            return e._helpers.stroke(s, t, i);
                          });
                    })),
                  (n = t
                    ._handleTransition(l.exit(), s, t, i)
                    .attr("x", function (s) {
                      var a = i.x._origin;
                      return (
                        "x" === d
                          ? (a = e._helpers.x(s, t, i))
                          : "both" === d && (a = e._helpers.cx(s, t, i)),
                        a
                      );
                    })
                    .attr("y", function (s) {
                      var a = i.y._origin;
                      return (
                        "y" === d
                          ? (a = e._helpers.y(s, t, i))
                          : "both" === d && (a = e._helpers.cy(s, t, i)),
                        a
                      );
                    })
                    .attr("width", function (s) {
                      return "x" === d ? e._helpers.width(s, t, i) : 0;
                    })
                    .attr("height", function (s) {
                      return "y" === d ? e._helpers.height(s, t, i) : 0;
                    })),
                  e._postDrawHandling(i, r, n, s),
                  (i.shapes = i._group.selectAll("." + h.join(".")));
              },
            }),
            (e.plot.bubble = {
              stacked: !1,
              grouped: !1,
              supportedAxes: ["x", "y", "z", "c"],
              draw: function (t, i, s) {
                var a,
                  r,
                  n,
                  o = i._positionData,
                  l = null,
                  h = ["dimple-series-" + t.series.indexOf(i), "dimple-bubble"];
                t._tooltipGroup && t._tooltipGroup.remove(),
                  (a = (l = i.shapes
                    ? i.shapes.data(o, function (t) {
                        return t.key;
                      })
                    : i._group
                        .selectAll("." + h.join("."))
                        .data(o, function (t) {
                          return t.key;
                        }))
                    .enter()
                    .append("circle")
                    .attr("id", function (t) {
                      return e._createClass([t.key]);
                    })
                    .attr("class", function (i) {
                      var s = [];
                      return (
                        (s = (s = (s = (s = s.concat(i.aggField)).concat(
                          i.xField
                        )).concat(i.yField)).concat(i.zField)),
                        h.join(" ") +
                          " " +
                          e._createClass(s) +
                          " " +
                          t.customClassList.bubbleSeries +
                          " " +
                          e._helpers.css(i, t)
                      );
                    })
                    .attr("cx", function (s) {
                      return i.x._hasCategories()
                        ? e._helpers.cx(s, t, i)
                        : i.x._previousOrigin;
                    })
                    .attr("cy", function (s) {
                      return i.y._hasCategories()
                        ? e._helpers.cy(s, t, i)
                        : i.y._previousOrigin;
                    })
                    .attr("r", 0)
                    .on("mouseover", function (s) {
                      e._showPointTooltip(s, this, t, i);
                    })
                    .on("mouseleave", function (s) {
                      e._removeTooltip(s, this, t, i);
                    })
                    .call(function (s) {
                      t.noFormats ||
                        s
                          .attr("opacity", function (s) {
                            return e._helpers.opacity(s, t, i);
                          })
                          .style("fill", function (s) {
                            return e._helpers.fill(s, t, i);
                          })
                          .style("stroke", function (s) {
                            return e._helpers.stroke(s, t, i);
                          });
                    })),
                  (r = t
                    ._handleTransition(l.merge(a), s, t, i)
                    .attr("cx", function (s) {
                      return e._helpers.cx(s, t, i);
                    })
                    .attr("cy", function (s) {
                      return e._helpers.cy(s, t, i);
                    })
                    .attr("r", function (s) {
                      return e._helpers.r(s, t, i);
                    })
                    .call(function (s) {
                      t.noFormats ||
                        s
                          .attr("fill", function (s) {
                            return e._helpers.fill(s, t, i);
                          })
                          .attr("stroke", function (s) {
                            return e._helpers.stroke(s, t, i);
                          });
                    })),
                  (n = t
                    ._handleTransition(l.exit(), s, t, i)
                    .attr("r", 0)
                    .attr("cx", function (s) {
                      return i.x._hasCategories()
                        ? e._helpers.cx(s, t, i)
                        : i.x._origin;
                    })
                    .attr("cy", function (s) {
                      return i.y._hasCategories()
                        ? e._helpers.cy(s, t, i)
                        : i.y._origin;
                    })),
                  e._postDrawHandling(i, r, n, s),
                  (i.shapes = i._group.selectAll("." + h.join(".")));
              },
            }),
            (e.plot.line = {
              stacked: !1,
              grouped: !0,
              supportedAxes: ["x", "y", "c"],
              draw: function (i, s, a) {
                var r,
                  n,
                  o,
                  l,
                  h,
                  c,
                  u,
                  d,
                  p,
                  g,
                  _,
                  f = s._positionData,
                  x = [],
                  y = null,
                  m = "dimple-series-" + i.series.indexOf(s),
                  v = s.x._hasCategories() || s.y._hasCategories() ? 0 : 1,
                  F = !1,
                  k = function (r, n) {
                    e._drawMarkers(
                      r,
                      i,
                      s,
                      a,
                      m,
                      F,
                      function (i, s, a, r) {
                        t.select(s).style("opacity", 1),
                          e._showPointTooltip(i, s, a, r);
                      },
                      (function (i) {
                        return function (s, a, r, n) {
                          t
                            .select(a)
                            .style(
                              "opacity",
                              n.lineMarkers || i.data.length < 2
                                ? e._helpers.opacity(s, r, n)
                                : 0
                            ),
                            e._removeTooltip(s, a, r, n);
                        };
                      })(r),
                      n
                    );
                  },
                  b = function (t, a) {
                    var r;
                    return (
                      "step" === s.interpolation && s[t]._hasCategories()
                        ? ((s.barGap = 0),
                          (s.clusterBarGap = 0),
                          (r =
                            e._helpers[t](a, i, s) +
                            ("y" === t ? e._helpers.height(a, i, s) : 0)))
                        : (r = e._helpers["c" + t](a, i, s)),
                      parseFloat(r.toFixed(1))
                    );
                  },
                  w = function (i, a) {
                    var r = t
                      .line()
                      .x(function (t) {
                        return s.x._hasCategories() || !a ? t.x : s.x[a];
                      })
                      .y(function (t) {
                        return s.y._hasCategories() || !a ? t.y : s.y[a];
                      });
                    return e._interpolate(r, i), r;
                  };
                for (
                  r =
                    "step" === s.interpolation ? "step-after" : s.interpolation,
                    _ = e._getSeriesOrder(s.data || i.data, s),
                    s.c &&
                      ((s.x._hasCategories() && s.y._hasMeasure()) ||
                        (s.y._hasCategories() && s.x._hasMeasure())) &&
                      (F = !0),
                    n = 0;
                  n < f.length;
                  n += 1
                ) {
                  for (h = [], u = -1, l = v; l < f[n].aggField.length; l += 1)
                    h.push(f[n].aggField[l]);
                  for (c = e._createClass(h), l = 0; l < x.length; l += 1)
                    if (x[l].keyString === c) {
                      u = l;
                      break;
                    }
                  -1 === u &&
                    ((u = x.length),
                    x.push({
                      key: h,
                      keyString: c,
                      color: "white",
                      data: [],
                      markerData: [],
                      points: [],
                      line: {},
                      entry: {},
                      exit: {},
                    })),
                    x[u].data.push(f[n]);
                }
                for (
                  _ &&
                    x.sort(function (t, i) {
                      return e._arrayIndexCompare(_, t.key, i.key);
                    }),
                    n = 0;
                  n < x.length;
                  n += 1
                ) {
                  for (
                    x[n].data.sort(e._getSeriesSortPredicate(i, s, _)),
                      F &&
                        e._addGradient(
                          x[n].key,
                          "fill-line-gradient-" + x[n].keyString,
                          s.x._hasCategories() ? s.x : s.y,
                          f,
                          i,
                          a,
                          "fill"
                        ),
                      o = 0;
                    o < x[n].data.length;
                    o += 1
                  )
                    x[n].points.push({
                      x: b("x", x[n].data[o]),
                      y: b("y", x[n].data[o]),
                    });
                  "step" === s.interpolation &&
                    x[n].points.length > 1 &&
                    (s.x._hasCategories()
                      ? x[n].points.push({
                          x:
                            2 * x[n].points[x[n].points.length - 1].x -
                            x[n].points[x[n].points.length - 2].x,
                          y: x[n].points[x[n].points.length - 1].y,
                        })
                      : s.y._hasCategories() &&
                        (x[n].points = [
                          {
                            x: x[n].points[0].x,
                            y: 2 * x[n].points[0].y - x[n].points[1].y,
                          },
                        ].concat(x[n].points))),
                    x &&
                      x[n] &&
                      x[n].points &&
                      1 === x[n].points.length &&
                      x[n].points.push({
                        x: x[n].points[0].x,
                        y: x[n].points[0].y,
                      }),
                    (x[n].entry = w(r, "_previousOrigin")(x[n].points)),
                    (x[n].update = w(r)(x[n].points)),
                    (x[n].exit = w(r, "_origin")(x[n].points)),
                    (x[n].color = i.getColor(
                      x[n].key.length > 0
                        ? x[n].key[x[n].key.length - 1]
                        : "All"
                    )),
                    (x[n].css = i.getClass(
                      x[n].key.length > 0
                        ? x[n].key[x[n].key.length - 1]
                        : "All"
                    ));
                }
                i._tooltipGroup && i._tooltipGroup.remove(),
                  (d = (y = s.shapes
                    ? s.shapes.data(x, function (t) {
                        return t.key;
                      })
                    : s._group.selectAll("." + m).data(x, function (t) {
                        return t.key;
                      }))
                    .enter()
                    .append("path")
                    .attr("id", function (t) {
                      return e._createClass([t.key]);
                    })
                    .attr("class", function (t) {
                      return (
                        m +
                        " dimple-line " +
                        t.keyString +
                        " " +
                        i.customClassList.lineSeries +
                        " " +
                        t.css
                      );
                    })
                    .attr("d", function (t) {
                      return t.entry;
                    })
                    .call(function (t) {
                      i.noFormats ||
                        t
                          .attr("opacity", function (t) {
                            return F ? 1 : t.color.opacity;
                          })
                          .style("fill", "none")
                          .style("stroke", function (t) {
                            return F
                              ? "url(#" +
                                  e._createClass([
                                    "fill-line-gradient-" + t.keyString,
                                  ]) +
                                  ")"
                              : t.color.stroke;
                          })
                          .style("stroke-width", s.lineWeight);
                    })
                    .each(function (t) {
                      (t.markerData = t.data), k(t, this);
                    })),
                  (p = i
                    ._handleTransition(y.merge(d), a, i)
                    .attr("d", function (t) {
                      return t.update;
                    })
                    .each(function (t) {
                      (t.markerData = t.data), k(t, this);
                    })),
                  (g = i
                    ._handleTransition(y.exit(), a, i)
                    .attr("d", function (t) {
                      return t.exit;
                    })
                    .each(function (t) {
                      (t.markerData = []), k(t, this);
                    })),
                  e._postDrawHandling(s, p, g, a),
                  (s.shapes = y.merge(d));
              },
            }),
            (e.plot.pie = {
              stacked: !1,
              grouped: !1,
              supportedAxes: ["x", "y", "c", "z", "p"],
              draw: function (i, s, a) {
                var r,
                  n,
                  o,
                  l = s._positionData,
                  h = null,
                  c = ["dimple-series-" + i.series.indexOf(s), "dimple-pie"],
                  u = function (t) {
                    return s.x && s.y
                      ? e._helpers.r(t, i, s)
                      : i._widthPixels() < i._heightPixels()
                      ? i._widthPixels() / 2
                      : i._heightPixels() / 2;
                  },
                  d = function (t) {
                    var i = u(t);
                    return (
                      s.outerRadius && (i = e._parsePosition(s.outerRadius, i)),
                      Math.max(i, 0)
                    );
                  },
                  p = function (t) {
                    var i = 0;
                    return (
                      s.innerRadius &&
                        (i = e._parsePosition(s.innerRadius, u(t))),
                      Math.max(i, 0)
                    );
                  },
                  g = function (e) {
                    return t.arc().innerRadius(p(e)).outerRadius(d(e))(e);
                  },
                  _ = function (e) {
                    (e.innerRadius = p(e)), (e.outerRadius = d(e));
                    var i,
                      s = t.interpolate(this._current, e);
                    return (
                      (i = t
                        .arc()
                        .innerRadius(function (t) {
                          return t.innerRadius;
                        })
                        .outerRadius(function (t) {
                          return t.outerRadius;
                        })),
                      (this._current = s(0)),
                      function (t) {
                        return i(s(t));
                      }
                    );
                  },
                  f = function (t) {
                    return function (a) {
                      var r, n;
                      return (
                        s.x && s.y
                          ? ((r =
                              !t || s.x._hasCategories()
                                ? e._helpers.cx(a, i, s)
                                : s.x._previousOrigin),
                            (n =
                              !t || s.y._hasCategories()
                                ? e._helpers.cy(a, i, s)
                                : s.y._previousOrigin))
                          : ((r = i._xPixels() + i._widthPixels() / 2),
                            (n = i._yPixels() + i._heightPixels() / 2)),
                        "translate(" + r + "," + n + ")"
                      );
                    };
                  };
                i._tooltipGroup && i._tooltipGroup.remove(),
                  (r = (h = s.shapes
                    ? s.shapes.data(l, function (t) {
                        return t.key;
                      })
                    : s._group
                        .selectAll("." + c.join("."))
                        .data(l, function (t) {
                          return t.key;
                        }))
                    .enter()
                    .append("path")
                    .attr("id", function (t) {
                      return e._createClass([t.key]);
                    })
                    .attr("class", function (t) {
                      var s = [];
                      return (
                        (s = (s = s.concat(t.aggField)).concat(t.pField)),
                        c.join(" ") +
                          " " +
                          e._createClass(s) +
                          " " +
                          i.customClassList.pieSeries +
                          " " +
                          e._helpers.css(t, i)
                      );
                    })
                    .attr("d", g)
                    .on("mouseover", function (t) {
                      e._showBarTooltip(t, this, i, s);
                    })
                    .on("mouseleave", function (t) {
                      e._removeTooltip(t, this, i, s);
                    })
                    .call(function (t) {
                      i.noFormats ||
                        t
                          .attr("opacity", function (t) {
                            return e._helpers.opacity(t, i, s);
                          })
                          .style("fill", function (t) {
                            return e._helpers.fill(t, i, s);
                          })
                          .style("stroke", function (t) {
                            return e._helpers.stroke(t, i, s);
                          });
                    })
                    .attr("transform", f(!0))
                    .each(function (t) {
                      (this._current = t),
                        (t.innerRadius = p(t)),
                        (t.outerRadius = d(t));
                    })),
                  (n = i
                    ._handleTransition(h.merge(r), a, i, s)
                    .call(function (t) {
                      a && a > 0 ? t.attrTween("d", _) : t.attr("d", g),
                        i.noFormats ||
                          t
                            .attr("fill", function (t) {
                              return e._helpers.fill(t, i, s);
                            })
                            .attr("stroke", function (t) {
                              return e._helpers.stroke(t, i, s);
                            });
                    })
                    .attr("transform", f(!1))),
                  (o = i
                    ._handleTransition(h.exit(), a, i, s)
                    .attr("transform", f(!0))
                    .attr("d", g)),
                  e._postDrawHandling(s, n, o, a),
                  (s.shapes = s._group.selectAll("." + c.join(".")));
              },
            }),
            (e._addGradient = function (t, i, s, a, r, n, o) {
              var l = [].concat(t),
                h = r.svg.select("#" + e._createClass([i])),
                c = [],
                u = s.position + "Field",
                d = !0,
                p = [];
              a.forEach(function (t) {
                -1 === c.indexOf(t[u]) &&
                  t.aggField.join("_") === l.join("_") &&
                  c.push(t[u]);
              }, this),
                (c = c.sort(function (t, e) {
                  return s._scale(t) - s._scale(e);
                })),
                null === h.node() &&
                  ((d = !1),
                  (h = r.svg
                    .append("defs")
                    .append("linearGradient")
                    .attr("id", e._createClass([i]))
                    .attr("gradientUnits", "userSpaceOnUse")
                    .attr(
                      "x1",
                      "x" === s.position
                        ? s._scale(c[0]) + r._widthPixels() / c.length / 2
                        : 0
                    )
                    .attr(
                      "y1",
                      "y" === s.position
                        ? s._scale(c[0]) - r._heightPixels() / c.length / 2
                        : 0
                    )
                    .attr(
                      "x2",
                      "x" === s.position
                        ? s._scale(c[c.length - 1]) +
                            r._widthPixels() / c.length / 2
                        : 0
                    )
                    .attr(
                      "y2",
                      "y" === s.position
                        ? s._scale(c[c.length - 1]) -
                            r._heightPixels() / c.length / 2
                        : 0
                    ))),
                c.forEach(function (t, e) {
                  var i = {},
                    s = 0;
                  for (s = 0; s < a.length; s += 1)
                    if (
                      a[s].aggField.join("_") === l.join("_") &&
                      a[s][u].join("_") === t.join("_")
                    ) {
                      i = a[s];
                      break;
                    }
                  p.push({
                    offset: Math.round((e / (c.length - 1)) * 100) + "%",
                    color: i[o],
                  });
                }, this),
                d
                  ? r
                      ._handleTransition(h.selectAll("stop").data(p), n, r)
                      .attr("offset", function (t) {
                        return t.offset;
                      })
                      .attr("stop-color", function (t) {
                        return t.color;
                      })
                  : h
                      .selectAll("stop")
                      .data(p)
                      .enter()
                      .append("stop")
                      .attr("offset", function (t) {
                        return t.offset;
                      })
                      .attr("stop-color", function (t) {
                        return t.color;
                      });
            }),
            (e._arrayIndexCompare = function (t, e, i) {
              var s, a, r, n, o, l;
              for (a = 0; a < t.length; a += 1) {
                for (
                  n = !0, o = !0, l = [].concat(t[a]), r = 0;
                  r < e.length;
                  r += 1
                )
                  n = n && e[r] === l[r];
                for (r = 0; r < i.length; r += 1) o = o && i[r] === l[r];
                if (n || o) {
                  s = n && o ? 0 : n ? -1 : 1;
                  break;
                }
              }
              return s;
            }),
            (e._createClass = function (t) {
              var e,
                i,
                s = [];
              if (
                ((i = function (t) {
                  var e = t.charCodeAt(0),
                    i = "-";
                  return e >= 65 && e <= 90 && (i = t.toLowerCase()), i;
                }),
                t.length > 0)
              )
                for (e = 0; e < t.length; e += 1)
                  t[e] &&
                    s.push(
                      "dimple-" + t[e].toString().replace(/[^a-z0-9]/g, i)
                    );
              else s = ["dimple-all"];
              return s.join(" ");
            }),
            (e._drawMarkerBacks = function (i, s, a, r, n, o) {
              var l,
                h,
                c,
                u = ["dimple-marker-back", n, i.keyString];
              a.lineMarkers &&
                ((l =
                  null === a._markerBacks ||
                  void 0 === a._markerBacks ||
                  void 0 === a._markerBacks[i.keyString]
                    ? a._group.selectAll("." + u.join(".")).data(i.markerData)
                    : a._markerBacks[i.keyString].data(i.markerData, function (
                        t
                      ) {
                        return t.key;
                      })),
                (c =
                  o.nextSibling && o.nextSibling.id
                    ? l.enter().insert("circle", "#" + o.nextSibling.id)
                    : l.enter().append("circle"))
                  .attr("id", function (t) {
                    return e._createClass([t.key + " Marker Back"]);
                  })
                  .attr("class", function (t) {
                    var i = [];
                    return (
                      a.x._hasCategories() && (i = i.concat(t.xField)),
                      a.y._hasCategories() && (i = i.concat(t.yField)),
                      e._createClass(i) + " " + u.join(" ")
                    );
                  })
                  .attr("cx", function (t) {
                    return a.x._hasCategories()
                      ? e._helpers.cx(t, s, a)
                      : a.x._previousOrigin;
                  })
                  .attr("cy", function (t) {
                    return a.y._hasCategories()
                      ? e._helpers.cy(t, s, a)
                      : a.y._previousOrigin;
                  })
                  .attr("r", 0)
                  .attr("fill", "white")
                  .attr("stroke", "none"),
                s
                  ._handleTransition(l.merge(c), r, s)
                  .attr("cx", function (t) {
                    return e._helpers.cx(t, s, a);
                  })
                  .attr("cy", function (t) {
                    return e._helpers.cy(t, s, a);
                  })
                  .attr("r", 2 + a.lineWeight),
                (h = s
                  ._handleTransition(l.exit(), r, s)
                  .attr("cx", function (t) {
                    return a.x._hasCategories()
                      ? e._helpers.cx(t, s, a)
                      : a.x._origin;
                  })
                  .attr("cy", function (t) {
                    return a.y._hasCategories()
                      ? e._helpers.cy(t, s, a)
                      : a.y._origin;
                  })
                  .attr("r", 0)),
                0 === r
                  ? h.remove()
                  : h.each("end", function () {
                      t.select(this).remove();
                    }),
                (void 0 !== a._markerBacks && null !== a._markerBacks) ||
                  (a._markerBacks = {}),
                (a._markerBacks[i.keyString] = l.merge(c)));
            }),
            (e._drawMarkers = function (i, s, a, r, n, o, l, h, c) {
              var u,
                d,
                p,
                g = ["dimple-marker", n, i.keyString];
              (u =
                null === a._markers ||
                void 0 === a._markers ||
                void 0 === a._markers[i.keyString]
                  ? a._group.selectAll("." + g.join(".")).data(i.markerData)
                  : a._markers[i.keyString].data(i.markerData, function (t) {
                      return t.key;
                    })),
                (p =
                  c.nextSibling && c.nextSibling.id
                    ? u.enter().insert("circle", "#" + c.nextSibling.id)
                    : u.enter().append("circle"))
                  .attr("id", function (t) {
                    return e._createClass([t.key + " Marker"]);
                  })
                  .attr("class", function (t) {
                    var i = [],
                      r = s.getClass(
                        t.aggField.length > 0
                          ? t.aggField[t.aggField.length - 1]
                          : "All"
                      );
                    return (
                      a.x._hasCategories() && (i = i.concat(t.xField)),
                      a.y._hasCategories() && (i = i.concat(t.yField)),
                      e._createClass(i) +
                        " " +
                        g.join(" ") +
                        " " +
                        s.customClassList.lineMarker +
                        " " +
                        r
                    );
                  })
                  .on("mouseover", function (t) {
                    l(t, this, s, a);
                  })
                  .on("mouseleave", function (t) {
                    h(t, this, s, a);
                  })
                  .attr("cx", function (t) {
                    return a.x._hasCategories()
                      ? e._helpers.cx(t, s, a)
                      : a.x._previousOrigin;
                  })
                  .attr("cy", function (t) {
                    return a.y._hasCategories()
                      ? e._helpers.cy(t, s, a)
                      : a.y._previousOrigin;
                  })
                  .attr("r", 0)
                  .attr(
                    "opacity",
                    a.lineMarkers || i.data.length < 2 ? i.color.opacity : 0
                  )
                  .call(function (t) {
                    s.noFormats ||
                      t
                        .attr("fill", "white")
                        .style("stroke-width", a.lineWeight)
                        .attr("stroke", function (t) {
                          return o ? e._helpers.fill(t, s, a) : i.color.stroke;
                        });
                  }),
                s
                  ._handleTransition(u.merge(p), r, s)
                  .attr("cx", function (t) {
                    return e._helpers.cx(t, s, a);
                  })
                  .attr("cy", function (t) {
                    return e._helpers.cy(t, s, a);
                  })
                  .attr("r", 2 + a.lineWeight)
                  .attr(
                    "opacity",
                    a.lineMarkers || i.data.length < 2 ? i.color.opacity : 0
                  )
                  .call(function (t) {
                    s.noFormats ||
                      t
                        .attr("fill", "white")
                        .style("stroke-width", a.lineWeight)
                        .attr("stroke", function (t) {
                          return o ? e._helpers.fill(t, s, a) : i.color.stroke;
                        });
                  }),
                (d = s
                  ._handleTransition(u.exit(), r, s)
                  .attr("cx", function (t) {
                    return a.x._hasCategories()
                      ? e._helpers.cx(t, s, a)
                      : a.x._origin;
                  })
                  .attr("cy", function (t) {
                    return a.y._hasCategories()
                      ? e._helpers.cy(t, s, a)
                      : a.y._origin;
                  })
                  .attr("r", 0)),
                0 === r
                  ? d.remove()
                  : d.each("end", function () {
                      t.select(this).remove();
                    }),
                (void 0 !== a._markers && null !== a._markers) ||
                  (a._markers = {}),
                (a._markers[i.keyString] = u.merge(p)),
                e._drawMarkerBacks(i, s, a, r, n, c);
            }),
            (e._ease = function (e, i) {
              if (
                e &&
                i &&
                "[object String]" === Object.prototype.toString.call(i)
              ) {
                switch (i) {
                  case "linear":
                    i = t.easeLinear;
                    break;
                  case "poly":
                    i = t.easePoly;
                    break;
                  case "quad":
                    i = t.easeQuad;
                    break;
                  case "cubic":
                    i = t.easeCubic;
                    break;
                  case "sin":
                    i = t.easeSin;
                    break;
                  case "exp":
                    i = t.easeExp;
                    break;
                  case "circle":
                    i = t.easeCircle;
                    break;
                  case "elastic":
                    i = t.easeElastic;
                    break;
                  case "back":
                    i = t.easeBack;
                    break;
                  case "bounce":
                    i = t.easeBounce;
                }
                e.ease(i);
              }
            }),
            (e._getOrderedList = function (t, i, s) {
              var a,
                r = [],
                n = [],
                o = [].concat(i),
                l = [].concat(i),
                h = [];
              return (
                null != s && (h = h.concat(s)),
                (h = h.concat({ ordering: o, desc: !1 })).forEach(function (e) {
                  var i,
                    s = [],
                    a = [];
                  if ("function" == typeof e.ordering) {
                    if (t && t.length > 0)
                      for (i in t[0])
                        t[0].hasOwnProperty(i) &&
                          -1 === l.indexOf(i) &&
                          l.push(i);
                  } else if (e.ordering instanceof Array) {
                    for (i = 0; i < e.ordering.length; i += 1)
                      t &&
                        t.length > 0 &&
                        t[0].hasOwnProperty(e.ordering[i]) &&
                        a.push(e.ordering[i]),
                        s.push(e.ordering[i]);
                    a.length > s.length / 2 ? l.concat(a) : (e.values = s);
                  } else l.push(e.ordering);
                }, this),
                (a = e._rollUp(t, o, l)),
                h.length >= 1 &&
                  (h.forEach(function (t) {
                    var e = null !== t.desc && void 0 !== t.desc && t.desc,
                      i = t.ordering,
                      s = [],
                      a = function (t) {
                        var e,
                          i = 0;
                        for (e = 0; e < t.length; e += 1) {
                          if (isNaN(t[e])) {
                            i = void 0;
                            break;
                          }
                          i += parseFloat(t[e]);
                        }
                        return i;
                      };
                    "function" == typeof i
                      ? r.push(function (t, s) {
                          return (e ? -1 : 1) * i(t, s);
                        })
                      : t.values && t.values.length > 0
                      ? (t.values.forEach(function (t) {
                          s.push([].concat(t).join("|"));
                        }, this),
                        r.push(function (t, i) {
                          var a,
                            r,
                            n,
                            l = "",
                            h = "";
                          for (n = 0; n < o.length; n += 1)
                            n > 0 && ((l += "|"), (h += "|")),
                              (l += t[o[n]]),
                              (h += i[o[n]]);
                          return (
                            (a = s.indexOf(l)),
                            (r = s.indexOf(h)),
                            (a = a < 0 ? (e ? -1 : s.length) : a),
                            (r = r < 0 ? (e ? -1 : s.length) : r),
                            (e ? -1 : 1) * (a - r)
                          );
                        }))
                      : [].concat(t.ordering).forEach(function (t) {
                          r.push(function (i, s) {
                            var r = 0;
                            return (
                              void 0 !== i[t] &&
                                void 0 !== s[t] &&
                                (r = (function (t, e) {
                                  var i = 0,
                                    s = a(t),
                                    r = a(e);
                                  return (
                                    isNaN(s) || isNaN(r)
                                      ? isNaN(Date.parse(t[0])) ||
                                        isNaN(Date.parse(e[0]))
                                        ? t[0] < e[0]
                                          ? (i = -1)
                                          : t[0] > e[0] && (i = 1)
                                        : (i =
                                            Date.parse(t[0]) - Date.parse(e[0]))
                                      : (i = parseFloat(s) - parseFloat(r)),
                                    i
                                  );
                                })([].concat(i[t]), [].concat(s[t]))),
                              (e ? -1 : 1) * r
                            );
                          });
                        });
                  }),
                  a.sort(function (t, e) {
                    for (var i = 0, s = 0; i < r.length && 0 === s; )
                      (s = r[i](t, e)), (i += 1);
                    return s;
                  }),
                  a.forEach(function (t) {
                    var e,
                      i = [];
                    if (1 === o.length) n.push(t[o[0]]);
                    else {
                      for (e = 0; e < o.length; e += 1) i.push(t[o[e]]);
                      n.push(i);
                    }
                  }, this)),
                n
              );
            }),
            (e._getSeriesOrder = function (t, i) {
              var s = [].concat(i._orderRules),
                a = i.categoryFields,
                r = [];
              return (
                null != a &&
                  a.length > 0 &&
                  (null !== i.c &&
                    void 0 !== i.c &&
                    i.c._hasMeasure() &&
                    s.push({ ordering: i.c.measure, desc: !0 }),
                  i.x._hasMeasure() &&
                    s.push({ ordering: i.x.measure, desc: !0 }),
                  i.y._hasMeasure() &&
                    s.push({ ordering: i.y.measure, desc: !0 }),
                  (r = e._getOrderedList(t, a, s))),
                r
              );
            }),
            (e._getSeriesSortPredicate = function (t, i, s) {
              return function (a, r) {
                var n = 0;
                return (
                  i.x._hasCategories() &&
                    (n = e._helpers.cx(a, t, i) - e._helpers.cx(r, t, i)),
                  0 === n &&
                    i.y._hasCategories() &&
                    (n = e._helpers.cy(a, t, i) - e._helpers.cy(r, t, i)),
                  0 === n &&
                    s &&
                    (n = e._arrayIndexCompare(s, a.aggField, r.aggField)),
                  n
                );
              };
            }),
            (e._helpers = {
              cx: function (t, i, s) {
                return null !== s.x.measure && void 0 !== s.x.measure
                  ? s.x._scale(t.cx)
                  : s.x._hasCategories() && s.x.categoryFields.length >= 2
                  ? s.x._scale(t.cx) +
                    e._helpers.xGap(i, s) +
                    (t.xOffset + 0.5) *
                      ((i._widthPixels() / s.x._max -
                        2 * e._helpers.xGap(i, s)) *
                        t.width)
                  : s.x._scale(t.cx) + i._widthPixels() / s.x._max / 2;
              },
              cy: function (t, i, s) {
                return null !== s.y.measure && void 0 !== s.y.measure
                  ? s.y._scale(t.cy)
                  : null !== s.y.categoryFields &&
                    void 0 !== s.y.categoryFields &&
                    s.y.categoryFields.length >= 2
                  ? s.y._scale(t.cy) -
                    i._heightPixels() / s.y._max +
                    e._helpers.yGap(i, s) +
                    (t.yOffset + 0.5) *
                      ((i._heightPixels() / s.y._max -
                        2 * e._helpers.yGap(i, s)) *
                        t.height)
                  : s.y._scale(t.cy) - i._heightPixels() / s.y._max / 2;
              },
              r: function (t, e, i) {
                var s = 0,
                  a = 1;
                return (
                  null === i.z || void 0 === i.z
                    ? (s = i.radius && "auto" !== i.radius ? i.radius : 5)
                    : (i.radius &&
                        "auto" !== i.radius &&
                        i.radius > 1 &&
                        (a = i.radius / i.z._scale(i.z._max)),
                      (s = i.z._hasMeasure()
                        ? i.z._scale(t.r) * a
                        : i.z._scale(e._heightPixels() / 100) * a)),
                  s
                );
              },
              xGap: function (t, e) {
                var i = 0;
                return (
                  (null === e.x.measure || void 0 === e.x.measure) &&
                    e.barGap > 0 &&
                    (i =
                      ((t._widthPixels() / e.x._max) *
                        (e.barGap > 0.99 ? 0.99 : e.barGap)) /
                      2),
                  i
                );
              },
              xClusterGap: function (t, i, s) {
                var a = 0;
                return (
                  null !== s.x.categoryFields &&
                    void 0 !== s.x.categoryFields &&
                    s.x.categoryFields.length >= 2 &&
                    s.clusterBarGap > 0 &&
                    !s.x._hasMeasure() &&
                    (a =
                      (t.width *
                        (i._widthPixels() / s.x._max -
                          2 * e._helpers.xGap(i, s)) *
                        (s.clusterBarGap > 0.99 ? 0.99 : s.clusterBarGap)) /
                      2),
                  a
                );
              },
              yGap: function (t, e) {
                var i = 0;
                return (
                  (null === e.y.measure || void 0 === e.y.measure) &&
                    e.barGap > 0 &&
                    (i =
                      ((t._heightPixels() / e.y._max) *
                        (e.barGap > 0.99 ? 0.99 : e.barGap)) /
                      2),
                  i
                );
              },
              yClusterGap: function (t, i, s) {
                var a = 0;
                return (
                  null !== s.y.categoryFields &&
                    void 0 !== s.y.categoryFields &&
                    s.y.categoryFields.length >= 2 &&
                    s.clusterBarGap > 0 &&
                    !s.y._hasMeasure() &&
                    (a =
                      (t.height *
                        (i._heightPixels() / s.y._max -
                          2 * e._helpers.yGap(i, s)) *
                        (s.clusterBarGap > 0.99 ? 0.99 : s.clusterBarGap)) /
                      2),
                  a
                );
              },
              x: function (t, i, s) {
                return s.x._hasTimeField()
                  ? s.x._scale(t.x) - e._helpers.width(t, i, s) / 2
                  : null !== s.x.measure && void 0 !== s.x.measure
                  ? s.x._scale(t.x)
                  : s.x._scale(t.x) +
                    e._helpers.xGap(i, s) +
                    t.xOffset *
                      (e._helpers.width(t, i, s) +
                        2 * e._helpers.xClusterGap(t, i, s)) +
                    e._helpers.xClusterGap(t, i, s);
              },
              y: function (t, i, s) {
                return s.y._hasTimeField()
                  ? s.y._scale(t.y) - e._helpers.height(t, i, s) / 2
                  : null !== s.y.measure && void 0 !== s.y.measure
                  ? s.y._scale(t.y)
                  : s.y._scale(t.y) -
                    i._heightPixels() / s.y._max +
                    e._helpers.yGap(i, s) +
                    t.yOffset *
                      (e._helpers.height(t, i, s) +
                        2 * e._helpers.yClusterGap(t, i, s)) +
                    e._helpers.yClusterGap(t, i, s);
              },
              width: function (t, i, s) {
                return null !== s.x.measure && void 0 !== s.x.measure
                  ? Math.abs(
                      s.x._scale(t.x < 0 ? t.x - t.width : t.x + t.width) -
                        s.x._scale(t.x)
                    )
                  : s.x._hasTimeField()
                  ? s.x.floatingBarWidth
                  : t.width *
                      (i._widthPixels() / s.x._max -
                        2 * e._helpers.xGap(i, s)) -
                    2 * e._helpers.xClusterGap(t, i, s);
              },
              height: function (t, i, s) {
                return s.y._hasTimeField()
                  ? s.y.floatingBarWidth
                  : null !== s.y.measure && void 0 !== s.y.measure
                  ? Math.abs(
                      s.y._scale(t.y) -
                        s.y._scale(t.y <= 0 ? t.y + t.height : t.y - t.height)
                    )
                  : t.height *
                      (i._heightPixels() / s.y._max -
                        2 * e._helpers.yGap(i, s)) -
                    2 * e._helpers.yClusterGap(t, i, s);
              },
              opacity: function (t, e, i) {
                return null !== i.c && void 0 !== i.c
                  ? t.opacity
                  : e.getColor(t.aggField.slice(-1)[0]).opacity;
              },
              fill: function (t, e, i) {
                return null !== i.c && void 0 !== i.c
                  ? t.fill
                  : e.getColor(t.aggField.slice(-1)[0]).fill;
              },
              stroke: function (t, e, i) {
                return null !== i.c && void 0 !== i.c
                  ? t.stroke
                  : e.getColor(t.aggField.slice(-1)[0]).stroke;
              },
              css: function (t, e) {
                return e.getClass(t.aggField.slice(-1)[0]);
              },
            }),
            (e._interpolate = function (e, i) {
              if (e && i) {
                if ("[object String]" === Object.prototype.toString.call(i))
                  switch (i) {
                    case "linear":
                      i = t.curveLinear;
                      break;
                    case "linear-closed":
                      i = t.curveLinearClosed;
                      break;
                    case "step":
                      i = t.curveStep;
                      break;
                    case "step-before":
                      i = t.curveStepBefore;
                      break;
                    case "step-after":
                      i = t.curveStepAfter;
                      break;
                    case "basis":
                      i = t.curveBasis;
                      break;
                    case "basis-open":
                      i = t.curveBasisOpen;
                      break;
                    case "basis-closed":
                      i = t.curveBasisClosed;
                      break;
                    case "bundle":
                      i = t.curveBundle;
                      break;
                    case "cardinal":
                      i = t.curveCardinal;
                      break;
                    case "cardinal-open":
                      i = t.curveCardinalOpen;
                      break;
                    case "cardinal-closed":
                      i = t.curveCardinalClosed;
                      break;
                    case "monotone":
                      i = t.curveMonotoneX;
                  }
                e.curve(i);
              }
            }),
            (e._parentHeight = function (t) {
              var e = t.getBoundingClientRect().height;
              return (!e || e < 0) && (e = t.clientHeight), e;
            }),
            (e._parentWidth = function (t) {
              var e = t.getBoundingClientRect().width;
              return (!e || e < 0) && (e = t.clientWidth), e;
            }),
            (e._parsePosition = function (t, e) {
              var i = 0;
              return (
                t &&
                  t
                    .toString()
                    .split(",")
                    .forEach(function (s) {
                      s &&
                        (isNaN(s)
                          ? "%" === s.slice(-1)
                            ? (i +=
                                e *
                                (parseFloat(s.slice(0, s.length - 1)) / 100))
                            : "px" === s.slice(-2)
                            ? (i += parseFloat(s.slice(0, s.length - 2)))
                            : (i = t)
                          : (i += parseFloat(s)));
                    }, this),
                i < 0 && (i = e + i),
                i
              );
            }),
            (e._parseXPosition = function (t, i) {
              return e._parsePosition(t, e._parentWidth(i));
            }),
            (e._parseYPosition = function (t, i) {
              return e._parsePosition(t, e._parentHeight(i));
            }),
            (e._postDrawHandling = function (t, e, i, s) {
              0 === s
                ? (e.each(function (e, i) {
                    t.afterDraw && t.afterDraw(this, e, i);
                  }),
                  i.remove())
                : (e.on("end", function (e, i) {
                    t.afterDraw && t.afterDraw(this, e, i);
                  }),
                  i.call(function () {
                    t.shapes && t.shapes.exit().remove();
                  }));
            }),
            (e._removeTooltip = function (t, e, i, s) {
              i._tooltipGroup && i._tooltipGroup.remove();
            }),
            (e._rollUp = function (t, e, i) {
              var s = [];
              return (
                (e = null != e ? [].concat(e) : []),
                t.forEach(function (t) {
                  var a = -1,
                    r = {},
                    n = !0;
                  s.forEach(function (i, s) {
                    -1 === a &&
                      ((n = !0),
                      e.forEach(function (e) {
                        n = n && t[e] === i[e];
                      }, this),
                      n && (a = s));
                  }, this),
                    -1 !== a
                      ? (r = s[a])
                      : (e.forEach(function (e) {
                          r[e] = t[e];
                        }, this),
                        s.push(r),
                        (a = s.length - 1)),
                    i.forEach(function (i) {
                      -1 === e.indexOf(i) &&
                        (void 0 === r[i] && (r[i] = []),
                        (r[i] = r[i].concat(t[i])));
                    }, this),
                    (s[a] = r);
                }, this),
                s
              );
            }),
            (e._showBarTooltip = function (e, i, s, a) {
              var r,
                n,
                o,
                l,
                h,
                c,
                u = t.select(i),
                d = u.node().getBBox().x,
                p = u.node().getBBox().y,
                g = u.node().getBBox().width,
                _ = u.node().getBBox().height,
                f = u.attr("opacity"),
                x = u.attr("fill"),
                y = a._dropLineOrigin(),
                m = t.rgb(
                  t.rgb(x).r + 0.6 * (255 - t.rgb(x).r),
                  t.rgb(x).g + 0.6 * (255 - t.rgb(x).g),
                  t.rgb(x).b + 0.6 * (255 - t.rgb(x).b)
                ),
                v = t.rgb(
                  t.rgb(x).r + 0.8 * (255 - t.rgb(x).r),
                  t.rgb(x).g + 0.8 * (255 - t.rgb(x).g),
                  t.rgb(x).b + 0.8 * (255 - t.rgb(x).b)
                ),
                F = a.getTooltipText(e),
                k = 0,
                b = 0,
                w = 0,
                C = function (t, e) {
                  var i = u.node().getCTM(),
                    a = s.svg.node().createSVGPoint();
                  return (a.x = t || 0), (a.y = e || 0), a.matrixTransform(i);
                };
              null !== s._tooltipGroup &&
                void 0 !== s._tooltipGroup &&
                s._tooltipGroup.remove(),
                (s._tooltipGroup = s.svg.append("g")),
                a.p ||
                  ((c = a._isStacked() ? 1 : g / 2),
                  a.x._hasCategories() ||
                    null === y.y ||
                    s._tooltipGroup
                      .append("line")
                      .attr(
                        "class",
                        "dimple-tooltip-dropline " +
                          s.customClassList.tooltipDropLine
                      )
                      .attr("x1", d < a.x._origin ? d + c : d + g - c)
                      .attr("y1", p < y.y ? p + _ : p)
                      .attr("x2", d < a.x._origin ? d + c : d + g - c)
                      .attr("y2", p < y.y ? p + _ : p)
                      .call(function (t) {
                        s.noFormats ||
                          t
                            .style("fill", "none")
                            .style("stroke", x)
                            .style("stroke-width", 2)
                            .style("stroke-dasharray", "3, 3")
                            .style("opacity", f);
                      })
                      .transition()
                      .delay(375)
                      .duration(375)
                      .ease(t.easeLinear)
                      .attr("y2", p < y.y ? y.y - 1 : y.y + 1),
                  (c = a._isStacked() ? 1 : _ / 2),
                  a.y._hasCategories() ||
                    null === y.x ||
                    s._tooltipGroup
                      .append("line")
                      .attr(
                        "class",
                        "dimple-tooltip-dropline " +
                          s.customClassList.tooltipDropLine
                      )
                      .attr("x1", d < y.x ? d + g : d)
                      .attr("y1", p < a.y._origin ? p + c : p + _ - c)
                      .attr("x2", d < y.x ? d + g : d)
                      .attr("y2", p < a.y._origin ? p + c : p + _ - c)
                      .call(function (t) {
                        s.noFormats ||
                          t
                            .style("fill", "none")
                            .style("stroke", x)
                            .style("stroke-width", 2)
                            .style("stroke-dasharray", "3, 3")
                            .style("opacity", f);
                      })
                      .transition()
                      .delay(375)
                      .duration(375)
                      .ease(t.easeLinear)
                      .attr("x2", d < y.x ? y.x - 1 : y.x + 1)),
                (n = (r = s._tooltipGroup.append("g"))
                  .append("rect")
                  .attr(
                    "class",
                    "dimple-tooltip " + s.customClassList.tooltipBox
                  )),
                r
                  .selectAll(".dimple-dont-select-any")
                  .data(F)
                  .enter()
                  .append("text")
                  .attr(
                    "class",
                    "dimple-tooltip " + s.customClassList.tooltipLabel
                  )
                  .text(function (t) {
                    return t;
                  })
                  .call(function (t) {
                    s.noFormats ||
                      t
                        .style("font-family", a.tooltipFontFamily)
                        .style("font-size", a._getTooltipFontSize());
                  }),
                r.each(function () {
                  (b = this.getBBox().width > b ? this.getBBox().width : b),
                    (w = this.getBBox().width > w ? this.getBBox().height : w);
                }),
                r
                  .selectAll("text")
                  .attr("x", 0)
                  .attr("y", function () {
                    return (
                      (k += this.getBBox().height) - this.getBBox().height / 2
                    );
                  }),
                n
                  .attr("x", -5)
                  .attr("y", -5)
                  .attr("height", Math.floor(k + 5) - 0.5)
                  .attr("width", b + 10)
                  .attr("rx", 5)
                  .attr("ry", 5)
                  .call(function (t) {
                    s.noFormats ||
                      t
                        .style("fill", v)
                        .style("stroke", m)
                        .style("stroke-width", 2)
                        .style("opacity", 0.95);
                  }),
                C(d + g + 5 + 10 + b).x <
                parseFloat(s.svg.node().getBBox().width)
                  ? ((o = d + g + 5 + 10), (l = p + _ / 2 - (k - (w - 5)) / 2))
                  : C(d - (15 + b)).x > 0
                  ? ((o = d - (15 + b)), (l = p + _ / 2 - (k - (w - 5)) / 2))
                  : C(0, p + _ + k + 10 + 5).y <
                    parseFloat(s.svg.node().getBBox().height)
                  ? ((o =
                      (o = (o = d + g / 2 - (10 + b) / 2) > 0 ? o : 10) + b <
                      parseFloat(s.svg.node().getBBox().width)
                        ? o
                        : parseFloat(s.svg.node().getBBox().width) - b - 10),
                    (l = p + _ + 10))
                  : ((o =
                      (o = (o = d + g / 2 - (10 + b) / 2) > 0 ? o : 10) + b <
                      parseFloat(s.svg.node().getBBox().width)
                        ? o
                        : parseFloat(s.svg.node().getBBox().width) - b - 10),
                    (l = p - k - (w - 5))),
                (h = C(o, l)),
                r.attr("transform", "translate(" + h.x + " , " + h.y + ")");
            }),
            (e._showPointTooltip = function (i, s, a, r) {
              var n,
                o,
                l,
                h,
                c = t.select(s),
                u = parseFloat(c.attr("cx")),
                d = parseFloat(c.attr("cy")),
                p = parseFloat(c.attr("r")),
                g = e._helpers.opacity(i, a, r),
                _ = c.attr("stroke"),
                f = r._dropLineOrigin(),
                x = t.rgb(
                  t.rgb(_).r + 0.6 * (255 - t.rgb(_).r),
                  t.rgb(_).g + 0.6 * (255 - t.rgb(_).g),
                  t.rgb(_).b + 0.6 * (255 - t.rgb(_).b)
                ),
                y = t.rgb(
                  t.rgb(_).r + 0.8 * (255 - t.rgb(_).r),
                  t.rgb(_).g + 0.8 * (255 - t.rgb(_).g),
                  t.rgb(_).b + 0.8 * (255 - t.rgb(_).b)
                ),
                m = 0,
                v = 0,
                F = 0,
                k = r.getTooltipText(i);
              null !== a._tooltipGroup &&
                void 0 !== a._tooltipGroup &&
                a._tooltipGroup.remove(),
                (a._tooltipGroup = a.svg.append("g")),
                a._tooltipGroup
                  .append("circle")
                  .attr(
                    "class",
                    "dimple-line-marker-circle " +
                      a.customClassList.lineMarkerCircle
                  )
                  .attr("cx", u)
                  .attr("cy", d)
                  .attr("r", p)
                  .call(function (t) {
                    a.noFormats ||
                      t
                        .attr("opacity", 0)
                        .style("fill", "none")
                        .style("stroke", _)
                        .style("stroke-width", 1);
                  })
                  .transition()
                  .duration(375)
                  .ease(t.easeLinear)
                  .attr("r", p + r.lineWeight + 2)
                  .call(function (t) {
                    a.noFormats ||
                      t.attr("opacity", 1).style("stroke-width", 2);
                  }),
                null !== f.y &&
                  a._tooltipGroup
                    .append("line")
                    .attr(
                      "class",
                      "dimple-tooltip-dropline " +
                        a.customClassList.tooltipDropLine
                    )
                    .attr("x1", u)
                    .attr(
                      "y1",
                      d < f.y
                        ? d + p + r.lineWeight + 2
                        : d - p - r.lineWeight - 2
                    )
                    .attr("x2", u)
                    .attr(
                      "y2",
                      d < f.y
                        ? d + p + r.lineWeight + 2
                        : d - p - r.lineWeight - 2
                    )
                    .call(function (t) {
                      a.noFormats ||
                        t
                          .style("fill", "none")
                          .style("stroke", _)
                          .style("stroke-width", 2)
                          .style("stroke-dasharray", "3, 3")
                          .style("opacity", g);
                    })
                    .transition()
                    .delay(375)
                    .duration(375)
                    .ease(t.easeLinear)
                    .attr("y2", d < f.y ? f.y - 1 : f.y + 1),
                null !== f.x &&
                  a._tooltipGroup
                    .append("line")
                    .attr(
                      "class",
                      "dimple-tooltip-dropline " +
                        a.customClassList.tooltipDropLine
                    )
                    .attr(
                      "x1",
                      u < f.x
                        ? u + p + r.lineWeight + 2
                        : u - p - r.lineWeight - 2
                    )
                    .attr("y1", d)
                    .attr(
                      "x2",
                      u < f.x
                        ? u + p + r.lineWeight + 2
                        : u - p - r.lineWeight - 2
                    )
                    .attr("y2", d)
                    .call(function (t) {
                      a.noFormats ||
                        t
                          .style("fill", "none")
                          .style("stroke", _)
                          .style("stroke-width", 2)
                          .style("stroke-dasharray", "3, 3")
                          .style("opacity", g);
                    })
                    .transition()
                    .delay(375)
                    .duration(375)
                    .ease(t.easeLinear)
                    .attr("x2", u < f.x ? f.x - 1 : f.x + 1),
                (o = (n = a._tooltipGroup.append("g"))
                  .append("rect")
                  .attr(
                    "class",
                    "dimple-tooltip " + a.customClassList.tooltipBox
                  )),
                n
                  .selectAll(".dont-select-any")
                  .data(k)
                  .enter()
                  .append("text")
                  .attr(
                    "class",
                    "dimple-tooltip " + a.customClassList.tooltipLabel
                  )
                  .text(function (t) {
                    return t;
                  })
                  .call(function (t) {
                    a.noFormats ||
                      t
                        .style("font-family", r.tooltipFontFamily)
                        .style("font-size", r._getTooltipFontSize());
                  }),
                n.each(function () {
                  (v = this.getBBox().width > v ? this.getBBox().width : v),
                    (F = this.getBBox().width > F ? this.getBBox().height : F);
                }),
                n
                  .selectAll("text")
                  .attr("x", 0)
                  .attr("y", function () {
                    return (
                      (m += this.getBBox().height) - this.getBBox().height / 2
                    );
                  }),
                o
                  .attr("x", -5)
                  .attr("y", -5)
                  .attr("height", Math.floor(m + 5) - 0.5)
                  .attr("width", v + 10)
                  .attr("rx", 5)
                  .attr("ry", 5)
                  .call(function (t) {
                    a.noFormats ||
                      t
                        .style("fill", y)
                        .style("stroke", x)
                        .style("stroke-width", 2)
                        .style("opacity", 0.95);
                  }),
                u + p + 5 + 10 + v < parseFloat(a.svg.node().getBBox().width)
                  ? ((l = u + p + 5 + 10), (h = d - (m - (F - 5)) / 2))
                  : u - p - (15 + v) > 0
                  ? ((l = u - p - (15 + v)), (h = d - (m - (F - 5)) / 2))
                  : d + p + m + 10 + 5 <
                    parseFloat(a.svg.node().getBBox().height)
                  ? ((l =
                      (l = (l = u - (10 + v) / 2) > 0 ? l : 10) + v <
                      parseFloat(a.svg.node().getBBox().width)
                        ? l
                        : parseFloat(a.svg.node().getBBox().width) - v - 10),
                    (h = d + p + 10))
                  : ((l =
                      (l = (l = u - (10 + v) / 2) > 0 ? l : 10) + v <
                      parseFloat(a.svg.node().getBBox().width)
                        ? l
                        : parseFloat(a.svg.node().getBBox().width) - v - 10),
                    (h = d - m - (F - 5))),
                n.attr("transform", "translate(" + l + " , " + h + ")");
            }),
            (e.filterData = function (t, e, i) {
              var s = t;
              return (
                null !== e &&
                  null !== i &&
                  (null != i && (i = [].concat(i)),
                  (s = []),
                  t.forEach(function (t) {
                    (null === t[e] ||
                      i.indexOf([].concat(t[e]).join("/")) > -1) &&
                      s.push(t);
                  }, this)),
                s
              );
            }),
            (e.getUniqueValues = function (t, e) {
              var i = [];
              return (
                null != e &&
                  ((e = [].concat(e)),
                  t.forEach(function (t) {
                    var s = "";
                    e.forEach(function (e, i) {
                      i > 0 && (s += "/"), (s += t[e]);
                    }, this),
                      -1 === i.indexOf(s) && i.push(s);
                  }, this)),
                i
              );
            }),
            (e.newSvg = function (e, i, s) {
              var a = null;
              if ((null == e && (e = "body"), (a = t.select(e)).empty()))
                throw (
                  "The '" +
                  e +
                  "' selector did not match any elements.  Please prefix with '#' to select by id or '.' to select by class"
                );
              return a.append("svg").attr("width", i).attr("height", s);
            }),
            e
          );
        })(i("VphZ"));
      })();
    },
    RIqP: function (t, e, i) {
      var s = i("Ijbi"),
        a = i("EbDI"),
        r = i("ZhPi"),
        n = i("Bnag");
      t.exports = function (t) {
        return s(t) || a(t) || r(t) || n();
      };
    },
    WkPL: function (t, e) {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      };
    },
    ZhPi: function (t, e, i) {
      var s = i("WkPL");
      t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(t)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? s(t, e)
              : void 0
          );
        }
      };
    },
  },
]);
