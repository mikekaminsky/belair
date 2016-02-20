Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :shows, except: [:destroy, :new]
    resources :episodes, only: [:create]
  end
end
