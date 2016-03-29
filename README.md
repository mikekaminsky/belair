# Bel Air

### Getting Started:

Install the things:

    brew update
    brew doctor
    brew install postgres
    brew install rails
    brew install rbenv
    rbenv install 2.2.2
    postgres -D /usr/local/var/postgres
    touch .env

Here you'll need to add the following text to your .env file:

    ADMIN_USER={your_username}
    ADMIN_PASSWORD={your_password}
    S3_ACCESS_KEY={your_access_key}
    S3_ACCESS_SECRET={your_secret}
    S3_DIRECTORY={your_s3_directory}

And then you can run the app with:

    bundle
    rake db:migrate
    rails s

Navigate your browser to http://localhost:3000/#/

###ToDo:
  * [ ] Improve home index to only load the title and images rather than all of the episodes as well
  * [ ] Allow admins to edit/update episodes
  * [ ] Allow admins to delete shows and episodes
  * [ ] Add ability to add genres (metadata hstore thing?)
  * [ ] Add audio player (a la soundcloud?)





