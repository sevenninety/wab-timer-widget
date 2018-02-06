import { expect } from "chai";
import Model from "./Model";

describe("Widget Model tests", () => {

    let model:Model = new Model(10);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);
    model.addToQueue(10, model.zooms);

    model.addToQueue(2, model.updates);
    model.addToQueue(3, model.updates);
    model.addToQueue(3, model.updates);
    model.addToQueue(5, model.updates);
    model.addToQueue(7, model.updates);
    model.addToQueue(10, model.updates);

    describe("Zoom", () => {
        it("Check model zoom length", () => {
            expect(model.zooms.length).to.equal(10);
        });

        it("Check model zoom average", () => {
            expect(model.getAverage(model.zooms)).to.equal(10);
        });
    });

    describe("Update", () => {
        it("Check model update length", () => {
            expect(model.updates.length).to.equal(6);
        });

        it("Check model update average", () => {
            expect(model.getAverage(model.updates)).to.equal(5);
        });
    });
});
