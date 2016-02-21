Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :episodes, only: [:create]
    resources :shows, except: [:destroy, :new]
    resources :s3_policies, only: [:new]
  end
end
