;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight')
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
  hljs.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'))
  hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))
  hljs.registerLanguage('cs', require('highlight.js/lib/languages/cs'))
  hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
  hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'))
  hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
  hljs.registerLanguage('elixir', require('highlight.js/lib/languages/elixir'))
  hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
  hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
  hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'))
  hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'))
  hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))
  hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
  hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
  hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
  hljs.registerLanguage('nix', require('highlight.js/lib/languages/nix'))
  hljs.registerLanguage('none', require('highlight.js/lib/languages/plaintext'))
  hljs.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'))
  hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'))
  hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
  hljs.registerLanguage('properties', require('highlight.js/lib/languages/properties'))
  hljs.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
  hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
  hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'))
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
  hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
  hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))

  /**
   * Treeview syntax highlighting based on highlight.js
   * Copyright (c) 2014-2015, Asciidocfx Team, (MIT Licensed)
   * https://github.com/asciidocfx/highlight-treeview.js
   * Adapted for use with Antora
   */
  hljs.registerLanguage('treeview', function(hljs) {
    return {
      contains: [
        {
          className: 'folder-last-branch win',
          begin: /(\\|\└)(\-|\─){3}/,
          relevance: 0
        },
        {
          className: 'folder-last-branch',
          begin: /(\`|\└)(\-|\─){2}/,
          relevance: 0
        },
        {
          className: 'folder-branch win',
          begin: /(\-|\─){3}/,
          relevance: 0
        },
        {
          className: 'folder-branch',
          begin: /(\-|\─){2}/,
          relevance: 0
        },
        {
          className: 'tvline',
          begin: /\||\¦|\│|\+|\├/,
          relevance: 0
        },
        {
          className: 'file plain',
          begin:
            /[^ \n\t  ].+\.(azw(3)?|sh|bat|csv|log|info|txt|pom|lst|project|iml)$/,
          relevance: 0
        },
        /* new */
        {
          className: 'file document',
          begin: /[^ \n\t  ].+\.(asc(iidoc)?|ad(oc)?|md|markdown|tex)/,
          relevance: 0
        },
        {
          className: 'file css',
          begin: /[^ \n\t  ].+\.(css)/,
          relevance: 0
        },
        {
          className: 'file layout',
          begin: /[^ \n\t  ].+\.(hbs)/,
          relevance: 0
        },
        {
          className: 'file source',
          begin: /[^ \n\t  ].+\.(js|jsx)\b/,
          relevance: 0
        },
        {
          className: 'file source',
          begin: /[^ \n\t  ].+\.(xslt?)\b/,
          relevance: 0
        },
        {
          className: 'file settings',
          begin: /[^ \n\t  ].+\.(json)/,
          relevance: 0
        },
        {
          className: 'file settings',
          begin:
            /[^ \n\t  ].+\.(ini|config|conf|properties|prop|settings|props|toml|cfg)\b/,
          relevance: 10
        },
        {
          className: 'file settings',
          begin: /[^ \n\t  ].+\.(xml(.j2)?)/,
          relevance: 0
        },
        {
          className: 'file settings',
          begin: /[^ \n\t  ].+\.(y(a)?ml(.j2)?)\b/,
          relevance: 0
        },
        /** old */
        {
          className: 'file video',
          begin:
            /[^ \n\t].+\.(cda|avi|flv|mkv|mov|mp4|mpeg|mpg|ogv|webm|divx|wmv)$/,
          relevance: 0
        },
        {
          className: 'file source',
          begin:
            /[^ \n\t].+\.(asp(x)?|c(pp|lass)?|h(tm(l)?|(h)?)|jav(a)?|aj|php|rb)$/,
          relevance: 0
        },
        {
          className: 'file photo',
          begin:
            /[^ \n\t].+\.(bmp|eps|gif|jpg|jpe(g)?|png|svg|tif(f)?|ico|tga|targa|j2(k|c)|jng)$/,
          relevance: 0
        },
        {
          className: 'file audio',
          begin:
            /[^ \n\t].+\.(aac|au|cda|flac|mp(3|2)|oga|ogg|wav|wma|flac|ac3|mac)$/,
          relevance: 0
        },
        {
          className: 'file archive',
          begin: /[^ \n\t].+\.(7z|bz(2)?|gz|rar|tar|tgz|zip|repo|jar)$/,
          relevance: 0
        },
        {
          className: 'file book',
          begin: /[^ \n\t].+\.(epub(3)?|mobi)$/,
          relevance: 0
        },
        {
          className: 'file pdf',
          begin: /[^ \n\t].+\.(pdf)$/,
          relevance: 0
        },
        {
          className: 'file xls',
          begin: /[^ \n\t].+\.(xls(x)?|csv|f?ods)$/,
          relevance: 0
        },
        {
          className: 'file document',
          begin: /[^ \n\t].+\.(doc(m|x)?|odt)$/,
          relevance: 0
        },
        {
          className: 'file ppt',
          begin: /[^ \n\t].+\.(pps|ppt(x)?)$/,
          relevance: 0
        },
       {
           className: "hiddenfile",
           begin: /\..+/,
           relevance: 0
         },
        {
          className: 'file plain',
          begin: /(readme|README|CNAME)$/,
          relevance: 0
        },
        {
          className: 'folder',
          begin: /[^ \n\t].+(\/)?/,
          relevance: 0
        }
      ]
    }
  });

  ;[].slice.call(document.querySelectorAll('pre code.hljs[data-lang]')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
