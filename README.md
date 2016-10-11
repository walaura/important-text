# important-text
Makes text look 🌂 I M P O R T A N T 🦁

## Usage from cli

    $ npm install -g important-text
    $ important-text they targeted gamers
    💢 T H E Y   T A R G E T E D   G A M E R S 🍕

## Usage from macOS
(you do have a mac right? i mean of course you do, you are interested on an npm package)

After installing `important-text` as a global you can double click `extras/Importantize.workflow` to install a handy context menu item to make the selected text important (it's under services)

If you are feeling like this is something you really want to do often (why?) you can assign Importantize a keyboard shortcut on System Preferences, then forget about it forever in like an hour

## Usage as a node module

    const importantize = require('important-text');
    let manifesto = importantize('they targeted gamers');
