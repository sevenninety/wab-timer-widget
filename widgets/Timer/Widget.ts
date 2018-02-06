/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare const BaseWidget: any; // there is no ts definition of BaseWidget yet

import declare from "./support/declareDecorator";
import Model from "./Model";

import * as lang from "dojo/_base/lang";
import * as on from "dojo/on";
import * as domClass from "dojo/dom-class";

import Map = require("esri/map");

// Define interface for widget config
interface Config {
    maxQueueLength: number;
}

// Define interface for our widget
interface Widget {
    // Widget UI properties
    perfstats: HTMLElement;
    perfstatZoom: HTMLElement;
    perfstatAvgZoom: HTMLElement;
    perfstatUpdate: HTMLElement;
    perfstatAvgUpdate: HTMLElement;

    // Standard widget properties
    baseClass: string;
    config: Config;
    nls: any;
    map: Map;
}

@declare(BaseWidget)
class Widget {
    // Private properties
    private zoomStart: number;
    private updateStart: number;
    private model:Model;

    baseClass = "timer";

    postCreate(args?: any): void {
        console.log(this.baseClass + "::postcreate");

        let self: any = this;
        self.inherited(arguments);

        this.model = new Model(this.config.maxQueueLength);
    }

    startup(args?: any): void {
        console.log(this.baseClass + "::startup");

        let self: any = this;
        self.inherited(arguments);

        this.bindEvents();
    }

    private bindEvents(): void {
        let self: any = this;

        self.own(
            on(this.map, "zoom-start", lang.hitch(this, this.onZoomStart))
        );

        self.own(on(this.map, "zoom-end", lang.hitch(this, this.onZoomEnd)));

        self.own(
            on(this.map, "update-start", lang.hitch(this, this.onUpdateStart))
        );

        self.own(
            on(this.map, "update-end", lang.hitch(this, this.onUpdateEnd))
        );
    }

    private onZoomStart(): void {
        this.zoomStart = performance.now();
    }

    private onZoomEnd(): void {
        let time: number = performance.now() - this.zoomStart;

        // Store value
        this.model.addToQueue(time, this.model.zooms);

        // Show zoom time
        this.perfstatZoom.innerHTML = `${this.nls.zoom} ${time.toFixed(4)} ${this.nls.unit}`;

        // Show average
        this.perfstatAvgZoom.innerHTML = `${this.nls.avg} ${this.model.getAverage(this.model.zooms).toFixed(4)} ${this.nls.unit}`;
    }

    private onUpdateStart(): void {
        this.updateStart = performance.now();
    }

    private onUpdateEnd(): void {
        let time: number = performance.now() - this.updateStart;

        // Check we have a number
        if (isNaN(time)) {
            return;
        }

        // Make sure UI is not shown unless we have data
        if (domClass.contains(this.perfstats, "hidden")) {
            domClass.remove(this.perfstats, "hidden");
        }

        // Store value
        this.model.addToQueue(time, this.model.updates);

        // Show update time
        this.perfstatUpdate.innerHTML = `${this.nls.update} ${time.toFixed(4)} ${this.nls.unit}`;

        // Show average
        this.perfstatAvgUpdate.innerHTML = `${this.nls.avg} ${this.model.getAverage(this.model.updates).toFixed(4)} ${this.nls.unit}`;
    }
}

export = Widget;
