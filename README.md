# RockTheCode-proyecto6

An issue tracker for Neighbours.

## The problem

Within blocks of flats there are always a group of volunteers that like to look after the building and other neighbors.

The problem is that the historical issues are lost between neighbours and some other neighbours might want to pickup where a previous neighbour picked up.

## The proposed solution: Issue tracker

A neighbour raises an issue and describes it.

authour: string
Description: string
ref flat Optional
ref issueUpdate optional

As hinted above The issue has a flat location.

number : int
court : string

Another neighbour might want to update an existing issue.

authour: string
descrition: string

## Reach goal

Give a list of the issues attached to a particular flat.

# Install process

There are several ways to do it, feel free to explore your own but these are the test enviorments.
this is a Node.js programme that connects to an external database.
At the time of writing it expects a MongoDB atlas account which will be connected via a .env file that should be excluded following the gitignore file:

```
DB_URL=mongodb+srv://<user name>:<password>@<cluster nameID>.mongodb.net/?retryWrites=true&w=majority&appName=<cluster Name>
```

## gnu/Linux Ubuntu

1. Install [VSCodium](https://github.com/VSCodium/vscodium?tab=readme-ov-file)
2. Install NVM and then Node.jsnvm

install [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
install [node](https://nodejs.org/en/download/package-manager)

2. Check the Package.json dependencies and install the dependencies with the following commands on the root install folder

```
npm -y init
```

```
npm i express
```
