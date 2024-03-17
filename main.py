from http.server import HTTPServer, BaseHTTPRequestHandler

class HttpGetHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        file = open("index.html", "r", encoding="utf-8").read()
        self.send_response(200)
        self.send_header("Content-type", "text/html; utf-8;")
        self.end_headers()
        self.wfile.write(file.encode())
        

def run(server_class=HTTPServer, handler_class=HttpGetHandler):
    server_address = ('10.147.17.22', 3000)   
    httpd = server_class(server_address, handler_class)
    try:
        httpd.serve_forever()
    except Exception:
        httpd.shutdown()
run()