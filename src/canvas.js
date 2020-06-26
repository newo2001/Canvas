/**
 * @module canvas
 * @description The canvas.js module for drawing on a 2D canvas
 */

import Vector2 from "./vector.js";
import Color from "./color.js";

export { CanvasState };

export default class Canvas {
    /**
     * @typedef {Object} Canvas
     * @property {Vector2} size A vector defining the size of the canvas in px
     * @property {Array} pixels An array with interleaved rgb bytes representing the pixels on the canvas
     * @property {number} fps The framerate at which the canvas will refresh if possible
     */

     /**
      * @description Creates a new canvas including the DOM elements
      * @param {number} width The width of the canvas in px
      * @param {number} height The height of the canvas in px
      * @param {number} x The margin to the left of the canvas in px
      * @param {number} y The margin to the top of the canvas in px
      * @returns {Canvas} The newly created Canvas instance
      *//**
      * @description Creates a new canvas including the DOM elements positioned at (0, 0)
      * @param {number} width The width of the canvas in px
      * @param {number} height The height of the canvas in px
      * @returns {Canvas} The newly created Canvas instance
      */
    constructor(width, height, x = 0, y = 0) {
        this.size = new Vector2(width, height);
        this.pixels = new Uint8ClampedArray(width * height * 3);
        this.state = new CanvasState();
        this.fps = 60;

        let node = document.createElement("canvas");
        node.style.position = "absolute";
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        document.body.appendChild(node);
    }

    /**
     * @description Clear the entire canvas, replacing every pixel with the specified color 
     * @param {Color} the color to clear the canvas to
     *//**
     * @description Clear the entire canvas setting every pixel to white
     */
    clear(color = new Color("white")) {
        let temp = this.getFillColor();
        this.fill(color);
        this.fillRect(0, 0, this.width, this.height);
        this.fill(temp);
    }

    /**
     * @description Sets the color that will be used for future fill operations
     * @param {Color} color The color that should be used
     */
    fill(color) {
        this.state.fillColor = color;
    }

    /**
     * @description Obtain the color that is currently being used for fill operations
     * @returns {Color} The color that is currently being used for all fill operations
     */
    getFillColor() {
        return this.state.fillColor
    }

    /**
     * @description Draw the outlines of a rectangle
     * @param {number} x The position on the x-axis of the top-left corner of the rectangle
     * @param {number} y The position on the y-axis of the top-left corner of the rectangle
     * @param {number} width The width of the rectangle
     * @param {number} height The height of the rectangle
     */
    rect(x, y, width, height) {
        
    }

    /**
     * @description Draw a filled rectangle
     * @param {number} x The position on the x-axis of the top-left corner of the rectangle
     * @param {number} y The position on the y-axis of the top-left corner of the rectangle
     * @param {number} width The width of the rectangle
     * @param {number} height The height of the rectangle
     */
    fillRect(x, y, width, height) {
        let color = this.state.fillColor;
        let strokeWidth = this.state.strokeWidth;
        for (let dx = x + strokeWidth; dx < x+width - strokeWidth; dx++) {
            for (let dy = y + strokeWidth; dy < y+height - strokeWidth; dy++) {
                let i = dy * this.width * 3 + x * 3;
                this.pixels[i] = color.r;
                this.pixels[i+1] = color.g;
                this.pixels[i+2] = color.b;
            }
        }
        if (strokeWidth > 0) this.rect(x, y, width, height);
    }
}

class CanvasState {
    /**
     * @typedef {Object} CanvasState Defines the persistent state of a canvas object
     * @property {Color} fillColor The color that will be used for all "fill" operations
     * @property {Color} strokeColor The color that will be used for all "stroke" operations
     * @property {number} strokeWidth The width of all the strokes drawn by a "stroke" operation
     */

    constructor() {
        this.fillColor = new Color(255, 255, 255);
        this.strokeColor = new Color(0, 0, 0);
        this.strokeWidth = 1;
    }
}

