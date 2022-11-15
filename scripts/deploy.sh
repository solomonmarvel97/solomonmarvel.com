# simple commit script

git checkout -b staging
git push --set-upstream origin staging
git commit -am "$1"
git push
