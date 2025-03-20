::mods_hookExactClass("ui/screens/menu/modules/new_campaign_menu_module", function(ncmm) {
	local parseSettingsFromJS = ::mods_getMember(ncmm, "parseSettingsFromJS");

	::mods_override(ncmm, "parseSettingsFromJS", function(_settings) {
		local settings = parseSettingsFromJS(_settings);

		settings.ExplorationDifficulty <- _settings.explorationDifficultyExtra;

		if (settings.ExplorationDifficulty == 2)
			settings.ExplorationMode = true;

		return settings;
	});
});
