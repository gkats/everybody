Everybody::Application.routes.draw do
  
  scope 'api' do
    resources :contacts do
      resources :phones, only: :index
      resources :emails, only: :index
    end
  end

  root :to => 'main#index'
  
  match '*path', :to => 'main#index'
  
end
