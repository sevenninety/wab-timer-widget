define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A decorator that converts a TypeScript class into a declare constructor.
     * This allows declare constructors to be defined as classes, which nicely
     * hides away the `declare([], {})` boilerplate.
     */
    function default_1() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZURlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpZGdldHMvVGltZXIvc3VwcG9ydC9kZWNsYXJlRGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7Ozs7T0FJRztJQUNIO1FBQXdCLGdCQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsMkJBQW1COztRQUN2QyxNQUFNLENBQUMsVUFBUyxNQUFnQjtZQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUpELDRCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGVjbGFyZSBmcm9tIFwiZG9qby9fYmFzZS9kZWNsYXJlXCI7XG5cbi8qKlxuICogQSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIFR5cGVTY3JpcHQgY2xhc3MgaW50byBhIGRlY2xhcmUgY29uc3RydWN0b3IuXG4gKiBUaGlzIGFsbG93cyBkZWNsYXJlIGNvbnN0cnVjdG9ycyB0byBiZSBkZWZpbmVkIGFzIGNsYXNzZXMsIHdoaWNoIG5pY2VseVxuICogaGlkZXMgYXdheSB0aGUgYGRlY2xhcmUoW10sIHt9KWAgYm9pbGVycGxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKC4uLm1peGluczogT2JqZWN0W10pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZGVjbGFyZShtaXhpbnMsIHRhcmdldC5wcm90b3R5cGUpO1xuICAgIH07XG59XG4iXX0=