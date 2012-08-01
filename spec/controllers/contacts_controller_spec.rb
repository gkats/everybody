require 'spec_helper'

describe ContactsController do
  before :each do
    create_list(:contact, 2)
  end

  it 'GET index' do
    get :index, format: :json
    response.status.should eq 200
    JSON.parse(response.body).length.should eq 2
  end

  it 'POST create failure' do
    lambda do
      post :create, { contact: { name: '', group: 'family' }, format: :json }
    end.should_not change(Contact, :count)
    response.status.should eq 422
  end

  it 'POST create success' do
    lambda do
      post :create, { contact: { name: 'Homer Simpson', group: 'family' }, format: :json }
    end.should change(Contact, :count).by(1)
    response.status.should eq 201
  end
end
