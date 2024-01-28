var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

var devToolsButtonApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      devToolsButtonApi: {
        async devToolsButton() {
          let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
          if (recentWindow) {
            recentWindow.BrowserToolboxLauncher.init();
          }
        },
      },
    };
  }
};
