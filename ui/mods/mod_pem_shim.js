"use strict";

// tooltip_identifier.js
TooltipIdentifier.MenuScreen.NewCampaign.DefaultExploration = 'menu-screen.new-campaign.DefaultExploration';
TooltipIdentifier.MenuScreen.NewCampaign.PartialExploration = 'menu-screen.new-campaign.PartialExploration';
TooltipIdentifier.MenuScreen.NewCampaign.UnexploredExploration = 'menu-screen.new-campaign.UnexploredExploration';

// new_campaign_menu_module.js
NewCampaignMenuModule.prototype.mDefaultExplorationCheckbox = null;
NewCampaignMenuModule.prototype.mDefaultExplorationLabel = null;
NewCampaignMenuModule.prototype.mPartialExplorationCheckbox = null;
NewCampaignMenuModule.prototype.mPartialExplorationLabel = null;
NewCampaignMenuModule.prototype.mUnexploredExplorationCheckbox = null;
NewCampaignMenuModule.prototype.mUnexploredExplorationLabel = null;
NewCampaignMenuModule.prototype.mExplorationDifficulty = 0;

var originalCollectSettingsPEM = NewCampaignMenuModule.prototype.collectSettings;
NewCampaignMenuModule.prototype.collectSettings = function() {

    var settings = originalCollectSettingsPEM.call(this);

    // This is read in (in squirrel) in new_campaign_menu_module
    settings.explorationDifficultyExtra = this.mExplorationDifficulty;

    return settings;
}

var originalShowPEM = NewCampaignMenuModule.prototype.show;
NewCampaignMenuModule.prototype.show = function() {
    var panel = this.mDifficultySelectionPanel;

    // Hack to avoid polluting UI on subsquent .show() calls
    if (panel.find("#exploration-difficulty-row").length > 0) {
        return originalShowPEM.call(this);
    }

    // Add Exploration Difficulty UI
    var ironmanRow = panel.find('#cb-iron-man').parent().parent().parent();
    var row = $('<div class="row" id="exploration-difficulty-row" />');
    ironmanRow.before(row);
    var title = $('<div class="title title-font-big font-color-title">Starting Exploration</div>');
    row.append(title);

    var defaultExplorationControl = $('<div class="control"></div>');
    row.append(defaultExplorationControl);
    this.mDefaultExplorationCheckbox = $('<input type="radio" id="cb-exploration-default" name="exploration-difficulty" checked />');
    defaultExplorationControl.append(this.mDefaultExplorationCheckbox);
    this.mDefaultExplorationLabel = $('<label class="text-font-normal font-color-subtitle" for="cb-exploration-default">Explored Map</label>');
    defaultExplorationControl.append(this.mDefaultExplorationLabel);
    this.mDefaultExplorationCheckbox.iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange',
        increaseArea: '30%'
    });
    this.mDefaultExplorationCheckbox.on('ifChecked', null, this, function (_event)
    {
        var self = _event.data;
        self.mExplorationDifficulty = 0;
    });

    var partialExplorationControl = $('<div class="control"></div>');
    row.append(partialExplorationControl);
    this.mPartialExplorationCheckbox = $('<input type="radio" id="cb-exploration-partial" name="exploration-difficulty" />');
    partialExplorationControl.append(this.mPartialExplorationCheckbox);
    this.mPartialExplorationLabel = $('<label class="text-font-normal font-color-subtitle" for="cb-exploration-partial">Partially Explored Map</label>');
    partialExplorationControl.append(this.mPartialExplorationLabel);
    this.mPartialExplorationCheckbox.iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange',
        increaseArea: '30%'
    });
    this.mPartialExplorationCheckbox.on('ifChecked', null, this, function (_event)
    {
        var self = _event.data;
        self.mExplorationDifficulty = 1;
    });

    var unexploredExplorationControl = $('<div class="control"></div>');
    row.append(unexploredExplorationControl);
    this.mUnexploredExplorationCheckbox = $('<input type="radio" id="cb-exploration-unexplored" name="exploration-difficulty" />');
    unexploredExplorationControl.append(this.mUnexploredExplorationCheckbox);
    this.mUnexploredExplorationLabel = $('<label class="text-font-normal font-color-subtitle" for="cb-exploration-unexplored">Unexplored</label>');
    unexploredExplorationControl.append(this.mUnexploredExplorationLabel);
    this.mUnexploredExplorationCheckbox.iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange',
        increaseArea: '30%'
    });
    this.mUnexploredExplorationCheckbox.on('ifChecked', null, this, function (_event)
    {
        var self = _event.data;
        self.mExplorationDifficulty = 2;
    });

    // Bind tooltips, since bindTooltips is unhookable, just like createDIV
    this.mDefaultExplorationLabel.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.DefaultExploration });
    this.mDefaultExplorationCheckbox.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.DefaultExploration });

    this.mPartialExplorationLabel.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.PartialExploration });
    this.mPartialExplorationCheckbox.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.PartialExploration });

    this.mUnexploredExplorationLabel.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.UnexploredExploration });
    this.mUnexploredExplorationCheckbox.bindTooltip({ contentType: 'ui-element', elementId: TooltipIdentifier.MenuScreen.NewCampaign.UnexploredExploration });

    // Hide original Unexplored Mode control
    var explorationControl = panel.find('#cb-exploration').parent().parent();
    explorationControl.addClass('display-none');

    originalShowPEM.call(this);
}

var originalDestroyDIVPEM = NewCampaignMenuModule.prototype.destroyDIV;
NewCampaignMenuModule.prototype.destroyDIV = function() {
    if (this.mDefaultExplorationLabel != null) {
        this.mDefaultExplorationCheckbox.remove();
        this.mDefaultExplorationCheckbox = null;
        this.mDefaultExplorationLabel.remove();
        this.mDefaultExplorationLabel = null;
    }

    if (this.mPartialExplorationLabel != null) {
        this.mPartialExplorationCheckbox.remove();
        this.mPartialExplorationCheckbox = null;
        this.mPartialExplorationLabel.remove();
        this.mPartialExplorationLabel = null;
    }

    if (this.mUnexploredExplorationLabel != null) {
        this.mUnexploredExplorationCheckbox.remove();
        this.mUnexploredExplorationCheckbox = null;
        this.mUnexploredExplorationLabel.remove();
        this.mUnexploredExplorationLabel = null;
    }

    originalDestroyDIVPEM.call(this);
};

var originalUnbindTooltipsPEM = NewCampaignMenuModule.prototype.unbindTooltips;
NewCampaignMenuModule.prototype.unbindTooltips = function () {
    originalUnbindTooltipsPEM.call(this);

    if (this.mDefaultExplorationLabel != null) {
        this.mDefaultExplorationLabel.unbindTooltip();
        this.mDefaultExplorationCheckbox.unbindTooltip();
    }

    if (this.mPartialExplorationLabel != null) {
        this.mPartialExplorationLabel.unbindTooltip();
        this.mPartialExplorationCheckbox.unbindTooltip();
    }

    if (this.mUnexploredExplorationLabel != null) {
        this.mUnexploredExplorationLabel.unbindTooltip();
        this.mUnexploredExplorationCheckbox.unbindTooltip();
    }
}
