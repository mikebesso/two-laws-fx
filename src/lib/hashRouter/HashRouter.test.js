
import HashRouter from "./HashRouter";
import hashRouterActions from "./actions/hashRouterActions"


var MockBrowser = require('mock-browser').mocks.MockBrowser,
mock = new MockBrowser();


var window = MockBrowser.createWindow();




// and in the run-code inside some object
//var doc = mock.getDocument(),
  //  div = doc.createElement('div'),
   // window = doc;




const routes =
    { 
        home: 'GET /',
      listContacts: 'GET /contacts',
      editContact: 'GET /contacts/:id',
    }

    

  describe(
      "HashRouter",
      () => {
        let hashRouter = null;

        beforeEach(
            () => {
                hashRouter = new HashRouter(routes)
            }
        )

        it(
            "LookupURI",
            () => {
                const x = hashRouter.LookupURI("/contacts/3");
                expect(x.name).toEqual("editContact");
                expect(x.options.id).toEqual("3");
            }
        )

        it(
            "MakeURI",
            () => {
                const x = hashRouter.MakeURI("editContact", {id:5});

                expect(x).toEqual("/contacts/5")
            }
        )

      
      }
  )