# RockTheCode-proyecto6

An issue tracker for Neighbours.

## The problem

Within blocks of flats there are always a group of volunteers that like to look after the building and other neighbors.

The problem is that the historical issues are lost between neighbours and some other neighbours might want to pickup where a previous neighbour picked up.

## The proposed solution: Issue tracker

A neighbour raises an issue and describes it.

person: string
Description: string
ref flat Optional
ref issueUpdate optional

As hinted above The issue has a flat location.

number : int
court : string

Another neighbour might want to update an existing issue.

Person: string
description: string

## Reach goal

Give a list of the issues attached to a particular court.

# Example use

1. Create a flat

```
{
  "number":10,
  "court": "Byron"
}
```

Record the \_id for this flat for example

```
66d70bcccf5d3354794c4b13
```

2. Create an issue with the optional field of the flat address:

```
{
    "person": "Stephen",
    "description": "I have Damp going up the wall",
    "flat": "66d70bcccf5d3354794c4b13"
}
```

3. View all the issues:

```
http://localhost:3000/api/v1/issues
```

4. View all issues from a particular flat:

```
http://localhost:3000/api/v1/issues
```

# Install process

Clone this repo into your working folder.

There are several ways to do it, feel free to explore your own but these are the test enviorments.
this is a Node.js programme that connects to an external database.
At the time of writing it expects a MongoDB atlas account which will be connected via a .env file that should be excluded following the gitignore file:

```
DB_URL=mongodb+srv://<user name>:<password>@<cluster nameID>.mongodb.net/?retryWrites=true&w=majority&appName=<cluster Name>
```

## gnu/Linux Ubuntu

1. Install [VSCodium](https://github.com/VSCodium/vscodium?tab=readme-ov-file)
2. Install NVM and then Node.jsnvm

   - install [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
   - install [node](https://nodejs.org/en/download/package-manager)

3. Check the Package.json dependencies and install the dependencies with the following commands on the root install folder
   To start:

```
npm -y init
```

To install express library:

```
npm i express
```

This is only to help with your development:

```
npm i nodeomon -D
```

To access the mentioned .env you will need this:

This is only to help with your development:

```
npm i dotenv
```

To make it easier to use mongo DB:

```
npm i mongoose
```
