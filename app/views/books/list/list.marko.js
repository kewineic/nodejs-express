// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto_nodejs$1.0.0/app/views/books/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html> ");

  var for__1 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__2 = "[" + ((for__1++) + "]");

    out.w("<ul><li>" +
      marko_escapeXml(livro.id) +
      "</li><li>" +
      marko_escapeXml(livro.titulo) +
      "</li></ul>");
  });

  out.w(" </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projeto_nodejs$1.0.0/app/views/books/list/list.marko"
  };
