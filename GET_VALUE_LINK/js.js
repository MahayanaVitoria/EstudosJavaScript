//href, hreflang, rel, target e type do link

function getAttributes() {
    var a = document.getElementById("w3r").href
    alert('O valor do atributo href é ' + a)
    var b = document.getElementById("w3r").hreflang
    alert('O valor do atributo hreflang é ' +b)
    var c = document.getElementById("w3r").rel
    alert('O valor do atributo rel é ' + c)
    var d = document.getElementById("w3r").type
    alert('O valor do atributo type é ' + d)
}