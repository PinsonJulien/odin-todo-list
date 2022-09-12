import Icon, { FontVariationSettings } from "./icon";

export default class Burger extends Icon {
  constructor (
    fontVariationSettings?: FontVariationSettings
  ) {
    super('menu', fontVariationSettings);
  }
}