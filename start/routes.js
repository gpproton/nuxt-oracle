'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');

/* Trucks Info API */
Route.group(() => {

    Route.get('/:id?', 'TruckInfoController.index');
    Route.post('/:id?', 'TruckInfoController.index');
    
}).prefix('api/v1/truckinfo');


/* All Nuxt page view */
Route.any('*', 'NuxtController.render');