Wdi10RailsDemoAngularMine::Application.routes.draw do
  resources :products

  get "main/index"
  root "main#index"
end
