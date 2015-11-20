Rails.application.routes.draw do

  root 'puns#index'

  # need aliases at the end of some of these lines
 
  post 'puns/' => 'puns#create', as: :create_pun
  delete 'puns/:id' => 'puns#destroy', as: :delete_pun


  resources :users
  delete 'users/:id' => 'users#destroy', as: :delete_user
 
  delete 'translations/:id' => 'translations#destroy', as: :delete_translation
 
  get '/vote' => 'votes#create'
  get '/unvote' => 'votes#destroy'

  #session routes
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy', as: :logout
  resources :sessions, only: [:new, :create]

  resources :puns do
    resources :translations, except: :destroy
  end

end
