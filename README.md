# ionic4-ziggeo
demo ionic4 ziggeo integration

ionic start ionic-ziggeo sidemenu --angular

ionic g page VideoRecorder

ionic g page VideoPlayer

<p>Ensure the following base plugins have been installed:</p> 
<ul> 
<li><a href="https://github.com/apache/cordova-plugin-file-transfer">cordova-plugin-file</a></li> 
<li><a href="https://github.com/apache/cordova-plugin-media-capture">cordova-plugin-media-capture</a></li> 
<li><a href="https://github.com/apache/cordova-plugin-camera">cordova-plugin-camera</a></li> 
<li><a href="https://github.com/apache/cordova-plugin-whitelist">cordova-plugin-whitelist</a></li> 
<li><a href="https://github.com/NeoLSN/cordova-plugin-android-permissions">cordova-plugin-android-permissions</a></li> 
</ul> 
<p>Also make sure to grant the application access to storage, camera and microphone on the device.</p>

>add cordova plugins

ionic cordova plugin add cordova-plugin-file-transfer

ionic cordova plugin add cordova-plugin-media-capture

ionic cordova plugin add cordova-plugin-camera

ionic cordova plugin add cordova-plugin-whitelist

ionic cordova plugin add cordova-plugin-android-permissions


npm install --save cordova-plugin-file-transfer

npm install --save cordova-plugin-media-capture

npm install --save cordova-plugin-camera

npm install --save cordova-plugin-whitelist

npm install --save cordova-plugin-android-permissions



ionic cordova run android
