function Rover(startinglocation, direction, grid) {
    this.currentLocation = startinglocation;
    this.direction = direction;
    this.grid = grid;
    
    this.moveForward = function moveForward() {
        var nextlocation = grid.getSpaceInFront(this.currentLocation, this.direction);
        this.currentLocation = nextlocation;
    }

    this.moveBackwards = function moveBackwards() {
        var nextlocation = grid.getSpaceBehind(this.currentLocation, this.direction);
        this.currentLocation = nextlocation;
    }

    this.turnRight = function turnRight() {
        if (this.direction == "North")
            this.direction = "East";
        else if (this.direction == "East")
            this.direction = "South";
        else if (this.direction == "South")
            this.direction = "West";
        else
            this.direction = "North";
    }

    this.turnLeft = function turnLeft() {
        if (this.direction == "North")
            this.direction = "West";
        else if (this.direction == "West")
            this.direction = "South";
        else if (this.direction == "South")
            this.direction = "East";
        else this.direction = "North";
    }

    this.takeCommands = function takeCommands(command) {
        if (command == 37)
            this.turnLeft();
        else if (command == 38)
            this.moveForward();
        else if (command == 39)
            this.turnRight();
        else if (command == 40)
            this.moveBackwards();
    }
}