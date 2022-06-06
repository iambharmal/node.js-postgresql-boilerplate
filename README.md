# node.js-postgresql-boilerplate
Ready to go Node.js + PostgreSQL Rest API project with JWT auth

## STEPS TO START THE PROJECT

1. Take Pull of repo.
2. Change project-repo name in packeg.json file (Optional)
3. Run "npm install" command in root path.
4. Generate Access token and Refresh token. (Steps shown below) || You can also use any random string for access_token and refresh_token.
5. Run "npm run dev" command.

## How to generate access token:
1. Open terminal
2. Run node
3. Run require('crypto').randomBytes(64).toString('hex')
4. Run the above command two times
5. Use first result as "access_token_secret" and second as "refresh_token"

Contact mb.prodeveloper@gmail.com if you have any queries.