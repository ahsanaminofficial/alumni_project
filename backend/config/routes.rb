Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "user#index"

  resources :user, only: [:index, :create, :new, :edit, :update, :destroy, :show]
  post "/user/signin", to: "user#signin"
end
