#!/bin/bash
# Combined Development Commands Script

# --- GIT COMMANDS ---
# These commands are used for managing version control history and remote pushing.

# 1. UNDO LAST COMMIT (Soft Reset)
# Undoes the last commit but keeps the changes staged, allowing you to rewrite the commit.
# NOTE: Only run after you have at least one commit in history.
# git reset --soft HEAD~1

# 2. UNSTAGED CHANGES (Move files from Staged to Unstaged)
# Resets the staging area for specific files (or all files, using '.') back to HEAD's version.
# git reset HEAD your_file.js
# git reset HEAD .

# 3. SET UP REMOTE AND PUSH INITIAL BRANCH (Replace 'main' with 'master' if needed)
# Adds the remote origin and pushes the local 'main' branch to the remote, setting up tracking.
# NOTE: Use 'main' unless your repository uses the older 'master' branch name.
# git remote add origin git@github.com:hoangquybest/node-react-jwt.git
# git push -u origin main
# To check remote: git remote -v


# --- DOCKER COMPOSE COMMANDS ---
# These commands manage the full lifecycle of your MySQL database container.
# Requires 'docker-compose.yml' and 'init.sql' to be present in the root directory.

# 4. START THE DATABASE CONTAINER
# Builds (if necessary) and starts the 'db' service in detached mode (-d).
docker compose up -d

# 5. STOP AND REMOVE THE DATABASE CONTAINER & NETWORK
# Stops the container and removes it along with the network.
# NOTE: Use this to cleanly shut down the environment.
# docker compose down

# 6. STOP AND REMOVE CONTAINER, NETWORK, AND VOLUMES (DELETE SAVED DATA)
# Stops and removes everything, including the persisted data volume (mysql_data).
# Use this only if you want to completely clear the database data.
# docker compose down -v

# 7. RUN NODE.JS APPLICATION IN DEVELOPMENT MODE (Assuming 'start' script exists in package.json)
# Uses nodemon and babel-node to run the server, restarting on code changes.
# npm run start

# 8. Access database using cli 
# docker exec -it jwt-mysql mysql -u root -p