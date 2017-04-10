module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
     "env": {
            "browser": true,
            "node": true
    },
    "rules": {
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "prop=types": [0],
        "react/require-default-props": [0],
        "react/prop-types": [0], 
        "arrow-body-style": ["error", "as-needed"],
        "no-console": 0
    },
};