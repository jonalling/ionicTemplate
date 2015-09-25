# Building your app
#### Ionic CLI

Navigate to your Ionic installation directory

```sh
$ cd ionic
```

Run starter app loader. I use the TABS starter because it is organized the nicest and had the most example code to learn from. I usually end up removing a lot though, but until there are better starter apps I think it's the best option.

```sh
$ ionic start [yourAppName] tabs
```

Navigate to your app directory

```sh
$ cd yourAppName
```

Add platform code from Ionic

```sh
$ ionic platform add ios
**and/or**
$ ionic platform add android
```

If you are using a cordova plugin, install ngCordova

```sh
$ bower install ngCordova
```

And then add any plugins (http://ngcordova.com/docs/plugins/)

```sh
$ cordova plugin add cordova-plugin-device-motion
**also always good to add**
$ cordova plugin add org.apache.cordova.statusbar
```

If you have other dependencies you want to add (i.e. d3.js), do that next. 

```sh
$ bower install d3 --save
```

This is the point I usually build the project and test it by running in xCode.

```sh
$ ionic build ios
```
# Prepare Index.html

For cordova plugins add reference to ng-cordova.js, above default cordova.js line

```sh
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Add reference to other dependencies below default cordova.js line

```sh
<!-- charts -->
<script src="lib/d3/d3.js"></script>
```

# Copy code from this repository
#### /onePage_deviceMotion_d3/

This single page app (with a settings page allotted for in UI-Router) includes deviceMotion and d3 integration.

#### /onePage_blank/

This single page app only has place holders for templates and controllers and includes no integrations.
