Everybody::Application.routes.draw do
  root to: 'main#index'

  scope 'api' do
    resources :contacts, except: [:show]
  end

  if Rails.env.development? || Rails.env.test?
    Rails.application.routes.draw do
      mount Jasminerice::Engine => "/jasmine"
    end
  end

  match '*path', :to => 'main#index'
end
