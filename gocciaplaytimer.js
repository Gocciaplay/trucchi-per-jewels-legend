/**
 * GocciaplayTimer - Simple Timer Utility
 * Author: Gocciaplay
 * License: Custom
 */

class GocciaplayTimer {
    /**
     * Creates a new Timer instance.
     * @param {function} callback - The function to execute after the delay.
     * @param {number} delay - Time in milliseconds.
     */
    constructor(callback, delay) {
        if (typeof callback !== 'function' || typeof delay !== 'number') {
            throw new Error('[GocciaplayTimer] Invalid parameters.');
        }
        this.callback = callback;
        this.delay = delay;
        this.timerId = null;
    }

    /**
     * Starts the timer.
     */
    start() {
        this.stop();
        this.timerId = setTimeout(() => {
            this.callback();
        }, this.delay);
        console.log('[GocciaplayTimer] Timer started.');
    }

    /**
     * Stops the timer if running.
     */
    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
            console.log('[GocciaplayTimer] Timer stopped.');
        }
    }
}

// Example usage:
// const timer = new GocciaplayTimer(() => console.log('Timer finished!'), 3000);
// timer.start();

module.exports = GocciaplayTimer;
