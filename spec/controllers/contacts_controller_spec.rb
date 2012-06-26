require 'spec_helper'

describe ContactsController do
  before do
    create_list(:contact, 2)
  end
  
  it 'GET index' do
    get :index, format: :json
    response.status.should eq 200
    response.body.should include 'John Doe'
  end
    
  it 'POST create' do
    contact = build(:invalid_contact)
    count = Contact.count
    post :create, { contact: { name: '', group: 'friends' }, format: :json }
    response.status.should eq 422
    count.should eq Contact.count
    
    contact.name = 'John Smith'
    post :create, { contact: { name: 'John Smith', group: 'friends' }, format: :json }
    response.status.should eq 201
    response.body.should include 'John Smith'
    Contact.count.should eq count + 1 
  end
  
  it 'GET new' do
    get :new, format: :json
    response.status.should eq 200
    response.body.split(',').each do |attribute|
      attribute.should include 'null'
    end
  end
  
  it 'GET edit' do
    expect { get :edit, id: 0, format: 'json' }.to raise_error
    
    get :edit, { id: Contact.first.id, format: :json }
    response.status.should eq 200
    response.body.should include 'John Doe'
  end
  
  it 'PUT edit' do
    put :update, { id: 1, contact: { name: '' }, format: :json }
    response.status.should eq 422
    Contact.find(1).name.should eq 'John Doe'
    
    put :update, { id: 1, contact: { name: 'John Deery' }, format: :json }
    response.status.should eq 204
    Contact.find(1).name.should eq 'John Deery'
  end
  
  it 'delete destroy' do
    count = Contact.count
    id = Contact.last.id
    delete :destroy, { id: id, format: :json }
    response.status.should eq 204
    Contact.count.should eq count - 1
    expect { Contact.find(id) }.to raise_error
  end
end
