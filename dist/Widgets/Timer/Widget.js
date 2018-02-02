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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2lkZ2V0cy9UaW1lci9XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFBLCtEQUErRDtJQThCL0Q7UUFEQTtZQUlZLFVBQUssR0FBYSxFQUFFLENBQUM7WUFFckIsWUFBTyxHQUFhLEVBQUUsQ0FBQztZQUUvQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBNkZ4QixDQUFDO1FBM0ZHLHdCQUFPLEdBQVAsVUFBUSxJQUFVO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBRTFDLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRU8sMkJBQVUsR0FBbEI7WUFDSSxJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7WUFFckIsSUFBSSxDQUFDLEdBQUcsQ0FDSixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2pFLENBQUM7WUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksQ0FBQyxHQUFHLENBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcs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QUM7WUFDckIsQ0FBQztRQUNMLENBQUM7UUFFTywyQkFBVSxHQUFsQixVQUFtQixLQUFlO1lBQzlCLFlBQVk7WUFDWixJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBUyxFQUFFLENBQVM7Z0JBQ2hELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO1FBbkdDLE1BQU07WUFEWCwwQkFBTyxDQUFDLFVBQVUsQ0FBQztXQUNkLE1BQU0sQ0FvR1g7UUFBRCxhQUFDO0tBQUEsQUFwR0QsSUFvR0M7SUFFRCxPQUFTLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLWRlcGVuZGVuY3kgcGF0aD1cImppbXUvQmFzZVdpZGdldFwiIG5hbWU9XCJCYXNlV2lkZ2V0XCIgLz5cbmRlY2xhcmUgdmFyIEJhc2VXaWRnZXQ6IGFueTsgLy8gdGhlcmUgaXMgbm8gdHMgZGVmaW5pdGlvbiBvZiBCYXNlV2lkZ2V0IHlldFxuXG5pbXBvcnQgZGVjbGFyZSBmcm9tIFwiLi9zdXBwb3J0L2RlY2xhcmVEZWNvcmF0b3JcIjtcblxuaW1wb3J0ICogYXMgbGFuZyBmcm9tIFwiZG9qby9fYmFzZS9sYW5nXCI7XG5pbXBvcnQgKiBhcyBvbiBmcm9tIFwiZG9qby9vblwiO1xuaW1wb3J0ICogYXMgZG9tQ2xhc3MgZnJvbSBcImRvam8vZG9tLWNsYXNzXCI7XG5cbmltcG9ydCBNYXAgPSByZXF1aXJlKFwiZXNyaS9tYXBcIik7XG5cbi8vIERlZmluZSBpbnRlcmZhY2UgZm9yIGNvbmZpZ1xuaW50ZXJmYWNlIENvbmZpZyB7XG4gICAgbWF4UXVldWVMZW5ndGg6IG51bWJlcjtcbn1cblxuLy8gRGVmaW5lIGludGVyZmFjZSBmb3JcbmludGVyZmFjZSBXaWRnZXQge1xuICAgIHBlcmZzdGF0czogSFRNTEVsZW1lbnQ7XG4gICAgcGVyZnN0YXRab29tOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdEF2Z1pvb206IEhUTUxFbGVtZW50O1xuICAgIHBlcmZzdGF0VXBkYXRlOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdEF2Z1VwZGF0ZTogSFRNTEVsZW1lbnQ7XG4gICAgYmFzZUNsYXNzOiBzdHJpbmc7XG4gICAgY29uZmlnOiBDb25maWc7XG4gICAgbmxzOiBhbnk7XG4gICAgbWFwOiBNYXA7XG59XG5cbkBkZWNsYXJlKEJhc2VXaWRnZXQpXG5jbGFzcyBXaWRnZXQge1xuICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgIHByaXZhdGUgem9vbVN0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB6b29tczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB1cGRhdGVzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgYmFzZUNsYXNzID0gXCJ0aW1lclwiO1xuXG4gICAgc3RhcnR1cChhcmdzPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZUNsYXNzICsgXCI6OnN0YXJ0dXBcIik7XG5cbiAgICAgICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgICAgIHNlbGYuaW5oZXJpdGVkKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiaW5kRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcblxuICAgICAgICBzZWxmLm93bihcbiAgICAgICAgICAgIG9uKHRoaXMubWFwLCBcInpvb20tc3RhcnRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uWm9vbVN0YXJ0KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZWxmLm93bihvbih0aGlzLm1hcCwgXCJ6b29tLWVuZFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25ab29tRW5kKSkpO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwidXBkYXRlLXN0YXJ0XCIsIGxhbmcuaGl0Y2godGhpcywgdGhpcy5vblVwZGF0ZVN0YXJ0KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZWxmLm93bihcbiAgICAgICAgICAgIG9uKHRoaXMubWFwLCBcInVwZGF0ZS1lbmRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uVXBkYXRlRW5kKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uWm9vbVN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnpvb21TdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25ab29tRW5kKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnpvb21TdGFydDtcblxuICAgICAgICAvLyBTdG9yZSB2YWx1ZVxuICAgICAgICB0aGlzLmFkZFRvUXVldWUodGltZSwgdGhpcy56b29tcyk7XG5cbiAgICAgICAgLy8gU2hvdyB6b29tIHRpbWVcbiAgICAgICAgdGhpcy5wZXJmc3RhdFpvb20uaW5uZXJIVE1MID0gYCR7dGhpcy5ubHMuem9vbX0gJHt0aW1lLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuXG4gICAgICAgIC8vIFNob3cgYXZlcmFnZVxuICAgICAgICB0aGlzLnBlcmZzdGF0QXZnWm9vbS5pbm5lckhUTUwgPSBgJHt0aGlzLm5scy5hdmd9ICR7dGhpcy5nZXRBdmVyYWdlKHRoaXMuem9vbXMpLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGRhdGVTdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGRhdGVFbmQoKTogdm9pZCB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudXBkYXRlU3RhcnQ7XG5cbiAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBVSSBpcyBub3Qgc2hvd24gdW5sZXNzIHdlIGhhdmUgZGF0YVxuICAgICAgICBpZiAoZG9tQ2xhc3MuY29udGFpbnModGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBkb21DbGFzcy5yZW1vdmUodGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdmFsdWVcbiAgICAgICAgdGhpcy5hZGRUb1F1ZXVlKHRpbWUsIHRoaXMudXBkYXRlcyk7XG5cbiAgICAgICAgLy8gU2hvdyB1cGRhdGUgdGltZVxuICAgICAgICB0aGlzLnBlcmZzdGF0VXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLnVwZGF0ZX0gJHt0aW1lLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuXG4gICAgICAgIC8vIFNob3cgYXZlcmFnZVxuICAgICAgICB0aGlzLnBlcmZzdGF0QXZnVXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLmF2Z30gJHt0aGlzLmdldEF2ZXJhZ2UodGhpcy51cGRhdGVzKS50b0ZpeGVkKDQpfSAke3RoaXMubmxzLnVuaXR9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvUXVldWUodGltZTogbnVtYmVyLCBxdWV1ZTogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBleGNlZWRpbmcgcXVldWUgbGVuZ3RoXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPD0gdGhpcy5jb25maWcubWF4UXVldWVMZW5ndGgpIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2godGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZmlyc3QgdmFsdWUgdGhlbiBhZGQgbmV3IHZhbHVlXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcXVldWUucHVzaCh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QXZlcmFnZShxdWV1ZTogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICAvLyBTdW0gdGltZXNcbiAgICAgICAgbGV0IHN1bTogbnVtYmVyID0gcXVldWUucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXR1cm4gYXZlcmFnZVxuICAgICAgICByZXR1cm4gc3VtIC8gcXVldWUubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0ID0gV2lkZ2V0O1xuIl19