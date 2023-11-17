export enum Setting {
  Tiles = 'tiles',
  Justify = 'justify',
  Align = 'align',
  Direction = 'direction',
  Gap = 'gap',
  Wrap = 'wrap',
}

export interface SelectOption {
  label: string;
  value: string;
  default?: boolean;
}

export type SettingsOptions = {
  [key: string]: SelectOption[];
};

export const settingsOptions: SettingsOptions = {
  [Setting.Justify]: [
    { label: 'Start (default)', value: 'start', default: true },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Around', value: 'around' },
    { label: 'Between', value: 'between' },
  ],
  [Setting.Align]: [
    { label: 'Stretch (default)', value: 'stretch', default: true },
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'Baseline', value: 'baseline' },
    { label: 'End', value: 'end' },
  ],
  [Setting.Direction]: [
    { label: 'Row (default)', value: 'row', default: true },
    { label: 'Column', value: 'column' },
  ],
  [Setting.Gap]: [
    { label: 'Flush (default)', value: 'flush', default: true },
    { label: 'Extra-small', value: 'xs' },
    { label: 'Small', value: 'sl' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra-large', value: 'xl' },
  ],
  [Setting.Wrap]: [
    { label: 'Nowrap (default)', value: 'nowrap', default: true },
    { label: 'Wrap', value: 'wrap' },
  ],
};

export const defaultSettings = (() => {
  const defaultSettings = {
    [Setting.Tiles]: 5,
  };
  Object.entries(settingsOptions).forEach(([name, options]) => {
    const defaultOption: SelectOption = options.find((o) => o.default == true)!;
    defaultSettings[name] = defaultOption.value;
  });
  return defaultSettings;
})();
