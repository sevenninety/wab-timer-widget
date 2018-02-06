var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "jimu/BaseWidget", "./support/declareDecorator", "./Model", "dojo/_base/lang", "dojo/on", "dojo/dom-class"], function (require, exports, BaseWidget, declareDecorator_1, Model_1, lang, on, domClass) {
    var Widget = (function () {
        function Widget() {
            this.baseClass = "timer";
        }
        Widget.prototype.postCreate = function (args) {
            console.log(this.baseClass + "::postcreate");
            var self = this;
            self.inherited(arguments);
            this.model = new Model_1.default(this.config.maxQueueLength);
        };
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
            this.model.addToQueue(time, this.model.zooms);
            this.perfstatZoom.innerHTML = this.nls.zoom + " " + time.toFixed(4) + " " + this.nls.unit;
            this.perfstatAvgZoom.innerHTML = this.nls.avg + " " + this.model.getAverage(this.model.zooms).toFixed(4) + " " + this.nls.unit;
        };
        Widget.prototype.onUpdateStart = function () {
            this.updateStart = performance.now();
        };
        Widget.prototype.onUpdateEnd = function () {
            var time = performance.now() - this.updateStart;
            if (isNaN(time)) {
                return;
            }
            if (domClass.contains(this.perfstats, "hidden")) {
                domClass.remove(this.perfstats, "hidden");
            }
            this.model.addToQueue(time, this.model.updates);
            this.perfstatUpdate.innerHTML = this.nls.update + " " + time.toFixed(4) + " " + this.nls.unit;
            this.perfstatAvgUpdate.innerHTML = this.nls.avg + " " + this.model.getAverage(this.model.updates).toFixed(4) + " " + this.nls.unit;
        };
        Widget = __decorate([
            declareDecorator_1.default(BaseWidget)
        ], Widget);
        return Widget;
    }());
    return Widget;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2lkZ2V0cy9UaW1lci9XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQWtDQTtRQURBO1lBT0ksY0FBUyxHQUFHLE9BQU8sQ0FBQztRQWlGeEIsQ0FBQztRQS9FRywyQkFBVSxHQUFWLFVBQVcsSUFBVTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFFN0MsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBVTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUUxQyxJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUVPLDJCQUFVLEdBQWxCO1lBQ0ksSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1lBRXJCLElBQUksQ0FBQyxHQUFHLENBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNqRSxDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxD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Ii8vLyA8YW1kLWRlcGVuZGVuY3kgcGF0aD1cImppbXUvQmFzZVdpZGdldFwiIG5hbWU9XCJCYXNlV2lkZ2V0XCIgLz5cbmRlY2xhcmUgY29uc3QgQmFzZVdpZGdldDogYW55OyAvLyB0aGVyZSBpcyBubyB0cyBkZWZpbml0aW9uIG9mIEJhc2VXaWRnZXQgeWV0XG5cbmltcG9ydCBkZWNsYXJlIGZyb20gXCIuL3N1cHBvcnQvZGVjbGFyZURlY29yYXRvclwiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCI7XG5cbmltcG9ydCAqIGFzIGxhbmcgZnJvbSBcImRvam8vX2Jhc2UvbGFuZ1wiO1xuaW1wb3J0ICogYXMgb24gZnJvbSBcImRvam8vb25cIjtcbmltcG9ydCAqIGFzIGRvbUNsYXNzIGZyb20gXCJkb2pvL2RvbS1jbGFzc1wiO1xuXG5pbXBvcnQgTWFwID0gcmVxdWlyZShcImVzcmkvbWFwXCIpO1xuXG4vLyBEZWZpbmUgaW50ZXJmYWNlIGZvciB3aWRnZXQgY29uZmlnXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgICBtYXhRdWV1ZUxlbmd0aDogbnVtYmVyO1xufVxuXG4vLyBEZWZpbmUgaW50ZXJmYWNlIGZvciBvdXIgd2lkZ2V0XG5pbnRlcmZhY2UgV2lkZ2V0IHtcbiAgICAvLyBXaWRnZXQgVUkgcHJvcGVydGllc1xuICAgIHBlcmZzdGF0czogSFRNTEVsZW1lbnQ7XG4gICAgcGVyZnN0YXRab29tOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdEF2Z1pvb206IEhUTUxFbGVtZW50O1xuICAgIHBlcmZzdGF0VXBkYXRlOiBIVE1MRWxlbWVudDtcbiAgICBwZXJmc3RhdEF2Z1VwZGF0ZTogSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBTdGFuZGFyZCB3aWRnZXQgcHJvcGVydGllc1xuICAgIGJhc2VDbGFzczogc3RyaW5nO1xuICAgIGNvbmZpZzogQ29uZmlnO1xuICAgIG5sczogYW55O1xuICAgIG1hcDogTWFwO1xufVxuXG5AZGVjbGFyZShCYXNlV2lkZ2V0KVxuY2xhc3MgV2lkZ2V0IHtcbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICBwcml2YXRlIHpvb21TdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgdXBkYXRlU3RhcnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIG1vZGVsOk1vZGVsO1xuXG4gICAgYmFzZUNsYXNzID0gXCJ0aW1lclwiO1xuXG4gICAgcG9zdENyZWF0ZShhcmdzPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZUNsYXNzICsgXCI6OnBvc3RjcmVhdGVcIik7XG5cbiAgICAgICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgICAgIHNlbGYuaW5oZXJpdGVkKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh0aGlzLmNvbmZpZy5tYXhRdWV1ZUxlbmd0aCk7XG4gICAgfVxuXG4gICAgc3RhcnR1cChhcmdzPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZUNsYXNzICsgXCI6OnN0YXJ0dXBcIik7XG5cbiAgICAgICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgICAgIHNlbGYuaW5oZXJpdGVkKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiaW5kRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcblxuICAgICAgICBzZWxmLm93bihcbiAgICAgICAgICAgIG9uKHRoaXMubWFwLCBcInpvb20tc3RhcnRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uWm9vbVN0YXJ0KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZWxmLm93bihvbih0aGlzLm1hcCwgXCJ6b29tLWVuZFwiLCBsYW5nLmhpdGNoKHRoaXMsIHRoaXMub25ab29tRW5kKSkpO1xuXG4gICAgICAgIHNlbGYub3duKFxuICAgICAgICAgICAgb24odGhpcy5tYXAsIFwidXBkYXRlLXN0YXJ0XCIsIGxhbmcuaGl0Y2godGhpcywgdGhpcy5vblVwZGF0ZVN0YXJ0KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZWxmLm93bihcbiAgICAgICAgICAgIG9uKHRoaXMubWFwLCBcInVwZGF0ZS1lbmRcIiwgbGFuZy5oaXRjaCh0aGlzLCB0aGlzLm9uVXBkYXRlRW5kKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uWm9vbVN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnpvb21TdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25ab29tRW5kKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnpvb21TdGFydDtcblxuICAgICAgICAvLyBTdG9yZSB2YWx1ZVxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRvUXVldWUodGltZSwgdGhpcy5tb2RlbC56b29tcyk7XG5cbiAgICAgICAgLy8gU2hvdyB6b29tIHRpbWVcbiAgICAgICAgdGhpcy5wZXJmc3RhdFpvb20uaW5uZXJIVE1MID0gYCR7dGhpcy5ubHMuem9vbX0gJHt0aW1lLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuXG4gICAgICAgIC8vIFNob3cgYXZlcmFnZVxuICAgICAgICB0aGlzLnBlcmZzdGF0QXZnWm9vbS5pbm5lckhUTUwgPSBgJHt0aGlzLm5scy5hdmd9ICR7dGhpcy5tb2RlbC5nZXRBdmVyYWdlKHRoaXMubW9kZWwuem9vbXMpLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGRhdGVTdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGRhdGVFbmQoKTogdm9pZCB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudXBkYXRlU3RhcnQ7XG5cbiAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBVSSBpcyBub3Qgc2hvd24gdW5sZXNzIHdlIGhhdmUgZGF0YVxuICAgICAgICBpZiAoZG9tQ2xhc3MuY29udGFpbnModGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBkb21DbGFzcy5yZW1vdmUodGhpcy5wZXJmc3RhdHMsIFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdmFsdWVcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRUb1F1ZXVlKHRpbWUsIHRoaXMubW9kZWwudXBkYXRlcyk7XG5cbiAgICAgICAgLy8gU2hvdyB1cGRhdGUgdGltZVxuICAgICAgICB0aGlzLnBlcmZzdGF0VXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLnVwZGF0ZX0gJHt0aW1lLnRvRml4ZWQoNCl9ICR7dGhpcy5ubHMudW5pdH1gO1xuXG4gICAgICAgIC8vIFNob3cgYXZlcmFnZVxuICAgICAgICB0aGlzLnBlcmZzdGF0QXZnVXBkYXRlLmlubmVySFRNTCA9IGAke3RoaXMubmxzLmF2Z30gJHt0aGlzLm1vZGVsLmdldEF2ZXJhZ2UodGhpcy5tb2RlbC51cGRhdGVzKS50b0ZpeGVkKDQpfSAke3RoaXMubmxzLnVuaXR9YDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IFdpZGdldDtcbiJdfQ==