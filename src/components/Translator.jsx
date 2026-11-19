
import { pipeline } from "@huggingface/transformers";

let translator = null;
let translatorPromise = null;

async function getTranslator() {
  if (translator) return translator;

  if (!translatorPromise) {
    translatorPromise = pipeline(
      "translation",
      "Xenova/nllb-200-distilled-600M"
    );
  }

  try {
    translator = await translatorPromise;
    return translator;
  } catch (error) {
    translatorPromise = null;
    throw error;
  }
}

export async function translateText(text, direction) {
  const model = await getTranslator();

  const source = direction === "EN_TO_TE"
    ? "eng_Latn"
    : "tel_Telu";

  const target = direction === "EN_TO_TE"
    ? "tel_Telu"
    : "eng_Latn";

  const result = await model(text, {
    src_lang: source,
    tgt_lang: target
  });

  return result[0].translation_text;
}
