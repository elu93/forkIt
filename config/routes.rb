Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :posts
  resources :restaurants do
    resources :foods
  end
end