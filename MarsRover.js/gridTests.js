var grid;

module("Mars Rover Grid", {
    setup: function () {
        grid = new Grid(3, 3);
    }
});


test("GetNextSpace_North", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(0, 0), "North");

    equal(0, nextSpace.x);
    equal(1, nextSpace.y);
});

test("GetNextSpace_East", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(0, 0), "East");

    equal(1, nextSpace.x);
    equal(0, nextSpace.y);
});

test("GetNextSpace_South", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(1, 1), "South");

    equal(1, nextSpace.x);
    equal(0, nextSpace.y);
});

test("GetNextSpace_West", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(1, 1), "West");

    equal(0, nextSpace.x);
    equal(1, nextSpace.y);
});

test("WrapNorth", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(0, 2), "North");

    equal(0, nextSpace.x);
    equal(0, nextSpace.y);
});

test("WrapEast", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(2, 0), "East");

    equal(0, nextSpace.x);
    equal(0, nextSpace.y);
});

test("WrapSouth", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(0, 0), "South");

    equal(0, nextSpace.x);
    equal(2, nextSpace.y);
});

test("WrapWest", function () {
    var nextSpace = grid.getSpaceInFront(new Coordinate(0, 0), "West");

    equal(2, nextSpace.x);
    equal(0, nextSpace.y);
});

test("WrapEastBackwards", function () {
    var nextSpace = grid.getSpaceBehind(new Coordinate(0, 0), "East");

    equal(2, nextSpace.x);
    equal(0, nextSpace.y);
});

test("WrapWestBackwards", function () {
    var nextSpace = grid.getSpaceBehind(new Coordinate(2, 0), "West");

    equal(0, nextSpace.x);
    equal(0, nextSpace.y);
});

test("WrapNorthBackwards", function () {
    var nextSpace = grid.getSpaceBehind(new Coordinate(0, 0), "North");

    equal(0, nextSpace.x);
    equal(2, nextSpace.y);
});

test("WrapSouthBackwards", function () {
    var nextSpace = grid.getSpaceBehind(new Coordinate(0, 2), "South");

    equal(0, nextSpace.x);
    equal(0, nextSpace.y);
});