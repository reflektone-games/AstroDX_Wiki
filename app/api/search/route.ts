import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { createTokenizer } from "@orama/tokenizers/mandarin";

export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    cn: generateDefaultLocaleOptions(),
    tw: generateDefaultLocaleOptions(),
    jp: generateDefaultLocaleOptions(),
    vn: generateDefaultLocaleOptions(),
    en: "english",
    es: "spanish",
  },
});

function generateDefaultLocaleOptions() {
  return {
    components: {
      tokenizer: createTokenizer(),
    },
    search: {
      threshold: 0,
      tolerance: 0,
    },
  };
}
