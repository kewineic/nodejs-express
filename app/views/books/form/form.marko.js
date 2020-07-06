// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto_nodejs$1.0.0/app/views/books/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/style-form.css\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"header\"> <h1>Cadastro de livros</h1></header><form action=\"/livros\" method=\"post\"><div>");

  var for__10 = 0;

  marko_forEach(data.validateErrors, function(errors) {
    var keyscope__11 = "[" + ((for__10++) + "]");

    out.w("<div>" +
      marko_escapeXml(errors.param) +
      " - " +
      marko_escapeXml(errors.msg) +
      "</div>");
  });

  out.w("</div>");

  if (data.livro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.livro.id) +
      "\"></div>");
  }

  out.w("<div class=\"input-box\"><label for=\"titulo\">Titulo:</label><input type=\"text\" id=\"titulo\" name=\"titulo\" value=\"" +
    marko_escapeXmlAttr(data.livro.titulo) +
    "\" placeholder=\"coloque o titulo\"></div><div class=\"input-box\"><label for=\"preco\">Preço:</label><input type=\"number\" id=\"preco\" name=\"preco\" value=\"" +
    marko_escapeXmlAttr(data.livro.preco) +
    "\" placeholder=\"150.25\"></div><div class=\"input-box\"><label for=\"descricao\">Descrição:</label><textarea cols=\"20\" rows=\"10\" id=\"descricao\" name=\"descricao\" placeholder=\"fale sobre o livro\">" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea></div><div class=\"input-box\"><input id=\"button\" type=\"submit\" value=\"Salvar\"></div></form> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projeto_nodejs$1.0.0/app/views/books/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
