import { Setting } from "obsidian";
import { SettingsTab } from "../SettingsTab";

export default (tab: SettingsTab, containerEl: HTMLElement) => {
    containerEl.createEl('h3', { text: 'LaTeX Settings' });
    new Setting(containerEl)
        .setName('Embed LaTeX documents into notes')
        .addToggle(toggle => toggle
            .setValue(tab.plugin.settings.latexEmbedDocs)
            .onChange(async (value) => {
                tab.plugin.settings.latexEmbedDocs = value;
                console.log(value ? 'Embedding LaTeX documents into notes.' : "Not embedding LaTeX documents into notes.");
                await tab.plugin.saveSettings();
            }));
    new Setting(containerEl)
        .setName('LaTeX Engine')
        .setDesc('The path to your LaTeX typesetting engine. This engine support pdf output e.g. pdflatex, lualatex, xelatex')
        .addText(text => text
            .setValue(tab.plugin.settings.latexPath)
            .onChange(async (value) => {
                const sanitized = tab.sanitizePath(value);
                tab.plugin.settings.latexPath = sanitized;
                console.log('LaTeX path set to: ' + sanitized);
                await tab.plugin.saveSettings();
            }));
    new Setting(containerEl)
        .setName('LaTeX arguments')
        .addText(text => text
            .setValue(tab.plugin.settings.latexArgs)
            .onChange(async (value) => {
                tab.plugin.settings.latexArgs = value;
                console.log('LaTeX args set to: ' + value);
                await tab.plugin.saveSettings();
            }));
    tab.makeInjectSetting(containerEl, "latex");
}