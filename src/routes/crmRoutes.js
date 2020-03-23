import {
  addNewContact,
  getContacts,
  getContactsWithId,
  updateContact,
  deleteContact
} from '../controllers/crmControllers';

const routes = app => {
  app
    .route('/contact')

    .get((req, res, next) => {
      //Middleware
      console.log('Request from: ${req.originalUrl}');
      console.log('Request type: ${req.method}');
      next();
    }, getContacts)

    //Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    //get  a specific contact
    .get(getContactsWithId)

    // MAJ specific contact
    .put(updateContact)

    //delete specific contact
    .delete(deleteContact);
};

export default routes;
