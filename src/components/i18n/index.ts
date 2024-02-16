import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};
export const getI18N = (
  { currentLocale = "es" } :
  { currentLocale: string | undefined }
  ) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return spanish;
};
