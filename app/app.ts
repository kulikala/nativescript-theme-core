﻿import * as application from 'tns-core-modules/application';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import { isActive } from './sidedrawer/sidedrawer';
require("nativescript-dom");
var frameCommon = require("tns-core-modules/ui/frame/frame-common");

if (!frameCommon.FrameBase.prototype.eachChild) {
  frameCommon.FrameBase.prototype.eachChild =
      frameCommon.FrameBase.prototype.eachChildView;
}

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': 'font-awesome.css'
};
TNSFontIcon.loadCss();

const resources = application.getResources();
resources['fonticon'] = fonticon;
resources['isActive'] = isActive;
application.setResources(resources);

var themes = require('nativescript-themes');
themes.applyTheme(themes.getAppliedTheme('light.css'));

application.run({ moduleName: "app-root" });
