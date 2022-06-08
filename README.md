# Portfolio Website

A web portfolio of myself made by myself to showcase what I can do.

## Running

To run this project clone the repository and then `npm run devStart` in the project directory.
This will do two things. First it will transpile the server Typescript in `watch` mode and run (with Nodemon) the resulting Javascript as a proxy server on port 8000. Next it will start the React client on
port 3000 as normal. This way changes to the client and server will be reflected immediately.

## Deploying

I encountered some odd issues when deploying this app revolving around Typescript being recognized in
the build phase of the `server` folder. This prevented the app from compiling as the Typescript was a
dev dependency and was not recognized when being deployed. To prevent this I could either make Typescript
and its imported types regular dependencies in the server folder (slower load time) or rely on the user to
transpile the code ahead of time. I chose the latter, so be aware if for some reason you run into a similar
problem. I was unable to find a fix that kept the packages as dev dependencies and I am still working on
the issue.