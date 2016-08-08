Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :projects
    resources :images
    resources :descriptions
    resources :users
    resource :session, only: [:create, :show, :destroy, :current_user]
  end
end
