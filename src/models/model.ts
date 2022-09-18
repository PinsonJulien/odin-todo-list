export default abstract class Model {

    // Fetch data
    public static get(): any[] {
      return [];
    };
  
    // Insert data
    public static post(value: any): any {
      return;
    };
    
    // Update data
    public static put(target: any, updated: any): any {
      return;
    };
  
    // Delete data
    public static delete(target: any): any {
      return;
    }

    // Helpers
    public abstract getRawObject(): Object;
}