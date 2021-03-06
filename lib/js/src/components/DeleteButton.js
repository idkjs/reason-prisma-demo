// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../Utils.js");
var React = require("react");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/lib/js/src/ReasonApollo.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Graphql_error = Caml_exceptions.create("DeleteButton.DeletePost.Graphql_error");

var query = "mutation DeletePost($id: ID!)  {\ndeletePost(id: $id)  {\nid  \n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["deletePost"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["id"];
        var match$3 = Js_json.decodeString(value$2);
        var tmp$2;
        if (match$3) {
          tmp$2 = match$3[0];
        } else {
          throw Graphql_error;
        }
        tmp$1 = {
          id: tmp$2
        };
      } else {
        throw Graphql_error;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            deletePost: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function json_of_optional(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_array(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_ID(value) {
  return value;
}

function make(id, _) {
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "id",
                  id
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var id = variables.id;
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "id",
                  id
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var DeletePost = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* json_of_optional */json_of_optional,
  /* json_of_array */json_of_array,
  /* json_of_ID */json_of_ID,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var DeletePostMutation = ReasonApollo.CreateMutation([
      query,
      parse
    ]);

var component = ReasonReact.statelessComponent("DeleteButton");

function make$1(id, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var deletePostMutation = make(id, /* () */0);
      return ReasonReact.element(/* None */0, /* None */0, Curry._4(DeletePostMutation[/* make */4], /* None */0, /* None */0, /* None */0, (function (mutation, _) {
                        return React.createElement("a", {
                                    className: "f6 dim br1 ba ph3 pv2 mb2 dib black pointer",
                                    onClick: (function () {
                                        Curry._3(mutation, /* Some */[deletePostMutation.variables], /* Some */[/* array */["getDraftsQuery"]], /* () */0);
                                        return ReasonReact.Router[/* push */0]("/");
                                      })
                                  }, Utils.ste("Delete"));
                      })));
    });
  return newrecord;
}

exports.DeletePost = DeletePost;
exports.DeletePostMutation = DeletePostMutation;
exports.component = component;
exports.make = make$1;
/* DeletePostMutation Not a pure module */
