/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare const BaseWidget: any; // there is no ts definition of BaseWidget yet

import declare from "./support/declareDecorator";

import * as lang from "dojo/_base/lang";
import * as on from "dojo/on";
import * as domClass from "dojo/dom-class";

import Map = require("esri/map");

// Define interface for config
interface Config {
    maxQueueLength: number;
}

// Define interface for
interface Widget {
    perfstats: HTMLElement;
    perfstatZoom: HTMLElement;
    perfstatAvgZoom: HTMLElement;
    perfstatUpdate: HTMLElement;
    perfstatAvgUpdate: HTMLElement;
    baseClass: string;
    config: Config;
    nls: any;
    map: Map;
}

@declare(BaseWidget)
class Widget {
    // Private properties
    private zoomStart: number;
    private zooms: number[] = [];
    private updateStart: number;
    private updates: number[] = [];

    baseClass = "timer";

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
        this.addToQueue(time, this.zooms);

        // Show zoom time
        this.perfstatZoom.innerHTML = `${this.nls.zoom} ${time.toFixed(4)} ${this.nls.unit}`;

        // Show average
        this.perfstatAvgZoom.innerHTML = `${this.nls.avg} ${this.getAverage(this.zooms).toFixed(4)} ${this.nls.unit}`;
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
        this.addToQueue(time, this.updates);

        // Show update time
        this.perfstatUpdate.innerHTML = `${this.nls.update} ${time.toFixed(4)} ${this.nls.unit}`;

        // Show average
        this.perfstatAvgUpdate.innerHTML = `${this.nls.avg} ${this.getAverage(this.updates).toFixed(4)} ${this.nls.unit}`;
    }

    private addToQueue(time: number, queue: number[]): void {
        // Check we are not exceeding queue length
        if (queue.length <= this.config.maxQueueLength) {
            queue.push(time);
        } else {
            // Remove first value then add new value
            queue.shift();
            queue.push(time);
        }
    }

    private getAverage(queue: number[]): number {
        // Sum times
        let sum: number = queue.reduce((a: number, b: number) => {
            return a + b;
        });

        // Return average
        return sum / queue.length;
    }
}

export = Widget;
