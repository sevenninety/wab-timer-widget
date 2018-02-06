class Model {
    zooms: number[] = [];
    updates: number[] = [];
    private maxQueueLength: number;

    constructor(maxQueueLength: number) {
        this.maxQueueLength = maxQueueLength;
    }

    /**
     * Adds a time value to a fixed length queue.
     * @param time the time to add
     * @param queue the queue
     */
    addToQueue(time: number, queue: number[]): void {
        // Check we are not exceeding queue length
        if (queue.length < this.maxQueueLength) {
            queue.push(time);
        } else {
            // Remove first value then add new value
            queue.shift();
            queue.push(time);
        }
    }

    /**
     * Gets the average of a list of numbers.
     * @param queue the list
     */
    getAverage(queue: number[]): number {
        // Sum times
        let sum: number = queue.reduce((a: number, b: number) => {
            return a + b;
        });

        // Return average
        return sum / queue.length;
    }
}

export default Model;

