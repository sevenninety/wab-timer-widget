define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var Model = (function () {
        function Model(maxQueueLength) {
            this.zooms = [];
            this.updates = [];
            this.maxQueueLength = maxQueueLength;
        }
        Model.prototype.addToQueue = function (time, queue) {
            if (queue.length <= this.maxQueueLength) {
                queue.push(time);
            }
            else {
                queue.shift();
                queue.push(time);
            }
        };
        Model.prototype.getAverage = function (queue) {
            var sum = queue.reduce(function (a, b) {
                return a + b;
            });
            return sum / queue.length;
        };
        return Model;
    }());
    exports.default = Model;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93aWRnZXRzL1RpbWVyL01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBT0E7UUFLSSxlQUFZLGNBQXNCO1lBSmxDLFVBQUssR0FBYSxFQUFFLENBQUM7WUFDckIsWUFBTyxHQUFhLEVBQUUsQ0FBQztZQUluQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDO1FBT0QsMEJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxLQUFlO1lBRXBDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDO1FBTUQsMEJBQVUsR0FBVixVQUFXLEtBQWU7WUFFdEIsSUFBSSxHQUFHLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQVMsRUFBRSxDQUFTO2dCQUNoRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUdILE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO1FBQ0wsWUFBQztJQUFELENBQUMsQUF0Q0QsSUFzQ0M7SUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSU1vZGVsIHtcbiAgICB6b29tczogbnVtYmVyW107XG4gICAgdXBkYXRlczogbnVtYmVyW107XG4gICAgYWRkVG9RdWV1ZSh0aW1lOiBudW1iZXIsIHF1ZXVlOiBudW1iZXJbXSk6IHZvaWQ7XG4gICAgZ2V0QXZlcmFnZShxdWV1ZTogbnVtYmVyW10pOiBudW1iZXI7XG59XG5cbmNsYXNzIE1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcbiAgICB6b29tczogbnVtYmVyW10gPSBbXTtcbiAgICB1cGRhdGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgbWF4UXVldWVMZW5ndGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1heFF1ZXVlTGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXhRdWV1ZUxlbmd0aCA9IG1heFF1ZXVlTGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0aW1lIHZhbHVlIHRvIGEgZml4ZWQgbGVuZ3RoIHF1ZXVlLlxuICAgICAqIEBwYXJhbSB0aW1lIHRoZSB0aW1lIHRvIGFkZFxuICAgICAqIEBwYXJhbSBxdWV1ZSB0aGUgcXVldWVcbiAgICAgKi9cbiAgICBhZGRUb1F1ZXVlKHRpbWU6IG51bWJlciwgcXVldWU6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIC8vIENoZWNrIHdlIGFyZSBub3QgZXhjZWVkaW5nIHF1ZXVlIGxlbmd0aFxuICAgICAgICBpZiAocXVldWUubGVuZ3RoIDw9IHRoaXMubWF4UXVldWVMZW5ndGgpIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2godGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZmlyc3QgdmFsdWUgdGhlbiBhZGQgbmV3IHZhbHVlXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcXVldWUucHVzaCh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgYSBsaXN0IG9mIG51bWJlcnMuXG4gICAgICogQHBhcmFtIHF1ZXVlIHRoZSBsaXN0XG4gICAgICovXG4gICAgZ2V0QXZlcmFnZShxdWV1ZTogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICAvLyBTdW0gdGltZXNcbiAgICAgICAgbGV0IHN1bTogbnVtYmVyID0gcXVldWUucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXR1cm4gYXZlcmFnZVxuICAgICAgICByZXR1cm4gc3VtIC8gcXVldWUubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG5cbiJdfQ==