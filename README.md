# README for TBLWebView

This explains how to build a custom native library for TBLWebView.

To be able to run the final WebViewInstrumentation APK, you need to obtain a
dynamically linked build apk (shared library version) provided along with this
source code package. From provided sources you may build dynamic libraries
for the open source parts, and replace the ones from TBLWebView with them.

&nbsp; &nbsp; cd chromium/src <br>
&nbsp; &nbsp; gn args out/Release <br>

When the editor shows up, you need to add "is_component_build=true".

Then you can build your custom library. <br>
&nbsp; &nbsp; ninja -C out/Release <custom_lib>

The custom library can be exchanged with the one used in dynamically linked build.
