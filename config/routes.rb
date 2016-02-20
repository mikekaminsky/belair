Rails.application.routes.draw do
  root 'application#home'

  scope path: :api do
    resources :shows, only: [:create, :index, :show], path: 'shows'
  end
end
