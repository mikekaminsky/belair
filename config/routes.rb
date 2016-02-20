Rails.application.routes.draw do
  root 'application#home'

  resources :shows, only: [:create]
end
