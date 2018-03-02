Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'


  resources :users
  resources :posts
  resources :restaurants do
    resources :foods
  end
  get '/posts/all', to: 'posts#allposts'
end