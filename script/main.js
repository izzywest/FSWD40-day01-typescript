var menu = ['salad', 'fish', 'pizza', 'cow', 'dinner', 'chicken'];
var menuPrice = [4, 10, 7.50, 21, 31, 13];
var a = menu[0], b = menu[1], c = menu[2], d = menu[3], e = menu[4], f = menu[5];
var A = menuPrice[0], B = menuPrice[1], C = menuPrice[2], D = menuPrice[3], E = menuPrice[4], F = menuPrice[5];
var commentP = [];
function comment() {
    ncmt = (document.getElementById('cmt')).value;
    newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(ncmt));
    commentP.push(newdiv);
    // document.getElementById("comment").innerHTML=(commentP[0])
    for (var _i = 0, commentP_1 = commentP; _i < commentP_1.length; _i++) {
        var value = commentP_1[_i];
        $('#comment').html(value);
        $('#cmt').text('sdkn');
    }
}
