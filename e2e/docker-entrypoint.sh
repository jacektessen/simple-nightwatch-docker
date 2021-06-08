#!/bin/sh

echo "Starting the e2e tests..."
./wait-for-grid.sh npm run nw

# echo "Waiting for localhost:4444 to start..."
# ./wait-for localhost:4444 