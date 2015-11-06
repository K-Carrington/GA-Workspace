Rails.application.routes.draw do

  root 'puns#index'

  #get '/users/:id/delete' => 'users#confirm_destroy', as: :delete_user
  #get '/users/:id/confirm_delete' => 'users#destroy', as: :confirm_delete_user

  
# May need the aliases at the end of some of these lines

  # get 'puns/' => 'puns#new'
  post 'puns/' => 'puns#create', as: :create_pun
  # get 'puns/:id' => 'puns#show', as: :pun
  # #get '/puns' => 'puns#index'
  delete 'puns/:id' => 'puns#destroy', as: :delete_pun
  # #get '/puns/:id/delete' => 'puns#confirm_destroy', as: :delete_pun
  # #get '/puns/:id/confirm_delete' => 'puns#destroy', as: :confirm_delete_pun
  # get  'puns/:id/edit' => 'puns#edit', as: :edit_pun
  # patch 'puns/:id/' => 'puns#update'

  resources :users
  delete 'users/:id' => 'users#destroy', as: :delete_user
  #get '/users/:id/edit' => "user#edit", as: :edit_user
  #resources :users, except: :destroy do
  #  resources :puns, only: :index
  #end

  #get '/translations' => 'translations#index'
  #get '/translations/:id' => 'translations#show', as: :translation
  #get '/translations/:id/delete' => 'translations#destroy', as: :delete_translation
  # get '/puns/:id/translations/' => 'translations#new', as: :translation
  # post '/puns/:id/translations' => 'translations#create', as: :create_translation
  ###post '/puns/:id/translations' => 'translations#translate', as: :translate
      #the above was causing the other post translations route to not work
  delete 'translations/:id' => 'translations#destroy', as: :delete_translation
  # get  '/translations/:id/edit' => 'translations#edit', as: :edit_translation
  # put 'translations/:id' => 'translations#update'

  get '/vote' => 'votes#create'
  get '/unvote' => 'votes#destroy'

  #session routes
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy', as: :logout
  resources :sessions, only: [:new, :create]

  #Tony's
  resources :puns do
    resources :translations, except: :destroy
  end


end
