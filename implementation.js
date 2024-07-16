var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

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
