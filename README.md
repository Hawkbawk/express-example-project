# Express Example Project

The following repository is a simple Express.js app, created to help myself,
Ryan Hawkins, learn Express, React, deployment to GCP, and just as a general
exercise in learning more about web development.

## Development

The project is designed to be run using Docker, as it makes use of a separate
PostgreSQL container for the database. With some minor tweaking you could likely
make it work locally using an SQLite database, but then you're kind of losing
out on all of the benefits of Docker. Docker also makes deployment and CI/CD
much easier. Eventually, I'll set up a Google Cloud Build trigger that runs all
tests and takes care of automatically deploying the app to App Engine.

To get started, make sure you have both Docker and docker-compose installed. See
the [Docker docs](https://docs.docker.com/get-docker/) if you need to install
it. Docker also has docs for installing
[docker-compose](https://docs.docker.com/compose/install/).

In addition, the project makes use of [Dory](https://github.com/FreedomBen/dory)
to act as a reverse proxy and make it easy to access the application. Follow the
directions in their README for installation. Dory is optional, but will make
developing Docker applications much easier.

Then, run the following commands:

```bash

# If you haven't started it already.
dory up

git clone https://github.com/Hawkbawk/express-example-project.git

cd express-example-project

docker-compose up -d

# If you're running macOS, use 'open' instead.
xdg-open http://express.docker
```

You should see the website's home page show up in your browser of choice!

## Debugging

The easiest way to debug the application is to use Visual Studio Code's
excellent
[Remote Containers](https://code.visualstudio.com/docs/remote/containers)
extension. This will open Visual Studio Code inside of the web container. Then,
you can just use the built in Visual Studio debugger to run the npm debug
script, and you'll be ready to go! Note that running this script does require
the
[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
extension, which is installed by default in the container.

## Configuring

For easy configuration, this project relies on a .env file. You can create a
good default one by running the following command:

```bash
echo "PORT=3000\nCOMPOSE_FILE=docker-compose.yml:docker-compose.override.yml" > .env
```

Feel free to add more environment variables as you wish. After all, they're
there to make your life easier.

For configuring the development container, you'll want to look at
[devcontainer.json](.devcontainer/devcontainer.json). There are plenty of
configuration options there, such as forwarding ports, installing different
extensions, adding additional Docker Compose files, etc. See the
[VSCode docs](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
for a complete reference list.

If you need to alter the configuration of containers or add new containers, you
should either modify the existing docker-compose.override.yml or add a new
docker-compose file.
