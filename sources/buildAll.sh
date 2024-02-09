#!/bin/bash
HERE=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

while IFS= read -r -d $'\0' dir; do
    dir_base=$(basename "$dir")
    if [[ "$dir_base" != "assets" && "$dir_base" != "base-template" && "$dir_base" != "." && "$dir_base" != "sources" ]]; then
        echo "Building $dir_base"
        (cd "$dir" && npm ci && npm run build && npm run export)
    fi
done < <(find $HERE -maxdepth 1 -type d -print0)
