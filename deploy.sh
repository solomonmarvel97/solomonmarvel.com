#! /bin/bash
npm run generate && 

git add . && 

git commit -m "$1" && 

git push