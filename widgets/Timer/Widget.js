define(
  [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/dom-class",
    "jimu/BaseWidget"
  ],
  function(declare, lang, on, domClass, BaseWidget) {
    return declare([BaseWidget], {
      baseClass: "timer",

      _zooms: [],
      _updates: [],
      _maxQueueLength: 10,

      startup: function() {
        this.inherited(arguments);
        this._bindEvents();
      },

      _bindEvents: function() {
        this.own(
          on(this.map, "zoom-start", lang.hitch(this, this._onZoomStart))
        );

        this.own(on(this.map, "zoom-end", lang.hitch(this, this._onZoomEnd)));

        this.own(
          on(this.map, "update-start", lang.hitch(this, this._onUpdateStart))
        );

        this.own(
          on(this.map, "update-end", lang.hitch(this, this._onUpdateEnd))
        );
      },

      _onZoomStart: function() {
        this._zoomStart = performance.now();
      },

      _onZoomEnd: function() {
        this._zoomEnd = performance.now();

        var time = this._zoomEnd - this._zoomStart;
        this._addToQueue(time, this._zooms);

        // Show zoom time
        this.perfstatZoom.innerHTML =
          this.nls.zoom + " " + time.toFixed(4) + " " + this.nls.unit;

        // Show average
        this.perfstatAvgZoom.innerHTML =
          this.nls.avg +
          " " +
          this._getAverage(this._zooms).toFixed(4) +
          " " +
          this.nls.unit;
      },
      
      _onUpdateStart: function() {
        this._updateStart = performance.now();
      },

      _onUpdateEnd: function() {
        this._updateEnd = performance.now();
        var time = this._updateEnd - this._updateStart;

        // Check we have a number
        if (isNaN(time)) {
          return;
        }

        // Make sure UI is not shown unless we have data
        if (domClass.contains(this.perfstats, "hidden")) {
          domClass.remove(this.perfstats, "hidden");
        }

        this._addToQueue(time, this._updates);

        // Show update time
        this.perfstatUpdate.innerHTML =
          this.nls.update + " " + time.toFixed(4) + " " + this.nls.unit;

        // Show average
        this.perfstatAvgUpdate.innerHTML =
          this.nls.avg +
          " " +
          this._getAverage(this._updates).toFixed(4) +
          " " +
          this.nls.unit;
      },

      _addToQueue: function(val, queue) {
        // Check we are not exceeding queue length
        if (queue.length <= this._maxQueueLength) {
          queue.push(val);
        } else {
          // Remove first value then add new value
          queue.shift();
          queue.push(val);
        }
      },
      
      _getAverage: function(queue) {
        // Sum times
        var sum = queue.reduce(function(a, b) {
          return a + b;
        });

        // Return average
        return sum / queue.length;
      }
    });
  }
);
