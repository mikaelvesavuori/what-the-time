mod what_the_time;

use warp::Filter;

#[tokio::main]
async fn main() {
    let is_google_cloud_run = std::env::var("K_SERVICE").is_ok();
    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a number");

    let routes = warp::get()
        .and(warp::path::end())
        .map(|| {
            let time_string = what_the_time::WhatTheTime::new().is();
            warp::reply::html(html(&time_string))
        });

    let host = if is_google_cloud_run { [0, 0, 0, 0] } else { [127, 0, 0, 1] };

    warp::serve(routes)
        .run((host, port))
        .await;
}

fn html(time_string: &str) -> String {
    format!(r#"
<html>
  <head>
    <title>What The Time</title>
    <style>
      html {{
        font-family: system-ui, sans-serif;
        font-weight: 900;
      }}

      p {{
        font-size: 5rem;
        text-align: center;
        margin-top: 10%;
      }}
    </style>
  </head>
  <body>
    <p>{}</p>
  </body>
</html>"#, time_string)
}