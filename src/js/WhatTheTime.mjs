/**
 * @description WhatTheTime is a fun time service that pays homage to Samuel L. Jackson and his energetic performances.
 * @example
 * const time = new WhatTheTime();
 * time.is()
 */
export class WhatTheTime {
  /**
   * @description Template strings that will have the HH:MM:SS value replaced before being presented.
   */
  templates = [
    "Wake up! It's already HH:MM:SS in this mad world!",
    "HH:MM:SS? Time waits for no one, not even me!",
    "Look at the clock, my friend, it's striking HH:MM:SS already!",
    "Can you believe it? It's HH:MM:SS. Time's flying, and we're not even moving!",
    "HH:MM:SS! Time to move! What are you waiting for, an invitation?",
    "The world keeps spinning and it's already HH:MM:SS. Keep up!",
    "Tick-tock, tick-tock, it's HH:MM:SS. You hear that? That's the sound of your life ticking away!",
    "You got plans? Well, make 'em happen. It's already HH:MM:SS!",
    "HH:MM:SS, and every second you're not doing what you love, it's a second wasted!",
    "HH:MM:SS. Remember, time is the one thing we're running out of faster than anything else!",
    "Listen up! The clock's screaming HH:MM:SS right now!",
    "HH:MM:SS, folks. Ain't no rewind in life. Make it count!",
    "It's HH:MM:SS! Time's slipping. What's your next move?",
    "Clock's ticking, loud and clear. It's HH:MM:SS. You hearing this?",
    "HH:MM:SS already? Damn, time flies when you're kicking ass!",
    "Attention! We're at HH:MM:SS. Missed opportunities wait for no one!",
    "It's HH:MM:SS! Let's get these moments rolling!",
    "You see this? It's HH:MM:SS. Perfect time to shake the world!",
    "HH:MM:SS. Each second is a scene. Make yours count!",
    "Alright, it's HH:MM:SS! No more delays, it's showtime!"
  ]

  /**
   * @description Get the time, Samuel L. Jackson style.
   */
  is() {
    const timeString = this.timeString();
    const template = this.randomTemplate(timeString);

    return template.replace('HH:MM:SS', timeString);
  }

  /**
   * @description Returns a time string in the format HH:MM:SS.
   */
  timeString() {
    return new Date().toTimeString().slice(0, 8);
  }

  /**
   * @description Gets a random template from the templates array.
   */
  randomTemplate() {
    return this.templates[Math.floor(Math.random() * (this.templates.length - 1))];
  }
}