#! /bin/sh
mkdir temp_web

#if [ "$ROT_TOKEN" = "" ]; then
#  echo "Bye~"
#  exit 0
#fi

#release
if [ "$TRAVIS_TAG" ]; then
  # build site
  npm run deploy:build
  cd temp_web
  git clone -b gh-pages https://github.com/vue-materialize/materialize-vue.git && cd materialize-vue
  # build sub folder
  echo $TRAVIS_TAG
  export SUB_FOLDER=$(echo "$TRAVIS_TAG" | grep -o -E "\d+\.\d+")
  echo $SUB_FOLDER

  #SUB_FOLDER='0.1'
  mkdir $SUB_FOLDER
  rm -rf *.js *.css *.map static
  rm -rf $SUB_FOLDER
  cp -rf ../../document/mvui/** .
  cp -rf ../../document/mvui/** $SUB_FOLDER
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git puhs origin gh-pages
  cd ../..

  echo "DONE, Bye~"
  exit 0
fi