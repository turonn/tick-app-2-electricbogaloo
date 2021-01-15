Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
  resources :games, except: [:delete]
  resources :tickets, only: [:show, :index]
  resources :users, except: [:delete]
end
