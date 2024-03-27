from flask import Flask, render_template_string
from what_the_time import WhatTheTime  # Make sure to implement WhatTheTime in what_the_time.py

app = Flask(__name__)

@app.route("/")
def home():
    time = WhatTheTime()
    time_string = time.is_()
    return render_template_string(html, time_string=time_string)

html = """
<!DOCTYPE html>
<html>
<head>
    <title>What The Time</title>
    <style>
        html {
            font-family: system-ui, sans-serif;
            font-weight: 900;
        }
        p {
            font-size: 5rem;
            text-align: center;
            margin-top: 10%;
        }
    </style>
</head>
<body>
    <p>{{ time_string }}</p>
</body>
</html>
"""

if __name__ == "__main__":
    # Google Cloud Run will set the PORT environment variable to tell you what port to listen on
    import os
    port = int(os.environ.get('PORT', 8080))
    # Google Cloud Run expects the web server to listen on 0.0.0.0
    app.run(host='0.0.0.0', port=port)
