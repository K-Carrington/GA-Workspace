Rails.application.routes.draw do
  root 'flowers#index'

  get 'flowers/' => 'flowers#new'

  post 'flowers/' => 'flowers#create'

  get 'flowers/:id' => 'flowers#show', as: :flower

  delete 'flowers/:id' => 'flowers#destroy', as: :delete_flower

  get 'flowers/:id/edit' => 'flowers#edit', as: :edit_flower

  patch 'flowers/:id/' => 'flowers#update'
end
