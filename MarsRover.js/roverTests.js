test("MovingForward_ChangesPosition", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 0), "North", grid);
    rover.moveForward();

    equal(0, rover.currentLocation.x);
    equal(1, rover.currentLocation.y);
});

test("MovingBackward_ChangesPosition", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "North", grid);
    rover.moveBackwards();

    equal(0, rover.currentLocation.x);
    equal(0, rover.currentLocation.y);
});

test("WhenFacingNorth_TurnRight_AssertFacingEast", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "North", grid);
    rover.turnRight();

    equal("East", rover.direction);
});

test("WhenFacingEast_TurnRight_AssertFacingSouth", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "East", grid);
    rover.turnRight();

    equal("South", rover.direction);
});

test("WhenFacingSouth_TurnRight_AssertFacingWest", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "South", grid);
    rover.turnRight();

    equal("West", rover.direction);
});

test("WhenFacingWest_TurnRight_AssertFacingNorth", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "West", grid);
    rover.turnRight();

    equal("North", rover.direction);
});

test("WhenFacingNorth_TurnLeft_AssertFacingWest", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "North", grid);
    rover.turnLeft();

    equal("West", rover.direction);
});

test("WhenFacingWest_TurnLeft_AssertFacingSouth", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "West", grid);
    rover.turnLeft();

    equal("South", rover.direction);
});

test("WhenFacingSouth_TurnLeft_AssertFacingEast", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "South", grid);
    rover.turnLeft();

    equal("East", rover.direction);
});

test("WhenFacingEast_TurnLeft_AssertFacingNorth", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(0, 1), "East", grid);
    rover.turnLeft();

    equal("North", rover.direction);
});

test("TakeCommand_Forward", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(1, 1), "North", grid);
    rover.takeCommands(38);

    equal(1, rover.currentLocation.x);
    equal(2, rover.currentLocation.y);
});

test("TakeCommand_Backward", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(1, 1), "North", grid);
    rover.takeCommands(40);

    equal(1, rover.currentLocation.x);
    equal(0, rover.currentLocation.y);
});

test("TakeCommand_TurnRight", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(1, 1), "North", grid);
    rover.takeCommands(39);

    equal("East", rover.direction);
});

test("TakeCommand_TurnLeft", function () {
    var grid = new Grid(10, 10);
    var rover = new Rover(new Coordinate(1, 1), "North", grid);
    rover.takeCommands(37);

    equal("West", rover.direction);
});


//[TestMethod]
//public void TakeCommand_TurnLeft()
//{
//var grid = new Grid(3, 3);
//var rover = new Rover(new Coordinate(1, 1), Direction.North, grid);
//rover.TakeCommands("l");

//Assert.AreEqual(Direction.West, rover.Direction);
//}

//[TestMethod]
//public void TakeCommand_MoveForawardTwoSpaces()
//{
//var grid = new Grid(4, 4);
//var rover = new Rover(new Coordinate(1, 1), Direction.North, grid);
//rover.TakeCommands("ff");

//Assert.AreEqual(1, rover.Location.X);
//Assert.AreEqual(3, rover.Location.Y);
//}

//[TestMethod]
//public void TakeCommand_MoveForawardOneSpaceBackwardOneSpace()
//{
//var grid = new Grid(4, 4);
//var rover = new Rover(new Coordinate(1, 1), Direction.North, grid);
//rover.TakeCommands("fb");

//Assert.AreEqual(1, rover.Location.X);
//Assert.AreEqual(1, rover.Location.Y);
//}