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

      startup: function() {
        this.inherited(arguments);
        this.bindEvents();
      },

      bindEvents: function() {
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
        this._addToList(time, this._zooms);

        // Show zoom time
        this.perfstatZoom.innerHTML = "Last Zoom " + time.toFixed(4) + " ms.";

        this.perfstatAvgZoom.innerHTML =
          "Avg Last 10 Zooms " +
          this._getAverage(this._zooms).toFixed(4) +
          " ms.";
      },

      _onUpdateStart: function() {
        this._updateStart = performance.now();
      },

      _onUpdateEnd: function() {
        this._updateEnd = performance.now();
        var time = this._updateEnd - this._updateStart;

        if (isNaN(time)) {
          return;
        }

        this._addToList(time, this._updates);

        if (domClass.contains(this.perfstats, "hidden")) {
          domClass.remove(this.perfstats, "hidden");
        }

        // Show zoom time
        this.perfstatUpdate.innerHTML =
          "Last Update " + time.toFixed(4) + " ms.";

        this.perfstatAvgUpdate.innerHTML =
          "Avg Last 10 Updates " +
          this._getAverage(this._updates).toFixed(4) +
          " ms.";
      },

      _addToList: function(val, list) {
        if (list.length < 10) {
          list.push(val);
        } else {
          list.shift();
          list.push(val);
        }
      },

      _getAverage: function(list) {
        var sum = list.reduce(function(a, b) {
          return a + b;
        });
        var avg = sum / list.length;

        return avg;
      }
    });
  }
);
