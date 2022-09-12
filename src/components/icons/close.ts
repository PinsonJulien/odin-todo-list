import Icon, { FontVariationSettings } from "./icon";

export default class Close extends Icon {
  constructor (
    fontVariationSettings?: FontVariationSettings
  ) {
    super('close', fontVariationSettings);
  }
}