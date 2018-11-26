#!/bin/bash

echo "Copying app.js..."
cp -rfv app.js ../picrossDeploy/

echo "Copying routes..."
cp -rfv ./routes/* ../picrossDeploy/routes/

echo "Copying views..."
cp -rfv ./views/* ../picrossDeploy/views/

echo "Copying models..."
cp -rfv ./models/* ../picrossDeploy/models/

echo "Copying public..."
cp -rfv ./public/* ../picrossDeploy/public/

echo "Copying config..."
cp -rfv ./config/* ../picrossDeploy/config/

echo "Copying bin..."
cp -rfv ./bin/* ../picrossDeploy/bin/
