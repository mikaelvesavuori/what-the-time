use chrono::Local;
use rand::seq::SliceRandom;
//use rand::Rng;

pub struct WhatTheTime {
    templates: Vec<&'static str>,
}

impl WhatTheTime {
    pub fn new() -> WhatTheTime {
        WhatTheTime {
            templates: vec![
                "Wake up! It's already {} in this mad world!",
                "{}? Time waits for no one, not even me!",
                "Look at the clock, my friend, it's striking {} already!",
                "Can you believe it? It's {}. Time's flying, and we're not even moving!",
                "{}! Time to move! What are you waiting for, an invitation?",
                "The world keeps spinning and it's already {}. Keep up!",
                "Tick-tock, tick-tock, it's {}. You hear that? That's the sound of your life ticking away!",
                "You got plans? Well, make 'em happen. It's already {}!",
                "{}, and every second you're not doing what you love, it's a second wasted!",
                "{}. Remember, time is the one thing we're running out of faster than anything else!",
                "Listen up! The clock's screaming {} right now!",
                "{}, folks. Ain't no rewind in life. Make it count!",
                "It's {}! Time's slipping. What's your next move?",
                "Clock's ticking, loud and clear. It's {}. You hearing this?",
                "{} already? Damn, time flies when you're kicking ass!",
                "Attention! We're at {}. Missed opportunities wait for no one!",
                "It's {}! Let's get these moments rolling!",
                "You see this? It's {}. Perfect time to shake the world!",
                "{}. Each second is a scene. Make yours count!",
                "Alright, it's {}! No more delays, it's showtime!",
            ],
        }
    }

    pub fn is(&self) -> String {
        let time_string = WhatTheTime::time_string();
        let template = self
            .templates
            .choose(&mut rand::thread_rng())
            .expect("Templates list is empty");
        template.replace("{}", &time_string)
    }

    fn time_string() -> String {
        Local::now().format("%H:%M:%S").to_string()
    }
}

//fn main() {
//    let wtt = WhatTheTime::new();
//    println!("{}", wtt.is());
//}
