ace.define('ace/snippets/bookstrap-ja', ['require', 'exports', 'module' ], function(require, exports, module) {
exports.snippetText = "# Bootstrap\n\
\n\
snippet container\n\
	<div class=\"container\" markdown=\"1\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet lead\n\
	<p class=\"lead\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet small\n\
	<small>${1:テキスト}</small>\n\
\n\
snippet text-left\n\
	<p class=\"text-left\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-center\n\
	<p class=\"text-center\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-right\n\
	<p class=\"text-right\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-muted\n\
	<p class=\"text-muted\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-primary\n\
	<p class=\"text-primary\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-success\n\
	<p class=\"text-success\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-info\n\
	<p class=\"text-info\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-warning\n\
	<p class=\"text-warning\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet text-danger\n\
	<p class=\"text-danger\" markdown=\"1\">${1:ここにはMarkdownが書けます}</p>\n\
\n\
snippet abbr\n\
	<abbr title=\"${1:正式名称}\">${2:略語}</abbr>\n\
\n\
snippet initialism\n\
	<abbr title=\"${1:正式名称}\" class=\"initialism\">${2:イニシャル}</abbr>\n\
\n\
snippet blockquote--source\n\
	<blockquote markdown=\"1\">\n\
	${1:「いいですよ。その通りです。私は拡張現実を生きています。フルタイムの『ドリーマー』です」}\n\
	<footer>${2:藤井太洋} <cite title=\"${3:Gene Mapper}\">${4:『Gene Mapper』}</cite></footer>\n\
	</blockquote>\n\
\n\
snippet blockquote-reverse\n\
	<blockquote class=\"blockquote-reverse\" markdown=\"1\">\n\
	${1:「いいですよ。その通りです。私は拡張現実を生きています。フルタイムの『ドリーマー』です」}\n\
	</blockquote>\n\
\n\
snippet blockquote-reverse--source\n\
	<blockquote class=\"blockquote-reverse\" markdown=\"1\">\n\
	${1:「いいですよ。その通りです。私は拡張現実を生きています。フルタイムの『ドリーマー』です」}\n\
	<footer>${2:藤井太洋} <cite title=\"${3:Gene Mapper}\">${4:『Gene Mapper』}</cite></footer>\n\
	</blockquote>\n\
\n\
snippet list-unstyled\n\
	<ul class=\"list-unstyled\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ul>\n\
\n\
snippet list-unstyled--ul\n\
	<ul class=\"list-unstyled\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ul>\n\
\n\
snippet list-unstyled--ol\n\
	<ol class=\"list-unstyled\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ol>\n\
\n\
snippet list-inline\n\
	<ul class=\"list-inline\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ul>\n\
\n\
snippet list-inline--ul\n\
	<ul class=\"list-inline\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ul>\n\
\n\
snippet list-inline--ol\n\
	<ol class=\"list-inline\">\n\
	<li>${1:アイテム}</li>\n\
	<li>${2:アイテム}</li>\n\
	<li>${3:アイテム}</li>\n\
	</ol>\n\
\n\
snippet dl-horizontal\n\
	<dl class=\"dl-horizontal\">\n\
	<dt>${1:アイテム}</dt>\n\
	<dd>${2:説明}</dd>\n\
	</dl>\n\
\n\
snippet pull-left\n\
	<div class=\"pull-left\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet pull-right\n\
	<div class=\"pull-right\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet center-block\n\
	<div class=\"center-block\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet clearfix\n\
	<div class=\"clearfix\"></div>\n\
\n\
## Tables\n\
\n\
snippet table\n\
	<table class=\"table\">\n\
	<thead>\n\
	<tr>\n\
	<th>${1:見出しセル}</th>\n\
	<th>${2:見出しセル}</th>\n\
	<th>${3:見出しセル}</th>\n\
	</tr>\n\
	</thead>\n\
	<tbody>\n\
	<tr>\n\
	<td>${4:セル}</td>\n\
	<td>${5:セル}</td>\n\
	<td>${6:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${7:セル}</td>\n\
	<td>${8:セル}</td>\n\
	<td>${9:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${10:セル}</td>\n\
	<td>${11:セル}</td>\n\
	<td>${12:セル}</td>\n\
	</tr>\n\
	</tbody>\n\
	</table>\n\
\n\
snippet table-striped\n\
	<table class=\"table table-striped\">\n\
	<thead>\n\
	<tr>\n\
	<th>${1:見出しセル}</th>\n\
	<th>${2:見出しセル}</th>\n\
	<th>${3:見出しセル}</th>\n\
	</tr>\n\
	</thead>\n\
	<tbody>\n\
	<tr>\n\
	<td>${4:セル}</td>\n\
	<td>${5:セル}</td>\n\
	<td>${6:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${7:セル}</td>\n\
	<td>${8:セル}</td>\n\
	<td>${9:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${10:セル}</td>\n\
	<td>${11:セル}</td>\n\
	<td>${12:セル}</td>\n\
	</tr>\n\
	</tbody>\n\
	</table>\n\
\n\
snippet table-bordered\n\
	<table class=\"table table-bordered\">\n\
	<thead>\n\
	<tr>\n\
	<th>${1:見出しセル}</th>\n\
	<th>${2:見出しセル}</th>\n\
	<th>${3:見出しセル}</th>\n\
	</tr>\n\
	</thead>\n\
	<tbody>\n\
	<tr>\n\
	<td>${4:セル}</td>\n\
	<td>${5:セル}</td>\n\
	<td>${6:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${7:セル}</td>\n\
	<td>${8:セル}</td>\n\
	<td>${9:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${10:セル}</td>\n\
	<td>${11:セル}</td>\n\
	<td>${12:セル}</td>\n\
	</tr>\n\
	</tbody>\n\
	</table>\n\
\n\
snippet table-hover\n\
	<table class=\"table table-hover\">\n\
	<thead>\n\
	<tr>\n\
	<th>${1:見出しセル}</th>\n\
	<th>${2:見出しセル}</th>\n\
	<th>${3:見出しセル}</th>\n\
	</tr>\n\
	</thead>\n\
	<tbody>\n\
	<tr>\n\
	<td>${4:セル}</td>\n\
	<td>${5:セル}</td>\n\
	<td>${6:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${7:セル}</td>\n\
	<td>${8:セル}</td>\n\
	<td>${9:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${10:セル}</td>\n\
	<td>${11:セル}</td>\n\
	<td>${12:セル}</td>\n\
	</tr>\n\
	</tbody>\n\
	</table>\n\
\n\
snippet table-condensed\n\
	<table class=\"table table-condensed\">\n\
	<thead>\n\
	<tr>\n\
	<th>${1:見出しセル}</th>\n\
	<th>${2:見出しセル}</th>\n\
	<th>${3:見出しセル}</th>\n\
	</tr>\n\
	</thead>\n\
	<tbody>\n\
	<tr>\n\
	<td>${4:セル}</td>\n\
	<td>${5:セル}</td>\n\
	<td>${6:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${7:セル}</td>\n\
	<td>${8:セル}</td>\n\
	<td>${9:セル}</td>\n\
	</tr>\n\
	<tr>\n\
	<td>${10:セル}</td>\n\
	<td>${11:セル}</td>\n\
	<td>${12:セル}</td>\n\
	</tr>\n\
	</tbody>\n\
	</table>\n\
\n\
## Breadcrumbs\n\
snippet breadcrumb\n\
	<ol class=\"breadcrumb\">\n\
	<li><a href=\"#\">${1:リンク}</a></li>\n\
	<li><a href=\"#\">${2:リンク}</a></li>\n\
	<li class=\"active\">${3:現在位置}</li>\n\
	</ol>\n\
\n\
## Labels\n\
snippet label\n\
	<span class=\"label label-default\">${1:ラベル}</span>\n\
\n\
snippet label-default\n\
	<span class=\"label label-default\">${1:ラベル}</span>\n\
\n\
snippet label-primary\n\
	<span class=\"label label-primary\">${1:ラベル}</span>\n\
\n\
snippet label-success\n\
	<span class=\"label label-success\">${1:ラベル}</span>\n\
\n\
snippet label-info\n\
	<span class=\"label label-info\">${1:ラベル}</span>\n\
\n\
snippet label-warning\n\
	<span class=\"label label-warning\">${1:ラベル}</span>\n\
\n\
snippet label-danger\n\
	<span class=\"label label-danger\">${1:ラベル}</span>\n\
\n\
## Jumbotron\n\
snippet jumbotron\n\
	<div class=\"jumbotron\">\n\
	<h1>${1:見出し}</h1>\n\
	<p>${2:テキスト}</p>\n\
	<p><a class=\"btn btn-primary btn-lg\" role=\"button\">${3:ボタンテキスト}</a></p>\n\
	</div>\n\
\n\
snippet jumbotron__container\n\
	<div class=\"jumbotron\">\n\
	<div class=\"container\">\n\
	<h1>${1:見出し}</h1>\n\
	<p>${2:テキスト}</p>\n\
	<p><a class=\"btn btn-primary btn-lg\" role=\"button\">${3:ボタンテキスト}</a></p>\n\
	</div>\n\
	</div>\n\
\n\
## Page header\n\
\n\
snippet page-header\n\
	<div class=\"page-header\">\n\
	<h1>${1:見出し} ${2:<small>サブテキスト</small>}</h1>\n\
	</div>\n\
\n\
## Alerts\n\
\n\
snippet alert-success\n\
	<div class=\"alert alert-success\" markdown=\"1\">\n\
	${1:**成功** ここにはMarkdownが書けます}\n\
	</div>\n\
\n\
snippet alert-info\n\
	<div class=\"alert alert-info\" markdown=\"1\">\n\
	${1:**情報** ここにはMarkdownが書けます}\n\
	</div>\n\
\n\
snippet alert-warning\n\
	<div class=\"alert alert-warning\" markdown=\"1\">\n\
	${1:**警告** ここにはMarkdownが書けます}\n\
	</div>\n\
\n\
snippet alert-danger\n\
	<div class=\"alert alert-danger\" markdown=\"1\">\n\
	${1:**危険** ここにはMarkdownが書けます}\n\
	</div>\n\
\n\
## List group\n\
snippet list-group\n\
	<ul class=\"list-group\">\n\
	<li class=\"list-group-item\">${1:アイテム}</li>\n\
	<li class=\"list-group-item\">${2:アイテム}</li>\n\
	<li class=\"list-group-item\">${3:アイテム}</li>\n\
	</ul>\n\
\n\
snippet list-group--link\n\
	<div class=\"list-group\">\n\
	<a href=\"#\" class=\"list-group-item\">${1:アイテム}</a>\n\
	<a href=\"#\" class=\"list-group-item\">${2:アイテム}</a>\n\
	<a href=\"#\" class=\"list-group-item\">${3:アイテム}</a>\n\
	</div>\n\
\n\
snippet list-group--link--content\n\
	<div class=\"list-group\">\n\
	<a href=\"#\" class=\"list-group-item\">\n\
	<h4 class=\"list-group-item-heading\">${1:見出し}</h4>\n\
	<p class=\"list-group-item-text\">${2:テキスト}</p>\n\
	</a>\n\
	<a href=\"#\" class=\"list-group-item\">\n\
	<h4 class=\"list-group-item-heading\">${3:見出し}</h4>\n\
	<p class=\"list-group-item-text\">${4:テキスト}</p>\n\
	</a>\n\
	<a href=\"#\" class=\"list-group-item\">\n\
	<h4 class=\"list-group-item-heading\">${5:見出し}</h4>\n\
	<p class=\"list-group-item-text\">${6:テキスト}</p>\n\
	</a>\n\
	</div>\n\
\n\
## Panels\n\
snippet panel\n\
	<div class=\"panel panel-default\" markdown=\"1\">\n\
	<div class=\"panel-heading\">${1:ヘッダーテキスト}</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel--title\n\
	<div class=\"panel panel-default\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel--footer\n\
	<div class=\"panel panel-default\" markdown=\"1\">\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${1:ここにはMarkdownが書けます}\n\
	</div>\n\
	<div class=\"panel-footer\">${2:フッター}</div>\n\
	</div>\n\
\n\
snippet panel-primary\n\
	<div class=\"panel panel-primary\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel-success\n\
	<div class=\"panel panel-success\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel-info\n\
	<div class=\"panel panel-info\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel-warning\n\
	<div class=\"panel panel-warning\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
snippet panel-danger\n\
	<div class=\"panel panel-danger\" markdown=\"1\">\n\
	<div class=\"panel-heading\">\n\
	<h3 class=\"panel-title\">${1:見出し}</h3>\n\
	</div>\n\
	<div class=\"panel-body\" markdown=\"1\">\n\
	${2:ここにはMarkdownが書けます}\n\
	</div>\n\
	</div>\n\
\n\
## Wells\n\
\n\
snippet well\n\
	<div class=\"well\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet well-lg\n\
	<div class=\"well well-lg\">\n\
	${1:内容}\n\
	</div>\n\
\n\
snippet well-sm\n\
	<div class=\"well well-sm\">\n\
	${1:内容}\n\
	</div>\n\
";
exports.scope = "markdown";

});
