function show_navbar_content(content) {
    $('.content-item').addClass('hidden');
    $('#' + content).removeClass('hidden');
}

function text_bold() {
    alert('to bold');
}

function text_italic() {

}

function dokumen_halaman() {

    tambah_halaman = function() {
        alert('ha');
        $('.body').append('<div class="page"><div class="page-content" contenteditable></div></page>');
    }

}

function init() {
    dokumen_halaman();
}

init();


rangy.init();

highlighter = rangy.createHighlighter();

highlighter.addClassApplier(rangy.createCssClassApplier("bold", {
    ignoreWhiteSpace: true,
    tagNames: ["span", "a"]
}));
