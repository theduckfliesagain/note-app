# brain.dump

Dump the thoughts you think you don't need anymore.

## Installation & Usage

### Installation

* Clone or download the repo.

### Usage

Run `bash _scripts/<script name>.sh` to run or close docker containers.
* `up.sh` - starts service on localhost:3000
* `down.sh` - closes the containers and completely removes volumes (required if migration files are changed)
* `mongo.sh` - attach a mongo shell to the container

## Technologies

* JavaScript
* Express
* Cors
* MongoDB

## Bugs

* Generated URL contains extra characters (for safe unicode or something?)
* Let us know!
