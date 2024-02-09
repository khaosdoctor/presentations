#!/bin/bash

# Runs when there's an install or prepare script

if [ -f ".template-ready" ]; then
  echo "Template already prepared no need to run again"
  exit 0
fi

# Updates package JSON scripts with the correct name for the talk

THIS_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)
TALK_NAME=$(basename $THIS_DIR)
PLACEHOLDER='{{talkName}}'

echo "Updating package.json scripts with talk name: $TALK_NAME"
sed -i '' "s/$PLACEHOLDER/$TALK_NAME/g" package.json
sed -i '' "s/$PLACEHOLDER/$TALK_NAME/g" slides.md

# Create a .template-ready file to indicate that the template has been prepared
echo "DO NOT DELETE" > .template-ready
