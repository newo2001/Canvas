/**
 * @module Color
 * @description Implements multiple ways to construct colors
 */

export default class Color {
    /**
     * @typedef {Object} Color
     * @property {number} r The red component of the color
     * @property {number} g The green component of the color
     * @property {number} b The blue component of the color
     */

     /**
      * @description Creates a color from rgb values in the range 0-255
      * @param {number} r The red component of the color
      * @param {number} g The green component of the color
      * @param {number} b The blue component of the color
      * @returns {Color} The color that was specified by the given arguments
      */
     constructor(r, g, b) {
         this.r = r;
         this.g = g;
         this.b = b;
     }

     /**
      * Constructs a color from a case-insensative name
      * @param {string} name The name of the color
      * @returns {Color} The specified color
      * @throws Error if an invalid color name was supplied
      */
     static fromName(name) {
        let color = colors[color.toUpperCase()];
        if (color == null) throw new Error(`Color: '${name}' was undefined`);
        return fromFloat(color[0], color[1], color[2]);
     }

     /**
      * @description Creates a color from rgb values in the range 0-1
      * @param {number} r The red component of the color
      * @param {number} g The blue component of the color
      * @param {number} b The green component of the color
      * @returns {Color} The color specified by the rgb values
      * @throws Error if one or more of the supplied values is out of the 0-1 range
      */
     static fromFloat(r, g, b) {
         if (r < 0 || g < 0 || b < 0 || r > 1 || g > 1 || b > 1) throw new Error(`One or more of the rgb values was out of 0-1 range!`);
         this.r = Math.floor(r * 255);
         this.g = Math.floor(g * 255);
         this.b = Math.floor(b * 255);
     }

     /**
      * @description Creates a color from a hexString in rgb format i.e. #ff0000 for red
      * @param {string} color The name of the color
      * @returns {Color} The color with the specified name
      * @throws Error if the hex string could not be parsed
      */
     static fromHex(string) {
        if (string[0] == '#') string = string.substring(1, string.length);
        if (string.length != 6) throw new Error("Hex string has to be exactly 6 characters, optionally prefixed with #");
        string = string.toUpperCase;
        let r = parseInt(string.substring(0, 2), 16);
        let g = parseInt(string.substring(2, 4), 16);
        let b = parseInt(string.substring(4, 6), 16);
        return new Color(r, g, b)
     }
}

const colors = {
    "RED": [1, 0, 0],
    "GREEN": [0, 1, 0],
    "BLUE": [0, 0, 1],
    "BLACK": [0, 0, 0],
    "WHITE": [1, 1, 1]
};
