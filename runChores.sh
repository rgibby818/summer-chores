#!/bin/bash

while true; do
  echo "Choose an option:"
  echo "1. Run callbackVersion.js"
  echo "2. Run promiseVersion.js"
  echo "3. Run asyncAwaitVersion.js"
  echo -e "4. Exit\n"

  read -p "Enter your choice (1, 2, 3, 4): " choice

  case $choice in
  1 | 2 | 3)
    read -p "Enter your name: " name
    if [ "$choice" -eq 1 ]; then
      echo "Running callbackVersion.js..."
      node callbackVersion.js "$name"
    elif [ "$choice" -eq 2 ]; then
      echo "Running promiseVersion.js..."
      node promiseVersion.js "$name"
    else
      echo "Running asyncAwaitVersion.js..."
      node asyncAwaitVersion.js "$name"
    fi
    break
    ;;
  4)
    echo "Goodbye!"
    exit 0
    ;;
  *)
    echo -e "\nInvalid choice. Please select 1, 2, or 3.\n"
    sleep 1
    ;;
  esac
done
