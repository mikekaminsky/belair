# Bel Air

### Getting Involved:
If you want to contribute, check out the issues section on github.

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
    GOOGLE_CALENDAR_ID={your_google_calendar_id}
    LIVESTREAM_URL={your_voscast_id}
    S3_ACCESS_KEY={your_access_key}
    S3_ACCESS_SECRET={your_secret}
    S3_DIRECTORY={your_s3_directory}

And then you can run the app with:

    bundle
    rake db:migrate
    rails s

Navigate your browser to http://localhost:3000/#/






