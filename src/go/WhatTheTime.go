package main

import (
	"fmt"
	"math/rand"
	"time"
)

// WhatTheTime struct represents a fun time service
type WhatTheTime struct {
	templates []string
}

// NewWhatTheTime initializes a new WhatTheTime instance with templates.
func NewWhatTheTime() *WhatTheTime {
	return &WhatTheTime{
		templates: []string{
			"Wake up! It's already %s in this mad world!",
			"%s? Time waits for no one, not even me!",
			"Look at the clock, my friend, it's striking %s already!",
			"Can you believe it? It's %s. Time's flying, and we're not even moving!",
			"%s! Time to move! What are you waiting for, an invitation?",
			"The world keeps spinning and it's already %s. Keep up!",
			"Tick-tock, tick-tock, it's %s. You hear that? That's the sound of your life ticking away!",
			"You got plans? Well, make 'em happen. It's already %s!",
			"%s, and every second you're not doing what you love, it's a second wasted!",
			"%s. Remember, time is the one thing we're running out of faster than anything else!",
			"Listen up! The clock's screaming %s right now!",
			"%s, folks. Ain't no rewind in life. Make it count!",
			"It's %s! Time's slipping. What's your next move?",
			"Clock's ticking, loud and clear. It's %s. You hearing this?",
			"%s already? Damn, time flies when you're kicking ass!",
			"Attention! We're at %s. Missed opportunities wait for no one!",
			"It's %s! Let's get these moments rolling!",
			"You see this? It's %s. Perfect time to shake the world!",
			"%s. Each second is a scene. Make yours count!",
			"Alright, it's %s! No more delays, it's showtime!",
		},
	}
}

// Is generates a Samuel L. Jackson style time message.
func (w *WhatTheTime) Is() string {
	timeString := w.timeString()
	template := w.randomTemplate()
	return fmt.Sprintf(template, timeString)
}

// timeString returns the current time in HH:MM:SS format.
func (w *WhatTheTime) timeString() string {
	return time.Now().Format("15:04:05")
}

// randomTemplate selects a random template from the templates slice.
func (w *WhatTheTime) randomTemplate() string {
	rand.Seed(time.Now().UnixNano())
	return w.templates[rand.Intn(len(w.templates))]
}

//func main() {
//	wt := NewWhatTheTime()
//	fmt.Println(wt.Is())
//}
