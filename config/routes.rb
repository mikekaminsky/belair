Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :shows, except: [:destroy, :new]
  end
end
