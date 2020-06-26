/**
 * @module vector
 * @description Vectors for mathematics and stuffs
 */
export default class Vector2 {
    /**
     * @typedef {Object} Vector2
     * @property {number} x
     * @property {number} y
     */

    /**
     * @description Create a new Vector pointing to a location in 2D space.
     * @param {number} x The x component of the vector
     * @param {number} y The y component of the vector
     * @returns {Vector2} A Vector2 instance that points to (x, y)
     * 
     *//**
     * @description Create a new Vector pointing to a location in 2D space.
     * @param {number} x The value that both components will be set to
     * @returns {Vector2} A Vector2 instance that points to (x, x)
     *
     *//**
     * @description Create a new Vector pointing to a location in 2D space.
     * @returns {Vector2} A Vector2 instance that points to (0, 0)
     */
    constructor(x = 0, y = x) {
        this.x = x;
        this.y = y;
    }

    /**
     * Copies this vector and returns a new vector
     * that points to the same location in space
     * @returns A copy of this vector
     */
    clone() {
        return new Vector2(x, y);
    }
}