1. There are a lot of packages in dependencies that look like front end libs - put all front end libs in devDependencies
1. `npm run lint` didn't work for me (client/api.js:36) - make sure it's running and you've got consistent code
1. quite a lot of files aren't tested - run `npm run test -- --coverage`
1. put all db files in one spot (i.e. db.js into the Db folder)
1. quite significant security holes in the auth router - only let a user access or change their own data 
1. 