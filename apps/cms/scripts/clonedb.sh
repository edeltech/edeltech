#!/bin/bash

# Check we got all the required arguments
if [ "$#" -ne 1 ]; then
  echo "Error: REMOTE_DB_URL is required."
  echo "Example: ./scripts/clonedb.sh <REMOTE_DB_URL>"
  exit 1
fi

# Load the environment variables (to get DATABASE_NAME)
source .env

# Read the remote database url
REMOTE_DB_URL=$1

# Ask user if it's ok to delete the local database
read -p "Are you sure you want to replace the local database? (yes/no) " response

# Check the user's response
if [[ "$response" == "yes" ]]; then
	echo -e "\n🗑️ Deleting ${DATABASE_NAME}..."
  psql -d postgres -c "DROP DATABASE IF EXISTS \"${DATABASE_NAME}\" WITH (FORCE);"

  current_epoch=$(date +%s)
  filename="${DATABASE_NAME}-${current_epoch}.dump"
  echo -e "\n💾 Dumping database to '${filename}' (might take a few minutes)"
  pg_dump -Fc -v ${REMOTE_DB_URL} -f ${filename}

  # echo -e "\n❇️ Creating database \"${DATABASE_NAME}\""
 	# psql -d postgres -c "CREATE DATABASE \"${DATABASE_NAME}\""

 	# echo -e "\n🔁 Restoring database '${DATABASE_NAME}'"
 	# pg_restore --clean --verbose --no-acl --no-owner -d ${DATABASE_NAME} ${filename}

 	# echo -e "\n✅ Done. Cleaning up."
	# rm ${filename}
else
  echo "Ok, bye."
fi
