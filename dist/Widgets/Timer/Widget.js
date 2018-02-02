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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2lkZ2V0cy9UaW1lci9XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFBLCtEQUErRDtJQThCL0Q7UUFEQTtZQUlZLFVBQUssR0FBYSxFQUFFLENBQUM7WUFFckIsWUFBTyxHQUFhLEVBQUUsQ0FBQztZQUUvQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBNkZ4QixDQUFDO1FBM0ZHLHdCQUFPLEdBQVAsVUFBUSxJQUFVO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBRTFDLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsMkJBQVUsR0FBVjtZQUNJLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUVyQixJQUFJLENBQUMsR0FBRyxDQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDakUsQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckUsSUFBSSxDQUFDLEdBQUcsQ0FDSixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQ3JFLENBQUM7WUFFRixJQUFJLENBQUMsR0FBRyxD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Q3JCLENBQUM7UUFDTCxDQUFDO1FBRU8sMkJBQVUsR0FBbEIsVUFBbUIsS0FBZTtZQUM5QixZQUFZO1lBQ1osSUFBSSxHQUFHLEdBQVUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQVMsRUFBRSxDQUFTO2dCQUN2RCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUVILGlCQUFpQjtZQUNqQixNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQztRQW5HQyxNQUFNO1lBRFgsMEJBQU8sQ0FBQyxVQUFVLENBQUM7V0FDZCxNQUFNLENBb0dYO1FBQUQsYUFBQztLQUFBLEFBcEdELElBb0dDO0lBRUQsT0FBUyxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1kZXBlbmRlbmN5IHBhdGg9XCJqaW11L0Jhc2VXaWRnZXRcIiBuYW1lPVwiQmFzZVdpZGdldFwiIC8+XG5kZWNsYXJlIHZhciBCYXNlV2lkZ2V0OiBhbnk7IC8vIHRoZXJlIGlzIG5vIHRzIGRlZmluaXRpb24gb2YgQmFzZVdpZGdldCB5ZXRcblxuaW1wb3J0IGRlY2xhcmUgZnJvbSBcIi4vc3VwcG9ydC9kZWNsYXJlRGVjb3JhdG9yXCI7XG5cbmltcG9ydCAqIGFzIGxhbmcgZnJvbSBcImRvam8vX2Jhc2UvbGFuZ1wiO1xuaW1wb3J0ICogYXMgb24gZnJvbSBcImRvam8vb25cIjtcbmltcG9ydCAqIGFzIGRvbUNsYXNzIGZyb20gXCJkb2pvL2RvbS1jbGFzc1wiO1xuXG5pbXBvcnQgTWFwID0gcmVxdWlyZShcImVzcmkvbWFwXCIpO1xuXG4vLyBEZWZpbmUgaW50ZXJmYWNlIGZvciBjb25maWdcbmludGVyZmFjZSBDb25maWcge1xuICAgIG1heFF1ZXVlTGVuZ3RoOiBudW1iZXI7XG59XG5cbi8vIERlZmluZSBpbnRlcmZhY2UgZm9yXG5pbnRlcmZhY2UgV2lkZ2V0IHtcbiAgICBwZXJmc3RhdHM6IEhUTUxFbGVtZW50O1xuICAgIHBlcmZzdGF0Wm9vbTogSFRNTEVsZW1lbnQ7XG4gICAgcGVyZnN0YXRBdmdab29tOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdFVwZGF0ZTogSFRNTEVsZW1lbnQ7XG4gICAgcGVyZnN0YXRBdmdVcGRhdGU6IEhUTUxFbGVtZW50O1xuICAgIGJhc2VDbGFzczogc3RyaW5nO1xuICAgIGNvbmZpZzogQ29uZmlnO1xuICAgIG5sczogYW55O1xuICAgIG1hcDogTWFwO1xufVxuXG5AZGVjbGFyZShCYXNlV2lkZ2V0KVxuY2xhc3MgV2lkZ2V0IHtcbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICBwcml2YXRlIHpvb21TdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgem9vbXM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSB1cGRhdGVTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgdXBkYXRlczogbnVtYmVyW10gPSBbXTtcblxuICAgIGJhc2VDbGFzcyA9IFwidGltZXJcIjtcblxuICAgIHN0YXJ0dXAoYXJncz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhc2VDbGFzcyArIFwiOjpzdGFydHVwXCIpO1xuXG4gICAgICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzO1xuICAgICAgICBzZWxmLmluaGVyaXRlZChhcmd1bWVudHMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwiem9vbS1zdGFydFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25ab29tU3RhcnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIHNlbGYub3duKG9uKHRoaXMubWFwLCBcInpvb20tZW5kXCIsIGxhbmcuaGl0Y2godGhpcywgdGhpcy5vblpvb21FbmQpKSk7XG5cbiAgICAgICAgc2VsZi5vd24oXG4gICAgICAgICAgICBvbih0aGlzLm1hcCwgXCJ1cGRhdGUtc3RhcnRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uVXBkYXRlU3RhcnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwidXBkYXRlLWVuZFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25VcGRhdGVFbmQpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uWm9vbVN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnpvb21TdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIG9uWm9vbUVuZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRpbWU6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy56b29tU3RhcnQ7XG5cbiAgICAgICAgLy8gU3RvcmUgdmFsdWVcbiAgICAgICAgdGhpcy5hZGRUb1F1ZXVlKHRpbWUsIHRoaXMuem9vbXMpO1xuXG4gICAgICAgIC8vIFNob3cgem9vbSB0aW1lXG4gICAgICAgIHRoaXMucGVyZnN0YXRab29tLmlubmVySFRNTCA9IGAke3RoaXMubmxzLnpvb219ICR7dGltZS50b0ZpeGVkKDQpfSAke3RoaXMubmxzLnVuaXR9YDtcblxuICAgICAgICAvLyBTaG93IGF2ZXJhZ2VcbiAgICAgICAgdGhpcy5wZXJmc3RhdEF2Z1pvb20uaW5uZXJIVE1MID0gYCR7dGhpcy5ubHMuYXZnfSAke3RoaXMuZ2V0QXZlcmFnZSh0aGlzLnpvb21zKS50b0ZpeGVkKDQpfSAke3RoaXMubmxzLnVuaXR9YDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZVN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGVFbmQoKTogdm9pZCB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudXBkYXRlU3RhcnQ7XG5cbiAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBVSSBpcyBub3Qgc2hvd24gdW5sZXNzIHdlIGhhdmUgZGF0YVxuICAgICAgICBpZiAoZG9tQ2xhc3MuY29udGFpbnModGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBkb21DbGFzcy5yZW1vdmUodGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdmFsdWVcbiAgICAgICAgdGhpcy5hZGRUb1F1ZXVlKHRpbWUsIHRoaXMudXBkYXRlcyk7XG5cbiAgICAgICAgLy8gU2hvdyB1cGRhdGUgdGltZVxuICAgICAgICB0aGlzLnBlcmZzdGF0VXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLnVwZGF0ZX0gJHt0aW1lLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuXG4gICAgICAgIC8vIFNob3cgYXZlcmFnZVxuICAgICAgICB0aGlzLnBlcmZzdGF0QXZnVXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLmF2Z30gJHt0aGlzLmdldEF2ZXJhZ2UodGhpcy51cGRhdGVzKS50b0ZpeGVkKDQpfSAke3RoaXMubmxzLnVuaXR9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvUXVldWUodGltZTogbnVtYmVyLCBxdWV1ZTogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBleGNlZWRpbmcgcXVldWUgbGVuZ3RoXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPD0gdGhpcy5jb25maWcubWF4UXVldWVMZW5ndGgpIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2godGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZmlyc3QgdmFsdWUgdGhlbiBhZGQgbmV3IHZhbHVlXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcXVldWUucHVzaCh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QXZlcmFnZShxdWV1ZTogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICAvLyBTdW0gdGltZXNcbiAgICAgICAgbGV0IHN1bTpudW1iZXIgPSBxdWV1ZS5yZWR1Y2UoZnVuY3Rpb24oYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGF2ZXJhZ2VcbiAgICAgICAgcmV0dXJuIHN1bSAvIHF1ZXVlLmxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IFdpZGdldDtcbiJdfQ==