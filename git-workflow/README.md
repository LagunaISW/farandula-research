# Git workflow

The repository consists of two main branches:

- Master
- Develop

Every feature branches/merges from/to develop and every time the development
code is ready for a release, it gets merged with master.

## How to develop a new feature

Branch from develop and work in your feature, when you're done make a pull
request from your feature branch into develop and assign the request to another
developer for code review. After the code gets approved you merge the pull
request and delete the branch.

## Working with git-flow

Using the commands:

- `git flow feature start <feature name>`
- `git flow feature publish <feature name>`
- `git flow feature finish -k <feature name>`
