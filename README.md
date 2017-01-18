# html-to-amp-handlebars-template
> A template setup for your amp pages.


## Setup

- `npm install`
- `gulp`

## How it works

In the `_data` folder it will pickup the json file and create a global key value of that name so for example.

This is my current structure.

```
    /_data/index.json
    /_data/pageName.js
    /_pages/index.hbs
    /_pages/pageName/index.hbs
```

Panini will pass this data into each page.

```json
{ 
    "index": { 
        "header": { 
            "title": "Test Page" 
        }, 
        "test": "Hello World!"
    },
    "pageName": {

    },
    "page": "index.hbs",
    "layout": "default",
    "root": "" 
}
{ 
    "index": { 
        "header": { 
            "title": "Test Page" 
        }, 
        "test": "Hello World!"
    },
    "pageName": {

    },
    "page": "index.hbs",
    "layout": "default",
    "root": "../" 
}
```
