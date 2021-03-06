// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Post = require("../components/Post.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Error = require("./Error.js");
var Utils = require("../Utils.js");
var React = require("react");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Loading = require("./Loading.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/lib/js/src/ReasonApollo.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Graphql_error = Caml_exceptions.create("FeedPage.GetFeed.Graphql_error");

var query = "query getFeed  {\nfeed  {\nid  \nisPublished  \ntitle  \ntext  \n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["feed"];
    var match$1 = Js_json.decodeArray(value$1);
    var tmp;
    if (match$1) {
      tmp = match$1[0].map((function (value) {
              var match = Js_json.decodeObject(value);
              if (match) {
                var value$1 = match[0];
                var value$2 = value$1["id"];
                var match$1 = Js_json.decodeString(value$2);
                var tmp;
                if (match$1) {
                  tmp = match$1[0];
                } else {
                  throw Graphql_error;
                }
                var value$3 = value$1["isPublished"];
                var match$2 = Js_json.decodeBoolean(value$3);
                var tmp$1;
                if (match$2) {
                  tmp$1 = match$2[0];
                } else {
                  throw Graphql_error;
                }
                var value$4 = value$1["title"];
                var match$3 = Js_json.decodeString(value$4);
                var tmp$2;
                if (match$3) {
                  tmp$2 = match$3[0];
                } else {
                  throw Graphql_error;
                }
                var value$5 = value$1["text"];
                var match$4 = Js_json.decodeString(value$5);
                var tmp$3;
                if (match$4) {
                  tmp$3 = match$4[0];
                } else {
                  throw Graphql_error;
                }
                return {
                        id: tmp,
                        isPublished: tmp$1,
                        title: tmp$2,
                        text: tmp$3
                      };
              } else {
                throw Graphql_error;
              }
            }));
    } else {
      throw Graphql_error;
    }
    return {
            feed: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function make() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetFeed = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetFeedQuery = ReasonApollo.CreateQuery([
      query,
      parse
    ]);

var component = ReasonReact.statelessComponent("FeedPage");

function make$1() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var getFeedQuery = make(/* () */0);
      return ReasonReact.element(/* None */0, /* None */0, Curry.app(GetFeedQuery[/* make */3], [
                      /* Some */[getFeedQuery.variables],
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      /* None */0,
                      (function (param) {
                          var result = param[/* result */0];
                          var tmp;
                          if (typeof result === "number") {
                            tmp = result ? Utils.ste("No Data") : ReasonReact.element(/* None */0, /* None */0, Loading.make(/* array */[]));
                          } else if (result.tag) {
                            tmp = $$Array.mapi((function (index, post) {
                                    return ReasonReact.element(/* Some */[Pervasives.string_of_int(index)], /* None */0, Post.make(post.isPublished, post, /* array */[]));
                                  }), result[0].feed);
                          } else {
                            console.log(result[0]);
                            tmp = ReasonReact.element(/* None */0, /* None */0, $$Error.make(/* None */0, /* array */[]));
                          }
                          return React.createElement("div", undefined, React.createElement("div", {
                                          className: "fl w-100 pl4 pr4"
                                        }, React.createElement("h1", undefined, Utils.ste("Feed"))), tmp);
                        })
                    ]));
    });
  return newrecord;
}

exports.GetFeed = GetFeed;
exports.GetFeedQuery = GetFeedQuery;
exports.component = component;
exports.make = make$1;
/* GetFeedQuery Not a pure module */
