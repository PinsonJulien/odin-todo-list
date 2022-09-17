export default abstract class HashPath {
  public static get(withSharp: boolean = false) {
    const hash = window.location.hash;
    if (withSharp) return hash;

    return hash.replace('#', "")
  }

  public static change(path: string) {
    window.location.hash = path;
  }
}