module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "parserOptions": {
    "sourceType": 'script',
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "rules": {
    "no-param-reassign": [ "error", { "props": false } ]
  },
  "env": {
    "browser": true,
    "jquery": true,
  },
  "globals": {
    "swal": false,
    "agGrid": false,
    "Konva": false,
    "crossbeamsUtils": false,
    "crossbeamsLocalStorage": false
  }
};