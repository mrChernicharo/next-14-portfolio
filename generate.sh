#!/bin/bash

if [ $# -lt 1 ] || [ $# -gt 2 ]; then
  echo "Usage: $0 <arg> [path]"
  exit 1
fi

arg="$1"
# Convert the kebab-case argument to PascalCase without spaces
pascal_case_arg=$(echo "$arg" | awk -F'-' '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1' | tr -d ' ')

# Determine the filename and path
filename="${arg}.jsx"
if [ $# -eq 2 ]; then
  path="$2"
  if [ ! -d "$path" ]; then
    mkdir -p "$path"
  fi
  filename="${path}/${filename}"
fi

cat <<EOF >"$filename"
export function $pascal_case_arg(props) {
    const {} = props;

    return <div></div>;
}
EOF

echo "Script executed successfully. Created file: $filename"
