# wab-timer-widget

## Description

A simple off-panel widget that shows the following map performance stats:

* Last map zoom time
* Last map update time
* Average of last x (configurable) map zoom times
* Average of last x (configurable) map update times

## Quick Start

Copy the widget from the dist folder to the stemapp/widgets folder of your to your local Web AppBuilder Developer Edition. You will need to manually configure the widget in config.json to set it up as an off panel widget. The config will be similar to the Coordinate or Scalebar widgets.


## Development Setup

Widget uses TypeScript and Grunt to copy files to your local Web AppBuilder Developer Edition so you can use your custom widgets in the builder interface. 

1. Update the file paths at the beginning (line ~10) of `Gruntfile.js` to point to your running Web AppBuilder instance.
1. Install Node.js.
2. `npm install -g grunt-cli` (see https://gruntjs.com/getting-started)
1. `npm install`
1. `grunt`




