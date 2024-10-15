 /**
   * Treeview syntax highlighting based on highlight.js
   * Copyright (c) 2014-2015, Asciidocfx Team, (MIT Licensed)
   * https://github.com/asciidocfx/highlight-treeview.js
   * Adapted for use with Antora
   */
export default (hljs) => {
  hljs.registerLanguage('treeview', function(hljs) {
    return {
      contains: [
        // MARK: folders
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
        // MARK: Documents
        {
          className: 'file document',
          begin: /[^ \n\t  ].+\.(asc(iidoc)?|ad(oc)?|tex)/,
          relevance: 0
        },
        {
          className: 'file markdown',
          begin: /[^ \n\t  ].+\.(md|markdown)/,
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
          className: 'file excel',
          begin: /[^ \n\t].+\.(xls(x)?)$/,
          relevance: 0
        },
        {
          className: 'file csv',
          begin: /[^ \n\t].+\.(csv)$/,
          relevance: 0
        },
        {
          className: 'file spreadsheet',
          begin: /[^ \n\t].+\.(f?ods)$/,
          relevance: 0
        },
        {
          className: 'file word',
          begin: /[^ \n\t].+\.(doc(m|x)?)$/,
          relevance: 0
        },
        {
          className: 'file document',
          begin: /[^ \n\t].+\.(doc(m|x)?|odt)$/,
          relevance: 0
        },
        {
          className: 'file powerpoint',
          begin: /[^ \n\t].+\.(pps|ppt(x)?)$/,
          relevance: 0
        },
        // MARK: sources
        {
          className: 'file html',
          begin: /[^ \n\t  ].+\.(html)/,
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
          className: 'file javascript',
          begin: /[^ \n\t  ].+\.(js|jsx)\b/,
          relevance: 0
        },
        {
          className: 'file typescript',
          begin: /[^ \n\t  ].+\.(ts)\b/,
          relevance: 0
        },
        {
          className: 'file source',
          begin: /[^ \n\t  ].+\.(xslt?)\b/,
          relevance: 0
        },
        {
          className: 'file source',
          begin:
            /[^ \n\t].+\.(asp(x)?|c(pp|lass)?|(h)?|jav(a)?|aj|php|rb)$/,
          relevance: 0
        },
        // MARK: media
        {
          className: 'file video',
          begin:
            /[^ \n\t].+\.(cda|avi|flv|mkv|mov|mp4|mpeg|mpg|ogv|webm|divx|wmv)$/,
          relevance: 0
        },
        {
          className: 'file image',
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
        // MARK: rest
        {
          className: 'file plain',
          begin:
            /[^ \n\t  ].+\.(azw(3)?|sh|bat|log|info|txt|pom|lst|project|iml)$/,
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
        {
          className: 'file archive',
          begin: /[^ \n\t].+\.(7z|bz(2)?|gz|rar|tar|tgz|zip|repo|jar)$/,
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
  })
}
