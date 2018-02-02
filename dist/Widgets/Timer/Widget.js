var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "jimu/BaseWidget", "./support/declareDecorator", "dojo/_base/lang", "dojo/on", "dojo/dom-class"], function (require, exports, BaseWidget, declareDecorator_1, lang, on, domClass) {
    /// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
    var Widget = /** @class */ (function () {
        function Widget() {
            this.zooms = [];
            this.updates = [];
            this.baseClass = "timer";
        }
        Widget.prototype.startup = function (args) {
            console.log(this.baseClass + "::startup");
            var self = this;
            self.inherited(arguments);
            this.bindEvents();
        };
        Widget.prototype.bindEvents = function () {
            var self = this;
            self.own(on(this.map, "zoom-start", lang.hitch(this, this.onZoomStart)));
            self.own(on(this.map, "zoom-end", lang.hitch(this, this.onZoomEnd)));
            self.own(on(this.map, "update-start", lang.hitch(this, this.onUpdateStart)));
            self.own(on(this.map, "update-end", lang.hitch(this, this.onUpdateEnd)));
        };
        Widget.prototype.onZoomStart = function () {
            this.zoomStart = performance.now();
        };
        Widget.prototype.onZoomEnd = function () {
            var time = performance.now() - this.zoomStart;
            // Store value
            this.addToQueue(time, this.zooms);
            // Show zoom time
            this.perfstatZoom.innerHTML = this.nls.zoom + " " + time.toFixed(4) + " " + this.nls.unit;
            // Show average
            this.perfstatAvgZoom.innerHTML = this.nls.avg + " " + this.getAverage(this.zooms).toFixed(4) + " " + this.nls.unit;
        };
        Widget.prototype.onUpdateStart = function () {
            this.updateStart = performance.now();
        };
        Widget.prototype.onUpdateEnd = function () {
            var time = performance.now() - this.updateStart;
            // Check we have a number
            if (isNaN(time)) {
                return;
            }
            // Make sure UI is not shown unless we have data
            if (domClass.contains(this.perfstats, "hidden")) {
                domClass.remove(this.perfstats, "hidden");
            }
            // Store value
            this.addToQueue(time, this.updates);
            // Show update time
            this.perfstatUpdate.innerHTML = this.nls.update + " " + time.toFixed(4) + " " + this.nls.unit;
            // Show average
            this.perfstatAvgUpdate.innerHTML = this.nls.avg + " " + this.getAverage(this.updates).toFixed(4) + " " + this.nls.unit;
        };
        Widget.prototype.addToQueue = function (time, queue) {
            // Check we are not exceeding queue length
            if (queue.length <= this.config.maxQueueLength) {
                queue.push(time);
            }
            else {
                // Remove first value then add new value
                queue.shift();
                queue.push(time);
            }
        };
        Widget.prototype.getAverage = function (queue) {
            // Sum times
            var sum = queue.reduce(function (a, b) {
                return a + b;
            });
            // Return average
            return sum / queue.length;
        };
        Widget = __decorate([
            declareDecorator_1.default(BaseWidget)
        ], Widget);
        return Widget;
    }());
    return Widget;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2lkZ2V0cy9UaW1lci9XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFBLCtEQUErRDtJQThCL0Q7UUFEQTtZQUlZLFVBQUssR0FBYSxFQUFFLENBQUM7WUFFckIsWUFBTyxHQUFhLEVBQUUsQ0FBQztZQUUvQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBNkZ4QixDQUFDO1FBM0ZHLHdCQUFPLEdBQVAsVUFBUSxJQUFVO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBRTFDLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRU8sMkJBQVUsR0FBbEI7WUFDSSxJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7WUFFckIsSUFBSSxDQUFDLEdBQUcsQ0FDSixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2pFLENBQUM7WUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksQ0FBQyxHQUFHLENBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcs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QUM7WUFDckIsQ0FBQztRQUNMLENBQUM7UUFFTywyQkFBVSxHQUFsQixVQUFtQixLQUFlO1lBQzlCLFlBQVk7WUFDWixJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBUyxFQUFFLENBQVM7Z0JBQ2hELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO1FBbkdDLE1BQU07WUFEWCwwQkFBTyxDQUFDLFVBQVUsQ0FBQztXQUNkLE1BQU0sQ0FvR1g7UUFBRCxhQUFDO0tBQUEsQUFwR0QsSUFvR0M7SUFFRCxPQUFTLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLWRlcGVuZGVuY3kgcGF0aD1cImppbXUvQmFzZVdpZGdldFwiIG5hbWU9XCJCYXNlV2lkZ2V0XCIgLz5cbmRlY2xhcmUgY29uc3QgQmFzZVdpZGdldDogYW55OyAvLyB0aGVyZSBpcyBubyB0cyBkZWZpbml0aW9uIG9mIEJhc2VXaWRnZXQgeWV0XG5cbmltcG9ydCBkZWNsYXJlIGZyb20gXCIuL3N1cHBvcnQvZGVjbGFyZURlY29yYXRvclwiO1xuXG5pbXBvcnQgKiBhcyBsYW5nIGZyb20gXCJkb2pvL19iYXNlL2xhbmdcIjtcbmltcG9ydCAqIGFzIG9uIGZyb20gXCJkb2pvL29uXCI7XG5pbXBvcnQgKiBhcyBkb21DbGFzcyBmcm9tIFwiZG9qby9kb20tY2xhc3NcIjtcblxuaW1wb3J0IE1hcCA9IHJlcXVpcmUoXCJlc3JpL21hcFwiKTtcblxuLy8gRGVmaW5lIGludGVyZmFjZSBmb3IgY29uZmlnXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgICBtYXhRdWV1ZUxlbmd0aDogbnVtYmVyO1xufVxuXG4vLyBEZWZpbmUgaW50ZXJmYWNlIGZvclxuaW50ZXJmYWNlIFdpZGdldCB7XG4gICAgcGVyZnN0YXRzOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdFpvb206IEhUTUxFbGVtZW50O1xuICAgIHBlcmZzdGF0QXZnWm9vbTogSFRNTEVsZW1lbnQ7XG4gICAgcGVyZnN0YXRVcGRhdGU6IEhUTUxFbGVtZW50O1xuICAgIHBlcmZzdGF0QXZnVXBkYXRlOiBIVE1MRWxlbWVudDtcbiAgICBiYXNlQ2xhc3M6IHN0cmluZztcbiAgICBjb25maWc6IENvbmZpZztcbiAgICBubHM6IGFueTtcbiAgICBtYXA6IE1hcDtcbn1cblxuQGRlY2xhcmUoQmFzZVdpZGdldClcbmNsYXNzIFdpZGdldCB7XG4gICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgcHJpdmF0ZSB6b29tU3RhcnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHpvb21zOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgdXBkYXRlU3RhcnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHVwZGF0ZXM6IG51bWJlcltdID0gW107XG5cbiAgICBiYXNlQ2xhc3MgPSBcInRpbWVyXCI7XG5cbiAgICBzdGFydHVwKGFyZ3M/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXNlQ2xhc3MgKyBcIjo6c3RhcnR1cFwiKTtcblxuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcbiAgICAgICAgc2VsZi5pbmhlcml0ZWQoYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJpbmRFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwiem9vbS1zdGFydFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25ab29tU3RhcnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIHNlbGYub3duKG9uKHRoaXMubWFwLCBcInpvb20tZW5kXCIsIGxhbmcuaGl0Y2godGhpcywgdGhpcy5vblpvb21FbmQpKSk7XG5cbiAgICAgICAgc2VsZi5vd24oXG4gICAgICAgICAgICBvbih0aGlzLm1hcCwgXCJ1cGRhdGUtc3RhcnRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uVXBkYXRlU3RhcnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwidXBkYXRlLWVuZFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25VcGRhdGVFbmQpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25ab29tU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuem9vbVN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblpvb21FbmQoKTogdm9pZCB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuem9vbVN0YXJ0O1xuXG4gICAgICAgIC8vIFN0b3JlIHZhbHVlXG4gICAgICAgIHRoaXMuYWRkVG9RdWV1ZSh0aW1lLCB0aGlzLnpvb21zKTtcblxuICAgICAgICAvLyBTaG93IHpvb20gdGltZVxuICAgICAgICB0aGlzLnBlcmZzdGF0Wm9vbS5pbm5lckhUTUwgPSBgJHt0aGlzLm5scy56b29tfSAke3RpbWUudG9GaXhlZCg0KX0gJHt0aGlzLm5scy51bml0fWA7XG5cbiAgICAgICAgLy8gU2hvdyBhdmVyYWdlXG4gICAgICAgIHRoaXMucGVyZnN0YXRBdmdab29tLmlubmVySFRNTCA9IGAke3RoaXMubmxzLmF2Z30gJHt0aGlzLmdldEF2ZXJhZ2UodGhpcy56b29tcykudG9GaXhlZCg0KX0gJHt0aGlzLm5scy51bml0fWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblVwZGF0ZVN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblVwZGF0ZUVuZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRpbWU6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy51cGRhdGVTdGFydDtcblxuICAgICAgICAvLyBDaGVjayB3ZSBoYXZlIGEgbnVtYmVyXG4gICAgICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIFVJIGlzIG5vdCBzaG93biB1bmxlc3Mgd2UgaGF2ZSBkYXRhXG4gICAgICAgIGlmIChkb21DbGFzcy5jb250YWlucyh0aGlzLnBlcmZzdGF0cywgXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGRvbUNsYXNzLnJlbW92ZSh0aGlzLnBlcmZzdGF0cywgXCJoaWRkZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB2YWx1ZVxuICAgICAgICB0aGlzLmFkZFRvUXVldWUodGltZSwgdGhpcy51cGRhdGVzKTtcblxuICAgICAgICAvLyBTaG93IHVwZGF0ZSB0aW1lXG4gICAgICAgIHRoaXMucGVyZnN0YXRVcGRhdGUuaW5uZXJIVE1MID0gYCR7dGhpcy5ubHMudXBkYXRlfSAke3RpbWUudG9GaXhlZCg0KX0gJHt0aGlzLm5scy51bml0fWA7XG5cbiAgICAgICAgLy8gU2hvdyBhdmVyYWdlXG4gICAgICAgIHRoaXMucGVyZnN0YXRBdmdVcGRhdGUuaW5uZXJIVE1MID0gYCR7dGhpcy5ubHMuYXZnfSAke3RoaXMuZ2V0QXZlcmFnZSh0aGlzLnVwZGF0ZXMpLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG9RdWV1ZSh0aW1lOiBudW1iZXIsIHF1ZXVlOiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICAvLyBDaGVjayB3ZSBhcmUgbm90IGV4Y2VlZGluZyBxdWV1ZSBsZW5ndGhcbiAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA8PSB0aGlzLmNvbmZpZy5tYXhRdWV1ZUxlbmd0aCkge1xuICAgICAgICAgICAgcXVldWUucHVzaCh0aW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBmaXJzdCB2YWx1ZSB0aGVuIGFkZCBuZXcgdmFsdWVcbiAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBdmVyYWdlKHF1ZXVlOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgICAgIC8vIFN1bSB0aW1lc1xuICAgICAgICBsZXQgc3VtOiBudW1iZXIgPSBxdWV1ZS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJldHVybiBhdmVyYWdlXG4gICAgICAgIHJldHVybiBzdW0gLyBxdWV1ZS5sZW5ndGg7XG4gICAgfVxufVxuXG5leHBvcnQgPSBXaWRnZXQ7XG4iXX0=