function remove() {
	editor.setValue("");
}

function bold() {
    var selected = editor.session.getTextRange(editor.getSelectionRange());
    if(selected == "") {
        selected = "bold text";
    }
    var replace = "**" + selected + "**";
    editor.insert(replace);
}

function italic() {
    var selected = editor.session.getTextRange(editor.getSelectionRange());
    if(selected == "") {
        selected = "italic text";
    }
    var replace = "*" + selected + "*";
    editor.insert(replace);
}

function insert_link() {
    var selected = editor.session.getTextRange(editor.getSelectionRange());
    if(selected == "") {
        selected = "alt text";
    }
    var replace = "[" + selected + "](url)";
    editor.insert(replace);
}

function small() {
    var selected = editor.session.getTextRange(editor.getSelectionRange());
    if(selected == "") {
        selected = "small text";
    }
    var replace = "<small>" + selected + "</small>";
    editor.insert(replace);
}

function inline_code() {
    var selected = editor.session.getTextRange(editor.getSelectionRange());
    if(selected == "") {
        selected = "code";
    }
    var replace = "`" + selected + "`";
    editor.insert(replace);
}
