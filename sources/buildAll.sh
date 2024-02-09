#!/bin/bash

while IFS= read -r -d $'\0' dir; do
    dir_base=$(basename "$dir")
    if [[ "$dir_base" != "assets" && "$dir_base" != "base-template" && "$dir_base" != "." ]]; then
        echo "Building $dir_base"
        (cd "$dir" && npm ci && npm run build && npm run export)
    fi
done < <(find . -maxdepth 1 -type d -print0)
