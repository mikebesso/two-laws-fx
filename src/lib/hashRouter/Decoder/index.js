import uniloc from "./uniloc";

export default class Decoder {

    static routes = null;
    static aliases = null;
    static decoder = null;

    constructor(routes, aliases){

        Decoder.routes = routes;
        Decoder.aliases = aliases;
        
        Decoder.decoder = uniloc(routes, aliases);
      
      }    

      static LookupURI = (uri, method) => Decoder.decoder.lookupURI(uri, method);
      LookupURI = Decoder.LookupURI;
    
      static MakeURI = (name, options) => Decoder.decoder.makeURI(name, options);  
      MakeURI = Decoder.MakeURI;
      


      static BuildHREF = (name, options) => {
        var newURI = Decoder.MakeURI(name, options);
        return(window.location.pathname + window.location.search + '#' + newURI);
      }
      
      BuildHREF = Decoder.BuildHREF;
}