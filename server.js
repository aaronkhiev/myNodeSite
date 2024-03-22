var http = require('http'),
    fs = require('fs');

const PORT = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type' : 'text/plain'});

            res.end('500 - Internal Error');
        }
        
        else {
            res.writeHead(responseCode, {'Content-Type' : contentType});

            res.end(data);
        }
    });
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;

        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;

        case '/ddpage':
            serveStaticFile(res, '/public/ddpage.html', 'text/html');
            break;

        case '/generate':
            serveStaticFile(res, '/public/generate.html', 'text/html');
            break;

        case '/character':
            serveStaticFile(res, '/public/character.html', 'text/html');
            break;

        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;

        case '/action':
            serveStaticFile(res, '/public/action.html', 'text/html');
            break;

        case '/skills':
            serveStaticFile(res, '/public/skills.html', 'text/html');
            break;
        
        case '/spell':
            serveStaticFile(res, '/public/spell.html', 'text/html');
            break;

        case '/css/accord.css':
            serveStaticFile(res, '/public/css/accord.css', 'text/css');
            break;

        case '/css/button.css':
            serveStaticFile(res, '/public/css/button.css', 'text/css');
            break;

        case '/css/character.css':
            serveStaticFile(res, '/public/css/character.css', 'text/css');
            break;

        case '/css/comp.css':
            serveStaticFile(res, '/public/css/comp.css', 'text/css');
            break;

        case '/css/dice.css':
            serveStaticFile(res, '/public/css/dice.css', 'text/css');
            break;

        case '/css/format.css':
            serveStaticFile(res, '/public/css/format.css', 'text/css');
            break;

        case '/css/navigation.css':
            serveStaticFile(res, '/public/css/navigation.css', 'text/css');
            break;

        case '/css/npc.css':
            serveStaticFile(res, '/public/css/npc.css', 'text/css');
            break;

        case '/css/skillsstyle.css':
            serveStaticFile(res, '/public/css/skillsstyle.css', 'text/css');
            break;

        case '/css/spells.css':
            serveStaticFile(res, '/public/css/spells.css', 'text/css');
            break;

        case '/images/404bottom.gif':
            serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
            break;

        case '/images/404mid.gif':
            serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
            break;

        case '/images/404top_w.jpg':
            serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
            break;

        case '/images/x.png':
            serveStaticFile(res, '/public/images/x.png', 'image/png');
            break;

        case '/images/ttlogo.png':
            serveStaticFile(res, '/public/images/ttlogo.png', 'image/png');
            break;

        case '/images/d4.png':
            serveStaticFile(res, '/public/images/d4.png', 'image/png');
            break;

        case '/images/d12.png':
            serveStaticFile(res, '/public/images/d12.png', 'image/png');
            break;

        case '/images/d20.png':
            serveStaticFile(res, '/public/images/d20.png', 'image/png');
            break;

        case '/images/d20p.png':
            serveStaticFile(res, '/public/images/d20p.png', 'image/png');
            break;

        case '/images/d20resized.png':
            serveStaticFile(res, '/public/images/d20resized.png', 'image/png');
            break;

        case '/images/finn.png':
            serveStaticFile(res, '/public/images/finn.png', 'image/png');
            break;

        case '/images/fireball.png':
            serveStaticFile(res, '/public/images/fireball.png', 'image/png');
            break;

        case '/images/heal.png':
            serveStaticFile(res, '/public/images/heal.png', 'image/png');
            break;

        case '/images/nora.png':
            serveStaticFile(res, '/public/images/nora.png', 'image/png');
            break;

        case '/images/shield.png':
            serveStaticFile(res, '/public/images/shield.png', 'image/png');
            break;

        case '/images/tenti.png':
            serveStaticFile(res, '/public/images/tenti.png', 'image/png');
            break;

        case '/images/thistle.png':
            serveStaticFile(res, '/public/images/thistle.png', 'image/png');
            break;

        case '/images/verdan.png':
            serveStaticFile(res, '/public/images/verdan.png', 'image/png');
            break;

        case '/js/jquery-ui-1.13.2.custom/jquery-ui-1.13.2.custom/jquery-ui.js':
            serveStaticFile(res, '/public/js/jquery-ui-1.13.2.custom/jquery-ui-1.13.2.custom/jquery-ui.js', 'text/javascript');
            break;

        case '/js/accordian.js':
            serveStaticFile(res, '/public/js/accordian.js', 'text/javascript');
            break;

        case '/js/ajax-html.js':
            serveStaticFile(res, '/public/js/ajax-html.js', 'text/javascript');
            break;

        case '/js/ajax-jquery.js':
            serveStaticFile(res, '/public/js/ajax-jquery.js', 'text/javascript');
            break;

        case '/js/ajax-json.js':
            serveStaticFile(res, '/public/js/ajax-json.js', 'text/javascript');
            break;

        case '/js/ajax-xml.js':
            serveStaticFile(res, '/public/js/ajax-xml.js', 'text/javascript');
            break;

        case '/js/character.js':
            serveStaticFile(res, '/public/js/character.js', 'text/javascript');
            break;

        case '/js/dice.js':
            serveStaticFile(res, '/public/js/dice.js', 'text/javascript');
            break;

        case '/js/jquery-3.7.1.min.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.min.js', 'text/javascript');
            break;

        case '/data/spell-jquery.html':
            serveStaticFile(res, '/public/data/spell-jquery.html', 'text/html');
            break;

        case '/data/spells.xml':
            serveStaticFile(res, '/public/data/spells.xml', 'application/xml');
            break;

        case '/data/npc-data.json':
            serveStaticFile(res, '/public/data/npc-data.json', 'application/json');
            break;

        case '/data/this-data.html':
            serveStaticFile(res, '/public/data/this-data.html', 'text/html');
            break;

        case '/data/ver-data.html':
            serveStaticFile(res, '/public/data/ver-data.html', 'text/html');
            break;

        default:
            serveStaticFile(res, '/public/html/404.html', 'text/html', 404)
            break;
    }
}).listen(PORT);

console.log("Server running on: http://localhost:" + PORT);