#!/bin/bash

while true; do
  echo "Choose an option:"
  echo "1. Run callbackVersion.js"
  echo "2. Run promiseVersion.js"
  echo -e "3. Exit\n"

  read -p "Enter your choice (1, 2, or 3): " choice

  case $choice in
    1|2)
      read -p "Enter your name: " name
      if [ "$choice" -eq 1 ]; then
        echo "Running callbackVersion.js..."
        node callbackVersion.js "$name"
      else
        echo "Running promiseVersion.js..."
        node promiseVersion.js "$name"
      fi
      break
      ;;
    3)
      echo "Goodbye!"
      exit 0
      ;;
    *)
      echo -e "\nInvalid choice. Please select 1, 2, or 3.\n"
      sleep 1
      ;;
  esac
done
