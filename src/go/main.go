package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// Determine if running on Google Cloud Run
	isGoogleCloudRun := os.Getenv("K_SERVICE") != ""

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port
	}
	host := "localhost"
	if isGoogleCloudRun {
		host = "0.0.0.0"
	}

	e.GET("/", func(c echo.Context) error {
		time := NewWhatTheTime() // Assuming NewWhatTheTime() is your constructor
		timeString := time.Is()  // Assuming Is() returns the time string

		htmlContent := html(timeString)
		return c.HTML(http.StatusOK, htmlContent)
	})

	e.Logger.Fatal(e.Start(fmt.Sprintf("%s:%s", host, port)))
}

// html generates the HTML content with the provided time string
func html(timeString string) string {
	return fmt.Sprintf(`
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
        margin-top: 10%%;
      }
    </style>
  </head>
  <body>
    <p>%s</p>
  </body>
</html>`, timeString)
}
