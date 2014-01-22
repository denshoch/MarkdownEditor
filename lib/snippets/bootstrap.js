define('ace/snippets/bootstrap', ['require', 'exports', 'module' ], function(require, exports, module) {

exports.snippetText = "# Bootstrap\n\
\n\
## tables\n\
\n\
snippet table\n\
	<table class="table">\n\
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
	<table class="table table-striped">\n\
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
	<table class="table table-bordered">\n\
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
	<table class="table table-hover">\n\
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
	<table class="table table-condensed">\n\
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
## Page header\n\
\n\
snippet page-header\n\
	<div class="page-header">\n\
	<h1>${1:見出し} ${2:<small>サブテキスト</small>}</h1>\n\
	</div>\n\
\n\
## Alerts\n\
\n\
snippet alert-success\n\
    <div class="alert alert-success">\n\
    ${1:メッセージ}\n\
    </div>\n\
\n\
snippet alert-info\n\
    <div class="alert alert-info">\n\
    ${1:メッセージ}\n\
    </div>\n\
\n\
snippet alert-warning\n\
    <div class="alert alert-warning">\n\
    ${1:メッセージ}\n\
    </div>\n\
\n\
snippet alert-danger\n\
    <div class="alert alert-danger">\n\
    ${1:メッセージ}\n\
    </div>\n\
\n\
## Wells\n\
\n\
snippet well\n\
    <div class="well">\n\
    ${1:内容}\n\
    </div>\n\
\n\
snippet well-lg\n\
    <div class="well well-lg">\n\
    ${1:内容}\n\
    </div>\n\
\n\
snippet well-sm\n\
    <div class="well well-sm">\n\
    ${1:内容}\n\
    </div>\n\
";
exports.scope = "markdown";

});
