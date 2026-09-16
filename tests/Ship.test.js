import { describe, expect, test } from "@jest/globals";

import Ship from "../src/Ship.js";

describe("Ship", () => {
  test("creates a ship with the given length", () => {
    const ship = new Ship(3);

    expect(ship.length).toBe(3);
  });

  test("starts with zero hits", () => {
    const ship = new Ship(3);

    expect(ship.hits).toBe(0);
  });

  test("starts unsunk", () => {
    const ship = new Ship(3);

    expect(ship.isSunk()).toBe(false);
  });

  test("hit() increases the number of hits", () => {
    const ship = new Ship(3);

    ship.hit();

    expect(ship.hits).toBe(1);
  });

  test("multiple hits are counted", () => {
    const ship = new Ship(3);

    ship.hit();
    ship.hit();

    expect(ship.hits).toBe(2);
  });

  test("ship is not sunk before taking enough hits", () => {
    const ship = new Ship(3);

    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(false);
  });

  test("ship is sunk after taking hits equal to its length", () => {
    const ship = new Ship(3);

    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
  });

  test("a length-1 ship is sunk after one hit", () => {
    const ship = new Ship(1);

    ship.hit();

    expect(ship.isSunk()).toBe(true);
  });
});
