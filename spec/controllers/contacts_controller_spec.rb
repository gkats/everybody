require 'spec_helper'

describe ContactsController do
  before :each do
    create_list(:contact, 2)
  end

  it 'index should return all contacts' do
    get 'index', format: :json
    JSON.parse(response.body).length.should eq 2
  end
end
