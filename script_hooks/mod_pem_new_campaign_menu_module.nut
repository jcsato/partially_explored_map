::mods_hookExactClass("ui/screens/menu/modules/new_campaign_menu_module", function(ncmm) {
	local onStartButtonPressed = ::mods_getMember(ncmm, "onStartButtonPressed");

	::mods_override(ncmm, "onStartButtonPressed", function(_settings) {
		local settings = {
			Name					= _settings[0]
			Banner					= _settings[1]
			Difficulty				= _settings[2]
			EconomicDifficulty		= _settings[3]
			BudgetDifficulty		= _settings[4]
			Ironman					= _settings[5]
			ExplorationMode			= _settings[6]
			GreaterEvil				= _settings[7]
			PermanentDestruction	= _settings[8]
			Seed					= _settings[9]
			StartingScenario		= _settings[10]
			ExplorationDifficulty	= _settings[11]
		}

		if (settings.ExplorationDifficulty == 2)
			settings.ExplorationMode = true;

		if (m.OnStartButtonPressedListener != null)
			m.OnStartButtonPressedListener(settings);
	});
});
