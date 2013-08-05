function Grid(numOfRows, numOfCols) {
    var numOfRows = numOfRows;
    var numOfCols = numOfCols;

    this.getSpaceInFront = function getSpaceInFront(space, direction) {
        if (direction == "North") {
            if (space.y + 1 >= numOfRows)
                return new Coordinate(space.x, 0);

            return new Coordinate(space.x, space.y + 1);
        }
        else if (direction == "East") {
            if (space.x + 1 >= numOfCols)
                return new Coordinate(0, space.y);

            return new Coordinate(space.x + 1, space.y);
        }
        else if (direction == "West") {
            if (space.x - 1 < 0)
                return new Coordinate(numOfCols - 1, space.y);

            return new Coordinate(space.x - 1, space.y);
        }
        else {
            if (space.y - 1 < 0)
                return new Coordinate(space.x, numOfRows - 1);

            return new Coordinate(space.x, space.y - 1);
        }
    }

    this.getSpaceBehind = function getSpaceBehind(space, direction) {
        if (direction == "North") {
            if (space.y - 1 < 0)
                return new Coordinate(space.x, numOfRows - 1);

            return new Coordinate(space.x, space.y - 1);
        }
        else if (direction == "East") {
            if (space.x - 1 < 0)
                return new Coordinate(numOfCols - 1, space.y);

            return new Coordinate(space.x - 1, space.y);
        }
        else if (direction == "West") {
            if (space.x + 1 >= numOfCols)
                return new Coordinate(0, space.y);

            return new Coordinate(space.x + 1, space.y);
        }
        else {
            if (space.y + 1 >= numOfRows)
                return new Coordinate(space.x, 0);

            return new Coordinate(space.x, space.y + 1);
        }
    }
}


