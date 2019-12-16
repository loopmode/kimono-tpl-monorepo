#!/bin/sh

help="Usage: create-package.sh <new_package_name> [target_workspace_name=packages]"

scripts_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
root_dir="$scripts_dir/.."

new_package_name=${1}
target_workspace_name=${2:-"packages"}

if [ -z "$new_package_name" ]; then
    echo "Missing: package name"
    echo $help
    exit 1;
fi
if [ ! -d "$root_dir/$target_workspace_name" ]; then
    echo "No such workspace: $target_workspace_name"
    echo $help
    exit 1;
fi

yarn create @kimono/package \
  $new_package_name \
  --scope <%= packageScope %> \
  --tpl $root_dir/templates/package \
  --dest $root_dir/$target_workspace_name \
  --symlink $root_dir/node_modules \
  --skip-install \
  --yes
