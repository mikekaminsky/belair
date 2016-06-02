Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :episodes, only: [:create, :show, :update, :destroy] do
      collection do
        get 'random'
      end
    end
    resources :shows, except: [:new]
    resources :s3_policies, only: [:new]

    get 'livestream' => 'application#livestream'
    get 'admin_shows' => 'shows#admin_index'
  end

  get '/archive/*path' => 'application#old_site'
end
