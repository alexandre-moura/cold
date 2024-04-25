#!/bin/bash
set -e

echo "Cleaning Derived Data..."
rm -rf ~/Library/Developer/Xcode/DerivedData

echo "Removing node_modules..."
rm -rf node_modules

echo "Reinstalling npm dependencies..."
npm install

echo "Navigating to iOS directory..."
cd ios

echo "Deintegrating CocoaPods"
pod deintegrate

echo "Removing existing Pods and Podfile.lock..."
rm -rf Pods Podfile.lock

echo "Reinstalling Pods..."
pod install

echo "Returning to project root..."
cd ..

echo "Cleaning complete. Pods reinstalled."
