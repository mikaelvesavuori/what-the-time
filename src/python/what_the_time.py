import datetime
import random

class WhatTheTime:
    """
    WhatTheTime is a fun time service that pays homage to Samuel L. Jackson and his energetic performances.
    """

    def __init__(self):
        self.templates = [
            "Wake up! It's already {time} in this mad world!",
            "{time}? Time waits for no one, not even me!",
            "Look at the clock, my friend, it's striking {time} already!",
            "Can you believe it? It's {time}. Time's flying, and we're not even moving!",
            "{time}! Time to move! What are you waiting for, an invitation?",
            "The world keeps spinning and it's already {time}. Keep up!",
            "Tick-tock, tick-tock, it's {time}. You hear that? That's the sound of your life ticking away!",
            "You got plans? Well, make 'em happen. It's already {time}!",
            "{time}, and every second you're not doing what you love, it's a second wasted!",
            "{time}. Remember, time is the one thing we're running out of faster than anything else!",
            "Listen up! The clock's screaming {time} right now!",
            "{time}, folks. Ain't no rewind in life. Make it count!",
            "It's {time}! Time's slipping. What's your next move?",
            "Clock's ticking, loud and clear. It's {time}. You hearing this?",
            "{time} already? Damn, time flies when you're kicking ass!",
            "Attention! We're at {time}. Missed opportunities wait for no one!",
            "It's {time}! Let's get these moments rolling!",
            "You see this? It's {time}. Perfect time to shake the world!",
            "{time}. Each second is a scene. Make yours count!",
            "Alright, it's {time}! No more delays, it's showtime!"
        ]

    def is_(self):
        """
        Get the time, Samuel L. Jackson style.
        """
        time_string = self.time_string()
        template = self.random_template().format(time=time_string)
        return template

    def time_string(self):
        """
        Returns a time string in the format HH:MM:SS.
        """
        return datetime.datetime.now().strftime("%H:%M:%S")

    def random_template(self):
        """
        Gets a random template from the templates array.
        """
        return random.choice(self.templates)

# Example usage:
if __name__ == "__main__":
    time = WhatTheTime()
    print(time.is_())