(this.webpackJsonp = this.webpackJsonp || []).push([
  [10, 4],
  {
    "Edr+": function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e("o0o1"),
        d = e.n(n),
        c = e("yXPU"),
        r = e.n(c),
        o = e("VphZ"),
        i = e("KTtF"),
        s = e("kLjC");
      r()(
        d.a.mark(function a() {
          var t,
            e,
            n,
            c,
            r,
            Q,
            l,
            p,
            u,
            h,
            b,
            g,
            m,
            w,
            f,
            O,
            j,
            D,
            y,
            v,
            A,
            k,
            _,
            H,
            I,
            C,
            M,
            E,
            R,
            S,
            q,
            T,
            x,
            N,
            F,
            L,
            V,
            G,
            B,
            z,
            P,
            W,
            J,
            U,
            Y,
            K,
            Z;
          return d.a.wrap(function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (t =
                      "Maryland" == CountyName2
                        ? "./data/MarylandData.csv"
                        : "./data/wda/" +
                          CountyName.replace(/[ ]/g, "") +
                          ".csv"),
                    (a.next = 3),
                    o.dsv(",", t)
                  );
                case 3:
                  (e = a.sent),
                    ["2015", "2016", "2017", "2018", "2019"],
                    (n = [
                      "2016Q1",
                      "2016Q2",
                      "2016Q3",
                      "2016Q4",
                      "2017Q1",
                      "2017Q2",
                      "2017Q3",
                      "2017Q4",
                      "2018Q1",
                      "2018Q2",
                      "2018Q3",
                      "2018Q4",
                      "2019Q1",
                      "2019Q2",
                      "2019Q3",
                      "2019Q4",
                    ]),
                    (c = [
                      "14-18",
                      "19-21",
                      "22-24",
                      "25-34",
                      "35-44",
                      "45-54",
                      "55-64",
                      "65-99",
                      "Female",
                      "Male",
                    ]),
                    (r = [
                      "Less than High school",
                      "High school",
                      "Some college",
                      "Bachelor's or Higher",
                      "N/A",
                      "Female",
                      "Male",
                    ]),
                    (Q = i.filterData(e, "Time", n)),
                    (Q = i.filterData(Q, "Indicator", [
                      "Maryland Workers by Age",
                      "Maryland Workers by Gender",
                      "Maryland Workers by Industry",
                    ])),
                    (l = i.filterData(
                      Q,
                      "Indicator",
                      "Maryland Workers by Age"
                    )),
                    (p = i.filterData(
                      Q,
                      "Indicator",
                      "Maryland Workers by Gender"
                    )),
                    Object(s.createDatasets)(l, "workData", n),
                    Object(s.createDatasets)(p, "workDatg", n),
                    (u = i.filterData(e, "Time", n)),
                    (h = i.filterData(
                      u,
                      "Indicator",
                      "Maryland Average Monthly Earnings by Age"
                    )),
                    (b = i.filterData(
                      u,
                      "Indicator",
                      "Maryland Average Monthly Earnings by Gender"
                    )),
                    Object(s.createDatasets)(h, "averageData", n),
                    Object(s.createDatasets)(b, "averageDatg", n),
                    (g = i.filterData(e, "Time", n)),
                    (g = i.filterData(g, "Indicator", [
                      "Maryland New Hires by Education",
                      "Maryland New Hires by Gender",
                    ])),
                    (m = i.filterData(
                      g,
                      "Indicator",
                      "Maryland New Hires by Education"
                    )),
                    (w = i.filterData(
                      g,
                      "Indicator",
                      "Maryland New Hires by Gender"
                    )),
                    Object(s.createDatasets)(m, "newHireDatc", n),
                    Object(s.createDatasets)(w, "newHireDatg", n),
                    (f = i.filterData(e, "Time", n)),
                    (f = i.filterData(f, "Indicator", [
                      "Maryland Job Net Change by Education",
                      "Maryland Job Net Change by Gender",
                    ])),
                    (O = i.filterData(
                      f,
                      "Indicator",
                      "Maryland Job Net Change by Education"
                    )),
                    (j = i.filterData(
                      f,
                      "Indicator",
                      "Maryland Job Net Change by Gender"
                    )),
                    Object(s.createDatasets)(O, "jobDatc", n),
                    Object(s.createDatasets)(j, "jobDatg", n),
                    (D = i.filterData(e, "Time", n)),
                    (D = i.filterData(D, "Indicator", [
                      "Maryland Turnover Rate by Education",
                      "Maryland Turnover Rate by Gender",
                      "Maryland Workers by Industry",
                    ])),
                    (y = i.filterData(
                      D,
                      "Indicator",
                      "Maryland Turnover Rate by Education"
                    )),
                    (v = i.filterData(
                      D,
                      "Indicator",
                      "Maryland Turnover Rate by Gender"
                    )),
                    Object(s.createDatasets)(y, "turnOverData", n),
                    Object(s.createDatasets)(v, "turnOverDatg", n),
                    (A = i.filterData(e, "Indicator_Value", [
                      "Accommodation and Food Services",
                      "Administrative and Support and Waste Management and Remediation Services",
                      "Agriculture, Forestry, Fishing and Hunting",
                      "Arts, Entertainment, and Recreation",
                      "Construction",
                      "Educational Services",
                      "Finance and Insurance",
                      "Health Care and Social Assistance",
                      "Information",
                      "Management of Companies and Enterprises",
                      "Manufacturing",
                      "Mining, Quarrying, and Oil and Gas Extraction",
                      "Other Services (except Public Administration)",
                      "Professional, Scientific, and Technical Services",
                      "Public Administration",
                      "Real Estate and Rental and Leasing",
                      "Retail Trade",
                      "Transportation and Warehousing",
                      "Utilities",
                      "Wholesale Trade",
                    ])),
                    (k = i.filterData(
                      A,
                      "Indicator",
                      "Maryland Workers by Industry"
                    )),
                    (_ = i.filterData(
                      A,
                      "Indicator",
                      "Maryland Average Earnings by Industry"
                    )),
                    (H = i.filterData(
                      A,
                      "Indicator",
                      "Maryland Job Net Change by Industry"
                    )),
                    (I = i.filterData(
                      A,
                      "Indicator",
                      "Maryland Turnover Rate by Industry"
                    )),
                    (C = i.filterData(
                      A,
                      "Indicator",
                      "Maryland New Hires by Industry"
                    )),
                    Object(s.createDatasets)(k, "iwdata", n),
                    Object(s.createDatasets)(_, "avgdata", n),
                    Object(s.createDatasets)(H, "netdata", n),
                    Object(s.createDatasets)(I, "turndata", n),
                    Object(s.createDatasets)(C, "hiredata", n),
                    (M = i.filterData(
                      e,
                      "Indicator",
                      "Maryland Separations by Industry"
                    )),
                    (M = i.filterData(M, "Indicator_Value", [
                      "Accommodation and Food Services",
                      "Administrative and Support and Waste Management and Remediation Services",
                      "Agriculture, Forestry, Fishing and Hunting",
                      "Arts, Entertainment, and Recreation",
                      "Construction",
                      "Educational Services",
                      "Finance and Insurance",
                      "Health Care and Social Assistance",
                      "Information",
                      "Management of Companies and Enterprises",
                      "Manufacturing",
                      "Mining, Quarrying, and Oil and Gas Extraction",
                      "Other Services (except Public Administration)",
                      "Professional, Scientific, and Technical Services",
                      "Public Administration",
                      "Real Estate and Rental and Leasing",
                      "Retail Trade",
                      "Transportation and Warehousing",
                      "Utilities",
                      "Wholesale Trade",
                    ])),
                    (E = i.filterData(
                      e,
                      "Indicator",
                      "Maryland Separations by Age"
                    )),
                    (R = i.filterData(
                      e,
                      "Indicator",
                      "Maryland Separations by Gender"
                    )),
                    (S = i.filterData(
                      e,
                      "Indicator",
                      "Maryland Separations by Education"
                    )),
                    (window.asepdata1 = i.filterData(E, "Time", n)),
                    (window.gsepdata1 = i.filterData(R, "Time", n)),
                    (window.esepdata1 = i.filterData(S, "Time", n)),
                    Object(s.createDatasets)(M, "isepdata", n),
                    Object(s.createDatasets)(asepdata1, "asepdata", n),
                    Object(s.createDatasets)(gsepdata1, "gsepdata", n),
                    Object(s.createDatasets)(S, "esepdata", n),
                    Object(s.configSvgz)([
                      ["svg3", "#Chart3", "100%", 400],
                      ["svg4", "#Chart4", "100%", 400],
                      ["svg5", "#ChartFive", "100%", 400],
                      ["svg6", "#Chart6", "100%", 450],
                      ["print3", "#Print3", 750, 400],
                      ["print4", "#Print4", 750, 400],
                      ["print5", "#PrintFive", 750, 400],
                      ["print6", "#Print6", 750, 450],
                      ["svg71", "#Chart17", "100%", 400],
                      ["print71", "#Print17", 750, 400],
                    ]),
                    Object(s.configCharts)([
                      ["chart61", svg71, Object(s.zeronulls)(isepdata2017Q4)],
                      [
                        "pchart61",
                        print71,
                        Object(s.zeronulls)(isepdata2017Q4),
                      ],
                      ["pchart8", print6, Object(s.zeronulls)(iwdata2017Q4)],
                      ["chart8", svg6, Object(s.zeronulls)(iwdata2017Q4)],
                      [
                        "pturnChart",
                        print5,
                        Object(s.zeronulls)(turnOverDatg2017Q4),
                      ],
                      [
                        "turnChart",
                        svg5,
                        Object(s.zeronulls)(turnOverDatg2017Q4),
                      ],
                      [
                        "pnewHireChart",
                        print4,
                        Object(s.zeronulls)(newHireDatc2017Q4),
                      ],
                      [
                        "newHireChart",
                        svg4,
                        Object(s.zeronulls)(newHireDatc2017Q4),
                      ],
                      ["pjc", print4, Object(s.zeronulls)(jobDatc2017Q1)],
                      ["jc", svg4, Object(s.zeronulls)(jobDatc2017Q1)],
                      [
                        "pavgChart",
                        print3,
                        Object(s.zeronulls)(averageDatg2017Q4),
                      ],
                      [
                        "avgChart",
                        svg3,
                        Object(s.zeronulls)(window.averageData2017Q4),
                      ],
                      ["pwChart", print3, Object(s.zeronulls)(workData2018Q1)],
                      [
                        "wChart",
                        svg3,
                        Object(s.zeronulls)(window.workData2018Q1),
                      ],
                    ]),
                    //Creating the tables linking to data
                    (q = function (a, t, e, n, d) {
                      return '\n\t\t<tr class="HeadRow">\n\t\t  <th>'
                        .concat(
                          a,
                          "</th>\n\t\t  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>\n\t   </tr>\n\t   <tr>\n\t\t  <th>Number of Workers</th>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 2)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 3)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 4)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 5)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 6)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(t, 7)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(e, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(e, 0)),
                          '</td>\n\t   </tr>\n\t   <tr class="FootRow">\n\t\t  <th>Average Monthly Earnings</th>\n\t\t  <td>'
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 2)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 3)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 4)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 5)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 6)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, 7)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(d, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(d, 0)),
                          "</td>\n\t   </tr>"
                        );
                    }),
                    (document.getElementById(
                      "table3"
                    ).innerHTML = '\n               <tr class="HeadRow" style="background-color: white;">\n                  <th>'
                      .concat(
                        CountyName.replace("L W D A", "LWDA"),
                        '</th>\n                  <th>Age 14-18</th>\n                  <th>Age 19-21</th>\n                  <th>Age 22-24</th>\n                  <th>Age 25-34</th>\n                  <th>Age 35-44</th>\n                  <th>Age 45-54</th>\n                  <th>Age 55-64</th>\n                  <th>Age 65-99</th>\n                  <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>\n                  <th>Female</th>\n                  <th>Male</th>\n               </tr>\n               '
                      )
                      .concat(
                        q(
                          "2016Q1",
                          workData2016Q1,
                          workDatg2016Q1,
                          averageData2016Q1,
                          averageDatg2016Q1
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2016Q2",
                          workData2016Q2,
                          workDatg2016Q2,
                          averageData2016Q2,
                          averageDatg2016Q2
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2016Q3",
                          workData2016Q3,
                          workDatg2016Q3,
                          averageData2016Q3,
                          averageDatg2016Q3
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2016Q4",
                          workData2016Q4,
                          workDatg2016Q4,
                          averageData2016Q4,
                          averageDatg2016Q4
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2017Q1",
                          workData2017Q1,
                          workDatg2017Q1,
                          averageData2017Q1,
                          averageDatg2017Q1
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2017Q2",
                          workData2017Q2,
                          workDatg2017Q2,
                          averageData2017Q2,
                          averageDatg2017Q2
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2017Q3",
                          workData2017Q3,
                          workDatg2017Q3,
                          averageData2017Q3,
                          averageDatg2017Q3
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2017Q4",
                          workData2017Q4,
                          workDatg2017Q4,
                          averageData2017Q4,
                          averageDatg2017Q4
                        ),
                        "\n               "
                      )
                      .concat(
                        q(
                          "2018Q1",
                          workData2018Q1,
                          workDatg2018Q1,
                          averageData2018Q1,
                          averageDatg2018Q1
                        ),
                        "\n               "
                      )
                      .concat(
                        workData2018Q2[0]
                          ? q(
                              "2018Q2",
                              workData2018Q2,
                              workDatg2018Q2,
                              averageData2018Q2,
                              averageDatg2018Q2
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2018Q3[0]
                          ? q(
                              "2018Q3",
                              workData2018Q3,
                              workDatg2018Q3,
                              averageData2018Q3,
                              averageDatg2018Q3
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2018Q4[0]
                          ? q(
                              "2018Q4",
                              workData2018Q4,
                              workDatg2018Q4,
                              averageData2018Q4,
                              averageDatg2018Q4
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2019Q1[0]
                          ? q(
                              "2019Q1",
                              workData2019Q1,
                              workDatg2019Q1,
                              averageData2019Q1,
                              averageDatg2019Q1
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2019Q2[0]
                          ? q(
                              "2019Q2",
                              workData2019Q2,
                              workDatg2019Q2,
                              averageData2019Q2,
                              averageDatg2019Q2
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2019Q3[1]
                          ? q(
                              "2019Q3",
                              workData2019Q3,
                              workDatg2019Q3,
                              averageData2019Q3,
                              averageDatg2019Q3
                            )
                          : "",
                        "\n               "
                      )
                      .concat(
                        workData2019Q4[1]
                          ? q(
                              "2019Q4",
                              workData2019Q4,
                              workDatg2019Q4,
                              averageData2019Q4,
                              averageDatg2019Q4
                            )
                          : "",
                        "\n  "
                      )),
                    (T = function (a, t, e, n, d) {
                      return '\n\t   <tr class="HeadRow">\n\t\t  <th>'
                        .concat(
                          a,
                          "</th>\n\t\t  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>\n\t   </tr>\n\t   <tr>\n\t\t  <th>New Hires</th>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, 2)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, 3)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, 4)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(d, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(d, 1)),
                          '</td>\n\t   </tr>\n\t   <tr class="FootRow">\n\t\t  <th >Job Net Change</th>\n\t\t  <td>'
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(t, 1)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(t, 2)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(t, 3)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(t, 4)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(t, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(e, 0)),
                          "</td>\n\t\t  <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(e, 1)),
                          "</td>\n\t   </tr>"
                        );
                    }),
                    (document.getElementById(
                      "table4"
                    ).innerHTML = '\n\t\t <tr class="HeadRow" style="background-color: white;">\n\t\t  <th style="border-right-style: solid;">'
                      .concat(
                        CountyName.replace("L W D A", "LWDA"),
                        '</th>\n\t\t  <th>Less than high school</th>\n\t\t  <th>High school or equivalent, no college</th>\n\t\t  <th>Some college or Associate degree</th>\n\t\t  <th>Bachelor\'s degree or advanced degree</th>\n\t\t  <th>Educational attainment not reported (workers aged 24 or younger)</th>\n\t\t  <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>\n\t\t  <th>Male</th>\n\t\t  <th>Female</th>\n\t   </tr>\n\t   '
                      )
                      .concat(
                        T(
                          "2016Q1",
                          jobDatc2016Q1,
                          jobDatg2016Q1,
                          newHireDatc2016Q1,
                          newHireDatg2016Q1
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2016Q2",
                          jobDatc2016Q2,
                          jobDatg2016Q2,
                          newHireDatc2016Q2,
                          newHireDatg2016Q2
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2016Q3",
                          jobDatc2016Q3,
                          jobDatg2016Q3,
                          newHireDatc2016Q3,
                          newHireDatg2016Q3
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2016Q4",
                          jobDatc2016Q4,
                          jobDatg2016Q4,
                          newHireDatc2016Q4,
                          newHireDatg2016Q4
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2017Q1",
                          jobDatc2017Q1,
                          jobDatg2017Q1,
                          newHireDatc2017Q1,
                          newHireDatg2017Q1
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2017Q2",
                          jobDatc2017Q2,
                          jobDatg2017Q2,
                          newHireDatc2017Q2,
                          newHireDatg2017Q2
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2017Q3",
                          jobDatc2017Q3,
                          jobDatg2017Q3,
                          newHireDatc2017Q3,
                          newHireDatg2017Q3
                        ),
                        "\n\t   "
                      )
                      .concat(
                        T(
                          "2017Q4",
                          jobDatc2017Q4,
                          jobDatg2017Q4,
                          newHireDatc2017Q4,
                          newHireDatg2017Q4
                        ),
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2018Q1[0]
                          ? T(
                              "2018Q1",
                              jobDatc2018Q1,
                              jobDatg2018Q1,
                              newHireDatc2018Q1,
                              newHireDatg2018Q1
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2018Q2[0]
                          ? T(
                              "2018Q2",
                              jobDatc2018Q2,
                              jobDatg2018Q2,
                              newHireDatc2018Q2,
                              newHireDatg2018Q2
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2018Q3[0]
                          ? T(
                              "2018Q3",
                              jobDatc2018Q3,
                              jobDatg2018Q3,
                              newHireDatc2018Q3,
                              newHireDatg2018Q3
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2018Q4[0]
                          ? T(
                              "2018Q4",
                              jobDatc2018Q4,
                              jobDatg2018Q4,
                              newHireDatc2018Q4,
                              newHireDatg2018Q4
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2019Q1[0]
                          ? T(
                              "2019Q1",
                              jobDatc2019Q1,
                              jobDatg2019Q1,
                              newHireDatc2019Q1,
                              newHireDatg2019Q1
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2019Q2[0]
                          ? T(
                              "2019Q2",
                              jobDatc2019Q2,
                              jobDatg2019Q2,
                              newHireDatc2019Q2,
                              newHireDatg2019Q2
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2019Q3[0]
                          ? T(
                              "2019Q3",
                              jobDatc2019Q3,
                              jobDatg2019Q3,
                              newHireDatc2019Q3,
                              newHireDatg2019Q3
                            )
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        newHireDatc2019Q4[0]
                          ? T(
                              "2019Q4",
                              jobDatc2019Q4,
                              jobDatg2019Q4,
                              newHireDatc2019Q4,
                              newHireDatg2019Q4
                            )
                          : "",
                        "\n    "
                      )),
                    (x = function (a, t, e) {
                      return '\n\t  <tr class="HeadRow">\n\t\t <th>'
                        .concat(
                          a,
                          "</th>\n\t\t <th></th> <th></th>\n\t\t <th></th> <th></th>\n\t\t <th></th> <th></th>\n\t\t <th></th>\n\t  </tr>\n\t  <tr>\n\t\t <th>Turnover Rate</th>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findEdu)(t, 1)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findEdu)(t, 2)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findEdu)(t, 3)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findEdu)(t, 4)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findEdu)(t, 0)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findGender)(e, 0)),
                          "</td>\n\t\t <td>"
                        )
                        .concat(
                          Object(s.pcnt)(Object(s.findGender)(e, 1)),
                          "</td>\n\t  </tr>"
                        );
                    }),
                    (document.getElementById(
                      "table5"
                    ).innerHTML = '\n\t\t  <tr class="HeadRow" style="background-color: white;">\n\t\t\t <th style="border-right-style: solid;">'
                      .concat(
                        CountyName.replace("L W D A", "LWDA"),
                        '</th>\n\t\t\t <th>Less than high school</th>\n\t\t\t <th>High school or equivalent, no college</th>\n\t\t\t <th>Some college or Associate degree</th>\n\t\t\t <th>Bachelor\'s degree or advanced degree</th>\n\t\t\t <th>Educational attainment not reported (workers aged 24 or younger)</th>\n\t\t\t <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>\n\t\t\t <th>Male</th>\n\t\t\t <th>Female</th>\n\t\t  </tr>\n\t   '
                      )
                      .concat(
                        x("2016Q1", turnOverData2016Q1, turnOverDatg2016Q1),
                        "\n\t   "
                      )
                      .concat(
                        x("2016Q2", turnOverData2016Q2, turnOverDatg2016Q2),
                        "\n\t   "
                      )
                      .concat(
                        x("2016Q3", turnOverData2016Q3, turnOverDatg2016Q3),
                        "\n\t   "
                      )
                      .concat(
                        x("2016Q4", turnOverData2016Q4, turnOverDatg2016Q4),
                        "\n\t   "
                      )
                      .concat(
                        x("2017Q1", turnOverData2017Q1, turnOverDatg2017Q1),
                        "\n\t   "
                      )
                      .concat(
                        x("2017Q2", turnOverData2017Q2, turnOverDatg2017Q2),
                        "\n\t   "
                      )
                      .concat(
                        x("2017Q3", turnOverData2017Q3, turnOverDatg2017Q3),
                        "\n\t   "
                      )
                      .concat(
                        x("2017Q4", turnOverData2017Q4, turnOverDatg2017Q4),
                        "\n\t   "
                      )
                      .concat(
                        x("2018Q1", turnOverData2018Q1, turnOverDatg2018Q1),
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2018Q2[0]
                          ? x("2018Q2", turnOverData2018Q2, turnOverDatg2018Q2)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2018Q3[0]
                          ? x("2018Q3", turnOverData2018Q3, turnOverDatg2018Q3)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2018Q4[0]
                          ? x("2018Q4", turnOverData2018Q4, turnOverDatg2018Q4)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2019Q1[0]
                          ? x("2019Q1", turnOverData2019Q1, turnOverDatg2019Q1)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2019Q2[0]
                          ? x("2019Q2", turnOverData2019Q2, turnOverDatg2019Q2)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2019Q3[0]
                          ? x("2019Q3", turnOverData2019Q3, turnOverDatg2019Q3)
                          : "",
                        "\n\t   "
                      )
                      .concat(
                        turnOverData2019Q4[0]
                          ? x("2019Q4", turnOverData2019Q4, turnOverDatg2019Q4)
                          : "",
                        "\n  "
                      )),
                    (window.displayIndustryMetricsTable = function (
                      a,
                      t,
                      e,
                      n,
                      d
                    ) {
                      var c = [
                          "Agriculture, Forestry, Fishing and Hunting",
                          "Mining, Quarrying, and Oil and Gas Extraction",
                          "Utilities",
                          "Construction",
                          "Manufacturing",
                          "Wholesale Trade",
                          "Retail Trade",
                          "Transportation and Warehousing",
                          "Information",
                          "Finance and Insurance",
                          "Real Estate and Rental and Leasing",
                          "Professional, Scientific, and Technical Services",
                          "Management of Companies and Enterprises",
                          "Administrative and Support and Waste Management and Remediation Services",
                          "Educational Services",
                          "Health Care and Social Assistance",
                          "Arts, Entertainment, and Recreation",
                          "Accommodation and Food Services",
                          "Other Services (except Public Administration)",
                          "Public Administration",
                        ],
                        r = function (a, t) {
                          return a.filter(function (a) {
                            return a.Indicator_Value == c[t];
                          })[0];
                        };
                      return '\n         <tr class="HeadRow">\n            <th>Year and Quarter</th>\n            <th></th>\n            <th ></th>\n            <th></th>\n            <th>'
                        .concat(
                          a[0] ? a[0].Time : "",
                          "</th>\n            <th></th>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 0).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 0).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 0).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 0).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 0).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 0).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 1).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 1).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 1).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 1).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 1).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 1).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 2).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 2).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 2).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 2).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 2).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 2).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 3).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 3).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 3).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 3).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 3).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 3).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 4).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 4).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 4).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 4).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 4)?r(n, 4).Amount:"N/A"),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 4)?r(d, 4).Amount:"N/A"),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 5).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 5).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 5).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 5).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 5).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 5).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 6).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 6).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 6).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 6).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 6).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 6).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 7).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 7).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 7).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 7).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 7).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 7).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 8).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 8).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 8).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 8).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 8).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 8).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 9).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 9).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 9).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ?(r(e, 9)?r(e, 9).Amount:"N/A") : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 9).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 9).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 10).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 10).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 10).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 10).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 10).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 10).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 11).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 11).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 11).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 11).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 11).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 11).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 12).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 12).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 12).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 12).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 12).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 12).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 13).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 13).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 13).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 13).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 13).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 13).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 14).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 14).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 14).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 14).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 14).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 14).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 15).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 15).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 15).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 15).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 15).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 15).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 16).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 16).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 16).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 16).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 16).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 16).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 17).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 17).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 17).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 17).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 17).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 17).Amount),
                          "</td>\n         </tr>\n         <tr>\n            <th>"
                        )
                        .concat(
                          r(a, 18).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 18).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 18).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 18).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 18).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 18).Amount),
                          '</td>\n         </tr>\n         <tr class="FootRow">\n            <th>'
                        )
                        .concat(
                          r(a, 19).Indicator_Value,
                          "</th>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(a, 19).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(t, 19).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.dlr)(e[0] ? r(e, 19).Amount : 0),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.cma)(r(n, 19).Amount),
                          "</td>\n            <td>"
                        )
                        .concat(
                          Object(s.pcnt)(r(d, 19).Amount),
                          "</td>\n         </tr>\n    "
                        );
                    }),
                    (document.getElementById(
                      "table6"
                    ).innerHTML = '\n      <thead>\n         <tr>\n            <th class="HeadRow" rowspan="7">LWDA Data by Industry</th>\n         </tr>\n         <tr class="HeadRow" style="background-color: white;">\n            <th>Workers</th>\n            <th>New Hires</th>\n            <th>Average Monthly Earnings</th>\n            <th>Job Net Change</th>\n            <th>Turnover Rate</th>\n         </tr>\n      </thead>\n      <tbody>\n        '
                      .concat(
                        iwdata2019Q4[0]
                          ? displayIndustryMetricsTable(
                              iwdata2019Q4,
                              hiredata2019Q4,
                              avgdata2019Q4,
                              netdata2019Q4,
                              turndata2019Q4
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2019Q3[0]
                          ? displayIndustryMetricsTable(
                              iwdata2019Q3,
                              hiredata2019Q3,
                              avgdata2019Q3,
                              netdata2019Q3,
                              turndata2019Q3
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2019Q2[0]
                          ? displayIndustryMetricsTable(
                              iwdata2019Q2,
                              hiredata2019Q2,
                              avgdata2019Q2,
                              netdata2019Q2,
                              turndata2019Q2
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2019Q1[0]
                          ? displayIndustryMetricsTable(
                              iwdata2019Q1,
                              hiredata2019Q1,
                              avgdata2019Q1,
                              netdata2019Q1,
                              turndata2019Q1
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2018Q4[0]
                          ? displayIndustryMetricsTable(
                              iwdata2018Q4,
                              hiredata2018Q4,
                              avgdata2018Q4,
                              netdata2018Q4,
                              turndata2018Q4
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2018Q3[0]
                          ? displayIndustryMetricsTable(
                              iwdata2018Q3,
                              hiredata2018Q3,
                              avgdata2018Q3,
                              netdata2018Q3,
                              turndata2018Q3
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2018Q2[0]
                          ? displayIndustryMetricsTable(
                              iwdata2018Q2,
                              hiredata2018Q2,
                              avgdata2018Q2,
                              netdata2018Q2,
                              turndata2018Q2
                            )
                          : "",
                        "        \n        "
                      )
                      .concat(
                        iwdata2018Q1[0]
                          ? displayIndustryMetricsTable(
                              iwdata2018Q1,
                              hiredata2018Q1,
                              avgdata2018Q1,
                              netdata2018Q1,
                              turndata2018Q1
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2017Q4[0]
                          ? displayIndustryMetricsTable(
                              iwdata2017Q4,
                              hiredata2017Q4,
                              avgdata2017Q4,
                              netdata2017Q4,
                              turndata2017Q4
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2017Q3[0]
                          ? displayIndustryMetricsTable(
                              iwdata2017Q3,
                              hiredata2017Q3,
                              avgdata2017Q3,
                              netdata2017Q3,
                              turndata2017Q3
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2017Q2[0]
                          ? displayIndustryMetricsTable(
                              iwdata2017Q2,
                              hiredata2017Q2,
                              avgdata2017Q2,
                              netdata2017Q2,
                              turndata2017Q2
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2017Q1[0]
                          ? displayIndustryMetricsTable(
                              iwdata2017Q1,
                              hiredata2017Q1,
                              avgdata2017Q1,
                              netdata2017Q1,
                              turndata2017Q1
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2016Q4[0]
                          ? displayIndustryMetricsTable(
                              iwdata2016Q4,
                              hiredata2016Q4,
                              avgdata2016Q4,
                              netdata2016Q4,
                              turndata2016Q4
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2016Q3[0]
                          ? displayIndustryMetricsTable(
                              iwdata2016Q3,
                              hiredata2016Q3,
                              avgdata2016Q3,
                              netdata2016Q3,
                              turndata2016Q3
                            )
                          : "",
                        " \n        "
                      )
                      .concat(
                        iwdata2016Q2[0]
                          ? displayIndustryMetricsTable(
                              iwdata2016Q2,
                              hiredata2016Q2,
                              avgdata2016Q2,
                              netdata2016Q2,
                              turndata2016Q2
                            )
                          : "",
                        "\n        "
                      )
                      .concat(
                        iwdata2016Q1[0]
                          ? displayIndustryMetricsTable(
                              iwdata2016Q1,
                              hiredata2016Q1,
                              avgdata2016Q1,
                              netdata2016Q1,
                              turndata2016Q2
                            )
                          : "",
                        "\n      </tbody>\n  "
                      )),
                    (F = function (
                      a,
                      t,
                      e,
                      n,
                      d,
                      c,
                      r,
                      o,
                      i,
                      Q,
                      l,
                      p,
                      u,
                      h,
                      b,
                      g,
                      m,
                      w
                    ) {
                      //console.log("gender", a)  female, male
                      //console.log("t", t)
                      //console.log("n", n)
                      return "\n\t    <tr> <td>"
                        .concat(a, "</td> \n\t    <td>")
                        .concat(
                          Object(s.cma)(Object(s.findGender)(n, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(d, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(c, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(r, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(o, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(i, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(Q, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(l, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(p, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(u, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(h, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(b, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(g, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findGender)(m, w)),
                          "</td>  \n\t    </tr>\n  "
                        );
                    }),
                    (L = function (
                      a,
                      t,
                      e,
                      n,
                      d,
                      c,
                      r,
                      o,
                      i,
                      Q,
                      l,
                      p,
                      u,
                      h,
                      b,
                      g,
                      m,
                      w
                    ) {
                      //console.log("findEdu-w", w)
                      //console.log("findEdu-a", a)
                      //console.log("findEdu-m", m)
                      return "\n\t    <tr> <td>"
                        .concat(a, "</td> \n\t    <td>")
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(n, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(d, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(c, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(r, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(o, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(i, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(Q, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(l, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(p, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(u, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(h, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(b, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(g, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findEdu)(m, w)),
                          "</td>  \n\t    </tr>\n  "
                        );
                    }),
                    (V = function (
                      a,
                      t,
                      e,
                      n,
                      d,
                      c,
                      r,
                      o,
                      i,
                      Q,
                      l,
                      p,
                      u,
                      h,
                      b,
                      g,
                      m,
                      w
                    ) {
                      return "\n\t    <tr> <td>"
                        .concat(a, "</td> \n\t    <td>")
                        .concat(
                          Object(s.cma)(Object(s.findAge)(n, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(d, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(c, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(r, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(o, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(i, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(Q, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(l, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(p, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(u, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(h, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(b, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(g, w)),
                          "</td> \n\t    <td>"
                        )
                        .concat(
                          Object(s.cma)(Object(s.findAge)(m, w)),
                          "</td>  \n\t    </tr>\n  "
                        );
                    }),
                    (G = '\n       <thead>\n        <tr> <th class="HeadRow">Separations by Industry</th> \n          <th class="HeadRow">2016Q3</th>\n          <th class="HeadRow">2016Q4</th>\n          <th class="HeadRow">2017Q1</th>\n          <th class="HeadRow">2017Q2</th>\n          <th class="HeadRow">2017Q3</th>\n          <th class="HeadRow">2017Q4</th> \n          <th class="HeadRow">2018Q1</th>\n          <th class="HeadRow">2018Q2</th>\n          <th class="HeadRow">2018Q3</th>\n          <th class="HeadRow">2018Q4</th>\n          <th class="HeadRow">2019Q1</th>\n          <th class="HeadRow">2019Q2</th> \n <th class="HeadRow">2019Q3</th> \n  <th class="HeadRow">2019Q4</th> \n      </tr>\n       </thead>\n       <tbody>\n          '
                      .concat(
                        (N = function (
                          a,
                          t,
                          e,
                          n,
                          d,
                          c,
                          r,
                          o,
                          i,
                          Q,
                          l,
                          p,
                          u,
                          h,
                          b,
                          g,
                          m
                        ) {
                          //console.log("e", e,)
                          //console.log("g", g,)
                          return "<tr>\n\t    <td>"
                            .concat(s.indsList[m], "</td>\n\t    <td>")
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(e, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(n, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(d, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(c, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(r, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(o, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(i, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(Q, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(l, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(p, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(u, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(h, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(b, m)),
                              "</td> \n\t    <td>"
                            )
                            .concat(
                              Object(s.cma)(Object(s.findIndustry)(g, m)),
                              "</td>  \n      </tr>"
                            );
                        })(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          0
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          1
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          2
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          3
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          4
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          5
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          6
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          7
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          8
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          9
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          10
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          11
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          12
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          13
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          14
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          15
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          16
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          17
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          18
                        ),
                        "\n          "
                      )
                      .concat(
                        N(
                          isepdata2016Q1,
                          isepdata2016Q2,
                          isepdata2016Q3,
                          isepdata2016Q4,
                          isepdata2017Q1,
                          isepdata2017Q2,
                          isepdata2017Q3,
                          isepdata2017Q4,
                          isepdata2018Q1,
                          isepdata2018Q2,
                          isepdata2018Q3,
                          isepdata2018Q4,
                          isepdata2019Q1,
                          isepdata2019Q2,
                          isepdata2019Q3,
                          isepdata2019Q4,
                          19
                        ),
                        "\n       </tbody>\n    "
                      )),
                    (document.getElementById(
                      "table15"
                    ).innerHTML = "\n       "
                      .concat(
                        G,
                        '\n       <thead>\n        <tr> <th class="HeadRow">Separations by Gender</th> \n          <th class="HeadRow">2016Q3</th>\n          <th class="HeadRow">2016Q4</th>\n          <th class="HeadRow">2017Q1</th>\n          <th class="HeadRow">2017Q2</th>\n          <th class="HeadRow">2017Q3</th>\n          <th class="HeadRow">2017Q4</th> \n          <th class="HeadRow">2018Q1</th>\n          <th class="HeadRow">2018Q2</th>\n          <th class="HeadRow">2018Q3</th>\n          <th class="HeadRow">2018Q4</th>\n          <th class="HeadRow">2019Q1</th>\n          <th class="HeadRow">2019Q2</th> \n <th class="HeadRow">2019Q3</th> \n <th class="HeadRow">2019Q4</th> \n       </tr>\n       </thead>\n       <tbody>\n          '
                      )
                      .concat(
                        F(
                          "Male",
                          gsepdata2016Q1,
                          gsepdata2016Q2,
                          gsepdata2016Q3,
                          gsepdata2016Q4,
                          gsepdata2017Q1,
                          gsepdata2017Q2,
                          gsepdata2017Q3,
                          gsepdata2017Q4,
                          gsepdata2018Q1,
                          gsepdata2018Q2,
                          gsepdata2018Q3,
                          gsepdata2018Q4,
                          gsepdata2019Q1,
                          gsepdata2019Q2,
                          gsepdata2019Q3,
                          gsepdata2019Q4,
                          0
                        ),
                        "\n          "
                      )
                      .concat(
                        F(
                          "Female",
                          gsepdata2016Q1,
                          gsepdata2016Q2,
                          gsepdata2016Q3,
                          gsepdata2016Q4,
                          gsepdata2017Q1,
                          gsepdata2017Q2,
                          gsepdata2017Q3,
                          gsepdata2017Q4,
                          gsepdata2018Q1,
                          gsepdata2018Q2,
                          gsepdata2018Q3,
                          gsepdata2018Q4,
                          gsepdata2019Q1,
                          gsepdata2019Q2,
                          gsepdata2019Q3,
                          gsepdata2019Q4,
                          1
                        ),
                        '\n       </tbody>\n       <thead>\n        <tr> <th class="HeadRow">Separations by Education</th> \n          <th class="HeadRow">2016Q3</th>\n          <th class="HeadRow">2016Q4</th>\n          <th class="HeadRow">2017Q1</th>\n          <th class="HeadRow">2017Q2</th>\n          <th class="HeadRow">2017Q3</th>\n          <th class="HeadRow">2017Q4</th> \n          <th class="HeadRow">2018Q1</th>\n          <th class="HeadRow">2018Q2</th>\n          <th class="HeadRow">2018Q3</th>\n          <th class="HeadRow">2018Q4</th>\n          <th class="HeadRow">2019Q1</th>\n          <th class="HeadRow">2019Q2</th> \n <th class="HeadRow">2019Q3</th> \n <th class="HeadRow">2019Q4</th> \n      </tr>\n       </thead>\n       <tbody>\n          '
                      )
                      .concat(
                        L(
                          "Less than High school",
                          esepdata2016Q1,
                          esepdata2016Q2,
                          esepdata2016Q3,
                          esepdata2016Q4,
                          esepdata2017Q1,
                          esepdata2017Q2,
                          esepdata2017Q3,
                          esepdata2017Q4,
                          esepdata2018Q1,
                          esepdata2018Q2,
                          esepdata2018Q3,
                          esepdata2018Q4,
                          esepdata2019Q1,
                          esepdata2019Q2,
                          esepdata2019Q3,
                          esepdata2019Q4,
                          1
                        ),
                        "\n          "
                      )
                      .concat(
                        L(
                          "High school",
                          esepdata2016Q1,
                          esepdata2016Q2,
                          esepdata2016Q3,
                          esepdata2016Q4,
                          esepdata2017Q1,
                          esepdata2017Q2,
                          esepdata2017Q3,
                          esepdata2017Q4,
                          esepdata2018Q1,
                          esepdata2018Q2,
                          esepdata2018Q3,
                          esepdata2018Q4,
                          esepdata2019Q1,
                          esepdata2019Q2,
                          esepdata2019Q3,
                          esepdata2019Q4,
                          2
                        ),
                        "\n          "
                      )
                      .concat(
                        L(
                          "Some College",
                          esepdata2016Q1,
                          esepdata2016Q2,
                          esepdata2016Q3,
                          esepdata2016Q4,
                          esepdata2017Q1,
                          esepdata2017Q2,
                          esepdata2017Q3,
                          esepdata2017Q4,
                          esepdata2018Q1,
                          esepdata2018Q2,
                          esepdata2018Q3,
                          esepdata2018Q4,
                          esepdata2019Q1,
                          esepdata2019Q2,
                          esepdata2019Q3,
                          esepdata2019Q4,
                          3
                        ),
                        "\n          "
                      )
                      .concat(
                        L(
                          "Bachelor's or Higher",
                          esepdata2016Q1,
                          esepdata2016Q2,
                          esepdata2016Q3,
                          esepdata2016Q4,
                          esepdata2017Q1,
                          esepdata2017Q2,
                          esepdata2017Q3,
                          esepdata2017Q4,
                          esepdata2018Q1,
                          esepdata2018Q2,
                          esepdata2018Q3,
                          esepdata2018Q4,
                          esepdata2019Q1,
                          esepdata2019Q2,
                          esepdata2019Q3,
                          esepdata2019Q4,
                          4
                        ),
                        "\n          "
                      )
                      .concat(
                        L(
                          "NR",
                          esepdata2016Q1,
                          esepdata2016Q2,
                          esepdata2016Q3,
                          esepdata2016Q4,
                          esepdata2017Q1,
                          esepdata2017Q2,
                          esepdata2017Q3,
                          esepdata2017Q4,
                          esepdata2018Q1,
                          esepdata2018Q2,
                          esepdata2018Q3,
                          esepdata2018Q4,
                          esepdata2019Q1,
                          esepdata2019Q2,
                          esepdata2019Q3,
                          esepdata2019Q4,
                          0
                        ),
                        '\n       </tbody>\n       <thead>\n        <tr> <th class="HeadRow">Separations by Age</th> \n          <th class="HeadRow">2016Q3</th>\n          <th class="HeadRow">2016Q4</th>\n          <th class="HeadRow">2017Q1</th>\n          <th class="HeadRow">2017Q2</th>\n          <th class="HeadRow">2017Q3</th>\n          <th class="HeadRow">2017Q4</th> \n          <th class="HeadRow">2018Q1</th>\n          <th class="HeadRow">2018Q2</th>\n          <th class="HeadRow">2018Q3</th>\n          <th class="HeadRow">2018Q4</th>\n          <th class="HeadRow">2019Q1</th>\n          <th class="HeadRow">2019Q2</th> \n   <th class="HeadRow">2019Q3</th> \n <th class="HeadRow">2019Q4</th>     </tr>\n       </thead>\n       <tbody>\n          '
                      )
                      .concat(
                        V(
                          "Age 14-18",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          0
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 19-21",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          1
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 22-24",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          2
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 25-34",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          3
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 35-44",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          4
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 45-54",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          5
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 55-64",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          6
                        ),
                        "\n          "
                      )
                      .concat(
                        V(
                          "Age 65-99",
                          asepdata2016Q1,
                          asepdata2016Q2,
                          asepdata2016Q3,
                          asepdata2016Q4,
                          asepdata2017Q1,
                          asepdata2017Q2,
                          asepdata2017Q3,
                          asepdata2017Q4,
                          asepdata2018Q1,
                          asepdata2018Q2,
                          asepdata2018Q3,
                          asepdata2018Q4,
                          asepdata2019Q1,
                          asepdata2019Q2,
                          asepdata2019Q3,
                          asepdata2019Q4,
                          7
                        ),
                        "\n       </tbody>\n    "
                      )),
//Colors for graphs. in chart 3.
                    (B = [
                      ["14-18", "#4dc3ff", "black", 0.7],
                      ["19-21", "#ff5c33", "black", 0.7],
                      ["22-24", "#66ff66", "black", 0.7],
                      ["25-34", "#ffdb4d", "black", 0.7],
                      ["35-44", "#ffb84d", "black", 0.7],
                      ["45-54", "#00cccc", "black", 0.7],
                      ["55-64", "#6666ff", "black", 0.7],
                      ["65-99", "#ffcc99", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ]),
                    (z = [
                      ["14-18", "#4dc3ff", "black", 0.7],
                      ["19-21", "#ff5c33", "black", 0.7],
                      ["22-24", "#66ff66", "black", 0.7],
                      ["25-34", "#ffdb4d", "black", 0.7],
                      ["35-44", "#ffb84d", "black", 0.7],
                      ["45-54", "#00cccc", "black", 0.7],
                      ["55-64", "#6666ff", "black", 0.7],
                      ["65-99", "#ffcc99", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ]),
                    [
                      ["Less than High school", "#4dc3ff", "black", 0.7],
                      ["High school", "#ff5c33", "black", 0.7],
                      ["Some college", "#66ff66", "black", 0.7],
                      ["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
                      ["N/A", "#919191", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ],
                    (P = [
                      ["Less than High school", "#4dc3ff", "black", 0.7],
                      ["High school", "#ff5c33", "black", 0.7],
                      ["Some college", "#66ff66", "black", 0.7],
                      ["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
                      ["N/A", "#919191", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ]),
                    (W = [
                      ["Less than High school", "#4dc3ff", "black", 0.7],
                      ["High school", "#ff5c33", "black", 0.7],
                      ["Some college", "#66ff66", "black", 0.7],
                      ["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
                      ["N/A", "#919191", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ]),
                    (J = [
                      ["Accommodation and Food Services", "red", "black", 0.8],
                      [
                        "Administrative and Support and Waste Management and Remediation Services",
                        "Green",
                        "black",
                        0.8,
                      ],
                      [
                        "Agriculture, Forestry, Fishing and Hunting",
                        "Yellow",
                        "black",
                        0.8,
                      ],
                      [
                        "Arts, Entertainment, and Recreation",
                        "blue",
                        "black",
                        0.8,
                      ],
                      ["Construction", "Orange", "black", 0.8],
                      ["Educational Services", "Purple", "black", 0.8],
                      ["Finance and Insurance", "Cyan", "black", 0.8],
                      [
                        "Health Care and Social Assistance",
                        "Magenta",
                        "black",
                        0.8,
                      ],
                      ["Information", "Lime", "black", 0.8],
                      [
                        "Management of Companies and Enterprises",
                        "Pink",
                        "black",
                        0.8,
                      ],
                      ["Manufacturing", "Teal", "black", 0.8],
                      [
                        "Mining, Quarrying, and Oil and Gas Extraction",
                        "Lavender",
                        "black",
                        0.8,
                      ],
                      [
                        "Other Services (except Public Administration)",
                        "Brown",
                        "black",
                        0.8,
                      ],
                      [
                        "Professional, Scientific, and Technical Services",
                        "Beige",
                        "black",
                        0.8,
                      ],
                      ["Public Administration", "Maroon", "black", 0.8],
                      [
                        "Real Estate and Rental and Leasing",
                        "#aaffc3",
                        "black",
                        0.8,
                      ],
                      ["Retail Trade", "Olive", "black", 0.8],
                      ["Transportation and Warehousing", "Coral", "black", 0.8],
                      ["Utilities", "Navy", "black", 0.8],
                      ["Wholesale Trade", "Grey", "black", 0.8],
                    ]),
                    (U = [
                      ["Accommodation and Food Services", "red", "black", 0.8],
                      [
                        "Administrative and Support and Waste Management and Remediation Services",
                        "Green",
                        "black",
                        0.8,
                      ],
                      [
                        "Agriculture, Forestry, Fishing and Hunting",
                        "Yellow",
                        "black",
                        0.8,
                      ],
                      [
                        "Arts, Entertainment, and Recreation",
                        "blue",
                        "black",
                        0.8,
                      ],
                      ["Construction", "Orange", "black", 0.8],
                      ["Educational Services", "Purple", "black", 0.8],
                      ["Finance and Insurance", "Cyan", "black", 0.8],
                      [
                        "Health Care and Social Assistance",
                        "Magenta",
                        "black",
                        0.8,
                      ],
                      ["Information", "Lime", "black", 0.8],
                      [
                        "Management of Companies and Enterprises",
                        "Pink",
                        "black",
                        0.8,
                      ],
                      ["Manufacturing", "Teal", "black", 0.8],
                      [
                        "Mining, Quarrying, and Oil and Gas Extraction",
                        "Lavender",
                        "black",
                        0.8,
                      ],
                      [
                        "Other Services (except Public Administration)",
                        "Brown",
                        "black",
                        0.8,
                      ],
                      [
                        "Professional, Scientific, and Technical Services",
                        "Beige",
                        "black",
                        0.8,
                      ],
                      ["Public Administration", "Maroon", "black", 0.8],
                      [
                        "Real Estate and Rental and Leasing",
                        "#aaffc3",
                        "black",
                        0.8,
                      ],
                      ["Retail Trade", "Olive", "black", 0.8],
                      ["Transportation and Warehousing", "Coral", "black", 0.8],
                      ["Utilities", "Navy", "black", 0.8],
                      ["Wholesale Trade", "Grey", "black", 0.8],
                      ["Less than High school", "#4dc3ff", "black", 0.7],
                      ["High school", "#ff5c33", "black", 0.7],
                      ["Some college", "#66ff66", "black", 0.7],
                      ["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
                      ["N/A", "#919191", "black", 0.7],
                      ["14-18", "#4dc3ff", "black", 0.7],
                      ["19-21", "#ff5c33", "black", 0.7],
                      ["22-24", "#66ff66", "black", 0.7],
                      ["25-34", "#ffdb4d", "black", 0.7],
                      ["35-44", "#ffb84d", "black", 0.7],
                      ["45-54", "#00cccc", "black", 0.7],
                      ["55-64", "#6666ff", "black", 0.7],
                      ["65-99", "#ffcc99", "black", 0.7],
                      ["Male", "#3366ff", "black", 0.7],
                      ["Female", "pink", "black", 0.7],
                    ]),
                    (Y = [
                      {
                        chart: wChart,
                        bounds: ["11%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: c,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Number of Workers",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: B,
                      },
                      {
                        chart: pwChart,
                        bounds: ["13%", "12%", "35%", 250],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: c,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Number of Workers",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: B,
                      },
                      {
                        chart: avgChart,
                        bounds: ["56%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: c,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Average Monthly Earnings",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: z,
                      },
                      {
                        chart: pavgChart,
                        bounds: ["61%", "12%", "35%", 250],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: c,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Average Monthly Earnings",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: z,
                      },
                      {
                        chart: newHireChart,
                        bounds: ["11%", "8%", "35%", "45%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "New Hires",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: P,
                      },
                      {
                        chart: pnewHireChart,
                        bounds: ["11%", "8%", "35%", 175],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "New Hires",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: P,
                      },
                      {
                        chart: jc,
                        bounds: ["56%", "8%", "35%", "45%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Job Net Change",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: P,
                      },
                      {
                        chart: pjc,
                        bounds: ["59%", "8%", "35%", 175],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Job Net Change",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: P,
                      },
                      {
                        chart: turnChart,
                        bounds: ["12%", "12%", "80%", "45%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Job Net Change",
                        tickFormat: ".1%",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: W,
                      },
                      {
                        chart: pturnChart,
                        bounds: ["12%", "12%", "75%", 175],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: r,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Turnover Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: W,
                      },
                      {
                        chart: chart8,
                        bounds: ["9%", "12%", "55%", "55%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Total by Industry",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: J,
                        legend: !0,
                      },
                      {
                        chart: pchart8,
                        bounds: ["14%", "12%", "45%", 250],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Total by Industry",
                        tickFormat: ",.1f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: J,
                        legend: !0,
                      },
                      {
                        chart: chart61,
                        bounds: ["9%", "12%", "55%", "55%"],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Separations",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: U,
                        legend: !0,
                      },
                      {
                        chart: pchart61,
                        bounds: ["9%", "12%", "50%", 3e3],
                        categoryAxis: ["x", "Indicator_Value"],
                        xtitle: " ",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Separations",
                        tickFormat: ",.0f",
                        series: "Indicator_Value",
                        lineMarkers: !1,
                        colors: U,
                        legend: !0,
                      },
                    ]),
                    Object(s.createChart)(Y),
                    (window.wdaLookup = [
                      {
                        tab: "collapse1",
                        lbl:
                          "Number of Workers and Average Monthly Earnings by Age and Gender",
                        dm: !0,
                        dmy: !1,
                        dmq: !0,
                        charts: [wChart, avgChart],
                        pcharts: [pwChart, pavgChart],
                        svgName: "#Chart3",
                        data: {
                          data19q4: [
                            workData2019Q4,
                            workDatg2019Q4,
                            averageData2019Q4,
                            averageDatg2019Q4,
                          ],
                          data19q3: [
                            workData2019Q3,
                            workDatg2019Q3,
                            averageData2019Q3,
                            averageDatg2019Q3,
                          ],
                          data19q2: [
                            workData2019Q2,
                            workDatg2019Q2,
                            averageData2019Q2,
                            averageDatg2019Q2,
                          ],
                          data19q1: [
                            workData2019Q1,
                            workDatg2019Q1,
                            averageData2019Q1,
                            averageDatg2019Q1,
                          ],
                          data18q4: [
                            workData2018Q4,
                            workDatg2018Q4,
                            averageData2018Q4,
                            averageDatg2018Q4,
                          ],
                          data18q3: [
                            workData2018Q3,
                            workDatg2018Q3,
                            averageData2018Q3,
                            averageDatg2018Q3,
                          ],
                          data18q2: [
                            workData2018Q2,
                            workDatg2018Q2,
                            averageData2018Q2,
                            averageDatg2018Q2,
                          ],
                          data18q1: [
                            workData2018Q1,
                            workDatg2018Q1,
                            averageData2018Q1,
                            averageDatg2018Q1,
                          ],
                          data17q4: [
                            workData2017Q4,
                            workDatg2017Q4,
                            averageData2017Q4,
                            averageDatg2017Q4,
                          ],
                          data17q3: [
                            workData2017Q3,
                            workDatg2017Q3,
                            averageData2017Q3,
                            averageDatg2017Q3,
                          ],
                          data17q2: [
                            workData2017Q2,
                            workDatg2017Q2,
                            averageData2017Q2,
                            averageDatg2017Q2,
                          ],
                          data17q1: [
                            workData2017Q1,
                            workDatg2017Q1,
                            averageData2017Q1,
                            averageDatg2017Q1,
                          ],
                          data16q4: [
                            workData2016Q4,
                            workDatg2016Q4,
                            averageData2016Q4,
                            averageDatg2016Q4,
                          ],
                          data16q3: [
                            workData2016Q3,
                            workDatg2016Q3,
                            averageData2016Q3,
                            averageDatg2016Q3,
                          ],
                          data16q2: [
                            workData2016Q2,
                            workDatg2016Q2,
                            averageData2016Q2,
                            averageDatg2016Q2,
                          ],
                          data16q1: [
                            workData2016Q1,
                            workDatg2016Q1,
                            averageData2016Q1,
                            averageDatg2016Q1,
                          ],
                        },
                      },
                      {
                        tab: "collapse2",
                        lbl:
                          "New Hires and Job Net Changes by Education and Gender",
                        dm: !0,
                        dmy: !1,
                        dmq: !0,
                        charts: [newHireChart, jc],
                        pcharts: [pnewHireChart, pjc],
                        svgName: "#Chart4",
                        data: {
                          data19q4: [
                            newHireDatc2019Q4,
                            newHireDatg2019Q4,
                            jobDatc2019Q4,
                            jobDatg2019Q4,
                          ],
                          data19q3: [
                            newHireDatc2019Q3,
                            newHireDatg2019Q3,
                            jobDatc2019Q3,
                            jobDatg2019Q3,
                          ],
                          data19q2: [
                            newHireDatc2019Q2,
                            newHireDatg2019Q2,
                            jobDatc2019Q2,
                            jobDatg2019Q2,
                          ],
                          data19q1: [
                            newHireDatc2019Q1,
                            newHireDatg2019Q1,
                            jobDatc2019Q1,
                            jobDatg2019Q1,
                          ],
                          data18q4: [
                            newHireDatc2018Q4,
                            newHireDatg2018Q4,
                            jobDatc2018Q4,
                            jobDatg2018Q4,
                          ],
                          data18q3: [
                            newHireDatc2018Q3,
                            newHireDatg2018Q3,
                            jobDatc2018Q3,
                            jobDatg2018Q3,
                          ],
                          data18q2: [
                            newHireDatc2018Q2,
                            newHireDatg2018Q2,
                            jobDatc2018Q2,
                            jobDatg2018Q2,
                          ],
                          data18q1: [
                            newHireDatc2018Q1,
                            newHireDatg2018Q1,
                            jobDatc2018Q1,
                            jobDatg2018Q1,
                          ],
                          data17q4: [
                            newHireDatc2017Q4,
                            newHireDatg2017Q4,
                            jobDatc2017Q4,
                            jobDatg2017Q4,
                          ],
                          data17q3: [
                            newHireDatc2017Q3,
                            newHireDatg2017Q3,
                            jobDatc2017Q3,
                            jobDatg2017Q3,
                          ],
                          data17q2: [
                            newHireDatc2017Q2,
                            newHireDatg2017Q2,
                            jobDatc2017Q2,
                            jobDatg2017Q2,
                          ],
                          data17q1: [
                            newHireDatc2017Q1,
                            newHireDatg2017Q1,
                            jobDatc2017Q1,
                            jobDatg2017Q1,
                          ],
                          data16q4: [
                            newHireDatc2016Q4,
                            newHireDatg2016Q4,
                            jobDatc2016Q4,
                            jobDatg2016Q4,
                          ],
                          data16q3: [
                            newHireDatc2016Q3,
                            newHireDatg2016Q3,
                            jobDatc2016Q3,
                            jobDatg2016Q3,
                          ],
                          data16q2: [
                            newHireDatc2016Q2,
                            newHireDatg2016Q2,
                            jobDatc2016Q2,
                            jobDatg2016Q2,
                          ],
                          data16q1: [
                            newHireDatc2016Q1,
                            newHireDatg2016Q1,
                            jobDatc2016Q1,
                            jobDatg2016Q1,
                          ],
                        },
                      },
                      {
                        tab: "collapse3",
                        lbl: "Turnover Rate by Gender and Education",
                        dm: !0,
                        dmy: !1,
                        dmq: !0,
                        charts: [turnChart],
                        pcharts: [pturnChart],
                        svgName: "#ChartFive",
                        data: {
                          data19q4: [turnOverData2019Q4, turnOverDatg2019Q4],
                          data19q3: [turnOverData2019Q3, turnOverDatg2019Q3],
                          data19q2: [turnOverData2019Q2, turnOverDatg2019Q2],
                          data19q1: [turnOverData2019Q1, turnOverDatg2019Q1],
                          data18q4: [turnOverData2018Q4, turnOverDatg2018Q4],
                          data18q3: [turnOverData2018Q3, turnOverDatg2018Q3],
                          data18q2: [turnOverData2018Q2, turnOverDatg2018Q2],
                          data18q1: [turnOverData2018Q1, turnOverDatg2018Q1],
                          data17q4: [turnOverData2017Q4, turnOverDatg2017Q4],
                          data17q3: [turnOverData2017Q3, turnOverDatg2017Q3],
                          data17q2: [turnOverData2017Q2, turnOverDatg2017Q2],
                          data17q1: [turnOverData2017Q1, turnOverDatg2017Q1],
                          data16q4: [turnOverData2016Q4, turnOverDatg2016Q4],
                          data16q3: [turnOverData2016Q3, turnOverDatg2016Q3],
                          data16q2: [turnOverData2016Q2, turnOverDatg2016Q2],
                          data16q1: [turnOverData2016Q1, turnOverDatg2016Q1],
                        },
                      },
                      {
                        tab: "collapse4",
                        lbl: "Data by Industry",
                        dm: !0,
                        dmy: !1,
                        dmq: !0,
                        charts: [chart8],
                        pcharts: [pchart8],
                        svgName: "#Chart6",
                        data: {
                          data19q4: [
                            iwdata2019Q4,
                            avgdata2019Q4,
                            netdata2019Q4,
                            turndata2019Q4,
                            hiredata2019Q4,
                          ],
                          data19q3: [
                            iwdata2019Q3,
                            avgdata2019Q3,
                            netdata2019Q3,
                            turndata2019Q3,
                            hiredata2019Q4,
                          ],
                          data19q2: [
                            iwdata2019Q2,
                            avgdata2019Q2,
                            netdata2019Q2,
                            turndata2019Q2,
                            hiredata2019Q4,
                          ],
                          data19q1: [
                            iwdata2019Q1,
                            avgdata2019Q1,
                            netdata2019Q1,
                            turndata2019Q1,
                            hiredata2019Q4,
                          ],
                          data18q4: [
                            iwdata2018Q4,
                            avgdata2018Q4,
                            netdata2018Q4,
                            turndata2018Q4,
                            hiredata2019Q4,
                          ],
                          data18q3: [
                            iwdata2018Q3,
                            avgdata2018Q3,
                            netdata2018Q3,
                            turndata2018Q3,
                            hiredata2019Q4,
                          ],
                          data18q2: [
                            iwdata2018Q2,
                            avgdata2018Q2,
                            netdata2018Q2,
                            turndata2018Q2,
                            hiredata2019Q4,
                          ],
                          data18q1: [
                            iwdata2018Q1,
                            avgdata2018Q1,
                            netdata2018Q1,
                            turndata2018Q1,
                            hiredata2019Q4,
                          ],
                          data17q4: [
                            iwdata2017Q4,
                            avgdata2017Q4,
                            netdata2017Q4,
                            turndata2017Q4,
                            hiredata2019Q4,
                          ],
                          data17q3: [
                            iwdata2017Q3,
                            avgdata2017Q3,
                            netdata2017Q3,
                            turndata2017Q3,
                            hiredata2019Q4,
                          ],
                          data17q2: [
                            iwdata2017Q2,
                            avgdata2017Q2,
                            netdata2017Q2,
                            turndata2017Q2,
                            hiredata2019Q4,
                          ],
                          data17q1: [
                            iwdata2017Q1,
                            avgdata2017Q1,
                            netdata2017Q1,
                            turndata2017Q1,
                            hiredata2019Q4,
                          ],
                          data16q4: [
                            iwdata2016Q4,
                            avgdata2016Q4,
                            netdata2016Q4,
                            turndata2016Q4,
                            hiredata2019Q4,
                          ],
                          data16q3: [
                            iwdata2016Q3,
                            avgdata2016Q3,
                            netdata2016Q3,
                            turndata2016Q3,
                            hiredata2019Q4,
                          ],
                          data16q2: [
                            iwdata2016Q2,
                            avgdata2016Q2,
                            netdata2016Q2,
                            turndata2016Q2,
                            hiredata2019Q4,
                          ],
                          data16q1: [
                            iwdata2016Q1,
                            avgdata2016Q1,
                            netdata2016Q1,
                            turndata2016Q1,
                            hiredata2019Q4,
                          ],
                        },
                      },
                      {
                        tab: "collapse5",
                        lbl: "Separations",
                        dm: !0,
                        dmy: !1,
                        dmq: !0,
                        charts: [chart61],
                        pcharts: [pchart61],
                        svgName: "#Chart17",
                        data: {
                          data19q4: [
                            isepdata2019Q4,
                            asepdata2019Q4,
                            gsepdata2019Q4,
                            esepdata2019Q4,
                          ],
                          data19q3: [
                            isepdata2019Q3,
                            asepdata2019Q3,
                            gsepdata2019Q3,
                            esepdata2019Q3,
                          ],
                          data19q2: [
                            isepdata2019Q2,
                            asepdata2019Q2,
                            gsepdata2019Q2,
                            esepdata2019Q2,
                          ],
                          data19q1: [
                            isepdata2019Q1,
                            asepdata2019Q1,
                            gsepdata2019Q1,
                            esepdata2019Q1,
                          ],
                          data18q4: [
                            isepdata2018Q4,
                            asepdata2018Q4,
                            gsepdata2018Q4,
                            esepdata2018Q4,
                          ],
                          data18q3: [
                            isepdata2018Q3,
                            asepdata2018Q3,
                            gsepdata2018Q3,
                            esepdata2018Q3,
                          ],
                          data18q2: [
                            isepdata2018Q2,
                            asepdata2018Q2,
                            gsepdata2018Q2,
                            esepdata2018Q2,
                          ],
                          data18q1: [
                            isepdata2018Q1,
                            asepdata2018Q1,
                            gsepdata2018Q1,
                            esepdata2018Q1,
                          ],
                          data17q4: [
                            isepdata2017Q4,
                            asepdata2017Q4,
                            gsepdata2017Q4,
                            esepdata2017Q4,
                          ],
                          data17q3: [
                            isepdata2017Q3,
                            asepdata2017Q3,
                            gsepdata2017Q3,
                            esepdata2017Q3,
                          ],
                          data17q2: [
                            isepdata2017Q2,
                            asepdata2017Q2,
                            gsepdata2017Q2,
                            esepdata2017Q2,
                          ],
                          data17q1: [
                            isepdata2017Q1,
                            asepdata2017Q1,
                            gsepdata2017Q1,
                            esepdata2017Q1,
                          ],
                          data16q4: [
                            isepdata2016Q4,
                            asepdata2016Q4,
                            gsepdata2016Q4,
                            esepdata2016Q4,
                          ],
                          data16q3: [
                            isepdata2016Q3,
                            asepdata2016Q3,
                            gsepdata2016Q3,
                            esepdata2016Q3,
                          ],
                          data16q2: [
                            isepdata2016Q2,
                            asepdata2016Q2,
                            gsepdata2016Q2,
                            esepdata2016Q2,
                          ],
                          data16q1: [
                            isepdata2016Q1,
                            asepdata2016Q1,
                            gsepdata2016Q1,
                            esepdata2016Q1,
                          ],
                        },
                      },
                    ]),
                    wdaLookup.map(function (a) {
                      a.yearAvailable = {};
                      a.data &&
                        Object.keys(a.data).map(function (t) {
                          var e = a.data[t].map(function (a) {
                            return a.some(function (a) {
                              var t = a.Amount;
                              return (
                                ("N/A" != t) &
                                (null != t) &
                                ("--" != t) &
                                ("S" != t) &
                                (-1 != t)
                              );
                            });
                          });
                          return (a.yearAvailable[t] = e), e;
                        });
                    }),
                    (window.wdaChartChange = function () {
                      console.log("wdaChartChange");
                      var a = wdaLookup.filter(function (a) {
                          return a.tab == localStorage.getItem("Clicked");
                        })[0],
                        t = document.querySelector("#dropdownMenuQ"),
                        e = t.value,
                        n = a.data[e];
                      if (new Blob([JSON.stringify(n)]).size < 20)
                        for (var d = !1; !d; ) {
                          var c = Object.keys(a.data);
                          (e = c[Math.floor(Math.random() * c.length)]),
                            (d = t.value != e),
                            console.log({ notTheSame: d }, t.value, e),
                            d && ((t.value = e), (n = a.data[e]));
                        }
                      var r = document.getElementById(
                          localStorage.getItem("Clicked") + "_dd"
                        ).value,
                        o = a.yearAvailable[e],
                        i =
                          !!o &&
                          o.some(function (a) {
                            return !a;
                          });
                      document.querySelector(
                        "#notalldataavailablewarning"
                      ).style.display = i ? "inline" : "none";
                      console.log({ notAllChartsAvailable: i }),
                        console.log(a.data[e], a),
                        console.log(
                          "wdaChartChange: ",
                          localStorage.getItem("Clicked"),
                          e,
                          r
                        );
                      var Q = wdaLookup[0],
                        l = wdaLookup[1],
                        p = wdaLookup[2],
                        u = wdaLookup[3],
                        h = wdaLookup[4],
                        b = Q.yearAvailable[e],
                        g = l.yearAvailable[e],
                        m = p.yearAvailable[e],
                        w = u.yearAvailable[e],
                        f = h.yearAvailable[e];
                      "Workers" == r &&
                        (u.charts[0].data =
                          w && w[0] ? Object(s.zeronulls)(u.data[e][0]) : []),
                        "Average Monthly Earnings" == r &&
                          (u.charts[0].data =
                            w && w[1] ? Object(s.zeronulls)(u.data[e][1]) : []),
                        "Job Net Changes" == r &&
                          (u.charts[0].data =
                            w && w[2] ? Object(s.zeronulls)(u.data[e][2]) : []),
                        "New Hires" == r &&
                          (u.charts[0].data =
                            w && w[4] ? Object(s.zeronulls)(u.data[e][4]) : []),
                        "Turnover Rate" == r &&
                          (u.charts[0].data =
                            w && w[3] ? Object(s.zeronulls)(u.data[e][3]) : []),
                        "Industry" == r &&
                          (console.log(
                            "INDUSTRY",
                            Object(s.zeronulls)(h.data[e][0])
                          ),
                          (h.charts[0].data =
                            f && f[0]
                              ? Object(s.zeronulls)(h.data[e][0])
                              : [])),
                        ["Education", "By Education"].includes(r) &&
                          ((l.charts[1].data =
                            g && g[2] ? Object(s.zeronulls)(l.data[e][2]) : []),
                          (l.charts[0].data =
                            g && g[0] ? Object(s.zeronulls)(l.data[e][0]) : []),
                          (p.charts[0].data =
                            m && g[0] ? Object(s.zeronulls)(p.data[e][0]) : []),
                          (h.charts[0].data =
                            f && f[3]
                              ? Object(s.zeronulls)(h.data[e][3])
                              : [])),
                        ["Age", "By Age"].includes(r) &&
                          ((Q.charts[0].data =
                            b && b[0]
                              ? Object(s.zeronulls)(wdaLookup[0].data[e][0])
                              : []),
                          (Q.charts[1].data =
                            b && b[2]
                              ? Object(s.zeronulls)(wdaLookup[0].data[e][2])
                              : []),
                          (h.charts[0].data =
                            f && f[1]
                              ? Object(s.zeronulls)(h.data[e][1])
                              : [])),
                        ["Gender", "By Gender"].includes(r) &&
                          ((Q.charts[0].data =
                            b && b[1] ? Object(s.zeronulls)(l.data[e][1]) : []),
                          (Q.charts[1].data =
                            b && b[3] ? Object(s.zeronulls)(l.data[e][3]) : []),
                          (l.charts[1].data =
                            g && g[3] ? Object(s.zeronulls)(l.data[e][3]) : []),
                          (l.charts[0].data =
                            g && g[1] ? Object(s.zeronulls)(l.data[e][1]) : []),
                          (p.charts[0].data =
                            m && g[1] ? Object(s.zeronulls)(p.data[e][1]) : []),
                          (h.charts[0].data =
                            f && f[2]
                              ? Object(s.zeronulls)(h.data[e][2])
                              : [])),
                        pwChart.draw(),
                        wChart.draw(),
                        avgChart.draw(),
                        pavgChart.draw(),
                        jc.draw(),
                        pjc.draw(),
                        pturnChart.draw(),
                        turnChart.draw(),
                        chart8.draw(),
                        pchart8.draw(),
                        pnewHireChart.draw(),
                        newHireChart.draw(),
                        chart61.draw(),
                        pchart61.draw();
                    }),
                    o.select("#collapse1_dd").on("change", wdaChartChange),
                    o.select("#collapse2_dd").on("change", wdaChartChange),
                    o.select("#collapse3_dd").on("change", wdaChartChange),
                    o.select("#collapse4_dd").on("change", wdaChartChange),
                    o.select("#collapse5_dd").on("change", wdaChartChange),
                    o.select("#dropdownMenuQ").on("change", wdaChartChange),
                    (window.onresize = function () {
                      drawAll();
                    }),
                    ((K = chart8.addLegend(
                      "65%",
                      "5%",
                      "40%",
                      "95%"
                    )).fontSize = "1px"),
                    (pchart8.addLegend("65%", "5%", "40%", "95%").fontSize =
                      "1px"),
                    (chart61.addLegend("65%", "5%", "40%", "95%").fontSize =
                      "1px"),
                    (pchart61.addLegend("65%", "5%", "40%", "95%").fontSize =
                      "1px"),
                    btn7wda,
                    (Z = function () {
                      console.log("Toggle Legend", togNum1, K);
                      var a = Array.from(
                        document.querySelectorAll(".dimple-legend")
                      );
                      console.log({ legendElementArray: a }),
                        1 == togNum1
                          ? ((togNum1 = 0),
                            a.map(function (a) {
                              a.style.display = "block";
                            }))
                          : 0 == togNum1 &&
                            ((togNum1 = 1),
                            a.map(function (a) {
                              a.style.display = "none";
                            }));
                    }),
                    o.select("#btn6wda").on("click", Z),
                    o.select("#btn7wda").on("click", Z);
                case 107:
                case "end":
                  return a.stop();
              }
          }, a);
        })
      )();
    },
    kLjC: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "configCharts", function () {
          return s;
        }),
        e.d(t, "configSvgz", function () {
          return Q;
        }),
        e.d(t, "createDatasets", function () {
          return l;
        }),
        e.d(t, "createChart", function () {
          return p;
        }),
        e.d(t, "pcnt", function () {
          return u;
        }),
        e.d(t, "pcnt2", function () {
          return h;
        }),
        e.d(t, "findGender", function () {
          return b;
        }),
        e.d(t, "cma", function () {
          return g;
        }),
        e.d(t, "dlr", function () {
          return m;
        }),
        e.d(t, "zeronulls", function () {
          return w;
        }),
        e.d(t, "findEdu", function () {
          return f;
        }),
        e.d(t, "findAge", function () {
          return O;
        }),
        e.d(t, "indsList", function () {
          return j;
        }),
        e.d(t, "findIndustry", function () {
          return D;
        }),
        e.d(t, "find", function () {
          return y;
        }),
        e.d(t, "findEmpEdu", function () {
          return v;
        }),
        e.d(t, "findRace", function () {
          return A;
        }),
        e.d(t, "findEmp", function () {
          return k;
        }),
        e.d(t, "findVet", function () {
          return _;
        }),
        e.d(t, "findDisEmp", function () {
          return H;
        });
      var n = e("RIqP"),
        d = e.n(n),
        c = e("VphZ"),
        r = e("KTtF");
      function o(a, t) {
        var e;
        if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
          if (
            Array.isArray(a) ||
            (e = (function (a, t) {
              if (!a) return;
              if ("string" == typeof a) return i(a, t);
              var e = Object.prototype.toString.call(a).slice(8, -1);
              "Object" === e && a.constructor && (e = a.constructor.name);
              if ("Map" === e || "Set" === e) return Array.from(a);
              if (
                "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return i(a, t);
            })(a)) ||
            (t && a && "number" == typeof a.length)
          ) {
            e && (a = e);
            var n = 0,
              d = function () {};
            return {
              s: d,
              n: function () {
                return n >= a.length
                  ? { done: !0 }
                  : { done: !1, value: a[n++] };
              },
              e: function (a) {
                throw a;
              },
              f: d,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          r = !0,
          o = !1;
        return {
          s: function () {
            e = a[Symbol.iterator]();
          },
          n: function () {
            var a = e.next();
            return (r = a.done), a;
          },
          e: function (a) {
            (o = !0), (c = a);
          },
          f: function () {
            try {
              r || null == e.return || e.return();
            } finally {
              if (o) throw c;
            }
          },
        };
      }
      function i(a, t) {
        (null == t || t > a.length) && (t = a.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = a[e];
        return n;
      }
      var s = function (a) {
          a.map(function (a) {
            window["".concat(a[0])] = new r.chart(a[1], a[2]);
          });
        },
        Q = function (a) {
          a.map(function (a) {
            window["".concat(a[0])] = r.newSvg(a[1], a[2], a[3]);
          });
        },
        l = function (a, t, e) {
          e.map(function (e) {
            Array.isArray(e)
              ? e.map(function (e) {
                  window["".concat(t).concat(e)] = r.filterData(a, "Time", [
                    e + "Q1",
                    e + "Q2",
                    e + "Q3",
                    e + "Q4",
                  ]);
                })
              : (window["".concat(t).concat(e)] = r.filterData(a, "Time", e));
          });
        },
        p = function (a) {
          a.map(function (a) {
            var t = a.chart;
            t.setBounds.apply(t, d()(a.bounds));
            var e = t.addCategoryAxis.apply(t, d()(a.categoryAxis));
            (a.xtitle && (e.title = a.xtitle),
            a.order && e.addOrderRule(d()(a.order)),
            a.legend) &&
              (t.addLegend("65%", "5%", "40%", "95%").fontSize = "1px");
            var n = t.addMeasureAxis.apply(t, d()(a.measureAxis));
            (n.title = a.ytitle), (n.tickFormat = c.format(a.tickFormat));
            (([
              "Workers receiving TANF benefits",
              "Workforce/Service in TANF",
              "Recipients amongst MD Workers",
            ].includes(a.ytitle)
              ? t.addSeries(a.series, r.plot.line)
              : t.addSeries(a.series, r.plot.bar)
            ).lineMarkers = !0),
              a.colors &&
                (Array.isArray(a.colors[0])
                  ? a.colors.map(function (a) {
                      return t.assignColor.apply(t, d()(a));
                    })
                  : a.colors && t.assignColor.apply(t, d()(a.colors))),
              t.draw();
          });
        },
        u = function (a) {
          return "N/A" == a || "S" == a
            ? a
            : (null == a) | ("--" == a)
            ? "--"
            : "%" != a.slice(a.length - 1)
            ? c.format(".1%")(1 * a)
            : c.format(".1%")(Number(0.01 * a.slice(0, -1)));
        },
        h = function (a) {
          return "N/A" == a || "S" == a
            ? a
            : (null == a) | ("--" == a)
            ? "--"
            : "%" != a.slice(a.length - 1)
            ? c.format(".1%")(0.01 * a)
            : c.format(".1%")(Number(0.01 * a.slice(0, -1)));
        },
        b = function (a, t) {
          var e = a.filter(function (a) {
            var e = a.Indicator_Status == ["Male", "Female"][t];
            return (e = e || a.Indicator_Value == ["Male", "Female"][t]);
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        g = function (a) {
          return "N/A" == a || "S" == a
            ? a
            : (null == a) | ("--" == a)
            ? "--"
            : c.format(",.0f")(1 * a);
        },
        m = function (a) {
          return "N/A" == a || "S" == a
            ? a
            : (null == a) | ("--" == a)
            ? "--"
            : c.format("$,.0f")(1 * a);
        },
        w = function (a) {
          var t,
            e = [],
            n = o(a);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var d = t.value;
              ("N/A" != d.Amount && "S" != d.Amount) || (d.Amount = 0),
                e.push(d);
            }
          } catch (a) {
            n.e(a);
          } finally {
            n.f();
          }
          return e;
        },
        f = function (a, t) {
          var e = [
              "Educational attainment not available (workers aged 24 or younger)",
              "Less than High school",
              "High school or equivalent, no college",
              "Some college or Associate degree",
              "Bachelor's degree or advanced degree",
            ],
            n = a.filter(function (a) {
              var n = a.Indicator_Value;
              return 0 == t
                ? (["NR", "N/A", "NA"].includes(n),
                  ["NR", "N/A", "NA"].includes(n) || n == e[t])
                : n == e[t];
            });
          return (n = null == (n = n[0]) ? "--" : n.Amount);
        },
        O = function (a, t) {
          var e = a.filter(function (a) {
            return (
              a.Indicator_Value ==
              [
                "14-18",
                "19-21",
                "22-24",
                "25-34",
                "35-44",
                "45-54",
                "55-64",
                "65-99",
              ][t]
            );
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        j = [
          "Agriculture, Forestry, Fishing and Hunting",
          "Mining, Quarrying, and Oil and Gas Extraction",
          "Utilities",
          "Construction",
          "Manufacturing",
          "Wholesale Trade",
          "Retail Trade",
          "Transportation and Warehousing",
          "Information",
          "Finance and Insurance",
          "Real Estate and Rental and Leasing",
          "Professional, Scientific, and Technical Services",
          "Management of Companies and Enterprises",
          "Administrative and Support and Waste Management and Remediation Services",
          "Educational Services",
          "Health Care and Social Assistance",
          "Arts, Entertainment, and Recreation",
          "Accommodation and Food Services",
          "Other Services (except Public Administration)",
          "Public Administration",
        ],
        D = function (a, t) {
          var e = a.filter(function (a) {
            return a.Indicator_Value == j[t];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        y = function (a, t) {
          var e = a.filter(function (a) {
            return a.Time == ["2015", "2016", "2017", "2018", "2019"][t];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        v = function (a, t, e) {
          var n = [
              "Less than Highschool",
              "Highschool",
              "Some College",
              "Bachelor's or Higher",
            ][t],
            d = ["Employed", "Unemployed", "NIL"][e],
            c = a.filter(function (a) {
              return (a.Indicator_Status == n) & (a.Employment_Status == d);
            })[0];
          return (c = null == c ? "--" : c.Amount);
        },
        A = function (a, t) {
          var e = a.filter(function (a) {
            return (
              a.Indicator_Status == ["White", "Black", "Asian", "Hispanic"][t]
            );
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        k = function (a, t) {
          var e = a.filter(function (a) {
            return (
              a.Employment_Status ==
              ["Unemployed", "Labor Force", "Employed"][t]
            );
          });
          return (e = null == (e = e[0]) ? "--" : e.Amount);
        },
        _ = function (a, t) {
          var e = a.filter(function (a) {
            return a.Indicator_Status == ["Veteran", "Non Veteran"][t];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        H = function (a, t, e) {
          var n = a.filter(function (a) {
            return (
              a.Employment_Status ==
                ["Unemployed", "Labor Force", "Employed"][t] &&
              a.Indicator_Status == ["Disabled", "Non Disabled"][e]
            );
          });
          return (n = null == (n = n[0]) ? "--" : n.Amount);
        },
        I = "pop";
      (window.togNum1 = 0),
        (window.onresize = function () {
          return drawAll();
        }),
        (window.c_collapsables = [
          "pop",
          "empl_edu_gend",
          "empl_race_ethn",
          "empl_vet",
          "disabl_pov",
          "tanf",
          "snap",
          "empl_status",
        ]),
        (window.w_collapsables = [
          "collapse1",
          "collapse2",
          "collapse3",
          "collapse4",
          "collapse5",
        ]),
        (window.collapsables = md
          ? [].concat(d()(c_collapsables), d()(w_collapsables), [
              "collapse9",
              "collapse16",
              "collapse17",
              "collapse20",
              "collapse19",
            ])
          : wd
          ? w_collapsables
          : c_collapsables),
        (window.c_prints = [
          "pop_chart_print",
          "empl_edu_gend_chart_print",
          "empl_race_ethn_chart_print",
          "empl_vet_chart_print",
          "disabl_pov_chart_print",
          "tanf_chart_print",
          "empl_status_chart_print",
          "snap_chart_print",
        ]),
        (window.w_prints = [
          "Landing",
          "Print3",
          "Print4",
          "PrintFive",
          "Print6",
          "Print17",
        ]),
        (window.prints = md
          ? [].concat(d()(c_prints), d()(w_prints), [
              "Print11",
              "Print18",
              "Print19",
              "Print20",
              "Print21",
            ])
          : wd
          ? w_prints
          : c_prints),
        (window.c_charts = [
          "pop_chart",
          "empl_edu_gend_chart",
          "empl_race_ethn_chart",
          "empl_vet_chart",
          "disabl_pov_chart",
          "tanf_chart",
          "empl_status_chart",
          "snap_chart",
          "Landing",
        ]),
        (window.w_charts = [
          "Chart3",
          "Chart4",
          "ChartFive",
          "Chart6",
          "Chart17",
        ]),
        (window.charts = md
          ? [].concat(d()(c_charts), d()(w_charts), [
              "Chart11",
              "Chart18",
              "Chart19",
              "Chart20",
              "Chart21",
            ])
          : wd
          ? w_charts
          : c_charts),
        (window.stylem = function (a, t, e) {
          return a.forEach(function (a) {
            document.getElementById(a).style[t] = e;
          });
        }),
        (window.hideall = function (a) {
          return stylem(a, "display", "none");
        }),
        (window.showall = function (a) {
          return stylem(a, "display", "inline");
        }),
        (window.toggleTab = function (a, t) {
          hideall(collapsables),
            showall(a),
            (I = t),
            drawAll(),
            hideall(prints);
        }),
        (window.popchart = function () {
          return toggleTab(["collapse1", "collapse5"], 1);
        }),
        (window.educhart = function () {
          return toggleTab(["collapse2", "collapse5"], 2);
        }),
        (window.racechart = function () {
          return toggleTab(["collapse3", "collapse5"], 3);
        }),
        (window.vetchart = function () {
          return toggleTab(["collapse4", "collapse5"], 4);
        }),
        (window.sepchart = function () {
          return toggleTab(["collapse5", "collapse5"], 5);
        }),
        (window.drawAll = function () {
          (wd && !md) ||
            (pop_chart.draw(0, !0),
            mhhi_chart.draw(0, !0),
            empl_edu_chart.draw(0, !0),
            empl_edu_gend_chart.draw(0, !0),
            empl_race_ethn_chart.draw(0, !0),
            chart5.draw(0, !0),
            window.empl_vet_chart.draw(0, !0),
            emp_dis_chart.draw(0, !0),
            empl_status_chart.draw(0, !0),
            tanf_attainment_chart.draw(0, !0),
            tanf_rate_chart.draw(0, !0),
            tanf_data.draw(0, !0),
            emplStatusCounties.includes(CountyName) ||
              (window.work_exp_pov_chart.draw(0, !0),
              pwork_exp_pov_chart.draw(0, !0)),
            snap_chart.draw(0, !0),
            snap_chart2.draw(0, !0),
            ppop_chart.draw(0, !0),
            mhhi_chart_print.draw(0, !0),
            pempl_edu_chart.draw(0, !0),
            pempl_edu_gend_chart.draw(0, !0),
            pempl_race_ethn_chart.draw(0, !0),
            pchart5.draw(0, !0),
            empl_vet_print_chart.draw(0, !0),
            emp_dis_chart_print.draw(0, !0),
            pempl_status_chart.draw(0, !0),
            ptanf_attainment_chart.draw(0, !0),
            ptanf_rate_chart.draw(0, !0),
            ptanf_data.draw(0, !0),
            psnap_chart.draw(0, !0),
            psnap_chart2.draw(0, !0)),
            (wd || md) &&
              (window.wChart.draw(0, !0),
              avgChart.draw(0, !0),
              jc.draw(0, !0),
              newHireChart.draw(0, !0),
              turnChart.draw(0, !0),
              chart8.draw(0, !0),
              chart61.draw(0, !0),
              pwChart.draw(0, !0),
              pavgChart.draw(0, !0),
              pjc.draw(0, !0),
              pnewHireChart.draw(0, !0),
              pturnChart.draw(0, !0),
              pchart8.draw(0, !0),
              pchart61.draw(0, !0)),
            md &&
              (chart15.draw(0, !0),
              aprogChart.draw(0, !0),
              aNewChart.draw(0, !0),
              chart1.draw(0, !0),
              chart18.draw(0, !0));
        }),
        (window.printClick = function () {
          1 == I
            ? (popchart(),
              (document.getElementById("Chart3").style.display = "none"),
              (document.getElementById("Print3").style.display = "inline"),
              drawAll())
            : 2 == I
            ? (educhart(),
              (document.getElementById("Chart4").style.display = "none"),
              (document.getElementById("Print4").style.display = "inline"))
            : 3 == I
            ? (racechart(),
              (document.getElementById("ChartFive").style.display = "none"),
              (document.getElementById("PrintFive").style.display = "inline"))
            : 4 == I
            ? (vetchart(),
              (document.getElementById("Chart6").style.display = "none"),
              (document.getElementById("Print6").style.display = "inline"))
            : 5 == I
            ? (sepchart(),
              (document.getElementById("Chart17").style.display = "none"),
              (document.getElementById("Print17").style.display = "inline"))
            : "pop" == I
            ? (pop(), hideall(["pop_chart"]), showAll(["pop_chart_print"]))
            : "educhart" == I
            ? (educhart(),
              hideall(["empl_edu_gend_chart"]),
              showAll(["empl_edu_gend_chart_print"]))
            : "racechart" == I
            ? (racechart(),
              hideall(["empl_race_ethn_chart"]),
              showAll(["empl_race_ethn_chart_print"]))
            : "vetchart" == I
            ? (vetchart(),
              hideall(["empl_vet_chart"]),
              showAll(["empl_vet_chart_print"]))
            : "disbilities" == I
            ? (dischart(),
              hideall(["disabl_pov_chart"]),
              showAll(["disabl_pov_chart_print"]))
            : "tanf" == I
            ? (tanf(), hideall(["tanf_chart"]), showAll(["tanf_chart_print"]))
            : "empl_status" == I
            ? (empl_status(),
              hideall(["empl_status_chart"]),
              showAll(["empl_status_chart_print"]))
            : "tanf_attainment" == I &&
              (tanf_attainment(),
              hideall(["snap_chart_print"]),
              showAll(["snap_chart"])),
            drawAll(),
            window.print();
        }),
        (window.printAll = function () {
          showAll(collapsables),
            hideall(charts),
            showall(prints),
            drawAll(),
            window.print();
        }),
        (window.onafterprint = function () {
          hideall(collapsables),
            hideall(prints),
            showall(charts),
            showAll(["Landing"]);
        }),
        (window.onload = function () {
          (document.getElementById("dropdownMenu").style.display = "none"),
            (document.getElementById("dropdownMenuY").style.display = "none"),
            (document.getElementById("dropdownMenuQ").style.display = "none"),
            (document.getElementById("title").style.display = "none"),
            document.querySelectorAll("[data-lbl]").forEach(function (a) {
              a.addEventListener("click", function () {
                (I = a.dataset.lbl),
                  localStorage.setItem("Clicked", I),
                  (document.querySelector(
                    "#notalldataavailablewarning"
                  ).style.display = "none");
                var t = document.getElementById("title");
                t.style.display = "inline";
                document.querySelector("#dropdownMenu");
                var e = document.querySelector("#dropdownMenuY"),
                  n = document.querySelector("#dropdownMenuQ"),
                  c =
                    "undefined" != typeof countyLookup
                      ? "undefined" != typeof wdaLookup
                        ? [].concat(d()(countyLookup), d()(wdaLookup))
                        : countyLookup
                      : wdaLookup,
                  r = (c = md ? [].concat(d()(c), d()(mdLookup)) : c).filter(
                    function (a) {
                      return a.tab == I;
                    }
                  )[0];
                (t.innerHTML = r.lbl),
                  console.log({ whichTab: I }),
                  console.log({ viewing: localStorage.getItem("viewing") }),
                  console.log({ tabInfo: r });
                var o = !1,
                  i = r.dmy ? "data16" : "data16q4",
                  s = function (a) {
                    Array.from(a.children).map(function (t) {
                      var e = r.yearAvailable[t.value];
                      !!e &&
                      e.some(function (e) {
                        return (
                          a.value == t.value && (o = !0),
                          a.value != t.value && e && t.value,
                          !!e
                        );
                      })
                        ? (t.style.display = "inline")
                        : ((t.style.display = "none"),
                          console.log("nothing", t));
                    });
                  };
                r && r.dmy && s(e),
                  r && r.dmq && s(n),
                  console.log(
                    { currentYearSelectionAvailable: o },
                    { validAlternateYear: i }
                  ),
                  o ||
                    (console.log("Changing Quartr"),
                    r.dmy ? e.value : n.value,
                    document
                      .querySelector("option[value=".concat(i, "]"))
                      .click());
                var Q = function (a, t, e) {
                  document.getElementById(a).style.display = t[e]
                    ? "inline"
                    : "none";
                };
                Q("dropdownMenu", r, "dm"),
                  Q("dropdownMenuY", r, "dmy"),
                  Q("dropdownMenuQ", r, "dmq"),
                  hideall(collapsables),
                  showall([I]),
                  hideall(prints),
                  drawAll(),
                  r.dmy && countyChartChange(),
                  r.dmq && wdaChartChange();
              }),
                a.removeAttribute("disabled");
            });
        });
    },
  },
]);
