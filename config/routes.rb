Everybody::Application.routes.draw do

  root to: 'main#index'
  
  match '*path', :to => 'main#index'
end
