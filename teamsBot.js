const { TeamsActivityHandler } = require("botbuilder");
const { SupplierME } = require("./messageExtensions/supplierME");

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
  }

  // Message extension Code
  // Search.
  async handleTeamsMessagingExtensionQuery(context, query) {

    const queryName = query.parameters[0].name;
    const searchQuery = query.parameters[0].value;

    switch (queryName) {
      case "supplierME":  // Search for suppliers
        return await SupplierME.handleTeamsMessagingExtensionQuery(context, searchQuery);
      default:
        return null;
    }
  }

  async handleTeamsMessagingExtensionSelectItem(context, item) {

    switch (item.queryType) {
      case "supplierME":  // Search for suppliers
        return SupplierME.handleTeamsMessagingExtensionSelectItem(context, item);
      default:
        return null;
    }
  }
}

module.exports.TeamsBot = TeamsBot;
