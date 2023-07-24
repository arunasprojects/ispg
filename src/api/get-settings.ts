export const getBaseSettings = async () => {
  try {
    const data = await import("./../config/base-settings.json");
    return {
      languages: data.languages,
    };
  } catch (error) {
    console.error("Error fetching base settings:", error);
    return null;
  }
};
