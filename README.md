# brain.dump

Dump the thoughts you think you don't need anymore.

## Installation & Usage

### Installation

* Clone or download the repo.

### Usage

Run `bash _scripts/<script name>.sh` to run or close docker containers.
* `up.sh` - starts api and db containers and opens service on localhost:3000
* `down.sh` - closes the containers
* `teardown.sh` - closes the containers and completely removes volumes (required if migration files are changed)
* `mongo.sh` - attach a mongo shell to the container

## Technologies

* JavaScript
* Express
* Cors
* Pug
* MongoDB

## Process
* Setup up docker compose with API and DB services
* Setup up basic server structure
* Connected server to DB
* Added basic GET route and designed Post model
* Seeded database with test posts
* Worked on confirming GET route worked, added POST route
* Began using unique path as Post identifier to use human readable urls
* Added views using Pug to deliver post form at `/` and post at `/<unique post url>`
* Styled site

## Bugs

* Generated URL contains extra characters (for safe unicode or something?)
* Let us know!

## TODO

