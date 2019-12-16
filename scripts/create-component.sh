#!/bin/sh

help="Usage: create-component.sh <target_package_name> <new_component_name> [target_workspace_name=packages]"

scripts_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
root_dir="$scripts_dir/.."

target_package_name=${1}
new_component_name=${2}
target_workspace_name=${3:-"packages"}


if [ -z "$target_package_name" ]; then
    echo "Missing: package name"
    echo $help
    exit 1;
fi
if [ -z "$new_component_name" ]; then
    echo "Missing: component name"
    echo $help
    exit 1;
fi
if [ ! -d "$root_dir/$target_workspace_name" ]; then
    echo "No such workspace: $target_workspace_name"
    echo $help
    exit 1;
fi
if [ ! -d "$root_dir/$target_workspace_name/$target_package_name" ]; then
    echo "No such package: $target_workspace_name/$target_package_name"
    echo $help
    exit 1;
fi


yarn create @kimono/package \
  $new_component_name \
  --tpl $root_dir/templates/component \
  --dest $root_dir/$target_workspace_name/$target_package_name/src \
  --scope <%= packageScope %> \
  --skip-install \
  --yes
