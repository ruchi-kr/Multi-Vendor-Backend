const { SystemSettings } = require("../../models");

const SystemSettingsDal = {
  GetSettings: async (query, params) => await SystemSettings.find(query).select(params),

  EditSettings: async (filter,update) => await SystemSettings.findOneAndUpdate(filter,update),
};

module.exports = SystemSettingsDal;
