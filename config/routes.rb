Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :episodes, only: [:create, :show, :update, :destroy]
    resources :shows, except: [:new]
    resources :s3_policies, only: [:new]

    get 'livestream' => 'application#livestream'
  end
end
