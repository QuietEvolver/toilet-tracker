export default class Map1Service{
  static async getMap1() {//city
    try {
      const response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAP1_API_KEY}&center=Boston,MA&size=@2x`);
      const jsonApiReponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonApiReponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonApiReponse;
    } catch(error){
      return error;
    }
  }
}
