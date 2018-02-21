# It's Sharkle!

## What does this app do?

![Hey!](https://github.com/ImStuartJones/its-sharkle/raw/master/images/screenshot.png)

It's Sharkle!

## No really, what does it do?

It's Sharkle is a small Mac applet that puts the Sharkle desktop toy from the indie game Night in the Woods on your desktop. If your click it, he says Hey~! You can also drag Shakle around and put him wherever you'd like.

## Can it do anything else?

If you go to the boat icon on your taskbar, you can quit the app, invert Shakle's colors, or make him face the other direction.

## Where can I download it?

Right here! The /dist folder has a zipped version of the [Mac executable](https://github.com/ImStuartJones/its-sharkle/blob/master/dist/its-sharkle.app.zip). Unzip it and drop it in your applications folder, and you should be good to go. Depending on your Mac's security settings, you may need to right click the app and select "Open" the first time you run it.

## Why is this app so large?

I'm a web developer, not a desktop app developer. Shakle's written in a large framework called Electron, which needs to be included in your app distribution.

## How do I build Shakle myself?

`npm install` and `npm start`. Shakle needs Electron 1.8.2.

## Where's the Windows version?

Unfortunately there's some strangeness around Electron and transparent frameless windows on Windows. If you get it working, feel free to let me know.