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
# mysql -h 127.0.0.1 -P 3306 -u root

# docker ps -a | grep jwt-mysql
# docker volume ls
# docker volume prune -f
# rm -rf ./mysql_data_local
# https://stackoverflow.com/questions/59838692/mysql-root-password-is-set-but-getting-access-denied-for-user-rootlocalhost

# SELECT Host, User FROM mysql.user;

# jdbc:mysql://127.0.0.1:3306/jwt?allowPublicKeyRetrieval=true&useSSL=false

# ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'your_root_password';
# GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
# FLUSH PRIVILEGES;

# CREATE USER 'app_user'@'%' IDENTIFIED WITH mysql_native_password BY 'app_password';
# GRANT ALL PRIVILEGES ON jwt.* TO 'app_user'@'%';
# FLUSH PRIVILEGES;

# SELECT user, host, plugin FROM mysql.user;
# mysql> SELECT user, host, plugin FROM mysql.user;
# +------------------+-----------+-----------------------+
# | user             | host      | plugin                |
# +------------------+-----------+-----------------------+
# | root             | %         | caching_sha2_password |
# | your_username    | %         | caching_sha2_password |
# | mysql.infoschema | localhost | caching_sha2_password |
# | mysql.session    | localhost | caching_sha2_password |
# | mysql.sys        | localhost | caching_sha2_password |
# | root             | localhost | caching_sha2_password |
# +------------------+-----------+-----------------------+