window.addEventListener('load', carregado);

var db = openDatabase('Banco', '1.0', 'Banco dados', 4048);

function carregado() {
    document.getElementById('b00').addEventListener('click', gerar);

    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS myTable ( id INTEGER PRIMARY KEY,funcaoX TEXT,funcaoGerada TEXT)");
    });
}
var cont = Number(0);
function gerar() {
    cont++;
    if (cont < 2) {
        var a = document.createElement('a');
        a.href = 'https://www.geogebra.org/m/KGWhcAqc';
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
    }
    var img = document.getElementById('div1');
    var op = document.getElementById('p0');
    img.style.fontSize = '2cm';
    img.style.alignSelf;
    img.style.padding = '2cm';
    op = op.options[op.selectedIndex].text;
    if (op == '1º grau') {
        var a = Math.round(20 * Math.random());
        if (a == 0) {
            while (a == 0) {
                a = Math.round(20 * Math.random());
            }
        }
        var b = Math.round(20 * Math.random());
        a = a.toString();
        b = b.toString();
        img.innerHTML = `${a}x + ${b}`;
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['ax + b', a + 'x + ' + b]);
        });

    } else if (op == 'Exponencial') {
        var rand = Math.random();
        if (rand > 0.5) {
            var n1 = Math.round(20 * Math.random());
            if (n1 == 1 || n1 == 0) {
                while (n1 == 1 || n1 == 0) {
                    n1 = Math.round(20 * Math.random());
                }
            }
            n1 = n1.toString();
            img.innerHTML = `${n1}^x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['a^x', n1 + '^x']);
            });
        } else {
            var n1 = Math.random();
            if (n1 == 1 || n1 == 0) {
                while (n1 == 1 || n1 == 0) {
                    n1 = Math.random();
                }
            }
            n1 = n1.toFixed(2);
            n1 = n1.toString();
            img.innerHTML = `${n1}^x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['a^x', n1 + '^x']);
            });
        }
    } else if (op == 'Logarítmica') {
        var rand = Math.random();
        if (rand > 0.5) {
            var n1 = Math.round(20 * Math.random());
            if (n1 == 1 || n1 == 0) {
                while (n1 == 1) {
                    n1 = Math.round(20 * Math.random());
                }
            }
            var n2 = Math.round(20 * Math.random());
            if (n2 == 1 || n2 == 0) {
                while (n2 == 1) {
                    n2 = Math.round(20 * Math.random());
                }
            }
            n1 = n1.toString();
            n2 = n2.toString();
            img.innerHTML = `log_${n1} ${n2}x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['log_a bx', 'log_' + n1 + ' ' + n2 + 'x']);
            });
        } else {
            var n1 = Math.random();
            if (n1 == 1 || n1 == 0) {
                while (n1 == 1) {
                    n1 = Math.random();
                }
            }
            var n2 = Math.round(20 * Math.random());
            if (n2 == 1 || n2 == 0) {
                while (n2 == 1) {
                    n2 = Math.round(20 * Math.random());
                }
            }
            n1 = n1.toFixed(2);
            n1 = n1.toString();
            img.innerHTML = `log_${n1} ${n2}x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['log_a bx', 'log_' + n1 + ' ' + n2 + 'x']);
            });
        }
    } else if (op == 'Quadrática') {
        var a = Math.round(20 * Math.random());
        if (a == 0) {
            while (a == 0) {
                a = Math.round(20 * Math.random());
            }
        }
        var b = Math.round(20 * Math.random());
        var c = Math.round(20 * Math.random());
        
        a = a.toString();
        b = b.toString();
        c = c.toString();
        img.innerHTML = `${a}x² + ${b}x + ${c}`;
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['ax² + bx + c', a + 'x² + ' + b + 'x + ' + c]);
        });
    } else {
        var rand = Math.random();
        var n1 = Math.round(5 * Math.random());
        var n2 = Math.round(5 * Math.random());
        if (n1 == 0 || n2 == 0) {
            while (n1 == 0 || n2 == 0) {
                var n1 = Math.round(5 * Math.random());
                var n2 = Math.round(5 * Math.random());
            }
        }
        if (rand < 0.33) {
            n1 = n1.toString();
            n2 = n2.toString();
            img.innerHTML = `sen ${n1} + ${n2}x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['sen a + bx', 'sen ' + n1 + ' + ' + n2 + 'x']);
            });
        } else if (rand > 0.33 && rand < 0.66) {
            n1 = n1.toString();
            n2 = n2.toString();
            img.innerHTML = `cos ${n1} + ${n2}x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['cos a + bx', 'cos ' + n1 + ' + ' + n2 + 'x']);
            });
        } else {
            n1 = n1.toString();
            n2 = n2.toString();
            img.innerHTML = `tan ${n1} + ${n2}x`;
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO myTable ( funcaoX,funcaoGerada) VALUES(?,?)', ['tan a + bx', 'tan ' + n1 + ' + ' + n2 + 'x']);
            });
        }
    }
}