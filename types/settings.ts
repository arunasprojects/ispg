export type LanguageType = {
  name: string;
  code: string;
};

export interface SettingsResponse {
  languages: LanguageType[];
}
